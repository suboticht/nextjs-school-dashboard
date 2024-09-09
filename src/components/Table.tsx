import React from 'react'

const Table = ({ 
        columns, 
        data,
        Row 
    } : { 
            columns: { header: string, classes: string }[];
            data: any[];
            Row: (item: any) => React.ReactNode;
        }) => {
            
        return (
            <div className="overflow-x-scroll overflow-hidden w-full">
                <table className='min-w-[750px] mt-5 md:min-w-max w-full'>
                    <thead>
                    <tr>
                        {columns.map(c => (
                        <td key={c.header} className='font-bold text-gray-500'>{c.header}</td>
                        ))}
                    </tr>
                    </thead>
                    <tbody className='text-md'>
                        { data.map((item) => Row(item)) }
                    </tbody>
                </table>
            </div>
        )
}

export default Table;