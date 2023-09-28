<script setup>
import BlogHeader from '../views/BlogHeader.vue'
 import {ref} from 'vue'
 const travelList = ref([
 {menu:'Caramel Macchiato',name:'สุขพอดี Simply Happy',price: 120,size:'s: 120 m: 150 l:200',img:"https://gangtravel.com/upload/2022/01/6-1_800x503.jpg.webp",text:'ร้านคาเฟ่นี้มีที่ตั้งที่เงียบสงบและเป็นธรรมชาติ โดดเด่นด้วยบรรยากาศที่อบอุ่นและน่ารัก'}
]);


</script>

<template>
  <BlogHeader></BlogHeader>
    <div class="container">
    <div class="row mb-2">
    <div class="col" v-for="(n,index) in travelList" :key="index" >
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis text-center">Let's meet at our café</strong>
          <h3 class="mb-0"><strong>{{ n.name }}</strong></h3>
          <h4>Recommend Menu: {{ n.menu }}</h4>
          <div class="mb-1 text-body-secondary">
            
            <h4>Price{{ n.price }}</h4>
          </div><h6>Size {{ n.size }}</h6>
          <p class="card-text mb-auto">{{ n.text }}</p>
          <img :src="n.img" alt="img" class="img-newcard">
          <div class="center">
            <RouterLink to="/"><a class="btn btn-outline-primary rounded-pill" href="#">Home Page</a></RouterLink>
          </div>
        </div>
        
      </div>
    </div>
    </div>
</div>
</template>
<style>
.center{
  text-align: center;
  padding: 20px;
}
.img-newcard{
  max-width: 500px;
  margin: 10px;
}
</style>