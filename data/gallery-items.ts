// Define the GalleryItem type
export type GalleryItem = {
    id: string
    type: "image" | "video"
    thumbnail: string
    src: string
    title: string
    description: string
    event: string
    location: string
  }
  
  // Export the gallery items data
  export const galleryItems: GalleryItem[] = [
    {
        id: "rick-astley",
        type: "video",
        thumbnail: "/rick.png",
        src: "/rick.mp4", 
        title: "Never Gonna Give You Up",
        description:
          "Never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you.",
        event: "test",
        location: "somewhere",
      },
      { // make a copy of me
        id: "workshop-2023", // useless
        type: "image", // Define the type of thing you want to show
        thumbnail: "/placeholder.svg?height=400&width=600", // small image to be displayed on the post
        src: "/placeholder.svg?height=800&width=1200", // main thing you want to show
        title: "Workshop Session", // Title to be shown on the psot
        description: "Students learning about web development during our pre-hackathon workshop series.", // Description to be shown on the post
        event: "2023", // Name of event for filtering
        location: "Auckland, New Zealand", // location of event
      },
]

// Helper function to get the most recent items
export const getRecentGalleryItems = (count = 5) => {
  return galleryItems.slice(0, count)
}

// Helper function to get unique events
export const getUniqueEvents = () => {
  return Array.from(new Set(galleryItems.map((item) => item.event))).sort()
}

