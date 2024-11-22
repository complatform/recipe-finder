<template>
<div class="flex mt-5 ml-5 justify-between mr-5 pb-5">

        <i class="fa-solid fa-bars text-3xl" @click="toggleList"></i>
        <h1 class="font-bold text-gray-600 text-3xl" v-if="!searchYourFood">food <span class="font-bold text-green-600">Mood</span></h1>
        <input type="text" placeholder="Enter food name" v-if="searchYourFood" class="shadow-md px-7  focus:outline-blue-300 py-3 rounded-md -mt-1" v-model="foodName">
        <i class="fa-solid fa-magnifying-glass text-3xl" @click="toggleSearch" v-if="!searchYourFood"></i>
        <i class="fa-solid fa-magnifying-glass text-3xl " v-if="searchYourFood" @click="toggleSingleFood"></i>
        
        </div>
          <hr class="bg-black  ">
              <div v-if="showList" class="flex-row ml-1 mt-20 text-blue-600 fixed z-10 bg-white font-bold pl-5 pr-5" >
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
    <div class="mt-16">
        <h1  class="text-center font-serif font-bold text-xl text-blue-300 mb-5">About The Recipes</h1>
        <p class="ml-3 mr-3 font-serif">Welcome to Recipe Finder, your ultimate destination for discovering delicious recipes tailored to your tastes! Built with Vue.js, our intuitive platform allows you to easily search and filter through a vast collection of recipes from around the world. Whether you’re a novice cook or a seasoned chef, our user-friendly interface helps you find the perfect dish for any occasion. Explore, save your favorites, and get inspired to create culinary masterpieces in your own kitchen. Happy cooking!</p>
    </div>
</template>

<script>
export default {
data(){
    return{
        showList:false,
searchYourFood:false,
searchYourFood:false,
singleFood:false,
    }
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
}
}
</script>

<style>

</style>