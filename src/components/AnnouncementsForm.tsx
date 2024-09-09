import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const teacherSchema = z.object({
    title: z.string().min(10, "Tittle must be at least 10 characters long"),
    class: z.string().min(1, "Class is required"),
    date: z.string().date("Date is required"),
});

type TeacherFormInputs = z.infer<typeof teacherSchema>;

const TeacherForm = ({type, data}: {type: string, data?: any}) => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TeacherFormInputs>({
        resolver: zodResolver(teacherSchema),
        defaultValues: {
            title: data[0].title,
            class: data[0].class,
            date: data[0].date,
        },
    });
    const onSubmit: SubmitHandler<TeacherFormInputs> = (data) => {
        console.log(data);
    };
  return (
    <div className='p-5'>
        <div className="border-b border-stroke pb-4">
            <h3 className="font-medium text-dark">
                <span className='capitalize'>{type}</span> a announcement
            </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
            <div className="flex flex-col">
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                    Tittle: 
                    </label>
                    <input {...register("title")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.title && <p className='text-red-700 text-sm'>{errors.title.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                        Class: 
                    </label>
                    <input {...register("class")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.class && <p className='text-red-700 text-sm'>{errors.class.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                        Date:  
                    </label>
                    <input {...register("date")} type='date' className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.date && <p className='text-red-700 text-sm'>{errors.date.message}</p>}
                </div>
            </div>
            <button 
                type="submit"
                className="w-full mt-5 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >Submit</button>
        </form>
    </div>
  )
}

export default TeacherForm;