import { Field } from 'payload/types'
import { iconPickerField, IconPackType } from './iconPickerField'
import translations from '../translations/translations'

type MenuItemIconFieldProps = {
  allowIcons?: boolean
  iconPack?: IconPackType
}

const menuItemIconField = (props?: MenuItemIconFieldProps) => {
  return props?.allowIcons
    ? iconPickerField({
        name: 'icon',
        label: translations.fields.items.iconField.label,
        admin: {
          description: translations.fields.items.iconField.description,
        },
        iconPack: props?.iconPack || 'Phosphor Icons',
        localized: true,
      })
    : ({
        type: 'text',
        name: 'hidden_icon',
        admin: {
          disabled: true,
          hidden: true,
        },
      } as Field)
}

export default menuItemIconField