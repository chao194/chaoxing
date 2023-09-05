<script setup lang="ts">
import Head from '../user/head.vue'
</script>

<template>
  <Head />
  <el-backtop :right="50" :bottom="100" />
</template>

<style scoped>
.search{
  text-align: center;
}
input{
  border:3px solid red;
  background-color:transparent;
  width:400px
}
</style>
