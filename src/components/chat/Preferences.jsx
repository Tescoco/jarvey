import React from 'react'
import Dropdown from '../Dropdown';
import Switch from '../Switch'
import Input from '../Input';
import Checkbox from '../Checkbox';
import { common_card } from '../../utilities/Classes';

export default function Preferences() {

  const type = [
    { name: 'type-1' },
    { name: 'type-2' },
    { name: 'type-3' },
    { name: 'type-4' },
    { name: 'type-5' },
  ]

  const agent = [
    {
      title: 'Live when agents are available',
      des: "Customers can only send live chat messages when an agent is available in Gorgias",
    },
    {
      title: 'Always live during business hours',
      des: "Customers can always send live chat messages during business hours",
    },
    {
      title: 'Offline',
      des: "Customers can only send messages using the offline capture",
    },
  ]
  const reply = [
    {
      title: 'Dynamic wait time (recommended)',
      des: "Customers can only send live chat messages when an agent is available in Gorgias",
    },
    {
      title: 'In a few minutes',
    },
    {
      title: 'In a few hours',
    },
  ]


  const visibility = [
    {
      title: 'Hide chat',
      des: 'Remove widget from your website without uninstalling it',
    },
    {
      title: 'Hide outside of business hours',
      des: 'Remove widget from your website after business hours',
    },
    {
      title: 'Hide on mobile',
    },
  ]
  const single = ["pb-4 mb-4 border-b border-[#E2E4E9]"]
  return (
    <div>
      <div className="mb-3 md:mb-4">
        <h4 className='text-lg !leading-normal'>Live chat</h4>
        <p>Choose when customers can send live chat messages to your team <a href="#" className='text-primary'>during business</a> hours. Live chat is always unavailable outside business hours.</p>
      </div>
      <div className={` ${single}`}>
        <div className="flex flex-col gap-4">
          {agent.map((item, index) => (
            <label htmlFor={`a${index + 1}`} className="flex flex-col gap-3 md:gap-4 cursor-pointer" key={index}>
              <div className="flex items-start gap-2.5" >
                <Checkbox type='radio' checked={index == 2 ? true : false} className='mt-1' name="live-chat" id={`a${index + 1}`} />
                <div>
                  <label htmlFor={`a${index + 1}`} className='text-[#0A0D14] md:text-base font-medium !leading-[150%] '>{item.title}</label>
                  <p className='mt-1'>{item.des}</p>
                </div>
              </div>
            </label>
          ))}
          <p>Automate features are always available, if enabled. When live chat is unavailable, customers can message your team with <a href="#" className='!underline text-primary'>offline capture</a> to receive an email response. You can customize offline capture's copy and translations in the <a href="#" className='!underline text-primary'>Language</a> tab.</p>
        </div>
      </div>
      <div className={` ${single}`}>
        <div className="mb-3 md:mb-4">
          <h4 className='text-lg !leading-normal mb-1'>Require automated interaction</h4>
          <p>Hide "Send us a message" so customers must start with an automation button before they can send a message. Requiring automated interactions may lower the volume of live chat and offline capture tickets your team must answer manually.</p>
        </div>
        <label htmlFor="bot" className="flex items-center gap-2 cursor-pointer">
          <Switch checked id="bot" />
          <span className='text-[#0A0D14] font-medium !leading-[100%]'>Remove "Send us a message" button</span>
        </label>
      </div>
      <div className={`${single}`}>
        <div className="mb-3 md:mb-4">
          <h4 className='text-lg !leading-normal'>Visibility options</h4>
        </div>
        <div className="flex flex-col gap-2">
          {visibility.map((item, index) => (
            <label htmlFor={`visibility_${index}`} className="flex items-start gap-2 cursor-pointer" key={index}>
              <Switch id={`visibility_${index}`} name={'visibility'} />
              <div className="-mt-[3px]">
                <span className='text-[#0A0D14] font-semibold !leading-[100%]'>{item.title} </span>
                <p>{item.des} </p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className={` ${single}`}>
        <div className="mb-3 lg:mb-4">
          <h4 className='text-lg !leading-normal'>Email capture</h4>
          <p>Collecting customer emails helps grow your email list and send follow-up messages. However, only around 30% of customers will send a message if they must provide an email.</p>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <Switch id="Enable" />
          <label htmlFor="Enable" className='text-[#0A0D14] font-semibold !leading-[100%]'>Enable email capture</label>
        </div>
        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="flex items-center gap-2">
            <Checkbox checked type='radio' name="radio" id="Optional" />
            <label htmlFor="Optional" className='text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer'>Optional</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox type='radio' name="radio" id="Required" />
            <label htmlFor="Required" className='text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer'>Required</label>
          </div>
        </div>
      </div>
      <div className={` ${single}`}>
        <div className="mb-3 lg:mb-4">
          <h4 className='text-lg !leading-normal'>Auto-reply with wait time</h4>
          <p>During business hours, let customers know how fast they can expect a response with an auto-reply. A message is sent in new chat tickets after 30 seconds without replies from an agent.</p>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <Switch id="Send" />
          <label htmlFor="Send" className='text-[#0A0D14] font-semibold !leading-[100%]'>Send auto-reply with wait time</label>
        </div>
        <div className="flex flex-col gap-4">
          {reply.map((item, index) => (
            <div className="" key={index}>
              <div className="flex flex-col gap-3 md:gap-4">
                <label htmlFor={`dd${index + 1}`} className="flex items-start gap-2.5 cursor-pointer" >
                  <Checkbox type='radio' className='mt-1' name="response_time" id={`dd${index + 1}`} />
                  <div className="">
                    <span className='text-[#0A0D14] md:text-base font-medium !leading-[150%] '>{item.title}</span>
                    <span className='mt-1 block'>{item.des}</span>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={` ${single}`}>
        <div className="mb-3 lg:mb-4 flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
          <h4 className='text-base md:text-lg !leading-normal'>Privacy policy disclaimer</h4>
          <button className='btn !text-xs !border-primary !text-primary hover:!text-white !px-0 !h-[27px] !min-w-[154px]'>Customize Translations</button>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <Switch id="SendDis" />
          <label htmlFor="SendDis" className='text-[#0A0D14] cursor-pointer font-semibold !leading-[100%]'>Display privacy policy disclaimer</label>
        </div>
        <textarea name="" className={`${common_card} w-full min-h-[86px]`} placeholder='By using this chat, you consent to our Privacy Policy.' id=""></textarea>
        <p>Gorgias is not responsible for ensuring compliance with applicable privacy laws. It is your responsibility to implement privacy policies.</p>
      </div>
      <div className="">
        <div className="mb-3 lg:mb-4">
          <h4 className='text-lg !leading-normal'>Connect email</h4>
          <p>Connect an email to your chat to send conversation transcripts, offline capture confirmation, and satisfaction surveys to your customers.</p>
        </div>
        <Dropdown className='mb-0' placeholder="select an email integration" label="Select which email address sends these messages" items={type} required={true} />
        <div className="flex items-start gap-2 mt-3 md:mt-4">
          <Switch id="Send2" className='mt-1' />
          <div className="">
            <label htmlFor="Send2" className='text-[#0A0D14] font-semibold !leading-[100%]'>Send chat transcripts to customer email</label>
            <p>When customers don't see your message in chat, we automatically send them a transcript after 30 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
