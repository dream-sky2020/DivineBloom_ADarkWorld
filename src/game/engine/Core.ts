export class GameCore {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private gameStore: any;
  private isRunning: boolean = false;
  private animationId: number | null = null;
  private lastTime: number = 0;

  // Simple game state example
  private playerPos = { x: 50, y: 50 };
  private playerSpeed = { x: 2, y: 1.5 };

  constructor(canvas: HTMLCanvasElement, gameStore: any) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.gameStore = gameStore;

    // Set initial size
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  private handleResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public start() {
    this.isRunning = true;
    this.lastTime = performance.now();
    this.gameLoop(this.lastTime);
  }

  public stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.handleResize);
  }

  private gameLoop(timestamp: number) {
    if (!this.isRunning) return;

    const deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;

    this.update(deltaTime);
    this.render();

    this.animationId = requestAnimationFrame((t) => this.gameLoop(t));
  }

  private update(deltaTime: number) {
    const frameScale = deltaTime / (1000 / 60);

    // Basic logic: Bounce a square
    this.playerPos.x += this.playerSpeed.x * frameScale;
    this.playerPos.y += this.playerSpeed.y * frameScale;

    if (this.playerPos.x < 0 || this.playerPos.x > this.canvas.width - 50) {
      this.playerSpeed.x *= -1;
      this.gameStore.addScore(1);
    }
    if (this.playerPos.y < 0 || this.playerPos.y > this.canvas.height - 50) {
      this.playerSpeed.y *= -1;
      this.gameStore.addScore(1);
    }
  }

  private render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw Player (Square)
    this.ctx.fillStyle = '#42b883'; // Vue Green
    this.ctx.fillRect(this.playerPos.x, this.playerPos.y, 50, 50);

    // Background hint
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    this.ctx.font = '20px Arial';
    this.ctx.fillText('Game Engine Running...', 20, this.canvas.height - 40);
  }
}
