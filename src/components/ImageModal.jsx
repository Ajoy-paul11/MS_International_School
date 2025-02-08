
import Dialog from "./Dialog"

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="relative w-full h-[calc(100vh-4rem)]">
        <img src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Dialog>
  )
}
