import { Field } from 'payload/types'
import translations from '../translations/translations'

const menuItemCustomURLField: Field = {
  type: 'text',
  name: 'customURL',
  label: translations.fields.items.customURL.label,
  localized: true,
  admin: {
    condition: (_, siblingData) => siblingData.type === 'custom',
    description: translations.fields.items.customURL.description,
  },
}

export default menuItemCustomURLField
