import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div>
        <div className='flex gap-3 items-center'>
            <Image src='/logos.png' alt='logo'
            width={50} height={50}/>
            <h2 className='text-[25px] font-semibold text-red-600 tracking-widest'>A PLACE TO GO</h2>
        </div>
        <ul className='flex gap-8 items-center'>
          <li className='text-[18px] hover:text-red-600 cursor-pointer'>Home</li>
          <li className='text-[18px] hover:text-red-600 cursor-pointer'>About Us</li>
          <li className='text-[18px] hover:text-red-600 cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Header