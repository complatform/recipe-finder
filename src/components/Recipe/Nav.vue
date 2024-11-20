<template>
  <div>
    <div>
        <div class="flex mt-5 ml-5 justify-between mr-5 pb-5">

        <i class="fa-solid fa-bars text-3xl" @click="toggleList"></i>
        <h1 class="font-bold text-gray-600 text-3xl" v-if="!searchYourFood">food <span class="font-bold text-green-600">Mood</span></h1>
        <input type="text" placeholder="Enter food name" v-if="searchYourFood" class="shadow-lg px-7  focus:outline-blue-300 py-3 rounded-md lg:w-96">
        <i class="fa-solid fa-magnifying-glass text-3xl" @click="toggleSearch"></i>
        
        </div>
          <hr class="bg-black  ">
    <div v-if="showList" class="flex-row ml-5 mt-2 text-blue-600 fixed z-10 bg-white font-bold" >
        <div class="mb-3">

<a href="">Home</a>
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
      
    </div>
   
    <div></div>
  </div>
</template>

<script>

export default {
data(){
    return{
showList:false,
searchYourFood:false
    }
},
methods:{
toggleList(){
    this.showList = !this.showList
},
toggleSearch(){
    this.searchYourFood = !this.searchYourFood
}
}
}
</script>

<style>

</style>