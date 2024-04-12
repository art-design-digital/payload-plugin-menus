import { Field } from 'payload/types'

const menuItemNewTabField: Field = {
  type: 'checkbox',
  name: 'newTab',
  label: {
    de: 'In neuem Tab öffnen',
    en: 'Open in new tab',
  },
  admin: {
    position: 'sidebar',
    condition: (_, siblingData) => siblingData.type !== 'children',
    description: {
      de: 'Wählen Sie diese Option, um den Link in einem neuen Tab zu öffnen.',
      en: 'Select this option to open the link in a new tab.',
    },
  },
}

export default menuItemNewTabField
