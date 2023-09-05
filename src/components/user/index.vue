<script lang="ts">
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'
const router = useRouter()
import Head from './head.vue'
import Course from './course.vue'
import Inbox from './inbox.vue'
import Notice from './notice.vue'
import Message from './message.vue'
import Group from './group.vue'
import CloudDisk from './cloudDisk.vue'

//import { Component, Vue } from 'vue-property-decorator';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Head,
    Course,
    Inbox,
    Notice,
    Message,
    Group,
    CloudDisk
  },
  setup() {
    const currentComponent = ref('Course')

    function changeComponent(componentName: string) {
      currentComponent.value = componentName
    }

    return {
      currentComponent,
      changeComponent
    }
  }
})

</script>

<template>
  <div class="common-layout">
    <el-container class="header">
      <el-header>
        <Head />
      </el-header>
    </el-container>
    <el-container>
      <el-aside>
        <div class="user-block">
          <img class="head-img" src="http://photo.chaoxing.com/p/106956779_80" />
          <p>哈登</p>
        </div>
        <el-scrollbar>
          <el-menu @click="() => changeComponent('Course')">
            <img src="../../assets/course.svg"/>课程
          </el-menu>
          <el-menu @click="() => changeComponent('Inbox')">
            <img src="../../assets/inbox.svg"/>收件箱
          </el-menu>
          <el-menu @click="() => changeComponent('Notice')">
            <img src="../../assets/note.svg"/>笔记
          </el-menu>
          <el-menu @click="() => changeComponent('Message')">
            <img src="../../assets/message.svg"/>消息
          </el-menu>
          <el-menu @click="() => changeComponent('Group')">
            <img src="../../assets/group.svg"/>小组
          </el-menu>
          <el-menu>
            <img src="../../assets/contest.svg"/>大赛
          </el-menu>
          <el-menu @click="() => changeComponent('CloudDisk')">
            <img src="../../assets/cloudDisk.svg"/>云盘
          </el-menu>
          <el-menu>
            <img src="../../assets/creation.svg"/>专题创作
          </el-menu>
          <el-menu>
            <img src="../../assets/broadcast.svg"/>个人直播间
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <component :is="currentComponent" />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
/* head样式 */
.header{
  width:100%;
  height:80px;
  background-color: rgb(23, 23, 77);
  background:url(http://p.ananas.chaoxing.com/star3/origin/8dbc96051e7bc028511bb1a5c48bf7d8) no-repeat center;
  background-size:cover;
}
.el-header{
  color:#ffffff;
  height: 80px;
  align-items: center;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
}
/* aside样式 */
.el-aside{
  width: 200px;
  height: 600px;
  border-radius: 8px;
  color: #ffffff;
  background-color: rgb(77,88,181);
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
}
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
.el-menu img{
  margin-right: 10px;
  vertical-align: middle;
}
/* main样式 */
.el-main{
  height: 635px;
  overflow: hidden;
}
.common-layout {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
}

.common-layout > * {
  flex-grow: 1;
}

@media screen and (max-width: 768px) {
  .common-layout el-aside, .common-layout el-main {
    width: 100%;
  }
}

</style>