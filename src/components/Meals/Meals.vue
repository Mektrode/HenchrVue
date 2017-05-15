<template>
    <div>
        <h1>Today</h1>
        <another-Meal v-for="meal in meals" :meal="meal"></another-Meal>
    </div>
</template>

<script>
    import MealW from './aMeal.vue'

    export default {
        data () {
            return {
                meals: [
                    {id: 1, name: 'Oats Shake', calories: 380, carbs: 120, prot: 29, calrPerc: 2},
                    {id: 2, name: 'Meal Deal', calories: 704, carbs: 230, prot: 67, calrPerc: 22},
                    {id: 3, name: 'Bueno', calories: 89, carbs: 3, prot: 0.9, calrPerc: 19},
                    {id: 4, name: 'Jerk Wrap', calories: 405, carbs: 120, prot: 24, calrPerc: 900}
                ]
            }
        },
        components: {
            anotherMeal: MealW
        }
    }
</script>
