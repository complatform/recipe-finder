<template>
<div class="flex  shadow-md   justify-between mr-5 pb-5 pt-3 pl-3 pr-3 fixed bg-white w-full">

        <i class="fa-solid fa-bars text-3xl" @click="toggleList"></i>
        <h1 class="font-bold text-gray-600 text-3xl" v-if="!searchYourFood">food <span class="font-bold text-green-600">Mood</span></h1>
        <input type="text" placeholder="Enter food name" v-if="searchYourFood" class="shadow-md px-7  focus:outline-blue-300 py-3 rounded-md -mt-1" v-model="foodName">
        <i class="fa-solid fa-magnifying-glass text-3xl" @click="toggleSearch" v-if="!searchYourFood"></i>
        <i class="fa-solid fa-magnifying-glass text-3xl " v-if="searchYourFood" @click="toggleSingleFood"></i>
        
        </div>
          <hr class="bg-black  ">
              <div v-if="showList" class="flex-row ml-1 mt-12 text-blue-600 fixed z-10 bg-white font-bold pl-5 pr-5" >
        <div class="mb-3">

<a href="/">Home</a>
        </div>
        <div class="mb-3">

<a href="/About">About</a>
        </div>
        <div class="mb-3">

<a href="/">Recipes</a>
        </div>
        <div class="mb-3">

<a href="/Contactus">Contact</a>
        </div>
</div>
<div v-if="singleFood">
 <div v-for="food in foodSearch" :key="food " class="mt-20 lg:mt-24 md:mt-24 ml-4 md:ml-60 md:bg-white md:rounded-md md:shadow-md md:mr-60 md:w-1/2 pb-5 lg:ml-80">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md  md:h-64 md:w-full lg:h-96">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <button class="bg-green-200 py-1 px-3 rounded-md ml-28 mt-3 font-bold md:ml-44 lg:ml-72"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                </div>
</div>
  <div class="mt-20  md:hidden lg:hidden" v-if="!singleFood">
    <img :src="image" alt="" class="w-80 ml-9 mt-3 rounded-sm ">
    <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{name}}</h1>
    <h1 class="ml-3 text-blue-400 text-xl underline font-serif ">Ingredients</h1>
    <div class="ml-10 mt-2 font-serif">
<ul class="list-disc">
    <li v-if="ingredient1">
   {{ingredient1}}
    </li>
      <li v-if="ingredient2">
   {{ingredient2}}
    </li>
       <li v-if="ingredient3">
   {{ingredient3}}
    </li>
        <li v-if="ingredient4">
   {{ingredient4}}
    </li>
            <li v-if="ingredient5">
   {{ingredient5}}
    </li>
            <li v-if="ingredient6">
   {{ingredient6}}
    </li>
            <li v-if="ingredient7">
   {{ingredient7}}
    </li>
            <li v-if="ingredient8">
   {{ingredient8}}
    </li>
            <li v-if="ingredient9">
   {{ingredient9}}
    </li>
            <li v-if="ingredient10">
   {{ingredient10}}
    </li>
            <li v-if="ingredient11">
   {{ingredient11}}
    </li>
            <li v-if="ingredient12">
   {{ingredient12}}
    </li>
            <li v-if="ingredient13">
   {{ingredient13}}
    </li>

</ul>
 
   
    </div>
    <h1 class="ml-3 text-blue-400 text-xl underline font-serif">Instraction</h1>
    <h2 class="ml-3 mr-3 font-serif">{{instraction}}</h2>
    
  </div>
  <div class="invisible md:visible lg:visible mt-5 ml-10 mb-10" v-if="!singleFood">
<div class="flex">
<div>
<img :src="image" alt="" class="w-80 ml-9 mt-20 rounded-sm ">
    <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{name}}</h1>
</div>
<div>
    <div class="ml-20 mt-20 font-serif">
            <h1 class="ml-3 text-blue-400 text-xl underline font-serif md:mt-4">Ingredients</h1>
<ul class="list-disc">
    <li v-if="ingredient1">
   {{ingredient1}}
    </li>
      <li v-if="ingredient2">
   {{ingredient2}}
    </li>
       <li v-if="ingredient3">
   {{ingredient3}}
    </li>
        <li v-if="ingredient4">
   {{ingredient4}}
    </li>
            <li v-if="ingredient5">
   {{ingredient5}}
    </li>
            <li v-if="ingredient6">
   {{ingredient6}}
    </li>
            <li v-if="ingredient7">
   {{ingredient7}}
    </li>
            <li v-if="ingredient8">
   {{ingredient8}}
    </li>
            <li v-if="ingredient9">
   {{ingredient9}}
    </li>
            <li v-if="ingredient10">
   {{ingredient10}}
    </li>
            <li v-if="ingredient11">
   {{ingredient11}}
    </li>
            <li v-if="ingredient12">
   {{ingredient12}}
    </li>
            <li v-if="ingredient13">
   {{ingredient13}}
    </li>

</ul>
 
   
    </div>
</div>
</div>
  <h1 class="ml-3 mt-10 text-blue-400 text-xl underline font-serif">Instraction</h1>
    <h2 class="ml-3 mr-3 font-serif w-6/7">{{instraction}}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
showList:false,
searchYourFood:false,
searchYourFood:false,
singleFood:false,
foodID:null,
category:'',
ingredient1:'',
ingredient2:'',
ingredient3:'',
ingredient4:'',
ingredient5:'',
ingredient6:'',
ingredient7:'',
ingredient8:'',
ingredient9:'',
ingredient10:'',
ingredient11:'',
ingredient12:'',
ingredient13:'',
instraction:'',
name:'',
image:''

        }
    },
mounted(){

// this.foodID = this.$route.params.id_Meal
// console.log("IDMEAL",this.$route.params.id_Meal)
this.foodID = localStorage.getItem('id_meal')
this.category = localStorage.getItem('category')
this.ingredient1 = localStorage.getItem('ingredient1')
this.ingredient2 = localStorage.getItem('ingredient2')
this.ingredient3 = localStorage.getItem('ingredient3')
this.ingredient4 = localStorage.getItem('ingredient4')
this.ingredient5 = localStorage.getItem('ingredient5')
this.ingredient6 = localStorage.getItem('ingredient6')
this.ingredient7 = localStorage.getItem('ingredient7')
this.ingredient8 = localStorage.getItem('ingredient8')
this.ingredient9 = localStorage.getItem('ingredient9')
this.ingredient10 = localStorage.getItem('ingredient10')
this.ingredient11 = localStorage.getItem('ingredient11')
this.ingredient12 = localStorage.getItem('ingredient12')
this.ingredient13 = localStorage.getItem('ingredient13')
this.instraction = localStorage.getItem('instraction')
this.name = localStorage.getItem('name')
this.image = localStorage.getItem('image')

},
methods:{
          toggleList(){
    this.showList = !this.showList
},
toggleSearch(){
    this.searchYourFood = !this.searchYourFood
},
toggleSingleFood(){
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.foodName}`).then((res)=>{
        this.singleFood = true
        console.log(res.data.meals)
        this.foodSearch = res.data.meals

        this.foodName = ''

        
    })
},
}
}
</script>

<style>

</style>