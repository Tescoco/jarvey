import React, { useRef, useState } from 'react'
import { copyIcon, deleteIcon } from '../utilities/Classes';
import Switch from './Switch';
import { Link } from 'react-router-dom';

export default function DragDrop({ tableData }) {
    const [items, setItems] = useState(tableData);
    const dragItem = useRef(null);
    const handleDragStart = (index) => {
        dragItem.current = index;
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDrop = (dropIndex) => {
        if (dragItem.current !== null && dragItem.current !== dropIndex) {
            const copyItems = [...items];
            [copyItems[dragItem.current], copyItems[dropIndex]] = [
                copyItems[dropIndex],
                copyItems[dragItem.current],
            ];
            setItems(copyItems);
        }
        dragItem.current = null;
    };
    return (
        <>
            {items.map((item, index) => (
                <tr
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={() => handleDrop(index)}
                    key={index}>
                    <td className='md:!py-5'>
                        <div className='flex items-center gap-4 lg:gap-5 xl:gap-7'>
                            <button className='flex items-center gap-2 lg:gap-3 !pr-0 cursor-move'>
                                <span>
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.75 6.91666V6.99999C2.75 7.57529 2.28363 8.04166 1.70833 8.04166C1.13304 8.04166 0.666667 7.57529 0.666667 6.99999V6.91666C0.666667 6.34136 1.13304 5.87499 1.70833 5.87499C2.28363 5.87499 2.75 6.34136 2.75 6.91666ZM7.33333 6.91666V6.99999C7.33333 7.57529 6.86696 8.04166 6.29167 8.04166C5.71637 8.04166 5.25 7.57529 5.25 6.99999V6.91666C5.25 6.34136 5.71637 5.87499 6.29167 5.87499C6.86696 5.87499 7.33333 6.34136 7.33333 6.91666ZM6.29167 13.25C5.71637 13.25 5.25 12.7836 5.25 12.2083C5.25 11.633 5.71637 11.1667 6.29167 11.1667C6.86696 11.1667 7.33333 11.633 7.33333 12.2083C7.33333 12.7836 6.86696 13.25 6.29167 13.25ZM1.70833 13.25C1.13304 13.25 0.666667 12.7836 0.666667 12.2083C0.666667 11.633 1.13304 11.1667 1.70833 11.1667C2.28363 11.1667 2.75 11.633 2.75 12.2083C2.75 12.7836 2.28363 13.25 1.70833 13.25ZM6.29167 2.83333C5.71637 2.83333 5.25 2.36696 5.25 1.79166C5.25 1.21637 5.71637 0.749995 6.29167 0.749995C6.86696 0.749995 7.33333 1.21637 7.33333 1.79166C7.33333 2.36696 6.86696 2.83333 6.29167 2.83333ZM1.70833 2.83333C1.13304 2.83333 0.666667 2.36696 0.666667 1.79166C0.666667 1.21637 1.13304 0.749995 1.70833 0.749995C2.28363 0.749995 2.75 1.21637 2.75 1.79166C2.75 2.36696 2.28363 2.83333 1.70833 2.83333Z" fill="#858585" stroke="#858585" strokeWidth="0.833333" />
                                    </svg>
                                </span>
                                <Switch id={index + 1} checked={item.status} />
                            </button>
                            <Link to="/" className='!text-[#0A0D14] text-sm font-medium !leading-[1.4] tracking-[-0.084px] hover:!text-primary'>{item.name}</Link>
                        </div>
                    </td>
                    <td>{item.date}</td>
                    <td className='md:!py-5'>
                        <div className="flex items-center justify-center gap-3">
                            <button className='text-primary hover:text-primary p-2 -m-2'>{copyIcon}</button>
                            <button className='text-gray hover:text-primary p-2 -m-2'>{deleteIcon}</button>
                        </div>
                    </td>
                </tr>
            ))}
        </>
    )
}
