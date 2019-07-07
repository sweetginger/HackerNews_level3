export default {
    SET_NEWS(state, payload){
        state.news = payload;
    },
    SET_ASK(state, payload){
        state.ask = payload;
    },
    SET_JOBS(state, payload){
        state.jobs = payload;
    },
    SET_USER(state, user){
        state.user = user;
    },
    SET_ITEM(state, payload){
        state.item = payload;
    }
}