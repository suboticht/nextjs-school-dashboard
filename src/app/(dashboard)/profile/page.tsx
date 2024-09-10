import UserCard from "@/components/UserCard";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileUsage from "@/components/ProfileUsage";

export default function Profile() {
  return (
    <div className="flex flex-col justify-between items-start gap-4 md:flex-row">
      <div className="flex flex-col gap-7 w-full md:w-2/3 lg:w-1/2">
        <div className="bg-white rounded-xl p-4 md:p-8">
          <div className="hidden md:flex items-center justify-between rounded-full border-gray-300 border-[1px] bg-transparent min-w-56 p-2">
            <IoIosSearch size={20} style={{color: "gray", marginRight: "0.8rem"}} />
            <input
              type='text'
              placeholder='Search...'
              className='outline-none text-[0.8rem] w-full'
            />
          </div>
          <ProfileInfo name="Mike Geller" image="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <ProfileInfo name="Jay French" image="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/3 lg:w-1/2">
        <div className="flex flex-wrap justify-between items-center rounded-xl w-full gap-2 bg-white p-4 md:p-8">
          <UserCard type="My exercises" size="lg" />
          <UserCard type="My classes" size="lg" />
          <UserCard type="Total sessions" size="lg" />
          <UserCard type="Total minutes" size="lg"/>
        </div>
        <div className="rounded-xl w-full gap-2 bg-white p-4 md:p-8">
          <div className="flex justify-between items-center mb-5">
              <p className="font-bold text-lg">Monthly Usage</p>
          </div>
          <ProfileUsage name="Harriet" image="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <ProfileUsage name="Neil" image="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200" />
          <ProfileUsage name="Lisa" image="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        </div>
      </div>
    </div>
  );
}
