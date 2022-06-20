<template>
  <aside class="the-component-sidebar">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab.id"
          @click="activeTab = tab.id">
        <a class="nav-link" :class="{'active': activeTab === tab.id}" href="#">{{ tab.name }}</a>
      </li>
    </ul>

    <div class="tab-content border-top-0 border ">
      <div class="tab-pane" v-for="tab in tabs" :key="tab.id"
           :class="{'active': activeTab === tab.id}" role="tabpanel">
        <template v-if="activeComponent">
          <StylesForm :data="activeComponent[tab.dataKey]"
                      v-model="tab.modelValue"
                      @update:modelValue="onTabDataChange(tab.id)"
                      :tabId="tab.id"
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

export default defineComponent({
  name: 'TheComponentSidebar',
  components: { StylesForm },
  props: {
    componentId: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const componentStore = useComponentStore()
    const userStore = useUserStore()
    const variants = ref([])
    const activeTab = ref('basic')
    const tabs = ref([
      {
        id: 'basic',
        name: 'Basic Styles',
        dataKey: 'basicVars' as ComponentConfigVars,
        modelValue: {}
      }, {
        id: 'primary',
        name: 'Primary',
        dataKey: 'variantVars' as ComponentConfigVars,
        modelValue: {}
      }
    ])

    const activeComponent: ComputedRef<ComponentConfig | null> = computed(() => {
      return componentStore.activeComponent
    })

    function onTabDataChange () {
      userStore.updateComponent(props.componentId, {
        id: props.componentId,
        tabs: [...tabs.value]
      })
    }

    return {
      activeComponent,
      activeTab,
      variants,
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
  padding: 1rem;
}
</style>
