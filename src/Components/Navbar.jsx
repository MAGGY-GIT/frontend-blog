import React from 'react'

//imports use of react-icons
//icon name is in curly brackets
import { FaYoutubeSquare } from "react-icons/fa";


function Navbar() {
  return (
    
    <div className=' flex bg-blue-800 w-full p-7 items-center text-slate-50'>
        <div className='logo-icon text-[60px]'>
            <FaYoutubeSquare/>
        </div>
          
          {/**ml-auto floats right */}
        <div className='tabs ml-auto group'>
          
          <ul className='flex items-center text-[20px] space-x-14 font-bold'>
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>

        </div>

    </div>
  )
}

export default Navbar