<template>
 <div class="flex justify-between mr-5 pb-5 pt-3 pl-7 pr-10 fixed shadow-md bg-white w-full">

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
    <div v-if="!singleFood" class=" justify-between ml-3 mr-7 mt-20 md:ml-16 md:mt-20 lg:ml-72">
            <div v-for="food in foods11" :key="food">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-48 lg:h-60 md:h-60 rounded-md md:ml-60 ">
                <h1 class="text-center lg:text-left lg:ml-64 mt-3 text-2xl font-serif text-green-300 md:mb-10">{{food.strMeal}}</h1>

                </div>
          
        </div>
       
</template>

<script>
import axios from 'axios'

export default {
data(){
    return{
foods11:[],
showList:false,
searchYourFood:false,
searchYourFood:false,
singleFood:false,
    }
},
mounted(){
this.searchAnotherFood11()
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
    })
},
    searchAnotherFood11(){  
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => {
   
      if (res.data.meals && res.data.meals.length > 0) {
        this.foods11 = res.data.meals; 
        console.log('Seafood Meals', this.foods11);
      } else {
        console.log('No seafood meals found.');
      }
    })
    .catch((error) => {
      console.error('Error fetching seafood meals:', error);
    });
},
}
}
</script>

<style>

</style>