<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { AttributeDataMap } from '../game/maps/AttributeMap'
import { 
  ActionTriggerModeDataMap, 
  AttributeModifierDataMap, 
  AttributePredicateDataMap 
} from '../game/maps/IEnumMap'
import { ActionDataMap } from '../game/maps/PrefabMap/ActionMap'
import { EnemyDataMap } from '../game/maps/PrefabMap/EnemyMap'
import { ItemDataMap } from '../game/maps/PrefabMap/ItemMap'
import { MapAreaDataMap } from '../game/maps/PrefabMap/MapMap'
import {
  SearchOutlined,
  DatabaseOutlined,
  TagOutlined,
  ThunderboltOutlined,
  UserOutlined,
  GiftOutlined,
  EnvironmentOutlined,
  CodeOutlined,
  HomeOutlined,
} from '@ant-design/icons-vue'
import { TagDataMap, TagType, TagTypeWeight, type Tag } from '../game/maps/TagMap'

/**
 * 递归分类节点接口
 */
interface DataNode {
  key: string;
  name: string;
  path: string[];
  children: Map<string, DataNode>;
  data: any[];
}

// 汇总所有原始数据
const allRawData = [
  ...Object.values(AttributeDataMap),
  ...Object.values(ActionTriggerModeDataMap),
  ...Object.values(AttributeModifierDataMap),
  ...Object.values(AttributePredicateDataMap),
  ...Object.values(ActionDataMap),
  ...Object.values(EnemyDataMap),
  ...Object.values(ItemDataMap),
  ...Object.values(MapAreaDataMap),
]

/**
 * 构建数据树
 */
const buildDataTree = () => {
  const root: DataNode = { key: 'root', name: '全量数据', path: [], children: new Map(), data: [] }
  
  allRawData.forEach(item => {
    const path = item.categoryPath || ['未分类']
    let currentNode = root
    
    path.forEach((seg: string, index: number) => {
      if (!currentNode.children.has(seg)) {
        currentNode.children.set(seg, {
          key: seg,
          name: seg,
          path: path.slice(0, index + 1),
          children: new Map(),
          data: []
        })
      }
      currentNode = currentNode.children.get(seg)!
    })
    
    currentNode.data.push(item)
  })
  
  return root
}

const dataTree = buildDataTree()

// 当前导航路径
const currentPath = ref<string[]>([])

// 计算当前节点
const currentNode = computed(() => {
  let node = dataTree
  for (const seg of currentPath.value) {
    const nextNode = node.children.get(seg)
    if (nextNode) {
      node = nextNode
    } else {
      break
    }
  }
  return node
})

/**
 * 计算多级导航行
 * 每一行代表路径中的一级，展示该级的所有兄弟节点
 */
const navigationRows = computed(() => {
  const rows = []
  let pointer = dataTree
  
  // 第一行：展示根节点的所有顶级分类
  rows.push({
    level: 0,
    nodes: Array.from(dataTree.children.values()),
    selectedKey: currentPath.value[0] || null
  })

  // 根据当前路径，依次生成每一级的导航行
  for (let i = 0; i < currentPath.value.length; i++) {
    const key = currentPath.value[i]
    const node = pointer.children.get(key)
    if (node && node.children.size > 0) {
      rows.push({
        level: i + 1,
        nodes: Array.from(node.children.values()),
        selectedKey: currentPath.value[i + 1] || null
      })
      pointer = node
    } else {
      // 虽然没有子节点了，但如果当前路径还没走完（虽然逻辑上不应该），或者这就是最后一级，就停止
      break
    }
  }
  
  return rows
})

// 标签状态记录：key 为标签名，value 为 'include' | 'exclude' | 'none'
const tagStates = ref<Record<string, 'include' | 'exclude' | 'none'>>({})

// 搜索文本
const searchText = ref('')

// 获取当前节点（及其所有子节点）下所有可用的标签
const getAllAvailableTags = (node: DataNode, tags: Set<string> = new Set()): Set<string> => {
  node.data.forEach(item => {
    if (item.tags && Array.isArray(item.tags)) {
      item.tags.forEach((t: string) => tags.add(t))
    }
  })
  node.children.forEach(child => getAllAvailableTags(child, tags))
  return tags
}

