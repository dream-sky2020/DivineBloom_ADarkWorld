/**
 * Notifications 模块 - 负责处理游戏左侧的消息通知栏（Log）。
 * 它是游戏中传达剧情、状态变化和玩家反馈的主要途径。
 */
var Notifications = {
	
	/**
	 * 初始化函数
	 * 在页面中创建通知框容器（#notifications）和用于渐变消失效果的遮罩（#notifyGradient）。
	 */
	init: function(options) {
		this.options = $.extend(
			this.options,
			options
		);
		
		// 创建通知框
		elem = $('<div>').attr({
			id: 'notifications',
			className: 'notifications'
		});
		// 创建透明渐变遮罩
		$('<div>').attr('id', 'notifyGradient').appendTo(elem);
		
		elem.appendTo('div#wrapper');
	},
	
	options: {}, // 暂无
	
	elem: null,
	
	// 消息队列，用于存放非当前活跃模块产生的消息
	notifyQueue: {},
	
	/**
	 * 发送通知的主函数
	 * @param {Object} module - 发送消息的模块（如 Room, Outside 等）。
	 * @param {string} text - 消息内容。
	 * @param {boolean} noQueue - 如果为 true，则不进入队列，直接丢弃（如果模块不活跃）。
	 */
	notify: function(module, text, noQueue) {
		if(typeof text == 'undefined') return;
		// 自动在句末补全句号
		if(text.slice(-1) != ".") text += ".";
		
		// 如果消息来自非当前显示的模块，则放入队列中
		if(module != null && Engine.activeModule != module) {
			if(!noQueue) {
				if(typeof this.notifyQueue[module] == 'undefined') {
					this.notifyQueue[module] = [];
				}
				this.notifyQueue[module].push(text);
			}
		} else {
			// 否则直接打印到界面上
			Notifications.printMessage(text);
		}
		// 每次产生重要通知时自动存盘
		Engine.saveGame();
	},
	
	/**
	 * 清理不可见的旧消息
	 * 为了防止内存占用过高，该函数会移除那些已经滚动到渐变遮罩下方、玩家看不见的 DOM 元素。
	 */
	clearHidden: function() {
		// 计算渐变遮罩的底部位置
		var bottom = $('#notifyGradient').position().top + $('#notifyGradient').outerHeight(true);
		
		$('.notification').each(function() {
			// 如果消息已经完全滚出视野，则将其从 DOM 中移除
			if($(this).position().top > bottom){
				$(this).remove();
			}
		});
	},
	
	/**
	 * 将单条消息打印到界面上
	 * 包含一个简单的淡入动画，并在完成后触发清理旧消息的操作。
	 */
	printMessage: function(t) {
		var text = $('<div>').addClass('notification').css('opacity', '0').text(t).prependTo('div#notifications');
		text.animate({opacity: 1}, 500, 'linear', function() {
			// 每次添加新消息后检查并清理隐藏的消息，保持运行效率
			Notifications.clearHidden();
		});
	},
	
	/**
	 * 打印某个模块缓存的所有队列消息
	 * 通常在玩家切换标签页（如从 Room 切到 Outside）时调用。
	 */
	printQueue: function(module) {
		if(typeof this.notifyQueue[module] != 'undefined') {
			while(this.notifyQueue[module].length > 0) {
				Notifications.printMessage(this.notifyQueue[module].shift());
			}
		}
	}
};
