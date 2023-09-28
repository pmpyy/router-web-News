<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'

//เก็บข่าว
 const travelList = ref([
  {menu:'Dalgona Coffee',link:'ANewCrad',name:'WTF Coffee Camp ', price: 80,size:{s: 80, m: 150,l:200},img:"https://gangtravel.com/upload/2022/01/2-7.jpg.webp",text:'ร้านกาแฟริมน้ำตกที่ตกแต่งในสไตล์แคมปปิ้ง   ให้ความรู้สึกเหมือนกำลังนั่งแคมป์ปิ้งกลางป่าเขา'},
  {menu:'Caramel Macchiato',link:'ANewCrad2',name:'สุขพอดี Simply Happy',price: 120,size:{s: 120, m: 150,l:200},img:"https://gangtravel.com/upload/2022/01/6-1_800x503.jpg.webp",text:'ร้านคาเฟ่นี้มีที่ตั้งที่เงียบสงบและเป็นธรรมชาติ โดดเด่นด้วยบรรยากาศที่อบอุ่นและน่ารัก'},
  {menu:'Iced Chocolate - Mint',link:'ANewCrad3',name:'กำปอ kam Por',price: 150,size:{s: 150, m: 200,l:250},img:"https://gangtravel.com/upload/2022/01/11_800x450-2.jpg.webp",text:'ร้านที่ถูกโอบล้อมด้วยธรรมชาติ ขุนเขา และสายน้ำ บรรยากาศร่มรื่น ตกแต่งน่ารัก อบอุ่น'},
  {menu:'cappuccino',link:'ANewCrad4',name:'ผลิ Phli',price: 120,size:{s: 120, m: 150,l:200},img:"https://www.paiduaykan.com/travel/wp-content/uploads/2022/01/1-SON09405.jpg",text:'ตกแต่งแนวอบอุ่น สไตล์โฮมมี่โดยเอาบ้านไม้สองชั้นมารีโนเวทเป็นคาเฟ่ให้บรรยากาศเหมือน นั่งกินข้าวและจิบกาแฟที่บ้านตัวเอง'},
  {menu:'Mint bomb',link:'ANewCrad5',name:'undo studio',price: 150,size:{s: 150, m: 200,l:250},img:"https://www.paiduaykan.com/travel/wp-content/uploads/2020/10/undo-studio1.jpg",text:'คาเฟ่ไซส์มินิที่ดูภาพรวมแล้วน่ารักเหมือนหลุดออกมาจากในการ์ตูน ในส่วนของเมนูมีให้เลือกทั้งชา กาแฟ โกโก้ และขนมเค้กให้ทาน'},
  {menu:'latte',link:'ANewCrad6',name:'yellow cup',price: 100,size:{s: 80, m: 150,l:200},img:"https://www.paiduaykan.com/travel/wp-content/uploads/2020/10/yellow-cup1.jpg",text:'ร้านสีเหลืองละมุนและคุกกี้ช็อกโกแลตหนึบ ๆ หน้าตาน่ารักลอง เป็นการเติมเต็มช่วงเวลาแห่งความสุขได้อย่างเต็มที่'}
 ]);
</script>
<template>
  <div class="container text-center">
    <div class="row mb-2" >
      <div class="col-md-6" v-for="(n,index) in travelList" :key="index" >
          <div class="card">
          <div c>
            <strong class="d-inline-block mb-2 ">Coffee {{index+1 }}</strong> 
          </div>
            <h3><strong class="mb-0">{{ n.name }}</strong></h3>
          <div class="mb-1 text-body-secondary">
            Recomend Menu : {{ n.menu }} <br>
            Price{{ n.price }} <br>
            <img :src="n.img" alt="img" class="img-card">
          </div>
          <RouterLink :to="n.link"> 
          <a class="btn btn-outline-primary rounded-pill" href="#">View more</a>
        </RouterLink>
          </div>
        
      </div>      
    </div>
  </div>
    <!-- <div class="row mb-2">
     <div class="col-md-10" v-for="(n,index) in travelList" :key="index" >
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 ">Coffee {{index+1 }}</strong>
          <h3><strong class="mb-0">{{ n.name }}</strong></h3>
          <div class="mb-1 text-body-secondary">Price{{ n.price }} <br>
            <img :src="n.img" alt="img" style="max-width:200px;">
          </div>
          
          <p class="card-text mb-auto"></p>
          
          <RouterLink :to="n.link">รายละเอียด</RouterLink>
            
        </div>
        <div class="col-auto d-none d-lg-block">
          
          
        </div>
      </div>
    </div>
    </div> -->

</template>
<style>
.card{
  padding: 20px;
  margin-top: 20px;
  max-height: 800px;
}
.img-card{
  max-height: 200px;
  padding: 10px;
}
</style>