import React from 'react'
import Input from '../Input'
import Dropdown from '../Dropdown'
import Checkbox from '../Checkbox'
import { c_border } from '../../utilities/Classes'

export default function Personalize() {
    return (
        <div className={`${c_border}`}>
            <p className='text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-3 lg:mb-[15px]'>Personalize AI Agent</p>
            <div className='mb-5 lg:mb-6'>
                <Dropdown className='mb-0' isArrow={true} label="Tone of voice" required={true} items={[
                    { name: "DropDown - 1" },
                    { name: "DropDown - 2" },
                    { name: "DropDown - 3" },
                    { name: "DropDown - 4" },
                    { name: "DropDown - 5" },
                ]} placeholder="Connect" des="Select a tone of voice for AI Agent to use with customers." />
            </div>
            <div className='mb-5 lg:mb-6'>
                <Dropdown className='mb-0' isArrow={true} label="Signature" required items={[
                    { name: "DropDown - 1" },
                    { name: "DropDown - 2" },
                    { name: "DropDown - 3" },
                    { name: "DropDown - 4" },
                    { name: "DropDown - 5" },
                ]} placeholder="This response was created by Ai" des={`At the end of emails you can disclose that the message was created by Al, or provide a custom name for Al Agent. Do not include greetings (e.g. "Best regards"). Greetings will already be included in the message above the signature.`} desClass='md:pr-3' />
            </div>
            <div className='mb-5 lg:mb-6'>
                <p className='text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1'>Choose which channels to use with Al Agent</p>
                <p className='mt-1 text-xs text-gray font-medium !leading-[1.66]'>Select at least one channel</p>
            </div>
            <Checkbox className='mb-5 lg:mb-6' type='checkbox' checked title="Email" />
            <div className='mb-5 lg:mb-6'>
                <Input type="email" placeholder="tiger.s.ai.2024@gmail.com" label="Al Agent responds to tickets sent to the following email addresses" required des="Select one or more email addresses for Al Agent to use. It will also reply to contact forms linked to these email addresses." />
            </div>

        </div>
    )
}
