<template>
  <header>
    <the-navbar />
  </header>
  <main class="container-fluid">
    <router-view></router-view>
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ButtonConfigurator from './components/components/ButtonConfigurator.vue'
import TheNavbar from './components/admin/TheNavbar.vue'

export default defineComponent({
  components: { TheNavbar, ButtonConfigurator }
})
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
