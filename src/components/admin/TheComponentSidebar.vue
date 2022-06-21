<template>
  <aside class="the-component-sidebar">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab.id"
          @click="activeTab = tab.id">
        <a class="nav-link" :class="{'active': activeTab === tab.id}" href="#">{{ tab.name }}</a>
      </li>
    </ul>

    <div class="tab-content border-top-0 border ">
      <div class="tab-pane" v-for="(tab, i) in tabs" :key="tab.id"
           :class="{'active': activeTab === tab.id}" role="tabpanel">
        <template v-if="activeComponent">
          <StylesForm :data="activeComponent?.variants[i]"
                      v-model="tab.modelValue"
                      :tabId="tab.id"
                      @update:modelValue="onTabDataChange"
          />
        </template>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref } from 'vue'
import { ComponentConfig, ComponentConfigVars, useComponentStore } from '../../stores/componentStore'
import StylesForm from './StylesForm.vue'
import { useUserStore } from '../../stores/userStore'
import { useProjectsStore } from '../../stores/projectsStore'
import { CssComponent } from '../../@types/CssComponent'

export default defineComponent({
  name: 'TheComponentSidebar',
  components: { StylesForm },
  props: {
    componentId: {
      type: String,
      required: true
    },
    projectId: {
      type: String,
      required: true
    }

  },
  setup (props) {
    const projectStore = useProjectsStore()
    const activeTab = ref('basic')
    const tabs = computed(() => activeComponent.value?.variants
        .map((variant, index) => ({
          id: variant.id,
          name: variant.name,
          vars: variant.cssVars,
          modelValue: {}
        }))
    )

    const activeComponent: ComputedRef<CssComponent | null> = computed(() => {
      return projectStore.getProjectComponent(props.projectId, props.componentId)
    })

    function onTabDataChange (variantId: string, data: Record<string, any> | undefined) {
      const changedVariant = activeComponent.value?.variants.find(variant => variant.id === variantId)

      if (changedVariant) {
        changedVariant.modelValue = data
      }
    }

    return {
      activeComponent,
      activeTab,
      tabs,
      onTabDataChange
    }
  }
})
</script>

<style scoped lang="scss">
.the-component-sidebar {
  width: 350px;
  flex-shrink: 0;
  padding: 0 1rem 1rem 1rem;
  overflow: auto;

  .nav-tabs {
    padding-top: 1rem;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: white;
  }
}
</style>
