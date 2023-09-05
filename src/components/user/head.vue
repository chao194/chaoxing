<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()

//退出登录
const SignOut= () => {
  ElMessageBox.confirm('确定要退出空间吗？','提示',{
    confirmButtonText:'确认',cancelButtonText:'取消',type:'warning'
  }).then(() => {
    ElMessage({message:'已退出空间！',type:'success'}),
    console.log(router)
    router.push({
      name:'login'
    })
  }).catch(() => {'取消退出登录'})
}

</script>

<template>
  <div class="left-header">xx学院</div>
    <el-dropdown size="large">
      <div class="right-header">
        <img class="icon-head" src="http://photo.chaoxing.com/p/106956779_80" />
        <span>哈登</span>
        <svg t="1686020658556" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2387" width="16" height="16"><path d="M722.773333 381.44a64 64 0 0 1 90.453334 90.453333l-252.970667 253.013334a68.266667 68.266667 0 0 1-96.512 0l-253.013333-253.013334a64 64 0 0 1 90.538666-90.453333L512 592.128l210.773333-210.773333z" fill="#ffffff" p-id="2388"></path></svg>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>账号管理</el-dropdown-item>
          <el-dropdown-item>切换单位</el-dropdown-item>
          <el-dropdown-item @click="SignOut">退出空间</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>

<style scoped>
.right-header:hover{
  cursor: pointer;
}
.right-header:focus{
  outline: none;
}
.icon-head{
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
}
.el-dropdown{
  color: #ffffff;
}

.el-dropdown-menu__item:hover {
  background-color: transparent;
  border: none;
}
</style>