const availableTags = computed(() => {
  const tagIds = getAllAvailableTags(currentNode.value)
  
  // 将标签 ID 转换为完整的标签对象
  const tags: Tag[] = Array.from(tagIds).map(id => {
    if (TagDataMap[id]) {
      return TagDataMap[id]
    }
    // 默认兜底标签
    return {
      id,
      name: id,
      type: TagType.OTHER,
      description: '暂无描述'
    }
  })

  // 按种类权重排序，种类内按名称字母排序
  return tags.sort((a, b) => {
    const weightA = TagTypeWeight[a.type] || 1000
    const weightB = TagTypeWeight[b.type] || 1000
    if (weightA !== weightB) {
      return weightA - weightB
    }
    return a.name.localeCompare(b.name)
  })
})

/**
 * 将标签按种类分组
 */
const groupedTags = computed(() => {
  const groups: Record<string, Tag[]> = {}
  availableTags.value.forEach(tag => {
    const typeName = tag.type
    if (!groups[typeName]) {
      groups[typeName] = []
    }
    groups[typeName].push(tag)
  })
  
  // 按 TagTypeWeight 的顺序返回分组
  return Object.entries(groups)
    .sort(([typeA], [typeB]) => {
      const wA = TagTypeWeight[typeA as TagType] || 1000
      const wB = TagTypeWeight[typeB as TagType] || 1000
      return wA - wB
    })
})

/**
 * 切换标签状态
 * None -> Include -> Exclude -> None
 */
const toggleTag = (tag: string) => {
  const currentState = tagStates.value[tag] || 'none'
  if (currentState === 'none') {
    tagStates.value[tag] = 'include'
  } else if (currentState === 'include') {
    tagStates.value[tag] = 'exclude'
  } else {
    tagStates.value[tag] = 'none'
  }
}

// 递归获取当前节点下所有的显示数据
const getAllDisplayData = (node: DataNode, results: any[] = []): any[] => {
  // 提取当前生效的标签过滤规则
  const includeTags = Object.entries(tagStates.value)
    .filter(([_, state]) => state === 'include')
    .map(([tag]) => tag)
  
  const excludeTags = Object.entries(tagStates.value)
    .filter(([_, state]) => state === 'exclude')
    .map(([tag]) => tag)

  node.data.forEach(item => {
    // 搜索文本过滤
    const matchesSearch = !searchText.value || (
      item.id.toLowerCase().includes(searchText.value.toLowerCase()) ||
      item.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchText.value.toLowerCase())
    )

    // 标签过滤：必须包含所有 includeTags，且不能包含任何 excludeTags
    const itemTags = item.tags || []
    const matchesInclude = includeTags.every(tag => itemTags.includes(tag))
    const matchesExclude = excludeTags.every(tag => !itemTags.includes(tag))

    if (matchesSearch && matchesInclude && matchesExclude) {
      results.push(item)
    }
  })
  node.children.forEach(child => getAllDisplayData(child, results))
  return results
}

const displayData = computed(() => {
  return getAllDisplayData(currentNode.value)
})

// 导航到指定路径
const navigateTo = (path: string[]) => {
  currentPath.value = path
  tagStates.value = {} // 切换分类时重置标签状态
}

/**
 * 在某一层级进行选择
 */
const selectAtLevel = (level: number, key: string) => {
  const newPath = currentPath.value.slice(0, level)
  newPath.push(key)
  navigateTo(newPath)
}

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id', width: '15%' },
  { title: '名称', dataIndex: 'name', key: 'name', width: '20%' },
  { title: '标签', dataIndex: 'tags', key: 'tags', width: '20%' },
  { title: '详细描述', dataIndex: 'description', key: 'description' },
]

// 响应式分页配置
const pagination = ref({
  current: 1,
  pageSize: 15,
  showSizeChanger: true,
  pageSizeOptions: [10, 15, 20, 30, 50, 100],
  showTotal: (total: number) => `共 ${total} 条`,
  size: 'small' as const
})

