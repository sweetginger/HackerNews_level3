import Vue from 'vue';
import Vuex from 'vuex';

// 별도로 분리한 actionss 를 임포트
import actions from './actions.js'

// 별도로 분리한 mutations 를 임포트
import mutations from './mutations.js'



// use : 뷰 객체에 전역으로 Vuex를 사용할 수 있도록 등록한다.
Vue.use(Vuex);

// Vuex.Store를 export한다. 여기서 익스포트한 뷰스토어는 main.js에서 임포트한다.
export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    getters: {
        getJobsList(state){
            return state.jobs;
        }
    },
    actions,    // actions : actions
    mutations   // mutations : mutations
});