<template>
    <div>
        ask
        <div v-for="item in list" :key="item.id">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
    data(){
        return{
            list: []
        }
    },
    created(){
        fetchAskList()
            .then(response => this.list = response.data)
            .catch(error => console.log(error))
    }
}
</script>

<style>

</style>
