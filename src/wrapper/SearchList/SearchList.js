import React, { useState, useEffect } from 'react'
import {image} from "./GoogleImage"
import {GetData} from "../../Utilities/utilities"
import SearchedImages from "../../components/SearchedImages/SearchedImages";
import Loader from '../../components/Loader/Loader';
const SearchList = () => {
    const [searchResultsArr, setSearchResultsArr] = useState([]);
    const [selectedImage, setSelectedImage] = useState({})
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(30);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        GetData(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`, {}, (res)=>{
            setSearchResultsArr([...searchResultsArr, ...res])
            setIsLoading(false)
        })
      }, [page]);

    const handlePopImage = (image) => {
        console.log('clicked', image)
        GetData(`https://picsum.photos/id/${image.id}/info`, {}, (res) => {
            setSelectedImage(image)
            console.log(res)
        })
       
    }

    useEffect(() => {
        const handleScroll = () => {
            
          if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
          setPage((prev) => prev + 1);
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isLoading]);
    

  return (
    <div>
       {isLoading && <Loader/>}
    <header className='flex lg:gap-16 gap-2 md:gap-8 items-center header-wrapper flex-col md:flex-row p-2'>
        <img src={image} alt="Google" className='md:max-h-[80px] max-h-[60px]'/>
        <div className='w-full md:w-3/5 lg:w-2/5 border-2 p-1 mx-4 rounded-full flex gap-4 md:mx-0'>
            <input type='search' className='px-1 outline-none w-full rounded-l-full border-r-2'></input>
            <div className='h-8 w-8 cursor-pointer flex justify-center items-center'>
                <svg className="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
            </div>
            <div className='h-8 w-8 cursor-pointer flex justify-center items-center'>
                <svg className="Gdd5U" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc04" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg>
            </div>
            <div className='h-8 w-8 cursor-pointer flex justify-center items-center'>
                <svg color='#8ab4f8' focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            </div>
        </div>
    </header>   
    <div className='flex gap-4 relative'>
    {
    searchResultsArr?.length > 0 &&
        <div>
        <SearchedImages searchResultsArr={searchResultsArr} handlePopImage={handlePopImage} selectedImage={selectedImage} />
        </div>
        }
        {console.log(selectedImage, "jjj")}
         {Object.entries(selectedImage).length > 0 && 
         <div className='max-h-[calc(100vh-80px)] sticky top-0 left-0 right-0 p-4'>
            <div className='w-[574px] min-w-[500px] border-2 rounded-xl overflow-y-auto bg-white flex flex-col justify-between' style={{boxShadow: "0 1px 6px 0 #171717"}}>
               <div><section className='flex justify-between px-4 py-2'>
                    <span>{selectedImage.author}</span>
                    <span onClick={()=>{setSelectedImage({})}} className='cursor-pointer'>
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
         }
    </div>
    
    </div>
    
  )
}

export default SearchList