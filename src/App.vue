<template>
  <header>
    <the-navbar/>
  </header>
  <main class="container-fluid">
    <router-view></router-view>
  </main>

</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import ButtonConfigurator from './components/components/ButtonConfigurator.vue'
import TheNavbar from './components/admin/TheNavbar.vue'
import { useProjectsStore } from './stores/projectsStore'

export default defineComponent({
  components: { TheNavbar, ButtonConfigurator },
  setup () {
    const projectsStore = useProjectsStore()

    function hidrateWithFakeData () {
      const projectId = 'proj_bc020dee-2fa0-4a09-a41f-91df7ed0e0b7'

      projectsStore.addProject({
        'id': projectId,
        'name': 'Css Themere',
        'description': 'Descrizione del nuovo progetto appena creato',
        'createdAt': new Date(),
        'updatedAt': new Date(),
        'components': []
      })

      projectsStore.addComponent(projectId, {
        id: 'comp_bc020dee-2fa0-4a09-a41f-91df7ed0e0b7',
        implements: 'button',
        name: 'Button',
        variants: []
      })
    }

    onMounted(hidrateWithFakeData)
  }
})
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
