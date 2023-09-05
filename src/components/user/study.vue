<script setup lang="ts">

</script>

<template>
  <div class="study">
    <div class="study-head bg">
      <img class="icon-head" src="http://photo.chaoxing.com/p/106956779_80" />
      <span>哈登</span>
    </div>
    <div class="line-one">
      <div class="line-one-one">
        <p style="font-size: 16px;font-weight: bolder;">章节任务点</p>
        <div style="display: flex;">
          <div style="flex: 1;">
            <p><span style="font-size: 40px;">114</span>/114</p>
            <p style="font-size: 16px;">完成进度</p>
          </div>
          <div style="flex: 1;">
            <p><span style="font-size: 40px;">1</span>名</p>
            <p style="font-size: 16px;">当前排名</p>
          </div>
          <div style="flex: 1;">
            <el-progress type="dashboard" :percentage="80">
            <template #default="{ percentage }">
              <span class="percentage-value">{{ percentage }}%</span>
              <span class="percentage-label">完成率</span>
            </template>
          </el-progress>
          </div>
        </div>
      </div>
      <div class="line-one-two">
        <p style="font-size: 16px;font-weight: bolder;">章节学习次数</p>
        <p><span style="font-size: 40px;">72</span>次</p>
      </div>
      <div class="line-one-three">
        <p style="font-size: 16px;font-weight: bolder;">课程积分</p>
        <p><span style="font-size: 40px;">100</span>分</p>
      </div>
    </div>
    <div class="line-two">
      <div class="line-two-one">
        <p style="font-size: 16px;font-weight: bolder;">签到</p>
        <p style="margin: 75px auto;">暂无数据</p>
      </div>
      <div class="line-two-two">
        <p style="font-size: 16px;font-weight: bolder;">章节测验</p>
        <p><span style="font-size: 40px;">36</span>/36</p>
        <p style="font-size: 16px;">完成进度</p>
      </div>
      <div class="line-two-three">
        <p style="font-size: 16px;font-weight: bolder;">作业</p>
        <p style="margin: 75px auto;">暂无数据</p>
      </div>
    </div>
    <div class="line-three">
      <div class="line-three-one">
        <p style="font-size: 16px;font-weight: bolder;">签到</p>
        <div style="display: flex;">
          <div style="flex: 1;">
            <p><span style="font-size: 40px;">0</span>帖</p>
            <p style="font-size: 16px;">发帖</p>
          </div>
          <div style="flex: 1;">
            <p><span style="font-size: 40px;">0</span>帖</p>
            <p style="font-size: 16px;">回帖</p>
          </div>
          <div style="flex: 1;">
            <p><span style="font-size: 40px;">0</span>个</p>
            <p style="font-size: 16px;">获赞数</p>
          </div>
        </div>
      </div>
      <div class="line-three-two">
        <p style="font-size: 16px;font-weight: bolder;">在线考试</p>
        <div style="display: flex;">
          <div style="flex: 1;">
            <p><span style="font-size: 40px;">1</span>/1个</p>
            <p style="font-size: 16px;">完成进度</p>
          </div>
          <div style="flex: 1;">
            <p><span style="font-size: 40px;">95</span>分</p>
            <p style="font-size: 16px;">平均分</p>
          </div>
        </div>
      </div>
      <div class="line-three-three">
        <p style="font-size: 16px;font-weight: bolder;">分组任务</p>
        <p style="margin: 75px auto;">暂无数据</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.study{
  background-color: #f0f0f0;
  height: 600px;
  width: 1250px;
  border-radius: 10px;
  overflow: auto;
  overflow-x: hidden;
  padding-right: 10px;
}
.study-head{
  height: 100px;
  width: 1250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #ffffff;
}
.icon-head{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 20px 0 40px;
  vertical-align: middle;
}
.line-one{
  display: flex;
  height: 200px;
  width: 1250px;
  margin-bottom: 25px;
}
.line-two{
  display: flex;
  height: 180px;
  width: 1250px;
  margin-bottom: 25px;
}
.line-three{
  display: flex;
  height: 180px;
  width: 1250px;
}
.line-one-one{
  width: 600px;
  padding-left: 20px;
  margin-right: 25px;
  background-color: #ffffff;
  border-radius: 10px;
}
.line-one-two{
  width: 300px;
  padding-left: 20px;
  background-color: #ffffff;
  margin-right: 25px;
  border-radius: 10px;
}
.line-one-three{
  width: 300px;
  padding-left: 20px;
  background-color: #ffffff;
  border-radius: 10px;
}
.line-two-one{
  width: 600px;
  padding-left: 20px;
  margin-right: 25px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
.line-two-two{
  width: 300px;
  padding-left: 20px;
  background-color: #ffffff;
  margin-right: 25px;
  border-radius: 10px;
}
.line-two-three{
  width: 300px;
  padding-left: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
.line-three-one{
  width: 600px;
  padding-left: 20px;
  margin-right: 25px;
  background-color: #ffffff;
  border-radius: 10px;
}
.line-three-two{
  width: 300px;
  padding-left: 20px;
  background-color: #ffffff;
  margin-right: 25px;
  border-radius: 10px;
}
.line-three-three{
  width: 300px;
  padding-left: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
</style>