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
                calrPerc: this.calories / 2000,
                carbPerc: this.carbs / 300,
                protPerc: this.prot / 130
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
                calrPerc: this.calories / 2000,
                carbPerc: this.carb / 300,
                protPerc: this.pro / 130

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
        commit('ADD_meal', meal)
    }
}

const mutations = {
    /* SET_meal_LIST: (state, { list }) => {
        state.meals = list
    }, */
    ADD_meal: (state, { mealName, mealCal, mealCarb, mealProt }) => {
        state.meals.push({
            name: mealName,
            info: {
                calories: mealCal,
                carbs: mealCarb,
                prot: mealProt
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
