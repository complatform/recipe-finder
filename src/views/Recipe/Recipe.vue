<template>
 <div class="flex  fixed lg:justify-between md:justify-between mr-5 pb-5 pt-3 pl-7 pr-10 lg:fixed md:fixed shadow-md bg-white w-full">
<div>
<i class="fa-solid fa-bars text-3xl" @click="toggleList"></i>
</div>
<div class="ml-24 md:ml-60">
 <h1 class="font-bold text-gray-600 text-3xl" v-if="!searchYourFood">food <span class="font-bold text-green-600">Mood</span></h1>
 <input type="text" placeholder="Enter food name" v-if="searchYourFood" class="shadow-md px-7  focus:outline-blue-300 py-3 rounded-md -mt-1 -ml-10" v-model="foodName">
</div>
<div class="ml-20 md:ml-48">
  <i class="fa-solid fa-magnifying-glass text-3xl" @click="toggleSearch" v-if="!searchYourFood"></i>
  <i class="fa-solid fa-magnifying-glass text-3xl -ml-2" v-if="searchYourFood" @click="toggleSingleFood"></i>
</div> 

  
        


      
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
      
<div v-if="singleFood">
 <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foodSearch" :key="food " class="mt-20 lg:mt-24 md:mt-24 ml-6 md:ml-60 md:bg-white md:rounded-md md:shadow-md md:mr-60 md:w-1/2 pb-5 lg:ml-80">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md   md:h-64 md:w-full lg:h-96">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <button class="bg-green-200 py-1 px-3 rounded-md ml-32 mt-3 font-bold md:ml-44 lg:ml-72"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                </div>
