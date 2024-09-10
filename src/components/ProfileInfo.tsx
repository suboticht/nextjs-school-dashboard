import Image from 'next/image'
import React from 'react'
import { CiPaperplane } from 'react-icons/ci'
import { LuBrain } from 'react-icons/lu'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { RiWechatChannelsFill } from 'react-icons/ri'

const ProfileInfo = ({ name, image } : { name:string, image:string }) => {
  return (
    <div className='my-2 md:my-10 bg-slate-100 rounded-md p-4 md:p-6'>
        <div className="flex justify-between items-center border-b border-stroke pb-3">
            <p className="font-bold text-lg">{name}</p>
            <MdOutlineMoreHoriz size={30} style={{color: "gray"}} />
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mt-6'>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <Image
                src={image}
                width={120}
                height={120}
                alt=''
                className='rounded-full w-48 h-48 object-cover'
                />
            </div>
            <div className='w-full lg:w-1/2'>
                <div className="flex justify-between items-center mb-1">
                    <div className="flex-1 flex justify-start items-center gap-2">
                        <LuBrain size={24} /><span className="text-xl">Brain</span>
                    </div>
                    |
                    <div className="flex-1 text-xl text-slate-400 px-4">Brain</div>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <div className="flex-1 flex justify-start items-center gap-2">
                        <RiWechatChannelsFill size={24} /><span className="text-xl">Channels</span>
                    </div>
                    |
                    <div className="flex-1 text-xl text-slate-400 px-4">N/A</div>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <div className="flex-1 flex justify-start items-center gap-2">
                        <CiPaperplane size={24} /><span className="text-xl">Plan</span>
                    </div>
                    |
                    <div className="flex-1 text-xl text-slate-400 px-4">
                        <button className="bg-HTPurple p-2 rounded-md text-sm text-white">ENTERPRISE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo