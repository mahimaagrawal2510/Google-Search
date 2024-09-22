import React from 'react'

function ImagePopOver({selectedImage, removeImagePopOver}) {
  return (
    <div className='md:max-h-[calc(100vh-80px)] max-h-[auto] relative md:sticky top-0 left-0 right-0 p-4'>
        <div className='w-full md:w-[574px] md:min-w-[500px] border-2 rounded-xl overflow-y-auto bg-white flex flex-col justify-between' style={{boxShadow: "0 1px 6px 0 #171717"}}>
           <div><section className='flex justify-between px-4 py-2'>
                <span>{selectedImage.author}</span>
                <span onClick={()=>{removeImagePopOver()}} className='cursor-pointer'>
                    <svg viewBox="0 0 24 24" focusable="false" height="24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </span>
            </section>
            <img src={selectedImage.download_url} alt={selectedImage.author}/>
            <div className='flex justify-between items-center px-4 py-2'>
            <span className=''>{selectedImage.author}</span> 
            <button className='rounded-full text-white bg-[#99c3ff] px-4 py-1 flex gap-2 items-center justify-center'>
                Visit <svg viewBox="0 0 24 24" focusable="false" height="18" width="18"><path d="M0 0h24v24H0z" fill="none"></path><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
            </button>
            </div>
            <div className='description px-4 py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className='flex justify-between items-center px-4 py-4 gap-4 '>
            <button className='rounded-full text-white bg-[#99c3ff] px-4 py-1 w-1/2 flex gap-2 items-center justify-center'>
            <svg viewBox="0 0 24 24" focusable="false" height="18" width="18"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18 16c-.79 0-1.5.31-2.03.81L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.48.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.05 4.12c-.05.22-.09.45-.09.69 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
                Share 
            </button>
            <button className='rounded-full text-white bg-[#99c3ff] px-4 py-1 w-1/2 flex gap-2 items-center justify-center'>
            <svg viewBox="0 0 24 24" focusable="false" height="18" width="18"><path d="M0 0h24v24H0z" fill="none"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>
                Save 
            </button>
            </div> 
        </div>
        </div>   
  )
}

export default ImagePopOver