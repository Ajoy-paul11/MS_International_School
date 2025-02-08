import React, { useState } from 'react'
import boardRoom from "../assets/gallery/board-room.jpg";
import brassBand from "../assets/gallery/brass-band.jpg";
import prayerRoom from "../assets/gallery/prayer-room.jpg";
import diningArea from "../assets/gallery/dining-area.jpg";
import schoolCorridor from "../assets/gallery/school-corridor.jpg";
import latheMachine from "../assets/gallery/lathe-machine.png";
import staffRoom from "../assets/gallery/staff-room.jpg";
import classRoom from "../assets/gallery/accounts-classroom.png";
import schoolGround from "../assets/gallery/school-ground.jpg";
import ImageCard from "./ImageCard"
import ImageModal from "./ImageModal"

const images = [
  { id: 1, src: boardRoom, alt: "Board-Room" },
  { id: 2, src: brassBand, alt: "Brass-Band" },
  { id: 3, src: prayerRoom, alt: "Prayer-Room" },
  { id: 4, src: diningArea, alt: "Dining-Area" },
  { id: 5, src: schoolCorridor, alt: "School-Corridor" },
  { id: 6, src: latheMachine, alt: "Lathe-Machine" },
  { id: 7, src: staffRoom, alt: "Staff-Room" },
  { id: 8, src: classRoom, alt: "Class-Room" },
  { id: 9, src: schoolGround, alt: "School-Ground" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} onClick={() => setSelectedImage(image)} />
        ))}
      </div>
      <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage} />
    </div>
  )
}
