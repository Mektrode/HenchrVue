import Home from './components/Home.vue'
import newMeal from './components/gather/NewMeal.vue'
import Meals from './components/Meals/Meals.vue'
import Stats from './components/Stats.vue'
import Weight from './components/gather/Weight.vue'

export const routes = [
    { path: '/', component: Home, params: { title: 'Home' } },
    { path: '/newMeal', component: newMeal, params: { title: 'New Meal' } },
    { path: '/Weight', component: Weight },
    { path: '/Meals', component: Meals },
    { path: '/Stats', component: Stats }
]
