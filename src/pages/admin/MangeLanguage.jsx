import React, { useState } from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Input from '../../components/Input'
import Switch from '../../components/Switch'
import Modal from '../../components/Modal'
import { c_24, search, langList } from '../../utilities/Classes'
import Dropdown from '../../components/Dropdown'


export default function MangeLanguage() {
  const [activeData, setActiveData] = useState('')
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const tdStyle = '!font-medium !text-heading'

  const [langWithFlag, setLangWithFlag] = useState([
    {
      name: 'Bangladesh',
      flag: 'https://flagcdn.com/w320/bd.png',
      set: false,
      code: 'bd',
      status: true,
    },
    {
      name: 'English',
      flag: 'https://flagcdn.com/w320/us.png',
      set: true,
      code: 'en',
      status: true,
    },
  ])

  return (
    <>
      <Top title="Manage Language">
        <button className='btn shadow text-white px-3 min-w-max' onClick={() => setAddNew(true)}>New Language</button>
      </Top>
      <MainInner>
        <div className={`${c_24}`}>
          <Input className='mb-5' type="text" placeholder="Search..." leftIcon={search} inputClass='!h-9' />
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  {['#', 'Language', 'Code', 'Status', 'Actions'].map((item, index) => (
                    <th key={index} className={`${index === 4 ? '!text-right' : ''}`}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {langWithFlag.map((item, index) => (
                  <tr key={index}>
                    <td width={36} className={`${tdStyle}`}>{index + 1}</td>
                    <td width={350}>
                      <div className="flex items-center gap-2">
                        <span className="flex-none size-8 rounded-full overflow-hidden relative">
                          <img
                            src={item.flag}
                            alt=""
                            className="size-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          />
                        </span>
                        <span className='text-sm font-medium font-inter text-heading'>{item.name}</span>
                        {item.set ?
                          <span className='flex items-center justify-center rounded-full bg-[#176448]/10 text-[#166448] text-sm font-medium font-inter py-1 px-3'>Default</span>
                          :
                          <button className='border border-solid border-primary py-1 px-2 text-primary font-inter font-medium text-xs rounded-full'>Make Default</button>
                        }
                      </div>
                    </td>
                    <td className={`${tdStyle} uppercase`}>{item.code}</td>
                    <td>
                      <Switch id={item.code} checked={item.status} />
                    </td>
                    <td width={170}>
                      <div className="flex items-center justify-end gap-3">
                        <button className='text-[#111]/70 hover:text-primary hover:scale-105'>
                          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.62479 4.375C9.75276 4.37504 9.87794 4.41251 9.9849 4.48278C10.0919 4.55305 10.1759 4.65306 10.2268 4.7705L13.0705 11.333C13.1073 11.4125 13.1279 11.4985 13.1309 11.586C13.134 11.6735 13.1195 11.7607 13.0883 11.8425C13.0571 11.9244 13.0099 11.9991 12.9493 12.0624C12.8888 12.1257 12.8162 12.1762 12.7359 12.211C12.6555 12.2458 12.569 12.2642 12.4815 12.265C12.3939 12.2659 12.3071 12.2492 12.2261 12.216C12.1451 12.1828 12.0715 12.1337 12.0098 12.0716C11.948 12.0095 11.8993 11.9357 11.8665 11.8545L11.2785 10.5H7.97016L7.38391 11.8545C7.31476 12.0143 7.18496 12.14 7.02308 12.2041C6.86121 12.2682 6.6805 12.2653 6.52072 12.1962C6.36095 12.127 6.23519 11.9972 6.17111 11.8354C6.10703 11.6735 6.10988 11.4928 6.17904 11.333L9.02279 4.7705C9.07364 4.65306 9.15772 4.55305 9.26468 4.48278C9.37164 4.41251 9.49681 4.37504 9.62479 4.375ZM8.53979 9.1875H10.7098L9.62479 6.6815L8.53979 9.1875ZM4.37479 0.875001C4.54883 0.875001 4.71575 0.944141 4.83883 1.06721C4.9619 1.19028 5.03104 1.3572 5.03104 1.53125V2.63463C5.79148 2.6566 6.55026 2.71822 7.30429 2.81925C7.47683 2.84246 7.63308 2.93325 7.73868 3.07167C7.84427 3.21008 7.89056 3.38477 7.86735 3.55731C7.84414 3.72985 7.75335 3.88611 7.61493 3.9917C7.47652 4.0973 7.30183 4.14358 7.12929 4.12038C6.93679 4.09413 6.7437 4.07079 6.55004 4.05038C6.24149 5.11176 5.77989 6.12251 5.17979 7.05075C5.38745 7.31675 5.60679 7.57138 5.83779 7.81463C5.95788 7.94064 6.023 8.10919 6.01881 8.28322C6.01463 8.45724 5.94148 8.62247 5.81547 8.74256C5.68946 8.86266 5.52091 8.92777 5.34688 8.92359C5.17286 8.91941 5.00763 8.84626 4.88754 8.72025C4.71015 8.5339 4.53913 8.34158 4.37479 8.14363C3.66022 9.00441 2.82258 9.75508 1.88891 10.3714C1.74376 10.4628 1.56856 10.4938 1.40083 10.4577C1.23311 10.4216 1.08621 10.3212 0.991594 10.1781C0.89698 10.0349 0.862178 9.86046 0.894643 9.69199C0.927109 9.52352 1.02426 9.37446 1.16529 9.27675C2.08212 8.66961 2.89421 7.91752 3.56979 7.04988C3.39681 6.78319 3.23508 6.50936 3.08504 6.22913C3.003 6.07561 2.98531 5.8958 3.03585 5.72925C3.08639 5.56269 3.20103 5.42304 3.35454 5.341C3.50805 5.25897 3.68786 5.24127 3.85441 5.29181C4.02097 5.34236 4.16063 5.45699 4.24266 5.6105L4.37391 5.84763C4.71341 5.25263 4.99341 4.61825 5.20691 3.95413C4.00852 3.907 2.8083 3.96262 1.61941 4.12038C1.44687 4.14358 1.27218 4.0973 1.13377 3.9917C0.995352 3.88611 0.904555 3.72985 0.881349 3.55731C0.858142 3.38477 0.904428 3.21008 1.01002 3.07167C1.11562 2.93325 1.27187 2.84246 1.44441 2.81925C2.19108 2.7195 2.94883 2.65796 3.71766 2.63463V1.53125C3.71766 1.445 3.73466 1.35959 3.7677 1.27991C3.80073 1.20024 3.84915 1.12785 3.91018 1.0669C3.97121 1.00595 4.04366 0.957631 4.12338 0.924703C4.2031 0.891775 4.28853 0.874886 4.37479 0.875001Z" fill="currentColor" />
                          </svg>
                        </button>
                        <button onClick={() => {
                          setActiveData(item);
                          setDeleteAlert(true)
                        }} className='text-[#111]/70 hover:text-primary hover:scale-105'>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.28358 11.3056L3.78254 11.2734L3.28358 11.3056ZM10.7161 11.3056L10.2171 11.2734V11.2734L10.7161 11.3056ZM1.604 2.85547C1.32786 2.85547 1.104 3.07933 1.104 3.35547C1.104 3.63161 1.32786 3.85547 1.604 3.85547V2.85547ZM12.3957 3.85547C12.6718 3.85547 12.8957 3.63161 12.8957 3.35547C12.8957 3.07933 12.6718 2.85547 12.3957 2.85547V3.85547ZM6.18734 6.27214C6.18734 5.99599 5.96348 5.77214 5.68734 5.77214C5.4112 5.77214 5.18734 5.99599 5.18734 6.27214H6.18734ZM5.18734 9.48047C5.18734 9.75661 5.4112 9.98047 5.68734 9.98047C5.96348 9.98047 6.18734 9.75661 6.18734 9.48047H5.18734ZM8.81234 6.27214C8.81234 5.99599 8.58848 5.77214 8.31234 5.77214C8.0362 5.77214 7.81234 5.99599 7.81234 6.27214H8.81234ZM7.81234 9.48047C7.81234 9.75661 8.0362 9.98047 8.31234 9.98047C8.58848 9.98047 8.81234 9.75661 8.81234 9.48047H7.81234ZM8.77545 3.4801C8.84429 3.74752 9.11688 3.90852 9.3843 3.83969C9.65173 3.77086 9.81272 3.49827 9.74389 3.23084L8.77545 3.4801ZM2.77067 3.35547L2.27171 3.38766L2.78462 11.3378L3.28358 11.3056L3.78254 11.2734L3.26963 3.32328L2.77067 3.35547ZM4.44783 12.3971V12.8971H9.55185V12.3971V11.8971H4.44783V12.3971ZM10.7161 11.3056L11.2151 11.3378L11.728 3.38766L11.229 3.35547L10.73 3.32328L10.2171 11.2734L10.7161 11.3056ZM11.229 3.35547V2.85547H2.77067V3.35547V3.85547H11.229V3.35547ZM1.604 3.35547V3.85547H2.77067V3.35547V2.85547H1.604V3.35547ZM11.229 3.35547V3.85547H12.3957V3.35547V2.85547H11.229V3.35547ZM9.55185 12.3971V12.8971C10.4307 12.8971 11.1585 12.2148 11.2151 11.3378L10.7161 11.3056L10.2171 11.2734C10.1945 11.6242 9.90337 11.8971 9.55185 11.8971V12.3971ZM3.28358 11.3056L2.78462 11.3378C2.8412 12.2148 3.56901 12.8971 4.44783 12.8971V12.3971V11.8971C4.0963 11.8971 3.80518 11.6242 3.78254 11.2734L3.28358 11.3056ZM5.68734 6.27214H5.18734V9.48047H5.68734H6.18734V6.27214H5.68734ZM8.31234 6.27214H7.81234V9.48047H8.31234H8.81234V6.27214H8.31234ZM6.99985 1.60547V2.10547C7.85342 2.10547 8.57191 2.68926 8.77545 3.4801L9.25967 3.35547L9.74389 3.23084C9.42939 2.00891 8.32075 1.10547 6.99985 1.10547V1.60547ZM4.74003 3.35547L5.22424 3.4801C5.42779 2.68926 6.14628 2.10547 6.99985 2.10547V1.60547V1.10547C5.67894 1.10547 4.57031 2.00891 4.25581 3.23084L4.74003 3.35547Z" fill="currentColor" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!langWithFlag.length &&
                  <td colSpan={5} className='text-center pt-4'>No data..</td>
                }
              </tbody>
            </table>
          </div>
        </div>

        {deleteAlert &&
          <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
            <p className='text-xl mb-4'>Do you want delete? <strong className='text-heading font-medium'>{activeData.name}</strong></p>
            <div className="flex item-center gap-3 justify-center">
              <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'>No</button>
              <button onClick={() => {
                setLangWithFlag(prev => prev.filter((item) => item != activeData))
                setDeleteAlert(false)
              }} className='text-center btn min-w-24 shadow text-white'>Yes</button>
            </div>
          </Modal>
        }

        {addNew &&
          <Modal innerClass='w-[calc(100%-24px)] max-w-[570px]' closeIconHide={false}>
            <h4 className='mb-4 md:mb-6 text-lg md:text-xl xl:text-2xl'>Add Language</h4>
            <Dropdown
              className='mb-4 md:mb-6'
              label="Name"
              required={true}
              search={true}
              dropDownClass='!max-w-full'
              items={langList}
            />
            <div className="flex items-center gap-4 justify-end">
              <button onClick={() => setAddNew(false)} className='btn min-w-[70px] !px-0 border-primary text-primary hover:text-white'>Cancel</button>
              <button onClick={() => {
                setAddNew(false)
              }} className='shadow btn min-w-[70px] !px-0 text-white'>Add</button>
            </div>
          </Modal>
        }
      </MainInner>
    </>
  )
}
