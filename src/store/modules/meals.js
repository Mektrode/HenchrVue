import axios from "axios"

const state = {
    meals: []
}

const actions = {
    LOAD_meal_LIST: function ({ commit }) {
      axios.get('/secured/meals').then((response) => {
        commit('SET_meal_LIST', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    ADD_NEW_meal: function ({ commit }) {
      axios.post('/secured/meals').then((response) => {
        commit('ADD_meal', { meal: response.data })
      }, (err) => {
        console.log(err)
      })
    }
}

const mutations = {
    SET_meal_LIST: (state, { list }) => {
      state.meals = list
    },
    ADD_meal: (state, { meal }) => {
      state.meals.push(meal)
    },
    UPDATE_meal: (state, { item }) => {
      let idx = state.meals.map(p => p.id).indexOf(item.id)
      state.meals.splice(idx, 1, item)
    }
}

const getters = {
    mealCount: state => {
      return state.meals.length
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
