import { FieldHook } from 'payload/types'
import slugify from 'slugify'

export const formatSlug: FieldHook = async ({ value, data }) => {
  const options = {
    lower: true,
    locale: 'de',
  }

  // if data.slug is already set, don't change it, if slug is empty use data.title to generate a slug from it
  if (data?.slug) {
    return data.slug
  }

  return slugify(data?.name, options)
}

export default formatSlug
