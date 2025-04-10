// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, X } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const images = [
//   {
//     src: "/images/living-room.png",
//     alt: "Modern living room with blue sofas and LED lighting",
//     title: "Stylish Living Room",
//   },
//   {
//     src: "/images/living-room.jpeg",
//     alt: "Modern living room with blue sofas and LED lighting",
//     title: "Stylish Living Room",
//   },
//   {
//     src: "/images/bedroom1.png",
//     alt: "Comfortable bedroom with white bedding and brown curtains",
//     title: "Cozy Bedroom",
//   },
//   {
//     src: "/images/bedroom2.png",
//     alt: "Another view of the bedroom with white linens",
//     title: "Spacious Bedroom",
//   },
//   {
//     src: "/images/kitchen.png",
//     alt: "Modern kitchen with wooden cabinets and appliances",
//     title: "Fully Equipped Kitchen",
//   },
//   {
//     src: "/images/dining.png",
//     alt: "Dining area with table and chairs under blue LED lighting",
//     title: "Elegant Dining Area",
//   },
//   {
//     src: "/images/dining(2).jpg",
//     alt: "Dining area with table and chairs under blue LED lighting",
//     title: "Elegant Dining Area",
//   },
//   {
//     src: "/images/bathroom1.png",
//     alt: "Bathroom with toilet and sink",
//     title: "Clean Toilet",
//   },
//   {
//     src: "/images/bathroom2.png",
//     alt: "Bathroom with toilet and shower area",
//     title: "Modern Toilet",
//   },
//   {
//     src: "/images/bathroom1.jpeg",
//     alt: "Bathroom with toilet and shower area",
//     title: "Modern Toilet",
//   },
//   {
//     src: "/images/bathroom.jpg",
//     alt: "Bathroom with toilet and shower area",
//     title: "Modern Toilet",
//   },  
//   {
//     src: "/images/bathroom (3).jpg",
//     alt: "Bathroom with toilet and shower area",
//     title: "Modern Bathroom",
//   },
//   {
//     src: "/images/toilet-vid.mp4",
//     alt: "Modern bathroom and clean toilets",
//     title: "Modern Toilet",
//   },
//   {
//     src: "/images/bathroom-vid.mp4",
//     alt: "Modern bathroom and clean toilets",
//     title: "Modern Bathroom",
//   },

// ]

// export function Gallery() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const openModal = (index: number) => {
//     setCurrentImageIndex(index)
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//   }

//   const goToPrevious = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
//   }

//   const goToNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
//   }

//   return (
//     <section id="gallery" className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-6xl text-black font-bold">Our Gallery</h2>
//           <p className="text-gray-600 mt-3">Explore our beautiful apartment spaces</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
//               onClick={() => openModal(index)}
//             >
//               <div className="aspect-w-16 aspect-h-12 relative h-64">
//                 <Image
//                   src={image.src || "/placeholder.svg"}
//                   alt={image.alt}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <p className="text-white text-lg font-medium">{image.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
//           <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white" onClick={closeModal}>
//             <X className="h-8 w-8" />
//           </Button>

//           <Button variant="ghost" size="icon" className="absolute left-4 text-white" onClick={goToPrevious}>
//             <ChevronLeft className="h-8 w-8" />
//           </Button>

//           <div className="relative w-full max-w-4xl h-[80vh]">
//             <Image
//               src={images[currentImageIndex].src || "/placeholder.svg"}
//               alt={images[currentImageIndex].alt}
//               fill
//               className="object-contain"
//             />
//           </div>

//           <Button variant="ghost" size="icon" className="absolute right-4 text-white" onClick={goToNext}>
//             <ChevronRight className="h-8 w-8" />
//           </Button>
//         </div>
//       )}
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/images/living-room.png",
    alt: "Modern living room with blue sofas and LED lighting",
    title: "Stylish Living Room",
  },
  {
    src: "/images/living-room.jpeg",
    alt: "Modern living room with blue sofas and LED lighting",
    title: "Stylish Living Room",
  },
  {
    src: "/images/bedroom1.png",
    alt: "Comfortable bedroom with white bedding and brown curtains",
    title: "Cozy Bedroom",
  },
  {
    src: "/images/bedroom2.png",
    alt: "Another view of the bedroom with white linens",
    title: "Spacious Bedroom",
  },
  {
    src: "/images/kitchen.png",
    alt: "Modern kitchen with wooden cabinets and appliances",
    title: "Fully Equipped Kitchen",
  },
  {
    src: "/images/dining.png",
    alt: "Dining area with table and chairs under blue LED lighting",
    title: "Elegant Dining Area",
  },
  {
    src: "/images/dining(2).jpg",
    alt: "Dining area with table and chairs under blue LED lighting",
    title: "Elegant Dining Area",
  },
  {
    src: "/images/bathroom1.png",
    alt: "Bathroom with toilet and sink",
    title: "Clean Toilet",
  },
  {
    src: "/images/bathroom2.png",
    alt: "Bathroom with toilet and shower area",
    title: "Modern Toilet",
  },
  {
    src: "/images/bathroom1.jpeg",
    alt: "Bathroom with toilet and shower area",
    title: "Modern Toilet",
  },
  {
    src: "/images/toilet-vid.mp4",
    alt: "Modern bathroom and clean toilets",
    title: "Modern Toilet",
  },
  {
    src: "/images/bathroom-vid.mp4",
    alt: "Modern bathroom and clean toilets",
    title: "Modern Bathroom",
  },
]

const isVideo = (src: string) => {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg")
}

export function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl text-black font-bold">Our Gallery</h2>
          <p className="text-gray-600 mt-3">Explore our beautiful apartment spaces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-12 relative h-64 overflow-hidden">
                {isVideo(image.src) ? (
                  <video
                    src={image.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white"
            onClick={closeModal}
          >
            <X className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center">
            {isVideo(images[currentImageIndex].src) ? (
              <video
                src={images[currentImageIndex].src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={images[currentImageIndex].src || "/placeholder.svg"}
                alt={images[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </section>
  )
}