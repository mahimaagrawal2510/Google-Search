import React from 'react'

function SearchBarIcons({ icon }) {
  return (
    <div
      className='h-8 w-8 cursor-pointer flex justify-center items-center'>
      {icon}
    </div>
  )
}

export default SearchBarIcons