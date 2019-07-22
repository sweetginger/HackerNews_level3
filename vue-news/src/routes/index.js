import Vue from 'vue'
import VueRouter from 'vue-router'

// 각 컴포넌트들을 import 한다.
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'

// use : 뷰 객체에 전역으로 사용할 수 있도록 등록한다.
Vue.use(VueRouter);

export const router = new VueRouter({
    // url에서 /# 을 제거하려면 라우터에 mode: 'history' 를 적용한다.
    mode: 'history',
    routes: [{
            path: '/',
            name: 'main',
            redirect: '/news',
        },
        {
            // path: url 주소
            path: '/news',
            // route name
            name: 'news',
            // component: url 요청시 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:id', // 파라미터로 넘길 변수와 값을 정의한다.
            component: UserView,
        }
    ]
});