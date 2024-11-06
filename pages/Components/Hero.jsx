import React from 'react'
import bisrat from '@/pages/Components/student/bisrat'

function Hero() {
  return (
    <div className='bg-red-500 h-[100vh] flex items-center justify-center flex-row'>
      <div id='communityA' className='w-[33%] h-[70vh] m-3 bg-black '>
        <h1 className='text-cyan-50 flex items-center justify-center'>
            Community A
        </h1> 
        <div className='bg-orange-500 flex items-center justify-center relative'>
          <h1>student Name</h1>
          <a ref={bisrat} > bisrat</a>
        </div>
        
      </div>
      <div id='communityA' className='w-[33%] h-[70vh] m-3 bg-black'>
        <h1 className='text-cyan-50'>
            Community A
        </h1> 

      </div>
      <div id='communityA' className='w-[33%] h-[70vh] m-3 bg-black'>
        <h1 className='text-cyan-50'>
            Community A
        </h1> 

      </div>

    </div>
  )
}

export default Hero
