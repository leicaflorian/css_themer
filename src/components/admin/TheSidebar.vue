<template>
  <div class="the-sidebar">
    <div class="border-end">
      Lista componenti attivi nel progetto
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheSidebar'
})
</script>

<style scoped lang="scss">
.the-sidebar {
  width: 250px;
  flex-shrink: 0;
}
</style>
