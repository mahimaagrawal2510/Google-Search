import React from 'react'

const SearchedImages = ({ searchResultsArr, handlePopImage, selectedImage, isActive, setIsActive }) => {

  const popImageData = (image) => {
    handlePopImage(image)
  }

  return (

    <div className={`column-count gap-x-4 p-[10px] mx-auto columns-2 md:columns-4 sm:columns-3 
  ${isActive ? " columns-1 md:columns-1 lg:columns-2" : ""}`}>
      {searchResultsArr?.map((image, i) => (
        <div key={i}
          className="cursor-pointer mb-4 breakInside"
          onClick={() => popImageData(image)}
        >
          <img
            src={image.download_url}
            alt={image.author}
            className="w-full block rounded-lg shadow-md transition-transform duration-300 ease transform hover:scale-105"
          />
          <span
            className="block mt-2"
          >
            {image.author}
          </span>
        </div>
      ))}
    </div>
  )
}
export default SearchedImages
