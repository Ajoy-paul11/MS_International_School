export default function ImageCard({ image, onClick }) {
    return (
      <div className="relative group overflow-hidden rounded-lg shadow-md">
        <img
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onClick}
            className="p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  }