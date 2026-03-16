<template>
  <div class="app-container" :class="{ 'dark-mode': isDarkMode }" :lang="locale">
    <!-- 侧边栏：日志 (Persistent Log) -->
    <aside class="log-sidebar">
      <div class="log-header">LOG</div>
      <div class="log-content" ref="logContainer">
        <transition-group name="log-fade">
          <div v-for="(msg, index) in logs" :key="index" class="log-entry">
            {{ msg }}
          </div>
        </transition-group>
      </div>
      <div class="log-gradient"></div>
    </aside>

    <!-- 主操作区 -->
    <main class="main-stage">
      <!-- 顶部导航栏 -->
      <nav class="top-nav">
        <div 
          v-for="tab in tabs" 
          :key="tab.id"
          class="nav-item"
          :class="{ active: currentTab === tab.id }"
          @click="currentTab = tab.id"
        >
          {{ tab.name }}
        </div>
        <div class="spacer"></div>
        <div class="nav-tool" @click="isDarkMode = !isDarkMode">
          {{ isDarkMode ? $t('theme.light') : $t('theme.dark') }}
        </div>
      </nav>

      <!-- 分页内容 -->
      <div class="content-viewport">
        <!-- Room Tab -->
        <section v-if="currentTab === 'room'" class="tab-content room-view">
          <div class="room-status">{{ $t('room.status') }}</div>
          <div class="action-grid">
            <div class="btn-wrapper">
              <button 
                class="game-btn" 
                :disabled="!canStoke" 
                @click="onStoke"
              >
                {{ $t('room.actions.stoke') }}
                <div class="btn-progress" :style="{ width: stokeProgress + '%' }"></div>
              </button>
            </div>
            <div class="btn-wrapper">
              <button class="game-btn" @click="addLog(t('logs.traps_empty'))">{{ $t('room.actions.traps') }}</button>
            </div>
          </div>
        </section>

        <!-- World Tab (Placeholder) -->
        <section v-if="currentTab === 'world'" class="tab-content world-view">
          <div class="placeholder-msg">{{ $t('world.placeholder') }}</div>
        </section>

        <!-- Settings Tab -->
        <section v-if="currentTab === 'settings'" class="tab-content settings-view">
          <div class="settings-container">
            <h2 class="view-title">{{ $t('settings.title') }}</h2>
            
            <div class="settings-list">
              <!-- Audio Section -->
              <div class="settings-section">
                <div class="section-header">{{ $t('settings.sections.audio') }}</div>
                <div class="setting-row" @click="settings.soundOn = !settings.soundOn">
                  <div class="setting-info">
                    <div class="setting-name">{{ $t('settings.items.sound.name') }}</div>
                    <div class="setting-desc">{{ $t('settings.items.sound.desc') }}</div>
                  </div>
                  <div class="setting-control">
                    <div class="custom-toggle" :class="{ active: settings.soundOn }">
                      {{ settings.soundOn ? $t('settings.actions.on') : $t('settings.actions.off') }}
                    </div>
                  </div>
                </div>

                <div class="setting-row" @click="settings.hyperMode = !settings.hyperMode">
                  <div class="setting-info">
                    <div class="setting-name">{{ $t('settings.items.hyper.name') }}</div>
                    <div class="setting-desc">{{ $t('settings.items.hyper.desc') }}</div>
                  </div>
                  <div class="setting-control">
                    <div class="custom-toggle" :class="{ active: settings.hyperMode }">
                      {{ settings.hyperMode ? $t('settings.actions.on') : $t('settings.actions.off') }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Localization Section -->
              <div class="settings-section">
                <div class="section-header">{{ $t('settings.sections.localization') }}</div>
                <div class="setting-row no-click">
                  <div class="setting-info">
                    <div class="setting-name">{{ $t('settings.items.language.name') }}</div>
                    <div class="setting-desc">{{ $t('settings.items.language.desc') }}</div>
                  </div>
                  <div class="setting-control">
                    <select v-model="settings.language" class="game-select">
                      <option value="en">ENGLISH (US)</option>
                      <option value="zh-cn">简体中文</option>
                      <option value="ja">日本語</option>
                      <option value="ko">한국어</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Data Management Section -->
              <div class="settings-section">
                <div class="section-header">{{ $t('settings.sections.data') }}</div>
                <div class="setting-row no-click">
                  <div class="setting-info">
                    <div class="setting-name">{{ $t('settings.items.save.name') }}</div>
                    <div class="setting-desc">{{ $t('settings.items.save.desc') }}</div>
                  </div>
                  <div class="setting-control btn-group">
                    <button class="action-btn" @click="exportSave">{{ $t('settings.actions.export') }}</button>
                    <button class="action-btn" @click="importSave">{{ $t('settings.actions.import') }}</button>
                  </div>
                </div>

                <div class="setting-row danger" @click="restartGame">
                  <div class="setting-info">
                    <div class="setting-name">{{ $t('settings.items.wipe.name') }}</div>
                    <div class="setting-desc">{{ $t('settings.items.wipe.desc') }}</div>
                  </div>
                  <div class="setting-control">
                    <span class="danger-text">{{ $t('settings.actions.restart') }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Meta -->
            <div class="settings-footer">
              <div class="footer-line">VERSION: 0.1.0-ALPHA</div>
              <div class="footer-line">BUILD: {{ new Date().toLocaleDateString() }}</div>
            </div>
          </div>
        </section>

        <!-- Dev Panel Tab (Monitoring ECS) -->
        <section v-if="currentTab === 'dev'" class="tab-content dev-view">
          <h2 class="dev-title">{{ $t('dev.title') }}</h2>
          <div class="dev-grid">
            <div class="dev-card">
              <h3>{{ $t('dev.world_status') }}</h3>
              <p>{{ $t('dev.entities', { count: ecsStats.entitiesCount }) }}</p>
              <p>{{ $t('dev.max_entities', { max: ecsStats.maxEntities }) }}</p>
            </div>
            <div class="dev-card">
              <h3>{{ $t('dev.runtime') }}</h3>
              <button class="dev-btn" @click="toggleLoop">
                {{ loopRunning ? $t('dev.loop.stop') : $t('dev.loop.start') }}
              </button>
              <button class="dev-btn" @click="createTestEntity">{{ $t('dev.create_test') }}</button>
            </div>
            <div class="dev-card wide">
              <h3>{{ $t('dev.components') }}</h3>
              <div class="component-list">
                <span v-for="(comp, name) in components" :key="name" class="comp-tag">
                  {{ name }}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- 右侧栏：资源 (Stores) -->
    <aside class="stores-sidebar">
      <div class="stores-header">{{ $t('stores.title') }}</div>
      <div class="stores-list">
        <div v-for="(val, key) in stores" :key="key" class="store-item">
          <span class="store-key">{{ $t('stores.' + key) }}</span>
          <span class="store-val">{{ val }}</span>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { world, Data } from '../script/game/Data';
import { Loop } from '../script/game/Loop';

// --- i18n ---
const { t, locale } = useI18n();

// --- UI State ---
const currentTab = ref('room');
const isDarkMode = ref(false);
const tabs = computed(() => [
  { id: 'room', name: t('tabs.room') },
  { id: 'world', name: t('tabs.world') },
  { id: 'settings', name: t('tabs.settings') },
  { id: 'dev', name: t('tabs.dev') }
]);

// --- Settings State ---
const settings = reactive({
  soundOn: true,
  hyperMode: false,
  language: 'en'
});

// Watch language change
watch(() => settings.language, (newLang) => {
  locale.value = newLang;
});

const exportSave = () => {
  addLog("[System] Save data exported to clipboard (Simulated).");
};

const importSave = () => {
  addLog("[System] Import save functionality pending.");
};

const restartGame = () => {
  if (confirm("Are you sure? This will clear all progress.")) {
    location.reload();
  }
};

// --- Game Data (Reactive) ---
const logs = ref<string[]>([t('logs.cold'), t('logs.dead')]);
const stores = reactive({
  wood: 4,
  furs: 0,
  meat: 0
});

// --- ECS / Dev State ---
const loopRunning = ref(false);
const ecsStats = reactive({
  entitiesCount: 0,
  maxEntities: 10000
});
const components = Data;

// --- Actions ---
const canStoke = ref(true);
const stokeProgress = ref(0);

const addLog = (msg: string) => {
  logs.value.unshift(msg);
  if (logs.value.length > 30) logs.value.pop();
};

const onStoke = () => {
  if (!canStoke.value) return;
  addLog(t("logs.roaring"));
  
  canStoke.value = false;
  stokeProgress.value = 100;
  
  const step = 2;
  const interval = setInterval(() => {
    stokeProgress.value -= step;
    if (stokeProgress.value <= 0) {
      clearInterval(interval);
      canStoke.value = true;
    }
  }, 50);
};

const toggleLoop = () => {
  if (loopRunning.value) {
    Loop.stop();
  } else {
    Loop.start();
  }
  loopRunning.value = !loopRunning.value;
};

const createTestEntity = () => {
  const eid = world.createEntity();
  addLog(`[Dev] Created Entity: ${eid}`);
  updateStats();
};

const updateStats = () => {
  // Simple way to get count for now
  ecsStats.entitiesCount = world.query(0).length;
};

onMounted(() => {
  updateStats();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=IBM+Plex+Mono:wght@300;400&display=swap');

/* --- Theme Variables --- */
.app-container {
  --bg-color: #ffffff;
  --text-color: #111111;
  --border-color: #333333;
  --btn-bg: #ffffff;
  --btn-hover: #f0f0f0;
  --btn-disabled: #cccccc;
  --accent: #e0e0e0;
  
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
  overflow: hidden;
}

/* --- Font Switching Logic --- */
.app-container {
  /* Default font (English and fallbacks) */
  font-family: 'Tox Typewriter', 'Special Elite', 'IBM Plex Mono', "Times New Roman", serif;
}

.app-container[lang="ja"] {
  font-family: '鉄瓶ゴシック', 'Tetsubin Gothic', 'Sawarabi Mincho', serif;
}

.app-container[lang="ko"] {
  font-family: 'HS Bom-Baram', 'HSBomBaram', 'Nanum Myeongjo', serif;
}

.app-container[lang="zh-cn"] {
  font-family: 'Source Han Serif SC', 'Source Han Serif CN', 'Noto Serif SC', 'Songti SC', 'SimSun', serif;
}

.app-container.dark-mode {
  --bg-color: #0a0a0a;
  --text-color: #e0e0e0;
  --border-color: #444444;
  --btn-bg: #1a1a1a;
  --btn-hover: #2a2a2a;
  --btn-disabled: #333333;
  --accent: #222222;
}

/* --- Layout --- */
.log-sidebar {
  width: 250px;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
}

.main-stage {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.02) 100%);
}

.stores-sidebar {
  width: 220px;
  border-left: 1px solid var(--border-color);
  padding: 20px;
}

/* --- Components --- */
.log-header, .stores-header {
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
  opacity: 0.6;
}

.log-content {
  flex: 1;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.log-entry {
  font-size: 0.95rem;
  line-height: 1.4;
  animation: logIn 0.4s ease-out;
}

@keyframes logIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

.top-nav {
  height: 60px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  padding: 0 40px;
  gap: 30px;
}

.nav-item {
  cursor: pointer;
  font-size: 1.1rem;
  opacity: 0.5;
  transition: opacity 0.2s;
  position: relative;
}

.nav-item.active {
  opacity: 1;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--text-color);
}

.nav-tool {
  cursor: pointer;
  font-size: 0.8rem;
  border: 1px solid var(--border-color);
  padding: 4px 12px;
}

.spacer { flex: 1; }

.content-viewport {
  flex: 1;
  padding: 60px 80px;
}

/* --- Action Elements --- */
.game-btn {
  background: var(--btn-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 12px 24px;
  font-family: inherit;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 180px;
  transition: all 0.2s;
}

.game-btn:hover:not(:disabled) {
  background: var(--btn-hover);
  box-shadow: 2px 2px 0px var(--border-color);
  transform: translate(-1px, -1px);
}

.game-btn:active:not(:disabled) {
  transform: translate(0, 0);
  box-shadow: none;
}

.game-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.btn-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--accent);
  z-index: -1;
  transition: width 0.05s linear;
}

.action-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* --- Dev View --- */
.dev-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.dev-card {
  border: 1px solid var(--border-color);
  padding: 15px;
  background: rgba(0,0,0,0.02);
}

.dev-card.wide { grid-column: span 2; }

.dev-btn {
  margin-right: 10px;
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
}

.comp-tag {
  display: inline-block;
  padding: 2px 6px;
  border: 1px solid var(--border-color);
  margin: 4px;
  font-size: 0.7rem;
  font-family: 'IBM Plex Mono', monospace;
}

.placeholder-msg {
  opacity: 0.4;
  font-style: italic;
}

/* --- Settings View --- */
.settings-container {
  max-width: 800px;
  margin: 0 auto;
}

.view-title {
  font-size: 1.8rem;
  margin-bottom: 40px;
  letter-spacing: 4px;
  font-weight: normal;
  border-left: 4px solid var(--border-color);
  padding-left: 20px;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.settings-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-header {
  font-size: 0.8rem;
  letter-spacing: 2px;
  opacity: 0.4;
  margin-bottom: 5px;
  padding-left: 10px;
}

.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border: 1px solid var(--border-color);
  background: var(--btn-bg);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.setting-row:hover:not(.no-click) {
  background: var(--btn-hover);
  transform: translateX(5px);
  border-left-width: 6px;
}

.setting-row.no-click {
  cursor: default;
}

.setting-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.setting-name {
  font-size: 1.1rem;
  letter-spacing: 1px;
}

.setting-desc {
  font-size: 0.85rem;
  opacity: 0.5;
  font-style: italic;
}

/* Custom UI Elements */
.custom-toggle {
  width: 60px;
  height: 28px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.2s;
}

.custom-toggle.active {
  background: var(--text-color);
  color: var(--bg-color);
}

.game-select {
  background: var(--btn-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 8px 12px;
  font-family: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  outline: none;
}

.action-btn {
  background: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 8px 20px;
  font-family: inherit;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background: var(--text-color);
  color: var(--bg-color);
}

.setting-row.danger:hover {
  border-color: #ff4d4d;
  background: rgba(255, 77, 77, 0.05);
}

.danger-text {
  color: #ff4d4d;
  font-weight: bold;
  letter-spacing: 1.5px;
}

.settings-footer {
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  opacity: 0.3;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

/* --- Stores --- */
.store-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.store-key { opacity: 0.8; }
</style>
