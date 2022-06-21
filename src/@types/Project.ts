import { CssComponent } from './CssComponent'

export interface Project {
  id: string,
  name: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
  components: CssComponent[],
}
