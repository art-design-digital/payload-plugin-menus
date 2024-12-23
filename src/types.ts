/**
 * Default options for the plugin
 *
 * @type {PluginOptionsTypes}
 * @property {boolean} enabled - Enable or disable plugin
 * @property {array} linkableCollections - Define which collections are usable in the menu
 */
export const defaultPluginOptions: PluginOptionsTypes = {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled: false,

  /**
   * Admin group name
   * @default ''
   */
  adminGroup: undefined,

  /**
   * Defines which collections are usable in the menu
   * @default []
   */
  linkableCollections: [],

  /**
   * Allow inline documents
   * @default false
   */
  allowInlineDocuments: false,

  /**
   * Levels of the menu
   * @default 1
   */
  levels: 1,

  /**
   * Allow preview images
   * @default false
   */
  allowPreviewImages: false,

  /**
   * Preview image media collection
   * @default undefined
   */
  previewImageMediaCollection: undefined,
}

export interface PluginOptionsTypes {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled?: boolean

  /**
   * Admin group name
   * @default ''
   */
  adminGroup?: string | { [key: string]: string }

  /**
   * Defines which collections are usable in the menu
   * @default []
   */
  linkableCollections: Array<string>

  /**
   * Allow inline documents
   * @default false
   */
  allowInlineDocuments?: boolean

  /**
   * Levels of the menu
   * @default 1
   */
  levels?: number

  /**
   * Allow preview images
   * @default false
   */
  allowPreviewImages?: boolean

  /**
   * Preview image media collection
   * @default undefined
   */
  previewImageMediaCollection?: string | undefined
}
