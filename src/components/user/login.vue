<script setup lang="ts">
import { reactive } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import Alogin from '../admin/login.vue'

//用户数据
const state = reactive({
	ruleForm: {
		name: ['chao','chao','chao'],
		password: ['123456','111111','666666'],
    username: '',
    userpassword: '',
    index: 0
	},
});

const router = useRouter()
//登录
const To_index= () => {
  method:{
    while(state.ruleForm.index!=state.ruleForm.name.length-1){
      state.ruleForm.index++;
		}
		for(var i=0;i<=state.ruleForm.index;i++){
			//登录成功时的条件，并在匹配成功后停止循环
			if(state.ruleForm.name[i]==state.ruleForm.username&&state.ruleForm.password[i]==state.ruleForm.userpassword){
				ElMessage({
          message: '欢迎登录！',
          type: 'success',
        }),
        console.log(router)
        router.push({
        name: 'index'
        })
				break;
			}else{
        if(i!=state.ruleForm.index){
					continue;
        }else{
          ElMessage({
            message: '用户名或密码错误，请重新登录！',
            type: 'warning',
          }),
          console.log(router)
          router.push({
          name: 'login'
          })
          break;
        }
      }
		}
	}
}

//游客登录
const Login= () => {
  ElMessage({
    message: '欢迎登录！',
    type: 'success',
  }),
  console.log(router)
  router.push({
    name: 'index'
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

//忘记密码
const Repassword= () => {
  ElMessage({
    message: '请修改！',
    type: 'success',
  }),
  console.log(router)
  router.push({
    name: 'repassword'
  })
}

</script>

<template>
  <div class="login">
    <!-- <img src="../../assets/logo.svg"/>
    <span>超星学习通</span> -->
  </div>
  <div class="login1">
    <div class="main">
      <div class="head1">
        <img src="src/assets/login-header.png" alt="" />
      </div>
      <img class="profile-avatar" src="src/assets/avatar.png" alt="" />
      <el-tabs type="border-card">
        <el-tab-pane label="用户">
          <span>用户登录</span>
          <div class="head">
          <el-form ref="form" label-width="80px" :model="state.ruleForm">
            <el-form-item label="用户名">
              <el-input placeholder="请输入用户名" v-model="state.ruleForm.username" clearable>
              </el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input placeholder="请输入密码" v-model="state.ruleForm.userpassword" show-password>
              </el-input>
            </el-form-item>
          </el-form>
          <el-form-item>
            <el-button class="submit-button" type="primary" @click="To_index" icon="Position" plain>登录</el-button>
          </el-form-item>
          </div>
          <div class="foot">
            <el-row>
              <!-- <el-col :span="6"><el-link type="warning" @click="Login">游客登录</el-link></el-col> -->
              <el-col :span="12"></el-col>
              <el-col :span="6"><el-link type="info" @click="Register">注册</el-link></el-col>
              <el-col :span="6"><el-link type="danger" @click="Repassword">忘记密码</el-link></el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="管理员">
          <Alogin />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
span{
  display: block;
  color: rgb(125, 20, 48);
  font-family:'Courier New', Courier, monospace;
}
.login {
  padding: 20px;
  will-change: filter;
  transition: filter 300ms;
  text-align: center;
  height: 60px;
  width:250px;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.head1 {
  background: #ccccff;
}
.head1 img {
    display: block;
    width: 400px;
    margin: 0 auto;
    user-select: none;
}
.submit-button {
  width: 100%;
  letter-spacing: 2px;
  font-weight: 300;
  margin-top: 15px;
  --el-button-bg-color: black;
}
.profile-avatar {
  display: block;
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  top: 150px;
  right: calc(50% - 50px);
  z-index: 2;
  user-select: none;
}
.main{
  width: 400px;
  height: 500px;
  text-align: center;
  margin: 10px auto 0;
}
.head{
  padding-top: 20px;
  width: 350px;
  text-align: center;
  margin: 10px auto 0;
}
.foot{
  font-size: 10px;
  width: 350px;
  text-align: right;
  padding-top: 20px;
}
</style>
