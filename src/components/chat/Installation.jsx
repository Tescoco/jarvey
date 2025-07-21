import React from 'react'
import { common_card } from '../../utilities/Classes'
import sofi from '../../assets/img/chat/sofi.png'

export default function Installation() {

  const card = [
    {
      title: 'Quick installation for Shopify',
      des: 'To add Chat, click Reinstall then Save in the new Shopify window without editing anything.',
      button: 'Reinstall',
    },
    {
      title: 'Shopify checkout and thank you pages',
      des: 'To add Chat, click Reinstall then Save in the new Shopify window without editing anything.',
      button: 'Install',
    },
    {
      title: 'Manual installation',
      des: 'Add the chat widget to non-Shopify stores, Shopify Headless, specific pages on a Shopify store, or any other website by following the instructions below. For more details, see this article..',
      button: 'Install',
    },
  ]

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center mb-4">
        <div className="">
          <h4 className='text-base lg:text-lg font-semibold !leading-[150%] text-[#0A0D14] mb-1'>Connect store</h4>
          <p className='text-xs text-[#858585] font-medium !leading-[150%]'>A store connection is required to use Automate features in chat and to enable quick installation for Shopify stores.</p>
        </div>
        <div className={`${common_card} max-w-[391px] w-full flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <img src={sofi} alt="" />
            <p className='text-xs font-medium'>quickstart-b234543</p>
          </div>
          <div className="flex items-center gap-3 pr-1">
            <button className='text-primary text-xs font-semibold'>Change</button>
            <button className='text-[#FE4333] text-xs font-semibold'>Disconnect</button>
          </div>
        </div>
      </div>
      <div className="">
        <p className='mb-3 lg:mb-4 font-semibold text-sm text-[#0A0D14]'>Installation method</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {card.map((item, index) => (
            <div className={`${common_card} !p-4 min-h-[190px] md:min-h-[220px] flex flex-col items-start justify-between`} key={index}>
              <div className="text">
                <h4 className='mb-2 line-clamp-1 text-base lg:text-lg font-semibold text-[#111111] !leading-[150%]'>{item.title} </h4>
                <p className='line-clamp-4'>{item.des} </p>
              </div>
              <button className='btn !bg-primary !text-white !min-w-[84px]'>{item.button} </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
