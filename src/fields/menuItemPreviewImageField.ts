import { Field } from 'payload/types'
import translations from '../translations/translations'

type MenuItemPreviewImageFieldProps = {
  allowPreviewImages?: boolean
  previewImageMediaCollection?: string | undefined
}

const menuItemPreviewImageField = (props?: MenuItemPreviewImageFieldProps) => {
  return props?.allowPreviewImages && props?.previewImageMediaCollection
    ? ({
        type: 'upload',
        name: 'previewImage',
        relationTo: props?.previewImageMediaCollection,
        label: translations.fields.items.previewImageField.label,
        localized: true,
        admin: {
          description: translations.fields.items.previewImageField.description,
        },
      } as Field)
    : ({} as Field)
}

export default menuItemPreviewImageField
