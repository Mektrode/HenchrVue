// import axios from 'axios'

const state = {
    // examples
    meals: [
        {
            id: 1,
            name: 'A Shake',
            category: 'Breakfast',
            inside: {
            },
            info: {
                calories: 704,
                carbs: 230,
                prot: 67,
                calrPerc: 43,
                carbPerc: 79,
                protPerc: 59
            }
        },
        {
            id: 2,
            name: 'Oreos',
            category: 'Snack',
            inside: {
            },
            info: {
                calories: 54,
                carbs: 13,
                prot: 7,
                calrPerc: 3,
                carbPerc: 8,
                protPerc: 5

            }
        }
        /* extra meals batches {
            id: 21,
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
                }
            },
            info: {
                calories: 704,
                carbs: 230,
                prot: 67,
                calrPerc: 22,
                proPerc: 42,
                carbPerc: 51
            }
        } */
    ]
}

const actions = {
    adddmeal: function ({ commit }, meal) {
        // GET CAL CARB AND PROT STATS FROM STATE.STATS
        // USe example numbers for now
        meal.info.calrPerc = ((meal.info.calories / 2000) * 100).toFixed(0)
        meal.info.carbPerc = ((meal.info.carbs / 300) * 100).toFixed(0)
        meal.info.protPerc = ((meal.info.prot / 140) * 100).toFixed(0)

        // commit to mutation
        commit('ADD_meal', meal)
        console.log('added ' + meal.name + ' which has calories of ' + meal.info.calories)
    }
}

const mutations = {
    /* SET_meal_LIST: (state, { list }) => {
        state.meals = list
    }, */
    ADD_meal: (state, meal) => {
        console.log(meal.info.calories + ' is equal to ' + meal.info.calrPerc)
        state.meals.push({
            name: meal.name,
            info: {
                calories: meal.info.calories,
                carbs: meal.info.carbs,
                prot: meal.info.prot,
                calrPerc: meal.info.calrPerc,
                carbPerc: meal.info.carbPerc,
                protPerc: meal.info.protPerc
            }
        })
    }
    /* UPDATE_meal: (state, { item }) => {
        let idx = state.meals.map(p => p.id).indexOf(item.id)
        state.meals.splice(idx, 1, item)
    } */
}

const getters = {
    mealCount: state => {
        return state.meals.length
    },
    mealsNow: state => {
        return state.meals
    }
    /* mealsYesterday: state => {
        return state.meals
    },
    mealsDayBefore: state => {
        return state.meals
    },
    mealsDayBeforeThat: state => {
        return state.meals
    } */
}

export default {
    state,
    mutations,
    actions,
    getters
}
