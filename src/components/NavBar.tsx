import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
  return (
    <div className='flex justify-between items-center w-full mb-8'>
      <div className="hidden md:flex items-center justify-between rounded-full border-gray-300 border-[1px] bg-transparent min-w-56 p-2">
        <IoIosSearch size={20} style={{color: "gray", marginRight: "0.8rem"}} />
        <input
          type='text'
          placeholder='Search...'
          className='bg-gray-100 outline-none text-[0.8rem] w-full'
        />
      </div>
      <div className="flex items-center justify-end gap-5 w-full md:w-auto">
        <Link
          href={"#"}
          className='rounded-full bg-white p-1'
        >
          <AiOutlineMessage size={20} style={{color: "gray"}} />
        </Link>
        <Link
          href={"#"}
          className='rounded-full bg-white p-1 relative'
        >
          <GrAnnounce size={20} style={{color: "gray"}} />
          <span 
            className='flex justify-center items-center absolute -top-3 -right-3 bg-purple-600 text-white text-[0.8rem] rounded-full p-1 w-5 h-5 '>
              1
          </span>
        </Link>
        <p className='text-sm text-right font-medium'>John Doe <br /><span className='text-[80%] text-gray-500'>Admin</span></p>
        <Image 
          src={'/avatar.png'}
          width={40}
          height={40}
          alt='avatar'
          className='rounded-full'
        />
      </div>
    </div>
  )
}
