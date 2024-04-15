import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types'
import { RowLabel } from 'payload/types'

const MenuItemRowLabel: RowLabel = ({ data, index }: RowLabelArgs) => {
  const type = data?.type || ''

  if (!data.label) return `Menüpunkt ${index}`
  return `${data?.label} (${type})`
}

export default MenuItemRowLabel
