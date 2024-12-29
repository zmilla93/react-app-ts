// This file handles loading images using dynamic strings.

// Import all images in the assets folder
const images = require.context('./assets/', true, /\.(png|jpe?g|gif|svg|webp)$/);

// Create a map of available images
const imageMap: Record<string, string> = images.keys().reduce((map, key) => {
    const imageName = key.replace('./', '');
    map[imageName] = images(key);
    return map;
}, {} as Record<string, string>);

// Return a requested image, or null if no image was not found
export function getImage(name: string): string | null {
    const img = imageMap[name];
    if (img == null) console.error("Image not found: " + name);
    return imageMap[name] || null;
}
