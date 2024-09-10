"use client"
import TableSearch from '@/components/TableSearch'
import React, { useState } from 'react'
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import { parentsData as data } from '@/lib/data'
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';
import Modal from '@/components/Modal';
import { sortObjects } from '@/ultis/sortObjects';

type Parent = {
  id: number,
  name: string,
  email: string,
  students: string[],
  phone: string,
  address: string,
}

const columns = [
  {
    header: "Info",
    classes: "",
  },
  {
    header: "Students",
    classes: "",
  },
  {
    header: "Phone",
    classes: "",
  },
  {
    header: "Address",
    classes: "",
  }
];

const Row = ( item: Parent ) => (
  <tr className='hover:bg-HTPurpleLight border-b-[1px] even:bg-gray-100' key={item.id}>
      <td className='p-4'>
          <div className='flex justify-start items-center gap-3'>
            <p className='leading-5 text-md font-medium'>
                {item.name}<br />
                <span className='text-[0.8rem] inline-block font-normal text-gray-500'>{item.email}</span>
            </p>
          </div>
      </td>
      <td>{item.students.join(", ")}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>
          <div className='flex gap-2'>
            <Link
              href={`./parents/${item.id}`} 
              className='bg-HTSky rounded-full p-2'>
              <IoEyeOutline size={20} style={{color: "white"}} />
            </Link>
            <Modal table="parents" type="delete" id={item.id} />
          </div>
      </td>
  </tr>
)

export default function Parents() {
  const [dataParent, setDataParent] = useState<Parent[]>(data);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const handleSort = () => {
    const sortedData = sortObjects([...dataParent], isAscending);
    setDataParent(sortedData);
    setIsAscending(!isAscending);
  };
  
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className="flex justify-between items-center">
        <h2 className='font-medium text-xl'>All Parents</h2>
        <TableSearch onSort={handleSort} isAscending={isAscending} />
      </div>
      {/* {Table} */}
      <Table Row={Row} columns={columns} data={dataParent}  />
      {/* {Pagination} */}
      <Pagination />
    </div>
  )
}
