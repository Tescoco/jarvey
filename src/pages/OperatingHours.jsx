import React, { useState } from 'react'
import Top from '../layouts/Top';
import OperatingHour from '../components/TicketConfiguration/OperatingHour';

export default function OperatingHours() {
    return (
        <div className=''>
            <Top>
                <button className='btn bg-prim min-w-[77px]'>Update</button>
            </Top>
            <div className="p-4 md:p-5 xl:p-6">
                <OperatingHour />
            </div>
        </div>
    )
}
