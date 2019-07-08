<template>
    <div>
        <ul class="ask-list">
            <li v-for="item in askList" :key="item.id" class="post">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="ask-title">
                        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
                    </p>
                    <small>
                        {{ item.time_ago }} by
                        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
        <!-- <p v-for="item in askList" :key="item.id">
            <!-- <a :href="item.url">{{ item.title }}</a> -->
            <!-- <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
            <small>{{ item.time_ago }}{{ item.user }}</small>
        </p> -->
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'
import { mapState } from 'vuex'

export default {
    computed: {
        // vuex helper - mapState를 사용하여 askList를 정의하고 state.ask를 꺼내옴
        // 이렇게 하면 template에서 변수명으로 접근하여 꺼낼 수 있다.
        ...mapState({
            askList: state => state.ask
        })
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style scoped>
.ask-list{
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
.ask-title{
    margin: 0;
}
.link-text{
    color: #828282;
}
</style>

