import React from 'react'

export default function Languages() {
  const table = [
    {
      languages: 'English -US',
    },
    {
      languages: 'English -US',
    }
  ]
  return (
    <div className=''>
      <ul>
        {table.map((item, index) => (
          <li key={index} className={`flex justify-between items-center px-3 py-4 border-b border-[#E2E4E9] ${index == 0 && "pt-0"}`}>
            <div className="flex items-center gap-2">
              <p className='text-base text-[#0A0D14] font-medium !leading-[150%]'>{item.languages} </p>
              {index === 0 &&
                <p className='rounded-[40px] bg-[#7856FF14] py-1 px-2 text-primary text-xs font-medium !leading-[150%]'>
                  Default
                </p>
              }
            </div>
            <button className='text-primary font-medium !leading-[150%]'>Customize</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
