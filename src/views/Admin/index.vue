<template>
  <div class="admin">
    <div class="content">
      <!-- search is a component -->
      <button>Créer un compte</button>
      <p>
        Filtres : <br />

        <button v-for="role in roles" :key="role.id">
          {{ role.role }} <br />
        </button>
        <!-- faire une liste d'user général
        filter cette liste d'user selon leur role -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: [
        { id: 0, role: "Super Administrateur" },
        { id: 1, role: "Administrateur" },
        { id: 2, role: "Moderateur" },
        { id: 3, role: "Citoyen" },
      ],
    };
  },
};
</script>

<style scoped src="./style.css"></style>
