<template>
 <div class="flex mt-5 ml-5 justify-between mr-5 pb-5">

        <i class="fa-solid fa-bars text-3xl" @click="toggleList"></i>
        <h1 class="font-bold text-gray-600 text-3xl" v-if="!searchYourFood">food <span class="font-bold text-green-600">Mood</span></h1>
        <input type="text" placeholder="Enter food name" v-if="searchYourFood" class="shadow-md px-7  focus:outline-blue-300 py-3 rounded-md -mt-1" v-model="foodName">
        <i class="fa-solid fa-magnifying-glass text-3xl" @click="toggleSearch" v-if="!searchYourFood"></i>
        <i class="fa-solid fa-magnifying-glass text-3xl " v-if="searchYourFood" @click="toggleSingleFood"></i>
        
        </div>
          <hr class="bg-black  ">
              <div v-if="showList" class="flex-row ml-1 mt-2 text-blue-600 fixed z-10 bg-white font-bold pl-5 pr-5" >
        <div class="mb-3">

<a href="/">Home</a>
        </div>
        <div class="mb-3">

<a href="">About</a>
        </div>
        <div class="mb-3">

<a href="">Recipes</a>
        </div>
        <div class="mb-3">

<a href="">Contact</a>
        </div>
</div>
    <div class=" justify-between ml-3 mr-7 mt-7">
            <div v-for="food in foods11" :key="food">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1>
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
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
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