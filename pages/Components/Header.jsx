import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-center bg-gray-700 '>
      <div className='left-0 mr-5' id='logo'  >
        <h1 className='text-6xl text-cyan-50'>GemStone Mining</h1>
      </div>
      <ul className='flex flex-row gap-3 ml-7'>
        <li className='pointer'>
          Home
        </li>
        <li>
         About
        </li>
        <li>
            Service
         </li>
        <li>
            contact
        </li>
        
      </ul>
    </div>
  )
}

export default Header
