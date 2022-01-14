<template>
  <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
  </div>-->
  <router-view />
</template>

<script>
import User from './api/models/User';

console.log('USER MODEL : ', User);

export default {
  name: 'App',
  components: {}
}

</script>

<style>
  body {
    overflow: hidden;
  }
  #app {
    margin: 0;
    height: 100% !important;
    width: 100% !important;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
</style>
