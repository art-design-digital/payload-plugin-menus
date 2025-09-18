import type { Field } from 'payload/types'
import type { IconPackType } from '../utils/iconPackUtils'
import IconPicker from '../components/IconPicker'

export type { IconPackType }

type IconPickerFieldOptions = {
  name?: string
  label?: string | Record<string, string>
  required?: boolean
  admin?: any
  iconPack?: IconPackType
  [key: string]: any
}

export const iconPickerField = (overrides: IconPickerFieldOptions = {}): Field => {
  const {
    name = 'icon',
    label = 'Icon',
    admin = {},
    iconPack = 'Phosphor Icons',
    ...rest
  } = overrides

  // Create a custom component wrapper that has access to iconPack
  const IconPickerWithProps = (props: any) => {
    return IconPicker({
      ...props,
      admin: {
        ...props.admin,
        custom: {
          ...props.admin?.custom,
          iconPack,
        },
      },
    })
  }

  return {
    type: 'text',
    name,
    label,
    admin: {
      ...admin,
      components: {
        Field: IconPickerWithProps,
      },
    },
    ...rest,
  }
}
