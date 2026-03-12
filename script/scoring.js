/**
 * Score 模块 - 负责计算玩家的游戏总得分。
 * 得分系统主要在游戏通关或结算二周目（Prestige）时使用，反映了玩家在这一局游戏中的成就。
 */
var Score = {

	name : 'Score',

	options : {},

	init : function(options) {
		this.options = $.extend(this.options, options);
	},

	/**
	 * 计算当前局的原始得分
	 * 分数由玩家仓库中持有的资源和物品加权计算得出。
	 */
	calculateScore : function() {
		// 从 Prestige 模块获取当前未衰减的资源列表
		var scoreUnadded = Prestige.getStores(false);
		var fullScore = 0;
		
		/**
		 * 各种资源的加权因子 (权重)
		 * 对应 Prestige.storesMap 中的资源顺序。
		 * 稀有资源（如武器、弹药）的加权倍数远高于基础资源（如木材）。
		 */
		var factor = [1, 1.5, 1, 2, 2, 3, 3, 2, 2, 2, 2, 1.5, 1, 
			     1, 10, 30, 50, 100, 150, 150, 3, 3, 5, 4];
		for(var i = 0; i< factor.length; i++){
			fullScore += scoreUnadded[i] * factor[i];
		}
		
		// 加上特殊后期资源的额外得分
		fullScore = fullScore + $SM.get('stores["alien alloy"]', true) * 10;
		fullScore = fullScore + $SM.get('stores["fleet beacon"]', true) * 500;
		// 飞船的耐用度（Hull）也会显著增加分数
		fullScore = fullScore + Ship.getMaxHull() * 50;
		
		return Math.floor(fullScore);
	},

	/**
	 * 保存当前局得分到统计数据中
	 */
	save: function() {
		$SM.set('playStats.score', Score.calculateScore());
	},

	/**
	 * 获取总得分
	 * 总得分 = 上一局继承的声望分数 + 当前局计算出的分数。
	 */
	totalScore : function() {
		return $SM.get('previous.score', true) + Score.calculateScore();
	}
};
