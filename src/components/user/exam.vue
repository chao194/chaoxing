<script lang="ts">
import {ref,reactive,defineComponent,computed} from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const exams = reactive([
  {examName:'形势与政策考试一',isEnd:true,courseId:'2',examId:'1'},
  {examName:'形势与政策考试二',isEnd:true,courseId:'2',examId:'2'},
  {examName:'形势与政策考试三',isEnd:false,courseId:'2',examId:'3'},
  {examName:'大数据基础考试一',isEnd:true,courseId:'4',examId:'1'},
  {examName:'大数据基础考试二',isEnd:true,courseId:'4',examId:'2'},
  {examName:'大数据基础考试三',isEnd:false,courseId:'4',examId:'3'},
  {examName:'大数据基础考试四',isEnd:true,courseId:'4',examId:'4'},
  {examName:'大数据基础考试五',isEnd:true,courseId:'4',examId:'5'},
  {examName:'大数据基础考试六',isEnd:false,courseId:'4',examId:'6'},
])

export default defineComponent({
  setup() {
    const radio = ref(1)
    const router = useRouter()
    //获取当前URL
    const url = window.location.href;
    const courseId = url.split("courseId=")[1];
    //获取与courseId匹配的对象
    const selectCourse = exams.filter(exam => exam.courseId === courseId)
    console.log(selectCourse)
    if(selectCourse){
      //进行中
      const notEndExams = selectCourse.filter(exam => !exam.isEnd)
      //已结束
      const endExams = selectCourse.filter(exam => exam.isEnd)
      //默认显示全部考试
      let examList = selectCourse;
      //根据状态筛选考试
      const handleChange = computed(() =>
        ((Number(radio.value) === 1) ? selectCourse : (Number(radio.value) === 2) ? endExams : notEndExams))
      console.log(examList)
      
      // function close(exam: { examName?: string }){
      //   ElMessage({
      //     message: exam.examName +'考试后不允许查看！',
      //     type: 'warning',
      //   })
      // }
      // function open(exam: { examName: string ;examId: string;courseId: string}) {
      //   ElMessage({
      //     message: '欢迎参加'+ exam.examName +'考试！',
      //     type: 'success',
      //   })
      //   router.push({
      //     name: 'examination',
      //     params: { examId: exam.examId, courseId: exam.courseId },
      //   })
      // }
      function handleClick(exam: { isEnd: any; examName: string; examId: any; courseId: any }){
        if(exam && exam.isEnd){
          ElMessage({
            message: exam.examName +'考试后不允许查看！',
            type: 'warning',
          })
        }else{
          ElMessage({
          message: '欢迎参加'+ exam.examName +'考试！',
          type: 'success',
        })
        router.push({
          name: 'examination',
          params: { examId: exam.examId, courseId: exam.courseId },
        })
        }
      }
      return {
        radio,
        handleChange,
        examList,
        // close,
        // open,
        handleClick
      }
    }
    return {
      examList: [],
    }
  },
})
</script>

<template>
<div class="exam">
  <el-divider />
  <div class="exam-head">
    <span style="font-size: 16px;color: rgb(185, 185, 185);margin-right: 20px;">筛选</span>
    <el-radio-group v-model="radio">
      <el-radio :label="1">全部</el-radio>
      <el-radio :label="2">已完成</el-radio>
      <el-radio :label="3">未完成</el-radio>
    </el-radio-group>
  </div>
  <div class="exam-main">
    <ul>
      <li v-for="exam in handleChange" @click="handleClick(exam)">
        <img src="../../assets/myCourse/exam.svg" style="vertical-align: middle; width: 40px;height: 40px;" />
        {{ exam.examName }}
        <img v-show="exam.isEnd" src="../../assets/myCourse/completed.svg" style="vertical-align: middle;" />
        <img v-show="!exam.isEnd" src="../../assets/myCourse/uncompleted.svg" style="vertical-align: middle;" />
        <span style="float: right;padding-right: 40px;font-size: 16px;">{{ exam.isEnd ? '已完成' : '未完成' }}</span>
      </li>
    </ul>
  </div>
</div>

</template>

<style scoped>
.exam{
  width: 1250px;
  height: 600px;
  overflow: scroll;
  overflow-x: hidden;
  border-radius: 10px;
  background-color: #ffffff;
}
.exam-head{
  padding-left: 20px;
  height: 50px;
}
.exam-main ul {

  padding: 0;
}
.exam-main ul li{
  height: 80px;
  line-height: 80px;
  padding-left: 20px;
  border-radius: 10px;
}
.exam-main ul li:hover{
  background-color: #cedcf0;
  cursor: pointer;
}
</style>