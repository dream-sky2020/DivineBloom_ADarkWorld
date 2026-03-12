/**
 * Prestige 模块 - 负责处理游戏的“声望”或“二周目” (New Game+) 系统。
 * 当玩家通关并重新开始游戏时，该模块允许玩家从上一轮游戏中继承一部分资源和得分。
 */
var Prestige = {
		
	name: 'Prestige',

	options: {},

	init: function(options) {
		this.options = $.extend(this.options, options);
	},
	
	/**
	 * 可继承资源列表
	 * 记录了哪些资源可以带入下一轮游戏。
	 * type: 'g' (goods/物品), 'w' (weapons/武器), 'a' (ammo/消耗品)
	 */
	storesMap: [
		{ store: 'wood', type: 'g' },
		{ store: 'fur', type: 'g' },
		{ store: 'meat', type: 'g' },
		{ store: 'iron', type: 'g' },
		{ store: 'coal', type: 'g' },
		{ store: 'sulphur', type: 'g' },
		{ store: 'steel', type: 'g' },
		{ store: 'cured meat', type: 'g' },
		{ store: 'scales', type: 'g' },
		{ store: 'teeth', type: 'g' },
		{ store: 'leather', type: 'g' },
		{ store: 'bait', type: 'g' },
		{ store: 'torch', type: 'g' },
		{ store: 'cloth', type: 'g' },
		{ store: 'bone spear', type: 'w' },
		{ store: 'iron sword', type: 'w' },
		{ store: 'steel sword', type: 'w' },
		{ store: 'bayonet', type: 'w' },
		{ store: 'rifle', type: 'w' },
		{ store: 'laser rifle', type: 'w' },
		{ store: 'bullets', type: 'a' },
		{ store: 'energy cell', type: 'a' },
		{ store: 'grenade', type: 'a' },
		{ store: 'bolas', type: 'a' }
	],
	
	/**
	 * 获取当前仓库中的资源
	 * @param {boolean} reduce - 是否应用随机衰减因子。
	 * 在保存到二周目时，会根据类型进行一定的数量缩减。
	 */
	getStores: function(reduce) {
		var stores = [];
		
		for(var i in this.storesMap) {
			var s = this.storesMap[i];
			stores.push(Math.floor($SM.get('stores["' + s.store + '"]', true) / 
					(reduce ? this.randGen(s.type) : 1)));
		}
		
		return stores;
	},
	
	/**
	 * 获取存储的上一轮游戏数据
	 */
	get: function() {
		return {
			stores: $SM.get('previous.stores'),
			score: $SM.get('previous.score')
		};
	},
	
	/**
	 * 设置二周目初始数据
	 */
	set: function(prestige) {
		$SM.set('previous.stores', prestige.stores);
		$SM.set('previous.score', prestige.score);
	},
	
	/**
	 * 保存当前游戏进度为“上一轮”数据
	 * 在游戏结束时调用，将资源（经过衰减）和总分存入 saveManager。
	 */
	save: function() {
		$SM.set('previous.stores', this.getStores(true));
		$SM.set('previous.score', Score.totalScore());
	},
  
	/**
	 * 领取上一轮继承的资源
	 * 在新游戏开始时，将存储在 'previous.stores' 中的物品添加到当前仓库。
	 * 领取后会清除已存储的数据。
	 */
	collectStores : function() {
		var prevStores = $SM.get('previous.stores');
		if(prevStores != null) {
			var toAdd = {};
			for(var i in this.storesMap) {
				var s = this.storesMap[i];
				toAdd[s.store] = prevStores[i];
			}
			$SM.addM('stores', toAdd);
			
			// Loading the stores clears em from the save
			prevStores.length = 0;
		}
	},

	/**
	 * 随机数生成器 (衰减因子)
	 * 根据资源类型生成一个除数，类型越珍贵，衰减逻辑越严格。
	 */
	randGen : function(storeType) {
		var amount;
		switch(storeType) {
		case 'g': // 普通物品
			amount = Math.floor(Math.random() * 10);
			break;
		case 'w': // 武器
			amount = Math.floor(Math.floor(Math.random() * 10) / 2);
			break;
		case 'a': // 消耗品（弹药等）
			amount = Math.ceil(Math.random() * 10 * Math.ceil(Math.random() * 10));
			break;
		default:
			return 1;
		}
		if (amount !== 0) {
			return amount;
		}
		return 1;
	}

};
