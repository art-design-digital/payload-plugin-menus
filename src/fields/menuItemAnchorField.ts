import { Field } from 'payload/types'
import translations from '../translations/translations'

const menuItemAnchorField: Field = {
  type: 'text',
  name: 'anchor',
  label: translations.fields.items.anchor.label,
  localized: true,
  admin: {
    condition: (_, siblingData) =>
      siblingData.type === 'custom' || siblingData.type === 'collection',
    description: translations.fields.items.anchor.description,
  },
}

export default menuItemAnchorField
