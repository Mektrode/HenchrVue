<template>
    <div>
        <h1>Today</h1>
        <another-Meal v-for="meal in meals" :meal="meal"></another-Meal>
    </div>
</template>

<script>
    import MealW from './aMeal.vue'

    export default {
        computed: {
            meals () {
                return this.$store.getters.mealsNow
            }
        },
        components: {
            anotherMeal: MealW
        }
    }
</script>
