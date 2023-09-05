<script lang="ts">
import { reactive,defineComponent,computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const titles = reactive([
      {title:'第一单元',courseId:'1',titleId:'1'},
      {title:'第二单元',courseId:'1',titleId:'2'},
      {title:'伟大时代的历史跨越',courseId:'2',titleId:'1'},
      {title:'保证粮食安全',courseId:'2',titleId:'2'},
    ])
    const chapters = reactive([
      {chaptername:'第一课时',isEnd:true,courseId:'1',titleId:'1'},
      {chaptername:'第二课时',isEnd:true,courseId:'1',titleId:'1'},
      {chaptername:'第一课时',isEnd:false,courseId:'1',titleId:'2'},
      {chaptername:'新时代有新作为新成就',isEnd:true,courseId:'2',titleId:'1'},
      {chaptername:'用好有利条件走好必由之路',isEnd:true,courseId:'2',titleId:'1'},
      {chaptername:'自力更生 形式持续向好',isEnd:false,courseId:'2',titleId:'2'},
      {chaptername:'认清现状 不能轻言放弃',isEnd:true,courseId:'2',titleId:'2'},
      {chaptername:'系统推进 端牢中国饭碗',isEnd:false,courseId:'2',titleId:'2'},
    ])
    //获取当前URL
    const url = window.location.href;
    const courseId = url.split("courseId=")[1];
    //获取与courseId匹配的对象
    const selectCourse = chapters.filter(chapter => chapter.courseId === courseId);
    //console.log(selectCourse);
    if(selectCourse){
      //章节总数
      // function chaptersCount() {
      //   return selectCourse.length;
      // };
      const chaptersCount = computed(() => selectCourse.length);
      //统计已完成的总数
      const endChaptersCount = computed(() => selectCourse.filter(chapter => chapter.isEnd).length);
      // function endChaptersCount(){
      //   //已完成
      //   const endChapter = selectCourse.filter(chapter => chapter.isEnd);
      //   console.log(endChapter)
      //   return endChapter.length;
      // }
      const completionRate = computed(() => ((Number(endChaptersCount.value) / Number(chaptersCount.value) * 100).toFixed(2)));
      
      //计算完成率
      // function completionRate(){
      //   const completionRate = (Number(endChaptersCount) / Number(chaptersCount) * 100).toFixed(2);
      //   console.log(completionRate)
      //   return completionRate;
      // }
      //改变总颜色
      const isCompleted = computed(() => (Number(endChaptersCount.value) === Number(chaptersCount.value)) ? 'green' : 'orange');

      //根据完成状态显示不同颜色
      function getPointClass(isEnd: boolean): string { return isEnd ? 'green' : 'orange'; }
      //完成任务点
      function setChapterEnd(chapter: { isEnd: boolean; }) {
        chapter.isEnd = true;
        //router.push({name: 'chapterDetails'})
      }
      return {
        courseId,
        selectCourse,
        endChaptersCount,
        isCompleted,
        chaptersCount,
        completionRate,
        titles,
        chapters,
        getPointClass,
        setChapterEnd
      }
    }
    return {
      chaptersCount: 0,
      completionRate: 0,
      endChaptersCount: 0,
    }
  }
})
</script>

<template>
<div class="chapter">
  <div class="chapter-head">
    <el-row>
      <el-col :span="4">
        <i :class="isCompleted" class="catalog_points"></i>
        <span style="font-size: 16px;">已完成任务点：<span style="color: rgb(45, 168, 127);">{{endChaptersCount}}</span>/{{chaptersCount}}</span>
      </el-col>
      <el-col :span="4">
        <el-progress :text-inside="true" :stroke-width="26" :percentage="completionRate" />
      </el-col>
    </el-row>
    <el-divider />
    <div class="ended">
      <span style="color:rgb(136, 140, 140);margin-left: 40px;">目录</span>
      <div class="demo-collapse">
        <el-collapse accordion v-for="(title,index) in titles">
          <el-collapse-item :name="`${index}`" v-if="courseId === title.courseId">
            <template #title>
              <div class="titlepoint">
                <div class="number"><span>{{title.titleId}}</span></div>
              </div>
              {{title.title}}
            </template>
            <ul v-for="chapter in selectCourse">
              <li v-if="title.titleId === chapter.titleId" @click="setChapterEnd(chapter)">
                <i :class="getPointClass(chapter.isEnd)" class="catalog_points"></i>
                {{ chapter.chaptername }}
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.catalog_points::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}
.catalog_points.green::before {
  /* background-color: green; */
  background-image: url(../../assets/myCourse/completed.svg);
}
.chapter{
  background-color: #ffffff;
  height: 600px;
  width: 1250px;
  border-radius: 10px;
}
.chapter-head{
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
.ended ul li:hover{
  background-color: #f0f0f0;
}
.demo-collapse{
  width: 1200px;
  margin: 20px;
}
.titlepoint{
  background-color: rgb(123, 120, 120);
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 50%;
  position: relative;
  display: flex; justify-content: center; align-items: center;
}
.number{
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  display: flex; justify-content: center; align-items: center; 
}
</style>