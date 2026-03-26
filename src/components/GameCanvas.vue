<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Loop } from '../game/engine';
import type { IWorld } from '../game/interface';
import { AttributeTypeMap } from '../game/maps/AttributeMap';

const loopRef = ref<Loop | null>(null);
const worldState = ref<IWorld | null>(null);

/**
 * 减少累计游玩时长 (演示扁平化命令对全局属性的操作)
 */
function decreasePlayTime() {
  loopRef.value?.dispatch({
    target: 'world',
    statId: AttributeTypeMap.PLAY_TIME_ARCHIVE,
    op: 'sub',
    value: 5000n // 减少 5000ms (5秒)
  });
}

/**
 * 格式化时长 (ms -> hh:mm:ss)
 */
function formatDuration(ms: number | bigint | string | string[]): string {
  // 如果是字符串或数组则回退为 0，否则保持原值
  const val = (typeof ms === 'string' || Array.isArray(ms)) ? 0 : ms;
  const totalSeconds = Math.floor(Number(val) / 1000);
  const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

onMounted(() => {
  // 1. 初始化世界数据
  const world: IWorld = {
    id: 'world_01',
    name: '游戏世界',
    description: '逻辑主循环驱动的世界',
    objects: {},
    commands: [],
    stats: {} // 全局属性容器
  };

  // 2. 创建纯逻辑主循环 (内置了 TimeSystem)
  const loop = new Loop(world);
  loopRef.value = loop;

  // 3. 监听数据更新
  loop.onUpdate((updatedWorld) => {
    worldState.value = { ...updatedWorld };
  });

  // 4. 启动循环
  loop.start();
});

onUnmounted(() => {
  if (loopRef.value) {
    loopRef.value.stop();
  }
});
</script>

<template>
  <div class="game-container">
    <div v-if="worldState" class="debug-panel">
      <h3>引擎逻辑运行中 (TimeSystem 计时中)</h3>
      
      <div class="stats-card">
        <h4>世界全局统计</h4>
        <p>系统时间戳: {{ worldState.stats?.[AttributeTypeMap.SYSTEM_TIME] }}</p>
        <p>累计游玩时长: <span class="time">{{ formatDuration(worldState.stats?.[AttributeTypeMap.PLAY_TIME_ARCHIVE] || 0n) }}</span></p>
        <p>本轮回时长: <span class="time">{{ formatDuration(worldState.stats?.[AttributeTypeMap.PLAY_TIME_CYCLE] || 0n) }}</span></p>
        <p>本次探索时长: <span class="time">{{ formatDuration(worldState.stats?.[AttributeTypeMap.PLAY_TIME_EXPLORATION] || 0n) }}</span></p>
        
        <div class="controls">
          <button @click="decreasePlayTime">减少累计时长 (5秒)</button>
        </div>
      </div>

      <div class="entity-list">
        <h4>世界实体列表 (数量: {{ Object.keys(worldState.objects).length }})</h4>
        <div v-for="obj in worldState.objects" :key="obj.id" class="entity-mini-card">
          {{ obj.name }} ({{ obj.id }})
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-container {
  padding: 20px;
  color: #fff;
  background-color: #1a1a1a;
  height: 100vh;
  font-family: monospace;
}
.debug-panel {
  border: 1px solid #444;
  padding: 15px;
  border-radius: 8px;
}
.stats-card {
  background: #2a2a2a;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
}
.time {
  color: #42b883;
  font-weight: bold;
}
.entity-mini-card {
  padding: 5px 10px;
  background: #333;
  margin-bottom: 5px;
  border-radius: 4px;
  font-size: 0.9em;
}
h3, h4 {
  margin-top: 0;
  color: #aaa;
}
</style>
