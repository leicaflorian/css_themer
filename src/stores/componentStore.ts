import { defineStore } from 'pinia'
import { CssProperty } from '../@types/CssProperty'

export type ComponentConfigVars = 'basicVars' | 'variantVars'
export type ComponentConfig = Record<ComponentConfigVars, Record<string, CssProperty>>

export const useComponentStore = defineStore('componentStore', {
  state: () => {
    return {
      activeComponent: null
    }
  },
  actions: {
    setActiveComponent (payload: any) {
      this.activeComponent = payload
    }
  }
})
