import React from 'react'
import { BiConversation } from "react-icons/bi";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

const ProfileUsage = ({ name, image } : { name:string, image:string }) => {
  return (
    <div className="w-full mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold flex justify-start items-center gap-1">
          <Image
            src={image}
            width={20}
            height={20}
            alt=''
            className='rounded-full w-10 h-10 object-cover'
          />
          {name}
        </span>
        <button className="bg-HTPurple p-2 block md:hidden lg:block rounded-md text-sm text-white">ENTERPRISE</button>
      </div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex justify-start items-center">
          <BiConversation size={18} />
          <span className="pl-2">Conversations</span>
        </div>
        <p>1</p>
      </div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex justify-start items-center">
          <CiClock2 size={18} />
          <span className="pl-2">Minute</span>
        </div>
        <p>0</p>
      </div>
    </div>
  )
}

export default ProfileUsage