<template>
  <div class="update-user" v-bind:key="user.id" v-for="user in item">
    User : {{ item.firstname }}
  </div>
</template>

<script>
async function getUserById() {
  try {
    let user = await fetch("/api/users/" + 2, {
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

    console.log("RESPONSE : ", user);
    return user;
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
    this.users = await getUserById();
  },
};
</script>

<style scoped src="./style.css"></style>
