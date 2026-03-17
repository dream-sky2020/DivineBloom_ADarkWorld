import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    initialized: true,
    isGameOver: false,
    score: 0,
    gameConfig: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  }),
  actions: {
    addScore(points: number) {
      this.score += points;
    },
    setGameOver(status: boolean) {
      this.isGameOver = status;
    },
    reset() {
      this.score = 0;
      this.isGameOver = false;
    }
  },
});
