import React from 'react'

export default function Pagination() {
  return (
    <div className="flex justify-between items-center my-6 px-6">
      <button disabled className='bg-slate-200 text-slate-500-400 px-3 py-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'>Prev</button>
      <div className='flex items-center justify-start gap-2'>
        <button className='rounded-sm p-1 bg-HTSky hover:bg-HTSky w-7 h-7 inline-block text-sm'>1</button>
        <button className='rounded-sm p-1 hover:bg-HTSky w-7 h-7 inline-block text-sm'>2</button>
        <button className='rounded-sm p-1 hover:bg-HTSky w-7 h-7 inline-block text-sm'>3</button>
        ...
        <button className='rounded-sm p-1 hover:bg-HTSky w-7 h-7 inline-block text-sm'>10</button>
      </div>
      <button className='bg-slate-200 text-slate-500-400 px-3 py-1 rounded-md'>Next</button>
    </div>
  )
}
