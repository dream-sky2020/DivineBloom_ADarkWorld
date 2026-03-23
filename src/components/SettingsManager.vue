<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import {
  SoundOutlined,
  GlobalOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  SaveOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const settings = reactive({
  volume: 80,
  language: 'zh-CN',
  isFullscreen: false,
})

const languages = [
  { value: 'zh-CN', label: '简体中文' },
  { value: 'en-US', label: 'English' },
  { value: 'ja-JP', label: '日本語' },
]

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      message.error(`无法进入全屏模式: ${err.message}`)
    })
    settings.isFullscreen = true
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      settings.isFullscreen = false
    }
  }
}

// 监听全屏变化事件，防止用户通过 ESC 键退出全屏导致状态不一致
document.addEventListener('fullscreenchange', () => {
  settings.isFullscreen = !!document.fullscreenElement
})

const saveSettings = () => {
  // 这里可以添加持久化逻辑，例如保存到 localStorage
  localStorage.setItem('game-settings', JSON.stringify(settings))
  message.success('设置已保存')
}

// 初始化加载设置
const savedSettings = localStorage.getItem('game-settings')
if (savedSettings) {
  try {
    const parsed = JSON.parse(savedSettings)
    Object.assign(settings, parsed)
    // 校验当前全屏状态
    settings.isFullscreen = !!document.fullscreenElement
  } catch (e) {
    console.error('加载设置失败', e)
  }
}
</script>

<template>
  <div class="settings-manager">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240); background: #fff; margin-bottom: 24px"
      title="系统设置"
      sub-title="配置游戏运行环境与偏好"
    >
      <template #extra>
        <a-button type="primary" @click="saveSettings">
          <template #icon><SaveOutlined /></template>
          保存设置
        </a-button>
      </template>
    </a-page-header>

    <div class="settings-content">
      <a-card title="基础配置" :bordered="false" class="settings-card">
        <a-form layout="vertical">
          <a-form-item label="主音量">
            <a-row :gutter="16" align="middle">
              <a-col :span="1">
                <SoundOutlined />
              </a-col>
              <a-col :span="12">
                <a-slider v-model:value="settings.volume" :min="0" :max="100" />
              </a-col>
              <a-col :span="3">
                <a-input-number v-model:value="settings.volume" :min="0" :max="100" style="width: 60px" />
              </a-col>
            </a-row>
          </a-form-item>

          <a-form-item label="显示语言">
            <a-select v-model:value="settings.language" style="width: 200px">
              <template #prefix><GlobalOutlined /></template>
              <a-select-option v-for="lang in languages" :key="lang.value" :value="lang.value">
                {{ lang.label }}
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="屏幕模式">
            <a-button @click="toggleFullscreen">
              <template #icon>
                <FullscreenExitOutlined v-if="settings.isFullscreen" />
                <FullscreenOutlined v-else />
              </template>
              {{ settings.isFullscreen ? '退出全屏' : '进入全屏' }}
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>

      <a-card title="关于" :bordered="false" class="settings-card" style="margin-top: 24px">
        <a-descriptions bordered :column="1">
          <a-descriptions-item label="当前版本">v0.0.1 ALPHA</a-descriptions-item>
          <a-descriptions-item label="运行环境">Browser / Vue 3 / Ant Design Vue</a-descriptions-item>
          <a-descriptions-item label="数据库引擎">ADarkDB Engine</a-descriptions-item>
        </a-descriptions>
      </a-card>
    </div>
  </div>
</template>

<style scoped>
.settings-manager {
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
}

.settings-content {
  padding: 0 16px;
}

.settings-card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
</style>
