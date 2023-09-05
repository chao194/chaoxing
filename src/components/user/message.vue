<script setup lang="ts">
import { ref,reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input = ref('')
const currentName = ref('Harden')
const contacts = reactive([
  {avatar:"/src/assets/avatars/avatar1.svg",name:'Harden'},
  {avatar:"/src/assets/avatars/avatar2.svg",name:'James'},
  {avatar:"/src/assets/avatars/avatar3.svg",name:'Nikola Jokic'},
]);

//更新名字
function updateName(index: number){
  currentName.value = contacts[index].name
}
</script>

<template>
<div class="message">
  <div class="message-head">
    <el-container>
      <el-aside class="message-aside">
        <el-row>
          <el-col :span="18" style="margin-top: 10px;margin-left: 5px;">
            <el-input
              v-model="input"
              class="w-30 m-2"
              size="large"
              placeholder="搜索"
              :prefix-icon="Search"
            />
          </el-col>
          <el-col :span="2" style="margin-top: 10px;margin-left: 5px;">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-icon><Grid style="height: 40px;width: 40px;"/></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item >新建文件夹</el-dropdown-item>
                  <el-dropdown-item >发起对话</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
        <el-divider style="margin: 10px 0 10px;"/>
        <el-row :span="24">
          <ul v-for="(contact,index) in contacts">
            <li @click="updateName(index)">
              <img :src="contact.avatar"/>
              {{ contact.name }}
            </li>
          </ul>
        </el-row>
      </el-aside>
      <el-main class="message-main">
        <div class="centerde-text">
          {{currentName}}
        </div>
        <el-divider style="margin: 10px 0 10px;border-color: white;"/>
        <div class="char-main">
          <div>
            可以开始聊天了
          </div>
          <div>
            
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</div>
</template>
<style scoped>
.message{
  background-color: #ffffff;
  height: 600px;
  width: 1250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.message-head{
  width: 800px;
  height: 550px;
  margin: 10px auto;
}
.message-aside{
  width: 250px;
  background-color: rgb(193, 206, 218);
  height: 550px;
}
.message-main{
  width: 100%;
  height: 550px;
  background-color: rgb(208, 225, 225);
}
.el-icon{
  width: 40px;
  height: 40px;  
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}
li{
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
}
li:hover{
  background-color: #a2a8af;
  cursor: pointer;
}
li img{
  height: 40px;
  width: 40px;
  margin-right: 10px;
  margin-left: 10px;
}
.centerde-text{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
}
</style>