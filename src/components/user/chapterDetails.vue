<script setup lang="ts">
// function startResize(this: any, event: MouseEvent) {
//   // 获取分割线的初始位置
//   const startX = event.clientX;

//   // 在mousemove事件中处理分割线的左右拉伸
//   var resize = (event: MouseEvent) => {
//     // 计算分割线的偏移量
//     const offsetX = event.clientX - startX;

//     // 更新左边和右边的宽度
//     (this.$refs.left as HTMLElement).style.width = `${(this.$refs.left as HTMLElement).offsetWidth + offsetX}px`;
//     (this.$refs.right as HTMLElement).style.width = `${(this.$refs.right as HTMLElement).offsetWidth - offsetX}px`;
//   };

//   // 在mouseup事件中停止分割线的左右拉伸
//   var stopResize = () => {
//     document.removeEventListener('mousemove', resize);
//     document.removeEventListener('mouseup', stopResize);
//   };
//   // 添加mousemove和mouseup事件监听器
//   document.addEventListener('mousemove', resize);
//   document.addEventListener('mouseup', stopResize);
// }
</script>

<template>
  <div class="head">
    <a>返回课程</a>
    <span>章节详情</span>
  </div>
  <div class="container">
    <div class="left">
      左边内容
    </div>
    <div class="divider" @mousedown=""></div>
    <div class="right">
      <el-tabs class="demo-tabs">
        <el-tab-pane label="目录" name="first">
          <el-input clearable />
        </el-tab-pane>
        <el-tab-pane label="讨论" name="second">
          <a><img src="../../assets/add.svg"/>新建话题</a>
        </el-tab-pane>
        <el-tab-pane label="笔记" name="third">
          <a><img src="../../assets/add.svg"/>新建笔记</a>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped>
.head{
  height: 50px;
  background-color: rgb(135, 135, 165);
  width: 100%;
}
.container {
  display: flex;
  height: 100%;
  flex-direction: row;
}
.left {
  flex: 1;
  background-color: #f0f0f0;
}
.divider {
  width: 10px;
  background-color: #ccc;
}
.right {
  flex: 1;
  background-color: #f0f0f0;
}
</style>
