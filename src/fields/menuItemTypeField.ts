import { Field } from 'payload/types'

type MenuItemTypeFieldProps = {
  allowChildElements?: boolean
}

const menuItemTypeField = (props?: MenuItemTypeFieldProps) => {
  const options = [
    {
      label: {
        de: 'Sammlung',
        en: 'Collection',
      },
      value: 'collection',
    },
    {
      label: {
        de: 'Eigener Link',
        en: 'Custom link',
      },
      value: 'custom',
    },
  ]

  if (props?.allowChildElements) {
    options.push({
      label: {
        de: 'Mit Kindelementen',
        en: 'With child elements',
      },
      value: 'children',
    })
  }

  return {
    type: 'radio',
    name: 'type',
    label: {
      de: 'Typ des Menüpunktes',
      en: 'Type of Menu Item',
    },
    defaultValue: 'collection',
    options: options,
    admin: {
      description: {
        de: 'Wählen Sie den Typen aus den dieser Menüpunkt haben soll.',
        en: 'Select the type this menu item should have.',
      },
    },
  } as Field
}

export default menuItemTypeField
