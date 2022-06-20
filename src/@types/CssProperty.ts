import { CssUnit } from '../@enums/CssUnit'
import { CssCategory } from '../@enums/CssCategory'

export interface CssProperty {
  type: 'number' | 'text' | 'color',
  value?: string | number,
  unit?: CssUnit,
  data?: string,
  category: CssCategory,
  options?: any
}
