<template>
    <div>
        jobs
        <div v-for="item in list" :key="item.id">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
    data(){
        return{
            list: []
        }
    },
    created(){
        fetchJobsList()
            .then(response => this.list = response.data)
            .catch(error => console.log(error))
    }
}
</script>

<style>

</style>
