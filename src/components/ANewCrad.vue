<script setup>
import BlogHeader from '../views/BlogHeader.vue'
 import {ref} from 'vue'
 const travelList = ref([
  {menu:'Dalgona Coffee',name:'WTF Coffee Camp ', price: 80,size:'s: 80 m: 150 l:200',img:"https://gangtravel.com/upload/2022/01/2-7.jpg.webp",text:'คาเฟ่เลิฟเวอร์หากมาเที่ยวม่อนแจ่มต้องแวะมา WTF Coffee Camp หรือ Waterfall Coffee Camp ร้านกาแฟริมน้ำตกที่ตกแต่งในสไตล์แคมปปิ้ง ทั้งโต๊ะเก้าอี้ใต้ร่มไฟล์ชีท ตามมุมต่างๆ ให้ความรู้สึกเหมือนกำลังนั่งแคมป์ปิ้งกลางป่าเขา ชิลดีแท้ ร้านตั้งอยู่ภายในกังสดาลรีสอร์ท เลยทางเข้าม่อนแจ่มมาไม่ไกลมาก ใครผ่านมาเที่ยวม่อนแจ่มต้องมาถ่ายรูป นั่งจิบเครื่องดื่ม ฟังเสียงน้ำตก ให้จิตใจผ่อนคลาย ร่มรื่นเย็นสบายจากธรรมชาติสีเขียวที่รายล้อม '},
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