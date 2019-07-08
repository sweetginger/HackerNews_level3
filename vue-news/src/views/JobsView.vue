<template>
    <div>
        <ul class="jobs-list">
            <li v-for="item in getJobsList" :key="item.id" class="post">
                <div class="comments">
                    {{ item.comments_count }}
                </div>
                <div>
                    <p class="jobs-title">
                        <a :href="item.url">{{ item.title }}</a>
                    </p>
                    <small>
                        {{ item.time_ago }} by
                        <a :href="item.url">{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
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

<style scoped>
.jobs-list{
    margin: 0;
    padding: 0;
}
.post{
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.comments{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.jobs-title{
    margin: 0;
}
.link-text{
    color: #828282;
}
</style>
