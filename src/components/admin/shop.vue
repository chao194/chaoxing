<template>
  <div style="margin: 10px 20px"><span>后台管理</span></div>
  <el-radio-group v-model="isCollapse" style="margin: 10px 0">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">折叠</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><User /></el-icon>
      <template #title>
        <el-link @click="">用户管理</el-link>
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Goods /></el-icon>
      <template #title>
        <el-link>商品管理</el-link>
      </template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Menu /></el-icon>
      <template #title>
        <el-link>类别管理</el-link>
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><House /></el-icon>
      <template #title>
        <el-link>个人中心</el-link>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 120px;
  min-height: 400px;
}

</style>