<template>
  <div class="variant-container">

    <div class="variant-group" v-for="(variants, key) in availableVariants" :key="key">
      <h5 class="variant-group-title">{{ key }}</h5>

      <div class="variant" v-for="variant in variants" :key="variant.id">
        <h6 class="variant-title badge bg-info">{{ variant.name }}</h6>
        <component
            :is="variant.htmlTag"
            :class="variant.cssClass"
            :style="formatStyles(variant.modelValue)">
          {{ activeComponent.name }}
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useProjectsStore } from '../../stores/projectsStore'
import { CssVariant } from '../../@types/CssVariant'
import { CssProperty } from '../../@types/CssProperty'

export default defineComponent({
  name: 'ComponentPreview',
  props: {
    projectId: { type: String, required: true },
    componentId: { type: String, required: true }
  },
  setup (props) {
    const projectStore = useProjectsStore()

    const activeComponent = computed(() => projectStore.getProjectComponent(props.projectId, props.componentId))
    const basicVariants = computed(() => {
      return activeComponent.value.variants.filter(variant => variant.isBasicVariant)
    })
    const otherVariants = computed(() => {
      return activeComponent.value.variants.filter(variant => !variant.isBasicVariant)
    })

    const availableVariants = computed(() => {
      const variants: CssVariant[] = [...basicVariants.value]

      basicVariants.value.forEach(basicVariant => {
        otherVariants.value.forEach(otherVariant => {
          variants.push({
            ...otherVariant,
            cssClass: `${basicVariant.cssClass} ${otherVariant.cssClass}`,
            modelValue: {
              ...basicVariant.modelValue,
              ...otherVariant.modelValue
            },
            parent: basicVariant.id
          })
        })
      })

      return variants.reduce((acc, variant) => {
        const parent = variant.parent

        if (parent) {
          if (!acc[parent]) {
            acc[parent]
          }

          acc[parent].push(variant)
        } else {
          acc[variant.id] = []
        }

        return acc
      }, {} as any)
    })

    function formatStyles (styles: Record<string, CssProperty>) {
      if (!styles) {
        return {}
      }

      return Object.keys(styles).reduce((acc, key) => {
        const keyValue: string = '--bs-' + key
        const prop = styles[key]

        acc[keyValue] = styles[key].value

        if (prop.unit && acc[keyValue]) {
          acc[keyValue] += prop.unit
        }

        return acc
      }, {} as Record<any, CssProperty>)
    }

    return {
      availableVariants,
      activeComponent,
      formatStyles
    }
  }
})
</script>

<style scoped lang="scss">
.variant-container {
  display: flex;
  align-items: start;
  gap: 2rem;

  .variant-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .variant-group-title {
      position: sticky;
      top: 0;
      background-color: white;
      padding: 0.5rem 1rem;
      border-radius: var(--bs-border-radius);
      text-align: center;
      z-index: 2;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
  }
}

.variant {
  --chess-size: 20px;
  --chess-color: #efefef;

  position: relative;
  border: 1px solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  padding: 1.5rem 2rem;
  background-color: white;
  background-image: linear-gradient(45deg, var(--chess-color) 25%, transparent 25%),
  linear-gradient(-45deg, var(--chess-color) 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, var(--chess-color) 75%),
  linear-gradient(-45deg, transparent 75%, var(--chess-color) 75%);
  background-size: var(--chess-size) var(--chess-size);
  background-position: 0 0, 0 calc(var(--chess-size) / 2), calc(var(--chess-size) / 2) calc(0px - var(--chess-size) / 2), calc(0px - var(--chess-size) / 2) 0px;

  .variant-title {
    position: absolute;
    top: -10px;
    left: 5px;
    margin-bottom: 0;
  }
}
</style>
