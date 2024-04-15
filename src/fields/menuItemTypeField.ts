import { Field } from 'payload/types'
import translations from '../translations/translations'

type MenuItemTypeFieldProps = {
  allowChildElements?: boolean
}

const menuItemTypeField = (props?: MenuItemTypeFieldProps) => {
  const options = [
    {
      label: translations.fields.items.type.options.collection.label,
      value: 'collection',
    },
    {
      label: translations.fields.items.type.options.custom.label,
      value: 'custom',
    },
  ]

  if (props?.allowChildElements) {
    options.push({
      label: translations.fields.items.type.options.children.label,
      value: 'children',
    })
  }

  return {
    type: 'radio',
    name: 'type',
    label: translations.fields.items.type.label,
    defaultValue: 'collection',
    options: options,
    admin: {
      description: translations.fields.items.type.description,
    },
  } as Field
}

export default menuItemTypeField
