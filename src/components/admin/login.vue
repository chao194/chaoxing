<script setup lang="ts">

import { reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'

const router = useRouter()

//登录
const To_home= () => {
  ElMessage({
    message: '登录成功！',
    type: 'success',
  }),
  console.log(router)
  router.push({
    name: 'adminhome'
  })
}

//注册
const Register= () => {
  ElMessage({
    message: '欢迎注册！',
    type: 'success',
  }),
  console.log(router)
  router.push({
    name: 'register'
  })
}

const state = reactive({
	ruleForm: {
		name: '',
		password: '',
	},
});

</script>

<template>
  <span>管理员登录</span>
  <div class="head">
    <el-form ref="form" label-width="80px" :model="state.ruleForm">
            <router-view></router-view>
            <el-form-item label="用户名">
              <el-input placeholder="请输入用户名" v-model="state.ruleForm.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input placeholder="请输入密码" v-model="state.ruleForm.password" show-password></el-input>
            </el-form-item>
          </el-form>
          <el-form-item>
            <el-button class="submit-button" type="primary" @click="To_home" icon="Position" plain>登录</el-button>
          </el-form-item>
        </div>
        <div class="foot">
          <el-row>
            <el-col :span="12"></el-col>
            <el-col :span="6"><el-link type="info" @click="Register">注册</el-link></el-col>
            <el-col :span="6"><el-link type="danger" @click="Register">忘记密码</el-link></el-col>
          </el-row>
        </div>
</template>

<style scoped>
.head{
  padding-top: 20px;
  width: 350px;
  text-align: center;
  margin: 10px auto 0;
}
.submit-button {
  width: 100%;
  letter-spacing: 2px;
  font-weight: 300;
  margin-top: 15px;
  --el-button-bg-color: black;
}
.foot{
  font-size: 10px;
  width: 350px;
  text-align: right;
  padding-top: 20px;
}
</style>
