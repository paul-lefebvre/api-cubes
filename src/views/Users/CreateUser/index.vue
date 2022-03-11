<template>
  <div class="CreateUser">
    <form @submit="submitForm">
      <input type="text" v-model="pseudo" placeholder="pseudo" /><br />
      <input type="text" v-model="firstname" placeholder="nom" /><br />
      <input type="text" v-model="lastname" placeholder="prenom" /><br />
      <input type="email" v-model="mail" placeholder="e-mail" /><br />
      <input
        type="password"
        v-model="password"
        placeholder="mot de passe"
      /><br />
      <button type="submit">Créer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pseudo: "",
      firstname: "",
      lastname: "",
      role: "",
      mail: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      // eslint-disable-next-line no-unused-vars
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          pseudo: this.pseudo,
          firstname: this.firstname,
          lastname: this.lastname,
          roles: "Citoyen",
          mail: this.mail,
          password: this.password,
        }),
      });
    },
  },
};
</script>

<style scoped src="./style.css"></style>
