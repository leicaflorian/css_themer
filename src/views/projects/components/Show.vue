<template>

  <div class="d-flex h-100">
    <div class="flex-fill d-flex flex-column">
      <h2 class="flex-shrink-0">dettagli componente scelto</h2>

      <div class="preview-container flex-fill">
        <component-preview :project-id="projectId" :component-id="compId"></component-preview>
      </div>
    </div>
    <the-component-sidebar :projectId="projectId" :componentId="compId"></the-component-sidebar>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import TheComponentSidebar from '../../../components/admin/TheComponentSidebar.vue'
import { useComponentStore } from '../../../stores/componentStore'
import { button as buttonConfig } from '../../../composables/button.config'
import { useRoute } from 'vue-router'
import ComponentPreview from '../../../components/admin/ComponentPreview.vue'

export default defineComponent({
  name: 'ComponentShow',
  components: { ComponentPreview, TheComponentSidebar },
  setup () {
    const projectId = useRoute().params.id as string
    const compId = useRoute().params.cId as string

    return {
      compId,
      projectId
    }
  }
})
</script>

<style scoped lang="scss">
.preview-container {
  border: 1px solid var(--bs-dark);
  min-height: 200px;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-color: #e9ebef;

}
</style>
