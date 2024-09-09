import React from "react";

const Announcements = () => {
    
  return (
    <div className="bg-white rounded-md p-4">
        <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Announcements</p>
            <span className="text-[0.8rem] text-gray-300">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-3 rounded-md bg-HTSkyLight p-5">
                <p className="flex justify-between items-center text-md font-medium">Lorem ipsum dolor sit amet <span className="text-[0.7rem] font-normal text-gray-400 bg-white p-1 rounded-md">2025-01-01</span></p>
                <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum ipsum quo voluptas dolorem cumque. Maiores veritatis ad.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-md bg-HTPurpleLight p-5">
                <p className="flex justify-between items-center text-md font-medium">Lorem ipsum dolor sit amet <span className="text-[0.7rem] font-normal text-gray-400 bg-white p-1 rounded-md">2025-01-01</span></p>
                <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum ipsum quo voluptas dolorem cumque. Maiores veritatis ad.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-md bg-HTYellowLight p-5">
                <p className="flex justify-between items-center text-md font-medium">Lorem ipsum dolor sit amet <span className="text-[0.7rem] font-normal text-gray-400 bg-white p-1 rounded-md">2025-01-01</span></p>
                <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum ipsum quo voluptas dolorem cumque. Maiores veritatis ad.</p>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Announcements);