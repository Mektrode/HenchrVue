<template>
    <div>
        <h1>Today</h1>
        <another-Meal v-for="meal in meals" :meal="meal"></another-Meal>
    </div>
</template>

<script>
    import MealW from './aMeal.vue'
    import { mapState } from 'vuex'

    export default {
        computed: {
          projects () {
            return this.$store.state.meals
          }
        },
        components: {
            anotherMeal: MealW
        }
    }
</script>
