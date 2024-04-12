import { formatSlug } from '../utils/slug'
import MenuItemRowLabel from '../components/MenuItemRowLabel'
import { CollectionConfig } from 'payload/types'
import translations from '../translations/translations'
import menuItemLabelField from '../fields/menuItemLabelField'
import menuItemTypeField from '../fields/menuItemTypeField'
import menuItemCustomURLField from '../fields/menuItemCustomURLField'
import menuItemAnchorField from '../fields/menuItemAnchorField'
import menuItemCollectionsField from '../fields/menuItemCollectionsField'
import menuItemNewTabField from '../fields/menuItemNewTabField'

const Menus = (linkableCollections: string[], allowInlineDocuments: boolean, levels: number) => {
  //

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
      singular: translations.menuSingular,
      plural: translations.menuPlural,
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
          menuItemLabelField,
          menuItemTypeField({ allowChildElements: true }),
          menuItemCollectionsField({
            linkableCollections,
            allowInlineDocuments,
          }),
          menuItemCustomURLField,
          menuItemAnchorField,
          menuItemNewTabField,
          {
            type: 'array',
            name: 'items',
            label: {
              de: 'Kindelemente',
              en: 'Child Items',
            },
            admin: {
              components: {
                RowLabel: MenuItemRowLabel,
              },
              condition: (_, siblingData) => siblingData.type === 'children',
              description: {
                de: 'Fügen Sie Untermenüpunkte zu diesem Menüpunkt hinzu.',
                en: 'Add submenu items to this menu item.',
              },
            },
            fields: [
              menuItemLabelField,
              menuItemTypeField({
                allowChildElements: true,
              }),
              menuItemCollectionsField({
                linkableCollections,
                allowInlineDocuments,
              }),

              menuItemCustomURLField,
              menuItemAnchorField,
              menuItemNewTabField,
              {
                type: 'array',
                name: 'items',
                label: {
                  de: 'Kindelemente',
                  en: 'Child Items',
                },
                admin: {
                  components: {
                    RowLabel: MenuItemRowLabel,
                  },
                  condition: (_, siblingData) => siblingData.type === 'children',
                  description: {
                    de: 'Fügen Sie Untermenüpunkte zu diesem Menüpunkt hinzu.',
                    en: 'Add submenu items to this menu item.',
                  },
                },
                fields: [
                  menuItemLabelField,
                  menuItemTypeField(),
                  menuItemCollectionsField({
                    linkableCollections,
                    allowInlineDocuments,
                  }),

                  menuItemCustomURLField,
                  menuItemAnchorField,
                  menuItemNewTabField,
                ],
              },
            ],
          },
        ],
      },
    ],
  } as CollectionConfig
}

export default Menus
