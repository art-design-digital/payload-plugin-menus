import type { Config, Plugin } from 'payload/config'

import { defaultPluginOptions, PluginOptionsTypes } from './types'
import { CollectionConfig, Field } from 'payload/dist/exports/types'
import deepmerge from './utils/deepmerge'
import Menus from './collections/Menus'

type PluginType = (userPluginOptions: PluginOptionsTypes) => Plugin

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

    config.collections = [
      ...(config.collections || []),
      Menus(linkableCollections, allowInlineDocuments),
    ]

    return config
  }
