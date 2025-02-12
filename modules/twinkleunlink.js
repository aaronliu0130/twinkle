// <nowiki>


(function($) {


/*
 ****************************************
 *** twinkleunlink.js: Unlink module
 ****************************************
 * Mode of invocation:     Tab ("Unlink")
 * Active on:              Non-special pages, except Wikipedia:Sandbox
 */

Twinkle.unlink = function twinkleunlink() {
	if (mw.config.get('wgNamespaceNumber') < 0 || mw.config.get('wgPageName') === Twinkle.getPref('sandboxPage') || !Morebits.userIsSysop) {
		return;
	}
	Twinkle.addPortletLink(Twinkle.unlink.callback, wgULS('消链', '消連'), 'tw-unlink', wgULS('取消到本页的链接', '取消到本頁的連結'));
};

// the parameter is used when invoking unlink from admin speedy
Twinkle.unlink.callback = function(presetReason) {
	var fileSpace = mw.config.get('wgNamespaceNumber') === 6;

	var Window = new Morebits.simpleWindow(600, 440);
	Window.setTitle(wgULS('取消链入', '取消連入') + (fileSpace ? wgULS('和文件使用', '和檔案使用') : ''));
	Window.setScriptName('Twinkle');
	Window.addFooterLink(wgULS('链入设置', '連入設定'), 'WP:TW/PREF#unlink');
	Window.addFooterLink(wgULS('Twinkle帮助', 'Twinkle說明'), 'WP:TW/DOC#unlink');

	var form = new Morebits.quickForm(Twinkle.unlink.callback.evaluate);

	// prepend some documentation: files are commented out, while any
	// display text is preserved for links (otherwise the link itself is used)
	var linkTextBefore = Morebits.htmlNode('code', '[[' + (fileSpace ? ':' : '') + Morebits.pageNameNorm + wgULS('|链接文字]]', '|連結文字]]'));
	var linkTextAfter = Morebits.htmlNode('code', wgULS('链接文字', '連結文字'));
	var linkPlainBefore = Morebits.htmlNode('code', '[[' + Morebits.pageNameNorm + ']]');
	var linkPlainAfter;
	if (fileSpace) {
		linkPlainAfter = Morebits.htmlNode('code', '<!-- [[' + Morebits.pageNameNorm + ']] -->');
	} else {
		linkPlainAfter = Morebits.htmlNode('code', Morebits.pageNameNorm);
	}
	[linkTextBefore, linkTextAfter, linkPlainBefore, linkPlainAfter].forEach(function(node) {
		node.style.fontFamily = 'monospace';
		node.style.fontStyle = 'normal';
	});

	form.append({
		type: 'div',
		style: 'margin-bottom: 0.5em',
		label: [
			wgULS('这个工具可以取消所有指向该页的链接（“链入”）', '這個工具可以取消所有指向該頁的連結（「連入」）') +
				(fileSpace ? wgULS('，或通过加入<!-- -->注释标记隐藏所有对此文件的使用', '，或透過加入<!-- -->注釋標記隱藏所有對此檔案的使用') : '') +
				'。例如：',
			linkTextBefore, wgULS('将会变成', '將會變成'), linkTextAfter, '，',
			linkPlainBefore, wgULS('将会变成', '將會變成'), linkPlainAfter, wgULS('。请小心使用。', '。請小心使用。')
		]
	});

	form.append({
		type: 'input',
		name: 'reason',
		label: '理由：',
		value: presetReason ? presetReason : '',
		size: 60
	});

	var query = {
		action: 'query',
		list: 'backlinks',
		bltitle: mw.config.get('wgPageName'),
		bllimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
		blnamespace: Twinkle.getPref('unlinkNamespaces'),
		rawcontinue: true,
		format: 'json'
	};
	if (fileSpace) {
		query.list += '|imageusage';
		query.iutitle = query.bltitle;
		query.iulimit = query.bllimit;
		query.iunamespace = query.blnamespace;
	} else {
		query.blfilterredir = 'nonredirects';
	}
	var wikipedia_api = new Morebits.wiki.api(wgULS('抓取链入', '抓取連入'), query, Twinkle.unlink.callbacks.display.backlinks);
	wikipedia_api.params = { form: form, Window: Window, image: fileSpace };
	wikipedia_api.post();

	var root = document.createElement('div');
	root.style.padding = '15px';  // just so it doesn't look broken
	Morebits.status.init(root);
	wikipedia_api.statelem.status(wgULS('加载中…', '載入中…'));
	Window.setContent(root);
	Window.display();
};

Twinkle.unlink.callback.evaluate = function twinkleunlinkCallbackEvaluate(event) {
	var form = event.target;
	var input = Morebits.quickForm.getInputData(form);

	if (!input.reason) {
		alert(wgULS('您必须指定取消链入的理由。', '您必須指定取消連入的理由。'));
		return;
	}

	input.backlinks = input.backlinks || [];
	input.imageusage = input.imageusage || [];
	var pages = Morebits.array.uniq(input.backlinks.concat(input.imageusage));
	if (!pages.length) {
		alert(wgULS('您必须至少选择一个要取消链入的页面。', '您必須至少選擇一個要取消連入的頁面。'));
		return;
	}

	Morebits.simpleWindow.setButtonsEnabled(false);
	Morebits.status.init(form);

	var unlinker = new Morebits.batchOperation('取消' + (input.backlinks.length ? wgULS('链入', '連入') +
			(input.imageusage.length ? wgULS('与文件使用', '與檔案使用') : '') : wgULS('文件使用', '檔案使用')));
	unlinker.setOption('preserveIndividualStatusLines', true);
	unlinker.setPageList(pages);
	var params = { reason: input.reason, unlinker: unlinker };
	unlinker.run(function(pageName) {
		var wikipedia_page = new Morebits.wiki.page(pageName, wgULS('在页面“', '在頁面「') + pageName + wgULS('”中取消链入', '」中取消連入'));
		wikipedia_page.setBotEdit(true);  // unlink considered a floody operation
		wikipedia_page.setCallbackParameters($.extend({
			doBacklinks: input.backlinks.indexOf(pageName) !== -1,
			doImageusage: input.imageusage.indexOf(pageName) !== -1
		}, params));
		wikipedia_page.load(Twinkle.unlink.callbacks.unlinkBacklinks);
	});
};

Twinkle.unlink.callbacks = {
	display: {
		backlinks: function twinkleunlinkCallbackDisplayBacklinks(apiobj) {
			var response = apiobj.getResponse();
			var havecontent = false;
			var list, namespaces, i;

			if (apiobj.params.image) {
				var imageusage = response.query.imageusage.sort(Twinkle.sortByNamespace);
				list = [];
				for (i = 0; i < imageusage.length; ++i) {
					// Label made by Twinkle.generateBatchPageLinks
					list.push({ label: '', value: imageusage[i].title, checked: true });
				}
				if (!list.length) {
					apiobj.params.form.append({ type: 'div', label: wgULS('未找到文件使用。', '未找到檔案使用。') });
				} else {
					apiobj.params.form.append({ type: 'header', label: wgULS('文件使用', '檔案使用') });
					namespaces = [];
					$.each(Twinkle.getPref('unlinkNamespaces'), function(k, v) {
						namespaces.push(v === '0' ? wgULS('（条目）', '（條目）') : mw.config.get('wgFormattedNamespaces')[v]);
					});
					apiobj.params.form.append({
						type: 'div',
						label: wgULS('已选择的命名空间：', '已選擇的命名空間：') + namespaces.join('、'),
						tooltip: wgULS('您可在Twinkle属性中更改这个，请参见[[WP:TWPREFS]]', '您可在Twinkle屬性中更改這個，請參見[[WP:TWPREFS]]')
					});
					if (response['query-continue'] && response['query-continue'].imageusage) {
						apiobj.params.form.append({
							type: 'div',
							label: wgULS('显示前', '顯示前') + mw.language.convertNumber(list.length) + wgULS('个文件使用。', '個檔案使用。')
						});
					}
					apiobj.params.form.append({
						type: 'button',
						label: wgULS('全选', '全選'),
						event: function(e) {
							$(Morebits.quickForm.getElements(e.target.form, 'imageusage')).prop('checked', true);
						}
					});
					apiobj.params.form.append({
						type: 'button',
						label: wgULS('全不选', '全不選'),
						event: function(e) {
							$(Morebits.quickForm.getElements(e.target.form, 'imageusage')).prop('checked', false);
						}
					});
					apiobj.params.form.append({
						type: 'checkbox',
						name: 'imageusage',
						shiftClickSupport: true,
						list: list
					});
					havecontent = true;
				}
			}

			var backlinks = response.query.backlinks.sort(Twinkle.sortByNamespace);
			if (backlinks.length > 0) {
				list = [];
				for (i = 0; i < backlinks.length; ++i) {
					// Label made by Twinkle.generateBatchPageLinks
					list.push({ label: '', value: backlinks[i].title, checked: true });
				}
				apiobj.params.form.append({ type: 'header', label: wgULS('链入', '連入') });
				namespaces = [];
				$.each(Twinkle.getPref('unlinkNamespaces'), function(k, v) {
					namespaces.push(v === '0' ? wgULS('（条目）', '（條目）') : mw.config.get('wgFormattedNamespaces')[v]);
				});
				apiobj.params.form.append({
					type: 'div',
					label: wgULS('已选择的命名空间：', '已選擇的命名空間：') + namespaces.join('、'),
					tooltip: wgULS('您可在Twinkle属性中更改这个，请参见[[WP:TWPREFS]]', '您可在Twinkle屬性中更改這個，請參見[[WP:TWPREFS]]')
				});
				if (response['query-continue'] && response['query-continue'].backlinks) {
					apiobj.params.form.append({
						type: 'div',
						label: wgULS('显示前', '顯示前') + mw.language.convertNumber(list.length) + wgULS('个链入。', '個連入。')
					});
				}
				apiobj.params.form.append({
					type: 'button',
					label: wgULS('全选', '全選'),
					event: function(e) {
						$(Morebits.quickForm.getElements(e.target.form, 'backlinks')).prop('checked', true);
					}
				});
				apiobj.params.form.append({
					type: 'button',
					label: wgULS('全不选', '全不選'),
					event: function(e) {
						$(Morebits.quickForm.getElements(e.target.form, 'backlinks')).prop('checked', false);
					}
				});
				apiobj.params.form.append({
					type: 'checkbox',
					name: 'backlinks',
					shiftClickSupport: true,
					list: list
				});
				havecontent = true;
			} else {
				apiobj.params.form.append({ type: 'div', label: wgULS('未找到链入。', '未找到連入。') });
			}

			if (havecontent) {
				apiobj.params.form.append({ type: 'submit' });
			}

			var result = apiobj.params.form.render();
			apiobj.params.Window.setContent(result);

			Morebits.quickForm.getElements(result, 'backlinks').forEach(Twinkle.generateBatchPageLinks);
			Morebits.quickForm.getElements(result, 'imageusage').forEach(Twinkle.generateBatchPageLinks);

		}
	},
	unlinkBacklinks: function twinkleunlinkCallbackUnlinkBacklinks(pageobj) {
		var oldtext = pageobj.getPageText();
		var params = pageobj.getCallbackParameters();
		var wikiPage = new Morebits.wikitext.page(oldtext);

		var summaryText = '', warningString = false;
		var text;

		// remove image usages
		if (params.doImageusage) {
			text = wikiPage.commentOutImage(mw.config.get('wgTitle'), wgULS('注释', '注釋')).getText();
			// did we actually make any changes?
			if (text === oldtext) {
				warningString = wgULS('文件使用', '檔案使用');
			} else {
				summaryText = wgULS('注释文件使用', '注釋檔案使用');
				oldtext = text;
			}
		}

		// remove backlinks
		if (params.doBacklinks) {
			text = wikiPage.removeLink(Morebits.pageNameNorm).getText();
			// did we actually make any changes?
			if (text === oldtext) {
				warningString = warningString ? wgULS('取消链入或文件使用', '取消連入或檔案使用') : wgULS('取消链入', '取消連入');
			} else {
				summaryText = (summaryText ? summaryText + ' / ' : '') + wgULS('取消链结到', '取消連結到');
				oldtext = text;
			}
		}

		if (warningString) {
			// nothing to do!
			pageobj.getStatusElement().error(wgULS('未能在页面上找到', '未能在頁面上找到') + warningString + '。');
			params.unlinker.workerFailure(pageobj);
			return;
		}

		pageobj.setPageText(text);
		pageobj.setEditSummary(summaryText + wgULS('“', '「') + Morebits.pageNameNorm + wgULS('”：', '」：') + params.reason);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setCreateOption('nocreate');
		pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
	}
};

Twinkle.addInitCallback(Twinkle.unlink, 'unlink');
})(jQuery);


// </nowiki>
