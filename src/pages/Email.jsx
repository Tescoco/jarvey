import React, { useState } from 'react'
import Top from '../layouts/Top'
import MainInner from '../components/MainInner'
import { c_24 } from '../utilities/Classes'
import TableFilter from '../components/TableFilter'
import Switch from '../components/Switch'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import Checkbox from '../components/Checkbox';

import sop from '../assets/img/sop.svg'
export default function Email() {

  const emailTable = [
    {
      name: 'Jarvey Support',
      Email: 'iusydgaflijabldsfjk@gmil.com',
      Stores: "Quickstart-467uedh3uehry",
      des: 'Default',
      img: sop,
    },
  ]

  const email = [
    {
      title: 'Import',
      des: 'Import the last 2 years of emails from jandejong294@gmail.com as closed tickets.',
      name: 'Import Emails',
    },
    {
      title: 'Connect Store',
      des: 'A store connection is required to use Automate features with this email address.',
      name: 'Connect',
    },
  ]

  const textEditor = [
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.78369 10H11.0418C12.8828 10 14.3752 8.50762 14.3752 6.66667V6.45833C14.3752 4.61738 12.8828 3.125 11.0418 3.125H6.45036C5.52988 3.125 4.78369 3.87119 4.78369 4.79167V10ZM4.78369 10V15.2083C4.78369 16.1288 5.52988 16.875 6.45036 16.875H10.4168M10.8337 16.875H11.8754C13.7163 16.875 15.2087 15.3826 15.2087 13.5417V13.3333C15.2087 11.4924 13.7163 10 11.8754 10H10.8337" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
      </svg>
      ),
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.12516 3.125L12.0835 3.125M16.0418 3.125L12.0835 3.125M12.0835 3.125L7.91683 16.875M7.91683 16.875H3.9585M7.91683 16.875H11.8836" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ),
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.7915 17.2917H15.2082M4.7915 3.125V10C4.7915 12.8765 7.12335 15.2083 9.99984 15.2083C12.8763 15.2083 15.2082 12.8765 15.2082 10V3.125" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
      ),
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5.62516 9.375C5.27998 9.375 5.00016 9.65482 5.00016 10C5.00016 10.3452 5.27998 10.625 5.62516 10.625V9.375ZM14.3752 10.625C14.7203 10.625 15.0002 10.3452 15.0002 10C15.0002 9.65482 14.7203 9.375 14.3752 9.375V10.625ZM13.1252 13.75C12.78 13.75 12.5002 14.0298 12.5002 14.375C12.5002 14.7202 12.78 15 13.1252 15V13.75ZM13.1252 5C12.78 5 12.5002 5.27982 12.5002 5.625C12.5002 5.97018 12.78 6.25 13.1252 6.25V5ZM6.87516 15C7.22034 15 7.50016 14.7202 7.50016 14.375C7.50016 14.0298 7.22034 13.75 6.87516 13.75V15ZM6.87516 6.25C7.22034 6.25 7.50016 5.97018 7.50016 5.625C7.50016 5.27982 7.22034 5 6.87516 5V6.25ZM5.62516 10.625H14.3752V9.375H5.62516V10.625ZM17.9168 7.29167V12.7083H19.1668V7.29167H17.9168ZM16.8752 13.75H13.1252V15H16.8752V13.75ZM13.1252 6.25H16.8752V5H13.1252V6.25ZM0.833496 7.29167V12.7083H2.0835V7.29167H0.833496ZM3.12516 15H6.87516V13.75H3.12516V15ZM6.87516 5H3.12516V6.25H6.87516V5ZM2.0835 7.29167C2.0835 6.71637 2.54987 6.25 3.12516 6.25V5C1.85951 5 0.833496 6.02601 0.833496 7.29167H2.0835ZM17.9168 12.7083C17.9168 13.2836 17.4505 13.75 16.8752 13.75V15C18.1408 15 19.1668 13.974 19.1668 12.7083H17.9168ZM0.833496 12.7083C0.833496 13.974 1.85951 15 3.12516 15V13.75C2.54987 13.75 2.0835 13.2836 2.0835 12.7083H0.833496ZM19.1668 7.29167C19.1668 6.02601 18.1408 5 16.8752 5V6.25C17.4505 6.25 17.9168 6.71637 17.9168 7.29167H19.1668Z" fill="currentColor" fillOpacity="0.5" />
      </svg>),
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5.48816 11.1785L5.9301 11.6205V11.6205L5.48816 11.1785ZM7.84518 11.1785L8.28712 10.7366L7.84518 11.1785ZM4.79167 3.75H15.2083V2.5H4.79167V3.75ZM16.25 4.79167V15.2083H17.5V4.79167H16.25ZM3.56694 13.9836L5.9301 11.6205L5.04621 10.7366L2.68306 13.0997L3.56694 13.9836ZM3.75 15.2083V13.5417H2.5V15.2083H3.75ZM3.75 13.5417V4.79167H2.5V13.5417H3.75ZM7.40324 11.6205L13.0997 17.3169L13.9836 16.4331L8.28712 10.7366L7.40324 11.6205ZM15.2083 16.25H13.5417V17.5H15.2083V16.25ZM13.5417 16.25H4.79167V17.5H13.5417V16.25ZM5.9301 11.6205C6.33689 11.2137 6.99644 11.2137 7.40324 11.6205L8.28712 10.7366C7.39217 9.84162 5.94116 9.84162 5.04621 10.7366L5.9301 11.6205ZM2.5 15.2083C2.5 16.474 3.52601 17.5 4.79167 17.5V16.25C4.21637 16.25 3.75 15.7836 3.75 15.2083H2.5ZM16.25 15.2083C16.25 15.7836 15.7836 16.25 15.2083 16.25V17.5C16.474 17.5 17.5 16.474 17.5 15.2083H16.25ZM15.2083 3.75C15.7836 3.75 16.25 4.21637 16.25 4.79167H17.5C17.5 3.52601 16.474 2.5 15.2083 2.5V3.75ZM4.79167 2.5C3.52601 2.5 2.5 3.52601 2.5 4.79167H3.75C3.75 4.21637 4.21637 3.75 4.79167 3.75V2.5ZM13.125 7.91667C13.125 8.49196 12.6586 8.95833 12.0833 8.95833V10.2083C13.349 10.2083 14.375 9.18232 14.375 7.91667H13.125ZM12.0833 8.95833C11.508 8.95833 11.0417 8.49196 11.0417 7.91667H9.79167C9.79167 9.18232 10.8177 10.2083 12.0833 10.2083V8.95833ZM11.0417 7.91667C11.0417 7.34137 11.508 6.875 12.0833 6.875V5.625C10.8177 5.625 9.79167 6.65101 9.79167 7.91667H11.0417ZM12.0833 6.875C12.6586 6.875 13.125 7.34137 13.125 7.91667H14.375C14.375 6.65101 13.349 5.625 12.0833 5.625V6.875Z" fill="currentColor" fillOpacity="0.5" />
      </svg>),
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5.20817 6.25008C5.78347 6.25008 6.24984 5.78371 6.24984 5.20841C6.24984 4.63312 5.78347 4.16675 5.20817 4.16675C4.63287 4.16675 4.1665 4.63312 4.1665 5.20841C4.1665 5.78371 4.63287 6.25008 5.20817 6.25008Z" fill="currentColor" />
        <path d="M10.8332 10.784V14.2166C10.8332 14.7222 11.4023 15.0185 11.8166 14.7286L14.2684 13.0123C14.6238 12.7635 14.6238 12.2371 14.2684 11.9883L11.8166 10.272C11.4023 9.98206 10.8332 10.2784 10.8332 10.784Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1.6665 3.95841C1.6665 2.69276 2.69252 1.66675 3.95817 1.66675H11.0415C12.3072 1.66675 13.3332 2.69276 13.3332 3.95841V6.66675H16.0415C17.3072 6.66675 18.3332 7.69276 18.3332 8.95841V16.0417C18.3332 17.3074 17.3072 18.3334 16.0415 18.3334H8.95817C7.69252 18.3334 6.6665 17.3074 6.6665 16.0417V13.3334H3.95817C2.69252 13.3334 1.6665 12.3074 1.6665 11.0417V3.95841ZM12.0832 3.95841V6.66675H8.95817C7.77869 6.66675 6.80733 7.55781 6.68052 8.70348L6.26941 8.4294C5.49964 7.91622 4.4968 7.91622 3.72703 8.4294L2.9165 8.96975V3.95841C2.9165 3.38312 3.38287 2.91675 3.95817 2.91675H11.0415C11.6168 2.91675 12.0832 3.38312 12.0832 3.95841ZM5.57603 9.46946L6.6665 10.1964V12.0834H3.95817C3.38287 12.0834 2.9165 11.617 2.9165 11.0417V10.4721L4.42041 9.46946C4.7703 9.2362 5.22614 9.2362 5.57603 9.46946ZM7.9165 16.0417V8.95841C7.9165 8.38312 8.38287 7.91675 8.95817 7.91675H16.0415C16.6168 7.91675 17.0832 8.38312 17.0832 8.95841V16.0417C17.0832 16.617 16.6168 17.0834 16.0415 17.0834H8.95817C8.38287 17.0834 7.9165 16.617 7.9165 16.0417Z" fill="currentColor" />
      </svg>),
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.74984 7.91675C8.74984 8.6071 8.28347 9.16675 7.70817 9.16675C7.13287 9.16675 6.6665 8.6071 6.6665 7.91675C6.6665 7.22639 7.13287 6.66675 7.70817 6.66675C8.28347 6.66675 8.74984 7.22639 8.74984 7.91675Z" fill="currentColor" />
        <path d="M13.3332 7.91675C13.3332 8.6071 12.8668 9.16675 12.2915 9.16675C11.7162 9.16675 11.2498 8.6071 11.2498 7.91675C11.2498 7.22639 11.7162 6.66675 12.2915 6.66675C12.8668 6.66675 13.3332 7.22639 13.3332 7.91675Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15.0085 4.99141C12.2423 2.22519 7.75739 2.22519 4.99117 4.99141C2.22495 7.75761 2.22495 12.2425 4.99117 15.0088C7.75737 17.775 12.2423 17.775 15.0085 15.0087C17.7747 12.2425 17.7747 7.75763 15.0085 4.99141ZM4.10728 4.10753C7.36166 0.853155 12.638 0.853154 15.8924 4.10753C19.1468 7.3619 19.1468 12.6383 15.8924 15.8926C12.638 19.147 7.36164 19.147 4.10728 15.8926C0.852911 12.6383 0.85291 7.36189 4.10728 4.10753Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.20113 11.9152C7.4452 11.6711 7.84093 11.6711 8.08501 11.9152C9.14267 12.9728 10.8575 12.9728 11.9152 11.9152C12.1592 11.6711 12.555 11.6711 12.7991 11.9152C13.0431 12.1592 13.0431 12.555 12.7991 12.799C11.2532 14.3449 8.74694 14.3449 7.20112 12.799C6.95705 12.555 6.95705 12.1592 7.20113 11.9152Z" fill="currentColor" />
      </svg>),
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.7085 6.45841V5.00008C12.7085 3.50431 11.496 2.29175 10.0002 2.29175C8.50443 2.29175 7.29187 3.50431 7.29187 5.00008V6.45841M5.47364 17.7084H14.5268C15.5445 17.7084 16.3246 16.8042 16.1754 15.7975L15.0026 7.88083C14.8815 7.06361 14.1801 6.45841 13.3539 6.45841H6.64648C5.82034 6.45841 5.11888 7.06361 4.99781 7.88083L3.82497 15.7975C3.67582 16.8042 4.45591 17.7084 5.47364 17.7084Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" />
      </svg>),
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2.2915 9.30139V3.95841C2.2915 3.03794 3.0377 2.29175 3.95817 2.29175H9.30115C9.74317 2.29175 10.1671 2.46734 10.4797 2.7799L17.1547 9.4549C17.8055 10.1058 17.8055 11.1611 17.1547 11.8119L11.8117 17.1549C11.1608 17.8058 10.1055 17.8058 9.45466 17.1549L2.77966 10.4799C2.4671 10.1673 2.2915 9.74342 2.2915 9.30139Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" />
        <path d="M6.87484 6.25008C6.87484 6.59526 6.59502 6.87508 6.24984 6.87508C5.90466 6.87508 5.62484 6.59526 5.62484 6.25008C5.62484 5.9049 5.90466 5.62508 6.24984 5.62508C6.59502 5.62508 6.87484 5.9049 6.87484 6.25008Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>),
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.7915 8.95841V12.7084C4.7915 15.4698 7.03008 17.7084 9.7915 17.7084H10.2082C12.9696 17.7084 15.2082 15.4698 15.2082 12.7084V5.83341C15.2082 3.87741 13.6225 2.29175 11.6665 2.29175C9.7105 2.29175 8.12484 3.87741 8.12484 5.83341V12.3959C8.12484 13.3739 8.91767 14.1667 9.89567 14.1667C10.8737 14.1667 11.6665 13.3739 11.6665 12.3959V6.45841" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" />
      </svg>),
    },
  ]

  const group = [
    {
      titel: 'Tag tickets with Gmail categories',
      des: 'Categories include Social, Promotions, Updates, and Forums',
    },
    {
      titel: 'Group emails into conversations',
      des: 'Group emails if they have the same recipients, sender, or subject.',
    },
  ]

  const platform = [
    {
      title: 'Send emails via Jarvey email delivery platform (recommended)',
      des: 'Recommended to avoid deliverability issues.',
    },
    {
      title: 'Send emails via Gmail API',
      des: 'Potential risk of deliverability issues with high email volume.',
    },
  ]
  const tabBtns = [
    'Email',
    'Jarvey Support',
  ]
  const [activeData, setActiveData] = useState(tabBtns[0])
  return (
    <>
      <Top />
      <MainInner>

        <div className="">
          <p className='text-sm mb-4 md:mb-5 lg:mb-6'>Connect your support email address and respond to your customers from Jarvey</p>
          <div className={`${c_24}`}>
            <TableFilter />
              <div className="overflow-auto">
                <table className='w-full table'>
                  <thead>
                    <tr className="bg-[#F6F8FA]">
                      {["Email", "Stores ", "Status",].map((item, index) => (
                        <th className='text-left text-sm text-[#525866] !font-normal py-2 px-3 last:text-right' key={index}>{item} </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {emailTable.map((item, index) => (
                      <tr key={index} className='!border-b border-[#E2E4E9]'>
                        <td className='md:text-sm text-[#0A0D14] font-medium'>
                          <div className="flex items-center gap-2">
                            <p className='text-heading font-semibold'>{item.name}</p>
                            <p>{item.Email}</p>
                            <a href='' className='text-sm font-inter font-medium !text-[#176448] py-1 px-3 rounded-[41px] bg-[#E8EFED] max-w-max'>{item.des}</a>
                          </div>
                        </td>
                        <td className='text-[#0A0D14] md:text-sm font-medium'>
                          <div className="flex items-center gap-2">
                            <img src={item.img} alt="" />
                            <p>{item.Stores}</p>
                          </div>
                        </td>
                        <td>
                          <div className=" flex items-center justify-end">
                            <button>
                              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.879 10.5004L7.1665 6.78794L8.227 5.72744L13 10.5004L8.227 15.2734L7.1665 14.2129L10.879 10.5004Z" fill="#111111" fillOpacity="0.5" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        </div>

        {activeData &&
          <div className="">
            <div className="mb-4 md:mb-5 lg:mb-6">
              <p className='text-sm'>Preferences</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 md:mb-5 lg:mb-6">
              {email.map((item, index) => (
                <div className={`${c_24} p-5`} key={index}>
                  <div className="mb-2">
                    <h3 className='text-[22px] text-heading font-semibold leading-[140%] mb-1'>{item.title}</h3>
                    <p className='text-sm '>{item.des}</p>
                  </div>
                  <button className='btn text-primary border-primary !font-semibold'>{item.name}</button>
                </div>
              ))}
            </div>
            <div className="">
              <h3 className='text-[22px] text-heading font-semibold font-inter !leading-[150%] mb-4'>Settings</h3>
              <div className="flex items-center gap-3 lg:gap-4 mb-4">
                <p className='text-xs md:text-sm text-heading font-semibold !leading-[150%]'>Email Address</p>
                <a href="" className='text-xs md:text-sm font-medium'>examples@gmail.com</a>
                <span className='flex items-center gap-1 text-primary text-xs md:text-sm font-medium !leading-[150%]'>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_11822_118363)">
                      <path d="M7 0C3.13403 0 0 3.13403 0 7C0 10.8662 3.13403 14 7 14C10.8662 14 14 10.8662 14 7C14 3.13403 10.8662 0 7 0ZM7 13.1388C3.62272 13.1388 0.875 10.3773 0.875 6.99997C0.875 3.62269 3.62272 0.874973 7 0.874973C10.3773 0.874973 13.125 3.6227 13.125 6.99997C13.125 10.3772 10.3773 13.1388 7 13.1388ZM9.79366 4.43866L5.68661 8.5715L3.83708 6.72197C3.66624 6.55113 3.3893 6.55113 3.21824 6.72197C3.04739 6.89281 3.04739 7.16975 3.21824 7.34059L5.38364 9.50622C5.55449 9.67684 5.83142 9.67684 6.00249 9.50622C6.02217 9.48653 6.03903 9.46508 6.05434 9.44278L10.4127 5.05749C10.5833 4.88664 10.5833 4.6097 10.4127 4.43866C10.2417 4.26781 9.96472 4.26781 9.79366 4.43866Z" fill="#7856FF" />
                    </g>
                    <defs>
                      <clipPath id="clip0_11822_118363">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Set as default</span>
              </div>
              <div className="mb-4">
                <Input className='' type='text' placeholder="Jan de jong" label="Display Name" required={true} />
                <p>The display name appears on outgoing emails. It cannot contains the following character @.:;{'<>[]'}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className='text-sm text-heading font-inter font-semibold !leading-[150%] mb-1'>Signature</h3>
              <div className="flex flex-col justify-between overflow-y-auto min-h-[130px] p-4 pt-3 bg-white border border-stroke rounded-xl ">
                <div className="flex items-center flex-wrap md:flex-nowrap gap-2.5">
                  <p className='text-sm font-medium'>Current Agent</p>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0001 10.8805L13.7126 7.16797L14.7731 8.22847L10.0001 13.0015L5.22705 8.22847L6.28755 7.16797L10.0001 10.8805Z" fill="#111111" fillOpacity="0.5" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <ul className="flex items-center gap-2 py-2">
                    {textEditor.map((item, index) => (
                      <li key={index}>
                        <button className='text-[#111111]/50 hover:text-primary'>{item.icon} </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-4">
              {group.map((item, index) => (
                <div className="flex items-start gap-3 mb-4 cursor-pointer" key={index}>
                  <Switch id={index} className='mt-1' />
                  <div className="">
                    <h3 className='text-sm text-heading font-semibold mb-0.5'>{item.titel}</h3>
                    <p className='text-xs font-medium'>{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <h3 className='text-sm text-heading font-semibold mb-0.5'>Outbound Email Delivery Settings</h3>
              <p className='text-xs font-medium'>To avoid deliverability issues that can occur when using Gmail's API, completeDomain Verification to enable Gorgias' email delivery platform.</p>
            </div>
            <div className="mb-4 md:mb-5 lg:mb-6">
              {platform.map((item, index) => (
                <div className="flex items-start gap-3 mb-4" key={index}>
                  <Checkbox className='mt-0.5' name="radio" type='radio' id={`${index + 2}`} />
                  <div className="">
                    <h3 className='text-sm text-heading font-semibold mb-0.5'>{item.title}</h3>
                    <p className='text-xs font-medium'>{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <button className='btn border-none flex items-center gap-2 text-sm !text-[#FE4333] font-medium !leading-[150%] hover:!bg-transparent hover:!scale-100'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.28358 11.3056L3.78254 11.2734L3.28358 11.3056ZM10.7161 11.3056L10.2171 11.2734V11.2734L10.7161 11.3056ZM1.604 2.85547C1.32786 2.85547 1.104 3.07933 1.104 3.35547C1.104 3.63161 1.32786 3.85547 1.604 3.85547V2.85547ZM12.3957 3.85547C12.6718 3.85547 12.8957 3.63161 12.8957 3.35547C12.8957 3.07933 12.6718 2.85547 12.3957 2.85547V3.85547ZM6.18734 6.27214C6.18734 5.99599 5.96348 5.77214 5.68734 5.77214C5.4112 5.77214 5.18734 5.99599 5.18734 6.27214H6.18734ZM5.18734 9.48047C5.18734 9.75661 5.4112 9.98047 5.68734 9.98047C5.96348 9.98047 6.18734 9.75661 6.18734 9.48047H5.18734ZM8.81234 6.27214C8.81234 5.99599 8.58848 5.77214 8.31234 5.77214C8.0362 5.77214 7.81234 5.99599 7.81234 6.27214H8.81234ZM7.81234 9.48047C7.81234 9.75661 8.0362 9.98047 8.31234 9.98047C8.58848 9.98047 8.81234 9.75661 8.81234 9.48047H7.81234ZM8.77545 3.4801C8.84429 3.74752 9.11688 3.90852 9.3843 3.83969C9.65173 3.77086 9.81272 3.49827 9.74389 3.23084L8.77545 3.4801ZM2.77067 3.35547L2.27171 3.38766L2.78462 11.3378L3.28358 11.3056L3.78254 11.2734L3.26963 3.32328L2.77067 3.35547ZM4.44783 12.3971V12.8971H9.55185V12.3971V11.8971H4.44783V12.3971ZM10.7161 11.3056L11.2151 11.3378L11.728 3.38766L11.229 3.35547L10.73 3.32328L10.2171 11.2734L10.7161 11.3056ZM11.229 3.35547V2.85547H2.77067V3.35547V3.85547H11.229V3.35547ZM1.604 3.35547V3.85547H2.77067V3.35547V2.85547H1.604V3.35547ZM11.229 3.35547V3.85547H12.3957V3.35547V2.85547H11.229V3.35547ZM9.55185 12.3971V12.8971C10.4307 12.8971 11.1585 12.2148 11.2151 11.3378L10.7161 11.3056L10.2171 11.2734C10.1945 11.6242 9.90337 11.8971 9.55185 11.8971V12.3971ZM3.28358 11.3056L2.78462 11.3378C2.8412 12.2148 3.56901 12.8971 4.44783 12.8971V12.3971V11.8971C4.0963 11.8971 3.80518 11.6242 3.78254 11.2734L3.28358 11.3056ZM5.68734 6.27214H5.18734V9.48047H5.68734H6.18734V6.27214H5.68734ZM8.31234 6.27214H7.81234V9.48047H8.31234H8.81234V6.27214H8.31234ZM6.99985 1.60547V2.10547C7.85342 2.10547 8.57191 2.68926 8.77545 3.4801L9.25967 3.35547L9.74389 3.23084C9.42939 2.00891 8.32075 1.10547 6.99985 1.10547V1.60547ZM4.74003 3.35547L5.22424 3.4801C5.42779 2.68926 6.14628 2.10547 6.99985 2.10547V1.60547V1.10547C5.67894 1.10547 4.57031 2.00891 4.25581 3.23084L4.74003 3.35547Z" fill="#FE4333" />
                </svg>
                Delete Integration</button>
              <button className='btn bg-primary text-white'>Save Changs</button>
            </div>
          </div>
        }
      </MainInner>
    </>
  )
}
