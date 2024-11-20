import { createRouter, createWebHistory } from 'vue-router'
import Recipe from '../views/Recipe/Recipe.vue'
import Chicken from '../views/Recipe/Chicken.vue'
import Seafood from '../views/Recipe/Seafood.vue'
import Dessert from '../views/Recipe/Dessert.vue'
import Vegetarian from '../views/Recipe/Vegetarian.vue'
import Details from '../views/Recipe/Details.vue'



const routes = [
  {
    path: '/',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/Chicken',
    name: 'Chicken',
    component: Chicken
  },
  {
    path: '/Seafood',
    name: 'Seafood',
    component: Seafood
  },
  {
    path: '/Dessert',
    name: 'Dessert',
    component: Dessert
  },
  {
    path: '/Vegetarian',
    name: 'Vegetarian',
    component: Vegetarian
  },
  {
    path: '/Details',
    name: 'Details',
    component: Details
  },
  
  

  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
