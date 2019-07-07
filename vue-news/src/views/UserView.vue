<template>
    <div>
        <p>name : {{ userInfo.id }}</p>
        <p>karma : {{ userInfo.karma }}</p>
        <p>created : {{ userInfo.created }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },
    created(){
        console.log(this.$route.params.id);
        const userId = this.$route.params.id;
        // FETCH_USER 라는 이름의 actions를 호출하고 userId를 인자로 넘긴다.
        this.$store.dispatch('FETCH_USER', userId);
    }
}
</script>

<style>

</style>
