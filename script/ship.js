/**
 * Ship 模块 - 负责管理游戏大后期的“古老星舰” (Old Starship)。
 * 这是玩家通往游戏最终章的桥梁。在发现失事飞船后，玩家需要修复它以离开这个荒芜的星球。
 */
var Ship = {
	LIFTOFF_COOLDOWN: 120, // 起飞按钮的冷却时间
	ALLOY_PER_HULL: 1,     // 强化一单位外壳消耗的合金数量
	ALLOY_PER_THRUSTER: 1, // 升级一单位引擎消耗的合金数量
	BASE_HULL: 0,          // 初始外壳强度
	BASE_THRUSTERS: 1,     // 初始引擎等级
	name: _("Ship"),
	
	/**
	 * 初始化星舰模块
	 * 设置初始的外壳和引擎状态，并在 UI 上渲染对应的显示行和功能按钮。
	 */
	init: function(options) {
		this.options = $.extend(
			this.options,
			options
		);
		
		if(!$SM.get('features.location.spaceShip')) {
			$SM.set('features.location.spaceShip', true);
			$SM.setM('game.spaceShip', {
				hull: Ship.BASE_HULL,
				thrusters: Ship.BASE_THRUSTERS
			});
		}
		
		// 向顶部导航栏添加“星舰”标签
		this.tab = Header.addLocation(_("An Old Starship"), "ship", Ship);
		
		// 创建星舰控制面板
		this.panel = $('<div>').attr('id', "shipPanel")
			.addClass('location')
			.appendTo('div#locationSlider');
		
		Engine.updateSlider();
		
		// 1. 渲染外壳强度行 (Hull)
		var hullRow = $('<div>').attr('id', 'hullRow').appendTo('div#shipPanel');
		$('<div>').addClass('row_key').text(_('hull:')).appendTo(hullRow);
		$('<div>').addClass('row_val').text($SM.get('game.spaceShip.hull')).appendTo(hullRow);
		$('<div>').addClass('clear').appendTo(hullRow);
		
		// 2. 渲染引擎等级行 (Engine)
		var engineRow = $('<div>').attr('id', 'engineRow').appendTo('div#shipPanel');
		$('<div>').addClass('row_key').text(_('engine:')).appendTo(engineRow);
		$('<div>').addClass('row_val').text($SM.get('game.spaceShip.thrusters')).appendTo(engineRow);
		$('<div>').addClass('clear').appendTo(engineRow);
		
		// 3. 强化外壳按钮
		new Button.Button({
			id: 'reinforceButton',
			text: _('reinforce hull'),
			click: Ship.reinforceHull,
			width: '100px',
			cost: {'alien alloy': Ship.ALLOY_PER_HULL}
		}).appendTo('div#shipPanel');
		
		// 4. 升级引擎按钮
		new Button.Button({
			id: 'engineButton',
			text: _('upgrade engine'),
			click: Ship.upgradeEngine,
			width: '100px',
			cost: {'alien alloy': Ship.ALLOY_PER_THRUSTER}
		}).appendTo('div#shipPanel');
		
		// 5. 起飞按钮 (Lift off)
		var b = new Button.Button({
			id: 'liftoffButton',
			text: _('lift off'),
			click: Ship.checkLiftOff,
			width: '100px',
			cooldown: Ship.LIFTOFF_COOLDOWN
		}).appendTo('div#shipPanel');
		
		// 如果外壳为 0，则无法起飞
		if($SM.get('game.spaceShip.hull') <= 0) {
			Button.setDisabled(b, true);
		}
		
		// 同时初始化“太空 (Space)”模块，为起飞做准备
		Space.init();
		
		$.Dispatch('stateUpdate').subscribe(Ship.handleStateUpdates);
	},
	
	/**
	 * 到达星舰界面的回调
	 * 处理首次发现的剧情通知和背景音乐切换。
	 */
	onArrival: function(transition_diff) {
		Ship.setTitle();
		if(!$SM.get('game.spaceShip.seenShip')) {
			Notifications.notify(Ship, _('somewhere above the debris cloud, the wanderer fleet hovers. been on this rock too long.'));
			$SM.set('game.spaceShip.seenShip', true);
		}
		AudioEngine.playBackgroundMusic(AudioLibrary.MUSIC_SHIP);

		Engine.moveStoresView(null, transition_diff);
	},
	
	/**
	 * 强化外壳
	 * 消耗外星合金提升 Hull 值。Hull 越高，在最终章空战中越耐打。
	 */
	reinforceHull: function() {
		if($SM.get('stores["alien alloy"]', true) < Ship.ALLOY_PER_HULL) {
			Notifications.notify(Ship, _("not enough alien alloy"));
			return false;
		}
		$SM.add('stores["alien alloy"]', -Ship.ALLOY_PER_HULL);
		$SM.add('game.spaceShip.hull', 1);
		if($SM.get('game.spaceShip.hull') > 0) {
			Button.setDisabled($('#liftoffButton', Ship.panel), false);
		}
		$('#hullRow .row_val', Ship.panel).text($SM.get('game.spaceShip.hull'));
		AudioEngine.playSound(AudioLibrary.REINFORCE_HULL);
	},
	
	/**
	 * 升级引擎
	 * 消耗外星合金提升 Thrusters 值。影响飞船的机动性。
	 */
	upgradeEngine: function() {
		if($SM.get('stores["alien alloy"]', true) < Ship.ALLOY_PER_THRUSTER) {
			Notifications.notify(Ship, _("not enough alien alloy"));
			return false;
		}
		$SM.add('stores["alien alloy"]', -Ship.ALLOY_PER_THRUSTER);
		$SM.add('game.spaceShip.thrusters', 1);
		$('#engineRow .row_val', Ship.panel).text($SM.get('game.spaceShip.thrusters'));
		AudioEngine.playSound(AudioLibrary.UPGRADE_ENGINE);
	},
	
	/**
	 * 检查并执行起飞
	 * 如果是第一次起飞，会弹出一个不可逆的警告确认框。
	 */
	checkLiftOff: function() {
		if(!$SM.get('game.spaceShip.seenWarning')) {
			Events.startEvent({
				title: _('Ready to Leave?'),
				scenes: {
					'start': {
						text: [
							_("time to get out of this place. won't be coming back.")
						],
						buttons: {
							'fly': {
								text: _('lift off'),
								onChoose: function() {
									$SM.set('game.spaceShip.seenWarning', true);
									Ship.liftOff();
								},
								nextScene: 'end'
							},
							'wait': {
								text: _('linger'),
								onChoose: function() {
									Button.clearCooldown($('#liftoffButton'));
								},
								nextScene: 'end'
							}
						}
					}
				}
			});
		} else {
			Ship.liftOff();
		}
	},
	
	/**
	 * 正式起飞
	 * 将游戏切换到“太空 (Space)”模块，开始最后的通关挑战。
	 */
	liftOff: function () {
		$('#outerSlider').animate({top: '700px'}, 300);
		Space.onArrival();
		Engine.activeModule = Space;
		AudioEngine.playSound(AudioLibrary.LIFT_OFF);
	}
};
