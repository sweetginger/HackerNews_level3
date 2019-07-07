<template>
    <div>
        <p v-for="item in this.$store.state.news" :key="item.id">
            <!-- html 태그를 vue와 연결시키고 싶을 때 v-bind:속성명 으로 쓰거나 축약하여 :속성명 으로 쓸수있다 -->
            <a v-bind:href="item.url">{{ item.title }}</a>
            <small>
                {{ item.time_ago }} by
                <!-- ES5 문법 : <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
                <!-- 아래는 ES6 문법으로 백틱문자(`) 로 감쌌다. -->
                <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </p>
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
