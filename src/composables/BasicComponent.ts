import { CssComponent } from '../@types/CssComponent'
import { CssVariant } from '../@types/CssVariant'

export class BasicComponent {
  private component: CssComponent
  
  constructor (_component: CssComponent) {
    this.component = _component
  }
  
  get variants () {
    return this.component.variants
  }
  
  get propsGroups () {
    return
  }
  
  /**
   * Add a variant to the current component.
   * Before adding, check if the same variant, by id, already exists.
   * @param variant
   */
  addVariant (variant: CssVariant) {
  
  }
  
  removeVariant (variant: CssVariant) {
  
  }
  
}
