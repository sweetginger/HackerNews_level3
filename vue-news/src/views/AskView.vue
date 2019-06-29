<template>
    <div>
        ask
        <div v-for="item in askList" :key="item.id">{{ item.title }}</div>
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

<style>

</style>
