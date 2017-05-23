
const state = {
    stats: [{
        name: '',
        gender: '',
        age: 0,
        height: 0,
        weight: 0,
        bmi: 0
    }]
}

const actions = {
    FreshStats: function ({commit}, person) {
        console.log('Added ' + person.name + ' who weighs ' + person.weight + 'kg.')

        // Calculate BMI (Copy from Henchr API)
        const heightSqr = person.height * person.height
        const bmiNumber = (person.weight / heightSqr).toFixed(1)
        person.bmi = bmiNumber

        commit('Freshy', person)
        console.log('Commited person with bmi ' + person.bmi + ' to mutation')
    },
    newWeight: function ({commit, state}, weighty) {
        // whowhatwhatwhatwhere
    }
}

const mutations = {
    Freshy: (state, person) => {
        state.stats.push({
            name: person.name,
            age: person.age,
            gender: person.gender,
            height: person.height,
            weight: person.weight,
            bmi: person.bmi
        })
    },
    SET_stat_LIST: (state, { list }) => {
        state.stats = list
    },
    UPDATE_stat: (state, { item }) => {
        let idx = state.stats.map(p => p.id).indexOf(item.id)
        state.stats.splice(idx, 1, item)
    }
}

const getters = {
    statCount: state => {
        return state.stats.length
    },
    statistics: state => {
        return state.stats
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
