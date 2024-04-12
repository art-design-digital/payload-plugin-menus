import { formatSlug } from '../utils/slug'
import MenuItemRowLabel from '../components/MenuItemRowLabel'
import { CollectionConfig } from 'payload/types'

const Menus = (linkableCollections: string[], allowInlineDocuments: boolean) => {
  return {
    slug: 'menus',
    defaultSort: 'name',
    access: {
      create: () => true,
      read: () => true,
      update: () => true,
      delete: () => true,
    },
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'slug'],
    },
    labels: {
      singular: {
        de: 'Menü',
        en: 'Menu',
      },
      plural: {
        de: 'Menüs',
        en: 'Menus',
      },
    },
    fields: [
      {
        type: 'text',
        name: 'name',
        label: {
          de: 'Name',
          en: 'Name',
        },
        required: true,
        admin: {
          description: {
            de: 'Geben Sie einen Namen für das Menü ein.',
            en: 'Enter a name for the menu.',
          },
        },
        localized: true,
      },
      {
        type: 'text',
        name: 'slug',
        label: {
          de: 'Slug',
          en: 'Slug',
        },
        hooks: {
          beforeValidate: [formatSlug],
        },
        admin: {
          readOnly: true,
          description: {
            de: 'Der Slug wird automatisch generiert, wenn Sie den Namen eingeben und speichern. Er dient als eindeutiger Bezeichner für das Menü.',
            en: 'The slug is generated automatically when you enter and save the name. It serves as a unique identifier for the menu.',
          },
        },
      },
      {
        type: 'array',
        name: 'items',
        label: {
          de: 'Menüpunkte',
          en: 'Menu Items',
        },
        minRows: 1,
        admin: {
          components: {
            RowLabel: MenuItemRowLabel,
          },
          description: {
            de: 'Fügen Sie Menüpunkte zu diesem Menü hinzu.',
            en: 'Add menu items to this menu.',
          },
        },
        fields: [
          {
            type: 'text',
            name: 'label',
            label: {
              de: 'Beschriftung',
              en: 'Label',
            },
            localized: true,
            admin: {
              description: {
                de: 'Geben Sie die Beschriftung für diesen Menüpunkt ein.',
                en: 'Enter the label for this menu item.',
              },
            },
          },
          {
            type: 'radio',
            name: 'type',
            label: {
              de: 'Typ des Menüpunktes',
              en: 'Type of Menu Item',
            },
            defaultValue: 'document',
            options: [
              {
                label: {
                  de: 'Dokument',
                  en: 'Document',
                },
                value: 'document',
              },
              {
                label: {
                  de: 'Eigener Link',
                  en: 'Custom link',
                },
                value: 'custom',
              },
            ],
            admin: {
              description: {
                de: 'Wählen Sie den Typen aus den dieser Menüpunkt haben soll.',
                en: 'Select the type this menu item should have.',
              },
            },
          },
          {
            type: 'relationship',
            name: 'document',
            label: {
              de: 'Dokument',
              en: 'Document',
            },
            relationTo: linkableCollections,
            admin: {
              allowCreate: allowInlineDocuments,
              condition: (_, siblingData) => siblingData.type === 'document',
              description: {
                de: 'Wählen Sie das Dokument aus, das mit diesem Menüpunkt verlinkt werden soll.',
                en: 'Select the document that should be linked with this menu item.',
              },
            },
          },
          {
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
          },

          {
            type: 'text',
            name: 'anchor',
            label: {
              de: 'Anker',
              en: 'Anchor',
            },
            admin: {
              description: {
                de: 'Geben Sie den Anker (ohne #) für diesen Menüpunkt ein. Dieser wird verwendet, um auf eine bestimmte Stelle auf der Seite zu verlinken.',
                en: 'Enter the anchor (without #) for this menu item. This is used to link to a specific location on the page.',
              },
            },
          },
        ],
      },
    ],
  } as CollectionConfig
}

export default Menus
