import React from 'react'
import Image from 'next/image'

function Main() {
  return (
    <div className='text-center relative w-full h-screen '>
        <div className='absolute inset-0 -z-10'>
            <Image src='/main_asset.png' alt='main-image'
            layout='fill'
            objectFit='contain'
            className='object-cover opacity-20 absolute' />
            <div className='mt-[60px]'>
                <h2 className='text-[50px] tracking-widest font-semibold'>A PLACE TO GO</h2>
            </div>
            <div>
              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet consequatur ducimus quas sed expedita eligendi quibusdam dolor quaerat, laudantium beatae.</h3>
            </div>
        </div>
    </div>
  )
}

export default Main