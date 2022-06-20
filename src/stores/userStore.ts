import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      components: [] as any[]
    }
  },
  actions: {
    addComponent (payload: any) {
      this.components.push(payload)
    },
    updateComponent (componentId: any, payload: any) {
      const foundIndex = this.components.findIndex(component => component.id === componentId)
      
      if (foundIndex < 0) {
        this.components.push(payload)
      } else {
        this.components[foundIndex] = payload
      }
      
    }
  }
})
