<template>
  <p v-for="user in users" v-bind:key="user.id">
    Nom : {{ user.firstname }} <br />
    Prenom : {{ user.lastname }} <br />
    Role : {{ user.roles }} <br />
  </p>
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
