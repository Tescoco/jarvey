import React, { useState, useRef } from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import Personalize from "../../components/ai-agent/Personalize";
import Branding from "../../components/ai-agent/Branding";
import { Link } from "react-router-dom";
import Progress from "../../components/Progress";
import { bottom_border } from "../../utilities/Classes";

export default function SetupAiAgent() {
  const [show, setShow] = useState(0);
  const progressTitle = [`Personalize AI Agent`, `Add your Knowledge`];
  
  // Create refs for both components
  const personalizeRef = useRef(null);
  const brandingRef = useRef(null);

  // Handle Next button - validate Personalize step before proceeding
  const handleNext = () => {
    if (show === 0) {
      // Validate Personalize component
      const personalizeValid = personalizeRef.current?.validate();

      if (!personalizeValid) {
        // Show error message
        alert("Please fill in all required fields before proceeding to the next step.");
        return;
      }

      // Get personalize data if needed
      const personalizeData = personalizeRef.current?.getData();
      console.log("Personalize Data:", personalizeData);

      // If validation passes, move to next step
      setShow(1);
    }
  };

  // Handle Back button
  const handleBack = () => {
    if (show > 0) {
      setShow(show - 1);
    }
  };

  // Handle Save button - validate all required fields
  const handleSave = () => {
    // Validate the Branding component (step 1)
    const brandingValid = brandingRef.current?.validate();

    if (!brandingValid) {
      // Show error message
      alert("Please fill in all required fields before saving.");
      return;
    }

    // Get the data from both components
    const personalizeData = personalizeRef.current?.getData();
    const brandingData = brandingRef.current?.getData();
    
    const allData = {
      personalize: personalizeData,
      branding: brandingData
    };

    console.log("Complete AI Agent Setup Data:", allData);

    // TODO: Add API call here to save the data
    // Example:
    // try {
    //   const response = await fetch('/api/save-ai-agent', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(allData)
    //   });
    //   if (response.ok) {
    //     // Proceed to next page
    //     redirectToNextPage();
    //   } else {
    //     alert('Error saving data. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Save error:', error);
    //   alert('Error saving data. Please try again.');
    // }

    // If validation passes, redirect
    redirectToNextPage();
  };

  const redirectToNextPage = () => {
    if (window.location.pathname.includes("onboarding")) {
      window.location.href = "/onboarding/ai-guidance";
    } else {
      window.location.href = "/app/ai-agent-setting";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Top></Top>
      <MainInner className="ai-agent">
        <Progress
          itemClass="min-w-[160px]"
          items={progressTitle}
          activeItem={show}
        />
        <div className="lg:flex gap-4 lg:gap-5 2xl:gap-6">
          <div className="mb-4 md:mb-5 lg:mb-0 w-full">
            {show === 0 && <Personalize ref={personalizeRef} />}
            {show === 1 && <Branding ref={brandingRef} />}
          </div>
          <div className="w-full lg:w-[300px] max-h-max xl:w-[355px] flex-none border border-[#E2E4E9] bg-white rounded-xl lg:rounded-2xl">
            <p className="text-sm font-medium !leading-[1.4] text-[#0A0D14] text-center py-2 lg:py-[10px] rounded-t-xl lg:rounded-t-2xl bg-[rgba(120,86,255,0.08)]">
              Ticket Preview
            </p>
            <div className="p-4 lg:p-5">
              <div className="mb-3 lg:mb-[15px]">
                <p className="text-sm text-[#0A0D14] font-semibold !leading-[1.5]">
                  Alex Home
                </p>
                <p className="text-xs text-gray !leading-[1.5]">
                  What is your return policy?
                </p>
              </div>
              <div>
                <p className="text-sm text-[#0A0D14] font-semibold !leading-[1.5]">
                  Jarvey AI
                </p>
                <p className="text-xs text-gray !leading-[1.5]">
                  Hey Alex, <br />
                  We totally get it-sometimes things just don't work out. You
                  can return your items within 30 days of purchase for a full
                  refund or exchange, as long as they're unused and in their
                  original We totally get it-sometimes things just don't work
                  out. You can return your items within 30 days of purchase for
                  a full refund or exchange, as long as they're unused and in
                  their original packaging. Feel free to reach out if you have
                  any questions! This response was created by Al
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainInner>
      <div className={`${bottom_border}`}>
        <button 
          onClick={handleBack} 
          className="btn !px-3 !min-w-max"
          disabled={show === 0}
          style={{ opacity: show === 0 ? 0.5 : 1, cursor: show === 0 ? 'not-allowed' : 'pointer' }}
        >
          Back
        </button>
        {show === 0 && (
          <button
            onClick={handleNext}
            className="btn !px-3 !min-w-max shadow !text-white"
          >
            Next
          </button>
        )}
        {show === 1 && (
          <button
            onClick={handleSave}
            className="btn !px-3 !min-w-max shadow !text-white"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import Top from "../../layouts/Top";
// import MainInner from "../../components/MainInner";
// import Personalize from "../../components/ai-agent/Personalize";
// import Branding from "../../components/ai-agent/Branding";
// import { Link } from "react-router-dom";
// import Progress from "../../components/Progress";
// import { bottom_border } from "../../utilities/Classes";

// export default function SetupAiAgent() {
//   const [show, setShow] = useState(0);
//   const progressTitle = [`Personalize AI Agent`, `Add your Knowledge`];

//   const handleSave = () => {
//     // if link is onboarding, redirect to onboarding
//     // if link is not onboarding, redirect to ai-agent-setting
//     if (window.location.pathname.includes("onboarding")) {
//       window.location.href = "/onboarding/ai-guidance";
//     } else {
//       window.location.href = "/app/ai-agent-setting";
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <Top></Top>
//       <MainInner className="ai-agent">
//         <Progress
//           itemClass="min-w-[160px]"
//           items={progressTitle}
//           activeItem={show}
//         />
//         <div className="lg:flex gap-4 lg:gap-5 2xl:gap-6">
//           <div className="mb-4 md:mb-5 lg:mb-0 w-full">
//             {show === 0 && <Personalize />}
//             {show === 1 && <Branding />}
//           </div>
//           <div className="w-full lg:w-[300px] max-h-max xl:w-[355px] flex-none border border-[#E2E4E9] bg-white rounded-xl lg:rounded-2xl">
//             <p className="text-sm font-medium !leading-[1.4] text-[#0A0D14] text-center py-2 lg:py-[10px] rounded-t-xl lg:rounded-t-2xl bg-[rgba(120,86,255,0.08)]">
//               Ticket Preview
//             </p>
//             <div className="p-4 lg:p-5">
//               <div className="mb-3 lg:mb-[15px]">
//                 <p className="text-sm text-[#0A0D14] font-semibold !leading-[1.5]">
//                   Alex Home
//                 </p>
//                 <p className="text-xs text-gray !leading-[1.5]">
//                   What is your return policy?
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-[#0A0D14] font-semibold !leading-[1.5]">
//                   Jarvey AI
//                 </p>
//                 <p className="text-xs text-gray !leading-[1.5]">
//                   Hey Alex, <br />
//                   We totally get it-sometimes things just don't work out. You
//                   can return your items within 30 days of purchase for a full
//                   refund or exchange, as long as they're unused and in their
//                   original We totally get it-sometimes things just don't work
//                   out. You can return your items within 30 days of purchase for
//                   a full refund or exchange, as long as they're unused and in
//                   their original packaging. Feel free to reach out if you have
//                   any questions! This response was created by Al
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </MainInner>
//       <div className={`${bottom_border}`}>
//         <button onClick={() => setShow(0)} className="btn !px-3 !min-w-max">
//           Back
//         </button>
//         {show === 0 && (
//           <button
//             onClick={() => setShow(1)}
//             className="btn !px-3 !min-w-max shadow !text-white"
//           >
//             Next
//           </button>
//         )}
//         {show === 1 && (
//           <Link
//             onClick={() => {
//               handleSave();
//             }}
//             className="btn !px-3 !min-w-max shadow !text-white"
//           >
//             Save
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }
