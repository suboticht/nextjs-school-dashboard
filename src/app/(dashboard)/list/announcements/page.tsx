"use client"
import TableSearch from '@/components/TableSearch'
import React, { useState } from 'react'
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import { announcementsData as data } from '@/lib/data'
import Modal from '@/components/Modal';
import { sortObjects } from '@/ultis/sortObjects';

type Announcement = {
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

const Row = ( item: Announcement ) => (
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
  const [dataAnnouncement, setDataAnnouncement] = useState<Announcement[]>(data);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const handleSort = () => {
    const sortedData = sortObjects([...dataAnnouncement], isAscending);
    setDataAnnouncement(sortedData);
    setIsAscending(!isAscending);
  };
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className="flex justify-between items-center w-full">
        <h2 className='font-medium w-0 text-xl invisible md:visible md:w-auto'>All Announcements</h2>
        <TableSearch onSort={handleSort} isAscending={isAscending} />
      </div>
      {/* {Table} */}
      <Table Row={Row} columns={columns} data={dataAnnouncement}  />
      {/* {Pagination} */}
      <Pagination />
    </div>
  )
}
