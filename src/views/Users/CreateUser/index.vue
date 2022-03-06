<template>
  <div class="createUser">
    <form id="form-createUser" method="post" onsubmit="">
      <div class="form-element form-stack">
        <label for="pseudo" class="form-label">Pseudo</label>
        <input id="pseudo" type="text" name="pseudo" />
      </div>
      <div class="form-element form-stack">
        <label for="nom" class="form-label">Nom</label>
        <input id="nom" type="text" name="nom" />
      </div>
      <div class="form-element form-stack">
        <label for="prenom" class="form-label">Prenom</label>
        <input id="prenom" type="text" name="prenom" />
      </div>
      <div class="form-element form-stack">
        <label for="email" class="form-label">Email</label>
        <input id="email" type="email" name="email" />
      </div>
      <div class="form-element form-stack">
        <label for="password" class="form-label">password</label>
        <input id="password" type="password" name="password" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="./style.css"></style>
