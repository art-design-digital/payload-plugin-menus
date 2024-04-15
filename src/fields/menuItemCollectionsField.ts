import { Field } from 'payload/types'
import translations from '../translations/translations'

type MenuItemCollectionsFieldProps = {
  linkableCollections: string[]
  allowInlineDocuments: boolean
}

const menuItemCollectionsField = ({
  linkableCollections,
  allowInlineDocuments,
}: MenuItemCollectionsFieldProps) => {
  return {
    type: 'relationship',
    name: 'linkedCollection',
    label: translations.fields.items.collections.label,
    relationTo: linkableCollections,
    admin: {
      allowCreate: allowInlineDocuments,
      condition: (_, siblingData) => siblingData.type === 'collection',
      description: translations.fields.items.collections.description,
    },
  } as Field
}

export default menuItemCollectionsField
