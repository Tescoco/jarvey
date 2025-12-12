import React from "react";
import { Link } from "react-router-dom";
import MainInner from "../../components/MainInner";
import { c_24 } from "../../utilities/Classes";

export default function Complete() {
  const hoverClass =
    "transition-all duration-200 hover:bg-gradient-to-r hover:from-[#6a4bff] hover:to-[#7856ff] hover:text-white hover:border-transparent";

  return (
    <>
      <div className="min-h-screen bg-[#F7F5FF]">
        <MainInner>
          <div className="max-w-2xl mx-auto pt-16 pb-12">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3333 10L15 28.3333L6.66667 20"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-[#0A0D14] mb-4">
                🎉 Congratulations!
              </h1>
              <p className="text-xl text-[#525866] mb-2">
                You've successfully completed the onboarding
              </p>
              <p className="text-lg text-[#858585]">
                Your Jarvey AI setup is now complete and ready to use
              </p>
            </div>

            {/* Summary */}
            <div className={`${c_24} mb-8`}>
              <div className="p-8">
                <h2 className="text-xl font-semibold text-[#0A0D14] mb-6 text-center">
                  What You've Accomplished
                </h2>
                <div className="space-y-4">

                  {[
                    "Connected your Shopify store",
                    "Set up your support email",
                    "Practiced with test tickets",
                    "Connected social media channels",
                    "Invited your team members",
                  ].map((item, idx) => (
                    <div className="flex items-center gap-3" key={idx}>
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3333 4L6 11.3333L2.66667 8"
                            stroke="#10B981"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[#0A0D14] font-medium">{item}</span>
                    </div>
                  ))}

                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className={`${c_24} mb-8`}>
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-[#0A0D14] mb-6 text-center">
                  What's Next?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

                  {/* CARD 1 (default blue) */}
                  <Link
                    to="/app/tickets"
                    className={
                      "h-full w-full flex flex-col rounded-lg " +
                      "bg-gradient-to-r from-[#6a4bff] to-[#7856ff] text-white " +
                      "p-4 md:p-6 break-words whitespace-normal min-h-[96px] overflow-hidden"
                    }
                  >
                    <div className="flex-1">
                      <div className="font-semibold mb-1 text-sm md:text-[13px] leading-tight">
                        📋 Manage Tickets
                      </div>
                      <div className="text-xs md:text-sm opacity-90 leading-snug">
                        Start handling customer support — even long text will wrap properly.
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs opacity-90">Open Tickets →</span>
                    </div>
                  </Link>

                  {/* CARD 2 */}
                  <Link
                    to="/app/ai-agent"
                    className={
                      "h-full w-full flex flex-col rounded-lg border border-[#E2E4E9] " +
                      "text-[#525866] bg-white p-4 md:p-6 break-words whitespace-normal " +
                      "min-h-[96px] overflow-hidden " +
                      hoverClass
                    }
                  >
                    <div className="flex-1">
                      <div className="font-semibold mb-1 text-sm md:text-[13px] leading-tight">
                        🤖 AI Agent
                      </div>
                      <div className="text-xs md:text-sm opacity-75 leading-snug">
                        Configure your AI assistant — long descriptions wrap automatically.
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs opacity-75">Configure →</span>
                    </div>
                  </Link>

                  {/* CARD 3 */}
                  <Link
                    to="/app/help-center"
                    className={
                      "h-full w-full flex flex-col rounded-lg border border-[#E2E4E9] " +
                      "text-[#525866] bg-white p-4 md:p-6 break-words whitespace-normal " +
                      "min-h-[96px] overflow-hidden " +
                      hoverClass
                    }
                  >
                    <div className="flex-1">
                      <div className="font-semibold mb-1 text-sm md:text-[13px] leading-tight">
                        📚 Help Center
                      </div>
                      <div className="text-xs md:text-sm opacity-75 leading-snug">
                        Create knowledge base articles — fully wraps text correctly.
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs opacity-75">Create →</span>
                    </div>
                  </Link>

                  {/* CARD 4 */}
                  <Link
                    to="/app/triggers"
                    className={
                      "h-full w-full flex flex-col rounded-lg border border-[#E2E4E9] " +
                      "text-[#525866] bg-white p-4 md:p-6 break-words whitespace-normal " +
                      "min-h-[96px] overflow-hidden " +
                      hoverClass
                    }
                  >
                    <div className="flex-1">
                      <div className="font-semibold mb-1 text-sm md:text-[13px] leading-tight">
                        ⚡ Triggers
                      </div>
                      <div className="text-xs md:text-sm opacity-75 leading-snug">
                        Automate repetitive tasks — no UI distortion.
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs opacity-75">Automate →</span>
                    </div>
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </MainInner>
      </div>
    </>
  );
}



// import React from "react";
// import { Link } from "react-router-dom";
// import MainInner from "../../components/MainInner";
// import { c_24 } from "../../utilities/Classes";

// export default function Complete() {
//   return (
//     <>
//       <div className="min-h-screen bg-[#F7F5FF]">
//         <MainInner>
//           <div className="max-w-2xl mx-auto pt-16 pb-12">
//             {/* Success Icon */}
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
//                 <svg
//                   width="40"
//                   height="40"
//                   viewBox="0 0 40 40"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M33.3333 10L15 28.3333L6.66667 20"
//                     stroke="#10B981"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <h1 className="text-4xl font-bold text-[#0A0D14] mb-4">
//                 🎉 Congratulations!
//               </h1>
//               <p className="text-xl text-[#525866] mb-2">
//                 You've successfully completed the onboarding
//               </p>
//               <p className="text-lg text-[#858585]">
//                 Your Jarvey AI setup is now complete and ready to use
//               </p>
//             </div>

//             {/* Summary */}
//             <div className={`${c_24} mb-8`}>
//               <div className="p-8">
//                 <h2 className="text-xl font-semibold text-[#0A0D14] mb-6 text-center">
//                   What You've Accomplished
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M13.3333 4L6 11.3333L2.66667 8"
//                           stroke="#10B981"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-[#0A0D14] font-medium">
//                       Connected your Shopify store
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M13.3333 4L6 11.3333L2.66667 8"
//                           stroke="#10B981"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-[#0A0D14] font-medium">
//                       Set up your support email
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M13.3333 4L6 11.3333L2.66667 8"
//                           stroke="#10B981"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-[#0A0D14] font-medium">
//                       Practiced with test tickets
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M13.3333 4L6 11.3333L2.66667 8"
//                           stroke="#10B981"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-[#0A0D14] font-medium">
//                       Connected social media channels
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M13.3333 4L6 11.3333L2.66667 8"
//                           stroke="#10B981"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-[#0A0D14] font-medium">
//                       Invited your team members
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Next Steps */}

//             {/* Next Steps */}
//             <div className={`${c_24} mb-8`}>
//               <div className="p-6 md:p-8">
//                 <h2 className="text-xl font-semibold text-[#0A0D14] mb-6 text-center">
//                   What's Next?
//                 </h2>

//                 {/* grid: ensure children stretch to same height */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
//                   {/* Card 1 */}
//                   <Link
//                     to="/app/tickets"
//                     className="h-full w-full flex flex-col rounded-lg
//                    bg-gradient-to-r from-[#6a4bff] to-[#7856ff] text-white
//                    p-4 md:p-6 break-words whitespace-normal min-h-[96px] overflow-hidden"
//                   >
//                     <div className="flex-1">
//                       <div className="font-semibold mb-1 text-sm md:text-[13px] leading-tight">
//                         📋 Manage Tickets
//                       </div>
//                       <div className="text-xs md:text-sm opacity-90 leading-snug">
//                         Start handling customer support — this text can be long and will wrap correctly without breaking the layout even if someone pastes a long paragraph or a single huge word.
//                       </div>
//                     </div>

//                     {/* stable footer area (keeps spacing consistent) */}
//                     <div className="mt-4">
//                       <span className="text-xs opacity-90">Open Tickets →</span>
//                     </div>
//                   </Link>

//                   {/* Card 2 */}
//                   <Link
//                     to="/app/ai-agent"
//                     className="h-full w-full flex flex-col rounded-lg border border-[#E2E4E9]
//                    text-[#525866] bg-white p-4 md:p-6 break-words whitespace-normal min-h-[96px] overflow-hidden"
//                   >
//                     <div className="flex-1">
//                       <div className="font-semibold mb-1 text-sm md:text-[13px] leading-tight">
//                         🤖 AI Agent
//                       </div>
//                       <div className="text-xs md:text-sm opacity-75 leading-snug">
//                         Configure your AI assistant — long descriptions will wrap and won’t push the action area around.
//                       </div>
//                     </div>
//                     <div className="mt-4">
//                       <span className="text-xs opacity-75">Configure →</span>
//                     </div>
//                   </Link>

//                   {/* Card 3 */}
//                   <Link
//                     to="/app/help-center"
//                     className="h-full w-full flex flex-col rounded-lg border border-[#E2E4E9]
//                    text-[#525866] bg-white p-4 md:p-6 break-words whitespace-normal min-h-[96px] overflow-hidden"
//                   >
//                     <div className="flex-1">
//                       <div className="font-semibold mb-1 text-sm md:text-[13px] leading-tight">
//                         📚 Help Center
//                       </div>
//                       <div className="text-xs md:text-sm opacity-75 leading-snug">
//                         Create knowledge base articles — test with very long lines, long single words, and paragraphs.
//                       </div>
//                     </div>
//                     <div className="mt-4">
//                       <span className="text-xs opacity-75">Create →</span>
//                     </div>
//                   </Link>

//                   {/* Card 4 */}
//                   <Link
//                     to="/app/triggers"
//                     className="h-full w-full flex flex-col rounded-lg border border-[#E2E4E9]
//                    text-[#525866] bg-white p-4 md:p-6 break-words whitespace-normal min-h-[96px] overflow-hidden"
//                   >
//                     <div className="flex-1">
//                       <div className="font-semibold mb-1 text-sm md:text-[13px] leading-tight">
//                         ⚡ Triggers
//                       </div>
//                       <div className="text-xs md:text-sm opacity-75 leading-snug">
//                         Automate repetitive tasks — long content will not distort other elements.
//                       </div>
//                     </div>
//                     <div className="mt-4">
//                       <span className="text-xs opacity-75">Automate →</span>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </MainInner>
//       </div>
//     </>
//   );
// }
