import Home from './components/Home.vue'
import newMeal from './components/gather/NewMeal.vue'
import Meals from './components/Meals/Meals.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/newMeal', component: newMeal },
    { path: '/Meals', component: Meals }
]
