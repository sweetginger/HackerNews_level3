<template>
    <div>
        news
        <div v-for="item in this.$store.state.news" :key="item.id">{{ item.title }}</div>
    </div>
</template>

<script>
// /api/index.js에서 정의한 api function을 임포트한다.
import { fetchNewsList } from '../api/index.js';

import { mapMutations } from 'vuex'

export default {
    created(){
        // vuex store actions를 dispatch로 호출 -> actions에서 commit -> mutations에서 state에 값을 넣어줌
        // 따라서 template에서 state에 접근하여 데이터를 꺼낼 수 있다.
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>
