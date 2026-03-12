/**
 * Outside Events 模块 - 定义了当玩家处于“户外 (Outside)”（即村庄/森林）场景时可能触发的随机事件。
 * 这些事件通常会影响村庄的人口、建筑或资源，并带有一定的剧情描述。
 */
Events.Outside = [
	/* 陷阱损毁 (Ruined traps) */
	{ 
	title: _('A Ruined Trap'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.buildings["trap"]', true) > 0;
		},
		scenes: {
			'start': {
				text: [
					_('some of the traps have been torn apart.'), // 一些陷阱被撕碎了。
					_('large prints lead away, into the forest.') // 巨大的足迹通向森林深处。
				],
				onLoad: function() {
					// 随机损毁一定数量的陷阱
					var numWrecked = Math.floor(Math.random() * $SM.get('game.buildings["trap"]', true)) + 1;
					$SM.add('game.buildings["trap"]', -numWrecked);
					Outside.updateVillage();
					Outside.updateTrapButton();
				},
				notification: _('some traps have been destroyed'),
				blink: true,
				buttons: {
					'track': { // 追踪野兽
						text: _('track them'),
						nextScene: {0.5: 'nothing', 1: 'catch'}
					},
					'ignore': { // 忽略
						text: _('ignore them'),
						nextScene: 'end'
					}
				}
			},
			'nothing': { // 没追到
				text: [
					_('the tracks disappear after just a few minutes.'),
					_('the forest is silent.')
				],
				notification: _('nothing was found'),
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			},
			'catch': { // 追到了野兽，获得丰厚资源
				text: [
					_('not far from the village lies a large beast, its fur matted with blood.'),
					_('it puts up little resistance before the knife.')
				],
				notification: _('there was a beast. it\'s dead now'),
				reward: {
					fur: 100,
					meat: 100,
					teeth: 10
				},
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			}
		},
		audio: AudioLibrary.EVENT_RUINED_TRAP
	},
	/* 小屋起火 (Hut fire) */
	{ 
		title: _('Fire'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.buildings["hut"]', true) > 0 && $SM.get('game.population', true) > 50;
		},
		scenes: {
			'start': {
				text: [
					_('a fire rampages through one of the huts, destroying it.'),
					_('all residents in the hut perished in the fire.')
				],
				notification: _('a fire has started'),
				blink: true,
				onLoad: function() {
					Outside.destroyHuts(1); // 销毁一个小屋并杀死其中的人口
				},
				buttons: {
					'mourn': {
						text: _('mourn'),
						notification: _('some villagers have died'),
						nextScene: 'end'
					}
				}
			}
		},
		audio: AudioLibrary.EVENT_HUT_FIRE
	},
	/* 疾病 (Sickness) */
	{ 
		title: _('Sickness'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 10 && $SM.get('game.population', true) < 50 && $SM.get('stores.medicine', true) > 0;
		},
		scenes: {
			'start': {
				text: [
					_('a sickness is spreading through the village.'),
					_('medicine is needed immediately.')
				],
				notification: _('some villagers are ill'),
				blink: true,
				buttons: {
					'heal': { // 使用药物治疗
						text: _('1 medicine'),
						cost: { 'medicine' : 1 },
						nextScene: {1: 'healed'}
					},
					'ignore': { // 忽略（会导致村民死亡）
						text: _('ignore it'),
						nextScene: {1: 'death'}
					}
				}
			},
			'healed': {
				text: [
					_('the sickness is cured in time.')
				],
				notification: _('sufferers are healed'),
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			},
			'death': {
				text: [
					_('the sickness spreads through the village.'),
					_('the days are spent with burials.'),
					_('the nights are rent with screams.')
				],
				notification: _('sufferers are left to die'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * Math.floor($SM.get('game.population', true)/2)) + 1;
					Outside.killVillagers(numKilled);
				},
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			}
		},
		audio: AudioLibrary.EVENT_SICKNESS
	},

	/* 瘟疫 (Plague) - 更严重的人口危机 */
	{ 
		title: _('Plague'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 50 && $SM.get('stores.medicine', true) > 0;
		},
		scenes: {
			'start': {
				text: [
					_('a terrible plague is fast spreading through the village.'),
					_('medicine is needed immediately.')
				],
				notification: _('a plague afflicts the village'),
				blink: true,
				buttons: {
					/* 这种场景下，黑商会出现并高价卖药 */
					'buyMedicine': {
						text: _('buy medicine'),
						cost: { 'scales': 70,
								'teeth': 50 },
						reward: { 'medicine': 1 }
					},
					'heal': {
						text: _('5 medicine'),
						cost: { 'medicine' : 5 },
						nextScene: {1: 'healed'}
					},
					'ignore': {
						text: _('do nothing'),
						nextScene: {1: 'death'}
					}
				}
			},
			'healed': {
				text: [
					_('the plague is kept from spreading.'),
					_('only a few die.'),
					_('the rest bury them.')
				],
				notification: _('epidemic is eradicated eventually'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * 5) + 2;
					Outside.killVillagers(numKilled);
				},
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			},
			'death': {
				text: [
					_('the plague rips through the village.'),
					_('the nights are rent with screams.'),
					_('the only hope is a quick death.')
				],
				notification: _('population is almost exterminated'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * 80) + 10;
					Outside.killVillagers(numKilled);
				},
				buttons: {
					'end': {
						text: _('go home'),
						nextScene: 'end'
					}
				}
			}
		},
		audio: AudioLibrary.EVENT_PLAGUE
	},

	/* 野兽袭击 (Beast attack) */
	{ 
		title: _('A Beast Attack'),
		isAvailable: function() {
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 0;
		},
		scenes: {
			'start': {
				text: [
					 _('a pack of snarling beasts pours out of the trees.'),
					 _('the fight is short and bloody, but the beasts are repelled.'),
					 _('the villagers retreat to mourn the dead.')
				],
				notification: _('wild beasts attack the villagers'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * 10) + 1;
					Outside.killVillagers(numKilled);
				},
				reward: {
					fur: 100,
					meat: 100,
					teeth: 10
				},
				blink: true,
				buttons: {
					'end': {
						text: _('go home'),
						notification: _('predators become prey. price is unfair'),
						nextScene: 'end'
					}
				}
			}
		},
		audio: AudioLibrary.EVENT_BEAST_ATTACK
	},

	/* 军队突袭 (Soldier attack) - 后期事件 */
	{ 
		title: _('A Military Raid'),
		isAvailable: function() {
			// 只有在清理了城市之后才会触发
			return Engine.activeModule == Outside && $SM.get('game.population', true) > 0 && $SM.get('game.cityCleared');
		},
		scenes: {
			'start': {
				text: [
					_('a gunshot rings through the trees.'),
					_('well armed men charge out of the forest, firing into the crowd.'),
					_('after a skirmish they are driven away, but not without losses.')
				],
				notification: _('troops storm the village'),
				onLoad: function() {
					var numKilled = Math.floor(Math.random() * 40) + 1;
					Outside.killVillagers(numKilled);
				},
				reward: {
					bullets: 10,
					'cured meat': 50
				},

				blink: true,
				buttons: {
					'end': {
						text: _('go home'),
						notification: _('warfare is bloodthirsty'),
						nextScene: 'end'
					}
				}
			}
		},
		audio: AudioLibrary.EVENT_SOLDIER_ATTACK
	}

];
