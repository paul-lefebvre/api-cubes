<template>
  <div class="login">

    <div id="back">
      <canvas id="canvas" class="canvas-back"></canvas>
      <div class="backRight">    
      </div>
      <div class="backLeft">
      </div>
    </div>

    <div id="slideBox">
      <div class="topLayer">
        <div class="left">
          <div class="content">
            <h2>Inscription</h2>
            <form id="form-signup" method="post" onsubmit="return false;">
              <div class="form-element form-stack">
                <label for="email" class="form-label">Email</label>
                <input id="email" type="email" name="email">
              </div>
              <div class="form-element form-stack">
                <label for="username-signup" class="form-label">Username</label>
                <input id="username-signup" type="text" name="username">
              </div>
              <div class="form-element form-stack">
                <label for="password-signup" class="form-label">Password</label>
                <input id="password-signup" type="password" name="password">
              </div>
              <!--<div class="form-element form-checkbox">
                <input id="confirm-terms" type="checkbox" name="confirm" value="yes" class="checkbox">
                <label for="confirm-terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
              </div>-->
              <div class="form-element form-submit">
                <button id="signUp" class="signup" type="submit" name="signup">Sign up</button>
                <button id="goLeft" class="signup off">Log In</button> 
              </div>
            </form>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <h1>Links For Citizens</h1>
            <h2>Connexion</h2>
            <form id="form-login" method="post" onsubmit="return false;">
              <div class="form-element form-stack">
                <label for="username-login" class="form-label">Email</label>
                <input id="username-login" type="text" name="username">
              </div>
              <div class="form-element form-stack">
                <label for="password-login" class="form-label">Mot de passe</label>
                <input id="password-login" type="password" name="password">
              </div>
              <div class="form-element form-submit">
                <button id="logIn" class="login" type="submit" name="login">Se Connecter</button>
                <!--<button id="goRight" class="login off" name="signup">Inscription</button>-->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
window.$ = window.jQuery = require("jquery");

import '@/assets/js/login'

  export default {
    name: 'loginPage',
    components: {},
    title () {
        this.someValue = "test";
        return `${this.someValue} - LFC`;
    },   
  };
</script>

<style scoped>
  @charset "UTF-8";
  @import "./style.css";
</style>