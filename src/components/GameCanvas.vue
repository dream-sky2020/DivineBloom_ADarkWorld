<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useGameStore } from '../store/game';
import { GameCore } from '../game/engine/Core.ts';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gameStore = useGameStore();
let gameCore: GameCore | null = null;

onMounted(() => {
  if (canvasRef.value) {
    gameCore = new GameCore(canvasRef.value, gameStore);
    gameCore.start();
  }
});

onUnmounted(() => {
  if (gameCore) {
    gameCore.stop();
  }
});
</script>

<template>
  <canvas ref="canvasRef" class="game-canvas"></canvas>
</template>

<style scoped>
.game-canvas {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
