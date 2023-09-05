<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'

//用户数据
const state = ref({
	ruleForm: {
    username: '',
    userpassword: '',
    userpassword1: '',
    radio: '男'
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
  <div class="login">
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <span>运动用品商城</span> -->
  </div>
  <div class="main">
    <el-form ref="form" label-width="80px" :model="state.ruleForm">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="state.ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="state.ruleForm.userpassword"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input placeholder="请输入密码" v-model="state.ruleForm.userpassword1"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="state.ruleForm.radio">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="24">
          <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="收货地址">
        <el-row>
          <el-col :span="6"><el-select></el-select></el-col>
          <el-col :span="2">省</el-col>
          <el-col :span="6"><el-select></el-select></el-col>
          <el-col :span="2">市</el-col>
          <el-col :span="6"><el-select></el-select></el-col>
          <el-col :span="2">区</el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button @click="To_login">注册</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scoped>
.login {
  padding: 20px;
  height: 60px;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main{
  width: 500px;
  text-align: center;
  margin: 40px auto;
}
</style>
