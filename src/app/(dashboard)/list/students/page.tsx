import TableSearch from '@/components/TableSearch'
import React from 'react'
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import { studentsData as data } from '@/lib/data'
import Image from 'next/image';
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';
import Modal from '@/components/Modal';

type Student = {
  id: number,
  studentId: string,
  name: string,
  email: string,
  photo: string,
  phone: string,
  grade: string,
  class: string,
  address: string,
}

const columns = [
  {
    header: "Info",
    classes: "",
  },
  {
    header: "Student ID",
    classes: "",
  },
  {
    header: "Grade",
    classes: "",
  },
  {
    header: "Phone",
    classes: "",
  },
  {
    header: "Address",
    classes: "",
  },
  {
    header: "Actions",
    classes: "",
  },
];

const Row = ( item: Student ) => (
  <tr className='hover:bg-HTPurpleLight border-b-[1px] even:bg-gray-100' key={item.id}>
      <td className='p-4'>
          <div className='flex justify-start items-center gap-3'>
          <Image
              src={item.photo}
              width={40}
              height={40}
              alt={item.name}
              className='w-10 h-10 rounded-full object-cover'
          />
          <p className='leading-5 text-md font-medium'>
              {item.name}<br />
              <span className='text-[0.8rem] inline-block font-normal text-gray-500'>{item.class}</span>
          </p>
          </div>
      </td>
      <td>{item.studentId}</td>
      <td>{item.grade}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>
          <div className='flex gap-2'>
            <Link
              href={`./students/${item.id}`} 
              className='bg-HTSky rounded-full p-2'>
              <IoEyeOutline size={20} style={{color: "white"}} />
            </Link>
            <Modal table="students" type="delete" id={item.id} />
          </div>
      </td>
  </tr>
)

export default function Students() {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className="flex justify-between items-center">
        <h2 className='font-medium text-xl'>All Students</h2>
        <TableSearch />
      </div>
      {/* {Table} */}
      <Table Row={Row} columns={columns} data={data}  />
      {/* {Pagination} */}
      <Pagination />
    </div>
  )
}
