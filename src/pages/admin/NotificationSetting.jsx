import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import { c_24 } from '../../utilities/Classes'
import Checkbox from '../../components/Checkbox'

export default function NotificationSetting() {
  const notify = [
    {
      event: 'There is a New Ticket/Conversation',
    },
    {
      event: 'There is a New Ticket/Conversation',
    },
  ]
  const agent = [
    {
      event: 'Assign a Ticket To Other Agents',
    },
    {
      event: 'Replied To On Of My Conversations',
    },
  ]
  const customer = [
    {
      event: 'Replied to ON of my converison',
    },
    {
      event: 'Start A New Chat (Message With Me)',
    },
    {
      event: 'Replied To a Agent Conversations',
    },
  ]

  return (
    <>
      <Top />
      <MainInner>
        <div className={`${c_24} mb-2.5`}>
          <div className="mt-6 overflow-x-auto ">
            <table className="table">
              <thead>
                <tr>
                  {["Notify me when ...", "Email", "SMS", "Browser", "Slack",].map((item, index) => (
                    <th className='text-center first:text-base md:first:text-lg first:text-heading first:font-semibold' key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {notify.map((item, index) => (
                  <tr key={index} className='!border-b'>
                    <td className='w-[60%]  !font-medium !text-heading !py-4'>{item.event} </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`a${index}`} checked={item.Email} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`b${index}`} checked={item.SMS} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`c${index}`} checked={item.browser} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`d${index}`} checked={item.Slack} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={`${c_24} mb-2.5`}>
          <div className="mt-6 overflow-x-auto ">
            <table className="table">
              <thead>
                <tr>
                  {["Notify me when Agent ...", "Email", "SMS", "Browser", "Slack",].map((item, index) => (
                    <th className='text-center first:text-base md:first:text-lg first:text-heading first:font-semibold' key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {agent.map((item, index) => (
                  <tr key={index} className='!border-b'>
                    <td className='w-[60%]  !font-medium !text-heading !py-4'>{item.event} </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`f${index}`} checked={item.Email} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`h${index}`} checked={item.SMS} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`j${index}`} checked={item.browser} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`k${index}`} checked={item.Slack} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={`${c_24} mb-2.5`}>
          <div className="mt-6 overflow-x-auto ">
            <table className="table">
              <thead>
                <tr>
                  {["Notify me when customer ...", "Email", "SMS", "Browser", "Slack",].map((item, index) => (
                    <th className='text-center first:text-base md:first:text-lg first:text-heading first:font-semibold' key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customer.map((item, index) => (
                  <tr key={index} className='!border-b'>
                    <td className='w-[60%]  !font-medium !text-heading !py-4'>{item.event} </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`l${index}`} checked={item.Email} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`p${index}`} checked={item.SMS} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`o${index}`} checked={item.browser} />
                      </div>
                    </td>
                    <td className=''>
                      <div className="flex items-center pl-2">
                        <Checkbox id={`i${index}`} checked={item.Slack} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       <div className="flex justify-end">
        <button className='btn bg-primary text-white min-w-[105px]'>Save</button>
       </div>
      </MainInner>
    </>
  )
}
