import type { IconType } from 'react-icons'

// Type for icon packs
export interface IconPack {
  [key: string]: IconType
}

export interface IconPickerProps {
  field: {
    label: string | { de: string; en: string }
    required?: boolean
    admin?: {
      iconPack?: IconPackType
      description?: string | { de: string; en: string }
      [key: string]: unknown
    }
    [key: string]: unknown // Allow any additional properties
  }
  path: string
  [key: string]: unknown // Allow any additional properties at top level
}

// Available icon pack types
export type IconPackType =
  | 'Bootstrap Icons'
  | 'Feather'
  | 'Font Awesome 5'
  | 'Font Awesome 6'
  | 'Ionicons 4'
  | 'Ionicons 5'
  | 'Lucide'
  | 'Material Design icons'
  | 'Icons8 Line Awesome'
  | 'Phosphor Icons'

// Get icon pack by type (async for dynamic loading)
export const getIconPack = async (packType: IconPackType): Promise<IconPack> => {
  let iconModule: { default?: unknown; [key: string]: unknown }

  switch (packType) {
    case 'Bootstrap Icons':
      iconModule = await import('react-icons/bs')
      break
    case 'Feather':
      iconModule = await import('react-icons/fi')
      break
    case 'Font Awesome 5':
      iconModule = await import('react-icons/fa')
      break
    case 'Font Awesome 6':
      iconModule = await import('react-icons/fa6')
      break
    case 'Ionicons 4':
      iconModule = await import('react-icons/io')
      break
    case 'Ionicons 5':
      iconModule = await import('react-icons/io5')
      break
    case 'Lucide':
      iconModule = await import('react-icons/lu')
      break
    case 'Material Design icons':
      iconModule = await import('react-icons/md')
      break
    case 'Icons8 Line Awesome':
      iconModule = await import('react-icons/lia')
      break
    case 'Phosphor Icons':
    default:
      iconModule = await import('react-icons/pi')
      break
  }

  // Remove default export and return only the icon components
  const { default: _, ...iconPack } = iconModule
  return iconPack as IconPack
}

// Create icon map from any react-icons package - include all valid icon components
export const createIconMap = (iconPack: IconPack): Record<string, IconType> => {
  return Object.entries(iconPack).reduce((acc, [key, icon]) => {
    // Include all valid icon components (functions)
    if (typeof icon === 'function' && key !== 'IconContext') {
      acc[key] = icon
    }
    return acc
  }, {} as Record<string, IconType>)
}

// Helper function to get icon by name from any icon map
export const getIconFromMap = (
  iconMap: Record<string, IconType>,
  iconName: string,
  fallbackIcon?: IconType,
): IconType => {
  return iconMap[iconName] || fallbackIcon || (() => null)
}
