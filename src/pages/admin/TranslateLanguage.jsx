import React, { useState } from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import { c_24, search } from '../../utilities/Classes'
import Input from '../../components/Input'
import Modal from '../../components/Modal'

export default function TranslateLanguage() {
  const [activeData, setActiveData] = useState('')
  const [deleteAlert, setDeleteAlert] = useState(false);

  const [langList, setLangList] = useState([
    {
      key: 'Back to home ',
      value: '',
    },
    {
      key: 'Back to home ',
      value: '',
    },
    {
      key: 'Back to home ',
      value: '',
    },
    {
      key: 'Back to home ',
      value: '',
    },
    {
      key: 'Back to home ',
      value: '',
    },
    {
      key: 'Back to home ',
      value: '',
    },
    {
      key: 'Back to home ',
      value: '',
    },
    {
      key: 'Back to home ',
      value: '',
    },
    {
      key: 'Back to home ',
      value: '',
    },
  ])
  const tdStyle = '!font-medium !text-heading'

  return (
    <>
      <Top></Top>
      <MainInner>
        <div className={`${c_24}`}>
          <Input className='mb-5' type="text" placeholder="Search..." leftIcon={search} inputClass='!h-9' />
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  {['#', 'Key', 'Status', 'Actions'].map((item, index) => (
                    <th key={index} className={`${index === 3 ? '!text-right' : ''}`}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {langList.map((item, index) => (
                  <tr key={index}>
                    <td width={36} className={`${tdStyle}`}>{index + 1}</td>
                    <td className={`${tdStyle}`}>{item.key}</td>
                    <td>
                      <input type="text" className='w-full max-w-[500px] h-10 px-3 text-xs font-inter font-medium text-[#858585] rounded-[10px] border border-solid border-stroke focus:border-primary/50' placeholder='Back to home' onChange={(e) => e.target.value} />
                    </td>
                    <td width={170}>
                      <div className="flex items-center justify-end gap-3">
                        <button className='text-[#111]/70 hover:text-primary hover:scale-105'>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.8335 13V9.82334C9.83332 9.68403 9.80569 9.54611 9.75217 9.41749C9.69866 9.28886 9.62031 9.17205 9.52162 9.07373C9.42292 8.9754 9.30581 8.8975 9.17699 8.84447C9.04816 8.79144 8.91014 8.76432 8.77083 8.76467H5.2295C5.09018 8.76432 4.95217 8.79144 4.82334 8.84447C4.69451 8.8975 4.57741 8.9754 4.47871 9.07373C4.38002 9.17205 4.30167 9.28886 4.24815 9.41749C4.19464 9.54611 4.167 9.68403 4.16683 9.82334V13M9.8335 1.19001V2.76467C9.83332 2.90399 9.80569 3.0419 9.75217 3.17053C9.69866 3.29915 9.62031 3.41597 9.52162 3.51429C9.42292 3.61261 9.30581 3.69052 9.17699 3.74355C9.04816 3.79658 8.91014 3.82369 8.77083 3.82334H5.2295C5.09018 3.82369 4.95217 3.79658 4.82334 3.74355C4.69451 3.69052 4.57741 3.61261 4.47871 3.51429C4.38002 3.41597 4.30167 3.29915 4.24815 3.17053C4.19464 3.0419 4.167 2.90399 4.16683 2.76467V1.00001M9.8335 1.19001C9.55702 1.0648 9.25701 1.00002 8.9535 1.00001H4.16683M9.8335 1.19001C10.0628 1.29401 10.2742 1.43934 10.4562 1.62001L12.0442 3.20334C12.2413 3.39955 12.3979 3.63277 12.5047 3.8896C12.6116 4.14643 12.6667 4.42183 12.6668 4.70001V10.8813C12.6667 11.16 12.6115 11.4359 12.5046 11.6933C12.3977 11.9507 12.2411 12.1844 12.0438 12.3812C11.8464 12.578 11.6122 12.7339 11.3546 12.8401C11.0969 12.9463 10.8208 13.0006 10.5422 13H3.45883C3.18015 13.0007 2.90406 12.9465 2.64636 12.8404C2.38867 12.7343 2.15442 12.5784 1.95702 12.3817C1.75962 12.185 1.60295 11.9512 1.49595 11.6939C1.38896 11.4366 1.33376 11.1607 1.3335 10.882V3.11734C1.33385 2.83871 1.38912 2.56289 1.49615 2.30564C1.60318 2.04839 1.75987 1.81476 1.95726 1.61811C2.15465 1.42146 2.38887 1.26565 2.64652 1.15959C2.90417 1.05354 3.1802 0.999306 3.45883 1.00001H4.16683" stroke="#7856FF" strokeWidth="1.12" strokeLinecap="round" strokeLinejoin="round" />
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

                {!langList.length &&
                  <td colSpan={4} className='text-center pt-4'>No data..</td>
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 md:mt-6 text-right">
          <button className='btn shadow text-white'>Save</button>
        </div>
        {deleteAlert &&
          <Modal innerClass='max-w-[400px] text-center' closeIconHide={false}>
            <p className='text-xl mb-4'>Do you want delete? <strong className='text-heading font-medium'>{activeData.key}</strong></p>
            <div className="flex item-center gap-3 justify-center">
              <button onClick={() => setDeleteAlert(false)} className='text-center btn min-w-24 bg-red-500 border-red-500 text-white'>No</button>
              <button onClick={() => {
                setLangList(prev => prev.filter((item) => item != activeData))
                setDeleteAlert(false)
              }} className='text-center btn min-w-24 shadow text-white'>Yes</button>
            </div>
          </Modal>
        }
      </MainInner>
    </>
  )
}
