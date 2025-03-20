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
        id: "scrapyard-2025",
        type: "video",
        thumbnail: "/rick.png",
        src: "/rick.mp4", // Replace with your actual video
        title: "ScrapYard 2025",
        description:
          "Our inaugural hackathon brought together 18+ young innovators for 12 hours of coding, creativity, and collaboration.",
        event: "Scrapyard",
        location: "Auckland, New Zealand",
      },
      {
        id: "workshop-2023",
        type: "image",
        thumbnail: "/placeholder.svg?height=400&width=600",
        src: "/placeholder.svg?height=800&width=1200",
        title: "Workshop Session",
        description: "Students learning about web development during our pre-hackathon workshop series.",
        event: "2023",
        location: "Auckland, New Zealand",
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

