import { CssProperty } from './CssProperty'

export interface CssVariant {
  id: string,
  name: string,
  // Indicates that the variant is a basic variant that must be used alongside another variant.
  // Eg. .btn = basic, .btn-primary = variant
  isBasicVariant: boolean,
  // Indicates that the variant is a custom variant that can be cancelled.
  isCustomVariant: boolean,
  htmlTag: string,
  cssClass: string,
  cssVars: Record<string, CssProperty>,
  modelValue?: Record<string, any>,
  parent?: string
}
