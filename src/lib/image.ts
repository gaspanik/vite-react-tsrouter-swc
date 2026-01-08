// Eagerly load all images from /src/assets/images/
const imageModules = import.meta.glob<{ default: string }>(
  '/src/assets/images/*.{jpg,jpeg,png,webp,svg}',
  { eager: true }
)

// Lazy load images (for large images or deferred loading)
const imageModulesAsync = import.meta.glob<{ default: string }>(
  '/src/assets/images/*.{jpg,jpeg,png,webp,svg}',
  { eager: false }
)

/**
 * Get image by name (with or without file extension)
 * @param name - Image name (e.g., 'portrait.jpg' or 'portrait')
 * @returns Image URL or empty string if not found
 */
export function getImage(name: string): string {
  // Try with full filename (including extension)
  const withExt = Object.keys(imageModules).find(
    (path) => path.endsWith(`/${name}`)
  )
  if (withExt) return imageModules[withExt].default

  // Try without extension (auto-detect: portrait → portrait.jpg)
  const match = Object.keys(imageModules).find((path) =>
    path.match(new RegExp(`/${name}\\.(jpg|jpeg|png|webp|svg)$`))
  )
  if (!match && import.meta.env.DEV) {
    console.warn(`[getImage] Image not found: ${name}`)
  }
  return match ? imageModules[match].default : ''
}

// Example usage in a React component
// import { getImage } from '@/lib/image'
// function Index() {
//   return (
//     <main>
//       {/* ...existing code... */}
// 
//       {/* Portrait aside */}
//       <aside>
//         <img
//           src={getImage('portrait.jpg')}
//           alt="Portrait"
//         />
//       </aside>
//     </main>
//   )
// }

/**
 * Asynchronously load an image (useful for large images or deferred loading)
 * @param name - Image filename (e.g., 'large-photo.jpg')
 * @returns Promise resolving to image URL or empty string
 */
export async function getImageAsync(name: string): Promise<string> {
  const key = Object.keys(imageModulesAsync).find((path) => path.endsWith(`/${name}`))
  if (!key) {
    if (import.meta.env.DEV) {
      console.warn(`[getImageAsync] Image not found: ${name}`)
    }
    return ''
  }

  const module = await imageModulesAsync[key]()
  return module.default
}

/**
 * Get all images as a key-value map (useful for galleries)
 * @returns Record of filename (without extension) to image URL
 */
export function getAllImages(): Record<string, string> {
  return Object.fromEntries(
    Object.entries(imageModules).map(([path, module]) => {
      const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') || ''
      return [fileName, module.default]
    })
  )
}

