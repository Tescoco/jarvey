import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import { c_20 } from '../../utilities/Classes'
import Switch from '../../components/Switch'

export default function SystemConfiguration() {

  const data = [
    {
      title: "Email Notification",
      des: "Enable or disable email notifications for various events or activities within the system. This allows you to stay updated via email.",
      checked: true
    },
    {
      title: "SMS Notification",
      des: "Activate or deactivate SMS notifications, which can be used to receive important alerts or updates via text messages.",
      checked: true
    },
    {
      title: "Captcha Validations",
      des: "Enable or disable Captcha validations, which help prevent automated spam or abuse by requiring users to complete a verification process.",
      checked: true
    },
    {
      title: "Database Notifications",
      des: "Control the system's notifications related to database activities, such as updates or changes to the database.",
      checked: true
    },
    {
      title: "Slack Notifications",
      des: "Integrate the system with Slack and receive notifications directly in your Slack workspace for real-time updates.",
      checked: true
    },
    {
      title: "Cookie Activation",
      des: "Enable or disable the use of cookies for user session and tracking purposes.",
      checked: true
    },
    {
      title: "Automatic Ticket Assign",
      des: "Configure the system to automatically assign incoming tickets or tasks to specific agents or teams based on predefined rules or criteria.",
      checked: false
    },
    {
      title: "Group Base Ticket Assign",
      des: "Configure the system to automatically assign incoming tickets or tasks to specific agents or teams based on Priority Group",
      checked: false
    },
    {
      title: "Ticket Security",
      des: "Enabling the security CAPTCHA feature will enhance the platform's security measures, adding an additional layer of protection to the ticket creation page to mitigate spam and unauthorized submissions",
      checked: false
    },
    {
      title: "User Registration",
      des: "Enabling the first module also activates the User Register Module, indicating a relationship between the two. The User Register Module is likely either a prerequisite for the proper functioning of the first module or is dependent on it for its functionality.",
      checked: false
    },
    {
      title: "User Notifications",
      des: "Activating the email module will enable browser and email notifications for newly registered users",
      checked: true
    },
    {
      title: "Email Verifications",
      des: "Set up email verification processes to ensure that users email addresses are valid and to enhance security and authenticity.",
      checked: true
    },
    {
      title: "Agent Chat Module",
      des: "Manage the agent chat module, enabling agents to communicate and provide real-time support to users through a chat interface.",
      checked: true
    },
    {
      title: "App Debug",
      des: "Enable or disable the app debug mode, which allows for the detection and resolution of software bugs or issues by providing detailed error messages or logs.",
      checked: true
    },
    {
      title: "Terms & Conditions Validation",
      des: "Implement validation mechanisms to ensure that users agree to and comply with the terms and conditions of using the system or application.",
      checked: true
    },
    {
      title: "Automated Best Agent Identification",
      des: "Enabling this module activates the automatic best agent selection feature.",
      checked: true
    },
    {
      title: "Site Maintenance Mode",
      des: "Enabling this module puts the site in maintenance mode",
      checked: true
    },
    {
      title: "Force SSL",
      des: "Enabling this feature mandates the use of HTTPS for your site.",
      checked: true
    }
  ]

  return (
    <>
      <Top />
      <MainInner>
        <div className={`${c_20} flex flex-col items-center gap-4 md:gap-5 xl:gap-6`}>
          {data.map((item, index) => (
            <div key={index} className='flex items-start justify-between w-full gap-4'>
              <div className="">
                <h4 className='text-base md:text-lg font-semibold mb-1 !leading-normal'>{item.title} </h4>
                <p className='text-xs font-medium !leading-normal'>{item.des} </p>
              </div>
              <Switch checked={item.checked} id={`switch_${index+1}`} />
            </div>
          ))}
        </div>
      </MainInner>
    </>
  )
}
