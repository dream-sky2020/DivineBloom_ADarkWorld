<script setup lang="ts">
import GameCanvas from './components/GameCanvas.vue';
import { useGameStore } from './store/game';

const gameStore = useGameStore();
</script>

<template>
  <div id="game-container">
    <!-- UI Overlay (HUD) -->
    <div class="hud-overlay" v-if="gameStore.initialized">
      <div class="score">Score: {{ gameStore.score }}</div>
      <div class="status" v-if="gameStore.isGameOver">Game Over!</div>
    </div>

    <!-- Game Canvas -->
    <GameCanvas />
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

#app {
  width: 100vw;
  height: 100vh;
}

#game-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.hud-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  pointer-events: none;
  font-family: 'Arial', sans-serif;
  z-index: 10;
}

.score {
  font-size: 24px;
}

.status {
  font-size: 48px;
  color: red;
  margin-top: 100px;
}
</style>
