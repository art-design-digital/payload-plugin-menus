import { Field } from 'payload/types'
import MenuItemRowLabel from '../components/MenuItemRowLabel'
import menuItemLabelField from '../fields/menuItemLabelField'
import menuItemTypeField from '../fields/menuItemTypeField'
import menuItemCollectionsField from '../fields/menuItemCollectionsField'
import menuItemCustomURLField from '../fields/menuItemCustomURLField'
import menuItemAnchorField from '../fields/menuItemAnchorField'
import menuItemNewTabField from '../fields/menuItemNewTabField'
import menuItemPreviewImageField from '../fields/menuItemPreviewImageField'
import menuItemDistanceField from '../fields/menuItemDistanceField'

const createMenuLevels = (
  levels: number,
  linkableCollections: string[],
  allowInlineDocuments: boolean,
  currentLevel = 1,
  allowPreviewImages?: boolean,
  previewImageMediaCollection?: string | undefined,
): Field[] => {
  if (currentLevel >= levels) return []

  return [
    {
      type: 'array',
      name: levels > 0 ? `level${currentLevel}` : 'items',
      labels: {
        singular: {
          de: levels > 0 ? 'Kindelement' : 'Menüpunkt',
          en: levels > 0 ? 'Child Item' : 'Menu Item',
        },
        plural: {
          de: levels > 0 ? 'Kindelemente' : 'Menüpunkte',
          en: levels > 0 ? 'Child Items' : 'Menu Items',
        },
      },
      label: {
        de: levels > 0 ? 'Kindelemente' : 'Menüpunkte',
        en: levels > 0 ? 'Child Items' : 'Menu Items',
      },
      admin: {
        components: {
          RowLabel: MenuItemRowLabel,
        },
        condition: (_, siblingData) => siblingData.type === 'children',
      },
      fields: [
        menuItemDistanceField,
        menuItemLabelField,
        menuItemTypeField({ allowChildElements: currentLevel < levels - 1 }),
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
          currentLevel + 1,
          allowPreviewImages,
          previewImageMediaCollection,
        ), // Rekursiver Aufruf
      ],
    },
  ]
}

export default createMenuLevels
