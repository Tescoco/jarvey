import React from 'react'
import Switch from '../Switch'

export default function Campaigns() {

  const table = [
    {
      text: 'Welcome visitors',
    },
    {
      text: 'Search page',
    },
    {
      text: 'Product pages',
    },
  ]

  return (
    <div>
      <div className="text-center max-w-[586px] mx-auto mb-4 lg:mb-5">
        <h4 className='text-base lg:text-lg font-semibold !leading-[150%] text-[#0A0D14] mb-1'>Campaigns have a new home!</h4>
        <p className='text-xs text-[#858585] font-medium !leading-[150%]'>You can now manage your campaigns from the Convert page by clicking the top left menu in the sidebar, or the Edit in Convert Settings button below.</p>
      </div>
      <div className="md:flex items-center justify-between mb-3 lg:mb-4">
        <p className='text-xs text-[#858585] font-medium !leading-[150%]'>Campaigns displayed through this Chat:</p>
        <a href="#" className='text-primary text-xs !underline'>Edit In Convert Settings</a>
      </div>
      <ul>
        {table.map((item, index) => (
          <li key={index} className={`flex items-center gap-[60px] px-3 py-4 border-b border-[#E2E4E9]`}>
            <Switch id={index + 1} checked />
            <label htmlFor={index + 1} className='text-sm text-[#0A0D14] font-medium !leading-normal cursor-pointer'>{item.text} </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
