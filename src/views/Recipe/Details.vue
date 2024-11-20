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

<a href="">About</a>
        </div>
        <div class="mb-3">

<a href="">Recipes</a>
        </div>
        <div class="mb-3">

<a href="">Contact</a>
        </div>
</div>
  <div class="mt-20">
    <img :src="image" alt="" class="w-80 ml-9 mt-3 rounded-sm">
    <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{name}}</h1>
    <h1 class="ml-3 text-blue-400 text-xl underline font-serif">Ingredients</h1>
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
 
    <!-- <p>{{ingredient2}}</p>
    <p>{{ingredient3}}</p>
    <p>{{ingredient4}}</p>
    <p>{{ingredient5}}</p>
    <p>{{ingredient6}}</p>
    <p>{{ingredient7}}</p>
    <p>{{ingredient8}}</p>
    <p>{{ingredient9}}</p>
    <p>{{ingredient10}}</p>
    <p>{{ingredient11}}</p>
    <p>{{ingredient12}}</p>
    <p>{{ingredient13}}</p> -->
    </div>
    <h1 class="ml-3 text-blue-400 text-xl underline font-serif">Instraction</h1>
    <h2 class="ml-3 mr-3 font-serif">{{instraction}}</h2>
    
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
    })
},
}
}
</script>

<style>

</style>