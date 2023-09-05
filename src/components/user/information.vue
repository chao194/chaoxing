<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadInstance } from 'element-plus'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
function handlePreview(this: any,file: any){
  const fileType = file.name.split('.')[1];
  console.log(fileType);
  console.log(file);
  // 根据文件类型选择合适的预览方式
  if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg') {
    // 图片文件预览
    this.$alert(`<img src="${file.url}" alt="${file.name}" />`, '图片预览', {
      dangerouslyUseHTMLString: true,
    });
    console.log("图片")
  } else if (fileType === 'mp4') {
    // 视频文件预览
    this.$alert(`<video src="${file.url}" controls></video>`, '视频预览', {
      dangerouslyUseHTMLString: true,
    });
  } else {
    // 其他文件类型预览
    this.$alert(`<iframe src="${file.url}" width="100%" height="500px"></iframe>`, '文件预览', {
      dangerouslyUseHTMLString: true,
    });
  }
}
function limitUpload(){
  console.log("超过上传数量")
}
</script>

<template>
<div class="chapter">
  <div class="upload">
    <!-- drag拖拽上传  accept接受上传的文件类型 -->
    <el-upload
      ref="uploadRef"
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :auto-upload="false"
      :on-preview= "handlePreview"
      :on-exceed= "limitUpload"
      :limit = "3"
      drag
      accept
      list-type = "picture"
    >
      <template #trigger>
        <el-button type="primary">选择文件</el-button>
      </template>
      <template #tip>
        <div class="el-upload__tip">
          文件大小建议不超过500MB
        </div>
      </template>
    </el-upload>
    <el-button class="ml-3" type="success" @click="submitUpload">
      上传文件
    </el-button>
  </div>
</div>
</template>
<style scoped>
.chapter{
  background-color: #ffffff;
  height: 580px;
  width: 1250px;
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 20px;
}
</style>