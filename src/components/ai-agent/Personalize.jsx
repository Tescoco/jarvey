import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Checkbox from '../Checkbox';
import { c_border } from '../../utilities/Classes';

const Personalize = forwardRef((props, ref) => {
    const [toneOfVoice, setToneOfVoice] = useState("");
    const [signature, setSignature] = useState("");
    const [emailChecked, setEmailChecked] = useState(false);
    const [emailAddress, setEmailAddress] = useState("");
    const [errors, setErrors] = useState({});
    const [showErrors, setShowErrors] = useState(false);

    // Validation function
    const validateForm = () => {
        const newErrors = {};

        // Tone of voice is required
        if (!toneOfVoice || toneOfVoice === "Connect") {
            newErrors.toneOfVoice = "Tone of voice is required";
        }

        // Signature is required
        if (!signature || signature === "This response was created by Ai") {
            newErrors.signature = "Signature is required";
        }

        // At least one channel must be selected
        if (!emailChecked) {
            newErrors.channel = "At least one channel must be selected";
        }

        // Email address is required if email channel is checked
        if (emailChecked && !emailAddress.trim()) {
            newErrors.emailAddress = "Email address is required";
        }

        // Validate email format if provided
        if (emailChecked && emailAddress.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailAddress)) {
                newErrors.emailAddress = "Please enter a valid email address";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Expose validate function to parent component
    useImperativeHandle(ref, () => ({
        validate: () => {
            setShowErrors(true);
            const isValid = validateForm();
            
            // Scroll to first error
            if (!isValid) {
                setTimeout(() => {
                    const firstError = document.querySelector('.validation-error');
                    if (firstError) {
                        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            }
            
            return isValid;
        },
        getData: () => ({
            toneOfVoice,
            signature,
            channels: {
                email: emailChecked
            },
            emailAddress: emailChecked ? emailAddress : null
        })
    }));

    // Update validation when data changes
    useEffect(() => {
        if (showErrors) {
            validateForm();
        }
    }, [toneOfVoice, signature, emailChecked, emailAddress, showErrors]);

    return (
        <div className={`${c_border}`}>
            <p className='text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-3 lg:mb-[15px]'>
                Personalize AI Agent
            </p>
            
            <div className='mb-5 lg:mb-6'>
                <div className={showErrors && errors.toneOfVoice ? 'validation-error' : ''}>
                    <Dropdown 
                        className={`mb-0 ${showErrors && errors.toneOfVoice ? '!border-red-500' : ''}`}
                        isArrow={true} 
                        label="Tone of voice" 
                        required={true} 
                        items={[
                            { name: "Professional" },
                            { name: "Friendly" },
                            { name: "Casual" },
                            { name: "Formal" },
                            { name: "Empathetic" },
                        ]} 
                        placeholder="Connect"
                        info={toneOfVoice || "Connect"}
                        onChange={(value) => setToneOfVoice(value)}
                        des="Select a tone of voice for AI Agent to use with customers." 
                    />
                </div>
                {showErrors && errors.toneOfVoice && (
                    <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7.65625 10.2812C7.65625 10.6469 7.36562 10.9375 7 10.9375C6.63438 10.9375 6.34375 10.6469 6.34375 10.2812V6.34375C6.34375 5.97813 6.63438 5.6875 7 5.6875C7.36562 5.6875 7.65625 5.97813 7.65625 6.34375V10.2812ZM7 4.8125C6.56562 4.8125 6.21875 4.46563 6.21875 4.03125C6.21875 3.59687 6.56562 3.25 7 3.25C7.43438 3.25 7.78125 3.59687 7.78125 4.03125C7.78125 4.46563 7.43438 4.8125 7 4.8125Z"/>
                        </svg>
                        {errors.toneOfVoice}
                    </p>
                )}
            </div>

            <div className='mb-5 lg:mb-6'>
                <div className={showErrors && errors.signature ? 'validation-error' : ''}>
                    <Dropdown 
                        className={`mb-0 ${showErrors && errors.signature ? '!border-red-500' : ''}`}
                        isArrow={true} 
                        label="Signature" 
                        required 
                        items={[
                            { name: "This response was created by AI" },
                            { name: "Powered by Jarvey AI" },
                            { name: "Best regards, AI Assistant" },
                            { name: "Your AI Support Team" },
                            { name: "Custom signature" },
                        ]} 
                        placeholder="This response was created by Ai"
                        info={signature || "This response was created by Ai"}
                        onChange={(value) => setSignature(value)}
                        des={`At the end of emails you can disclose that the message was created by Al, or provide a custom name for Al Agent. Do not include greetings (e.g. "Best regards"). Greetings will already be included in the message above the signature.`}
                        desClass='md:pr-3' 
                    />
                </div>
                {showErrors && errors.signature && (
                    <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7.65625 10.2812C7.65625 10.6469 7.36562 10.9375 7 10.9375C6.63438 10.9375 6.34375 10.6469 6.34375 10.2812V6.34375C6.34375 5.97813 6.63438 5.6875 7 5.6875C7.36562 5.6875 7.65625 5.97813 7.65625 6.34375V10.2812ZM7 4.8125C6.56562 4.8125 6.21875 4.46563 6.21875 4.03125C6.21875 3.59687 6.56562 3.25 7 3.25C7.43438 3.25 7.78125 3.59687 7.78125 4.03125C7.78125 4.46563 7.43438 4.8125 7 4.8125Z"/>
                        </svg>
                        {errors.signature}
                    </p>
                )}
            </div>

            <div className='mb-5 lg:mb-6'>
                <p className='text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1'>
                    Choose which channels to use with Al Agent
                </p>
                <p className='mt-1 text-xs text-gray font-medium !leading-[1.66]'>
                    Select at least one channel <span className="text-red-600">*</span>
                </p>
            </div>

            <div className={`mb-5 lg:mb-6 ${showErrors && errors.channel ? 'validation-error' : ''}`}>
                <Checkbox 
                    className={`${showErrors && errors.channel ? 'border-2 border-red-500 p-3 rounded-lg' : ''}`}
                    type='checkbox' 
                    checked={emailChecked}
                    onChange={(e) => setEmailChecked(e.target.checked)}
                    title="Email" 
                />
                {showErrors && errors.channel && (
                    <p className="mt-2 text-xs text-red-600 font-semibold flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7.65625 10.2812C7.65625 10.6469 7.36562 10.9375 7 10.9375C6.63438 10.9375 6.34375 10.6469 6.34375 10.2812V6.34375C6.34375 5.97813 6.63438 5.6875 7 5.6875C7.36562 5.6875 7.65625 5.97813 7.65625 6.34375V10.2812ZM7 4.8125C6.56562 4.8125 6.21875 4.46563 6.21875 4.03125C6.21875 3.59687 6.56562 3.25 7 3.25C7.43438 3.25 7.78125 3.59687 7.78125 4.03125C7.78125 4.46563 7.43438 4.8125 7 4.8125Z"/>
                        </svg>
                        {errors.channel}
                    </p>
                )}
            </div>

            <div className='mb-5 lg:mb-6'>
                <div className={showErrors && errors.emailAddress ? 'validation-error' : ''}>
                    <Input 
                        type="email" 
                        placeholder="tiger.s.ai.2024@gmail.com" 
                        label="Al Agent responds to tickets sent to the following email addresses" 
                        required 
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className={showErrors && errors.emailAddress ? '!border-red-500' : ''}
                        des="Select one or more email addresses for Al Agent to use. It will also reply to contact forms linked to these email addresses." 
                    />
                </div>
                {showErrors && errors.emailAddress && (
                    <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7.65625 10.2812C7.65625 10.6469 7.36562 10.9375 7 10.9375C6.63438 10.9375 6.34375 10.6469 6.34375 10.2812V6.34375C6.34375 5.97813 6.63438 5.6875 7 5.6875C7.36562 5.6875 7.65625 5.97813 7.65625 6.34375V10.2812ZM7 4.8125C6.56562 4.8125 6.21875 4.46563 6.21875 4.03125C6.21875 3.59687 6.56562 3.25 7 3.25C7.43438 3.25 7.78125 3.59687 7.78125 4.03125C7.78125 4.46563 7.43438 4.8125 7 4.8125Z"/>
                        </svg>
                        {errors.emailAddress}
                    </p>
                )}
            </div>
        </div>
    );
});

Personalize.displayName = 'Personalize';

export default Personalize;

// import React from 'react'
// import Input from '../Input'
// import Dropdown from '../Dropdown'
// import Checkbox from '../Checkbox'
// import { c_border } from '../../utilities/Classes'

// export default function Personalize() {
//     return (
//         <div className={`${c_border}`}>
//             <p className='text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-3 lg:mb-[15px]'>Personalize AI Agent</p>
//             <div className='mb-5 lg:mb-6'>
//                 <Dropdown className='mb-0' isArrow={true} label="Tone of voice" required={true} items={[
//                     { name: "DropDown - 1" },
//                     { name: "DropDown - 2" },
//                     { name: "DropDown - 3" },
//                     { name: "DropDown - 4" },
//                     { name: "DropDown - 5" },
//                 ]} placeholder="Connect" des="Select a tone of voice for AI Agent to use with customers." />
//             </div>
//             <div className='mb-5 lg:mb-6'>
//                 <Dropdown className='mb-0' isArrow={true} label="Signature" required items={[
//                     { name: "DropDown - 1" },
//                     { name: "DropDown - 2" },
//                     { name: "DropDown - 3" },
//                     { name: "DropDown - 4" },
//                     { name: "DropDown - 5" },
//                 ]} placeholder="This response was created by Ai" des={`At the end of emails you can disclose that the message was created by Al, or provide a custom name for Al Agent. Do not include greetings (e.g. "Best regards"). Greetings will already be included in the message above the signature.`} desClass='md:pr-3' />
//             </div>
//             <div className='mb-5 lg:mb-6'>
//                 <p className='text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1'>Choose which channels to use with Al Agent</p>
//                 <p className='mt-1 text-xs text-gray font-medium !leading-[1.66]'>Select at least one channel</p>
//             </div>
//             <Checkbox className='mb-5 lg:mb-6' type='checkbox' checked title="Email" />
//             <div className='mb-5 lg:mb-6'>
//                 <Input type="email" placeholder="tiger.s.ai.2024@gmail.com" label="Al Agent responds to tickets sent to the following email addresses" required des="Select one or more email addresses for Al Agent to use. It will also reply to contact forms linked to these email addresses." />
//             </div>

//         </div>
//     )
// }
