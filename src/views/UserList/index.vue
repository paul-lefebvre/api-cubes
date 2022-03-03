<template>
  <div class="userList">
    <p>
      Filtres : <br />

      <button v-for="role in roles" :key="role.id">
        {{ role.role }} <br />
      </button>
      <!-- faire une liste d'user général
        filter cette liste d'user selon leur role -->
    </p>
    <p v-for="user in users" v-bind:key="user.id">
      Nom : {{ user.firstname }} <br />
      Prenom : {{ user.lastname }} <br />
      Role : {{ user.roles }} <br />
    </p>
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
