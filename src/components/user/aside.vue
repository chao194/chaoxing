<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const To_course= () => {
  console.log(router)
  location.reload();
  router.push({
    name: 'index'
  })
}
</script>

<template>
  <div class="user-block">
    <img class="head-img" src="http://photo.chaoxing.com/p/106956779_80" />
    <p>哈登</p>
  </div>
  <el-scrollbar>
    <el-menu @click="To_course">
      <a><img src="../../assets/course.svg"/>课程</a>
    </el-menu>
    <el-menu>
      <a><img src="../../assets/inbox.svg"/>收件箱</a>
    </el-menu>
    <el-menu>
      <a><img src="../../assets/note.svg"/>笔记</a>
    </el-menu>
    <el-menu>
      <a><img src="../../assets/message.svg"/>消息</a>
    </el-menu>
    <el-menu>
      <a><img src="../../assets/group.svg"/>小组</a>
    </el-menu>
    <el-menu>
      <a><img src="../../assets/contest.svg"/>大赛</a>
    </el-menu>
    <el-menu>
      <a><img src="../../assets/cloudDisk.svg"/>云盘</a>
    </el-menu>
    <el-menu>
      <a><img src="../../assets/creation.svg"/>专题创作</a>
    </el-menu>
    <el-menu>
      <a><img src="../../assets/broadcast.svg"/>个人直播间</a>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped>
.user-block{
  width: 200px;
  height: 199px;
  border-bottom: 1px solid #ccc;
}
.head-img{
  border-radius: 50%;
  width:80px;
  height:80px;
  margin-top: 20px;
}
.el-scrollbar{
  width: 200px;
  height: 400px;
}
.el-menu{
  background-color: rgb(77,88,181);
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-menu:hover{
  background-color: rgb(100,100,200);
  cursor: pointer;
}
.el-menu svg{
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
}
.el-menu a{
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
}
.el-menu a img{
  margin-right: 10px;
  vertical-align: middle;
}
</style>