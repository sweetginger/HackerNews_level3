<template>
  <div id="app">
    <!-- <router-link to="/news">News</router-link> -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

/* Router Transition
   라우터 트랜지션은 클래스명-트랜지션동작명 으로 클래스를 생성하면 된다.
   공식문서에는 fade로 클래스명을 정의하기 때문에 css정의시 fade-트랜지션동작명 으로 정의되어있으나,
   이 프로젝트에서는 클래스명을 page로 하고 css정의시 prefix를 page로 붙인다.
 */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
