import { CollectionConfig } from 'payload/types'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'someField',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
      localized: true,
    },
  ],
}

export default Examples
