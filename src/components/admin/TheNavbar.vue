<template>
  <nav class="navbar bg-light border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Css Themer</a>

      <router-link to="/projects">Progetti</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheNavbar'
})
</script>

<style scoped>

</style>
