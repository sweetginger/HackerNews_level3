<template>
    <div>
        <section>
            <!-- 질문상세정보 -->
            <div class="user-containser">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${getItem.user}`">
                        {{ getItem.user }}
                    </router-link>
                    <div class="time">
                        {{ getItem.time_ago }}
                    </div>
                </div>
            </div>
            <h2>{{ getItem.title }}</h2>
        </section>
        <section>
            <!-- 질문댓글 -->
            <!-- 변수값에 html태그가 있을 경우 {{ 변수명 }} 으로 꺼낼시 텍스트처리된다.
                 이럴때 v-html="변수명" 을 이용하면 html로 변환되어 보여줄 수 있다. -->
            <div v-html="getItem.content"></div>
        </section>
    </div>
</template>

<script>
/*
1. router에서 페이지 경로를 정의한다.
2. api에서 api url을 정의한다. (넘길 값 포함)
3. store actions에서 api url을 비동기로 호출하도록 정의한다.
4. store actions에서 받아온 데이터를 store mutations로 commit하여 호출하도록 정의한다.
5. store mutations에서 store state로 데이터를 담도록 정의한다.
6. store/index.js 에서 getters를 정의하여 state의 item을 리턴하도록 정의한다.
7. 보여줄 페이지에서 작업
    7-1) 보여줄 페이지에서 created 시점에 this.$store.route.params.id를 넘겨주어 actions를 dispatch한다.
         ⇒ actions 호출 ⇒ actions에서는 commit하여 mutions 호출됨 ⇒ state에 값이 담김
    7-2) 보여줄 페이지에서 computed 속성 안에 helper 함수인 ...mapGetters(['getters이름'])을 정의한다.
    7-3) state값을 getters로 html에서 꺼내서 보여준다.
*/

import { mapGetters } from 'vuex';

export default {
    computed: {
        itemInfo(){
            return this.$store.state.item;
        },
        ...mapGetters(['getItem'])
    },
    created(){
        const itemId = this.$route.params.id;
        console.log(itemId);
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style scoped>
.user-containser{
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size: 0.7rem;
}
</style>
