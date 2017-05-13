import Home from './components/Home.vue'
import newMeal from './components/gather/NewMeal.vue'
import Meals from './components/Meals/Meals.vue'
import Stats from './components/Stats.vue'
import Weight from './components/gather/Weight.vue'

export const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/newMeal', component: newMeal, name: 'New Meal' },
    { path: '/Weight', component: Weight, name: 'Update Weight' },
    { path: '/Meals', component: Meals, name: 'Meals' },
    { path: '/Stats', component: Stats, name: 'Stats' }
]
