const state = {
    openSidenav: false
}

const actions = {
    /* LOAD_meal_LIST: function ({ commit }) {
        axios.get('/secured/meals').then((response) => {
            commit('SET_meal_LIST', { list: response.data })
        }, (err) => {
            console.log(err)
        })
    } */
}

const mutations = {
    toggleSidenav: function (state) {
        console.log('first state is ' + state.openSidenav)
        state.openSidenav = !state.openSidenav
        console.log('now state is ' + state.openSidenav)
    }
}

export default {
    state,
    mutations,
    actions
}
