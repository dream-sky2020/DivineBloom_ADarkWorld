/**
 * Header 模块 - 负责管理游戏顶部的导航栏（标签页）。
 * 随着游戏的进行，玩家会解锁不同的场景（如房间、森林、小径等），
 * 该模块负责动态添加这些场景的切换按钮，并处理点击跳转逻辑。
 */
var Header = {
	
	/**
	 * 初始化导航栏
	 */
	init: function(options) {
		this.options = $.extend(
			this.options,
			options
		);
	},
	
	options: {}, // 暂无
	
	/**
	 * 检查是否可以进行场景切换
	 * 只有当顶部按钮数量大于 1 时（即解锁了除初始房间外的第二个地点），才允许导航。
	 */
	canTravel: function() {
		return $('div#header div.headerButton').length > 1;
	},
	
	/**
	 * 向导航栏添加一个新的地点按钮
	 * @param {string} text - 按钮上显示的文字（如“寂静的森林”）。
	 * @param {string} id - 地点的唯一标识符。
	 * @param {Object} module - 对应的逻辑模块对象（用于调用 Engine.travelTo）。
	 * @param {string} [before] - 可选，指定将新按钮插入到哪个已有按钮之前。
	 * @returns {jQuery} 返回新创建的按钮元素。
	 */
	addLocation: function(text, id, module, before) {
    const toAdd = $('<div>').attr('id', "location_" + id)
			.addClass('headerButton')
			.text(text).click(function() {
				// 点击时，如果满足切换条件，则由 Engine 执行平滑滚动切换
				if(Header.canTravel()) {
					Engine.travelTo(module);
				}
			});
      
    // 插入逻辑：如果有指定位置则插入，否则追加到末尾
    if (before && $(`#location_${before}`).length > 0) {
      return toAdd.insertBefore(`#location_${before}`);
    }
    
    return toAdd.appendTo($('div#header'));
	}
};
