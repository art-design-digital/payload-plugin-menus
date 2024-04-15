import { Field } from 'payload/types'
import translations from '../translations/translations'

const menuItemLabelField: Field = {
  type: 'text',
  name: 'label',
  label: translations.fields.items.labelField.label,
  localized: true,
  admin: {
    description: translations.fields.items.labelField.description,
  },
}

export default menuItemLabelField