/**
 * 表格分页变化回调（翻页 / 修改每页条数）
 */
const handleTableChange = (pager: { current?: number; pageSize?: number }) => {
  if (typeof pager.current === 'number') {
    pagination.value.current = pager.current
  }
  if (typeof pager.pageSize === 'number') {
    pagination.value.pageSize = pager.pageSize
  }
}

// 监听路径、搜索或标签变化，重置到第一页
watch([currentPath, searchText, tagStates], () => {
  pagination.value.current = 1
}, { deep: true })

// 监听路径变化
watch(currentPath, () => {
  searchText.value = ''
})

/**
 * 获取分类图标
 */
const getCategoryIcon = (name: string) => {
  if (name === '行为') return ThunderboltOutlined
  if (name === '敌人') return UserOutlined
  if (name === '物品') return GiftOutlined
  if (name === '地图' || name === '地图区域') return EnvironmentOutlined
  if (name === '枚举' || name === '机制') return CodeOutlined
  if (name === '属性') return TagOutlined
  if (name === '转生') return DatabaseOutlined
  return DatabaseOutlined
}

</script>

<template>
  <div class="database-manager">
    <a-page-header
      style="border-bottom: 1px solid #f0f0f0; background: #fff; margin-bottom: 0"
      title="数据库管理"
      sub-title="递归数据探索与配置查看"
    >
      <template #extra>
        <a-space>
          <a-input-search
            v-model:value="searchText"
            placeholder="搜索 ID、名称..."
            style="width: 250px"
            size="small"
          >
            <template #prefix><SearchOutlined /></template>
          </a-input-search>
        </a-space>
      </template>

      <!-- 面包屑导航放回 Header 内部 -->
      <a-breadcrumb>
        <a-breadcrumb-item @click="navigateTo([])" class="clickable">
          <HomeOutlined /> 首页
        </a-breadcrumb-item>
        <a-breadcrumb-item 
          v-for="(seg, index) in currentPath" 
          :key="index" 
          @click="navigateTo(currentPath.slice(0, index + 1))" 
          class="clickable"
        >
          {{ seg }}
        </a-breadcrumb-item>
      </a-breadcrumb>
    </a-page-header>

    <div class="content-body">
      <!-- 导航和标签移动到 content-body 内部 -->
      <div class="navigation-container">
        <div 
          v-for="row in navigationRows" 
          :key="row.level" 
          class="navigation-row"
        >
          <div class="row-label">层级 {{ row.level + 1 }}:</div>
          <div class="row-items">
            <div 
              class="nav-item root-item" 
              v-if="row.level === 0"
              :class="{ active: currentPath.length === 0 }"
              @click="navigateTo([])"
            >
              <HomeOutlined /> 全部
            </div>
            <div 
              v-for="node in row.nodes" 
              :key="node.key" 
              class="nav-item"
              :class="{ active: row.selectedKey === node.key }"
              @click="selectAtLevel(row.level, node.key)"
            >
              <component v-if="row.level === 0" :is="getCategoryIcon(node.key)" class="item-icon" />
              <span class="item-name">{{ node.name }}</span>
              <small v-if="node.children.size > 0" class="has-child-mark">></small>
            </div>
          </div>
        </div>
        
        <!-- 标签筛选行 (按种类分组显示) -->
        <div v-if="availableTags.length > 0" class="navigation-row tag-row-container">
          <div class="row-label">标签:</div>
          <div class="row-items tag-filter-groups">
            <div v-for="[groupName, tags] in groupedTags" :key="groupName" class="tag-group">
              <span class="tag-group-label">{{ groupName }}:</span>
              <div class="tag-group-items">
                <a-tooltip 
                  v-for="tag in tags" 
                  :key="tag.id" 
                  :title="tag.description || '暂无描述'"
                  placement="top"
                >
                  <div 
                    class="filter-tag-item"
                    :class="[
                      tagStates[tag.id] || 'none'
                    ]"
                    @click="toggleTag(tag.id)"
                  >
                    <span class="tag-icon">
                      <template v-if="tagStates[tag.id] === 'include'"><TagOutlined /></template>
                      <template v-else-if="tagStates[tag.id] === 'exclude'"><CodeOutlined /></template>
                      <template v-else><DatabaseOutlined style="opacity: 0.3" /></template>
                    </span>
                    <span class="tag-name">{{ tag.name }}</span>
                  </div>
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 数据表格 -->
      <div class="data-section">
        <div class="section-header">
          <h4 style="margin: 0">
            {{ currentNode.name }} 
            <small style="color: #999; font-weight: normal; margin-left: 8px">
              (共 {{ displayData.length }} 条数据)
            </small>
          </h4>
        </div>

        <a-table 
          :columns="columns" 
          :data-source="displayData" 
          :pagination="pagination"
          @change="handleTableChange"
          row-key="id"
          size="small"
          bordered
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'id'">
              <a-tag color="blue" style="font-family: monospace">{{ record.id }}</a-tag>
            </template>
            <template v-else-if="column.key === 'name'">
              <span style="font-weight: 600">{{ record.name }}</span>
            </template>
            <template v-else-if="column.key === 'tags'">
              <div style="display: flex; flex-wrap: wrap; gap: 4px">
                <a-tooltip 
                  v-for="tag in record.tags" 
                  :key="tag" 
                  :title="TagDataMap[tag]?.description || '暂无描述'"
                  placement="top"
                >
                  <a-tag color="orange" size="small" style="cursor: help">
                    {{ TagDataMap[tag]?.name || tag }}
                  </a-tag>
                </a-tooltip>
              </div>
            </template>
            <template v-else-if="column.key === 'description'">
              <div style="max-width: 500px; line-height: 1.5; font-size: 13px">
                {{ record.description }}
                <div v-if="record.categoryPath" style="margin-top: 4px; font-size: 11px; color: #aaa">
                  路径: {{ record.categoryPath.join(' / ') }}
                </div>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.database-manager {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f0f2f5;
}

