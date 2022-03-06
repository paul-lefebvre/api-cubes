<template>
  <div class="userList">
    <div>
      <router-link to="/profile" tag="button">Créer un compte</router-link>
      Filtres : <br />

      <div v-for="role in roles" :key="role.id">
        <button>{{ role.role }}</button>
      </div>
    </div>
    <div>
      Utilisateurs
      <div id="line-decoration"></div>
      <p v-for="user in users" v-bind:key="user.id">
        Nom : {{ user.firstname }} Prenom : {{ user.lastname }} Role :
        {{ user.roles }}
      </p>
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
      roles: [
        { id: 0, role: "Super Administrateur" },
        { id: 1, role: "Administrateur" },
        { id: 2, role: "Moderateur" },
        { id: 3, role: "Citoyen" },
      ],
    };
  },
  async mounted() {
    this.users = await getUsers();
  },
};
</script>

<style scoped src="./style.css"></style>
