import Vue from 'vue';
import Vuex from 'vuex';

import stats from './modules/stats';
import meals from './modules/meals';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        stats,
        meals
    }
});