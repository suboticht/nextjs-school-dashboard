'use client'
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { MdOutlineMoreHoriz } from "react-icons/md";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function HTCalendar() {
    const [value, setValue] = useState<Value>(new Date());  
    return (
        <div className="flex flex-col gap-4 rounded-md bg-white p-4">
            <Calendar onChange={setValue} value={value} />
            <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Finance</p>
                <MdOutlineMoreHoriz size={30} style={{color: "gray"}} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 rounded-md border-[1px] border-t-4 odd:border-t-HTSky even:border-t-HTPurple p-5">
                    <p className="flex justify-between items-center text-md font-medium">Lorem ipsum dolor sit amet <span className="text-[0.8rem] font-normal text-gray-300">12:00 PM - 2:00 PM</span></p>
                    <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col gap-3 rounded-md border-[1px] border-t-4 odd:border-t-HTSky even:border-t-HTPurple p-5">
                    <p className="flex justify-between items-center text-md font-medium">Lorem ipsum dolor sit amet <span className="text-[0.8rem] font-normal text-gray-300">12:00 PM - 2:00 PM</span></p>
                    <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-col gap-3 rounded-md border-[1px] border-t-4 odd:border-t-HTSky even:border-t-HTPurple p-5">
                    <p className="flex justify-between items-center text-md font-medium">Lorem ipsum dolor sit amet <span className="text-[0.8rem] font-normal text-gray-300">12:00 PM - 2:00 PM</span></p>
                    <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}
