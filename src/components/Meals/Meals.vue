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
                    {
                        id: 1, 
                        name: 'Oats Shake', 
                        category: 'Breakfast',
                        stats: {
                            calories: 380, 
                            carbs: 120, 
                            prot: 29, 
                            calrPerc: 2,
                            proPerc: 20,
                            carbPerc: 31
                        }
                    },
                    {
                        id: 2, 
                        name: 'Meal Deal', 
                        category: 'Lunch',
                        inside: {
                            item1: {
                                id: 21, 
                                name: 'Bueno', 
                                category: 'Snack', 
                                calories: 89, 
                                carbs: 3, 
                                prot: 0.9, 
                                calrPerc: 19,
                                proPerc: 1,
                                carbPerc: 2
                            },
                            item2: {
                                id: 22, 
                                name: 'Bueno', 
                                category: 'Snack', 
                                calories: 89, 
                                carbs: 3, 
                                prot: 0.9, 
                                calrPerc: 19,
                                proPerc: 1,
                                carbPerc: 2
                            },
                        },
                        stats: {
                            calories: 704, 
                            carbs: 230, 
                            prot: 67, 
                            calrPerc: 22,
                            proPerc: 42,
                            carbPerc: 51
                        }
                    },

                    {id: 4, name: 'Jerk Rice', category: 'Dinner', calories: 405, carbs: 120, prot: 24, calrPerc: 900},
                    {id: 5, name: 'Cereals', category: 'Breakfast', calories: 380, carbs: 120, prot: 29, calrPerc: 2},
                    {id: 6, name: 'Oats Shake', category: 'breakfast', calories: 380, carbs: 120, prot: 29, calrPerc: 20},
                    {id: 7, name: 'Oats Shake', category: 'breakfast', calories: 380, carbs: 120, prot: 29, calrPerc: 32}
                ]
            }
        },
        components: {
            anotherMeal: MealW
        }
    }
</script>
