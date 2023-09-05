<script setup lang="ts">
import { ref,reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
const checkedAll = ref(false)
const showDeleteButton = ref(false)
const showSelectButton = ref(false)
const hoveredIndex = ref(-1)
const showHead = ref(true)
const checkboxes = reactive([
  {label:"小组一", src:'/src/assets/group.svg', cheaked:false},
  {label:"小组二", src:'/src/assets/group.svg', cheaked:false},
  {label:"小组三", src:'/src/assets/group.svg', cheaked:false}
])

//全选按钮实现
const toggleAllCheckboxes = () => {
  checkboxes.forEach(checkbox =>{
    checkbox.cheaked = checkedAll.value
  })
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

//批量编辑
function bulkEditing(){
  checkboxes.every(checkbox => checkbox.cheaked = true)
  showHead.value = !showHead.value
  showSelectButton.value = !showSelectButton.value
  showDeleteButton.value = !showDeleteButton.value
  checkedAll.value = true;
}
//退出编辑
function exitEditing(){
  checkboxes.every(checkbox => checkbox.cheaked = false)
  showHead.value = !showHead.value
  showSelectButton.value = !showSelectButton.value
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

</script>

<template>
<div class="group">
  <el-row>
    <el-col :span="3"><span>我的小组</span></el-col>
  </el-row>
  <el-divider style="margin: 10px 0 10px;border-color: rgb(231, 229, 229);"/>
  <div class="group-head" v-if="showHead">
    <el-row>
      <el-col :span="3">
        <el-button type="primary" size="large" round>
          <img src="../../assets/add.svg" style="padding-right: 10px;"/>
          新建小组
        </el-button>
      </el-col>
      <el-col :span="3">
        <el-button size="large" round>新建文件夹</el-button>
      </el-col>
      <el-col :span="3" :offset="10">
        <a @click="bulkEditing()" style="color:rgb(48, 48, 150)">批量编辑</a>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-input
          v-model="input"
          @click="filteredCheckboxes"
          size="large"
          placeholder="搜索"
          :suffix-icon="Search"
        />
      </el-col>
    </el-row>
    <div>
      <span style="margin-left: 40px;font-size: 10px;">全部小组</span>
    </div>
  </div>
  <div class="group-head" v-if="!showHead">
    <span style="margin-left: 40px;font-size: 10px;">全部小组</span>
    <el-row>
    <el-col :span="2">
      <el-checkbox v-model="checkedAll" size="large" @change="toggleAllCheckboxes" />
      <span style="font-size: 16px;">全选</span>
    </el-col>
    <el-col :span="3">
      <el-button v-if="showDeleteButton" @click="deleteSelected()" type="danger" round>删除</el-button>
    </el-col>
    <el-col :span="3" :offset="13">
      <a @click="exitEditing" style="color:rgb(48, 48, 150)">退出编辑</a>
    </el-col>
  </el-row>
  </div>



  <el-divider style="margin: 10px 0 10px;border-color: rgb(231, 229, 229);"/>
  <div>
    <div class="content-text" v-if="filteredCheckboxes().length === 0">
      暂无相关小组
    </div>
    <div class="check"
      v-for="(checkbox,index) in filteredCheckboxes()"
      :key="index"
      @mouseover="hoveredIndex = index"
      @mouseleave="hoveredIndex = -1"
    >
      <el-checkbox v-model="checkbox.cheaked" size="large" v-if="showSelectButton"/>
      <a style="margin-left: 20px;">
        <img :src="checkbox.src" />
        {{checkbox.label}}
      </a>
      <div class="actions" v-show="hoveredIndex === index">
        <el-button @click = "pinToTop(index)">置顶</el-button>
        <el-button @click = "deleteCheckbox(index)">删除</el-button>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.group{
  background-color: white;
  height: 600px;
  width: 82vw;
  border-radius: 10px;
}
.group-head{
  height: 60px;
}
.el-drawer:focus {
    outline: none; 
}
.el-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-checkbox{
  margin-left: 20px;
}
.check{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}
a{
  display: flex;
  align-items: center;
  position: relative;
}
a img{
  margin-right: 5px;
  margin-left:  5px;
}
.check:hover{
  background-color: rgb(169, 173, 210);
  cursor: pointer;
}
.actions{
  display: none;
  position: absolute;
  right: 500px;
}
.check:hover .actions{
  display: block;
}
.content-text{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
  color: #A8A8B3;
}
</style>