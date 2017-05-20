const state = {
    openSidenav: false
}

const actions = {
    toggleSidenav: function ({commit, state}) {
        state.openSidenav = !state.openSidenav
        console.log('now state is ' + state.openSidenav)
    }
}

const mutations = {
    /* toggleSidenav: function (state) {
        state.openSidenav = !state.openSidenav
        console.log('now state is ' + state.openSidenav)
    } */
}

export default {
    state,
    mutations,
    actions
}
