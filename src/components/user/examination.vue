<script lang="ts">
import { reactive,defineComponent } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter,Router } from 'vue-router'
const router = useRouter()

const exams = reactive([
  {examName:'形势与政策考试一', isEnd:true, courseId:'2', examId:'1', testTime: '90'},
  {examName:'形势与政策考试二', isEnd:true, courseId:'2', examId:'2', testTime: '90'},
  {examName:'形势与政策考试三', isEnd:false, courseId:'2', examId:'3', testTime: '90'},
  {examName:'大数据基础考试一', isEnd:true, courseId:'4', examId:'1', testTime: '80'},
  {examName:'大数据基础考试二', isEnd:true, courseId:'4', examId:'2', testTime: '100'},
  {examName:'大数据基础考试三', isEnd:false, courseId:'4', examId:'3', testTime: '120'},
  {examName:'大数据基础考试四', isEnd:true, courseId:'4', examId:'4', testTime: '90'},
  {examName:'大数据基础考试五', isEnd:true, courseId:'4', examId:'5', testTime: '100'},
  {examName:'大数据基础考试六', isEnd:false, courseId:'4', examId:'6', testTime: '90'},
])

const databases = reactive([
  {
    questionId: 1,
    completed: true,
    questionType: "单选题",
    content: "以下哪个不是JavaScript的数据类型？",
    options: ["string", "number", "boolean", "array"],
    answer: "array"
  },
  {
    questionId: 1,
    completed: false,
    questionType: "多选题",
    content: "以下哪些是JavaScript的数据类型？",
    options: ["string", "number", "boolean", "array"],
    answer: ["string", "number", "boolean"]
  },
  {
    questionId: 1,
    completed: false,
    questionType: "填空题",
    content: "JavaScript中，变量声明的关键字是__。",
    answer: "var"
  },
  {
    questionId: 1,
    completed: false,
    questionType: "单选题",
    content: "以下哪个不是JavaScript的基本数据类型？",
    options: ["object", "string", "boolean", "function"],
    answer: "object"
  },
  {
    questionId: 1,
    completed: false,
    questionType: "多选题",
    content: "以下哪些是JavaScript的基本数据类型？",
    options: ["object", "string", "boolean", "function"],
    answer: ["string", "boolean", "function"]
  },
  {
    questionId: 1,
    completed: false,
    questionType: "填空题",
    content: "JavaScript中，输出到控制台的方法是__。",
    answer: "console.log"
  }
])
//按照题目类型分类
databases.sort((a, b) => {
  const typeOrder = ['单选题', '多选题', '填空题'];
  const aIndex = typeOrder.indexOf(a.questionType);
  const bIndex = typeOrder.indexOf(b.questionType);
  if (aIndex !== bIndex) {
    return aIndex - bIndex;
  }

  // 如果题目类型相同，则按照随机数进行排序
  return Math.random() - 0.5;
});
console.log(databases);
export default defineComponent({
  setup() {
    //获取当前URL
    const url = window.location.href;
    //获取当前课程号和考试号
    const courseId = url.match(/courseId=(\d+)/)?.[1] as string
    const examId = url.match(/examId=(\d+)/)?.[1] as string
    //获取考试名称
    function getExamName(courseId: string, examId: string) {
      const exam = exams.find(e => e.courseId === courseId && e.examId === examId)
      if (exam) {
        return { examName: exam.examName, testTime: exam.testTime }
      } else {
        return null
      }
    }
    //考试名称
    const examName = getExamName(courseId, examId)?.examName;

    //考试时间
    const testTime = getExamName(courseId, examId)?.testTime;
    const testTimeInMs = Number(testTime) * 60 * 1000; // 将testTime转换为毫秒数
    const examEndTime = new Date(Date.now() + testTimeInMs); // 计算考试结束时间

    //考试倒计时
    function updateCountdown() {
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');
      // 如果countdown元素不存在，直接返回
      if (!hoursElement || !minutesElement || !secondsElement) {
        return;
      }

      const now = new Date(); // 获取当前时间
      const remainingTimeInMs = examEndTime.getTime() - now.getTime(); // 计算剩余时间的毫秒数

      const remainingTimeInSeconds = Math.floor(remainingTimeInMs / 1000); // 将剩余时间转换为秒数
      const hours = Math.floor(remainingTimeInSeconds / 3600); // 计算剩余小时数
      const minutes = Math.floor((remainingTimeInSeconds % 3600) / 60); // 计算剩余分钟数
      const seconds = remainingTimeInSeconds % 60; // 计算剩余秒数
      // 更新剩余时间的显示
      hoursElement.innerHTML = `${hours}`;
      minutesElement.innerHTML = `${minutes}`;
      secondsElement.innerHTML = `${seconds}`;
    }
    setInterval(updateCountdown, 1000);
    setInterval(showCurrentQuestion, 1);

    //统计题目类型
    const questionTypes = Array.from(new Set(databases.map((q) => q.questionType )));
    console.log(questionTypes);
    // 定义当前题目的索引
    var currentQuestionIndex = 0;
    // 显示当前题目
    function showCurrentQuestion() {
      var questionDiv = document.getElementById("question");
      var currentQuestion = databases[currentQuestionIndex];
      var questionHTML = "";
      if (currentQuestion.questionType === "单选题") {
        questionHTML += "<h3>单选题</h3>";
        questionHTML += "<p>" + currentQuestion.content + "</p>";
        questionHTML += "<ul>";
        if(currentQuestion.options){
          for (var i = 0; i < currentQuestion.options.length; i++) {
            questionHTML += "<li><input type='radio' name='answer' value='" + currentQuestion.options[i] + "'>" + currentQuestion.options[i] + "</li>";
          }
        }
        questionHTML += "</ul>";
      } else if (currentQuestion.questionType === "多选题"){
        questionHTML += "<h3>多选题</h3>";
        questionHTML += "<p>" + currentQuestion.content + "</p>";
        questionHTML += "<ul>";
        if(currentQuestion.options){
          for (var i = 0; i < currentQuestion.options.length; i++) {
            questionHTML += "<li>" + currentQuestion.options[i] + "</li>";
          }
        }
        questionHTML += "</ul>";
      }else if (currentQuestion.questionType === "填空题") {
        questionHTML += "<h3>填空题</h3>";
        var content = currentQuestion.content.replace("__", "<input type='text' />");
        questionHTML += "<p>" + content + "</p>";
      }
      if(questionDiv){
        questionDiv.innerHTML = questionHTML;
      }
    }
    //页面加载后自动调用的方法
    document.addEventListener("DOMContentLoaded", function() {
      // 调用指定的方法
      showCurrentQuestion();
    });
    window.onload = function(){
      showCurrentQuestion();
    };
    //上一题
    function showPreviousQuestion(){
      if (currentQuestionIndex > 0) {
        currentQuestionIndex --; // 将当前问题的索引值减1
        showCurrentQuestion(); // 显示上一个问题
      }
    }
    //下一题
    function showNextQuestion(){
      if (currentQuestionIndex < databases.length - 1) {
        currentQuestionIndex ++; // 将当前问题的索引值加1
        showCurrentQuestion(); // 显示下一个问题
      }
    }
    console.log(currentQuestionIndex);
    //跳转到相应的题目
    function toQuestion(index: number){
      currentQuestionIndex = index;
      showCurrentQuestion();
    }
    //提交试卷
    function handleClick(router: Router) {
      ElMessageBox.confirm('确定提交试卷吗？','提示',{
        confirmButtonText:'确认',cancelButtonText:'取消',type:'warning'
      }).then(() => {
        ElMessage({message:'已提交！',type:'success'}),
        router.push({
          path:'/course/courseId=' + courseId
        })
        const exam = exams.find(item => item.examId === examId);
        // 如果找到了对应的考试对象
        if (exam) {
          // 更新考试状态isEnd为true
          exam.isEnd = true;
        }
        console.log(router)
      }).catch(() => {'取消提交'})
    }
    return {
      examName,
      testTime,
      databases,
      questionTypes,
      currentQuestionIndex,
      showPreviousQuestion,
      showNextQuestion,
      toQuestion,
      handleClick,
    }
  }
})
</script>

