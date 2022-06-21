<template>
  <div class="">
    <div class="accordion accordion-flush" id="accordion">
      <div class="accordion-item" v-for="(group) in groups" :key="group.id">
        <h4 class="accordion-header" :id="group.id">
          <button class="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#' + group.id + 'Collapse'">
            {{ group.id }}
          </button>
        </h4>
        <div :id="group.id + 'Collapse'" class="accordion-collapse collapse">
          <div class="accordion-body px-2">
            <div class="list-group list-group-flush">
              <div class="list-group-item"
                   v-for="(data, key) in group.value" :key="key">
                <div class="text-start">
                  <label class="form-label">
                    {{ data.id }}
                  </label>

                  <input-group-dropdown
                      v-model="modelValue[data.id].value"
                      v-model:unit="modelValue[data.id].unit"
                      :defaultValue="data.value.default"
                      :data="data.value.data"
                      :options="data.value.options"
                      :type="data.value.type"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref, unref, isRef, isProxy, isReactive, toRaw, watch } from 'vue'
import InputGroupDropdown from '../InputGroupDropdown.vue'
import { CssCategory } from '../../@enums/CssCategory'
import { CssProperty } from '../../@types/CssProperty'
import { CssVariant } from '../../@types/CssVariant'

export default defineComponent({
  name: 'StylesForm',
  components: { InputGroupDropdown },
  props: {
    data: { type: Object as PropType<CssVariant>, required: true },
    tabId: String as PropType<string>
  },
  setup (props, { emit }) {
    const modelValue = ref(Object.keys(props.data?.cssVars ?? []).reduce((acc, key) => {
      acc[key] = {
        value: props.data.cssVars[key].value,
        unit: props.data.cssVars[key].unit
      }

      return acc
    }, {} as any))
    const groups = computed(() => {
      const propsList: { [key: string]: { id: string, value: CssProperty }[] } = {}

      if (props.data) {
        Object.keys(props.data.cssVars).forEach((key, i) => {
          const prop = props.data.cssVars[key]
          const category = prop.category

          if (!propsList[category]) {
            propsList[category] = []
          }

          propsList[category].push({ id: key, value: prop })
        })
      }

      return Object.keys(propsList).reduce((acc, key) => {
        const value = propsList[key as CssCategory]

        if (value.length) {
          acc.push({ id: key as CssCategory, value })
        }

        return acc
      }, [] as { id: CssCategory, value: { id: string, value: CssProperty }[] }[])
    })

    watch(modelValue.value, (value) => {
      emit('update:modelValue', props.tabId ,value)
    }, { deep: true })

    return {
      groups,
      modelValue,
      toRaw
    }
  }
})
</script>

<style scoped lang="scss">
.list-group {
  --bs-list-group-border-radius: 0;

  & .list-group-item:first-child {
    border-top: 0;
  }
}
</style>
