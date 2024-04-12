import { Field } from 'payload/types'

const menuItemAnchorField: Field = {
  type: 'text',
  name: 'anchor',
  label: {
    de: 'Anker',
    en: 'Anchor',
  },
  localized: true,
  admin: {
    condition: (_, siblingData) =>
      siblingData.type === 'custom' || siblingData.type === 'collection',
    description: {
      de: 'Geben Sie den Anker (ohne #) für diesen Menüpunkt ein. Dieser wird verwendet, um auf eine bestimmte Stelle auf der Seite zu verlinken.',
      en: 'Enter the anchor (without #) for this menu item. This is used to link to a specific location on the page.',
    },
  },
}

export default menuItemAnchorField
