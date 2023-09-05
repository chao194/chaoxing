<script setup lang="ts">
import Card from './card.vue'

import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')

</script>

<template>
  <el-tabs>
    <el-tab-pane label="我学的课">
      <div class="main-input">
        <el-input
          v-model="input"
          size="large"
          placeholder="搜索"
          :suffix-icon="Search"
          />
      </div>
      <Card />
    </el-tab-pane>
    <el-tab-pane label="我教的课">
      额的无
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.el-tabs{
  height: 100%;
  border-radius: 8px;
  overflow: auto;
  background-color:rgb(255,255,255);
}
.main-input{
  display: flex;
  justify-content: flex-end;
}
.main-input .el-input{
  width: 150px;
  margin-right: 50px;
}
</style>