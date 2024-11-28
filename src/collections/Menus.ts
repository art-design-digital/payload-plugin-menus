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
import createMenuLevels from '../utils/menu'
import menuItemPreviewImageField from '../fields/menuItemPreviewImageField'
import menuItemHighlightField from '../fields/menuItemHighlightField'

const Menus = (
  linkableCollections: string[],
  allowInlineDocuments: boolean,
  levels: number,
  adminGroup?: string | { [key: string]: string },
  allowPreviewImages?: boolean,
  previewImageMediaCollection?: string | undefined,
) => {
  return {
    slug: 'menus',
    defaultSort: 'name',
    access: {
      create: ({ req }) => req.user,
      read: ({ req }) => req.user,
      update: ({ req }) => req.user,
      delete: ({ req }) => req.user,
    },
    admin: {
      group: adminGroup,
      description: translations.collection.description,
      useAsTitle: 'name',
      defaultColumns: ['name', 'slug'],
    },
    labels: translations.collection.labels,
    fields: [
      {
        type: 'text',
        name: 'name',
        label: translations.fields.name.label,
        required: true,
        admin: {
          description: translations.fields.name.description,
        },
        localized: true,
      },
      {
        type: 'text',
        name: 'slug',
        label: translations.fields.slug.label,
        hooks: {
          beforeValidate: [formatSlug],
        },
        admin: {
          readOnly: true,
          description: translations.fields.slug.description,
        },
      },
      {
        type: 'array',
        name: 'items',
        label: translations.fields.items.label,
        labels: translations.fields.items.labels,
        minRows: 1,
        admin: {
          components: {
            RowLabel: MenuItemRowLabel,
          },
          description: translations.fields.items.description,
        },
        fields: [
          menuItemHighlightField,
          menuItemLabelField,
          menuItemTypeField({ allowChildElements: levels > 1 }),
          menuItemCollectionsField({
            linkableCollections,
            allowInlineDocuments,
          }),
          menuItemCustomURLField,
          menuItemAnchorField,
          menuItemNewTabField,
          menuItemPreviewImageField({
            allowPreviewImages,
            previewImageMediaCollection,
          }),
          ...createMenuLevels(
            levels,
            linkableCollections,
            allowInlineDocuments,
            1,
            allowPreviewImages,
            previewImageMediaCollection,
          ),
        ],
      },
    ],
  } as CollectionConfig
}

export default Menus