<template>
<div class="common-layout">
  <el-container class="header">
    <el-header>
      考试名称：{{ examName }}
      <!-- <div>倒计时：<span id="countdown"></span></div> -->
      <div>倒计时：<span id="hours" class="color-red"></span>时<span id="minutes" class="color-red"></span>分<span id="seconds" class="color-red"></span>秒</div>
    </el-header>
  </el-container>
  <el-container>
    <el-aside>
      <div class="user-block">
        <img class="head-img" src="../../assets/test.svg"/>
        <div>时长：{{ testTime }}分钟</div>
        <div>总分：100</div>
      </div>
      <div v-for="(type, index) in questionTypes">
        <div>{{ type }}</div>
        <span
          v-for="(question, index) in databases"
          :key="index"
          v-show="question.questionType === type"
          :class="{ 'completed': question.completed }"
          class="question-box"
          @click="toQuestion(index)"
          style="cursor: pointer;"
          >
          {{ index + 1 }}
        </span>
        <el-divider style="margin: 10px 0 10px;"/>
      </div>
      <el-button type="primary" size="large" @click="handleClick($router)">提交试卷</el-button>
    </el-aside>
    <el-main>
      <div id="question">
      </div>
      <div class="test">
        <div>
          <!-- 题目 -->
          <!-- <h3>{{ currentQuestion.type }}</h3> -->
          <!-- <p>{{ currentQuestion.content }}</p> -->
          <!-- <div v-if="currentQuestion.type === '单选题'">
            <ul>
              <li v-for="(option, index) in currentQuestion.options">
                <input type='radio' name='answer' value='options'>
                {{ option }}
              </li>
            </ul>
          </div> -->
          <!-- <div v-if="currentQuestion.type === '多选题'">
            <ul>
              <li v-for="(option, index) in currentQuestion.options">
                <input type='checkbox' name='answer' value='options'>
                {{ option }}
              </li>
            </ul>
          </div> -->
          <!-- <div v-if="currentQuestion.type === '填空题'">
            {{ currentQuestion.options }}
            <input name='answer' value=''>
          </div> -->
          {{  }}
        </div>
      </div>
      <div>
        <el-button @click="showPreviousQuestion()" type="primary">上一题</el-button>
        <el-button @click="showNextQuestion()" type="primary">下一题</el-button>
      </div>
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
  overflow-x: hidden;
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
  height: 600px;
  overflow: hidden;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 20px;
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
.color-red{
  color: red;
}
.question-box {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  margin-right: 5px;
  border-radius: 50%;
}
.completed {
  background-color: rgb(156, 179, 156);
}
.radio-list input[type='radio'] {
  /* 添加你想要的样式 */
  margin-right: 10px; /* 设置单选框与选项之间的间距 */
}

.radio-list li {
  /* 添加你想要的样式 */
  list-style-type: none; /* 去除选项前面的默认样式 */
}

.radio-list input[type='radio']:checked {
  /* 添加被选中时的样式 */
  background-color: #f00; /* 设置被选中的单选框的背景颜色为红色 */
}
</style>