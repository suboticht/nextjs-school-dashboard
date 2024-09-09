import TableSearch from '@/components/TableSearch'
import React from 'react'
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import { announcementsData as data } from '@/lib/data'
import Modal from '@/components/Modal';

type Teacher = {
  id: number,
  title: string,
  class: string,
  date: string,
}

const columns = [
  {
    header: "Title",
    classes: "",
  },
  {
    header: "Class",
    classes: "",
  },
  {
    header: "	Date",
    classes: "",
  },
  {
    header: "Actions",
    classes: "",
  },
];

const Row = ( item: Teacher ) => (
  <tr className='hover:bg-HTPurpleLight border-b-[1px] even:bg-gray-100' key={item.id}>
    <td className='p-4'>{item.title}</td>
    <td className='p-4'>{item.class}</td>
    <td className='p-4'>{item.date}</td>
    <td>
        <div className='flex gap-2'>
          <Modal type="edit" table="announcement" id={item.id} data={data} />
          <Modal table="announcement" type="delete" id={item.id} />
        </div>
    </td>
  </tr>
)

export default function Announcements() {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className="flex justify-between items-center">
        <h2 className='font-medium text-xl'>All Announcements</h2>
        <TableSearch />
      </div>
      {/* {Table} */}
      <Table Row={Row} columns={columns} data={data}  />
      {/* {Pagination} */}
      <Pagination />
    </div>
  )
}
