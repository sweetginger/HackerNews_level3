<template>
    <div>
        jobs
        <div v-for="item in getJobsList" :key="item.id">{{ item.title }}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        // ...mapState({
        //     jobList: state => state.jobs
        // })

        // ...mapGetters({getJobsList : 'getJobsList'}) 와 같다.
        ...mapGetters(['getJobsList']) 
    },
    created(){
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>
