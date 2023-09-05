<script setup lang="ts">
import { ref } from 'vue'
import Chart from '../admin/chart.vue'
import Users from '../admin/user.vue'
import Shop from '../admin/shop.vue'
const tabPosition = ref('left')
</script>

<template>
<span style="color: #6b778c;font-size: 32px;font-weight: 600;padding: 0 20px;">后台管理</span>
  <div style="margin: 20px 0;">
    <el-tabs :tab-position="tabPosition" style="height: 600px" class="demo-tabs">
        <el-tab-pane>
            <template #label>
            <span class="custom-tabs-label">
                <el-icon><PieChart /></el-icon>
                <span>数据统计</span>
            </span>
            </template>
          <Chart />
        </el-tab-pane>
        <el-tab-pane>
            <template #label>
            <span class="custom-tabs-label">
                <el-icon><User /></el-icon>
                <span>用户管理</span>
            </span>
            </template>
          <Users />
        </el-tab-pane>
        <el-tab-pane>
            <template #label>
            <span class="custom-tabs-label">
                <el-icon><Goods /></el-icon>
                <span>商品管理</span>
            </span>
            </template>
            <Shop />
        </el-tab-pane>
        <el-tab-pane>
            <template #label>
            <span class="custom-tabs-label">
                <el-icon><Menu /></el-icon>
                <span>分类管理</span>
            </span>
            </template>
            分类管理
        </el-tab-pane>
        <el-tab-pane>
            <template #label>
            <span class="custom-tabs-label">
                <el-icon><House /></el-icon>
                <span>个人中心</span>
            </span>
            </template>
            个人中心
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>