.navigation-container {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 16px 24px;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
}

.navigation-row {
  display: flex;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px dashed #f0f0f0;
}

.navigation-row.tag-row-container {
  align-items: flex-start;
  padding: 12px 0;
}

.tag-filter-groups {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tag-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tag-group-label {
  font-size: 11px;
  color: #999;
  font-weight: 600;
  width: 40px;
  text-align: right;
  flex-shrink: 0;
}

.tag-group-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.filter-tag-item {
  padding: 2px 10px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 12px;
  display: flex;
  align-items: center;
  border: 1px solid #e8e8e8;
  background: #fafafa;
  color: #666;
  user-select: none;
}

.filter-tag-item:hover {
  border-color: #1890ff;
  color: #1890ff;
}

.filter-tag-item.include {
  background: #e6f7ff;
  border-color: #91d5ff;
  color: #1890ff;
}

.filter-tag-item.exclude {
  background: #fff1f0;
  border-color: #ffa39e;
  color: #f5222d;
}

.tag-icon {
  margin-right: 4px;
  display: flex;
  align-items: center;
}

.tag-name {
  line-height: 1;
}

.nav-item {
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;
  color: #555;
  background: #f5f5f5;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
}

.nav-item:hover {
  background: #e6f7ff;
  color: #1890ff;
}

.nav-item.active {
  background: #1890ff;
  color: #fff;
  border-color: #1890ff;
}

.item-icon {
  margin-right: 6px;
  font-size: 14px;
}

.has-child-mark {
  margin-left: 6px;
  opacity: 0.5;
  font-size: 10px;
}

.breadcrumb-bar {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #f0f0f0;
}

.clickable {
  cursor: pointer;
  transition: color 0.3s;
}
.clickable:hover {
  color: #1890ff;
}

.content-body {
  flex: 1;
  padding: 24px;
}

.row-label {
  width: 80px;
  font-size: 12px;
  color: #999;
  flex-shrink: 0;
}

.row-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.data-section {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

:deep(.ant-page-header) {
  padding: 12px 24px;
}

.top-tag-filter {
  margin-right: 12px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .navigation-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .row-label {
    margin-bottom: 4px;
  }
}
</style>
