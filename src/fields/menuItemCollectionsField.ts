import { Field } from 'payload/types'

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
    name: 'collection',
    label: {
      de: 'Sammlung',
      en: 'Collection',
    },
    relationTo: linkableCollections,
    admin: {
      allowCreate: allowInlineDocuments,
      condition: (_, siblingData) => siblingData.type === 'collection',
      description: {
        de: 'Wählen Sie die Sammlung aus, die mit diesem Menüpunkt verlinkt werden soll.',
        en: 'Select the collection that should be linked with this menu item.',
      },
    },
  } as Field
}

export default menuItemCollectionsField
