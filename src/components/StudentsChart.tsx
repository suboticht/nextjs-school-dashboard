'use client'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'total',
        count: 100,
        fill: '#fff',
    },
    {
        name: 'Girls',
        count: 46,
        fill: '#e2ef70',
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#70e4ef',
    },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default function 
() {
  return (
    <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
            <RadialBarChart
                innerRadius='40%'
                outerRadius='100%'
                barSize={40}
                data={data}
            >
            <RadialBar
                background
                dataKey="count"
            />
            </RadialBarChart>
        </ResponsiveContainer>
        <Image
            src={'/maleFemale.png'}
            width={50}
            height={50}
            alt="male female"
            className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
        />
        <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-start gap-1">
                <div className="w-5 h-5 bg-HTSky rounded-full"></div>
                <p className='font-bold'>1,234</p>
                <p className='text-[0.75rem] text-gray-300'>Boys (55%)</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
                <div className="w-5 h-5 bg-HTYellow rounded-full"></div>
                <p className='font-bold'>1,234</p>
                <p className='text-[0.75rem] text-gray-300'>Boys (55%)</p>
            </div>
        </div>
    </div>
  )
}

