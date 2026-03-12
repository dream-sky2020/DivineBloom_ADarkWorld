/**
 * Global Events 模块 - 定义了在游戏的多个场景（如房间、森林）中都可能触发的全局事件。
 * 与特定地点的事件不同，这些事件通常与游戏的整体进度或玩家持有的资源量有关。
 */
Events.Global = [
	/* 小偷事件 (The Thief) */
	{ 
		title: _('The Thief'),
		/**
		 * 触发条件：
		 * 1. 当前处于“房间”或“森林”场景。
		 * 2. 游戏状态中的小偷标志位为 1 (表示小偷已经开始偷窃，资源正在减少)。
		 */
		isAvailable: function() {
			return (Engine.activeModule == Room || Engine.activeModule == Outside) && $SM.get('game.thieves') == 1;
		},
		scenes: {
			'start': {
				text: [
					_('the villagers haul a filthy man out of the store room.'), // 村民们把一个肮脏的男人从储藏室拽了出来。
					_("say his folk have been skimming the supplies."), // 说他的同伙一直在偷拿物资。
					_('say he should be strung up as an example.') // 说应该把他吊起来以儆效尤。
				],
				notification: _('a thief is caught'), // 通知：抓到一个小偷
				blink: true,
				buttons: {
					'kill': {
						text: _('hang him'), // 处决（吊死）
						nextScene: {1: 'hang'}
					},
					'spare': {
						text: _('spare him'), // 宽恕
						nextScene: {1: 'spare'}
					}
				}
			},
			/* 选择处决小偷的分支 */
			'hang': {
				text: [
					_('the villagers hang the thief high in front of the store room.'), // 村民们把小偷高高吊在储藏室前。
					_('the point is made. in the next few days, the missing supplies are returned.') // 杀鸡儆猴起了作用。在接下来的几天里，丢失的物资被找回了。
				],
				onLoad: function() {
					$SM.set('game.thieves', 2); // 标记小偷事件已解决
					$SM.remove('income.thieves'); // 停止资源扣除（负收益）
					$SM.addM('stores', $SM.get('game.stolen')); // 找回所有被偷的物资
				},
				buttons: {
					'leave': {
						text: _('leave'),
						nextScene: 'end'
					}
				}
			},
			/* 选择宽恕小偷的分支 */
			'spare': {
				text: [
					_("the man says he's grateful. says he won't come around any more."), // 男人说他很感激，并保证再也不会来了。
					_("shares what he knows about sneaking before he goes.") // 在离开前，他分享了他所知道的关于潜行的技巧。
				],
				onLoad: function() {
					$SM.set('game.thieves', 2); // 标记小偷事件已解决
					$SM.remove('income.thieves'); // 停止资源扣除
					$SM.addPerk('stealthy'); // 玩家获得“潜行”特长 (Stealthy Perk)
				},
				buttons: {
					'leave': {
						text: _('leave'),
						nextScene: 'end'
					}
				}
			}
		},
		audio: AudioLibrary.EVENT_THIEF
	}
];
