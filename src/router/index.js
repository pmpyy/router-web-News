import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import NewCrad from '../views/NewCrad.vue'

import ANewCrad from '../components/ANewCrad.vue'
import ANewCrad2 from '../components/ANewCrad2.vue'
import ANewCrad3 from '../components/ANewCrad3.vue'
import ANewCrad4 from '../components/ANewCrad4.vue'
import ANewCrad5 from '../components/ANewCrad5.vue'
import ANewCrad6 from '../components/ANewCrad6.vue'






const routes = [
  {path: '/ANewCrad' , component: ANewCrad},
  {path: '/ANewCrad2' , component: ANewCrad2},
  {path: '/ANewCrad3' , component: ANewCrad3},
  {path: '/ANewCrad4' , component: ANewCrad4},
  {path: '/ANewCrad5' , component: ANewCrad5},
  {path: '/ANewCrad6' , component: ANewCrad6},
  {path: '/NewCrad' ,component: NewCrad},
  {path: '/' ,component: MainPage}
  ]
  const route = createRouter({ 
      history: createWebHistory(),
      routes,
  })
export default route
// const shopCoffee = [
//   {component:ANewCrad, name:'news 1',coffee:'WTF'},
//   {component:ANewCrad2, name:'news 2',coffee:'สุขพอดี Simply Happy'},
//   {component:ANewCrad3, name:'new 3',coffee:'กำปอ kam Por'},
//   {component:ANewCrad4,name:'new 4',coffee:'ผลิ Phli'},
//   {component:ANewCrad5,name:'new 5',coffee:'undo studio'},
//   {component:ANewCrad6,name:'new 6',coffee:'yellow cup'}
// ]




// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/news',
//       name: 'allnews',
//       component: NewCrad
//     },
//     {
//       path: '/news/:id',
//       name: 'news',
//       component: ANewCrad
//     },
//     {
//       path: '/',
//       name: 'main',
//       component: MainPage
//     },
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//       //importเข้ามาตั้งแต่ยังไม่กด(ด้านบน^)
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//       //ไม่ค่อยได้ใช้importเข้ามาตอนกดลิงค์
//     }
//   ]
// })

// export default router
