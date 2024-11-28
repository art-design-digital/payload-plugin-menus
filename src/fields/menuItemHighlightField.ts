import { Field } from 'payload/types'
import translations from '../translations/translations'

const menuItemHighlightField: Field = {
  type: 'checkbox',
  name: 'highlight',
  label: translations.fields.items.highlightField.label,
  localized: true,
  admin: {
    description: translations.fields.items.highlightField.description,
  },
}

export default menuItemHighlightField