</div>

 <div class="z-0 lg:hidden md:hidden" v-if="!singleFood">

  <div class="mt-28">
        <h1 class="text-3xl font-serif text-center text-green-400 ">Let's Start  Cooking <br> <span class="text-black">With  Popular Recipes</span> </h1>
        <p class="text-center mt-3 text-gray-400 font-mono">Want to learn to cook but confused to start? No Need to worry again!</p>
    </div>
    <div >
        <div class="flex justify-between ml-3 mr-7 mt-10">
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods" :key="food">
                 <img :src="food.strMealThumb" alt="no image" class=" w-96 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h2>{{food.idMeal}}</h2> -->
                <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                <!-- <router-link :to="{ name: 'Details', params: { id_Meal: food.idMeal } }" class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" >Show Details</router-link > -->
                </div>
                
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods2" :key="food"> 
                <img :src="food.strMealThumb" alt="no image" class="w-96 ml-4 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
               
                <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
            </div>
        </div>
         <div class="flex justify-between ml-3 mr-7 mt-7">
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods3" :key="food"> 
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
                </div>
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods4" :key="food"> 
                <img :src="food.strMealThumb" alt="no image" class="w-96 ml-4 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
            </div>
        </div>
        <div class="flex justify-between ml-3 mr-7 mt-7">
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods5" :key="food"> 
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
                </div>
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods6" :key="food"> 
                <img :src="food.strMealThumb" alt="no image" class="w-96 ml-4 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
            </div>
        </div>
        <div class="flex justify-between ml-3 mr-7 mt-7">
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods7" :key="food"> 
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
                </div>
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods8" :key="food"> 
                <img :src="food.strMealThumb" alt="no image" class="w-96 ml-4 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
            </div>
        </div>
        <div class="flex justify-between ml-3 mr-7 mt-7">
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods9" :key="food"> 
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
                </div>
            <div @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)" v-for="food in foods10" :key="food" >
                <img :src="food.strMealThumb" alt="no image" class="w-96 ml-4 h-40 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
            </div>
        </div>


    </div>
    <div class="mt-16">

    <h1 class="text-center font-serif font-bold text-xl text-blue-300">Find Recipies  For</h1>
   
          <div class="flex justify-between ml-3 mr-7 mt-7">
            
                <div @click="searchAnotherFood11('Seafood','Seafood')">
                <img :src="strMealThumb" alt="no image" class=" w-96 h-40 rounded-full">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">Seafood</h1>

                </div>
                  <div class="ml-5" @click="searchAnotherFood11('Dessert','Dessert')">
                <img :src="strMealThumb2" alt="no image" class=" w-96 h-40 rounded-full">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">Dessert</h1>

                </div>

                
    
        </div>
         <div class="flex justify-between ml-3 mr-7 mt-7">
            
                <div @click="searchAnotherFood11('Chicken','Chicken')">
                <img :src="strMealThumb3" alt="no image" class=" w-96 h-40 rounded-full">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">Chicken</h1>

                </div>
                  <div class="ml-5" @click="searchAnotherFood11('Vegetarian','Vegetarian')">
                <img :src="strMealThumb4" alt="no image" class=" w-96 h-40 rounded-full">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">Vegetarian</h1>

                </div>

                
    
        </div>

   
    </div>
    <div class="mt-16">
        <h1 class="text-center font-serif font-bold text-lg">Search The Foods Here and press the search Icon</h1>
                <input type="text" placeholder="Enter food name"   class="shadow-md px-7  focus:outline-blue-300 py-3 rounded-md w-80 ml-5 border-blue-400 border-2" v-model="foodName">
        <!-- <i class="fa-solid fa-magnifying-glass text-3xl mt-10  text-blue-600 ml-2" @click="toggleSearch" v-if="!searchYourFood"></i> -->
        <i class="fa-solid fa-magnifying-glass text-2xl mt-10 text-blue-600 ml-2"  @click="toggleSingleFood"></i>
    </div>
    <div class="mt-16">
        <h1  class="text-center font-serif font-bold text-xl text-blue-300 mb-5">About The Recipes</h1>
        <p class="ml-3 mr-3 font-serif">Welcome to Recipe Finder, your ultimate destination for discovering delicious recipes tailored to your tastes! Built with Vue.js, our intuitive platform allows you to easily search and filter through a vast collection of recipes from around the world. Whether you’re a novice cook or a seasoned chef, our user-friendly interface helps you find the perfect dish for any occasion. Explore, save your favorites, and get inspired to create culinary masterpieces in your own kitchen. Happy cooking!</p>
    </div>
    <div class="mt-5">
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
 </div>
 <div class="invisible md:visible lg:visible ml-5 mr-5 " v-if="!singleFood">
    <div class="mt-36">
        <h1 class="text-3xl font-serif text-center text-green-400 ">Let's Start  Cooking <br> <span class="text-black">With  Popular Recipes</span> </h1>
        <p class="text-center mt-3 text-gray-400 font-mono">Want to learn to cook but confused to start? No Need to worry again!</p>
    </div>
 <div class="flex justify-between ml-3 mr-7 mt-10  lg:ml-7">
            <div v-for="food in foods" :key="food" class="bg-white shadow-md pb-5 rounded-md" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h2>{{food.idMeal}}</h2> -->
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                <!-- <router-link :to="{ name: 'Details', params: { id_Meal: food.idMeal } }" class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" >Show Details</router-link > -->
                </div>
                
            <div v-for="food in foods2" :key="food" class="mr-5 ml-5 bg-white shadow-md pb-5 rounded-md" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class="w-96  h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
               
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
            </div>
               <div v-for="food in foods3" :key="food" class="bg-white shadow-md pb-5 rounded-md" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
                </div>
                <div v-for="food in foods16" :key="food" class="bg-white shadow-md pb-5 rounded-md md:hidden lg:block ml-5">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h2>{{food.idMeal}}</h2> -->
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                <!-- <router-link :to="{ name: 'Details', params: { id_Meal: food.idMeal } }" class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" >Show Details</router-link > -->
                </div>
        </div>
         <div class="flex justify-between ml-3 mr-7 mt-10  lg:ml-7">
            <div v-for="food in foods4" :key="food" class="bg-white shadow-md pb-5 rounded-md" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h2>{{food.idMeal}}</h2> -->
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                <!-- <router-link :to="{ name: 'Details', params: { id_Meal: food.idMeal } }" class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" >Show Details</router-link > -->
                </div>
                
            <div v-for="food in foods5" :key="food" class="mr-5 ml-5 bg-white shadow-md pb-5 rounded-md" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class="w-96  h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
               
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
            </div>
               <div v-for="food in foods6" :key="food" class="bg-white shadow-md pb-5 rounded-md" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
                </div>
                 <div v-for="food in foods17" :key="food" class="bg-white shadow-md pb-5 rounded-md md:hidden lg:block ml-5">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h2>{{food.idMeal}}</h2> -->
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                <!-- <router-link :to="{ name: 'Details', params: { id_Meal: food.idMeal } }" class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" >Show Details</router-link > -->
                </div>
        </div>
         <div class="flex justify-between ml-3 mr-7 mt-10  lg:ml-7">
            <div v-for="food in foods7" :key="food" class="bg-white shadow-md pb-5 rounded-md" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h2>{{food.idMeal}}</h2> -->
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                <!-- <router-link :to="{ name: 'Details', params: { id_Meal: food.idMeal } }" class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" >Show Details</router-link > -->
                </div>
                
            <div v-for="food in foods8" :key="food" class="mr-5 ml-5 bg-white shadow-md pb-5 rounded-md" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class="w-96  h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
               
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
            </div>
               <div v-for="food in foods9" :key="food" class="bg-white shadow-md pb-5 rounded-md " @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
           <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button> 
                </div>
                 <div v-for="food in foods18" :key="food" class="bg-white shadow-md pb-5 rounded-md   md:hidden lg:block ml-5" @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">
                <img :src="food.strMealThumb" alt="no image" class=" w-96 h-60 rounded-md">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">{{food.strMeal}}</h1>
                <!-- <h2>{{food.idMeal}}</h2> -->
                <button class="bg-green-200 py-1 px-2 rounded-md ml-20 mt-3 font-bold"  @click="showDetails(food.idMeal,food.strCategory,food.strIngredient1,food.strIngredient2,food.strIngredient3,food.strIngredient4,food.strIngredient5,food.strIngredient6,food.strIngredient7,food.strIngredient8,food.strIngredient9,food.strIngredient10,food.strIngredient11,food.strIngredient12,food.strIngredient13,food.strInstructions,food.strMeal,food.strMealThumb)">Show Details</button>
                <!-- <h1 class="text-center text-xl font-serif text-green-300 ">{{food.strArea}}</h1> -->
                <!-- <router-link :to="{ name: 'Details', params: { id_Meal: food.idMeal } }" class="bg-green-200 py-1 px-2 rounded-md ml-5 mt-3 font-bold" >Show Details</router-link > -->
                </div>
        </div>
          <div class="mt-16">

    <h1 class="text-center font-serif font-bold text-2xl text-blue-300">Find Recipies  For</h1>
   
          <div class="flex justify-between ml-3 mr-7 mt-7 lg:w-1/2 lg:ml-80">
            
                <div @click="searchAnotherFood11('Seafood','Seafood')">
                <img :src="strMealThumb" alt="no image" class=" w-80 h-80 rounded-full">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">Seafood</h1>

                </div>
                  <div class="ml-5" @click="searchAnotherFood11('Dessert','Dessert')">
                <img :src="strMealThumb2" alt="no image" class=" w-80 h-80 rounded-full">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">Dessert</h1>

                </div>

                
    
        </div>
         <div class="flex justify-between ml-3 mr-7 mt-7 lg:w-1/2 lg:ml-80">
            
                <div @click="searchAnotherFood11('Chicken','Chicken')">
                <img :src="strMealThumb3" alt="no image" class=" w-80 h-80 rounded-full">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">Chicken</h1>

                </div>
                  <div class="ml-5" @click="searchAnotherFood11('Vegetarian','Vegetarian')">
                <img :src="strMealThumb4" alt="no image" class=" w-80 h-80 rounded-full">
                <h1 class="text-center mt-3 text-2xl font-serif text-green-300 ">Vegetarian</h1>

                </div>

                
    
        </div>

   
    </div>
        <div class="mt-16">
        <h1 class="text-center font-serif font-bold text-xl">Search The Foods Here and press the search Icon</h1>
        <div class="lg:ml-40">

                <input type="text" placeholder="Enter food name"   class="shadow-md px-7  focus:outline-blue-300 py-3 rounded-md w-96 ml-60 border-blue-400 border-2 lg:ml-80" v-model="foodName">
                        <i class="fa-solid fa-magnifying-glass text-2xl mt-10 text-blue-600 ml-2"  @click="toggleSingleFood"></i>
        </div>
        <!-- <i class="fa-solid fa-magnifying-glass text-3xl mt-10  text-blue-600 ml-2" @click="toggleSearch" v-if="!searchYourFood"></i> -->

    </div>
    <div class="mt-16">
        <h1  class="text-center font-serif font-bold text-xl text-blue-300 mb-5">About The Recipes</h1>
        <p class="ml-3 mr-3 font-serif">Welcome to Recipe Finder, your ultimate destination for discovering delicious recipes tailored to your tastes! Built with Vue.js, our intuitive platform allows you to easily search and filter through a vast collection of recipes from around the world. Whether you’re a novice cook or a seasoned chef, our user-friendly interface helps you find the perfect dish for any occasion. Explore, save your favorites, and get inspired to create culinary masterpieces in your own kitchen. Happy cooking!</p>
    </div>
    <div class="mt-5">
        <h1 class="text-center font-serif font-bold text-xl text-blue-300 mb-5">Contact Us</h1>
        <div class="flex justify-between ml-3 mb-10">
            <div>
           <i class="fa-solid fa-phone text-6xl text-center mt-5 ml-6 cursor-pointer text-green-300"></i>
            <a href="tel:+251988283088" class="text-blue-500">+251988283088</a>
            </div>
            <div>
            <i class="fa-solid fa-envelope text-6xl ml-28 text-center mt-5  cursor-pointer text-red-400"></i>
            <a href="mailto:kalkidansol1623@gmail.com" class="text-blue-500 ml-3 -mt-3">kalkidansol1623@gmail.com</a>
            </div>
        </div>

       


    </div>
 </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
