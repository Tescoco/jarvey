import React from 'react'
import Alert from '../Alert'
import { c_16 } from '../../utilities/Classes'

export default function InfoCard({ className = "", item = null }) {
    return (
        <div className={`${c_16} ${className}`}>
            <div className="flex items-center gap-1 flex-wrap justify-between mb-3 md:mb-4 lg:mb-5">
                <span className='font-inter font-medium text-xs text-[#858585]'>{item.label}</span>
                <Alert className='!min-h-5' variant={item.marketVariant} text={`${item.marketValue}%`} plus />
            </div>
            <h4 className='text-lg !leading-normal text-[#0A0D14]'>{item.title}</h4>
        </div>
    )
}
