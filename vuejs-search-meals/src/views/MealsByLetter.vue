<template>
    <div>
        <div class="flex justify-center gap-2 mt-2">
            <router-link 
                :to="{name: 'byLetter', 
                params: { letter }}"
                v-for="letter of letters"
                :key="letter"   
            >
                {{ letter  }}
            </router-link>
        </div>  
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem  v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <pre>{{ meals }}</pre>
</template>

<script setup>

import {computed} from '@vue/reactivity';
import { onMounted, watch } from 'vue';
import store from '../store';
import {useRoute} from 'vue-router';
import MealItem from '../components/MealItem.vue';


const route = useRoute();
const letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>