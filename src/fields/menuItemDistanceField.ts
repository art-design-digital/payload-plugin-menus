import { Field } from 'payload/types'
import translations from '../translations/translations'

const menuItemDistanceField: Field = {
  type: 'checkbox',
  name: 'distance',
  label: translations.fields.items.distanceField.label,
  localized: true,
  admin: {
    description: translations.fields.items.distanceField.description,
  },
}

export default menuItemDistanceField
