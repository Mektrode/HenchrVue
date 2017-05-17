import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    meals: []
  },
  actions: {
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
    },
    TOGGLE_COMPLETED: function ({ commit, state }, { item }) {
      axios.put('/secured/meals/' + item.id, item).then((response) => {
        commit('UPDATE_meal', { item: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
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
  },
  getters: {
    completedmeals: state => {
      return state.meals.filter(meal => meal.completed).length
    },
    mealCount: state => {
      return state.meals.length
    }
  }
})

export default store