<template>
  <div>

    <div class="d-flex">
      <div class="flex-fill">
        <h2>dettagli componente scelto</h2>

        <div class="preview-container">
          USARE PINIA PER SALVARE NELL STORE IL COMPONENTE ATTUALEMNTE ATTIVO CON LE SUE CONFIGURAZIONI
          E POI GENERARE DI CONSEGUENZA LA SIDEBAR CON LE VARIANTI E LA PREVIE CON I VARI COMPONENTI
        </div>
      </div>
      <the-component-sidebar componentId="button"></the-component-sidebar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import TheComponentSidebar from '../../../components/admin/TheComponentSidebar.vue'
import { useComponentStore } from '../../../stores/componentStore'
import buttonConfig from '../../../composables/button.config'

export default defineComponent({
  name: 'ComponentShow',
  components: { TheComponentSidebar },
  setup () {
    const componentStore = useComponentStore()

    onMounted(() => {
      componentStore.setActiveComponent(buttonConfig)
    })

    return {}
  }
})
</script>

<style scoped lang="scss">
.preview-container {
  border: 1px solid var(--bs-dark);
  min-height: 200px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
</style>
