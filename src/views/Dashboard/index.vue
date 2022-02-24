<template>
  <div class="dashboard">
    <Sidebar/>
    <div class="content">
      <router-view/>
    </div>

  </div>

</template>

<script>
import Sidebar from "@/components/SideBar/Sidebar.vue";
export default {
  name: "dashboard",
  components: {Sidebar}
}
</script>

<style scoped src="./style.css"></style>