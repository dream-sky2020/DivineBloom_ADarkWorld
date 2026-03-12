/**
 * Button 模块 - 负责管理游戏中的所有交互按钮。
 * 《A Dark Room》是一个极简主义的点击游戏，按钮是核心交互组件。
 * 该模块实现了按钮的创建、冷却（Cooldown）动画、消耗（Cost）提示以及状态持久化。
 */
var Button = {
	/**
	 * 按钮构造函数
	 * @param {Object} options - 配置项，包括 id, text, click, cooldown, cost, width 等。
	 * @returns {jQuery} 返回一个带有逻辑和样式的 jQuery 按钮对象。
	 */
	Button: function(options) {
		if(typeof options.cooldown == 'number') {
			this.data_cooldown = options.cooldown;
		}
		this.data_remaining = 0;
		if(typeof options.click == 'function') {
			this.data_handler = options.click;
		}

		var el = $('<div>')
			.attr('id', typeof(options.id) != 'undefined' ? options.id : "BTN_" + Engine.getGuid())
			.addClass('button')
			.text(typeof(options.text) != 'undefined' ? options.text : "button")
			.click(function() {
				// 只有在非禁用状态下才执行点击逻辑
				if(!$(this).hasClass('disabled')) {
					Button.cooldown($(this)); // 触发冷却动画
					$(this).data("handler")($(this)); // 执行回调函数
				}
			})
			.data("handler",  typeof options.click == 'function' ? options.click : function() { Engine.log("click"); })
			.data("remaining", 0)
			.data("cooldown", typeof options.cooldown == 'number' ? options.cooldown : 0)
			.data('boosted', options.boosted ?? (() => false));

		// 添加冷却进度条的容器
		el.append($("<div>").addClass('cooldown'));

		// 检查状态中是否有残余的冷却时间（处理刷新页面后的冷却恢复）
		Button.cooldown(el, 'state');

		// 如果有消耗配置，则生成 Tooltip 提示
		if(options.cost) {
			var ttPos = options.ttPos ? options.ttPos : "bottom right";
			var costTooltip = $('<div>').addClass('tooltip ' + ttPos);
			for(var k in options.cost) {
				$("<div>").addClass('row_key').text(_(k)).appendTo(costTooltip);
				$("<div>").addClass('row_val').text(options.cost[k]).appendTo(costTooltip);
			}
			if(costTooltip.children().length > 0) {
				costTooltip.appendTo(el);
			}
		}

		if(options.width) {
			el.css('width', options.width);
		}

		return el;
	},

	saveCooldown: true, // 是否将冷却状态保存到存档中

	/**
	 * 设置按钮的禁用状态
	 */
	setDisabled: function(btn, disabled) {
		if(btn) {
			if(!disabled && !btn.data('onCooldown')) {
				btn.removeClass('disabled');
			} else if(disabled) {
				btn.addClass('disabled');
			}
			btn.data('disabled', disabled);
		}
	},

	isDisabled: function(btn) {
		if(btn) {
			return btn.data('disabled') === true;
		}
		return false;
	},

	/**
	 * 执行冷却逻辑
	 * @param {jQuery} btn - 按钮元素。
	 * @param {string|number} option - 可以是固定的时长，或者 'state' 表示从存档恢复。
	 */
	cooldown: function(btn, option) {
		var cd = btn.data("cooldown");
		// 如果有“加速”增益，冷却时间减半
		if (btn.data('boosted')()) {
			cd /= 2;
		}
		var id = 'cooldown.'+ btn.attr('id');
		if(cd > 0) {
			if(typeof option == 'number') {
				cd = option;
			}
			var start, left;
			switch(option){
				case 'state':
					if(!$SM.get(id)){
						return;
					}
					start = Math.min($SM.get(id), cd);
					left = (start / cd).toFixed(4);
					break;
				default:
					start = cd;
					left = 1;
			}
			Button.clearCooldown(btn);
			if(Button.saveCooldown){
				$SM.set(id,start);
				// 每 0.5 秒更新一次存档中的冷却残余值
				btn.data('countdown', Engine.setInterval(function(){
					$SM.set(id, $SM.get(id, true) - 0.5, true);
				},500));
			}
			var time = start;
			// 极速模式下冷却加速
			if (Engine.options.doubleTime){
				time /= 2;
			}
			// 执行进度条缩减动画
			$('div.cooldown', btn).width(left * 100 +"%").animate({width: '0%'}, time * 1000, 'linear', function() {
				Button.clearCooldown(btn, true);
			});
			btn.addClass('disabled');
			btn.data('onCooldown', true);
		}
	},

	/**
	 * 清除冷却状态
	 */
	clearCooldown: function(btn, cooldownEnded) {
		var ended = cooldownEnded || false;
		if(!ended){
			$('div.cooldown', btn).stop(true, true);
		}
		btn.data('onCooldown', false);
		if(btn.data('countdown')){
			window.clearInterval(btn.data('countdown'));
			$SM.remove('cooldown.'+ btn.attr('id'));
			btn.removeData('countdown');
		}
		if(!btn.data('disabled')) {
			btn.removeClass('disabled');
		}
	}
};
