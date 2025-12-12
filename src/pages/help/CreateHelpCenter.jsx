import React, { useState, useRef } from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import Progress from "../../components/Progress";
import { bottom_border, c_border, save_btn } from "../../utilities/Classes";
import { Link } from "react-router-dom";
import AddArticles from "../../components/help-center/AddArticles";
import { Basics } from "../../components/help-center/Basics";
import { Branding } from "../../components/help-center/Branding";
import Automated from "../../components/help-center/Automated";

export default function CreateHelpCenter() {
  const progressTitle = [
    `Set up the basics`,
    `Add your branding`,
    `Add articles`,
    `Automated`,
  ];

  const [stepProgress, setStepProgress] = useState(0);
  const [formValidation, setFormValidation] = useState({
    isValid: false,
    data: null
  });

  const basicsRef = useRef(null);
  const brandingRef = useRef(null);

  // Handle validation from child components
  const handleValidationChange = (isValid, data) => {
    setFormValidation({ isValid, data });
  };

  // Handle step progression with validation
  const handleNextStep = () => {
    if (stepProgress === 0) {
      // Validate Basics form
      if (window.validateBasicsForm) {
        const isValid = window.validateBasicsForm();
        if (!isValid) {
          alert('Please fill in all required fields before proceeding.');
          return;
        }
      }
      setStepProgress(1);
    } else if (stepProgress === 1) {
      // Validate Branding form
      if (window.validateBrandingForm) {
        const isValid = window.validateBrandingForm();
        if (!isValid) {
          alert('Please complete all branding fields before proceeding.');
          return;
        }
      }
      setStepProgress(2);
    } else {
      setStepProgress(stepProgress + 1);
    }
  };

  const handleFinished = () => {
    if (window.location.pathname.includes("onboarding")) {
      window.location.href = "/onboarding/ai-power";
    } else {
      window.location.href = "/app/help-center-settings";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Top />
      <MainInner className="mb-6">
        <Progress
          className="justify-start md:justify-center mb-5 md:mb-7"
          itemClass="min-w-[120px]"
          items={progressTitle}
          activeItem={stepProgress}
        />
        {stepProgress != 2 ? (
          <div className={`${c_border}`}>
            {stepProgress === 0 && (
              <Basics
                ref={basicsRef}
                onValidationChange={handleValidationChange}
              />
            )}
            {stepProgress === 1 && (
              <Branding
                ref={brandingRef}
                onValidationChange={handleValidationChange}
              />
            )}
            {stepProgress === 3 && <Automated />}
          </div>
        ) : (
          <AddArticles />
        )}
      </MainInner>

      <div className={`${bottom_border} items-center`}>
        {stepProgress === 0 && (
          <button
            className="ml-auto btn shadow !text-white"
            onClick={handleNextStep}
          >
            Create & Customize
          </button>
        )}
        {stepProgress != 0 && (
          <>
            <Link to="/app" className={`${save_btn}`}>
              Save & Customize Later
            </Link>
            <div className="flex items-center gap-3 lg:gap-4 flex-wrap">
              <button
                className="btn !min-w-max"
                onClick={() => setStepProgress(stepProgress - 1)}
              >
                Back
              </button>
              {stepProgress === 3 ? (
                <Link
                  onClick={() => handleFinished()}
                  className="btn shadow !text-white !min-w-max"
                >
                  Finished
                </Link>
              ) : (
                <button
                  className="btn shadow !text-white !min-w-max"
                  onClick={handleNextStep}
                >
                  Save
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import Top from "../../layouts/Top";
// import MainInner from "../../components/MainInner";
// import Progress from "../../components/Progress";
// import { bottom_border, c_border, save_btn } from "../../utilities/Classes";
// import { Link } from "react-router-dom";
// import AddArticles from "../../components/help-center/AddArticles";
// import Basics from "../../components/help-center/Basics";
// import Branding from "../../components/help-center/Branding";
// import Automated from "../../components/help-center/Automated";

// export default function CreateHelpCenter() {
//   const progressTitle = [
//     `Set up the basics`,
//     `Add your branding`,
//     `Add articles`,
//     `Automated`,
//   ];
//   const [stepProgress, setStepProgress] = useState(0);

//   const handleFinished = () => {
//     // if link is onboarding, redirect to onboarding
//     // if link is not onboarding, redirect to help-center-settings
//     if (window.location.pathname.includes("onboarding")) {
//       window.location.href = "/onboarding/ai-power";
//     } else {
//       window.location.href = "/app/help-center-settings";
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <Top />
//       <MainInner className="mb-6">
//         <Progress
//           className="justify-start md:justify-center mb-5 md:mb-7"
//           itemClass="min-w-[120px]"
//           items={progressTitle}
//           activeItem={stepProgress}
//         />
//         {stepProgress != 2 ? (
//           <div className={`${c_border}`}>
//             {stepProgress === 0 && <Basics />}
//             {stepProgress === 1 && <Branding />}
//             {stepProgress === 3 && <Automated />}
//           </div>
//         ) : (
//           <AddArticles />
//         )}
//       </MainInner>
//       <div className={`${bottom_border} items-center`}>
//         {stepProgress === 0 && (
//           <button
//             className="ml-auto btn shadow !text-white"
//             onClick={() => setStepProgress(1)}
//           >
//             Create & Customize
//           </button>
//         )}
//         {stepProgress != 0 && (
//           <>
//             <Link to="/app" className={`${save_btn}`}>
//               Save & Customize Later
//             </Link>
//             {/* {stepProgress === 3 &&
//                             <div className="footer flex items-center gap-4">
//                                 <div className="flex items-center gap-3">
//                                     <button className='btn text-primary border-primary'>Save changes</button>
//                                     <button className='btn text-primary border-primary'>Cancel</button>
//                                 </div>
//                                 <button className='btn border-[#FE4333] text-[#FE4333]'>Delete help centre</button>
//                             </div>
//                         } */}
//             <div className="flex items-center gap-3 lg:gap-4 flex-wrap">
//               <button
//                 className="btn !min-w-max"
//                 onClick={() => setStepProgress(stepProgress - 1)}
//               >
//                 Back
//               </button>
//               {stepProgress === 3 ? (
//                 <Link
//                   onClick={() => handleFinished()}
//                   className="btn shadow !text-white !min-w-max"
//                 >
//                   Finished
//                 </Link>
//               ) : (
//                 <button
//                   className="btn shadow !text-white !min-w-max"
//                   onClick={() => setStepProgress(stepProgress + 1)}
//                 >
//                   Save
//                 </button>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
