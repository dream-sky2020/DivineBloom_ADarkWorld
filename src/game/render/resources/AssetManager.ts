export type TextureLike = HTMLImageElement | HTMLCanvasElement;

/**
 * 图像资源提供接口（仅负责纹理/图片）
 */
export interface IImageAssetProvider {
    getTexture(id: string): TextureLike | undefined;
    hasTexture(id: string): boolean;
    setTexture(id: string, texture: TextureLike): void;
    removeTexture(id: string): boolean;
    clear(): void;
    loadTexture(id: string, url: string, crossOrigin?: string): Promise<HTMLImageElement>;
    preloadTextures(
        manifest: Record<string, string>,
        crossOrigin?: string
    ): Promise<void>;
}

/**
 * 游戏层图像资源管理器（仅用于图片纹理）
 */
export class ImageAssetManager implements IImageAssetProvider {
    private textures = new Map<string, TextureLike>();
    private loadingTextures = new Map<string, Promise<HTMLImageElement>>();

    getTexture(id: string): TextureLike | undefined {
        return this.textures.get(id);
    }

    hasTexture(id: string): boolean {
        return this.textures.has(id);
    }

    setTexture(id: string, texture: TextureLike): void {
        this.textures.set(id, texture);
    }

    removeTexture(id: string): boolean {
        return this.textures.delete(id);
    }

    clear(): void {
        this.textures.clear();
        this.loadingTextures.clear();
    }

    async loadTexture(
        id: string,
        url: string,
        crossOrigin: string = 'anonymous'
    ): Promise<HTMLImageElement> {
        const existing = this.textures.get(id);
        if (existing && existing instanceof HTMLImageElement) {
            return existing;
        }

        const pending = this.loadingTextures.get(id);
        if (pending) return pending;

        const promise = new Promise<HTMLImageElement>((resolve, reject) => {
            const image = new Image();
            image.crossOrigin = crossOrigin;
            image.onload = () => {
                this.textures.set(id, image);
                this.loadingTextures.delete(id);
                resolve(image);
            };
            image.onerror = () => {
                this.loadingTextures.delete(id);
                reject(new Error(`Failed to load texture "${id}" from "${url}"`));
            };
            image.src = url;
        });

        this.loadingTextures.set(id, promise);
        return promise;
    }

    async preloadTextures(
        manifest: Record<string, string>,
        crossOrigin: string = 'anonymous'
    ): Promise<void> {
        const entries = Object.entries(manifest);
        await Promise.all(
            entries.map(([id, url]) => this.loadTexture(id, url, crossOrigin))
        );
    }
}

/**
 * 向后兼容别名，保留已有调用方式。
 */
export type IAssetProvider = IImageAssetProvider;

/**
 * 向后兼容类名，保留已有调用方式。
 */
export class AssetManager extends ImageAssetManager {}
