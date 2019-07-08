<template>
    <div>
        <ul class="news-list">
            <li v-for="item in this.$store.state.news" :key="item.id" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ item.points }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="link-text">
                        by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
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

<style scoped>
.news-list{
    margin: 0;
    padding: 0;
}
.post{
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title{
    margin: 0;
}
.link-text{
    color: #828282;
}
</style>
