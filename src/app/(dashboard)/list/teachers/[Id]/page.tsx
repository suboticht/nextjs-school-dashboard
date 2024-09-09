'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaCalendarAlt, FaPhone } from "react-icons/fa";
import { MdOutlineStarRate, MdOutlineMeetingRoom, MdOutlineMoreHoriz } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { PiExamBold } from "react-icons/pi";
import { TbBrandStackshare } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";
import BigCalendar from '@/components/BigCalendar';
import Link from 'next/link';
import Announcements from '@/components/Announcements';
import Modal from '@/components/Modal';
import { teachersData } from '@/lib/data';

type ParamsType = {
  Id: string;
};

export default function TeacherId() {
  const [data, setData] = useState<any>();
  const [id, setID] = useState<number>(0);
  const params = useParams<ParamsType>();
  useEffect(() =>{
    const newData:any = [...teachersData];
    const data = newData.filter((x: { id: number; }) => x.id === Number(params.Id))
    setData(data);
    setID(Number(params.Id));
  }, [])
  
  return (
    <div className="flex flex-col justify-between items-start gap-4 md:flex-row">
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        <div className='flex flex-col gap-7 w-full xl:flex-row'>
          <div className="flex flex-1 p-4 py-2 bg-HTSky rounded-md w-full xl:w-1/2 sm:py-6">
            <div className='flex justify-between items-center gap-4'>
              <div className='w-1/2 sm:w-1/3'>
              {data && (
                <Image 
                  src={data[0]?.photo}
                  width={120}
                  height={120}
                  alt=''
                  className='rounded-full w-36 h-36 object-cover'
                />
              )}
              </div>
              <div className='w-1/2 sm:w-2/3'>
                <h3 className='flex justify-start items-center gap-3 font-medium text-lg mb-0 sm:text-xl sm:mb-4'>
                  {data && data[0]?.name}
                  <Modal type="edit" table="teachers" id={id} data={data} />
                </h3>
                <p className='text-sm mb-1 text-gray-500 sm:mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex flex-col flex-wrap justify-between items-center md:flex-row'>
                  <div className='flex justify-start items-center gap-2 mb-1 w-full md:w-1/2'>
                    <MdOutlineStarRate size={15} /> <span className='text-[11px]'>A+</span>
                  </div>
                  <div className='flex justify-start items-center gap-2 mb-1 w-full md:w-1/2'>
                    <FaCalendarAlt size={15} /> <span className='text-[11px]'>January 2025</span>
                  </div>
                  <div className='flex justify-start items-center gap-2 mb-1 w-full md:w-1/2'>
                    <IoIosMail size={15} /> <span className='text-[11px]'>{data && data[0]?.email}</span>
                  </div>
                  <div className='flex justify-start items-center gap-2 mb-1 w-full md:w-1/2'>
                    <FaPhone size={15} /> <span className='text-[11px]'>+1 234 567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-between gap-4 w-full xl:w-1/2 lg:gap-2">
            <div className="flex justify-start items-start gap-2 bg-white rounded-md p-4 w-full lg:w-[48%]">
              <PiExamBold size={25} color='purple' />
              <p>
                90%<br />
                <span>Attendance</span>
              </p>
            </div>
            <div className="flex justify-start items-start gap-2 bg-white rounded-md p-4 w-full lg:w-[48%]">
              <TbBrandStackshare size={25} color='purple' />
              <p>
                2<br />
                <span>Branches</span>
              </p>
            </div>
            <div className="flex justify-start items-start gap-2 bg-white rounded-md p-4 w-full lg:w-[48%]">
              <SlBookOpen size={25} color='purple' />
              <p>
                6<br />
                <span>Lessons</span>
              </p>
            </div>
            <div className="flex justify-start items-start gap-2 bg-white rounded-md p-4 w-full lg:w-[48%]">
              <MdOutlineMeetingRoom size={25} color='purple' />
              <p>
                6<br />
                <span>Classes</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-4 bg-white">
          <p className='font-bold text-lg mb-5'>Teacher's Schedule</p>
          <BigCalendar />
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-sm w-full md:w-1/3">
        <div className="bg-white rounded-md p-4">
          <div className="flex justify-between items-center">
              <p className="font-bold text-lg">Shortcuts</p>
          </div>
          <div className='flex flex-wrap gap-4 mt-4'>
            <Link
              href="/"
              className='p-2 sm:px-4 sm:py-3 rounded-md bg-HTSkyLight text-gray-600 text-[0.8rem]'
            >
              Teacher's Classes
            </Link>
            <Link
              href="/"
              className='p-2 sm:px-4 sm:py-3 rounded-md bg-HTPurpleLight text-gray-600 text-[0.8rem]'
            >
              Teacher's Students
            </Link>
            <Link
              href="/"
              className='p-2 sm:px-4 sm:py-3 rounded-md bg-HTYellowLight text-gray-600 text-[0.8rem]'
            >
              Teacher's Lessons
            </Link>
            <Link
              href="/"
              className='p-2 sm:px-4 sm:py-3 rounded-md bg-red-50 text-gray-600 text-[0.8rem]'
            >
              Teacher's Exams
            </Link>
            <Link
              href="/"
              className='px-4 py-3 rounded-md bg-HTSkyLight text-gray-600 text-[0.8rem]'
            >
              Teacher's Assignments
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-md p-4">
          <div className="flex justify-between items-center">
              <p className="font-bold text-lg">Performance</p>
              <MdOutlineMoreHoriz size={30} style={{color: "gray"}} />
          </div>
        </div>
        <div className="bg-white rounded-md">
          <Announcements />
        </div>
      </div>
    </div>
  )
}
