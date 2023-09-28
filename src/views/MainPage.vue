<script setup>
import NewCrad from './NewCrad.vue';
import BlogHeader from '../views/BlogHeader.vue'

//เก็บข่าว
// const newsList = ref([
//   {title:'',content:'', dete:''}
// ])

</script>

<template>
  <RouterView></RouterView>
                <BlogHeader></BlogHeader>
                <NewCrad></NewCrad>

</template>