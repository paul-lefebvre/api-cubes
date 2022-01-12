<template>

    <h1>404</h1>
    <p>Oups! Il n'y a rien par ici.</p>
    <a class="button" href="#"><i class="icon-home"></i>Retour</a>  

</template>

<script>
  export default {
    name: 'notFound',
    components: {},
    title () {
        this.someValue = "test";
        return `${this.someValue} - LFC`;
    },    
    mounted () {
    },
  };
</script>

<style scoped src="./style.css"></style>