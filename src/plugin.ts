import type { Config, Plugin } from 'payload/config'

import { defaultPluginOptions, PluginOptionsTypes } from './types'
import { CollapsibleField } from 'payload/dist/exports/types'
import deepmerge from './utils/deepmerge'

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

    // If the plugin is enabled, add the SEO fields to the collections
    const menuFields: CollapsibleField[] = []

    return {
      ...config,
      // collections:
      //   config.collections?.map(collection => {
      //     // If the collection is the media collection, add the SEO image size to the collection
      //     if (collection.slug === pluginOptions.mediaCollection) {
      //       const updatedImageSizes: ImageSize[] = [
      //         ...((collection?.upload as IncomingUploadType)?.imageSizes || []),
      //         ...[seoImageSize],
      //       ]

      //       // Return the collection with the updated image sizes
      //       return {
      //         ...collection,
      //         upload:
      //           {
      //             ...((collection?.upload || {}) as object),
      //             imageSizes: updatedImageSizes,
      //           } || false,
      //       }
      //     }

      //     // If the collection is not included in the plugin options, return the collection as is
      //     const collectionIsIncluded = pluginOptions.collections?.includes(collection.slug)
      //     if (!collectionIsIncluded) return collection

      //     // If the collection is included in the plugin options, add the SEO fields to the collection
      //     return {
      //       ...collection,
      //       fields: [...(collection?.fields || []), ...seoFields],
      //     }
      //   }) || [],
    }
  }
