// <nowiki>


(function($) {


/*
 ****************************************
 *** twinkleconfig.js: Preferences module
 ****************************************
 * Mode of invocation:     Adds configuration form to Wikipedia:Twinkle/Preferences,
                           and adds an ad box to the top of user subpages belonging to the
                           currently logged-in user which end in '.js'
 * Active on:              What I just said.  Yeah.

 I, [[User:This, that and the other]], originally wrote this.  If the code is misbehaving, or you have any
 questions, don't hesitate to ask me.  (This doesn't at all imply [[WP:OWN]]ership - it's just meant to
 point you in the right direction.)  -- TTO
 */


Twinkle.config = {};

Twinkle.config.watchlistEnums = {
	'yes': wgULS('永久加入到监视列表', '永久加入到監視清單'),
	'no': wgULS('不加入到监视列表', '不加入到監視清單'),
	'default': wgULS('遵守站点设置', '遵守站點設定'),
	'1 week': wgULS('加入到监视列表1周', '加入到監視清單1週'),
	'1 month': wgULS('加入到监视列表1个月', '加入到監視清單1個月'),
	'3 months': wgULS('加入到监视列表3个月', '加入到監視清單3個月'),
	'6 months': wgULS('加入到监视列表6个月', '加入到監視清單6個月')
};

Twinkle.config.commonSets = {
	csdCriteria: {
		db: wgULS('自定义理由', '自訂理由'),
		g1: 'G1', g2: 'G2', g3: 'G3', g5: 'G5', g10: 'G10', g11: 'G11', g12: 'G12', g13: 'G13', g14: 'G14', g15: 'G15', g16: 'G16',
		a1: 'A1', a2: 'A2', a3: 'A3', a5: 'A5', a6: 'A6',
		o1: 'O1', o3: 'O3', o4: 'O4', o7: 'O7', o8: 'O8',
		f1: 'F1', f3: 'F3', f4: 'F4', f5: 'F5', f6: 'F6', f7: 'F7', f8: 'F8', f9: 'F9', f10: 'F10',
		r2: 'R2', r3: 'R3', r5: 'R5', r6: 'R6', r7: 'R7', r8: 'R8'
	},
	csdCriteriaDisplayOrder: [
		'db',
		'g1', 'g2', 'g3', 'g5', 'g10', 'g11', 'g12', 'g13', 'g14', 'g15', 'g16',
		'a1', 'a2', 'a3', 'a5', 'a6',
		'o1', 'o3', 'o4', 'o7', 'o8',
		'f1', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10',
		'r2', 'r3', 'r5', 'r6', 'r7', 'r8'
	],
	csdCriteriaNotification: {
		db: wgULS('自定义理由', '自訂理由'),
		g1: 'G1', g2: 'G2', g3: 'G3', g5: 'G5', g10: 'G10', g11: 'G11', g12: 'G12', g13: 'G13', g14: 'G14', g15: 'G15', g16: 'G16',
		a1: 'A1', a2: 'A2', a3: 'A3', a5: 'A5', a6: 'A6',
		o1: 'O1', o3: 'O3', o4: 'O4', o7: 'O7', o8: 'O8',
		f1: 'F1', f3: 'F3', f4: 'F4', f5: 'F5', f6: 'F6', f7: 'F7', f8: 'F8', f9: 'F9', f10: 'F10',
		r2: 'R2', r3: 'R3', r5: 'R5', r6: 'R6', r7: 'R7', r8: 'R8'
	},
	csdCriteriaNotificationDisplayOrder: [
		'db',
		'g1', 'g2', 'g3', 'g5', 'g10', 'g11', 'g12', 'g13', 'g14', 'g15', 'g16',
		'a1', 'a2', 'a3', 'a5', 'a6',
		'o1', 'o3', 'o4', 'o7', 'o8',
		'f1', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10',
		'r2', 'r3', 'r5', 'r6', 'r7', 'r8'
	],
	csdAndDICriteria: {
		db: wgULS('自定义理由', '自訂理由'),
		g1: 'G1', g2: 'G2', g3: 'G3', g5: 'G5', g10: 'G10', g11: 'G11', g12: 'G12', g13: 'G13', g14: 'G14', g15: 'G15', g16: 'G16',
		a1: 'A1', a2: 'A2', a3: 'A3', a5: 'A5', a6: 'A6',
		o1: 'O1', o3: 'O3', o4: 'O4', o7: 'O7', o8: 'O8',
		f1: 'F1', f3: 'F3', f4: 'F4', f5: 'F5', f6: 'F6', f7: 'F7', f8: 'F8', f9: 'F9', f10: 'F10',
		r2: 'R2', r3: 'R3', r5: 'R5', r6: 'R6', r7: 'R7', r8: 'R8'
	},
	csdAndDICriteriaDisplayOrder: [
		'db',
		'g1', 'g2', 'g3', 'g5', 'g10', 'g11', 'g12', 'g13', 'g14', 'g15', 'g16',
		'a1', 'a2', 'a3', 'a5', 'a6',
		'o1', 'o3', 'o4', 'o7', 'o8',
		'f1', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10',
		'r2', 'r3', 'r5', 'r6', 'r7', 'r8'
	],
	xfdCriteria: {
		delete: wgULS('删除', '刪除'), merge: wgULS('合并', '合併'),
		vmd: wgULS('移动到维基词典', '移動到維基詞典'), vms: wgULS('移动到维基文库', '移動到維基文庫'), vmb: wgULS('移动到维基教科书', '移動到維基教科書'), vmq: wgULS('移动到维基语录', '移動到維基語錄'), vmvoy: wgULS('移动到维基导游', '移動到維基導遊'), vmv: wgULS('移动到维基学院', '移動到維基學院'),
		fwdcsd: wgULS('转交自快速删除候选', '轉交自快速刪除候選'),
		fame: wgULS('批量关注度提删', '批次關注度提刪'), substub: wgULS('批量小小作品提删', '批次小小作品提刪'), batch: wgULS('批量其他提删', '批次其他提刪'),
		ffd: wgULS('文件存废讨论', '檔案存廢討論')
	},
	xfdCriteriaDisplayOrder: [
		'delete', 'merge',
		'vmd', 'vms', 'vmb', 'vmq', 'vmvoy', 'vmv',
		'fwdcsd',
		'fame', 'substub', 'batch',
		'ffd'
	],
	namespacesNoSpecial: {
		0: wgULS('（条目）', '（條目）'),
		1: 'Talk',
		2: 'User',
		3: 'User talk',
		4: 'Wikipedia',
		5: 'Wikipedia talk',
		6: 'File',
		7: 'File talk',
		8: 'MediaWiki',
		9: 'MediaWiki talk',
		10: 'Template',
		11: 'Template talk',
		12: 'Help',
		13: 'Help talk',
		14: 'Category',
		15: 'Category talk',
		100: 'Portal',
		101: 'Portal talk',
		102: 'WikiProject',
		103: 'WikiProject talk',
		118: 'Draft',
		119: 'Draft talk',
		828: 'Module',
		829: 'Module talk'
	}
};

/**
 * Section entry format:
 *
 * {
 *   title: <human-readable section title>,
 *   module: <name of the associated module, used to link to sections>,
 *   adminOnly: <true for admin-only sections>,
 *   hidden: <true for advanced preferences that rarely need to be changed - they can still be modified by manually editing twinkleoptions.js>,
 *   preferences: [
 *     {
 *       name: <TwinkleConfig property name>,
 *       label: <human-readable short description - used as a form label>,
 *       helptip: <(optional) human-readable text (using valid HTML) that complements the description, like limits, warnings, etc.>
 *       adminOnly: <true for admin-only preferences>,
 *       type: <string|boolean|integer|enum|set|customList> (customList stores an array of JSON objects { value, label }),
 *       enumValues: <for type = "enum": a JSON object where the keys are the internal names and the values are human-readable strings>,
 *       setValues: <for type = "set": a JSON object where the keys are the internal names and the values are human-readable strings>,
 *       setDisplayOrder: <(optional) for type = "set": an array containing the keys of setValues (as strings) in the order that they are displayed>,
 *       customListValueTitle: <for type = "customList": the heading for the left "value" column in the custom list editor>,
 *       customListLabelTitle: <for type = "customList": the heading for the right "label" column in the custom list editor>
 *     },
 *     . . .
 *   ]
 * },
 * . . .
 *
 */

Twinkle.config.sections = [
	{
		title: wgULS('常规', '常規'),
		module: 'general',
		preferences: [
			// TwinkleConfig.userTalkPageMode may take arguments:
			// 'window': open a new window, remember the opened window
			// 'tab': opens in a new tab, if possible.
			// 'blank': force open in a new window, even if such a window exists
			{
				name: 'userTalkPageMode',
				label: wgULS('当要打开用户讨论页时', '當要打開使用者討論頁時'),
				type: 'enum',
				enumValues: wgULS(
					{ window: '在窗口中，替换成其它用户对话页', tab: '在新标签页中', blank: '在全新的窗口中' },
					{ window: '在當前分頁，替換成其它用戶討論頁', tab: '在新分頁中', blank: '在新視窗中' }
				)
			},

			// TwinkleConfig.dialogLargeFont (boolean)
			{
				name: 'dialogLargeFont',
				label: wgULS('在Twinkle对话框中使用大号字体', '在Twinkle對話方塊中使用大號字型'),
				type: 'boolean'
			},

			// Twinkle.config.disabledModules (array)
			{
				name: 'disabledModules',
				label: wgULS('关闭指定的Twinkle模块', '關閉指定的Twinkle模組'),
				helptip: wgULS('您在此选择的功能将无法使用，取消选择以重新启用功能。', '您在此選擇的功能將無法使用，取消選擇以重新啟用功能。'),
				type: 'set',
				setValues: { arv: wgULS('告状', '告狀'), warn: '警告', block: wgULS('封禁', '封鎖'), welcome: wgULS('欢迎', '歡迎'), talkback: '通告', speedy: wgULS('速删', '速刪'), copyvio: wgULS('侵权', '侵權'), xfd: wgULS('提删', '提刪'), image: wgULS('图权', '圖權'), protect: wgULS('保护', '保護'), tag: wgULS('标记', '標記'), stub: '小作品', diff: wgULS('差异', '差異'), unlink: wgULS('链入', '連入'), fluff: '回退' }
			},

			// Twinkle.config.disabledSysopModules (array)
			{
				name: 'disabledSysopModules',
				label: wgULS('关闭指定的Twinkle管理员模块', '關閉指定的Twinkle管理員模組'),
				helptip: wgULS('您在此选择的功能将无法使用，取消选择以重新启用功能。', '您在此選擇的功能將無法使用，取消選擇以重新啟用功能。'),
				adminOnly: true,
				type: 'set',
				setValues: { batchdelete: wgULS('批删', '批刪'), batchundelete: wgULS('批复', '批復') }
			}
		]
	},

	{
		title: wgULS('告状', '告狀'),
		module: 'arv',
		preferences: [
			{
				name: 'spiWatchReport',
				label: wgULS('发起傀儡调查时加入到监视列表', '發起傀儡調查時加入到監視清單'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			}
		]
	},

	{
		title: wgULS('封禁用户', '封鎖使用者'),
		module: 'block',
		adminOnly: true,
		preferences: [
			// TwinkleConfig.defaultToBlock64 (boolean)
			// Whether to default to just blocking the /64 on or off
			{
				name: 'defaultToBlock64',
				label: wgULS('', '對於IPv6地址，預設選擇封鎖/64段'),
				type: 'boolean'
			},

			// TwinkleConfig.defaultToPartialBlocks (boolean)
			// Whether to default partial blocks on or off
			{
				name: 'defaultToPartialBlocks',
				label: wgULS('打开封禁菜单时默认选择部分封禁', '打開封鎖選單時預設選擇部分封鎖'),
				type: 'boolean'
			},

			{
				name: 'customBlockReasonList',
				label: wgULS('自定义封禁理由', '自訂封鎖理由'),
				helptip: wgULS('您可以加入常用的封禁理由。自定义的封禁理由会出现在一般的封禁理由下方。', '您可以加入常用的封鎖理由。自訂的封鎖理由會出現在一般的封鎖理由下方。'),
				type: 'customList',
				customListValueTitle: wgULS('使用封禁模板（默认为 uw-block1）', '使用封鎖模板（預設為 uw-block1）'),
				customListLabelTitle: wgULS('“由于…您已被封禁”及封禁日志理由', '「由於…您已被封鎖」及封鎖日誌理由')
			}
		]
	},

	{
		title: wgULS('图片删除', '圖片刪除'),
		module: 'image',
		preferences: [
		// TwinkleConfig.notifyUserOnDeli (boolean)
		// If the user should be notified after placing a file deletion tag
			{
				name: 'notifyUserOnDeli',
				label: wgULS('默认勾选“通知创建者”', '預設勾選「通知建立者」'),
				type: 'boolean'
			},

			// TwinkleConfig.deliWatchPage (string)
			// The watchlist setting of the page tagged for deletion.
			{
				name: 'deliWatchPage',
				label: wgULS('标记图片时加入到监视列表', '標記圖片時加入到監視清單'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			// TwinkleConfig.deliWatchUser (string)
			// The watchlist setting of the user talk page if a notification is placed.
			{
				name: 'deliWatchUser',
				label: wgULS('标记图片时加入创建者讨论页到监视列表', '標記圖片時加入建立者討論頁到監視清單'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			}
		]
	},

	{
		title: wgULS('保护', '保護'),
		module: 'protect',
		preferences: [
			{
				name: 'watchRequestedPages',
				label: wgULS('请求保护页面时加入到监视列表', '請求保護頁面時加入到監視清單'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},
			{
				name: 'watchPPTaggedPages',
				label: wgULS('标记保护模板时加入到监视列表', '標記保護模板時加入到監視清單'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},
			{
				name: 'watchProtectedPages',
				label: wgULS('保护时加入到监视列表', '保護時加入到監視清單'),
				helptip: wgULS('如果在保护后也标记页面，则使用标记页面的参数设置。', '如果在保護後也標記頁面，則使用標記頁面的偏好設定。'),
				adminOnly: true,
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			}
		]
	},

	{
		title: '回退',  // twinklefluff module
		module: 'fluff',
		preferences: [
		// TwinkleConfig.autoMenuAfterRollback (bool)
		// Option to automatically open the warning menu if the user talk page is opened post-reversion
			{
				name: 'autoMenuAfterRollback',
				label: wgULS('在Twinkle回退后自动打开用户讨论页上的Twinkle警告菜单', '在Twinkle回退後自動打開使用者討論頁上的Twinkle警告選單'),
				helptip: wgULS('仅在选取下方对应框时才执行', '僅在選取下方對應框時才執行'),
				type: 'boolean'
			},

			// TwinkleConfig.openTalkPage (array)
			// What types of actions that should result in opening of talk page
			{
				name: 'openTalkPage',
				label: wgULS('在这些类型的回退后打开用户讨论页', '在這些類別的回退後打開使用者討論頁'),
				type: 'set',
				setValues: { agf: '善意回退', norm: wgULS('常规回退', '常規回退'), vand: wgULS('破坏回退', '破壞回退') }
			},

			// TwinkleConfig.openTalkPageOnAutoRevert (bool)
			// Defines if talk page should be opened when calling revert from contribs or recent changes pages. If set to true, openTalkPage defines then if talk page will be opened.
			{
				name: 'openTalkPageOnAutoRevert',
				label: wgULS('在从用户贡献及最近更改中发起回退时打开用户讨论页', '在從使用者貢獻及近期變更中發起回退時打開使用者討論頁'),
				helptip: wgULS('当它打开时，依赖上一个设置。', '當它打開時，依賴上一個設定。'),
				type: 'boolean'
			},

			// TwinkleConfig.rollbackInPlace (bool)
			//
			{
				name: 'rollbackInPlace',
				label: wgULS('在从用户贡献及最近更改中发起回退时不刷新页面', '在從使用者貢獻及近期變更中發起回退時不重新整理頁面'),
				helptip: wgULS('当它打开时，Twinkle将不会在从用户贡献及最近更改中发起回退时刷新页面，允许您一次性回退多个编辑。', '當它打開時，Twinkle將不會在從使用者貢獻及近期變更中發起回退時重新整理頁面，允許您一次性回退多個編輯。'),
				type: 'boolean'
			},

			// TwinkleConfig.markRevertedPagesAsMinor (array)
			// What types of actions that should result in marking edit as minor
			{
				name: 'markRevertedPagesAsMinor',
				label: wgULS('将这些类型的回退标记为小修改', '將這些類別的回退標記為小修改'),
				type: 'set',
				setValues: { agf: '善意回退', norm: wgULS('常规回退', '常規回退'), vand: wgULS('破坏回退', '破壞回退'), torev: wgULS('“恢复此版本”', '「恢復此版本」') }
			},

			// TwinkleConfig.watchRevertedPages (array)
			// What types of actions that should result in forced addition to watchlist
			{
				name: 'watchRevertedPages',
				label: wgULS('把这些类型的回退加入到监视列表', '把這些類別的回退加入到監視清單'),
				type: 'set',
				setValues: { agf: '善意回退', norm: wgULS('常规回退', '常規回退'), vand: wgULS('破坏回退', '破壞回退'), torev: wgULS('“恢复此版本”', '「恢復此版本」') }
			},
			// TwinkleConfig.watchRevertedExpiry
			// If any of the above items are selected, whether to expire the watch
			{
				name: 'watchRevertedExpiry',
				label: wgULS('当回退页面时，加入到监视列表的期限', '當回退頁面時，加入到監視清單的期限'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			// TwinkleConfig.offerReasonOnNormalRevert (boolean)
			// If to offer a prompt for extra summary reason for normal reverts, default to true
			{
				name: 'offerReasonOnNormalRevert',
				label: wgULS('常规回退时询问理由', '常規回退時詢問理由'),
				helptip: wgULS('“常规”回退是中间的那个[回退]链接。', '「常規」回退是中間的那個[回退]連結。'),
				type: 'boolean'
			},

			{
				name: 'confirmOnFluff',
				label: wgULS('回退前要求确认（所有设备）', '回退前要求確認（所有裝置）'),
				helptip: wgULS('对于使用移动设备的用户，或者意志不坚定的。', '對於使用行動裝置的使用者，或者意志不堅定的。'),
				type: 'boolean'
			},

			{
				name: 'confirmOnMobileFluff',
				label: wgULS('回退前要求确认（仅移动设备）', '回退前要求確認（僅行動裝置）'),
				helptip: wgULS('避免在移动设备意外执行回退。', '避免在行動裝置意外執行回退。'),
				type: 'boolean'
			},

			// TwinkleConfig.showRollbackLinks (array)
			// Where Twinkle should show rollback links:
			// diff, others, mine, contribs, history, recent
			// Note from TTO: |contribs| seems to be equal to |others| + |mine|, i.e. redundant, so I left it out heres
			{
				name: 'showRollbackLinks',
				label: wgULS('在这些页面上显示回退链接', '在這些頁面上顯示回退連結'),
				type: 'set',
				setValues: { diff: wgULS('差异', '差異'), history: wgULS('历史记录', '歷史記錄'), others: wgULS('其它用户的贡献', '其它使用者的貢獻'), mine: wgULS('我的贡献', '我的貢獻'), recentchanges: wgULS('最近更改', '近期變更'), recentchangeslinked: wgULS('相关更改', '相關變更') }
			},
			{
				name: 'customRevertSummary',
				label: '回退理由',
				helptip: wgULS('在查看差异时可选，仅善意回退、常规回退、恢复此版本', '在檢視差異時可選，僅善意回退、常規回退、恢復此版本'),
				type: 'customList',
				customListValueTitle: '理由',
				customListLabelTitle: wgULS('显示的文字', '顯示的文字')
			}
		]
	},

	{
		title: wgULS('共享IP标记', '共享IP標記'),
		module: 'shared',
		preferences: [
			{
				name: 'markSharedIPAsMinor',
				label: wgULS('将共享IP标记标记为小修改', '將共享IP標記標記為小修改'),
				type: 'boolean'
			}
		]
	},

	{
		title: wgULS('快速删除', '快速刪除'),
		module: 'speedy',
		preferences: [
			{
				name: 'speedySelectionStyle',
				label: wgULS('什么时候执行标记或删除', '什麼時候執行標記或刪除'),
				type: 'enum',
				enumValues: { buttonClick: wgULS('当我点“提交”时', '當我點「提交」時'), radioClick: wgULS('当我点一个选项时', '當我點一個選項時') }
			},

			// TwinkleConfig.watchSpeedyPages (array)
			// Whether to add speedy tagged pages to watchlist
			{
				name: 'watchSpeedyPages',
				label: wgULS('将以下理由加入到监视列表', '將以下理由加入到監視清單'),
				type: 'set',
				setValues: Twinkle.config.commonSets.csdCriteria,
				setDisplayOrder: Twinkle.config.commonSets.csdCriteriaDisplayOrder
			},
			// TwinkleConfig.watchSpeedyExpiry
			// If any of the above items are selected, whether to expire the watch
			{
				name: 'watchSpeedyExpiry',
				label: wgULS('当标记页面时，加入到监视列表的期限', '當標記頁面時，加入到監視清單的期限'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			// TwinkleConfig.markSpeedyPagesAsPatrolled (boolean)
			// If, when applying speedy template to page, to mark the page as patrolled (if the page was reached from NewPages)
			{
				name: 'markSpeedyPagesAsPatrolled',
				label: wgULS('标记时标记页面为已巡查（如可能）', '標記時標記頁面為已巡查（如可能）'),
				type: 'boolean'
			},

			// TwinkleConfig.notifyUserOnSpeedyDeletionNomination (array)
			// What types of actions should result that the author of the page being notified of nomination
			{
				name: 'notifyUserOnSpeedyDeletionNomination',
				label: wgULS('仅在使用以下理由时通知页面创建者', '僅在使用以下理由時通知頁面建立者'),
				helptip: wgULS('尽管您在对话框中选择通知，通知仍只会在使用这些理由时发出。', '儘管您在對話方塊中選擇通知，通知仍只會在使用這些理由時發出。'),
				type: 'set',
				setValues: Twinkle.config.commonSets.csdCriteriaNotification,
				setDisplayOrder: Twinkle.config.commonSets.csdCriteriaNotificationDisplayOrder
			},

			// TwinkleConfig.welcomeUserOnSpeedyDeletionNotification (array of strings)
			// On what types of speedy deletion notifications shall the user be welcomed
			// with a "firstarticle" notice if his talk page has not yet been created.
			{
				name: 'welcomeUserOnSpeedyDeletionNotification',
				label: wgULS('在使用以下理由时欢迎页面创建者', '在使用以下理由時歡迎頁面建立者'),
				helptip: wgULS('欢迎模板仅在用户被通知时加入，使用的模板是{{firstarticle}}。', '歡迎模板僅在使用者被通知時加入，使用的模板是{{firstarticle}}。'),
				type: 'set',
				setValues: Twinkle.config.commonSets.csdCriteriaNotification,
				setDisplayOrder: Twinkle.config.commonSets.csdCriteriaNotificationDisplayOrder
			},

			// TwinkleConfig.promptForSpeedyDeletionSummary (array of strings)
			{
				name: 'promptForSpeedyDeletionSummary',
				label: wgULS('使用以下理由删除时允许编辑删除理由', '使用以下理由刪除時允許編輯刪除理由'),
				adminOnly: true,
				type: 'set',
				setValues: Twinkle.config.commonSets.csdAndDICriteria,
				setDisplayOrder: Twinkle.config.commonSets.csdAndDICriteriaDisplayOrder
			},

			// TwinkleConfig.openUserTalkPageOnSpeedyDelete (array of strings)
			// What types of actions that should result user talk page to be opened when speedily deleting (admin only)
			{
				name: 'openUserTalkPageOnSpeedyDelete',
				label: wgULS('使用以下理由时打开用户讨论页', '使用以下理由時打開使用者討論頁'),
				adminOnly: true,
				type: 'set',
				setValues: Twinkle.config.commonSets.csdAndDICriteria,
				setDisplayOrder: Twinkle.config.commonSets.csdAndDICriteriaDisplayOrder
			},

			// TwinkleConfig.deleteTalkPageOnDelete (boolean)
			// If talk page if exists should also be deleted (CSD G8) when spedying a page (admin only)
			{
				name: 'deleteTalkPageOnDelete',
				label: wgULS('默认勾选“删除讨论页”', '預設勾選「刪除討論頁」'),
				adminOnly: true,
				type: 'boolean'
			},

			{
				name: 'deleteRedirectsOnDelete',
				label: wgULS('默认勾选“删除重定向”', '預設勾選「刪除重新導向」'),
				adminOnly: true,
				type: 'boolean'
			},

			// TwinkleConfig.deleteSysopDefaultToDelete (boolean)
			// Make the CSD screen default to "delete" instead of "tag" (admin only)
			{
				name: 'deleteSysopDefaultToDelete',
				label: wgULS('默认为直接删除而不是标记', '預設為直接刪除而不是標記'),
				helptip: wgULS('如果已放置快速删除标记，则永远默认为删除模式。', '如果已放置快速刪除標記，則永遠預設為刪除模式。'),
				adminOnly: true,
				type: 'boolean'
			},

			// TwinkleConfig.speedyWindowWidth (integer)
			// Defines the width of the Twinkle SD window in pixels
			{
				name: 'speedyWindowWidth',
				label: wgULS('快速删除对话框宽度（像素）', '快速刪除對話方塊寬度（像素）'),
				type: 'integer'
			},

			// TwinkleConfig.speedyWindowWidth (integer)
			// Defines the width of the Twinkle SD window in pixels
			{
				name: 'speedyWindowHeight',
				label: wgULS('快速删除对话框高度（像素）', '快速刪除對話方塊高度（像素）'),
				helptip: wgULS('如果您有一台很大的显示器，您可以将此调高。', '如果您有一台很大的顯示器，您可以將此調高。'),
				type: 'integer'
			},

			{
				name: 'logSpeedyNominations',
				label: wgULS('在用户空间中记录所有快速删除提名', '在使用者空間中記錄所有快速刪除提名'),
				helptip: wgULS('非管理员无法访问到已删除的贡献，用户空间日志提供了一个很好的方法来记录这些历史。', '非管理員無法存取到已刪除的貢獻，使用者空間日誌提供了一個很好的方法來記錄這些歷史。'),
				type: 'boolean'
			},
			{
				name: 'speedyLogPageName',
				label: wgULS('在此页保留日志', '在此頁保留日誌'),
				helptip: wgULS('在此框中输入子页面名称，您将在User:<i>用户名</i>/<i>子页面</i>找到CSD日志。仅在启用日志时工作。', '在此框中輸入子頁面名稱，您將在User:<i>使用者名稱</i>/<i>子頁面</i>找到CSD日誌。僅在啟用日誌時工作。'),
				type: 'string'
			},
			{
				name: 'noLogOnSpeedyNomination',
				label: wgULS('在使用以下理由时不做记录', '在使用以下理由時不做記錄'),
				type: 'set',
				setValues: Twinkle.config.commonSets.csdAndDICriteria,
				setDisplayOrder: Twinkle.config.commonSets.csdAndDICriteriaDisplayOrder
			},

			{
				name: 'enlargeG11Input',
				label: wgULS('扩大CSD G11的按钮', '擴大CSD G11的按鈕'),
				helptip: wgULS('扩为默认的两倍大。', '擴為預設的兩倍大。'),
				type: 'boolean'
			}
		]
	},

	{
		title: wgULS('标记', '標記'),
		module: 'tag',
		preferences: [
			{
				name: 'watchTaggedPages',
				label: wgULS('标记时加入到监视列表', '標記時加入到監視清單'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},
			{
				name: 'watchMergeDiscussions',
				label: wgULS('加入合并讨论时监视讨论页', '加入合併討論時監視討論頁'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},
			{
				name: 'markTaggedPagesAsMinor',
				label: wgULS('将标记标记为小修改', '將標記標記為小修改'),
				type: 'boolean'
			},
			{
				name: 'markTaggedPagesAsPatrolled',
				label: wgULS('默认勾选“标记页面为已巡查”框', '預設勾選「標記頁面為已巡查」框'),
				type: 'boolean'
			},
			{
				name: 'groupByDefault',
				label: wgULS('默认勾选“合并到{{multiple issues}}”复选框', '預設勾選「合併到{{multiple issues}}」核取方塊'),
				type: 'boolean'
			},
			{
				name: 'tagArticleSortOrder',
				label: wgULS('条目标记的默认查看方式', '條目標記的預設檢視方式'),
				type: 'enum',
				enumValues: { cat: wgULS('按类型', '按類別'), alpha: '按字母' }
			},
			{
				name: 'customTagList',
				label: wgULS('自定义条目维护标记', '自訂條目維護標記'),
				helptip: wgULS('这些会出现在列表的末尾。', '這些會出現在列表的末尾。'),
				type: 'customList',
				customListValueTitle: wgULS('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: wgULS('显示的文字', '顯示的文字')
			},
			{
				name: 'customFileTagList',
				label: wgULS('自定义文件维护标记', '自訂檔案維護標記'),
				helptip: wgULS('这些会出现在列表的末尾。', '這些會出現在列表的末尾。'),
				type: 'customList',
				customListValueTitle: wgULS('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: wgULS('显示的文字', '顯示的文字')
			},
			{
				name: 'customRedirectTagList',
				label: wgULS('自定义重定向维护标记', '自訂重新導向維護標記'),
				helptip: wgULS('这些会出现在列表的末尾。', '這些會出現在列表的末尾。'),
				type: 'customList',
				customListValueTitle: wgULS('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: wgULS('显示的文字', '顯示的文字')
			}
		]
	},

	{
		title: '小作品',
		module: 'stub',
		preferences: [
			{
				name: 'watchStubbedPages',
				label: wgULS('标记时加入到监视列表', '標記時加入到監視清單'),
				type: 'boolean'
			},
			{
				name: 'markStubbedPagesAsMinor',
				label: wgULS('将小作品标记为小修改', '將小作品標記為小修改'),
				type: 'boolean'
			},
			{
				name: 'markStubbedPagesAsPatrolled',
				label: wgULS('默认勾选“标记页面为已巡查”框', '預設勾選「標記頁面為已巡查」框'),
				type: 'boolean'
			},
			{
				name: 'stubArticleSortOrder',
				label: wgULS('条目小作品的默认查看方式', '條目小作品的預設檢視方式'),
				type: 'enum',
				enumValues: { cat: wgULS('按类型', '按類別'), alpha: '按字母' }
			},
			{
				name: 'customStubList',
				label: wgULS('自定义条目小作品标记', '自訂條目小作品標記'),
				helptip: wgULS('这些会出现在列表的末尾。', '這些會出現在列表的末尾。'),
				type: 'customList',
				customListValueTitle: wgULS('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: wgULS('显示的文字', '顯示的文字')
			}
		]
	},

	{
		title: wgULS('回复', '回覆'),
		module: 'talkback',
		preferences: [
			{
				name: 'markTalkbackAsMinor',
				label: wgULS('将回复标记为小修改', '將回覆標記為小修改'),
				type: 'boolean'
			},
			{
				name: 'insertTalkbackSignature',
				label: wgULS('回复时加入签名', '回覆時加入簽名'),
				helptip: wgULS('Flow页除外。', 'Flow頁除外。'),
				type: 'boolean'
			},
			{
				name: 'talkbackHeading',
				label: wgULS('回复所用的小节标题', '回覆所用的小節標題'),
				type: 'string'
			},
			{
				name: 'mailHeading',
				label: wgULS('“有新邮件”所用的小节标题', '「有新郵件」所用的小節標題'),
				type: 'string'
			}
		]
	},

	{
		title: wgULS('取消链入', '取消連入'),
		module: 'unlink',
		preferences: [
		// TwinkleConfig.unlinkNamespaces (array)
		// In what namespaces unlink should happen, default in 0 (article) and 100 (portal)
			{
				name: 'unlinkNamespaces',
				label: wgULS('取消以下命名空间中的反向链接', '取消以下命名空間中的反向連結'),
				helptip: wgULS('请避免选择讨论页，因这样会导致Twinkle试图修改讨论存档。', '請避免選擇討論頁，因這樣會導致Twinkle試圖修改討論存檔。'),
				type: 'set',
				setValues: Twinkle.config.commonSets.namespacesNoSpecial
			}
		]
	},

	{
		title: wgULS('警告用户', '警告使用者'),
		module: 'warn',
		preferences: [
		// TwinkleConfig.defaultWarningGroup (int)
		// if true, watch the page which has been dispatched an warning or notice, if false, default applies
			{
				name: 'defaultWarningGroup',
				label: wgULS('默认警告级别', '預設警告級別'),
				type: 'enum',
				enumValues: {
					1: '1：提醒',
					2: '2：注意',
					3: '3：警告',
					4: wgULS('4：最后警告', '4：最後警告'),
					5: '4im：唯一警告',
					6: wgULS('单层级提醒', '單層級提醒'),
					7: wgULS('单层级警告', '單層級警告'),
					// 8 was used for block templates before #260
					9: wgULS('自定义警告', '自訂警告'),
					10: '所有警告模板',
					11: wgULS('自动选择层级（1-4）', '自動選擇層級（1-4）')
				}
			},

			// TwinkleConfig.combinedSingletMenus (boolean)
			// if true, show one menu with both single-issue notices and warnings instead of two separately
			{
				name: 'combinedSingletMenus',
				label: wgULS('将两个单层级菜单合并成一个', '將兩個單層級選單合併成一個'),
				helptip: wgULS('当启用此选项时，无论默认警告级别选择单层级通知或单层级警告皆属于此项。', '當啟用此選項時，無論預設警告級別選擇單層級通知或單層級警告皆屬於此項。'),
				type: 'boolean'
			},

			// TwinkleConfig.showSharedIPNotice may take arguments:
			// true: to show shared ip notice if an IP address
			// false: to not print the notice
			{
				name: 'showSharedIPNotice',
				label: wgULS('在IP讨论页上显示附加信息', '在IP討論頁上顯示附加資訊'),
				helptip: '使用的模板是{{SharedIPAdvice}}。',
				type: 'boolean'
			},

			// TwinkleConfig.watchWarnings (string)
			// Watchlist setting for the page which has been dispatched an warning or notice
			{
				name: 'watchWarnings',
				label: wgULS('警告时加入用户讨论页到监视列表', '警告時加入使用者討論頁到監視清單'),
				helptip: wgULS('注意：如果对方使用Flow，对应讨论串总会加到监视列表中。', '注意：如果對方使用Flow，對應討論串總會加到監視清單中。'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			// TwinkleConfig.oldSelect (boolean)
			// if true, use the native select menu rather the jquery chosen-based one
			{
				name: 'oldSelect',
				label: wgULS('使用不可搜索的经典菜单', '使用不可搜尋的經典選單'),
				type: 'boolean'
			},

			{
				name: 'customWarningList',
				label: wgULS('自定义警告模板', '自訂警告模板'),
				helptip: wgULS('您可以加入模板或用户子页面。自定义警告会出现在警告对话框中“自定义警告”一节。', '您可以加入模板或使用者子頁面。自訂警告會出現在警告對話方塊中「自訂警告」一節。'),
				type: 'customList',
				customListValueTitle: wgULS('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: wgULS('显示的文字（和编辑摘要）', '顯示的文字（和編輯摘要）')
			}
		]
	},

	{
		title: wgULS('欢迎用户', '歡迎使用者'),
		module: 'welcome',
		preferences: [
			{
				name: 'topWelcomes',
				label: wgULS('将欢迎放在用户讨论页的最上方', '將歡迎放在使用者討論頁的最上方'),
				type: 'boolean'
			},
			{
				name: 'watchWelcomes',
				label: wgULS('在欢迎时将用户讨论页加入监视列表', '在歡迎時將使用者討論頁加入監視清單'),
				helptip: wgULS('您将可以关注新手如何与他人协作，并能够适时地提供帮助。', '您將可以關注新手如何與他人協作，並能夠適時地提供幫助。'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},
			/*
			{
				name: 'insertUsername',
				label: wgULS('Add your username to the template (where applicable)'),
				helptip: "Some welcome templates have an opening sentence like \"Hi, I'm &lt;username&gt;. Welcome\" etc. If you turn off this option, these templates will not display your username in that way.",
				type: 'boolean'
			},
			*/
			{
				name: 'quickWelcomeMode',
				label: wgULS('在差异页面单击“欢迎”链接时将会', '在差異頁面點擊「歡迎」連結時將會'),
				helptip: wgULS('如果您选择自动欢迎，将会使用下方指定的模板。', '如果您選擇自動歡迎，將會使用下方指定的模板。'),
				type: 'enum',
				enumValues: { auto: wgULS('自动欢迎', '自動歡迎'), norm: wgULS('要求您选择模板', '要求您選擇模板') }
			},
			{
				name: 'quickWelcomeTemplate',
				label: wgULS('自动欢迎时所使用的模板', '自動歡迎時所使用的模板'),
				helptip: wgULS('输入欢迎模板的名称，不包含大括号，将会加入给定的条目链接。', '輸入歡迎模板的名稱，不包含大括號，將會加入給定的條目連結。'),
				type: 'string'
			},
			{
				name: 'customWelcomeList',
				label: wgULS('自定义欢迎模板', '自訂歡迎模板'),
				helptip: wgULS('您可以加入其他欢迎模板，或是欢迎模板的用户子页面（以User:开头）。别忘了这些模板会在用户讨论页上替换引用。', '您可以加入其他歡迎模板，或是歡迎模板的使用者子頁面（以User:開頭）。別忘了這些模板會在使用者討論頁上替換引用。'),
				type: 'customList',
				customListValueTitle: wgULS('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: wgULS('显示的文字', '顯示的文字')
			},
			{
				name: 'customWelcomeSignature',
				label: wgULS('在自定义模板中自动签名', '在自訂模板中自動簽名'),
				helptip: wgULS('如果您的自动欢迎模板包含内置签名，请关闭此项。', '如果您的自動歡迎模板包含內建簽名，請關閉此項。'),
				type: 'boolean'
			}
		]
	},

	{
		title: wgULS('存废讨论', '存廢討論'),
		module: 'xfd',
		preferences: [
			{
				name: 'logXfdNominations',
				label: wgULS('在用户空间中记录所有存废讨论提名', '在使用者空間中記錄所有存廢討論提名'),
				helptip: wgULS('该日志供您追踪所有通过Twinkle提交的存废讨论', '該日誌供您追蹤所有透過Twinkle提交的存廢討論'),
				type: 'boolean'
			},
			{
				name: 'xfdLogPageName',
				label: wgULS('在此页保留日志', '在此頁保留日誌'),
				helptip: wgULS('在此框中输入子页面名称，您将在User:<i>用户名</i>/<i>子页面</i>找到XFD日志。仅在启用日志时工作。', '在此框中輸入子頁面名稱，您將在User:<i>使用者名稱</i>/<i>子頁面</i>找到XFD日誌。僅在啟用日誌時工作。'),
				type: 'string'
			},
			{
				name: 'noLogOnXfdNomination',
				label: wgULS('在使用以下理由时不做记录', '在使用以下理由時不做記錄'),
				type: 'set',
				setValues: Twinkle.config.commonSets.xfdCriteria,
				setDisplayOrder: Twinkle.config.commonSets.xfdCriteriaDisplayOrder
			},

			// TwinkleConfig.xfdWatchPage (string)
			// The watchlist setting of the page being nominated for XfD.
			{
				name: 'xfdWatchPage',
				label: wgULS('加入提名的页面到监视列表', '加入提名的頁面到監視清單'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			// TwinkleConfig.xfdWatchDiscussion (string)
			// The watchlist setting of the newly created XfD page (for those processes that create discussion pages for each nomination),
			// or the list page for the other processes.
			{
				name: 'xfdWatchDiscussion',
				label: wgULS('加入存废讨论页到监视列表', '加入存廢討論頁到監視清單'),
				helptip: wgULS('当日的页面。', '當日的頁面。'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			// TwinkleConfig.xfdWatchUser (string)
			// The watchlist setting of the user talk page if they receive a notification.
			{
				name: 'xfdWatchUser',
				label: wgULS('加入创建者讨论页到监视列表（在通知时）', '加入建立者討論頁到監視清單（在通知時）'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			{
				name: 'markXfdPagesAsPatrolled',
				label: wgULS('标记时标记页面为已巡查（如可能）', '標記時標記頁面為已巡查（如可能）'),
				helptip: wgULS('基于技术原因，页面仅会在由Special:NewPages到达时被标记为已巡查。', '基於技術原因，頁面僅會在由Special:NewPages到達時被標記為已巡查。'),
				type: 'boolean'
			},

			{
				name: 'FwdCsdToXfd',
				label: wgULS('提删类型增加转交自快速删除候选', '提刪類別增加轉交自快速刪除候選'),
				helptip: wgULS('请确保您充分了解[[Wikipedia:快速删除方针]]才开启此功能。', '請確保您充分了解[[Wikipedia:快速刪除方針]]才開啟此功能。'),
				type: 'boolean'
			},

			{
				name: 'afdDefaultCategory',
				label: wgULS('默认提删类型', '預設提刪類別'),
				helptip: wgULS('若选择“相同于上次选择”将使用localStorage来记忆。', '若選擇「相同於上次選擇」將使用localStorage來記憶。'),
				type: 'enum',
				enumValues: { delete: wgULS('删除', '刪除'), same: wgULS('相同于上次选择', '相同於上次選擇') }
			},

			{
				name: 'afdFameDefaultReason',
				label: wgULS('默认关注度提删理由', '預設關注度提刪理由'),
				helptip: wgULS('用于批量提删。', '用於批次提刪。'),
				type: 'string'
			},

			{
				name: 'afdSubstubDefaultReason',
				label: wgULS('默认小小作品提删理由', '預設小小作品提刪理由'),
				helptip: wgULS('用于批量提删。', '用於批次提刪。'),
				type: 'string'
			}

		]
	},

	{
		title: wgULS('关闭存废讨论', '關閉存廢討論'),
		module: 'close',
		preferences: [
			{
				name: 'XfdClose',
				label: wgULS('在存废讨论显示关闭讨论按钮', '在存廢討論顯示關閉討論按鈕'),
				helptip: wgULS('请确保您充分了解[[Wikipedia:关闭存废讨论指引]]才开启此功能。', '請確保您充分了解[[Wikipedia:關閉存廢討論指引]]才開啟此功能。'),
				type: 'enum',
				enumValues: { hide: wgULS('不显示', '不顯示'), nonadminonly: wgULS('只包含非管理员可使用选项', '只包含非管理員可使用選項'), all: wgULS('显示所有选项', '顯示所有選項') }
			}
		]

	},

	{
		title: wgULS('侵犯著作权', '侵犯著作權'),
		module: 'copyvio',
		preferences: [
			// TwinkleConfig.copyvioWatchPage (string)
			// The watchlist setting of the page being nominated for XfD.
			{
				name: 'copyvioWatchPage',
				label: wgULS('加入提报的页面到监视列表', '加入提報的頁面到監視清單'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			// TwinkleConfig.copyvioWatchUser (string)
			// The watchlist setting of the user if he receives a notification.
			{
				name: 'copyvioWatchUser',
				label: wgULS('加入创建者讨论页到监视列表（在通知时）', '加入建立者討論頁到監視清單（在通知時）'),
				type: 'enum',
				enumValues: Twinkle.config.watchlistEnums
			},

			// TwinkleConfig.markCopyvioPagesAsPatrolled (boolean)
			// If, when applying copyvio template to page, to mark the page as patrolled (if the page was reached from NewPages)
			{
				name: 'markCopyvioPagesAsPatrolled',
				label: wgULS('标记时标记页面为已巡查（如可能）', '標記時標記頁面為已巡查（如可能）'),
				helptip: wgULS('基于技术原因，页面仅会在由Special:NewPages到达时被标记为已巡查。', '基於技術原因，頁面僅會在由Special:NewPages到達時被標記為已巡查。'),
				type: 'boolean'
			}

		]
	},

	{
		title: wgULS('隐藏', '隱藏'),
		hidden: true,
		preferences: [
			// twinkle.js: portlet setup
			{
				name: 'portletArea',
				type: 'string'
			},
			{
				name: 'portletId',
				type: 'string'
			},
			{
				name: 'portletName',
				type: 'string'
			},
			{
				name: 'portletType',
				type: 'string'
			},
			{
				name: 'portletNext',
				type: 'string'
			},
			// twinklefluff.js: defines how many revision to query maximum, maximum possible is 50, default is 50
			{
				name: 'revertMaxRevisions',
				type: 'integer'
			},
			// twinklebatchdelete.js: How many pages should be processed maximum
			{
				name: 'batchMax',
				type: 'integer',
				adminOnly: true
			},
			// How many pages should be processed at a time by deprod and batchdelete/protect/undelete
			{
				name: 'batchChunks',
				type: 'integer',
				adminOnly: true
			}
		]
	}

]; // end of Twinkle.config.sections


Twinkle.config.init = function twinkleconfigInit() {

	// create the config page at Twinkle.getPref('configPage')
	if (mw.config.get('wgPageName') === Twinkle.getPref('configPage') &&
			mw.config.get('wgAction') === 'view') {

		if (!document.getElementById('twinkle-config')) {
			return;  // maybe the page is misconfigured, or something - but any attempt to modify it will be pointless
		}

		// set style (the url() CSS function doesn't seem to work from wikicode - ?!)
		document.getElementById('twinkle-config-titlebar').style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAMAAAB%2FqqA%2BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEhQTFRFr73ZobTPusjdsMHZp7nVwtDhzNbnwM3fu8jdq7vUt8nbxtDkw9DhpbfSvMrfssPZqLvVztbno7bRrr7W1d%2Fs1N7qydXk0NjpkW7Q%2BgAAADVJREFUeNoMwgESQCAAAMGLkEIi%2FP%2BnbnbpdB59app5Vdg0sXAoMZCpGoFbK6ciuy6FX4ABAEyoAef0BXOXAAAAAElFTkSuQmCC)';

		var contentdiv = document.getElementById('twinkle-config-content');
		contentdiv.textContent = '';  // clear children

		// let user know about possible conflict with monobook.js/vector.js file
		// (settings in that file will still work, but they will be overwritten by twinkleoptions.js settings)
		var contentnotice = document.createElement('p');
		// I hate innerHTML, but this is one thing it *is* good for...
		contentnotice.innerHTML = '<b>' + wgULS('在这里修改您的参数设置之前，', '在這裡修改您的偏好設定之前，') + '</b>' + wgULS('确认您已移除了', '確認您已移除了') + '<a href="' + mw.util.getUrl('Special:MyPage/skin.js') + '" title="Special:MyPage/skin.js">' + wgULS('用户JavaScript文件', '使用者JavaScript檔案') + '</a>' + wgULS('中任何旧的', '中任何舊的') + '<code>FriendlyConfig</code>' + wgULS('设置。', '設定。');
		contentdiv.appendChild(contentnotice);

		// look and see if the user does in fact have any old settings in their skin JS file
		var skinjs = new Morebits.wiki.page('User:' + mw.config.get('wgUserName') + '/' + mw.config.get('skin') + '.js');
		skinjs.setCallbackParameters(contentnotice);
		skinjs.load(Twinkle.config.legacyPrefsNotice);

		// start a table of contents
		var toctable = document.createElement('div');
		toctable.className = 'toc';
		toctable.style.marginLeft = '0.4em';
		// create TOC title
		var toctitle = document.createElement('div');
		toctitle.id = 'toctitle';
		var toch2 = document.createElement('h2');
		toch2.textContent = wgULS('目录 ', '目錄 ');
		toctitle.appendChild(toch2);
		// add TOC show/hide link
		var toctoggle = document.createElement('span');
		toctoggle.className = 'toctoggle';
		toctoggle.appendChild(document.createTextNode('['));
		var toctogglelink = document.createElement('a');
		toctogglelink.className = 'internal';
		toctogglelink.setAttribute('href', '#tw-tocshowhide');
		toctogglelink.textContent = wgULS('隐藏', '隱藏');
		toctoggle.appendChild(toctogglelink);
		toctoggle.appendChild(document.createTextNode(']'));
		toctitle.appendChild(toctoggle);
		toctable.appendChild(toctitle);
		// create item container: this is what we add stuff to
		var tocul = document.createElement('ul');
		toctogglelink.addEventListener('click', function twinkleconfigTocToggle() {
			var $tocul = $(tocul);
			$tocul.toggle();
			if ($tocul.find(':visible').length) {
				toctogglelink.textContent = wgULS('隐藏', '隱藏');
			} else {
				toctogglelink.textContent = wgULS('显示', '顯示');
			}
		}, false);
		toctable.appendChild(tocul);
		contentdiv.appendChild(toctable);

		var contentform = document.createElement('form');
		contentform.setAttribute('action', 'javascript:void(0)');  // was #tw-save - changed to void(0) to work around Chrome issue
		contentform.addEventListener('submit', Twinkle.config.save, true);
		contentdiv.appendChild(contentform);

		var container = document.createElement('table');
		container.style.width = '100%';
		contentform.appendChild(container);

		$(Twinkle.config.sections).each(function(sectionkey, section) {
			if (section.hidden || (section.adminOnly && !Morebits.userIsSysop)) {
				return true;  // i.e. "continue" in this context
			}

			// add to TOC
			var tocli = document.createElement('li');
			tocli.className = 'toclevel-1';
			var toca = document.createElement('a');
			toca.setAttribute('href', '#' + section.module);
			toca.appendChild(document.createTextNode(section.title));
			tocli.appendChild(toca);
			tocul.appendChild(tocli);

			var row = document.createElement('tr');
			var cell = document.createElement('td');
			cell.setAttribute('colspan', '3');
			var heading = document.createElement('h4');
			heading.style.borderBottom = '1px solid gray';
			heading.style.marginTop = '0.2em';
			heading.id = section.module;
			heading.appendChild(document.createTextNode(section.title));
			cell.appendChild(heading);
			row.appendChild(cell);
			container.appendChild(row);

			var rowcount = 1;  // for row banding

			// add each of the preferences to the form
			$(section.preferences).each(function(prefkey, pref) {
				if (pref.adminOnly && !Morebits.userIsSysop) {
					return true;  // i.e. "continue" in this context
				}

				row = document.createElement('tr');
				row.style.marginBottom = '0.2em';
				// create odd row banding
				if (rowcount++ % 2 === 0) {
					row.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
				}
				cell = document.createElement('td');

				var label, input, gotPref = Twinkle.getPref(pref.name);
				switch (pref.type) {

					case 'boolean':  // create a checkbox
						cell.setAttribute('colspan', '2');

						label = document.createElement('label');
						input = document.createElement('input');
						input.setAttribute('type', 'checkbox');
						input.setAttribute('id', pref.name);
						input.setAttribute('name', pref.name);
						if (gotPref === true) {
							input.setAttribute('checked', 'checked');
						}
						label.appendChild(input);
						label.appendChild(document.createTextNode(pref.label));
						cell.appendChild(label);
						break;

					case 'string':  // create an input box
					case 'integer':
						// add label to first column
						cell.style.textAlign = 'right';
						cell.style.paddingRight = '0.5em';
						label = document.createElement('label');
						label.setAttribute('for', pref.name);
						label.appendChild(document.createTextNode(pref.label + '：'));
						cell.appendChild(label);
						row.appendChild(cell);

						// add input box to second column
						cell = document.createElement('td');
						cell.style.paddingRight = '1em';
						input = document.createElement('input');
						input.setAttribute('type', 'text');
						input.setAttribute('id', pref.name);
						input.setAttribute('name', pref.name);
						if (pref.type === 'integer') {
							input.setAttribute('size', 6);
							input.setAttribute('type', 'number');
							input.setAttribute('step', '1');  // integers only
						}
						if (gotPref) {
							input.setAttribute('value', gotPref);
						}
						cell.appendChild(input);
						break;

					case 'enum':  // create a combo box
						// add label to first column
						// note: duplicates the code above, under string/integer
						cell.style.textAlign = 'right';
						cell.style.paddingRight = '0.5em';
						label = document.createElement('label');
						label.setAttribute('for', pref.name);
						label.appendChild(document.createTextNode(pref.label + '：'));
						cell.appendChild(label);
						row.appendChild(cell);

						// add input box to second column
						cell = document.createElement('td');
						cell.style.paddingRight = '1em';
						input = document.createElement('select');
						input.setAttribute('id', pref.name);
						input.setAttribute('name', pref.name);
						var optionExists = false;
						$.each(pref.enumValues, function(enumvalue, enumdisplay) {
							var option = document.createElement('option');
							option.setAttribute('value', enumvalue);
							if ((gotPref === enumvalue) ||
								// Hack to convert old boolean watchlist prefs
								// to corresponding enums (added in v2.1)
								(typeof gotPref === 'boolean' &&
								((gotPref && enumvalue === 'yes') ||
								(!gotPref && enumvalue === 'no')))) {
								option.setAttribute('selected', 'selected');
								optionExists = true;
							}
							option.appendChild(document.createTextNode(enumdisplay));
							input.appendChild(option);
						});
						// Append user-defined value to options
						if (!optionExists) {
							var option = document.createElement('option');
							option.setAttribute('value', gotPref);
							option.setAttribute('selected', 'selected');
							option.appendChild(document.createTextNode(gotPref));
							input.appendChild(option);
						}
						cell.appendChild(input);
						break;

					case 'set':  // create a set of check boxes
						// add label first of all
						cell.setAttribute('colspan', '2');
						label = document.createElement('label');  // not really necessary to use a label element here, but we do it for consistency of styling
						label.appendChild(document.createTextNode(pref.label + '：'));
						cell.appendChild(label);

						var checkdiv = document.createElement('div');
						checkdiv.style.paddingLeft = '1em';
						var worker = function(itemkey, itemvalue) {
							var checklabel = document.createElement('label');
							checklabel.style.marginRight = '0.7em';
							checklabel.style.display = 'inline-block';
							var check = document.createElement('input');
							check.setAttribute('type', 'checkbox');
							check.setAttribute('id', pref.name + '_' + itemkey);
							check.setAttribute('name', pref.name + '_' + itemkey);
							if (gotPref && gotPref.indexOf(itemkey) !== -1) {
								check.setAttribute('checked', 'checked');
							}
							// cater for legacy integer array values for unlinkNamespaces (this can be removed a few years down the track...)
							if (pref.name === 'unlinkNamespaces') {
								if (gotPref && gotPref.indexOf(parseInt(itemkey, 10)) !== -1) {
									check.setAttribute('checked', 'checked');
								}
							}
							checklabel.appendChild(check);
							checklabel.appendChild(document.createTextNode(itemvalue));
							checkdiv.appendChild(checklabel);
						};
						if (pref.setDisplayOrder) {
							// add check boxes according to the given display order
							$.each(pref.setDisplayOrder, function(itemkey, item) {
								worker(item, pref.setValues[item]);
							});
						} else {
							// add check boxes according to the order it gets fed to us (probably strict alphabetical)
							$.each(pref.setValues, worker);
						}
						cell.appendChild(checkdiv);
						break;

					case 'customList':
						// add label to first column
						cell.style.textAlign = 'right';
						cell.style.paddingRight = '0.5em';
						label = document.createElement('label');
						label.setAttribute('for', pref.name);
						label.appendChild(document.createTextNode(pref.label + '：'));
						cell.appendChild(label);
						row.appendChild(cell);

						// add button to second column
						cell = document.createElement('td');
						cell.style.paddingRight = '1em';
						var button = document.createElement('button');
						button.setAttribute('id', pref.name);
						button.setAttribute('name', pref.name);
						button.setAttribute('type', 'button');
						button.addEventListener('click', Twinkle.config.listDialog.display, false);
						// use jQuery data on the button to store the current config value
						$(button).data({
							value: gotPref,
							pref: pref
						});
						button.appendChild(document.createTextNode(wgULS('编辑项目', '編輯項目')));
						cell.appendChild(button);
						break;

					default:
						alert('twinkleconfig: 未知类型的属性 ' + pref.name);
						break;
				}
				row.appendChild(cell);

				// add help tip
				cell = document.createElement('td');
				cell.style.fontSize = '90%';

				cell.style.color = 'gray';
				if (pref.helptip) {
					// convert mentions of templates in the helptip to clickable links
					cell.innerHTML = pref.helptip.replace(/{{(.+?)}}/g,
						'{{<a href="' + mw.util.getUrl('Template:') + '$1" target="_blank">$1</a>}}')
						.replace(/\[\[(.+?)]]/g,
							'<a href="' + mw.util.getUrl('') + '$1" target="_blank">$1</a>');
				}
				// add reset link (custom lists don't need this, as their config value isn't displayed on the form)
				if (pref.type !== 'customList') {
					var resetlink = document.createElement('a');
					resetlink.setAttribute('href', '#tw-reset');
					resetlink.setAttribute('id', 'twinkle-config-reset-' + pref.name);
					resetlink.addEventListener('click', Twinkle.config.resetPrefLink, false);
					resetlink.style.cssFloat = 'right';
					resetlink.style.margin = '0 0.6em';
					resetlink.appendChild(document.createTextNode(wgULS('复位', '復位')));
					cell.appendChild(resetlink);
				}
				row.appendChild(cell);

				container.appendChild(row);
				return true;
			});
			return true;
		});

		var footerbox = document.createElement('div');
		footerbox.setAttribute('id', 'twinkle-config-buttonpane');
		footerbox.style.backgroundColor = '#BCCADF';
		footerbox.style.padding = '0.5em';
		var button = document.createElement('button');
		button.setAttribute('id', 'twinkle-config-submit');
		button.setAttribute('type', 'submit');
		button.appendChild(document.createTextNode(wgULS('保存修改', '儲存修改')));
		footerbox.appendChild(button);
		var footerspan = document.createElement('span');
		footerspan.className = 'plainlinks';
		footerspan.style.marginLeft = '2.4em';
		footerspan.style.fontSize = '90%';
		var footera = document.createElement('a');
		footera.setAttribute('href', '#tw-reset-all');
		footera.setAttribute('id', 'twinkle-config-resetall');
		footera.addEventListener('click', Twinkle.config.resetAllPrefs, false);
		footera.appendChild(document.createTextNode(wgULS('恢复默认', '恢復預設')));
		footerspan.appendChild(footera);
		footerbox.appendChild(footerspan);
		contentform.appendChild(footerbox);

		// since all the section headers exist now, we can try going to the requested anchor
		if (window.location.hash) {
			var loc = window.location.hash;
			window.location.hash = '';
			window.location.hash = loc;
		}

	} else if (mw.config.get('wgNamespaceNumber') === mw.config.get('wgNamespaceIds').user &&
			mw.config.get('wgTitle').indexOf(mw.config.get('wgUserName')) === 0 &&
			mw.config.get('wgPageName').slice(-3) === '.js') {

		var box = document.createElement('div');
		// Styled in twinkle.css
		box.setAttribute('id', 'twinkle-config-headerbox');

		var link,
			scriptPageName = mw.config.get('wgPageName').slice(mw.config.get('wgPageName').lastIndexOf('/') + 1,
				mw.config.get('wgPageName').lastIndexOf('.js'));

		if (scriptPageName === 'twinkleoptions') {
			// place "why not try the preference panel" notice
			box.setAttribute('class', 'config-twopt-box');

			if (mw.config.get('wgArticleId') > 0) {  // page exists
				box.appendChild(document.createTextNode(wgULS('这页包含您的Twinkle参数设置，您可使用', '這頁包含您的Twinkle偏好設定，您可使用')));
			} else {  // page does not exist
				box.appendChild(document.createTextNode(wgULS('您可配置您的Twinkle，通过使用', '您可配置您的Twinkle，通過使用')));
			}
			link = document.createElement('a');
			link.setAttribute('href', mw.util.getUrl(Twinkle.getPref('configPage')));
			link.appendChild(document.createTextNode(wgULS('Twinkle参数设置面板', 'Twinkle偏好設定面板')));
			box.appendChild(link);
			box.appendChild(document.createTextNode(wgULS('，或直接编辑本页。', '，或直接編輯本頁。')));
			$(box).insertAfter($('#contentSub'));

		} else if (['monobook', 'vector', 'vector-2022', 'cologneblue', 'modern', 'timeless', 'minerva', 'common'].indexOf(scriptPageName) !== -1) {
			// place "Looking for Twinkle options?" notice
			box.setAttribute('class', 'config-userskin-box');

			box.appendChild(document.createTextNode(wgULS('如果您想配置您的Twinkle，请使用', '如果您想配置您的Twinkle，請使用')));
			link = document.createElement('a');
			link.setAttribute('href', mw.util.getUrl(Twinkle.getPref('configPage')));
			link.appendChild(document.createTextNode(wgULS('Twinkle参数设置面板', 'Twinkle偏好設定面板')));
			box.appendChild(link);
			box.appendChild(document.createTextNode('。'));
			$(box).insertAfter($('#contentSub'));
		}
	}
};

// Morebits.wiki.page callback from init code
Twinkle.config.legacyPrefsNotice = function twinkleconfigLegacyPrefsNotice(pageobj) {
	var text = pageobj.getPageText();
	var contentnotice = pageobj.getCallbackParameters();
	if (text.indexOf('TwinkleConfig') !== -1 || text.indexOf('FriendlyConfig') !== -1) {
		contentnotice.innerHTML = '<table class="plainlinks ombox ombox-content"><tr><td class="mbox-image">' +
			'<img alt="" src="http://upload.wikimedia.org/wikipedia/en/3/38/Imbox_content.png" /></td>' +
			'<td class="mbox-text"><p><big><b>在这里修改您的参数设置之前，</b>您必须移除在用户JavaScript文件中任何旧的Friendly设置。</big></p>' +
			'<p>要这样做，您可以<a href="' + mw.config.get('wgScript') + '?title=User:' + encodeURIComponent(mw.config.get('wgUserName')) + '/' + mw.config.get('skin') + '.js&action=edit" target="_blank"><b>编辑您的个人JavaScript</b></a>。删除提到<code>FriendlyConfig</code>的代码。</p>' +
			'</td></tr></table>';
	} else {
		$(contentnotice).remove();
	}
};

// custom list-related stuff

Twinkle.config.listDialog = {};

Twinkle.config.listDialog.addRow = function twinkleconfigListDialogAddRow(dlgtable, value, label) {
	var contenttr = document.createElement('tr');
	// "remove" button
	var contenttd = document.createElement('td');
	var removeButton = document.createElement('button');
	removeButton.setAttribute('type', 'button');
	removeButton.addEventListener('click', function() {
		$(contenttr).remove();
	}, false);
	removeButton.textContent = '移除';
	contenttd.appendChild(removeButton);
	contenttr.appendChild(contenttd);

	// value input box
	contenttd = document.createElement('td');
	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.className = 'twinkle-config-customlist-value';
	input.style.width = '97%';
	if (value) {
		input.setAttribute('value', value);
	}
	contenttd.appendChild(input);
	contenttr.appendChild(contenttd);

	// label input box
	contenttd = document.createElement('td');
	input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.className = 'twinkle-config-customlist-label';
	input.style.width = '98%';
	if (label) {
		input.setAttribute('value', label);
	}
	contenttd.appendChild(input);
	contenttr.appendChild(contenttd);

	dlgtable.appendChild(contenttr);
};

Twinkle.config.listDialog.display = function twinkleconfigListDialogDisplay(e) {
	var $prefbutton = $(e.target);
	var curvalue = $prefbutton.data('value');
	var curpref = $prefbutton.data('pref');

	var dialog = new Morebits.simpleWindow(720, 400);
	dialog.setTitle(curpref.label);
	dialog.setScriptName(wgULS('Twinkle参数设置', 'Twinkle偏好設定'));

	var dialogcontent = document.createElement('div');
	var dlgtable = document.createElement('table');
	dlgtable.className = 'wikitable';
	dlgtable.style.margin = '1.4em 1em';
	dlgtable.style.width = '97%';

	var dlgtbody = document.createElement('tbody');

	// header row
	var dlgtr = document.createElement('tr');
	// top-left cell
	var dlgth = document.createElement('th');
	dlgth.style.width = '5%';
	dlgtr.appendChild(dlgth);
	// value column header
	dlgth = document.createElement('th');
	dlgth.style.width = '35%';
	dlgth.textContent = curpref.customListValueTitle ? curpref.customListValueTitle : wgULS('数值', '數值');
	dlgtr.appendChild(dlgth);
	// label column header
	dlgth = document.createElement('th');
	dlgth.style.width = '60%';
	dlgth.textContent = curpref.customListLabelTitle ? curpref.customListLabelTitle : wgULS('标签', '標籤');
	dlgtr.appendChild(dlgth);
	dlgtbody.appendChild(dlgtr);

	// content rows
	var gotRow = false;
	$.each(curvalue, function(k, v) {
		gotRow = true;
		Twinkle.config.listDialog.addRow(dlgtbody, v.value, v.label);
	});
	// if there are no values present, add a blank row to start the user off
	if (!gotRow) {
		Twinkle.config.listDialog.addRow(dlgtbody);
	}

	// final "add" button
	var dlgtfoot = document.createElement('tfoot');
	dlgtr = document.createElement('tr');
	var dlgtd = document.createElement('td');
	dlgtd.setAttribute('colspan', '3');
	var addButton = document.createElement('button');
	addButton.style.minWidth = '8em';
	addButton.setAttribute('type', 'button');
	addButton.addEventListener('click', function() {
		Twinkle.config.listDialog.addRow(dlgtbody);
	}, false);
	addButton.textContent = '添加';
	dlgtd.appendChild(addButton);
	dlgtr.appendChild(dlgtd);
	dlgtfoot.appendChild(dlgtr);

	dlgtable.appendChild(dlgtbody);
	dlgtable.appendChild(dlgtfoot);
	dialogcontent.appendChild(dlgtable);

	// buttonpane buttons: [Save changes] [Reset] [Cancel]
	var button = document.createElement('button');
	button.setAttribute('type', 'submit');  // so Morebits.simpleWindow puts the button in the button pane
	button.addEventListener('click', function() {
		Twinkle.config.listDialog.save($prefbutton, dlgtbody);
		dialog.close();
	}, false);
	button.textContent = wgULS('保存修改', '儲存修改');
	dialogcontent.appendChild(button);
	button = document.createElement('button');
	button.setAttribute('type', 'submit');  // so Morebits.simpleWindow puts the button in the button pane
	button.addEventListener('click', function() {
		Twinkle.config.listDialog.reset($prefbutton, dlgtbody);
	}, false);
	button.textContent = wgULS('复位', '復位');
	dialogcontent.appendChild(button);
	button = document.createElement('button');
	button.setAttribute('type', 'submit');  // so Morebits.simpleWindow puts the button in the button pane
	button.addEventListener('click', function() {
		dialog.close();  // the event parameter on this function seems to be broken
	}, false);
	button.textContent = '取消';
	dialogcontent.appendChild(button);

	dialog.setContent(dialogcontent);
	dialog.display();
};

// Resets the data value, re-populates based on the new (default) value, then saves the
// old data value again (less surprising behaviour)
Twinkle.config.listDialog.reset = function twinkleconfigListDialogReset(button, tbody) {
	// reset value on button
	var $button = $(button);
	var curpref = $button.data('pref');
	var oldvalue = $button.data('value');
	Twinkle.config.resetPref(curpref);

	// reset form
	var $tbody = $(tbody);
	$tbody.find('tr').slice(1).remove();  // all rows except the first (header) row
	// add the new values
	var curvalue = $button.data('value');
	$.each(curvalue, function(k, v) {
		Twinkle.config.listDialog.addRow(tbody, v.value, v.label);
	});

	// save the old value
	$button.data('value', oldvalue);
};

Twinkle.config.listDialog.save = function twinkleconfigListDialogSave(button, tbody) {
	var result = [];
	var current = {};
	$(tbody).find('input[type="text"]').each(function(inputkey, input) {
		if ($(input).hasClass('twinkle-config-customlist-value')) {
			current = { value: input.value };
		} else {
			current.label = input.value;
			// exclude totally empty rows
			if (current.value || current.label) {
				result.push(current);
			}
		}
	});
	$(button).data('value', result);
};

// reset/restore defaults

Twinkle.config.resetPrefLink = function twinkleconfigResetPrefLink(e) {
	var wantedpref = e.target.id.substring(21); // "twinkle-config-reset-" prefix is stripped

	// search tactics
	$(Twinkle.config.sections).each(function(sectionkey, section) {
		if (section.hidden || (section.adminOnly && !Morebits.userIsSysop)) {
			return true;  // continue: skip impossibilities
		}

		var foundit = false;

		$(section.preferences).each(function(prefkey, pref) {
			if (pref.name !== wantedpref) {
				return true;  // continue
			}
			Twinkle.config.resetPref(pref);
			foundit = true;
			return false;  // break
		});

		if (foundit) {
			return false;  // break
		}
	});
	return false;  // stop link from scrolling page
};

Twinkle.config.resetPref = function twinkleconfigResetPref(pref) {
	switch (pref.type) {

		case 'boolean':
			document.getElementById(pref.name).checked = Twinkle.defaultConfig[pref.name];
			break;

		case 'string':
		case 'integer':
		case 'enum':
			document.getElementById(pref.name).value = Twinkle.defaultConfig[pref.name];
			break;

		case 'set':
			$.each(pref.setValues, function(itemkey) {
				if (document.getElementById(pref.name + '_' + itemkey)) {
					document.getElementById(pref.name + '_' + itemkey).checked = Twinkle.defaultConfig[pref.name].indexOf(itemkey) !== -1;
				}
			});
			break;

		case 'customList':
			$(document.getElementById(pref.name)).data('value', Twinkle.defaultConfig[pref.name]);
			break;

		default:
			alert('twinkleconfig: unknown data type for preference ' + pref.name);
			break;
	}
};

Twinkle.config.resetAllPrefs = function twinkleconfigResetAllPrefs() {
	// no confirmation message - the user can just refresh/close the page to abort
	$(Twinkle.config.sections).each(function(sectionkey, section) {
		if (section.hidden || (section.adminOnly && !Morebits.userIsSysop)) {
			return true;  // continue: skip impossibilities
		}
		$(section.preferences).each(function(prefkey, pref) {
			if (!pref.adminOnly || Morebits.userIsSysop) {
				Twinkle.config.resetPref(pref);
			}
		});
		return true;
	});
	return false;  // stop link from scrolling page
};

Twinkle.config.save = function twinkleconfigSave(e) {
	Morebits.status.init(document.getElementById('twinkle-config-content'));

	var userjs = mw.config.get('wgFormattedNamespaces')[mw.config.get('wgNamespaceIds').user] + ':' + mw.config.get('wgUserName') + '/twinkleoptions.js';
	var wikipedia_page = new Morebits.wiki.page(userjs, wgULS('保存参数设置到 ', '儲存偏好設定到 ') + userjs);
	wikipedia_page.setCallbackParameters(e.target);
	wikipedia_page.load(Twinkle.config.writePrefs);

	return false;
};

Twinkle.config.writePrefs = function twinkleconfigWritePrefs(pageobj) {
	var form = pageobj.getCallbackParameters();

	// this is the object which gets serialized into JSON; only
	// preferences that this script knows about are kept
	var newConfig = {optionsVersion: 2.1};

	// a comparison function is needed later on
	// it is just enough for our purposes (i.e. comparing strings, numbers, booleans,
	// arrays of strings, and arrays of { value, label })
	// and it is not very robust: e.g. compare([2], ["2"]) === true, and
	// compare({}, {}) === false, but it's good enough for our purposes here
	var compare = function(a, b) {
		if ($.isArray(a)) {
			if (a.length !== b.length) {
				return false;
			}
			var asort = a.sort(), bsort = b.sort();
			for (var i = 0; asort[i]; ++i) {
				// comparison of the two properties of custom lists
				if ((typeof asort[i] === 'object') && (asort[i].label !== bsort[i].label ||
					asort[i].value !== bsort[i].value)) {
					return false;
				} else if (asort[i].toString() !== bsort[i].toString()) {
					return false;
				}
			}
			return true;
		}
		return a === b;

	};

	$(Twinkle.config.sections).each(function(sectionkey, section) {
		if (section.adminOnly && !Morebits.userIsSysop) {
			return;  // i.e. "continue" in this context
		}

		// reach each of the preferences from the form
		$(section.preferences).each(function(prefkey, pref) {
			var userValue;  // = undefined

			// only read form values for those prefs that have them
			if (!pref.adminOnly || Morebits.userIsSysop) {
				if (!section.hidden) {
					switch (pref.type) {
						case 'boolean':  // read from the checkbox
							userValue = form[pref.name].checked;
							break;

						case 'string':  // read from the input box or combo box
						case 'enum':
							userValue = form[pref.name].value;
							break;

						case 'integer':  // read from the input box
							userValue = parseInt(form[pref.name].value, 10);
							if (isNaN(userValue)) {
								Morebits.status.warn(wgULS('保存', '儲存'), wgULS('您为 ', '您為 ') + pref.name + ' 指定的值（' + pref.value + wgULS('）不合法，会继续保存操作，但此值将会跳过。', '）不合法，會繼續儲存操作，但此值將會跳過。'));
								userValue = null;
							}
							break;

						case 'set':  // read from the set of check boxes
							userValue = [];
							if (pref.setDisplayOrder) {
							// read only those keys specified in the display order
								$.each(pref.setDisplayOrder, function(itemkey, item) {
									if (form[pref.name + '_' + item].checked) {
										userValue.push(item);
									}
								});
							} else {
							// read all the keys in the list of values
								$.each(pref.setValues, function(itemkey) {
									if (form[pref.name + '_' + itemkey].checked) {
										userValue.push(itemkey);
									}
								});
							}
							break;

						case 'customList':  // read from the jQuery data stored on the button object
							userValue = $(form[pref.name]).data('value');
							break;

						default:
							alert('twinkleconfig: 未知数据类型，属性 ' + pref.name);
							break;
					}
				} else if (Twinkle.prefs) {
					// Retain the hidden preferences that may have customised by the user from twinkleoptions.js
					// undefined if not set
					userValue = Twinkle.prefs[pref.name];
				}
			}

			// only save those preferences that are *different* from the default
			if (userValue !== undefined && !compare(userValue, Twinkle.defaultConfig[pref.name])) {
				newConfig[pref.name] = userValue;
			}
		});
	});

	var text =
		'// <nowiki>\n' +
	wgULS(
		'// twinkleoptions.js：用户Twinkle参数设置文件\n' +
		'//\n' +
		'// 注：修改您的参数设置最简单的办法是使用\n' +
		'// Twinkle参数设置面板，在[[' + Morebits.pageNameNorm + ']]。\n' +
		'//\n' +
		'// 这个文件是自动生成的，您所做的任何修改（除了\n' +
		'// 以一种合法的JavaScript的方式来修改这些属性值）会\n' +
		'// 在下一次您点击“保存”时被覆盖。\n' +
		'// 修改此文件时，请记得使用合法的JavaScript。\n' +
		'\n' +
		'window.Twinkle.prefs = ',

		'// twinkleoptions.js：使用者Twinkle參數設定檔案\n' +
		'//\n' +
		'// 註：修改您的參數設定最簡單的辦法是使用\n' +
		'// Twinkle參數設定面板，在[[' + Morebits.pageNameNorm + ']]。\n' +
		'//\n' +
		'// 這個檔案是自動產生的，您所做的任何修改（除了\n' +
		'// 以一種合法的JavaScript的方式來修改這些屬性值）會\n' +
		'// 在下一次您點擊「儲存」時被覆蓋。\n' +
		'// 修改此檔案時，請記得使用合法的JavaScript。\n' +
		'\n' +
		'window.Twinkle.prefs = '
	);
	text += JSON.stringify(newConfig, null, 2);
	text +=
		';\n' +
		'\n' +
		wgULS('// twinkleoptions.js到此为止\n', '// twinkleoptions.js到此為止\n') +
		'// </nowiki>';

	pageobj.setPageText(text);
	pageobj.setEditSummary(wgULS('保存Twinkle参数设置：来自[[', '儲存Twinkle偏好設定：來自[[') + Morebits.pageNameNorm + wgULS(']]的自动编辑', ']]的自動編輯'));
	pageobj.setChangeTags(Twinkle.changeTags);
	pageobj.setCreateOption('recreate');
	pageobj.save(Twinkle.config.saveSuccess);
};

Twinkle.config.saveSuccess = function twinkleconfigSaveSuccess(pageobj) {
	pageobj.getStatusElement().info('成功');

	var noticebox = document.createElement('div');
	noticebox.className = 'mw-message-box mw-message-box-success';
	noticebox.style.fontSize = '100%';
	noticebox.style.marginTop = '2em';
	noticebox.innerHTML = '<p><b>' + wgULS('您的Twinkle参数设置已被保存。', '您的Twinkle偏好設定已被儲存。') + '</b></p><p>' + wgULS('要看到这些更改，您可能需要', '要看到這些更改，您可能需要') + '<a href="' + mw.util.getUrl('WP:BYPASS') + '" title="WP:BYPASS"><b>' + wgULS('绕过浏览器缓存', '繞過瀏覽器快取') + '</b></a>。</p>';
	Morebits.status.root.appendChild(noticebox);
	var noticeclear = document.createElement('br');
	noticeclear.style.clear = 'both';
	Morebits.status.root.appendChild(noticeclear);
};

Twinkle.addInitCallback(Twinkle.config.init);
})(jQuery);


// </nowiki>
