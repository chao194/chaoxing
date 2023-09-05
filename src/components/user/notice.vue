<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')

</script>

<template>
<div class="notice">
  <div class="notice-head">
    <el-row>
      <el-col :span="3">
        <el-button type="primary" size="large" icon="Edit" round>
          写笔记
        </el-button>
      </el-col>
      <el-col :span="3" :offset="6">
        <el-dropdown size="large">
          <div style="display: flex;align-items: center;font-size: 18px;">
            <span>我的</span>
            <img src="../../assets/dropdown.svg" />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>我的</el-dropdown-item>
              <el-dropdown-item>关注</el-dropdown-item>
              <el-dropdown-item>推荐</el-dropdown-item>
              <el-dropdown-item>同单位</el-dropdown-item>
              <el-dropdown-item>特别关注</el-dropdown-item>
              <el-dropdown-item>分组管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
      <el-col :span="3" :offset="8">
        <a href="#"><img src="../../assets/refresh.svg"/>刷新</a>
      </el-col>
    </el-row>
    <el-divider />
    <el-row>
      <el-col :span="3" >
        <a href="#"><img src="../../assets/note.svg"/>笔记本</a>
      </el-col>
      <el-col :span="4" :offset="16">
        <el-input
          v-model="input"
          class="w-50 m-2"
          size="large"
          placeholder="搜索"
          :suffix-icon="Search"
        />
      </el-col>
      
    </el-row>
  </div>
</div>
</template>
<style scoped>
.notice{
  background-color: #ffffff;
  height: 600px;
  width: 1250px;
  border-radius: 10px;
}
.notice-head{
  height: 40px;
  margin-left: 40px;
  padding-top: 10px;
}
.my-dropdown-menu{
  max-width: 150px;
  overflow-y: auto;
  background-color: transparent;
}

.el-col{
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-row{
  margin-bottom: 20px;
}
a{
  display: inline-block;
  text-decoration: none;
  color: #7B97BD;
}
img{
  vertical-align: middle;
  margin-right: 10px;
}
</style>