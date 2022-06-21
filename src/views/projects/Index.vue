<template>
  <div class="container h-100">
    <h1>Lista progetti</h1>

    <ul class="nav bg-light border justify-content-center mb-3">
      <li class="nav-item" @click="addProject">
        <a class="nav-link active" aria-current="page" href="#">Aggiungi progetto</a>
      </li>
    </ul>

    <div class="list-group">
      <router-link v-for="project in projectsStore.projects"
                   :to="{name:'projects.show', params: {id: project.id}}"
                   class="list-group-item list-group-item-action">
        Progetto: {{ project.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProjectsStore } from '../../stores/projectsStore'
import { v4 as uuidv4 } from 'uuid';

export default defineComponent({
  name: 'ProjectsIndex',
  setup () {
    const projectsStore = useProjectsStore()

    function addProject () {
      projectsStore.addProject({
        id: uuidv4(),
        name: 'Nuovo progetto',
        description: 'Descrizione del nuovo progetto appena creato',
        createdAt: new Date(),
        updatedAt: new Date(),
        components: []
      })
    }

    return {
      projectsStore,
      addProject
    }
  }
})
</script>

<style scoped>

</style>
