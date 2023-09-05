<script setup lang="ts">
import { reactive } from 'vue'

const courses = reactive([
  {course:"培训与竞赛", src:'http://p.ananas.chaoxing.com/star3/240_130c/8a0d7e35ecbb20ec4b19f185eed0bc2b.jpg', name:'李涛', class:'2022年JJU信息技术知识大赛',courseId:'1'},
  {course:"形势与政策", src:'http://p.ananas.chaoxing.com/star3/240_130c/6ffba3b987386ac0b1493280e29536fb.jpg', name:'夏仕', class:'计算机学院',courseId:'2'},
  {course:"大数据分布式存储", src:'http://p.ananas.chaoxing.com/star3/240_130c/669ca80d6a0c5f74835bb936a41aabca.jpg', name:'汪彬彬', class:'信息A1921',courseId:'3'},
  {course:"大数据基础", src:'http://p.ananas.chaoxing.com/star3/240_130c/a83f7a04a1ebec7b608e52bdb96b4f5b.jpg', name:'徐蓓', class:'信息A1921',courseId:'4'},
  {course:"数据库性能优化", src:'http://p.ananas.chaoxing.com/star3/240_130c/53c5e276a310a822ad8b29db.jpg', name:'周友学', class:'信息A1921',courseId:'5'},
])
const url = window.location.href;
const urlArray = url.split("/");
const rootPath = urlArray[0] + "//" + urlArray[2] + '/#';
console.log(rootPath); // 输出：http://127.0.0.1:5173

</script>

<template>
<div>
  <ul class="course-list" v-for="(course,index) in courses">
    <li class="course">
      <div class="course-cover">
        <a :href="rootPath + '/course/courseId=' + course.courseId" target="_blank" tabindex="-1">
          <img :src="course.src" />
        </a>
        <a :href="rootPath + '/course/courseId=' + course.courseId" target="_blank" tabindex="-1">
          <span class="course-name">
            {{course.course}}
          </span>
        </a>
        <p>{{course.name}}</p>
        <p>{{course.class}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<style scoped>
ul{
  list-style: none;
}
li:hover{
  box-sizing: border-box;
  border: 2px solid #8799d3;
  box-shadow: 0 0 5px #000;
}
.course{
  float: left;
  height: 240px;
  width: 200px;
  border-radius: 8px;
  margin-right: 40px;
  margin-bottom: 10px;
}
p{
  color: rgba(20, 22, 22, 0.704);
  height: 10px;
  font-size: 10px;
  text-align: center;
}
a{
  font-size: 18px;
  color:black;
  text-decoration: none;
}
a:hover{
  color: rgb(17, 121, 212);
}
img{
  border-radius: 8px;
  width: 200px;
}
.course-name{
  word-break: break-all;
}
.course-cover{
  height: 240px;
  border-radius: 8px;
  background-color: rgb(242,244,247);
  text-align: center;
}
</style>