import { CssProperty } from '../@types/CssProperty'
import { CssUnit } from '../@enums/CssUnit'
import { CssCategory } from '../@enums/CssCategory'
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
  'btn-hover-border-color': { type: 'color', value: '', category: CssCategory.BORDERS },
  'btn-focus-shadow-rgb': { type: 'color', value: '', category: CssCategory.EFFECTS },
  'btn-active-color': { type: 'color', value: '', category: CssCategory.TYPOGRAPHY },
  'btn-active-bg': { type: 'color', value: '', category: CssCategory.BACKGROUNDS },
  'btn-active-border-color': { type: 'color', value: '', category: CssCategory.BORDERS },
  'btn-active-shadow': { type: 'color', value: '', category: CssCategory.EFFECTS },
  'btn-disabled-color': { type: 'color', value: '', category: CssCategory.POSITION },
  'btn-disabled-bg': { type: 'color', value: '', category: CssCategory.BACKGROUNDS },
  'btn-disabled-border-color': { type: 'color', value: '', category: CssCategory.BORDERS }
}

export const button: CssComponent = {
  id: 'button',
  name: 'Button',
  variants: [
    {
      id: 'small',
      name: 'Small',
      isBasicVariant: true,
      isCustomVariant: false,
      htmlTag: 'button',
      cssClass: 'btn btn-sm',
      cssVars: basicVars
    }, {
      id: 'basic',
      name: 'Basic',
      isBasicVariant: true,
      isCustomVariant: false,
      htmlTag: 'button',
      cssClass: 'btn',
      cssVars: basicVars
    }, {
      id: 'large',
      name: 'Large',
      isBasicVariant: true,
      isCustomVariant: false,
      htmlTag: 'button',
      cssClass: 'btn btn-lg',
      cssVars: basicVars
    }, {
      id: 'primary',
      name: 'Primary',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-primary',
      cssVars: variantVars
    }, {
      id: 'secondary',
      name: 'Secondary',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-secondary',
      cssVars: variantVars
    }, {
      id: 'success',
      name: 'Success',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-success',
      cssVars: variantVars
    }, {
      id: 'danger',
      name: 'Danger',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-danger',
      cssVars: variantVars
    }, {
      id: 'warning',
      name: 'Warning',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-warning',
      cssVars: variantVars
    }, {
      id: 'info',
      name: 'Info',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-info',
      cssVars: variantVars
    }, {
      id: 'light',
      name: 'Light',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-light',
      cssVars: variantVars
    }, {
      id: 'dark',
      name: 'Dark',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-dark',
      cssVars: variantVars
    }, {
      id: 'link',
      name: 'Link',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-link',
      cssVars: variantVars
    },{
      id: 'pink',
      name: 'Pink',
      htmlTag: 'button',
      isBasicVariant: false,
      isCustomVariant: false,
      cssClass: 'btn-pink',
      cssVars: variantVars,
      modelValue: {
        'btn-color': { type: 'color', value: 'pink', category: CssCategory.TYPOGRAPHY },
        
      }
    }
  ]
}


// TODO:: Create a function that can load default styles for a component from bootstrap css
