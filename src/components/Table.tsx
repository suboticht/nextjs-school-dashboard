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
            <table className='w-full mt-5'>
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
        )
}

export default Table;