<script setup lang="ts">
import {ref} from 'vue'
const input = ref('')
const select = ref('')
const value1 = ref('')
const value2 = ref('')
const options = [
  {
    value: 'Option1',
    label: '话题发布时间',
  },
  {
    value: 'Option2',
    label: '话题更新时间',
  },
]
const shortcuts = [
  {
    text: '过去一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '过去一月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '过去三月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
</script>

<template>
  <div class="discuss">
    <div class="discuss-head">
      <el-row>
        <el-col :span="4" :offset="1">
          <el-button type="primary" round>
            <el-icon><Plus /></el-icon>
            新建话题
          </el-button>
        </el-col>
        <el-col :span="6" :offset="10">
          <el-input
            v-model="input"
            placeholder="搜索"
            clearable="true"
            class="input-with-select"
          >
            <template #prepend>
              <el-select v-model="select" placeholder="全部" style="width: 75px">
                <el-option label="全部" value="1" />
                <el-option label="姓名" value="2" />
                <el-option label="标题" value="3" />
                <el-option label="正文" value="3" />
              </el-select>
            </template>
            <template #append>
              <el-button><el-icon><Search /></el-icon></el-button>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px;">
        <el-col :span="4" :offset="1" style="font-size: 16px;">计算机学院</el-col>
        <el-col :span="4">
          <el-select v-model="value1" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            :shortcuts="shortcuts"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />
        </el-col>
      </el-row>
    </div>
    <div class="discuss-main">
      <el-divider style="margin: 0;"/>
      <div style="display: flex; justify-content: space-between; font-size: 14px;">
        <span>全部话题</span>
        <span>共{{  }}条话题</span>
      </div>
      <el-divider style="margin: 0;"/>
      <ul>
        <li><span>名称</span> <span>时间</span></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.discuss{
  background-color: #ffffff;
  height: 600px;
  width: 1250px;
  border-radius: 10px;
}
.discuss-head{
  height: 100px;
  padding-top: 20px;
}
.discuss-main{
  margin-left: 40px;
  margin-right: 40px;
}
</style>