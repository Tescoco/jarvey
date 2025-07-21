import React, { useState } from 'react'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import { search, langList } from '../utilities/Classes'

export default function TableFilter({ children, className = "", searchClass = "w-full md:max-w-[300px] xl:max-w-[400px]", lang = false, textHidden = false, BtnClass, csv = false, hideSortDrop }) {
  const btnClass = 'flex items-center gap-1 py-2 px-[10px] font-inter font-medium text-sm text-[#111]/60 bg-white border border-solid border-[#E2E4E9] rounded-lg shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]';
  const [sortDrop, setSortDrop] = useState(false);
  const sorts = [
    `Last message`,
    `Last message`,
    `Last Received message`,
    `Last Received message `,
    `Created`,
    `Created`,
    `Updated`,
    `Updated`,
  ]
  const [defaultSort, setDefaultSort] = useState(sorts[0]);

  return (
    <div className={`flex items-center justify-between flex-wrap gap-3 mb-4 md:mb-5 ${className}`}>
      <div className={`search ${searchClass} mr-auto grow-1 md:grow-0`}>
        <Input className='mb-0' type="text" placeholder="Search..." leftIcon={search} inputClass='!h-[38px]' />
      </div>
      <div className="relative">
        <button onClick={() => setSortDrop(false)} className={`${btnClass} ${BtnClass}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.2915 3.95801H17.7082M7.2915 16.0413H12.7082M4.7915 9.99967H15.2082" stroke="#888888" strokeOpacity="1" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
          {!textHidden &&
            <span className='block pr-1'>Filter</span>
          }
        </button>
      </div>

      {/* language */}
      {lang &&
        <Dropdown btnClass="!h-[38px]" className='mb-0 min-w-[110px]' placeholder="Language" items={langList} dropDownClass="w-max !left-auto !right-0" search={true} />
      }
      {/* language */}

      {hideSortDrop &&
        <div className="relative z-[2]">
          <button className={`${btnClass} ${BtnClass} ${sortDrop === true && "!bg-black !text-white"}`} onClick={() => setSortDrop(!sortDrop)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.00133 3.95801V16.0413M5.00133 16.0413L2.5 13.5413M5.00133 16.0413L7.5 13.5413M9.79167 5.62467H16.875M13.125 14.3747H16.875M11.4583 9.99967H16.875" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {!textHidden &&
              <>
                <span className='mx-1 block'>{defaultSort}</span>
                <svg className={`${sortDrop ? '-scale-y-100' : 'scale-x-100'}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.00005 3.87852L8.71255 0.166016L9.77305 1.22652L5.00005 5.99952L0.227051 1.22652L1.28755 0.166016L5.00005 3.87852Z" fill="#111111" fillOpacity="0.5" />
                </svg>
              </>
            }
          </button>
          {sortDrop &&
            <div className="mt-1 py-1 absolute right-0 w-max max-w-[300px] bg-white border border-solid border-stroke rounded-lg max-h-[250px] overflow-y-auto flex flex-col items-start">
              {sorts.map((item, index) => (
                <span key={index} onClick={() => { setDefaultSort(item); setSortDrop(false) }} className='flex items-center gap-3 text-sm font-normal py-2 px-3 cursor-pointer text-heading hover:text-primary'>
                  <svg className={`${index % 2 != 0 && "-rotate-180"}`} width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.12416 0.956147C5.22377 0.856661 5.3588 0.800781 5.49958 0.800781C5.64036 0.800781 5.77539 0.856661 5.875 0.956147L10.125 5.20615C10.1772 5.25478 10.2191 5.31343 10.2481 5.3786C10.2771 5.44377 10.2927 5.51411 10.294 5.58544C10.2953 5.65677 10.2821 5.72763 10.2554 5.79378C10.2287 5.85993 10.1889 5.92002 10.1385 5.97047C10.088 6.02091 10.0279 6.06068 9.96179 6.0874C9.89564 6.11412 9.82479 6.12724 9.75346 6.12598C9.68213 6.12472 9.61178 6.10911 9.54661 6.08007C9.48145 6.05104 9.4228 6.00917 9.37416 5.95698L6.03083 2.61365V12.6649C6.03083 12.8058 5.97486 12.9409 5.87523 13.0405C5.7756 13.1402 5.64048 13.1961 5.49958 13.1961C5.35868 13.1961 5.22356 13.1402 5.12393 13.0405C5.0243 12.9409 4.96833 12.8058 4.96833 12.6649V2.61365L1.625 5.95698C1.57636 6.00917 1.51771 6.05104 1.45254 6.08007C1.38738 6.10911 1.31703 6.12472 1.2457 6.12598C1.17437 6.12724 1.10351 6.11412 1.03736 6.0874C0.971215 6.06068 0.911124 6.02091 0.860677 5.97047C0.810231 5.92002 0.770462 5.85993 0.743743 5.79378C0.717024 5.72763 0.703902 5.65677 0.705161 5.58544C0.706419 5.51411 0.722032 5.44377 0.751068 5.3786C0.780104 5.31343 0.821968 5.25478 0.874163 5.20615L5.12416 0.956147Z" fill="black" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          }
        </div>
      }
      {csv &&
        <button className='btn min-w-[79px] gap-1 text-gray'>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5423 10.0417L7.58992 12.9942C7.26448 13.3196 6.73685 13.3196 6.41141 12.9942L3.45898 10.0417M7.00067 1.29175V12.9584M13.0423 16.7084H0.958984" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          CSV
        </button>
      }
      {children}
    </div>
  )
}
