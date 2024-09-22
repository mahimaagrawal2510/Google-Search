import React from 'react'
import SearchBarIcons from "../../components/SearchBarIcons/SearchBarIcons";
import { AudioIcon } from '../../Assets/AudioIcon';
import { SearchByImage } from '../../Assets/SearchByImage';
import { SearchIcon } from '../../Assets/SearchIcon';
import { image } from "../../wrapper/SearchList/GoogleImage";

function Header() {
    const searchIconsArr = [AudioIcon, SearchByImage, SearchIcon]
  return (
    <header className='flex lg:gap-16 gap-2 md:gap-8 items-center header-wrapper flex-col md:flex-row p-2'>
    <img src={image} alt="Google" className='md:max-h-[80px] max-h-[60px]' />
    <div className='w-full md:w-3/5 lg:w-2/5 border-2 p-1 mx-4 rounded-full flex gap-4 md:mx-0'>
        <input type='search' className='px-1 outline-none w-full rounded-l-full border-r-2'></input>
        {searchIconsArr.map(ele => {
            return <SearchBarIcons icon={ele} />
        })}
    </div>
</header>
  )
}

export default Header