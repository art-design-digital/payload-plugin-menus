import { Field } from 'payload/types'

const menuItemCustomURLField: Field = {
  type: 'text',
  name: 'customURL',
  label: {
    de: 'Link-URL',
    en: 'Link-URL',
  },
  localized: true,
  admin: {
    condition: (_, siblingData) => siblingData.type === 'custom',
    description: {
      de: 'Geben Sie die URL ein, die mit diesem Menüpunkt verlinkt werden soll.',
      en: 'Enter the URL that should be linked with this menu item.',
    },
  },
}

export default menuItemCustomURLField
