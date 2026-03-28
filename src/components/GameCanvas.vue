<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Loop } from '../game/engine';
import type { IWorld } from '../game/interface';
import { AttributeTypeMap } from '../game/maps/AttributeMap';
import { PersistenceUtils } from '../game/tool';

const loopRef = ref<Loop | null>(null);
const worldState = ref<IWorld | null>(null);

/**
 * 导出存档
 */
async function exportWorld() {
  if (!loopRef.value) return;
  const world = loopRef.value.getWorld();
  const json = PersistenceUtils.serialize(world);

  try {
    // 优先使用浏览器最新的 File System Access API
    if ('showSaveFilePicker' in window) {
      const handle = await (window as any).showSaveFilePicker({
        suggestedName: `save_${world.id}_${Date.now()}.json`,
        types: [{
          description: 'JSON Game Save',
          accept: { 'application/json': ['.json'] },
        }],
      });
      const writable = await handle.createWritable();
      await writable.write(json);
      await writable.close();
      alert('导出成功！');
    } else {
      // 降级方案：传统的 <a> 标签下载
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `save_${world.id}_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  } catch (err: any) {
    if (err.name !== 'AbortError') {
      console.error('导出失败', err);
      alert('导出失败: ' + err.message);
    }
  }
}

/**
 * 导入存档
 */
async function importWorld() {
  try {
    let json = '';
    
    // 优先使用 File System Access API
    if ('showOpenFilePicker' in window) {
      const [handle] = await (window as any).showOpenFilePicker({
        types: [{
          description: 'JSON Game Save',
          accept: { 'application/json': ['.json'] },
        }],
      });
      const file = await handle.getFile();
      json = await file.text();
    } else {
      // 降级方案：创建一个隐藏的 input[type="file"]
      json = await new Promise<string>((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async (e: any) => {
          const file = e.target.files[0];
          if (file) {
            resolve(await file.text());
          } else {
            reject(new Error('未选择文件'));
          }
        };
        input.click();
      });
    }

    if (!json) return;

    // 1. 反序列化
    const newWorld = PersistenceUtils.deserialize(json);

    // 2. 重新初始化循环
    if (loopRef.value) {
      loopRef.value.stop();
    }
    
    const newLoop = new Loop(newWorld);
    loopRef.value = newLoop;
    
    newLoop.onUpdate((updatedWorld) => {
      worldState.value = { ...updatedWorld };
    });

    newLoop.start();
    alert('存档导入成功！');
  } catch (err: any) {
    if (err.name !== 'AbortError') {
      console.error('导入失败', err);
      alert('导入失败: ' + err.message);
    }
  }
}

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
          <button @click="exportWorld" class="export-btn">导出存档 (Save to File)</button>
          <button @click="importWorld" class="import-btn">导入存档 (Load from File)</button>
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
.controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.export-btn {
  background-color: #2c3e50;
  border-color: #34495e;
}
.import-btn {
  background-color: #27ae60;
  border-color: #2ecc71;
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
