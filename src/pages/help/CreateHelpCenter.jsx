import React, { useState, useRef } from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";
import Progress from "../../components/Progress";
import { bottom_border, c_border, save_btn } from "../../utilities/Classes";
import { Link } from "react-router-dom";
import AddArticles from "../../components/help-center/AddArticles";
import Basics from "../../components/help-center/Basics";
import Branding from "../../components/help-center/Branding";
import Automated from "../../components/help-center/Automated";

export default function CreateHelpCenter() {
  const progressTitle = [
    `Set up the basics`,
    `Add your branding`,
    `Add articles`,
    `Automated`,
  ];

  const [stepProgress, setStepProgress] = useState(0);
  const [validationError, setValidationError] = useState("");

  const basicsRef = useRef(null);
  const brandingRef = useRef(null);
  const addArticlesRef = useRef(null);
  const automatedRef = useRef(null);

  // Handle step progression with validation
  const handleNextStep = () => {
    setValidationError("");

    if (stepProgress === 0) {
      // Validate Basics form
      if (window.validateBasicsForm) {
        const isValid = window.validateBasicsForm();
        if (!isValid) {
          setValidationError('Please fill in all required fields before proceeding.');
          // Scroll to top to show error
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setStepProgress(1);
    } else if (stepProgress === 1) {
      // Validate Branding form
      if (window.validateBrandingForm) {
        const isValid = window.validateBrandingForm();
        if (!isValid) {
          setValidationError('Please complete all branding fields before proceeding.');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setStepProgress(2);
    } else if (stepProgress === 2) {
      // Validate AddArticles form
      if (window.validateAddArticlesForm) {
        const isValid = window.validateAddArticlesForm();
        if (!isValid) {
          setValidationError('Please complete at least one article with description and content.');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setStepProgress(3);
    } else if (stepProgress === 3) {
      if (window.validateAutomatedForm) {
        const isValid = window.validateAutomatedForm();
        if (!isValid) {
          setValidationError('Please connect a store before finishing.');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      handleFinished();
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
        {/* Validation Error Banner */}
        {validationError && (
          <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
              <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.5-6a1 1 0 01-2 0V5a1 1 0 012 0v5z" fill="#FE4234" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-800 mb-1">Validation Error</p>
              <p className="text-sm text-red-700">{validationError}</p>
            </div>
            <button
              onClick={() => setValidationError("")}
              className="text-red-500 hover:text-red-700"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}

        <Progress
          className="justify-start md:justify-center mb-5 md:mb-7"
          itemClass="min-w-[120px]"
          items={progressTitle}
          activeItem={stepProgress}
        />
        {stepProgress != 2 ? (
          <div className={`${c_border}`}>
            {stepProgress === 0 && (
              <Basics ref={basicsRef} />
            )}
            {stepProgress === 1 && (
              <Branding ref={brandingRef} />
            )}
            {stepProgress === 3 && <Automated ref={automatedRef} />}
          </div>
        ) : (
          <AddArticles ref={addArticlesRef} />
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
                onClick={() => {
                  setValidationError("");
                  setStepProgress(stepProgress - 1);
                }}
              >
                Back
              </button>
              {stepProgress === 3 ? (
                <button
                  onClick={handleNextStep}
                  className="btn shadow !text-white !min-w-max"
                >
                  Finished
                </button>
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

// import React, { useState, useRef } from "react";
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
//   const [formValidation, setFormValidation] = useState({
//     isValid: false,
//     data: null
//   });

//   const basicsRef = useRef(null);
//   const brandingRef = useRef(null);

//   // Handle validation from child components
//   const handleValidationChange = (isValid, data) => {
//     setFormValidation({ isValid, data });
//   };

//   // Handle step progression with validation
//   const handleNextStep = () => {
//     if (stepProgress === 0) {
//       // Validate Basics form
//       if (window.validateBasicsForm) {
//         const isValid = window.validateBasicsForm();
//         if (!isValid) {
//           alert('Please fill in all required fields before proceeding.');
//           return;
//         }
//       }
//       setStepProgress(1);
//     } else if (stepProgress === 1) {
//       // Validate Branding form
//       if (window.validateBrandingForm) {
//         const isValid = window.validateBrandingForm();
//         if (!isValid) {
//           alert('Please complete all branding fields before proceeding.');
//           return;
//         }
//       }
//       setStepProgress(2);
//     } else {
//       setStepProgress(stepProgress + 1);
//     }
//   };

//   const handleFinished = () => {
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
//             {stepProgress === 0 && (
//               <Basics
//                 ref={basicsRef}
//                 onValidationChange={handleValidationChange}
//               />
//             )}
//             {stepProgress === 1 && (
//               <Branding
//                 ref={brandingRef}
//                 onValidationChange={handleValidationChange}
//               />
//             )}
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
//             onClick={handleNextStep}
//           >
//             Create & Customize
//           </button>
//         )}
//         {stepProgress != 0 && (
//           <>
//             <Link to="/app" className={`${save_btn}`}>
//               Save & Customize Later
//             </Link>
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
//                   onClick={handleNextStep}
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