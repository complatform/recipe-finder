<template>
<div class="flex mt-5 ml-5 justify-between mr-5 pb-5 ">

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

<a href="">Contact</a>
        </div>
</div>
  <div class="mt-10">
        <h1 class="text-center font-serif font-bold text-xl text-blue-300 mb-5">Contact Us</h1>
        <div class="flex justify-between ml-3 mb-10">
            <div>
           <i class="fa-solid fa-phone text-6xl text-center mt-5 ml-6 cursor-pointer text-green-300"></i>
            <a href="tel:+251988283088" class="text-blue-500">+251988283088</a>
            </div>
            <div>
            <i class="fa-solid fa-envelope text-6xl ml-28 text-center mt-5  cursor-pointer text-red-400"></i>
            <a href="mailto:kalkidansol1623@gmail.com" class="text-blue-500 ml-7">kalkidansol1623@gmail.com</a>
            </div>
        </div>

       


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