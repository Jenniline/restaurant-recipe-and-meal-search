import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router' 
import  Home  from '../views/Home.vue';
import  DefaultLayout  from '../components/DefaultLayout.vue';
import  GuestLayout  from '../components/GuestLayout.vue';
import  MealsByLetter  from '../views/MealsByLetter.vue';
import  MealsByName  from '../views/MealsByName.vue';
import  MealsByIngredient from '../views/MealsByIngredient.vue'
import  MealsDetails from '../views/MealsDetails.vue'


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children : [

            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName,
            },  
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
            },  
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealsDetails
            }

        ] 
    },
    {
        path: '/guest',
        component: GuestLayout,
        
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;