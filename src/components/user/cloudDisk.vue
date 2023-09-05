<script setup lang="ts">
import { ref,reactive,onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
const checkedAll = ref(false)
const showDeleteButton = ref(false)

const checkboxes = reactive([
  {label:"我发出的", src:'/src/assets/file.svg', cheaked:false, isRead:true},
  {label:"作业一", src:'/src/assets/notice.svg', cheaked:false, isRead:true},
  {label:"作业二", src:'/src/assets/notice.svg', cheaked:false, isRead:false}
])

onMounted(() => {
  const categoryBtn = document.querySelector(".category-btn") as HTMLElement;
  const dropdownMenu = document.querySelector(".dropdown-menu") as HTMLElement;
  const dropdownContainer = document.querySelector(".dropdown-container") as HTMLElement;

  dropdownMenu.style.display = "none";

  categoryBtn.addEventListener("mouseenter", () => {
    dropdownMenu.style.display = "block";
  });

  dropdownContainer.addEventListener("mouseleave", () => {
    dropdownMenu.style.display = "none";
  });
  
})

//全选按钮实现
const toggleAllCheckboxes = () => {
  checkboxes.forEach(checkbox =>{
    checkbox.cheaked = checkedAll.value
  })
}
//选中所有单个复选框自动触发全选
const updateCheakAll = () => {
  checkedAll.value = checkboxes.every(checkbox => checkbox.cheaked)
  showDeleteButton.value = checkboxes.some((checkbox => checkbox.cheaked))
}
//删除按钮实现
function deleteSelected(){
  //使用filter方法过滤出来未选中的复选框
  const remainingCheckboxes = checkboxes.filter((checkbox => !checkbox.cheaked))
  //更新checkboxes数组
  checkboxes.splice(0,checkboxes.length,...remainingCheckboxes);
  //如果所有复选框都被删除，隐藏删除按钮
  if(checkboxes.length === 0){
    checkedAll.value = false;//???
    showDeleteButton.value = false;
  }
}
//置顶
function pinToTop(index: number){
  if(index > 0){
    const itemToPin = checkboxes[index];
    checkboxes.splice(index, 1);//删除当前项
    checkboxes.unshift(itemToPin);//将当前项添加到数组开头
  }
}
//删除
function deleteCheckbox(index: number){
  checkboxes.splice(index, 1);//删除当前项
  if(checkboxes.length === 0){
    checkedAll.value = false;
  }
}

//搜索
function filteredCheckboxes(){
  if(!input.value){
    return checkboxes;
  }
  return checkboxes.filter((checkbox) => {
      return checkbox.label.includes(input.value);
  });
}

//复选框已选数量
function countUnchecked() {
  const uncheckedCheckboxes = filteredCheckboxes().filter((checkbox) => {
    return checkbox.cheaked;
  });
  return uncheckedCheckboxes.length;
}

</script>

<template>
<div class="cloudDisk">
  <div class="cloudDisk-head">
    <el-row>
      <el-col :span="3">
        <el-button type="primary" size="large" round>
          <img src="../../assets/upload.svg"/>
          上传文件
        </el-button>
      </el-col>
      <el-col :span="3">
        <el-button size="large" round>新建文件夹</el-button>
      </el-col>
      <el-col :span="3">
        <el-button v-if="showDeleteButton" @click="deleteSelected()" type="danger" size="large" round>删除</el-button>
      </el-col>
      <div class="dropdown-container">
        <a class="category-btn">分类
          <img src="../../assets/dropdown.svg" />
        </a>
        <div class="dropdown-menu">
          <div>
            <a>全部</a>
            <a>图片</a>
          </div>
          <div>
            <a>PPT</a>
            <a>视频</a>
          </div>
          <div>
            <a>Excel</a>
            <a>音频</a>
          </div>
          <div>
            <a>Word</a>
            <a>安装包</a>
          </div>
          <div>
            <a>PDF</a>
            <a>压缩包</a>
          </div>
          <el-divider style="margin: 10px 0 10px;border-color: rgb(231, 229, 229);"/>
          <div>
            <a>电子书</a>
            <a>笔记</a>
          </div>
          <div>
            <a>专题</a>
            <a>话题</a>
          </div>
          <div>
            <a>期刊</a>
            <a>题目</a>
          </div>
          <div>
            <a>报纸</a>
            <a>其他</a>
          </div>
        </div>
      </div>
      <el-col :span="3" :offset="8">
        <el-input
          v-model="input"
          @click="filteredCheckboxes"
          size="large"
          placeholder="搜索"
          :suffix-icon="Search"
        />
      </el-col>
    </el-row>
  </div>
  <div>
    <div class="content-text" v-if="filteredCheckboxes().length === 0">
      暂无相关消息
    </div>
  </div>
</div>
</template>
<style scoped>
.cloudDisk{
  background-color: white;
  height: 600px;
  width: 82vw;
  border-radius: 10px;
}
.cloudDisk-head{
  height: 80px;
  margin-left: 40px;
  padding-top: 20px;
}
.el-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.actions{
  display: none;
  position: absolute;
  right: 500px;
}
.content-text{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
  color: white;
}
.dropdown-container{
  position: relative;
}
.dropdown-menu{
  border: 2px solid rgb(215, 213, 213);
  box-sizing: 0 0 2px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: white;
  width: 200px;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(-30%);
  z-index: 9999;
}
.category-btn{
  position: relative;
}
.category-btn::after{
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10000;
}
.dropdown-menu div{
  width: 200px;
}
a{
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 100px;
  text-align: center;
}
a:hover{
  background-color: rgb(184, 186, 190);
}
</style>