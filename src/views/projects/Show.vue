<template>
  <div class="d-flex h-100">
    <the-sidebar></the-sidebar>

    <div class="flex-fill">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheSidebar from '../../components/admin/TheSidebar.vue'

export default defineComponent({
  name: 'ProjectShow',
  components: { TheSidebar }
})
</script>

<style scoped>

</style>
