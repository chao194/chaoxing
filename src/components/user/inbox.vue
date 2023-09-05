<script setup lang="ts">
import { ref,watchEffect,reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
const radio =ref('1')
const checkedAll = ref(false)
const showDeleteButton = ref(false)
const hoveredIndex = ref(-1)
const showDialog = ref(false)

const checkboxes = reactive([
  {label:"我发出的", src:'/src/assets/file.svg', cheaked:false, isRead:true},
  {label:"作业一", src:'/src/assets/notice.svg', cheaked:false, isRead:true},
  {label:"作业二", src:'/src/assets/notice.svg', cheaked:false, isRead:false}
])

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

//标为未读
function markAsUnread(index: number){
  checkboxes[index].isRead = false;
}
//标为已读
function markAsRead(index: number){
  checkboxes[index].isRead = true;
}
//清除红点
function markAsAllRead(){
  checkboxes.every(checkbox => checkbox.isRead = true)
}
//确保在组件初始化时正确设置全选复选框的状态
watchEffect(() =>{
  updateCheakAll()
})

//设置对话框
function toggleDialog(){
  showDialog.value = !showDialog.value;
}
function confirm(){
  showDialog.value = false;
}
function cancel(){
  showDialog.value = false;
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
<div class="inbox">
  <div class="inbox-head">
    <el-row>
      <el-col :span="3">
        <el-button type="primary" size="large" round>写站内信函</el-button>
      </el-col>
      <el-col :span="3">
        <el-button size="large" round>新建文件夹</el-button>
      </el-col>
      <el-col :span="3">
        <el-button v-if="showDeleteButton" @click="deleteSelected()" type="danger" size="large" round>删除</el-button>
      </el-col>
      <el-col :span="4">
        <a @click="markAsAllRead()">
          <img src="../../assets/clear.svg"/>清除红点</a>
      </el-col>
      <el-col :span="4">
        <el-dropdown size="large">
            <a>全部
              <img src="../../assets/dropdown.svg" />
            </a>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>通知</el-dropdown-item>
              <el-dropdown-item>站内信函</el-dropdown-item>
              <el-dropdown-item>审批</el-dropdown-item>
              <el-dropdown-item>未读</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="input"
          @click="filteredCheckboxes"
          size="large"
          placeholder="搜索"
          :suffix-icon="Search"
        />
      </el-col>
      <el-col :span="4">
        <a @click="toggleDialog">
          <img src="../../assets/setting.svg"/>设置</a>
      </el-col>
      <!-- 设置对话框 -->
      <el-dialog
        v-model="showDialog"
        title="列表视图设置"
        width="30%"
      >
        <el-radio-group v-model="radio">
          <el-radio label="1" size="large">标准模式</el-radio>
          <el-radio label="2" size="large">迷你模式</el-radio>
        </el-radio-group>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirm">确认</el-button>
          </span>
        </template>
      </el-dialog>
    </el-row>
  </div>
  <div>
    <div style="background-color: #f0f0f0;height: 40px;margin-top:10px;">
      <el-checkbox v-model="checkedAll" size="large" @change="toggleAllCheckboxes" />
      <span style="font-size: 16px;padding-left: 10px;">已选</span><span style="color: rgb(39, 138, 184);">{{countUnchecked()}}</span>
    </div>
    <div class="content-text" v-if="filteredCheckboxes().length === 0">
      暂无相关消息
    </div>
    <div class="check"
        v-for="(checkbox,index) in filteredCheckboxes()"
        :key="index"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = -1"
    >
      <el-checkbox v-model="checkbox.cheaked" size="large" @change="updateCheakAll" />
      <a>
        <img :src="checkbox.src" />
        <span class="unread-dot" v-if="!checkbox.isRead"></span>
        {{checkbox.label}}
      </a>
      <div class="actions" v-show="hoveredIndex === index">
        <el-button @click = "pinToTop(index)">置顶</el-button>
        <el-button @click = "deleteCheckbox(index)">删除</el-button>
        <el-button @click = "markAsUnread(index)" v-if="checkbox.isRead">标为未读</el-button>
        <el-button @click = "markAsRead(index)" v-if="!checkbox.isRead">标为已读</el-button>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.inbox{
  background-color: white;
  height: 600px;
  width: 82vw;
  border-radius: 10px;
}
.inbox-head{
  height: 40px;
  margin-left: 40px;
  padding-top: 20px;
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
  background-color: #f0f0f0;
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
.unread-dot{
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
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