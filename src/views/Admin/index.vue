<template>
  <div class="admin">
    <div class="content">
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

      <p v-for="user in users" v-bind:key="user.id">
        Nom : {{ user.firstname }} <br />
        Prenom : {{ user.lastname }} <br />
        Role : {{ user.role }} <br />
      </p>

      <!--v if avec les différents rôle, à récupérer dans la base -->
      <!--v if avec les différents rôle, à récupérer dans la base selon le rôle du compte -->
    </div>
  </div>
</template>

<script>
async function getUsers() {
  try {
    let users = await fetch("/api/users/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        return response;
      });

    console.log("RESPONSE : ", users);
    return users;
  } catch (err) {
    console.log(err);
  }
}
export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    this.users = await getUsers();
  },
};
</script>

<style scoped src="./style.css"></style>
