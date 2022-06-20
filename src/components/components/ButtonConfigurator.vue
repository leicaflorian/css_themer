<template>
  <div class="row">
    <div class="col">
      <button class="btn btn-primary position-sticky top-0" :style="styles"
              ref="btnPreview">Click Me!
      </button>
    </div>
    <div class="col">
      <div class="list-group">
        <div
            class="list-group-item"
            v-for="key in Object.keys(availableVariables)"
        >
          <div class="text-start">
            <label for="exampleFormControlInput1" class="form-label ">
              {{ key }}
            </label>

            <input-group-dropdown
                v-model="availableVariables[key].value"
                v-model:unit="availableVariables[key].unit"
                :defaultValue="availableVariables[key].default"
                :data="availableVariables[key].data"
                :options="availableVariables[key].options"
                :type="availableVariables[key].type"
            />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue'
import InputUnits from '../InputGroupDropdown.vue'
import InputGroupDropdown from '../InputGroupDropdown.vue'

export default defineComponent({
  components: { InputGroupDropdown, InputUnits },
  setup () {
    const btnPreview = ref()
    const prefix = ref('bs')

    const availableVariables = ref({
      'btn-padding-x': { type: 'number', value: '', unit: 'rem', data: 'units' },
      'btn-padding-y': { type: 'number', value: '', unit: 'rem', data: 'units' },
      'btn-font-family': { type: 'text', value: '' },
      'btn-font-weight': { type: 'number', value: '', unit: '', data: 'fontWeights' },
      'btn-line-height': { type: 'number', value: '', unit: '', data: 'units', options: { allowEmptyUnit: true } },
      'btn-color': { type: 'color', value: '' },
      'btn-hover-color': { type: 'color', value: '' },
      'btn-bg': { type: 'color', value: '' },
      'btn-hover-bg': { type: 'color', value: '' },
      'btn-border-width': { type: 'number', value: '', unit: 'px' },
      'btn-border-color': { type: 'color', value: '' },
      'btn-border-radius': { type: 'number', value: '', unit: 'px' },
      'btn-box-shadow': { type: 'text', value: '' },
      'btn-disabled-opacity': { type: 'number', value: '', options: { min: 0, max: 1, step: .1 } },
      'btn-focus-box-shadow': { type: 'text', value: '' }
    })

    const styles = computed(() => {
      return Object.keys(availableVariables.value).reduce((acc, key) => {
        const property = availableVariables.value[key]
        const value = property.value
        const propKey = `--${prefix.value}-${key}`

        if (value) {
          acc[propKey] = value

          if (property.unit) {
            acc[propKey] += property.unit
          }
        }

        return acc
      }, {})
    })

    onMounted(() => {
      Object.keys(availableVariables.value).forEach(key => {
        const type = availableVariables.value[key].type
        let defaultValue = getComputedStyle(btnPreview.value)
            .getPropertyValue('--bs-' + key).trim()

        if (defaultValue) {
          if (type === 'number') {
            defaultValue = +defaultValue
          }
          availableVariables.value[key].default = defaultValue
        }
      })
    })

    return {
      prefix,
      availableVariables,
      styles,
      btnPreview
    }
  }
})
</script>
