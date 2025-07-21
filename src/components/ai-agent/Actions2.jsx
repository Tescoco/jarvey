import React from 'react'
import Switch from '../Switch'
import img from "../../assets/img/sop.svg"

export default function Actions2() {
    const CardList = [
        {
            title: "When a customer asks for a return or exchange",
            date: "01/19/2025",
            id: "switch1"
        },
        {
            title: "When a customer asks for a return or exchange",
            date: "01/19/2025",
            id: "switch2"
        },
        {
            title: "When a customer asks for a return or exchange",
            date: "01/19/2025",
            id: "switch3"
        },
        {
            title: "When a customer asks for a return or exchange",
            date: "01/19/2025",
            id: "switch4"
        },
        {
            title: "When a customer asks for a return or exchange",
            date: "01/19/2025",
            id: "switch5"
        },
        {
            title: "When a customer asks for a return or exchange",
            date: "01/19/2025",
            id: "switch6"
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-4 xl:gap-5'>
            {CardList.map((item, idx) => (
                <div key={idx} className='border border-[#E2E4E9] p-3 lg:p-4 rounded-lg lg:rounded-xl'>
                    <div className='flex items-center justify-between mb-2 lg:mb-3'>
                        <Switch id={item.id} />
                        <img src={img} className='w-[23px] h-[26px]' alt="" />
                    </div>
                    <p className='text-[#0A0D14] text-sm lg:text-base font-medium !leading-[1.4] mb-2 lg:mb-3'>{item.title}</p>
                    <div className='flex items-center justify-between'>
                        <button className='text-[#111111] hover:bg-primary hover:text-white hover:border-primary rounded-full transform hover:scale-[1.1] w-7 lg:w-8 h-7 lg:h-8 border border-[#E2E4E9] flex items-center justify-center'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.28379 11.3041L3.78276 11.2719L3.28379 11.3041ZM10.7163 11.3041L10.2173 11.2719V11.2719L10.7163 11.3041ZM1.60422 2.854C1.32808 2.854 1.10422 3.07786 1.10422 3.354C1.10422 3.63015 1.32808 3.854 1.60422 3.854V2.854ZM12.3959 3.854C12.672 3.854 12.8959 3.63015 12.8959 3.354C12.8959 3.07786 12.672 2.854 12.3959 2.854V3.854ZM6.18755 6.27067C6.18755 5.99453 5.96369 5.77067 5.68755 5.77067C5.41141 5.77067 5.18755 5.99453 5.18755 6.27067H6.18755ZM5.18755 9.479C5.18755 9.75515 5.41141 9.979 5.68755 9.979C5.96369 9.979 6.18755 9.75515 6.18755 9.479H5.18755ZM8.81255 6.27067C8.81255 5.99453 8.58869 5.77067 8.31255 5.77067C8.03641 5.77067 7.81255 5.99453 7.81255 6.27067H8.81255ZM7.81255 9.479C7.81255 9.75515 8.03641 9.979 8.31255 9.979C8.58869 9.979 8.81255 9.75515 8.81255 9.479H7.81255ZM8.77567 3.47863C8.8445 3.74606 9.11709 3.90705 9.38452 3.83822C9.65194 3.76939 9.81294 3.4968 9.7441 3.22937L8.77567 3.47863ZM2.27192 3.3862L2.78483 11.3363L3.78276 11.2719L3.26985 3.32181L2.27192 3.3862ZM4.44804 12.8957H9.55206V11.8957H4.44804V12.8957ZM11.2153 11.3363L11.7282 3.3862L10.7303 3.32181L10.2173 11.2719L11.2153 11.3363ZM11.2292 2.854H2.77088V3.854H11.2292V2.854ZM1.60422 3.854H2.77088V2.854H1.60422V3.854ZM11.2292 3.854H12.3959V2.854H11.2292V3.854ZM9.55206 12.8957C10.4309 12.8957 11.1587 12.2133 11.2153 11.3363L10.2173 11.2719C10.1947 11.6227 9.90359 11.8957 9.55206 11.8957V12.8957ZM2.78483 11.3363C2.84141 12.2133 3.56923 12.8957 4.44804 12.8957V11.8957C4.09651 11.8957 3.80539 11.6227 3.78276 11.2719L2.78483 11.3363ZM5.18755 6.27067V9.479H6.18755V6.27067H5.18755ZM7.81255 6.27067V9.479H8.81255V6.27067H7.81255ZM7.00006 2.104C7.85364 2.104 8.57212 2.6878 8.77567 3.47863L9.7441 3.22937C9.4296 2.00745 8.32097 1.104 7.00006 1.104V2.104ZM5.22446 3.47863C5.42801 2.6878 6.14649 2.104 7.00006 2.104V1.104C5.67916 1.104 4.57052 2.00745 4.25602 3.22937L5.22446 3.47863Z" fill="currentColor" fillOpacity="0.7" />
                            </svg>
                        </button>
                        <p className='text-gray text-xs font-medium !leading-[1.4]'>{item.date}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}
