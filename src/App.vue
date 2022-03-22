<template>
  <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
  </div>-->
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {}
}

</script>

<style>
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  html {
    padding: 0;
    margin: 0;
    height: 100% !important;
    width: 100% !important;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
</style>
