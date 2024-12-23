import type { Plugin } from 'payload/config'

import { defaultPluginOptions, PluginOptionsTypes } from './types'
import deepmerge from './utils/deepmerge'
import Menus from './collections/Menus'

export const menuPlugin =
  (userPluginOptions?: PluginOptionsTypes): Plugin =>
  incomingConfig => {
    const pluginOptions = deepmerge(defaultPluginOptions, userPluginOptions || {})

    let config = { ...incomingConfig }

    // If the plugin is disabled, return the config as is
    if (pluginOptions?.enabled === false) {
      return config
    }

    const linkableCollections = pluginOptions.linkableCollections || []
    const allowInlineDocuments = pluginOptions.allowInlineDocuments || false
    const levels = pluginOptions.levels || 1
    const adminGroup = pluginOptions.adminGroup || undefined
    const allowPreviewImages = pluginOptions.allowPreviewImages || false
    const previewImageMediaCollection = pluginOptions.previewImageMediaCollection || undefined

    config.collections = [
      ...(config.collections || []),
      Menus(
        linkableCollections,
        allowInlineDocuments,
        levels,
        adminGroup,
        allowPreviewImages,
        previewImageMediaCollection,
      ),
    ]

    return config
  }
