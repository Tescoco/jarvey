import React, { useEffect, useState } from 'react'

export default function ProgressBar({ className = "bg-[#7856FF]/20 h-[9px]", value, }) {
    const [newValue, setNewValue] = useState(0)
    useEffect(() => { setNewValue(value > 100 ? 100 : value) }, [value])
    return (
        <div className={`relative z-1 rounded-full p-[2px] overflow-hidden ${className}`}>
            <div className={`h-[calc(100%-2px)] top-1/2 -translate-y-1/2 absolute left-0.5 bg-primary rounded-full transition-all duration-300`} style={{ width: `${newValue}%` }}></div>            
        </div>
    )
}
