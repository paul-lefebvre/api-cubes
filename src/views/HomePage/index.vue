<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome test Your Vue.js App" />
    <h3>Résultat d'un CALL API (vers /api/users/)</h3>
    <p v-bind:key="user.id" v-for="user in users">
      Utilisateur : {{ user.firstname }} {{ user.lastname }} | ID :
      {{ user.usr_id }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

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
  name: "HomePage",
  props: {},
  components: {},

  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    console.log("users : ", this.users);
    console.log("-- CALL API --");
    this.users = await getUsers();
    console.log("users : ", this.users);
  },
};
</script>

<style scoped src="./style.css"></style>
