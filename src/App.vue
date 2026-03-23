<script setup lang="ts">
import { ref } from 'vue'
import GameCanvas from './components/GameCanvas.vue'
import DatabaseManager from './components/DatabaseManager.vue'
import SettingsManager from './components/SettingsManager.vue'
import { useGameStore } from './store/game'
import {
  PlayCircleOutlined,
  SettingOutlined,
  DatabaseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const gameStore = useGameStore()
const collapsed = ref(false)
const selectedKeys = ref(['game'])
const isGameFullscreen = ref(false)

const onMenuSelect = (info: { key: string | number }) => {
  selectedKeys.value = [String(info.key)]
}

const toggleGameFullscreen = () => {
  isGameFullscreen.value = !isGameFullscreen.value
}

</script>

<template>
  <a-layout class="admin-layout">
    <!-- 顶部导航栏 -->
    <a-layout-header class="admin-header">
      <div class="header-left">
        <div class="header-title-group">
          <span class="header-title">ADarkDBWorld</span>
          <span class="header-subtitle">暗黑数据库世界 · 管理终端</span>
        </div>
      </div>
      <a-space>
        <a-tag color="blue">
          <template #icon><DashboardOutlined /></template>
          Score: {{ gameStore.score }}
        </a-tag>
        <a-tag v-if="gameStore.isGameOver" color="error">
          Game Over
        </a-tag>
        <a-avatar style="background-color: #1890ff">Admin</a-avatar>
      </a-space>
    </a-layout-header>

    <a-layout class="workspace-layout">
      <!-- 侧边栏导航 -->
      <a-layout-sider
        v-model:collapsed="collapsed"
        collapsible
        :trigger="null"
        :width="240"
        class="admin-sider"
      >
        <div class="brand-wrap">
          <div v-if="!collapsed" class="brand-text">
            <div class="brand-title">GAME CONSOLE</div>
            <div class="brand-subtitle">v0.0.1 ALPHA</div>
          </div>
        </div>

        <a-menu
          theme="dark"
          mode="inline"
          class="sider-menu"
          :selected-keys="selectedKeys"
          @select="onMenuSelect"
        >
          <a-menu-item key="game">
            <template #icon><PlayCircleOutlined /></template>
            2d渲染界面测试
          </a-menu-item>
          <a-menu-item key="database">
            <template #icon><DatabaseOutlined /></template>
            数据库管理
          </a-menu-item>
          <a-menu-item key="settings">
            <template #icon><SettingOutlined /></template>
            系统设置
          </a-menu-item>
        </a-menu>

        <div class="sider-trigger-wrap">
          <a-button type="text" class="sider-trigger-btn" @click="collapsed = !collapsed">
            <MenuUnfoldOutlined v-if="collapsed" />
            <MenuFoldOutlined v-else />
            <span v-if="!collapsed" class="sider-trigger-text">收起导航</span>
          </a-button>
        </div>
      </a-layout-sider>

      <!-- 主内容区 -->
      <a-layout-content class="admin-content">
        <div v-if="selectedKeys[0] === 'game'" id="game-container" :class="{ 'is-fullscreen': isGameFullscreen }">
          <!-- 游戏画布 -->
          <a-card class="panel-card" :bordered="false" :body-style="{ padding: '0' }">
            <div class="canvas-wrapper">
              <GameCanvas />
            </div>
          </a-card>
          
          <!-- HUD 悬浮层 -->
          <div class="hud-overlay" v-if="gameStore.initialized">
            <a-space direction="vertical">
              <a-card class="hud-card" size="small">
                <template #title>游戏状态</template>
                <p>当前得分: <strong>{{ gameStore.score }}</strong></p>
                <a-tag v-if="gameStore.isGameOver" color="error">游戏结束</a-tag>
              </a-card>
              
              <a-button type="primary" class="fullscreen-btn" @click="toggleGameFullscreen">
                <template #icon>
                  <FullscreenExitOutlined v-if="isGameFullscreen" />
                  <FullscreenOutlined v-else />
                </template>
                {{ isGameFullscreen ? '退出全屏' : '全屏游戏' }}
              </a-button>
            </a-space>
          </div>
        </div>

        <div v-else-if="selectedKeys[0] === 'database'">
          <DatabaseManager />
        </div>

        <div v-else-if="selectedKeys[0] === 'settings'">
          <SettingsManager />
        </div>

        <div v-else>
          <a-result
            status="404"
            title="建设中"
            sub-title="该功能模块正在紧锣密鼓地开发中，敬请期待。"
          >
            <template #extra>
              <a-button type="primary" @click="selectedKeys = ['game']">回到游戏</a-button>
            </template>
          </a-result>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
#game-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

#game-container.is-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  border-radius: 0;
}

#game-container.is-fullscreen .canvas-wrapper {
  height: 100vh;
}

.canvas-wrapper {
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}

.hud-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  pointer-events: none;
  z-index: 10;
}

.hud-card, .fullscreen-btn {
  pointer-events: auto;
}

.hud-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  width: 180px;
}

.fullscreen-btn {
  width: 100%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.admin-layout :deep(.ant-layout-sider-children) {
  display: flex;
  flex-direction: column;
}
</style>
