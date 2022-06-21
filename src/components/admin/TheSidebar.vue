<template>
  <div class="the-sidebar">
    <div class="">
      Componenti

      <button @click="addComponent">Add</button>
    </div>

    <div class="list-group">
      <div class="list-group-item" v-for="component in project.components">
        <router-link :to="{name:'projects.components.show', params: {cId: component.id}}">
          {{ component.name }}
        </router-link>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '../../stores/projectsStore'
import { Project } from '../../@types/Project'

export default defineComponent({
  name: 'TheSidebar',
  setup () {
    const projectId = useRoute().params.id as string
    const projectsStore = useProjectsStore()

    const project = computed(() => {
      return projectsStore.getProject(projectId) as Project
    })

    function addComponent () {
      projectsStore.addComponent(projectId, {
        id: '',
        implements: 'button',
        variants: []
      })
    }

    return {
      project,
      addComponent
    }
  }
})
</script>

<style scoped lang="scss">
.the-sidebar {
  width: 250px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-right: 1px solid #e5e5e5;
}
</style>
