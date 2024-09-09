'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';

const TeacherForm = dynamic(() => import("./TeacherForm"), {
    loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./StudentForm"), {
    loading: () => <h1>Loading...</h1>,
});
const AnnouncementsForm = dynamic(() => import("./AnnouncementsForm"), {
    loading: () => <h1>Loading...</h1>,
});
const form: {
    [key: string]: (type: string, data?: any) => JSX.Element; 
} = {
    teachers: (type, data) => <TeacherForm type={type} data={data} />,
    students: (type, data) => <StudentForm type={type} data={data} />,
    announcement: (type, data) => <AnnouncementsForm type={type} data={data} />
}

const Modal = (
    { 
        type, 
        table, 
        id, 
        data 
    } : {
        type: string; 
        table: string, 
        id?: string | number; 
        data?: any }
    ) => {
    
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        setOpen(false);
    }

    const Form = () => {
      return type === 'delete' && id ? (
        <>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Delete</h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">All data will be lost. Are you sure you want to delete this {table}?</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button 
                    type="button" 
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleDelete}
                >
                    Delete
                </button>
                <button 
                    type="button" 
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </button>
            </div>
        </>
      ) : (
        form[table](type, data)
      );
    }
  return (
    <>
        <button
            className={`${type === 'edit' ? 'bg-HTSky' : 'bg-HTPurple'} rounded-full p-2`}
            onClick={() => setOpen(!open)}
        >
            {type === "delete" ? <AiTwotoneDelete size={20} style={{color: "white"}} /> : <FaEdit size={20} style={{color: "white"}} />}
            
        </button>
        {/* Open modal */}
        {open && (
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                    <Form />
                    <div
                        className="absolute top-2 right-2 cursor-pointer text-gray-500"
                        onClick={() => setOpen(false)}
                    >
                        <IoMdClose size={25} />
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Modal;
