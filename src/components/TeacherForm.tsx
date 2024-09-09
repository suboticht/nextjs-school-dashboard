import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const teacherSchema = z.object({
    teacherId: z.string().min(10, "Teacher ID must be at least 10 characters long"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    photo: z.string().url("Invalid photo URL"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    subjects: z.array(z.string()).nonempty("At least one subject is required"),
    classes: z.array(z.string()).nonempty("At least one class is required"),
    address: z.string().min(1, "Address is required"),
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
          teacherId: data[0].teacherId,
          name: data[0].name,
          email: data[0].email,
          photo: data[0].photo,
          phone: data[0].phone,
          subjects: data[0].subjects,
          classes: data[0].classes,
          address: data[0].address,
        },
    });
    const onSubmit: SubmitHandler<TeacherFormInputs> = (data) => {
        console.log(data);
    };
  return (
    <div className='p-5'>
        <div className="border-b border-stroke pb-4">
            <h3 className="font-medium text-dark">
                <span className='capitalize'>{type}</span> a teacher
            </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
            <div className="flex flex-col">
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                    Teacher ID: 
                    </label>
                    <input {...register("teacherId")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.teacherId && <p className='text-red-700 text-sm'>{errors.teacherId.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                        Name: 
                    </label>
                    <input {...register("name")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.name && <p className='text-red-700 text-sm'>{errors.name.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                    Email: 
                    </label>
                    <input {...register("email")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.email && <p className='text-red-700 text-sm'>{errors.email.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                    Photo: 
                    </label>
                    <input {...register("photo")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.photo && <p className='text-red-700 text-sm'>{errors.photo.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                    Phone: 
                    </label>
                    <input {...register("phone")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.phone && <p className='text-red-700 text-sm'>{errors.phone.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                    Subjects: 
                    </label>
                    <input {...register("subjects")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.subjects && <p className='text-red-700 text-sm'>{errors.subjects.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                    Classes: 
                    </label>
                    <input {...register("classes")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.classes && <p className='text-red-700 text-sm'>{errors.classes.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="mb-1 block text-[1rem] font-medium text-dark">
                    Address: 
                    </label>
                    <input {...register("address")} className='w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-3 py-2 text-sm text-slate-500 outline-none transition focus:border-HTPurple active:border-HTPurple disabled:cursor-default disabled:bg-gray-2' />
                    {errors.address && <p className='text-red-700 text-sm'>{errors.address.message}</p>}
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