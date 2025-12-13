import { useState } from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import { c_16, c_24, mood } from "../../utilities/Classes";
import Dropdown from "../../components/Dropdown";
import Checkbox from "../../components/Checkbox";

export default function NotificationSetting() {
  // State for volume control
  const [volume, setVolume] = useState(70);

  // State for each table's checkboxes
  const [ticketSettings, setTicketSettings] = useState([
    { event: "Back to home ", browser: true },
    { event: "Chat & messaging tickets", browser: true },
    { event: "Mentioned inn an internal nore", browser: true },
    { event: "Snooze expired", browser: true },
    { event: "Assigned to ticket", browser: true },
  ]);

  const [accountSettings, setAccountSettings] = useState([
    { event: "Ai agnent set up and optimisation tips", browser: true },
  ]);

  const [messageSettings, setMessageSettings] = useState([
    { event: "Email", browser: true },
    { event: "WhatsApp", browser: true },
    { event: "Chat", browser: true },
    { event: "Slack", browser: true },
    { event: "Facebook ", browser: true },
    { event: "Instagram", browser: true },
  ]);

  // Handlers for toggling checkboxes
  const toggleTicket = (index) => {
    setTicketSettings(prev => prev.map((item, i) =>
      i === index ? { ...item, browser: !item.browser } : item
    ));
  };

  const toggleAccount = (index) => {
    setAccountSettings(prev => prev.map((item, i) =>
      i === index ? { ...item, browser: !item.browser } : item
    ));
  };

  const toggleMessage = (index) => {
    setMessageSettings(prev => prev.map((item, i) =>
      i === index ? { ...item, browser: !item.browser } : item
    ));
  };

  const heading =
    "text-[#0A0D14] text-lg lg:text-xl font-bole !leading-normal font-inter";
  const des = "text-gray text-sm font-medium !leading-normal font-inter";

  const volumeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
    >
      <path
        d="M10.5625 4.5625C10.5625 4.5625 11.375 5.375 11.375 6.72917C11.375 8.08333 10.5625 8.89583 10.5625 8.89583"
        stroke="#858585"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.0835 8.00642V5.99467C1.0835 5.70735 1.19763 5.4318 1.4008 5.22864C1.60396 5.02547 1.87951 4.91134 2.16683 4.91134H3.73766C3.84357 4.91131 3.94715 4.88024 4.03558 4.82196L7.28558 2.67913C7.36724 2.62535 7.46193 2.59468 7.55961 2.59037C7.65729 2.58606 7.75431 2.60827 7.84039 2.65464C7.92647 2.70101 7.99839 2.76982 8.04853 2.85376C8.09867 2.9377 8.12515 3.03365 8.12516 3.13142V10.8697C8.12515 10.9674 8.09867 11.0634 8.04853 11.1473C7.99839 11.2313 7.92647 11.3001 7.84039 11.3465C7.75431 11.3928 7.65729 11.415 7.55961 11.4107C7.46193 11.4064 7.36724 11.3757 7.28558 11.322L4.03558 9.17913C3.94715 9.12085 3.84357 9.08978 3.73766 9.08976H2.16683C1.87951 9.08976 1.60396 8.97562 1.4008 8.77245C1.19763 8.56929 1.0835 8.29374 1.0835 8.00642Z"
        stroke="#858585"
        strokeWidth="1.15"
      />
    </svg>
  );

  return (
    <>
      <Top />
      <MainInner className="flex flex-col gap-4 md:gap-6">
        <div
          className={`${c_24} flex flex-wrap gap-3 items-center justify-between`}
        >
          <div className="">
            <h3 className={heading}>Volume Control</h3>
            <p className={des}>
              This control changes the volume for all active notifications
            </p>
          </div>
          <div className="flex items-end gap-4">
            <button>{volumeIcon}</button>
            <div className="relative w-[157px] h-[33px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="157"
                height="33"
                viewBox="0 0 157 33"
                fill="none"
                className="absolute inset-0 pointer-events-none"
              >
                <path
                  opacity="0.1"
                  d="M156 32.5H0C78.8334 26.1739 133.986 17.9533 155.318 1.84602C155.998 1.33236 157 1.81003 157 2.66244V31.5C157 32.0523 156.552 32.5 156 32.5Z"
                  fill="#7856FF"
                />
                <mask
                  id="mask0_11773_52843"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="1"
                  width={Math.round((volume / 100) * 157)}
                  height="32"
                >
                  <path
                    d="M156 32.5H0C78.8334 26.1739 133.986 17.9533 155.318 1.84602C155.998 1.33236 157 1.81003 157 2.66244V31.5C157 32.0523 156.552 32.5 156 32.5Z"
                    fill="#7856FF"
                  />
                </mask>
                <g mask="url(#mask0_11773_52843)">
                  <rect x="-2" y="8.5" width={Math.round((volume / 100) * 157)} height="45" fill="#7856FF" />
                </g>
              </svg>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                style={{ zIndex: 10 }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 xl:gap-6 xl:grid-cols-2 ">
          <div className="">
            <div className={`${c_16}`}>
              <div className="">
                <h3 className={heading}>Ticket updates</h3>
                <p className={des}>
                  Get notified when one of these events happen
                </p>
              </div>
              <div className="mt-6 overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      {["Event", "Sound", "Browser"].map((item, index) => (
                        <th className="last:text-end" key={index}>
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ticketSettings.map((item, index) => (
                      <tr key={index} className="!border-b">
                        <td className="w-[60%]  !font-medium !text-heading">
                          {item.event}{" "}
                        </td>
                        <td>
                          <div className="">
                            <Dropdown
                              className="!mb-0"
                              btnClass="max-h-[34px] max-w-[123px] text-heading font-medium"
                              placeholder="Classic"
                              leftIcon={volumeIcon}
                              isArrow={true}
                              items={mood}
                            />
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center justify-end pr-4">
                            <Checkbox
                              checked={item.browser}
                              onChange={() => toggleTicket(index)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="">
            <div className={`${c_16}`}>
              <div className="">
                <h3 className={heading}>Account and system updates</h3>
                <p className={des}>
                  Get notified about updates and alerts related to account
                  setup, system functionality and security
                </p>
              </div>
              <div className="mt-6 overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      {["Event", "Sound", "Browser"].map((item, index) => (
                        <th className="last:text-end" key={index}>
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {accountSettings.map((item, index) => (
                      <tr key={index} className="!border-b">
                        <td className="w-[60%]  !font-medium !text-heading">
                          {item.event}{" "}
                        </td>
                        <td>
                          <div className="">
                            <Dropdown
                              className="!mb-0"
                              btnClass="max-h-[34px] max-w-[123px] text-heading font-medium"
                              placeholder="Classic"
                              leftIcon={volumeIcon}
                              isArrow={true}
                              items={mood}
                            />
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center justify-end pr-4">
                            <Checkbox
                              checked={item.browser}
                              onChange={() => toggleAccount(index)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={`${c_16} mt-4 xl:mt-20`}>
              <div className="">
                <h3 className={heading}>New Messages</h3>
                <p className={des}>
                  Get notified when one of these events happen
                </p>
              </div>
              <div className="mt-6 overflow-x-auto ">
                <table className="table">
                  <thead>
                    <tr>
                      {["Event", "Sound", "Browser"].map((item, index) => (
                        <th className="last:text-end" key={index}>
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {messageSettings.map((item, index) => (
                      <tr key={index} className="!border-b">
                        <td className="w-[60%]  !font-medium !text-heading">
                          {item.event}{" "}
                        </td>
                        <td>
                          <div className="">
                            <Dropdown
                              className="!mb-0"
                              btnClass="max-h-[34px] max-w-[123px] text-heading font-medium"
                              placeholder="Classic"
                              leftIcon={volumeIcon}
                              isArrow={true}
                              items={mood}
                            />
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center justify-end pr-4">
                            <Checkbox
                              checked={item.browser}
                              onChange={() => toggleMessage(index)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </MainInner>
    </>
  );
}

// import Top from "../../layouts/Top";
// import MainInner from "../../components/MainInner";
// import { c_16, c_24, mood } from "../../utilities/Classes";
// import Dropdown from "../../components/Dropdown";
// import Checkbox from "../../components/Checkbox";

// export default function NotificationSetting() {
//   const heading =
//     "text-[#0A0D14] text-lg lg:text-xl font-bole !leading-normal font-inter";
//   const des = "text-gray text-sm font-medium !leading-normal font-inter";

//   const Ticket = [
//     {
//       event: "Back to home ",
//       browser: true,
//     },
//     {
//       event: "Chat & messaging tickets",
//       browser: true,
//     },
//     {
//       event: "Mentioned inn an internal nore",
//       browser: true,
//     },
//     {
//       event: "Snooze expired",
//       browser: true,
//     },
//     {
//       event: "Assigned to ticket",
//       browser: true,
//     },
//   ];
//   const Account = [
//     {
//       event: "Ai agnent set up and optimisation tips",
//       browser: true,
//     },
//   ];
//   const NewMessages = [
//     {
//       event: "Email",
//       browser: true,
//     },
//     {
//       event: "WhatsApp",
//       browser: true,
//     },
//     {
//       event: "Chat",
//       browser: true,
//     },
//     {
//       event: "Slack",
//       browser: true,
//     },
//     {
//       event: "Facebook ",
//       browser: true,
//     },
//     {
//       event: "Instagram",
//       browser: true,
//     },
//   ];

//   const volume = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="13"
//       height="14"
//       viewBox="0 0 13 14"
//       fill="none"
//     >
//       <path
//         d="M10.5625 4.5625C10.5625 4.5625 11.375 5.375 11.375 6.72917C11.375 8.08333 10.5625 8.89583 10.5625 8.89583"
//         stroke="#858585"
//         strokeWidth="1.15"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M1.0835 8.00642V5.99467C1.0835 5.70735 1.19763 5.4318 1.4008 5.22864C1.60396 5.02547 1.87951 4.91134 2.16683 4.91134H3.73766C3.84357 4.91131 3.94715 4.88024 4.03558 4.82196L7.28558 2.67913C7.36724 2.62535 7.46193 2.59468 7.55961 2.59037C7.65729 2.58606 7.75431 2.60827 7.84039 2.65464C7.92647 2.70101 7.99839 2.76982 8.04853 2.85376C8.09867 2.9377 8.12515 3.03365 8.12516 3.13142V10.8697C8.12515 10.9674 8.09867 11.0634 8.04853 11.1473C7.99839 11.2313 7.92647 11.3001 7.84039 11.3465C7.75431 11.3928 7.65729 11.415 7.55961 11.4107C7.46193 11.4064 7.36724 11.3757 7.28558 11.322L4.03558 9.17913C3.94715 9.12085 3.84357 9.08978 3.73766 9.08976H2.16683C1.87951 9.08976 1.60396 8.97562 1.4008 8.77245C1.19763 8.56929 1.0835 8.29374 1.0835 8.00642Z"
//         stroke="#858585"
//         strokeWidth="1.15"
//       />
//     </svg>
//   );

//   return (
//     <>
//       <Top />
//       <MainInner className="flex flex-col gap-4 md:gap-6">
//         <div
//           className={`${c_24} flex flex-wrap gap-3 items-center justify-between`}
//         >
//           <div className="">
//             <h3 className={heading}>Volume Control</h3>
//             <p className={des}>
//               This control changes the volume for all active notifications
//             </p>
//           </div>
//           <div className="flex items-end gap-4">
//             <button>{volume}</button>
//             <div className="">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="157"
//                 height="33"
//                 viewBox="0 0 157 33"
//                 fill="none"
//               >
//                 <path
//                   opacity="0.1"
//                   d="M156 32.5H0C78.8334 26.1739 133.986 17.9533 155.318 1.84602C155.998 1.33236 157 1.81003 157 2.66244V31.5C157 32.0523 156.552 32.5 156 32.5Z"
//                   fill="#7856FF"
//                 />
//                 <mask
//                   id="mask0_11773_52843"
//                   maskUnits="userSpaceOnUse"
//                   x="0"
//                   y="1"
//                   width="157"
//                   height="32"
//                 >
//                   <path
//                     d="M156 32.5H0C78.8334 26.1739 133.986 17.9533 155.318 1.84602C155.998 1.33236 157 1.81003 157 2.66244V31.5C157 32.0523 156.552 32.5 156 32.5Z"
//                     fill="#7856FF"
//                   />
//                 </mask>
//                 <g mask="url(#mask0_11773_52843)">
//                   <rect x="-2" y="8.5" width="137" height="45" fill="#7856FF" />
//                 </g>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-4 xl:gap-6 xl:grid-cols-2 ">
//           <div className="">
//             <div className={`${c_16}`}>
//               <div className="">
//                 <h3 className={heading}>Ticket updates</h3>
//                 <p className={des}>
//                   Get notified when one of these events happen
//                 </p>
//               </div>
//               <div className="mt-6 overflow-x-auto">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       {["Event", "Sound", "Browser"].map((item, index) => (
//                         <th className="last:text-end" key={index}>
//                           {item}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Ticket.map((item, index) => (
//                       <tr key={index} className="!border-b">
//                         <td className="w-[60%]  !font-medium !text-heading">
//                           {item.event}{" "}
//                         </td>
//                         <td>
//                           <div className="">
//                             <Dropdown
//                               className="!mb-0"
//                               btnClass="max-h-[34px] max-w-[123px] text-heading font-medium"
//                               placeholder="Classic"
//                               leftIcon={volume}
//                               isArrow={true}
//                               items={mood}
//                             />
//                           </div>
//                         </td>
//                         <td className="">
//                           <div className="flex items-center justify-end pr-4">
//                             <Checkbox checked={item.browser} />
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <div className={`${c_16}`}>
//               <div className="">
//                 <h3 className={heading}>Account and system updates</h3>
//                 <p className={des}>
//                   Get notified about updates and alerts related to account
//                   setup, system functionality and security
//                 </p>
//               </div>
//               <div className="mt-6 overflow-x-auto">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       {["Event", "Sound", "Browser"].map((item, index) => (
//                         <th className="last:text-end" key={index}>
//                           {item}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Account.map((item, index) => (
//                       <tr key={index} className="!border-b">
//                         <td className="w-[60%]  !font-medium !text-heading">
//                           {item.event}{" "}
//                         </td>
//                         <td>
//                           <div className="">
//                             <Dropdown
//                               className="!mb-0"
//                               btnClass="max-h-[34px] max-w-[123px] text-heading font-medium"
//                               placeholder="Classic"
//                               leftIcon={volume}
//                               isArrow={true}
//                               items={mood}
//                             />
//                           </div>
//                         </td>
//                         <td className="">
//                           <div className="flex items-center justify-end pr-4">
//                             <Checkbox checked={item.browser} />
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className={`${c_16} mt-4 xl:mt-20`}>
//               <div className="">
//                 <h3 className={heading}>New Messages</h3>
//                 <p className={des}>
//                   Get notified when one of these events happen
//                 </p>
//               </div>
//               <div className="mt-6 overflow-x-auto ">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       {["Event", "Sound", "Browser"].map((item, index) => (
//                         <th className="last:text-end" key={index}>
//                           {item}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {NewMessages.map((item, index) => (
//                       <tr key={index} className="!border-b">
//                         <td className="w-[60%]  !font-medium !text-heading">
//                           {item.event}{" "}
//                         </td>
//                         <td>
//                           <div className="">
//                             <Dropdown
//                               className="!mb-0"
//                               btnClass="max-h-[34px] max-w-[123px] text-heading font-medium"
//                               placeholder="Classic"
//                               leftIcon={volume}
//                               isArrow={true}
//                               items={mood}
//                             />
//                           </div>
//                         </td>
//                         <td className="">
//                           <div className="flex items-center justify-end pr-4">
//                             <Checkbox checked={item.browser} />
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </MainInner>
//     </>
//   );
// }
