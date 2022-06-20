<template>
  <template v-if="data === 'units'">
    <div class="input-group input-group-sm">
      <input
          :type="type"
          :value="modelValue"
          v-bind="inputAttrs"
          :class="{'form-control-color': type === 'color'}"
          @input="$emit('update:modelValue', $event.target.value)"
          class="form-control"
          :placeholder="defaultValue"
      />

      <template v-if="unit !== undefined && unit !== null">
        <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
          {{ unit }}
        </button>
        <ul class="dropdown-menu">
          <li v-for="entry in dataList" @click="onUnitUpdate(entry)">
            <a class="dropdown-item"
               :class="{active: entry === unit }"
               href="javascript:void(0);"
               v-html="entry"
            ></a>
          </li>
        </ul>
      </template>
    </div>
  </template>

  <template v-else>
    <div class="dropdown">
      <button class="form-control dropdown-toggle d-flex align-items-center" type="button"
              style="min-height: 38px; text-align: inherit"
              data-bs-toggle="dropdown" aria-expanded="false">
        <div class="flex-grow-1 d-inline-block" style="text-align: inherit">
          <template v-if="modelValue">
            {{ modelValue }}
          </template>
          <template v-else>
            <span class="text-muted">

            {{ defaultValue }}
            </span>
          </template>
        </div>

      </button>
      <ul class="dropdown-menu">
        <li v-for="el in dataList" @click="$emit('update:modelValue', el)">
          <a class="dropdown-item" :class="{active: el === modelValue}" href="javascript:void(0)">{{ el }}</a>
        </li>
      </ul>
    </div>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    modelValue: String,
    unit: String,
    type: String,
    defaultValue: String,
    data: {
      type: String as PropType<'units' | 'fontWeights'>,
      default: 'units'
    },
    options: Object
  },
  setup (props, { emit }) {
    const availableUnits = ['rem', 'em', 'px', '%', 'vw', 'vh']
    const availableFontWeights = [300, 400, 500, 600, 700, 800, 900]

    const dataList = computed(() => {
      let toReturn: any[] = []

      switch (props.data) {
        case 'units':
          toReturn = availableUnits
          break
        case 'fontWeights':
          toReturn = availableFontWeights
          break
      }

      if (inputOptions.value.allowEmptyUnit) {
        toReturn.unshift('&nbsp;')
      }

      return toReturn
    })

    const inputOptions = computed(() => {
      return {
        ...{
          allowEmptyUnit: false,
          step: .1,
          min: null,
          max: null
        },
        ...props.options ?? {}
      }
    })

    const inputAttrs = computed(() => {
      switch (props.type) {
        case 'number':
          return {
            step: inputOptions.value.step,
            min: inputOptions.value.min,
            max: inputOptions.value.max
          }
      }
    })

    function onUnitUpdate (entry: any) {
      emit('update:unit', entry === '&nbsp;' ? '' : entry)
    }

    return {
      availableUnits,
      availableFontWeights,
      dataList,
      inputOptions,
      inputAttrs,
      onUnitUpdate
    }
  }
})
</script>
