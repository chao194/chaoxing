<script lang="ts">
import { reactive,ref,defineComponent } from 'vue'
import CourseHead from './courseHead.vue'
import Task from './task.vue'
import Chapter from './chapter.vue'
import Discuss from './discuss.vue'
import Exam from './exam.vue'
import Study from './study.vue'
import Information from './information.vue'

const courses = reactive([
  {course:"培训与竞赛", src:'http://p.ananas.chaoxing.com/star3/240_130c/8a0d7e35ecbb20ec4b19f185eed0bc2b.jpg', name:'李涛', class:'2022年JJU信息技术知识大赛',courseId:'1'},
  {course:"形势与政策", src:'http://p.ananas.chaoxing.com/star3/240_130c/6ffba3b987386ac0b1493280e29536fb.jpg', name:'夏仕', class:'计算机学院',courseId:'2'},
  {course:"大数据分布式存储", src:'http://p.ananas.chaoxing.com/star3/240_130c/669ca80d6a0c5f74835bb936a41aabca.jpg', name:'汪彬彬', class:'信息A1921',courseId:'3'},
  {course:"大数据基础", src:'http://p.ananas.chaoxing.com/star3/240_130c/a83f7a04a1ebec7b608e52bdb96b4f5b.jpg', name:'徐蓓', class:'信息A1921',courseId:'4'},
  {course:"数据库性能优化", src:'http://p.ananas.chaoxing.com/star3/240_130c/53c5e276a310a822ad8b29db.jpg', name:'周友学', class:'信息A1921',courseId:'5'},
])

export default defineComponent({
  components: {
    CourseHead,
    Task,
    Chapter,
    Discuss,
    Exam,
    Study,
    Information,
  },
  setup() {
    //获取当前URL
    const url = window.location.href;
    const courseId = url.split("courseId=")[1];
    //获取与courseId匹配的对象
    const selectCourse = courses.find(course => course.courseId === courseId)
    console.log(selectCourse)
    //修改标题栏
    if(selectCourse){
      document.title = selectCourse.course;
    }

    const currentComponent = ref('Task')

    function changeComponent(componentName: string) {
      currentComponent.value = componentName

    }
    return {
      currentComponent,
      changeComponent,
      selectCourse,
    }
  }
})
</script>

<template>
  <div class="common-layout">
    <el-container class="header">
      <el-header>
        <CourseHead />
      </el-header>
    </el-container>
    <el-container>
      <el-aside>
        <div class="user-block">
          <img class="head-img" :src="selectCourse?.src"/>
          <p>{{selectCourse?.course}}</p>
        </div>
        <el-scrollbar>
          <el-menu @click="() => changeComponent('Task')">
            <img src="../../assets/myCourse/task.svg"/>任务
          </el-menu>
          <el-menu @click="() => changeComponent('Chapter')">
            <img src="../../assets/myCourse/chapter.svg"/>章节
          </el-menu>
          <el-menu @click="() => changeComponent('Discuss')">
            <img src="../../assets/myCourse/discuss.svg"/>讨论
          </el-menu>
          <el-menu @click="">
            <img src="../../assets/myCourse/homework.svg"/>作业
          </el-menu>
          <el-menu @click="() => changeComponent('Exam')">
            <img src="../../assets/myCourse/exam.svg"/>考试
          </el-menu>
          <el-divider style="margin: 10px 0 10px;"/>
          <el-menu @click="() => changeComponent('Information')">
            <img src="../../assets/myCourse/information.svg"/>资料
          </el-menu>
          <el-menu @click="">
            <img src="../../assets/myCourse/wrongquestion.svg"/>错题集
          </el-menu>
          <el-divider style="margin: 5px 0 5px;"/>
          <el-menu @click="() => changeComponent('Study')">
            <img src="../../assets/myCourse/study.svg"/>学习记录
          </el-menu>
          <el-menu @click="">
            <img src="../../assets/myCourse/atlas.svg"/>知识图谱
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
  height:30px;
  background-color: #ffffff;
  background-size:cover;
}
.el-header{
  color:black;
  height: 60px;
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
  color: black;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
}
.user-block{
  width: 200px;
  height: 169px;
  border-bottom: 1px solid #ccc;
}
.head-img{
  width:150px;
  height:80px;
  margin-top: 20px;
}
.el-scrollbar{
  width: 200px;
  height: 430px;
}
.el-menu{
  background-color: #ffffff;
  color: black;
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-menu:hover{
  background-color: #f0f0f0;
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