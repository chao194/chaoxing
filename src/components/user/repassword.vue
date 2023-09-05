<script setup lang="ts">
import { reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'


const state = reactive({
	ruleForm: {
		name: '',
		password: '',
	},
});

const router = useRouter()
//登录
const To_login= () => {
  ElMessage({
    message: '欢迎登录！',
    type: 'success',
  }),
  console.log(router)
  router.push({
    name: 'login'
  })
}

</script>

<template>
  <div class="pass_one">
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <span>运动用品商城</span> -->
  </div>
  <div class="pass_two">
    <el-form ref="form" label-width="80px" :model="state.ruleForm">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="state.ruleForm.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="state.ruleForm.password" show-password></el-input>
      </el-form-item>
    </el-form>
    <el-form>
      <el-col :span="24"><el-button type="primary" @click="To_login" icon="Position" plain>登录</el-button></el-col>
    </el-form>
  </div>
  
</template>

<style>
.pass_one{
  padding: 20px;
  height: 60px;
  will-change: filter;
  transition: filter 300ms;
}
.pass_two{
  width: 300px;
  text-align: center;
  margin: 40px auto;
}
</style>