<template>
    <div>
        news
        <div v-for="item in list" :key="item.id">{{ item.title }}</div>
    </div>
</template>

<script>
// /api/index.js에서 정의한 api function을 임포트한다.
import { fetchNewsList } from '../api/index.js';

export default {
    data(){
        return{
            list: []
        }
    },
    created(){
        fetchNewsList()
            .then(response => this.list = response.data)
            .catch(error => console.log(error))
    }
}
</script>

<style>

</style>
