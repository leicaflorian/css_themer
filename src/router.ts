import { createRouter, createWebHistory } from 'vue-router'

import HomeIndex from './views/index.vue'
import ProjectsIndex from './views/projects/Index.vue'
import ProjectsShow from './views/projects/Show.vue'
import ComponentShow from './views/projects/components/Show.vue'

const routes = [
  { path: '/', component: HomeIndex },
  { path: '/projects', component: ProjectsIndex, name: 'projects.index' },
  {
    path: '/projects/:id', component: ProjectsShow, name: 'projects.show',
    children: [
      {
        path: 'component/:cId',
        component: ComponentShow,
        name: 'projects.components.show',
      }
    ]
  }
]

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes
})
