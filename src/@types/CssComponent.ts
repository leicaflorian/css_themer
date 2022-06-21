import { CssVariant } from './CssVariant'
import components from '../composables/components'

export interface CssComponent {
  id: string,
  name: string,
  implements?: keyof (typeof components),
  variants: CssVariant[]
}
