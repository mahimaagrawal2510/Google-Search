import React from 'react';
import { RemoveIcon } from '../../Assets/RemoveIcon';
import { AngleRight } from '../../Assets/AngleRight';
import { FOOTER_ICONS } from '../../Utilities/constants';

function ImagePopOver({ selectedImage, removeImagePopOver }) {

    return (
        <div className='md:max-h-[calc(100vh-80px)] max-h-[auto] relative md:sticky top-0 left-0 right-0 p-4'>
            <div className='w-full md:w-[574px] md:min-w-[500px] border-2 rounded-xl overflow-y-auto bg-white flex flex-col justify-between' style={{ boxShadow: "0 1px 6px 0 #171717" }}>
                <div>
                    <section className='flex justify-between px-4 py-2'>
                        <span>{selectedImage?.author}</span>
                        <span onClick={() => { removeImagePopOver() }} className='cursor-pointer'>
                            {RemoveIcon}
                        </span>
                    </section>
                    <div className='m-auto w-fit'>
                    <img src={selectedImage?.download_url} alt={selectedImage?.author} className='max-h-[50vh]'/>

                    </div>
                    <div className='flex justify-between items-center px-4 py-2'>
                        <span className=''>{selectedImage?.author}</span>
                        <button className='rounded-full text-white bg-[#99c3ff] px-4 py-1 flex gap-2 items-center justify-center'>
                            Visit {AngleRight}
                        </button>
                    </div>
                    <div className='description px-4 py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className='flex justify-between items-center px-4 py-4 gap-4 '>
                    {FOOTER_ICONS.map((item, index) => {
                        return <button key={index} className='rounded-full text-white bg-[#99c3ff] px-4 py-1 w-1/2 flex gap-2 items-center justify-center'>
                            {item.icon}
                            {item.name}
                        </button>
                    })}

                </div>
            </div>
        </div>
    )
}

export default ImagePopOver