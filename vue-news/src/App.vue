<template>
  <div id="app">
    <!-- <router-link to="/news">News</router-link> -->
    <tool-bar></tool-bar>
    <router-view></router-view>
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
</style>
