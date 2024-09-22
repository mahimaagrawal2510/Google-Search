import React from 'react'
import { useState } from 'react'

const SearchedImages = ({searchResultsArr, handlePopImage, selectedImage}) => {
   const popImageData = (image) => {
    handlePopImage(image)
  
   }
  
  return (
    <div className='flex flex-wrap gap-4'>
        {searchResultsArr?.map((image, i) => {
            return <div key={image.id} className={`grow p-2 rounded-xl flex flex-col gap-1 justify-between cursor-pointer ${selectedImage.id == image.id? "border-2 border-[#a8c7fa] bg-[#d0e2ff]" : ""}`} onClick={()=>{popImageData(image)}}>
                <div className='w-full h-full'>
                    <img alt={image.author} src={image.download_url} className='max-w-[300px]'/>

                </div>
                <span>{image.author}</span>

            </div>
        })}
       
    </div>
  )
}
export default SearchedImages