// import Nav from '@/components/Recipe/Nav.vue';
export default {
components:{
    // Nav
},
data(){
return{
    foods:[],
    foods2:[],
    foods3:[],
    foods4:[],
    foods5:[],
    foods6:[],
    foods7:[],
    foods8:[],
    foods9:[],
    foods10:[],
    foods11:[],
    foods12:[],
    food13:[],
    food14:[],
    food15:[],
    foods16:[],
    foods17:[],
    foods18:[],
    foods19:[],
    foodName:'',
    foodSearch:[],
    strMealThumb:'',
    strMeal:'',
    strMealThumb2:'',
    strMeal2:'',
    strMealThumb3:'',
    strMeal3:'',
    strMealThumb4:'',
    strMeal4:'',
    foodCategiry:'',
    singleFood:false,
    showList:false,
searchYourFood:false
}
},
mounted(){
this.searchFood()
this.searchAnotherFood()
this.searchAnotherFood3()
this.searchAnotherFood4()
this.searchAnotherFood5()
this.searchAnotherFood6()
this.searchAnotherFood7()
this.searchAnotherFood8()
this.searchAnotherFood9()
this.searchAnotherFood10()
// this.searchAnotherFood11()
this.searchAnotherFood12()
 this.searchAnotherFood13()
 this.searchAnotherFood14()
 this.searchAnotherFood15()
 this.searchAnotherFood16()
 this.searchAnotherFood17()
 this.searchAnotherFood18()
 this.searchAnotherFood19()
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
showDetails(id,category,ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7,ingredient8,ingredient9,ingredient10,ingredient11,ingredient12,ingredient13,instraction,name,image){
this.$router.push('/Details')
localStorage.setItem('id_meal',id)
localStorage.setItem('category',category)
localStorage.setItem('ingredient1',ingredient1)
localStorage.setItem('ingredient2',ingredient2)
localStorage.setItem('ingredient3',ingredient3)
localStorage.setItem('ingredient4',ingredient4)
localStorage.setItem('ingredient5',ingredient5)
localStorage.setItem('ingredient6',ingredient6)
localStorage.setItem('ingredient7',ingredient7)
localStorage.setItem('ingredient8',ingredient8)
localStorage.setItem('ingredient9',ingredient9)
localStorage.setItem('ingredient10',ingredient10)
localStorage.setItem('ingredient11',ingredient11)
localStorage.setItem('ingredient12',ingredient12)
localStorage.setItem('ingredient13',ingredient13)
localStorage.setItem('instraction',instraction)
localStorage.setItem('name',name)
localStorage.setItem('image',image)
},
searchFood(){
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods = res.data.meals
        
    })
},
searchAnotherFood(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods2 = res.data.meals
    })
    
},
searchAnotherFood3(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods3 = res.data.meals
    })
    
},
searchAnotherFood4(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods4 = res.data.meals
    })
    
},
searchAnotherFood5(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods5 = res.data.meals
    })
    
},
searchAnotherFood6(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods6 = res.data.meals
    })
    
},
searchAnotherFood7(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods7 = res.data.meals
    })
    
},
searchAnotherFood8(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods8 = res.data.meals
    })
    
},
searchAnotherFood9(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods9 = res.data.meals
    })
    
},
searchAnotherFood10(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods10 = res.data.meals
    })
    
},
searchAnotherFood16(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log('food16',res.data.meals)
        this.foods16 = res.data.meals
    })
    
},
searchAnotherFood17(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods17 = res.data.meals
    })
    
},
searchAnotherFood18(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods18 = res.data.meals
    })
    
},
searchAnotherFood19(){
     axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        console.log(res.data.meals)
        this.foods19 = res.data.meals
    })
    
},
searchAnotherFood11(foodCategiry,path) {
    this.$router.push(`/${path}`);
    
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodCategiry}`)
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
searchAnotherFood12(){
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => {
   
      if (res.data.meals && res.data.meals.length > 0) {
        this.foods12 = res.data.meals[0]; 
        this.strMealThumb = res.data.meals[0].strMealThumb 
        this.strMeal = res.data.meals[0].strCategory

        console.log('Seafood Meals', this.foods12);
      } else {
        console.log('No seafood meals found.');
      }
    })
    .catch((error) => {
      console.error('Error fetching seafood meals:', error);
    });
    
},
searchAnotherFood13(){
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
    .then((res) => {
   
      if (res.data.meals && res.data.meals.length > 0) {
        this.foods13 = res.data.meals[0]; 
        this.strMealThumb2 = res.data.meals[0].strMealThumb 
        this.strMeal2 = res.data.meals[0].strCategory

        console.log('Dessert Meals', this.foods13);
      } else {
        console.log('No seafood meals found.');
      }
    })
    .catch((error) => {
      console.error('Error fetching seafood meals:', error);
    });
    
},
searchAnotherFood14(){
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
    .then((res) => {
   
      if (res.data.meals && res.data.meals.length > 0) {
        this.foods14 = res.data.meals[0]; 
        this.strMealThumb3 = res.data.meals[0].strMealThumb 
        this.strMeal3 = res.data.meals[0].strCategory

        console.log('Dessert Meals', this.foods14);
      } else {
        console.log('No seafood meals found.');
      }
    })
    .catch((error) => {
      console.error('Error fetching seafood meals:', error);
    });
    
},
searchAnotherFood15(){
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
    .then((res) => {
   
      if (res.data.meals && res.data.meals.length > 0) {
        this.foods15 = res.data.meals[0]; 
        this.strMealThumb4 = res.data.meals[0].strMealThumb 
        this.strMeal4 = res.data.meals[0].strCategory

        console.log('Dessert Meals', this.foods14);
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