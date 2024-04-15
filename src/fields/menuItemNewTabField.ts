import { Field } from 'payload/types'
import translations from '../translations/translations'

const menuItemNewTabField: Field = {
  type: 'checkbox',
  name: 'newTab',
  label: translations.fields.items.newTab.label,
  admin: {
    position: 'sidebar',
    condition: (_, siblingData) => siblingData.type !== 'children',
    description: translations.fields.items.newTab.description,
  },
}

export default menuItemNewTabField
