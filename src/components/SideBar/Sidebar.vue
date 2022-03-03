<template>
  <div class="sidebar">
    <div class="title">Bienvenue sur l'espace d'administration</div>
    <div class="menu-item">
      <router-link
        to="/userlist"
        active-class="active"
        tag="button"
        class="side-btn"
      >
        <div class="link-container">Liste d'utilisateurs</div>
      </router-link>
      <router-link
        to="/ressources"
        active-class="active"
        tag="button"
        class="side-btn"
      >
        <div class="link-container">Ressources</div>
      </router-link>
      <router-link
        to="/profile"
        active-class="active"
        tag="button"
        class="side-btn"
      >
        <div class="link-container">Profile</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="./style.css"></style>
