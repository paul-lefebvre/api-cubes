<template>
  <div class="userList">
    <div>
      Rechercher :
      <!-- <img src="@/assets/icons/iconSearch.svg" width="15" height="15" /> -->
      <input
        type="search"
        v-model="searchKey"
        placeholder="recherche utilisateur"
      />
      <br /><br /> 
      <div class="form-inline">
        Filtres : <br />
        <div v-for="role in roles" :key="role.id">
          <button
            @click="searchRole(role.role)"
            
            value="role.role"
          >
            {{ role.role }}
          </button>
        </div>
      </div>
      <br /><br />
      <!-- <router-link to="/create-user" tag="button">Créer un compte</router-link> -->
      
<!-- creation utilisateur -->
      <div class="card">
        <h1>Ajouter un nouvel utilisateur</h1>
        <div class="card-body">
          <form class="form-inline" >
           
            <div class="form-group">
              <label>Pseudo </label>

              <input v-model="pseudo" type="text" required />
            </div>
            <div class="form-group">
              <label>Nom </label>

              <input v-model="lastname" type="text" required />
            </div>

            <div class="form-group">
              <label>Prenom </label>

              <input v-model="firstname" type="text" required />
            </div>

            <div class="form-group">
              <label>Mot de passe </label>
              <input v-model="password" type="password" required />
            </div>
            <div class="form-group">
              <label>E-mail </label>

              <input v-model="mail" type="email" required />
            </div>
            <div class="ml-auto text-right">
              <button type="submit" @click="CreateUser()">Ajouter</button>
            </div>
          </form>
        </div>
      </div>
      <br /><br />

      <div class="card mt-5">
        <div class="card-header">Utilisateurs</div>
        <div id="line-decoration"></div>
        <h1 v-if="search.length == 0">Aucun résultat</h1>
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
                  <th></th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- update -->
                <template v-for="user in search" v-bind:key="user.usr_id">
                  <tr>
                    <template v-if="editId == user.usr_id">
                      <td><input v-model="editUser.id" type="text" /></td>

                      <td>
                        <input v-model="editUser.pseudo" type="text" />
                      </td>
                      <td>
                        <input v-model="editUser.lastname" type="text" />
                      </td>
                      <td>
                        <input v-model="editUser.firstname" type="text" />
                      </td>
                      <td><input v-model="editUser.role" type="text" /></td>
                      <td>
                        <input v-model="editUser.password" type="text" />
                      </td>
                      <td>
                        <button v-on:click="updateUser(user.usr_id)">
                          valider
                        </button>
                      </td>

                      <!-- <td>
                      <span class="icon"
                        ><i @click="onCancel" class="fa fa-ban"></i
                      ></span>
                    </td> -->
                    </template>
                    <template v-else>
                      <td>{{ user.usr_id }}</td>
                      <td>{{ user.pseudo }}</td>
                      <td>{{ user.lastname }}</td>
                      <td>{{ user.firstname }}</td>
                      <td>{{ user.roles }}</td>
                      <td>
                        <button v-on:click="editUserClick(user)">
                          Modifier
                        </button>

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
                      <td>
                        <button v-on:click="deleteUser(user.usr_id)">
                          Supprimer
                        </button>
                      </td>
                    </template>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />
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
      editId: "",
      searchKey: "",
      //searchRole: "",
      editUser: [
        {
          id: "",
          pseudo: "",
          firstname: "",
          lastname: "",
          password: "",
          role: "",
          mail: "",
        },
      ],
      roles: [
        { id: 0, role: "Super Administrateur" },
        { id: 1, role: "Administrateur" },
        { id: 2, role: "Moderateur" },
        { id: 3, role: "Citoyen" },
      ],
    };
  },

  computed: {
    search() {
      return this.users.filter((userSearch) => {
        if (userSearch.pseudo == null) {
          userSearch.pseudo = "";
        }
        if (userSearch.roles == null) {
          userSearch.roles = "";
        }

        // console.log("search role : " + this.searchRole);
        // if (this.searchRole != "") {
        //   console.log(this.searchRole);
        //   return userSearch.roles
        //     .toLowerCase()
        //     .includes(this.searchRole.toLowerCase());
        // }
        console.log("role : " + this.searchKey);
      if (this.searchKey == "Super Administrateur" || this.searchKey == "Administrateur" || this.searchKey == "Citoyen" || this.searchKey == "Moderateur"){
        return userSearch.roles.toLowerCase().includes(this.searchKey.toLowerCase());
      }
        

        return userSearch.firstname
          .toLowerCase()
          .includes(this.searchKey.toLowerCase()); //boolean
        // userSearch.roles.toLowerCase().includes(this.searchRole.toLowerCase())

        // let lastname = userSearch.lastname.toLowerCase.includes(
        //   this.searchKey.toLowerCase()
        // );
        // console.log("lastname : " + lastname);

        // let result = firstname + lastname;
        // console.log("resultat : " + result);
        // return result;
      });
    },
  },

  methods: {
    async CreateUser() {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch("/api/users", {
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
      this.pseudo = "";
      this.firstname = "";
      this.lastname = "";
      this.mail = "";
      this.password = "";
      this.roles = "";
      this.users = await getUsers();
    },
    

    searchRole(role){
      this.searchKey = role;
      
    },

    // searchRole(role) {
    //   this.searchKey = role;
    //   return this.users.filter((userSearch) => {
    //     return userSearch.role
    //       .toLowerCase()
    //       .includes(this.searchKey.toLowerCase());
    //   });
    // },

    editUserClick(user) {
      console.log("edit user : " + user.usr_id);

      this.editId = user.usr_id;
      this.editUser.id = user.usr_id;
      this.editUser.pseudo = user.pseudo;
      this.editUser.firstname = user.firstname;
      this.editUser.lastname = user.lastname;
      this.editUser.role = user.roles;
      this.editUser.mail = user.mail;
      this.editUser.password = user.password;
      console.log("edit id : " + this.editId);
    },

    async updateUser(id) {
      // eslint-disable-next-line no-unused-vars
      const res = await fetch("/api/users/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          pseudo: this.editUser.pseudo,
          firstname: this.editUser.firstname,
          lastname: this.editUser.lastname,
          roles: this.editUser.role,
          mail: this.editUser.mail,
          password: this.editUser.password,
        }),
      });
      this.editId = "";
      this.editUser.pseudo = "";
      this.editUser.firstname = "";
      this.editUser.lastname = "";
      this.editUser.role = "";
      this.editUser.password = "";
      this.editUser.mail = "";
      this.users = await getUsers();
    },

    async deleteUser(id) {
      // eslint-disable-next-line no-unused-vars
      const res = await fetch("/api/users/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      this.users = await getUsers();
    },
  },

  async mounted() {
    this.users = await getUsers();
  },
};
</script>

<style scoped src="./style.css"></style>
