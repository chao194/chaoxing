<script lang="ts">
import { reactive,defineComponent,computed } from 'vue'

const tasks = reactive([
  {taskname:'形势与政策开课通知',time:'2023-01-13 17:57:25',isEnd:true,courseId:'2'},
  {taskname:'形势与政策结束通知',time:'2023-06-13 17:57:25',isEnd:true,courseId:'2'},
  {taskname:'形势与政策考试通知',time:'2023-07-13 17:57:25',isEnd:false,courseId:'2'},
  {taskname:'大数据基础开课通知',time:'2023-01-13 17:57:25',isEnd:true,courseId:'4'},
  {taskname:'大数据基础结束通知',time:'2023-06-13 17:57:25',isEnd:true,courseId:'4'},
  {taskname:'大数据基础考试通知',time:'2023-07-13 17:57:25',isEnd:false,courseId:'4'},
  {taskname:'大数据基础开课通知',time:'2023-01-13 17:57:25',isEnd:true,courseId:'4'},
  {taskname:'大数据基础结束通知',time:'2023-06-13 17:57:25',isEnd:true,courseId:'4'},
  {taskname:'大数据基础考试通知',time:'2023-07-13 17:57:25',isEnd:false,courseId:'4'},
])
export default defineComponent({
  setup() {
    //获取当前URL
    const url = window.location.href;
    const courseId = url.split("courseId=")[1];
    //获取与courseId匹配的对象
    const selectCourse = tasks.filter(task => task.courseId === courseId)
    console.log(selectCourse)
    if(selectCourse){
      //进行中
      const notEndTasks = selectCourse.filter(task => !task.isEnd)
      //已结束
      const endTasks = selectCourse.filter(task => task.isEnd)
      //统计进行中与已结束的总数
      const notEndTasksCount = computed(() => {
        return notEndTasks.length;
      })
      const endTasksCount = computed(() => {
        return endTasks.length;
      })
      return {
        endTasksCount,
        notEndTasksCount,
        endTasks,
        notEndTasks
      }
    }
    return {
      endTasks: [],
      notEndTasks: [],
      endTasksCount: 0,
      notEndTasksCount: 0,
    }
  }
})

</script>

<template>
<div class="notice">
  <div class="notice-head">
    <el-row>
      <span>计算机学院2019级</span>
    </el-row>
    <el-divider />
    <el-row>
      <span>进行中（{{notEndTasksCount}}）</span>
    </el-row>
    <div class="ended">
      <ul v-for="(task,index) in notEndTasks">
        <li>
          <img src="../../assets/notice.svg"/>
          {{task.taskname}}
          <span>结束时间{{ task.time }}</span>
        </li>
      </ul>
    </div>
    <el-row>
      <span>已结束（{{endTasksCount}}）</span>
    </el-row>
    <div class="ended">
      <ul v-for="(task,index) in endTasks">
        <li>
          <img src="../../assets/notice.svg"/>
          {{task.taskname}}
          <span>结束时间{{ task.time }}</span>
        </li>
      </ul>
    </div>
    <el-divider />
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
  height: 580px;
  padding-top: 20px;
  overflow: auto;
  overflow-x: hidden;
}
.el-row{
  margin-left: 40px;
  margin-bottom: 20px;
}
.ended{
  width: 100%;
}
ul{
  padding: 0;
}
.ended ul li{
  width: 100%;
  height: 60px;
  padding-left: 20px;
  line-height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.ended ul li span{
  margin-left: 600px;
}
.ended ul li:hover{
  background-color: #f0f0f0;
}
span{
  font-size: 16px;
}
</style>