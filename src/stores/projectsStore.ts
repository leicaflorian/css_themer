import { defineStore } from 'pinia'
import { Project } from '../@types/Project'
import { CssComponent } from '../@types/CssComponent'
import { v4 as uuidv4 } from 'uuid'
import Components from '../composables/components'
import { CssVariant } from '../@types/CssVariant'

export const useProjectsStore = defineStore('projectStore', {
  state: () => {
    return {
      projects: [] as Project[]
    }
  },
  actions: {
    addProject (payload: Project) {
      // payload.id = 'proj_' + uuidv4()
      this.projects.push(payload)
    },
    updateProjects (projectId: any, payload: any) {
      const foundIndex = this.getProject(projectId, true) as number
      
      if (foundIndex < 0) {
        this.projects.push(payload)
      } else {
        this.projects[foundIndex] = payload
      }
    },
    getProject (projectId: string, returnIndex = false): Project | number {
      const foundIndex = this.projects.findIndex(project => project.id === projectId)
      
      if (returnIndex) {
        return foundIndex
      }
      return this.projects[foundIndex]
    },
    getProjectComponent (projectId: string, componentId: string): CssComponent {
      const project = this.getProject(projectId) as Project
      const component = project.components.find(component => component.id === componentId) as CssComponent
      
      return component
    },
    addComponent (projectId: string, component: CssComponent) {
      const project = this.getProject(projectId) as Project
      
      if (!component.implements) {
        return
      }
      
      project.components.push(component)
      
      const componentConfig = Components[component.implements]
      
      componentConfig.variants.forEach(variant => {
        this.addComponentVariant(projectId, component.id, variant)
      })
      
      // component.id = 'comp_' + uuidv4()
      
    },
    addComponentVariant (projectId: string, componentId: string, variant: CssVariant) {
      const project = this.getProject(projectId) as Project
      const component = project.components.find(component => component.id === componentId) as CssComponent
      if (!component) {
        return
      }
      
      component.variants.push(variant)
    }
  }
})
