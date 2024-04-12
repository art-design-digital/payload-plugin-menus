import { Field } from 'payload/types'

const menuItemLabelField: Field = {
  type: 'text',
  name: 'label',
  label: {
    de: 'Beschriftung',
    en: 'Label',
  },
  localized: true,
  admin: {
    description: {
      de: 'Geben Sie die Beschriftung für diesen Menüpunkt ein.',
      en: 'Enter the label for this menu item.',
    },
  },
}

export default menuItemLabelField
