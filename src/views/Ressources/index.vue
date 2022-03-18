<template>
  <div class="ressources">
    <div class="create-ressources">
      <p>Ajouter une ressource</p>
      <form v-on:submit.prevent="onSubmit">
        <label>Nom</label>
        <input type="text" />
        <label>Image</label>
        <input type="" />
        <label>Fichier</label>
        <input type="file" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="./style.css"></style>
