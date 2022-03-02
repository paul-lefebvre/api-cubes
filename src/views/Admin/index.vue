<template>
  <div class="admin">
    <div class="content">
      <button>Créer un compte</button>

      <button v-for="role in roles" :key="role.id">
        {{ role.role }} <br />

        <!--v if avec les différents rôle, à récupérer dans la base -->
        <!--v if avec les différents rôle, à récupérer dans la base selon le rôle du compte -->
      </button>
      <!-- ADMIN <br />
        - Gestion Super Administrateurs :
        <br /><br />
        * Creation Administrateurs
        <br />
        * Creation Modérateurs
        <br />
        - Gestion des Administrateurs :
        <br />
        * Creation Administrateurs<br />
        - Gestion des Citoyen :
        <br />
        * Creation Citoyen <br />
        * Creation Désactivation / Activation compte citoyen <br />
        - Gestion des commentaires -->

      <!--v if avec les différents rôle, à récupérer dans la base -->
      <!--v if avec les différents rôle, à récupérer dans la base selon le rôle du compte -->
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
