import Vue from 'vue';
import Vuex from 'vuex';

// /api/index.js에서 정의한 api function을 임포트한다.
import { fetchNewsList
        ,fetchAskList
        ,fetchJobsList
} from '../api/index.js';

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
    actions: {
        // Vuex Store의 actions는 context를 인자로 받아서 mutations로 commit 할 수 있다.
        FETCH_NEWS(context){
            fetchNewsList()
                .then(response => {
                    console.log(response.data);
                    // SET_NEWS() mutations를 호출하고 response.data를 인자로 넘겨준다.
                    const news = response.data;
                    context.commit('SET_NEWS', news);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_ASK({ commit }){
            fetchAskList()
                // response.data 를 접근할때 destructuring 문법을 쓰면 ({ data }) 로 접근할 수 있다.
                .then(({ data }) => {
                    // destructuring 문법으로 actions function 매개변수에 { commit } 을 넣어줌으로써 context를 생략하고 commit을 직접 접근할 수 있다.
                    commit('SET_ASK', data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then(response => {
                    const jobs = response.data;
                    context.commit('SET_JOBS', jobs);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mutations: {
        SET_NEWS(state, payload){
            state.news = payload;
        },
        SET_ASK(state, payload){
            state.ask = payload;
        },
        SET_JOBS(state, payload){
            state.jobs = payload;
        }
    }
});