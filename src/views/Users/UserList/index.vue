<template>
  <div class="userList">
    <div>
      <input type="search" />
      <router-link to="/create-user" tag="button">Créer un compte</router-link>
      Filtres : <br />

      <div class="card">
        <div class="card-header">Add a new product</div>
        <div class="card-body">
          <form class="form-inline" v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <label>ID</label>
              <!-- voir la maj pour la donnee firstname -->
              <input
                v-model="id"
                type="text"
                class="form-control m1-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Nom</label>
              <!-- voir la maj pour la donnee firstname -->
              <input
                v-model="firstname"
                type="text"
                class="form-control m1-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Prenom</label>
              <!-- voir la maj pour la donnee firstname -->
              <input
                v-model="lastname"
                type="text"
                class="form-control m1-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Mot de passe</label>
              <!-- voir la maj pour la donnee firstname -->
              <input
                v-model="password"
                type="text"
                class="form-control m1-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="ml-auto text-right">
              <button type="submit" class="btn btn-primary my-2">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-header">Utilisateurs</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th>Pseudo</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                  <template v-if="editId == user.id">
                    <td><input v-model="editUser_id" type="text" /></td>

                    <td>
                      <input v-model="editUser_firstname" type="text" />
                    </td>
                    <td>
                      <input v-model="editUser_lastname" type="text" />
                    </td>
                    <td><input v-model="editUser_role" type="text" /></td>
                    <td>
                      <input v-model="editUser_password" type="text" />
                    </td>
                    <td>
                      <span class="icon">
                        <i @click="updateUser(user.id)" class="fa fa-check"></i>
                      </span>
                    </td>
                    <!-- <td>
                      <span class="icon"
                        ><i @click="onCancel" class="fa fa-ban"></i
                      ></span>
                    </td> -->
                  </template>
                  <template v-else>
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                      <a href="#" class="icon">
                        <i
                          v-on:click="editUserClick(user)"
                          class="fa fa-pencil"
                        ></i>
                      </a>
                      <!-- detail ajout component VueUser  -->
                      <!-- <router-link 
                    :to="{
                      name:'ProductPage', 
                      params:{id: product.id}
                    }" 
                    class="icon"
                    >
                      <i class="fa fa-eye"></i>
                    </router-link> -->
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />

      <div v-for="role in roles" :key="role.id">
        <button>{{ role.role }}</button>
      </div>
    </div>
    <div>
      Utilisateurs
      <div id="line-decoration"></div>
      <ul v-for="user in users" v-bind:key="user.id">
        <li>
          id : {{ user.id }} - Nom : {{ user.firstname }} - Prenom :
          {{ user.lastname }} - Role : {{ user.roles }} -
          <button>Modifier</button> - ><button>Supprimer</button>
          <!-- if click modif span to input modif and update -->
          <!-- if click delete delete this id and refresh -->
        </li>
      </ul>
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

// eslint-disable-next-line no-unused-vars
async function updateUser(id) {
  // eslint-disable-next-line no-unused-vars
  const res = await fetch("/api/users" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      pseudo: this.editUser_pseudo,
      firstname: this.editUser_firstname,
      lastname: this.editUser_lastname,
      role: this.editUser_role,
      mail: this.editUser_mail,
      password: this.editUser_password,
    }),
  });
}

// eslint-disable-next-line no-unused-vars

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

  editUserClick(user) {
    this.editUser_pseudo = user.pseudo;
    this.editUser_firstname = user.firstname;
    this.editUser_lastname = user.lastname;
    this.editUser_role = user.role;
    this.editId = user.id;
    this.editUser_mail = user.mail;
    this.editUser_password = user.password;
  },

  async mounted() {
    this.users = await getUsers();
  },
};
</script>

<style scoped src="./style.css"></style>
