import React, { useEffect, useState } from 'react'

export default function Progress({ className = "justify-center mb-5 lg:mb-6", itemClass = "min-w-[108px]", items = [], activeItem }) {
    const [newActive, setNewActive] = useState(null);
    useEffect(() => { setNewActive(activeItem === null ? null : items.length === 0 ? 0 : Math.min(activeItem, items.length - 1)) }, [activeItem, items]);

    return (
        <div className={`flex items-center gap-8 mx-auto overflow-x-auto ${className}`}>
            {items.map((item, index) => (
                <div key={index} className={`progress-step text-center select-none cursor-pointer relative Z-[1] ${itemClass}`}>
                    {index != items.length - 1 &&
                        <div className="h-[2px] rounded-full bg-stroke flex-none w-[calc(100%-32px)] absolute ml-7 -mt-3 -z-10 left-1/2 top-1/2 -translate-y-1/2" />
                    }
                    <div className={`mx-auto border ${index === newActive ? 'border-primary' : 'border-transparent'} bg-[#F7F7F7] rounded-full size-6 p-[1px] mb-2`}>
                        <span className={`rounded-full ${index < newActive ? 'bg-green text-white' : ''} ${index === newActive ? 'text-white bg-primary' : 'text-gray'} w-full h-full text-xs font-medium flex items-center justify-center`}>
                            {index < newActive ?
                                <svg className='relative top-[-2px]' width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.875 6.3737L3.35245 8.34177C3.57476 8.51837 3.89934 8.47464 4.06699 8.24549L9.125 1.33203" stroke="currentColor" strokeLinecap="round" />
                                </svg>
                                :
                                index + 1
                            }
                        </span>
                    </div>
                    <span className={`text-xs text-nowrap font-medium !leading-[1.5] block ${index === newActive ? 'text-primary' : 'text-gray'}`}>{item.name || item}</span>
                </div>
            ))}
        </div>
    )
}
