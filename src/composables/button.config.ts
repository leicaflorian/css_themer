import { CssProperty } from '../@types/CssProperty'
import { CssUnit } from '../@enums/CssUnit'
import { CssCategory } from '../@enums/CssCategory'
import { CssVariant } from '../@types/CssVariant'
import { CssComponent } from '../@types/CssComponent'

const basicVars: Record<string, CssProperty> = {
  'btn-padding-x': { type: 'number', value: '', unit: CssUnit.REM, data: 'units', category: CssCategory.SPACING },
  'btn-padding-y': { type: 'number', value: '', unit: CssUnit.REM, data: 'units', category: CssCategory.SPACING },
  'btn-font-family': { type: 'text', value: '', category: CssCategory.TYPOGRAPHY },
  'btn-font-size': { type: 'number', value: '', unit: CssUnit.REM, data: 'units', category: CssCategory.TYPOGRAPHY },
  'btn-font-weight': {
    type: 'number',
    value: '',
    unit: CssUnit.NULL,
    data: 'fontWeights',
    category: CssCategory.TYPOGRAPHY
  },
  'btn-line-height': {
    type: 'number',
    value: '',
    unit: CssUnit.NULL,
    data: 'units',
    category: CssCategory.TYPOGRAPHY,
    options: { allowEmptyUnit: true }
  },
  'btn-color': { type: 'color', value: '', category: CssCategory.TYPOGRAPHY },
  'btn-bg': { type: 'color', value: '', category: CssCategory.BACKGROUNDS },
  'btn-border-width': { type: 'number', value: '', unit: CssUnit.PX, category: CssCategory.BORDERS },
  'btn-border-color': { type: 'color', value: '', category: CssCategory.BORDERS },
  'btn-border-radius': { type: 'number', value: '', unit: CssUnit.PX, category: CssCategory.BORDERS },
  'btn-box-shadow': { type: 'text', value: '', category: CssCategory.EFFECTS },
  'btn-disabled-opacity': {
    type: 'number',
    value: '',
    options: { min: 0, max: 1, step: .1 },
    category: CssCategory.EFFECTS
  },
  'btn-focus-box-shadow': { type: 'text', value: '', category: CssCategory.EFFECTS }
}

const variantVars: Record<string, CssProperty> = {
  'btn-color': { type: 'color', value: '', category: CssCategory.TYPOGRAPHY },
  'btn-bg': { type: 'color', value: '', category: CssCategory.BACKGROUNDS },
  'btn-border-color': { type: 'color', value: '', category: CssCategory.BORDERS },
  'btn-hover-color': { type: 'color', value: '', category: CssCategory.TYPOGRAPHY },
  'btn-hover-bg': { type: 'color', value: '', category: CssCategory.BACKGROUNDS },
  'btn-hover-border-color:': { type: 'color', value: '', category: CssCategory.BORDERS },
  'btn-focus-shadow-rgb': { type: 'color', value: '', category: CssCategory.EFFECTS },
  'btn-active-color': { type: 'color', value: '', category: CssCategory.TYPOGRAPHY },
  'btn-active-bg': { type: 'color', value: '', category: CssCategory.BACKGROUNDS },
  'btn-active-border-color': { type: 'color', value: '', category: CssCategory.BORDERS },
  'btn-active-shadow': { type: 'color', value: '', category: CssCategory.EFFECTS },
  'btn-disabled-color': { type: 'color', value: '', category: CssCategory.POSITION },
  'btn-disabled-bg': { type: 'color', value: '', category: CssCategory.BACKGROUNDS },
  'btn-disabled-border-color': { type: 'color', value: '', category: CssCategory.BORDERS }
}

export const buttonConfig: CssComponent = {
  id: 'button',
  variants: [
    {
      id: 'basic',
      isBasicVariant: true,
      isCustomVariant: false,
      cssClass: 'btn',
      cssVars: basicVars
    }, {
      id: 'primary',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-primary',
      cssVars: variantVars
    }
  ]
}

export default { basicVars, variantVars }
