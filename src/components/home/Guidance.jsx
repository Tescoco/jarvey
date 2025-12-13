import React, { useState } from "react";
import Switch from "../Switch";
import Actions from "../ai-agent/Actions";
import MainInner from "../MainInner";

export default function Guidance() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(true);
  const [cardList, setCardList] = useState([
    {
      status: "Order Management",
      title: "When a customer asks for a return or exchange",
      date: "01/19/2025",
      color: "#FFC563",
      bg: "#FFF0EF",
      id: "switch1",
    },
    {
      status: "Order Status",
      title: "When a customer asks for a return or exchange",
      date: "01/19/2025",
      color: "#7856FF",
      bg: "rgba(120, 86, 255, 0.08)",
      id: "switch2",
    },
    {
      status: "Cancel Order",
      title: "When a customer asks for a return or exchange",
      date: "01/19/2025",
      color: "#858585",
      bg: "#F7F7F7",
      id: "switch3",
    },
    {
      status: "Order Status",
      title: "When a customer asks for a return or exchange",
      date: "01/19/2025",
      color: "#FFB73D",
      bg: "rgba(255, 197, 99, 0.08)",
      id: "switch4",
    },
    {
      status: "Order Issues",
      title: "When a customer asks for a return or exchange",
      date: "01/19/2025",
      color: "#FF5656",
      bg: "rgba(255, 86, 86, 0.08)",
      id: "switch5",
    },
    {
      status: "Shipping Costs",
      title: "When a customer asks for a return or exchange",
      date: "01/19/2025",
      color: "#00ABC6",
      bg: "rgba(86, 232, 255, 0.08)",
      id: "switch6",
    },
  ]);

  const tabBtns = ["Guidance", "Actions"];
  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  // Handler for Create From Template button

  const handleCreateFromTemplate = () => {
    setShowTemplateModal(true);
  };

  const handleSelectTemplate = (template) => {
    const newGuidance = {
      status: template.status,
      title: template.title,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }),
      color: template.color,
      bg: template.bg,
      id: `switch${Date.now()}`, // Generate unique ID
    };

    setCardList((prevList) => [newGuidance, ...prevList]);
    setShowTemplateModal(false);

    // Optional: Show success message
    alert("Template added successfully!");
  };


  const templateOptions = [
    {
      status: "Order Management",
      title: "When a customer asks for a return or exchange",
      color: "#FFC563",
      bg: "#FFF0EF",
    },
    {
      status: "Shipping Issues",
      title: "When a customer reports a delayed shipment",
      color: "#00ABC6",
      bg: "rgba(86, 232, 255, 0.08)",
    },
    {
      status: "Payment Problems",
      title: "When a customer has payment processing issues",
      color: "#FF5656",
      bg: "rgba(255, 86, 86, 0.08)",
    },
    {
      status: "Product Inquiry",
      title: "When a customer asks about product availability",
      color: "#7856FF",
      bg: "rgba(120, 86, 255, 0.08)",
    },
  ];

  // Handler for Delete button
  const handleDelete = (itemId) => {
    const confirmed = window.confirm("Are you sure you want to delete this guidance?");
    if (confirmed) {
      setCardList((prevList) => prevList.filter((item) => item.id !== itemId));
      console.log(`Deleted item with id: ${itemId}`);
    }
  };

  return (
    <div className="mt-3 lg:mt-4">
      <MainInner>
        <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
          {tabBtns.map((item, index) => (
            <button
              onClick={() => setActiveTab(item)}
              key={index}
              className={`min-w-[140px] font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${item === activeTab
                ? "border-btn text-btn"
                : "border-transparent text-heading"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </MainInner>
      <div className="">
        <div className="text-center mb-3 lg:mb-4 py-4 lg:py-5 px-5 rounded-lg lg:rounded-[10px] bg-[linear-gradient(91deg,_rgba(254,_67,_51,_0.06)_45.55%,_rgba(255,_197,_99,_0.06)_95.44%)]">
          <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
            {activeTab === "Guidance"
              ? "Get started with Guidance"
              : "Create Actions for Al Agent to automate top customer requests with your 3rd party apps"}
          </p>
          <p className="text-gray text-sm max-w-[440px] mx-auto font-medium !leading-[1.5]">
            {activeTab === "Guidance"
              ? "Add Guidance to tell Al Agent how to handle specific topics or inquiries, and when to escalate tickets to your team."
              : "Allow Al Agent to perform Actions such as canceling orders, updating shipping addresses, and more."}
          </p>
          <div className="mt-4 lg:mt-5 md:flex items-center justify-center gap-4 lg:gap-5">
            <button
              onClick={() => setShow(!show)}
              className="mb-3 md:mb-0  block text-xs text-[#7856FF] font-semibold !leading-[1.5] !underline hover:!no-underline"
            >
              Learn more about Guidance
            </button>
            <a
              href="#"
              className="text-xs block text-[#7856FF] font-semibold !leading-[1.5] !underline hover:!no-underline"
            >
              Watch Guidance walkthrough
            </a>
          </div>
        </div>
        {value ? (
          <div className="xl:flex items-center justify-between mb-6 lg:mb-8 xl:mb-12 2xl:mb-[50px]">
            <p className="text-base mb-4 xl:mb-0 lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14]">
              Choose a template and customize it to fit your needs
            </p>
            <div className="md:flex items-center justify-center gap-2 lg:gap-[10px]">
              <button
                onClick={() => setValue(false)}
                className="border rounded-lg p-1 mb-4 md:mb-0 hover:bg-[#8466FF] hover:text-white"
              >
                Create Custom Guidance
              </button>
              <button
                onClick={handleCreateFromTemplate}
                className="border rounded-lg p-1 mb-4 md:mb-0 hover:bg-[#8466FF] hover:text-white"
                // className="rounded-lg p-1 mb-4 md:mb-0 !shadow-[0px_1px_2px_0px_rgba(90,_54,_191,_0.48),_0px_0px_0px_1px_#6E3FF3] !text-white !bg-[#8466FF] !bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.12)_0%,_rgba(255,_255,_255,_0.00)_100%),_#7856FF]"
              >
                Create From Template
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setValue(true)} className="btn mb-4 lg:mb-5">
            Back to Guidance
          </button>
        )}
      </div>
      {activeTab === "Guidance" && (
        <>
          <div className="">
            {value ? (
              <div className="">
                <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-3 lg:mb-4">
                  My guidance
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-3">
                  {cardList.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-[#E2E4E9] p-3 lg:p-4 rounded-lg lg:rounded-xl"
                    >
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <Switch id={item.id} />
                        <p
                          className={` text-xs font-medium !leading-[1.5] max-w-max py-1 px-2 rounded-md `}
                          style={{
                            color: item.color,
                            backgroundColor: item.bg,
                          }}
                        >
                          {item.status}
                        </p>
                      </div>
                      <p className="text-[#0A0D14] text-sm lg:text-base font-medium !leading-[1.4] mb-2 lg:mb-3">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="rounded-full text-[#111111] transform hover:scale-[1.1] w-7 lg:w-8 h-7 lg:h-8 border border-[#E2E4E9] hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-200"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.28379 11.3041L3.78276 11.2719L3.28379 11.3041ZM10.7163 11.3041L10.2173 11.2719V11.2719L10.7163 11.3041ZM1.60422 2.854C1.32808 2.854 1.10422 3.07786 1.10422 3.354C1.10422 3.63015 1.32808 3.854 1.60422 3.854V2.854ZM12.3959 3.854C12.672 3.854 12.8959 3.63015 12.8959 3.354C12.8959 3.07786 12.672 2.854 12.3959 2.854V3.854ZM6.18755 6.27067C6.18755 5.99453 5.96369 5.77067 5.68755 5.77067C5.41141 5.77067 5.18755 5.99453 5.18755 6.27067H6.18755ZM5.18755 9.479C5.18755 9.75515 5.41141 9.979 5.68755 9.979C5.96369 9.979 6.18755 9.75515 6.18755 9.479H5.18755ZM8.81255 6.27067C8.81255 5.99453 8.58869 5.77067 8.31255 5.77067C8.03641 5.77067 7.81255 5.99453 7.81255 6.27067H8.81255ZM7.81255 9.479C7.81255 9.75515 8.03641 9.979 8.31255 9.979C8.58869 9.979 8.81255 9.75515 8.81255 9.479H7.81255ZM8.77567 3.47863C8.8445 3.74606 9.11709 3.90705 9.38452 3.83822C9.65194 3.76939 9.81294 3.4968 9.7441 3.22937L8.77567 3.47863ZM2.27192 3.3862L2.78483 11.3363L3.78276 11.2719L3.26985 3.32181L2.27192 3.3862ZM4.44804 12.8957H9.55206V11.8957H4.44804V12.8957ZM11.2153 11.3363L11.7282 3.3862L10.7303 3.32181L10.2173 11.2719L11.2153 11.3363ZM11.2292 2.854H2.77088V3.854H11.2292V2.854ZM1.60422 3.854H2.77088V2.854H1.60422V3.854ZM11.2292 3.854H12.3959V2.854H11.2292V3.854ZM9.55206 12.8957C10.4309 12.8957 11.1587 12.2133 11.2153 11.3363L10.2173 11.2719C10.1947 11.6227 9.90359 11.8957 9.55206 11.8957V12.8957ZM2.78483 11.3363C2.84141 12.2133 3.56923 12.8957 4.44804 12.8957V11.8957C4.09651 11.8957 3.80539 11.6227 3.78276 11.2719L2.78483 11.3363ZM5.18755 6.27067V9.479H6.18755V6.27067H5.18755ZM7.81255 6.27067V9.479H8.81255V6.27067H7.81255ZM7.00006 2.104C7.85364 2.104 8.57212 2.6878 8.77567 3.47863L9.7441 3.22937C9.4296 2.00745 8.32097 1.104 7.00006 1.104V2.104ZM5.22446 3.47863C5.42801 2.6878 6.14649 2.104 7.00006 2.104V1.104C5.67916 1.104 4.57052 2.00745 4.25602 3.22937L5.22446 3.47863Z"
                              fill="currentColor"
                              fillOpacity="0.7"
                            />
                          </svg>
                        </button>
                        <p className="text-gray text-xs font-medium !leading-[1.4]">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Actions />
            )}
          </div>
        </>
      )}
      {activeTab === "Actions" && (
        <div className="">
          {value ? (
            <div className="">
              <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-3 lg:mb-4">
                Actions
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-3">
                {cardList.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-[#E2E4E9] p-3 lg:p-4 rounded-lg lg:rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2 lg:mb-3">
                      <Switch id={item.id} />
                      <p
                        className={` text-xs font-medium !leading-[1.5] max-w-max py-1 px-2 rounded-md `}
                        style={{ color: item.color, backgroundColor: item.bg }}
                      >
                        {item.status}
                      </p>
                    </div>
                    <p className="text-[#0A0D14] text-sm lg:text-base font-medium !leading-[1.4] mb-2 lg:mb-3">
                      {item.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="rounded-full text-[#111111] transform hover:scale-[1.1] w-7 lg:w-8 h-7 lg:h-8 border border-[#E2E4E9] hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-200"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.28379 11.3041L3.78276 11.2719L3.28379 11.3041ZM10.7163 11.3041L10.2173 11.2719V11.2719L10.7163 11.3041ZM1.60422 2.854C1.32808 2.854 1.10422 3.07786 1.10422 3.354C1.10422 3.63015 1.32808 3.854 1.60422 3.854V2.854ZM12.3959 3.854C12.672 3.854 12.8959 3.63015 12.8959 3.354C12.8959 3.07786 12.672 2.854 12.3959 2.854V3.854ZM6.18755 6.27067C6.18755 5.99453 5.96369 5.77067 5.68755 5.77067C5.41141 5.77067 5.18755 5.99453 5.18755 6.27067H6.18755ZM5.18755 9.479C5.18755 9.75515 5.41141 9.979 5.68755 9.979C5.96369 9.979 6.18755 9.75515 6.18755 9.479H5.18755ZM8.81255 6.27067C8.81255 5.99453 8.58869 5.77067 8.31255 5.77067C8.03641 5.77067 7.81255 5.99453 7.81255 6.27067H8.81255ZM7.81255 9.479C7.81255 9.75515 8.03641 9.979 8.31255 9.979C8.58869 9.979 8.81255 9.75515 8.81255 9.479H7.81255ZM8.77567 3.47863C8.8445 3.74606 9.11709 3.90705 9.38452 3.83822C9.65194 3.76939 9.81294 3.4968 9.7441 3.22937L8.77567 3.47863ZM2.27192 3.3862L2.78483 11.3363L3.78276 11.2719L3.26985 3.32181L2.27192 3.3862ZM4.44804 12.8957H9.55206V11.8957H4.44804V12.8957ZM11.2153 11.3363L11.7282 3.3862L10.7303 3.32181L10.2173 11.2719L11.2153 11.3363ZM11.2292 2.854H2.77088V3.854H11.2292V2.854ZM1.60422 3.854H2.77088V2.854H1.60422V3.854ZM11.2292 3.854H12.3959V2.854H11.2292V3.854ZM9.55206 12.8957C10.4309 12.8957 11.1587 12.2133 11.2153 11.3363L10.2173 11.2719C10.1947 11.6227 9.90359 11.8957 9.55206 11.8957V12.8957ZM2.78483 11.3363C2.84141 12.2133 3.56923 12.8957 4.44804 12.8957V11.8957C4.09651 11.8957 3.80539 11.6227 3.78276 11.2719L2.78483 11.3363ZM5.18755 6.27067V9.479H6.18755V6.27067H5.18755ZM7.81255 6.27067V9.479H8.81255V6.27067H7.81255ZM7.00006 2.104C7.85364 2.104 8.57212 2.6878 8.77567 3.47863L9.7441 3.22937C9.4296 2.00745 8.32097 1.104 7.00006 1.104V2.104ZM5.22446 3.47863C5.42801 2.6878 6.14649 2.104 7.00006 2.104V1.104C5.67916 1.104 4.57052 2.00745 4.25602 3.22937L5.22446 3.47863Z"
                            fill="currentColor"
                            fillOpacity="0.7"
                          />
                        </svg>
                      </button>
                      <p className="text-gray text-xs font-medium !leading-[1.4]">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Actions />
          )}
        </div>
      )}

      {/* Template Selection Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#0A0D14]">
                Select a Template
              </h3>
              <button
                onClick={() => setShowTemplateModal(false)}
                className="text-gray hover:text-[#0A0D14] text-2xl"
              >
                ×
              </button>
            </div>

            <p className="text-sm text-gray mb-6">
              Choose a template to get started quickly
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templateOptions.map((template, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectTemplate(template)}
                  className="border-2 border-[#E2E4E9] hover:border-[#7856FF] p-4 rounded-lg text-left transition-all duration-200"
                >
                  <p
                    className="text-xs font-medium !leading-[1.5] max-w-max py-1 px-2 rounded-md mb-3"
                    style={{
                      color: template.color,
                      backgroundColor: template.bg,
                    }}
                  >
                    {template.status}
                  </p>
                  <p className="text-[#0A0D14] text-sm font-medium !leading-[1.4]">
                    {template.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import Switch from "../Switch";
// import Actions from "../ai-agent/Actions";
// import MainInner from "../MainInner";

// export default function Guidance() {
//   const [show, setShow] = useState(false);
//   const [value, setValue] = useState(true);

//   //   const handleClick = () => {
//   //     setShow(!show)
//   //   }

//   const CardList = [
//     {
//       status: "Order Management",
//       title: "When a customer asks for a return or exchange",
//       date: "01/19/2025",
//       color: "#FFC563",
//       bg: "#FFF0EF",
//       id: "switch1",
//     },
//     {
//       status: "Order Status",
//       title: "When a customer asks for a return or exchange",
//       date: "01/19/2025",
//       color: "#7856FF",
//       bg: "rgba(120, 86, 255, 0.08)",
//       id: "switch2",
//     },
//     {
//       status: "Cancel Order",
//       title: "When a customer asks for a return or exchange",
//       date: "01/19/2025",
//       color: "#858585",
//       bg: "#F7F7F7",
//       id: "switch3",
//     },
//     {
//       status: "Order Status",
//       title: "When a customer asks for a return or exchange",
//       date: "01/19/2025",
//       color: "#FFB73D",
//       bg: "rgba(255, 197, 99, 0.08)",
//       id: "switch4",
//     },
//     {
//       status: "Order Issues",
//       title: "When a customer asks for a return or exchange",
//       date: "01/19/2025",
//       color: "#FF5656",
//       bg: "rgba(255, 86, 86, 0.08)",
//       id: "switch5",
//     },
//     {
//       status: "Shipping Costs",
//       title: "When a customer asks for a return or exchange",
//       date: "01/19/2025",
//       color: "#00ABC6",
//       bg: "rgba(86, 232, 255, 0.08)",
//       id: "switch6",
//     },
//   ];
//   const tabBtns = ["Guidance", "Actions"];
//   const [activeTab, setActiveTab] = useState(tabBtns[0]);
//   return (
//     <div className="mt-3 lg:mt-4">
//       <MainInner>
//         <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
//           {tabBtns.map((item, index) => (
//             <button
//               onClick={() => setActiveTab(item)}
//               key={index}
//               className={`min-w-[140px] font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${
//                 item === activeTab
//                   ? "border-btn text-btn"
//                   : "border-transparent text-heading"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </MainInner>
//       <div className="">
//         <div className="text-center mb-3 lg:mb-4 py-4 lg:py-5 px-5 rounded-lg lg:rounded-[10px] bg-[linear-gradient(91deg,_rgba(254,_67,_51,_0.06)_45.55%,_rgba(255,_197,_99,_0.06)_95.44%)]">
//           <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-1">
//             {activeTab === "Guidance"
//               ? "Get started with Guidance"
//               : "Create Actions for Al Agent to automate top customer requests with your 3rd party apps"}
//           </p>
//           <p className="text-gray text-sm max-w-[440px] mx-auto font-medium !leading-[1.5]">
//             {activeTab === "Guidance"
//               ? "Add Guidance to tell Al Agent how to handle specific topics or inquiries, and when to escalate tickets to your team."
//               : "Allow Al Agent to perform Actions such as canceling orders, updating shipping addresses, and more."}
//           </p>
//           <div className="mt-4 lg:mt-5 md:flex items-center justify-center gap-4 lg:gap-5">
//             <button
//               onClick={() => setShow(!show)}
//               className="mb-3 md:mb-0  block text-xs text-[#7856FF] font-semibold !leading-[1.5] !underline hover:!no-underline"
//             >
//               Learn more about Guidance
//             </button>
//             <a
//               href="#"
//               className="text-xs block text-[#7856FF] font-semibold !leading-[1.5] !underline hover:!no-underline"
//             >
//               Watch Guidance walkthrough
//             </a>
//           </div>
//         </div>
//         {value ? (
//           <div className="xl:flex items-center justify-between mb-6 lg:mb-8 xl:mb-12 2xl:mb-[50px]">
//             <p className="text-base mb-4 xl:mb-0 lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14]">
//               Choose a template and customize it to fit your needs
//             </p>
//             <div className="md:flex items-center justify-center gap-2 lg:gap-[10px]">
//               <button
//                 onClick={() => setValue(false)}
//                 className="btn mb-4 md:mb-0"
//               >
//                 Create Custom Guidance
//               </button>
//               <button className="btn !shadows-[0px_1px_2px_0px_rgba(90,_54,_191,_0.48),_0px_0px_0px_1px_#6E3FF3] !text-white !bg-[#8466FF] !bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.12)_0%,_rgba(255,_255,_255,_0.00)_100%),_#7856FF]">
//                 Create From template
//               </button>
//             </div>
//           </div>
//         ) : (
//           <button onClick={() => setValue(true)} className="btn mb-4 lg:mb-5">
//             Back to Guidance
//           </button>
//         )}
//       </div>
//       {activeTab === "Guidance" && (
//         <>
//           <div className="">
//             {value ? (
//               <div className="">
//                 <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-3 lg:mb-4">
//                   My guidance
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-3">
//                   {CardList.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="border border-[#E2E4E9] p-3 lg:p-4 rounded-lg lg:rounded-xl"
//                     >
//                       <div className="flex items-center justify-between mb-2 lg:mb-3">
//                         <Switch id={item.id} />
//                         <p
//                           className={` text-xs font-medium !leading-[1.5] max-w-max py-1 px-2 rounded-md `}
//                           style={{
//                             color: item.color,
//                             backgroundColor: item.bg,
//                           }}
//                         >
//                           {item.status}
//                         </p>
//                       </div>
//                       <p className="text-[#0A0D14] text-sm lg:text-base font-medium !leading-[1.4] mb-2 lg:mb-3">
//                         {item.title}
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <button className="rounded-full text-[#111111] transform hover:scale-[1.1] w-7 lg:w-8 h-7 lg:h-8 border border-[#E2E4E9] hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center">
//                           <svg
//                             width="14"
//                             height="14"
//                             viewBox="0 0 14 14"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M3.28379 11.3041L3.78276 11.2719L3.28379 11.3041ZM10.7163 11.3041L10.2173 11.2719V11.2719L10.7163 11.3041ZM1.60422 2.854C1.32808 2.854 1.10422 3.07786 1.10422 3.354C1.10422 3.63015 1.32808 3.854 1.60422 3.854V2.854ZM12.3959 3.854C12.672 3.854 12.8959 3.63015 12.8959 3.354C12.8959 3.07786 12.672 2.854 12.3959 2.854V3.854ZM6.18755 6.27067C6.18755 5.99453 5.96369 5.77067 5.68755 5.77067C5.41141 5.77067 5.18755 5.99453 5.18755 6.27067H6.18755ZM5.18755 9.479C5.18755 9.75515 5.41141 9.979 5.68755 9.979C5.96369 9.979 6.18755 9.75515 6.18755 9.479H5.18755ZM8.81255 6.27067C8.81255 5.99453 8.58869 5.77067 8.31255 5.77067C8.03641 5.77067 7.81255 5.99453 7.81255 6.27067H8.81255ZM7.81255 9.479C7.81255 9.75515 8.03641 9.979 8.31255 9.979C8.58869 9.979 8.81255 9.75515 8.81255 9.479H7.81255ZM8.77567 3.47863C8.8445 3.74606 9.11709 3.90705 9.38452 3.83822C9.65194 3.76939 9.81294 3.4968 9.7441 3.22937L8.77567 3.47863ZM2.27192 3.3862L2.78483 11.3363L3.78276 11.2719L3.26985 3.32181L2.27192 3.3862ZM4.44804 12.8957H9.55206V11.8957H4.44804V12.8957ZM11.2153 11.3363L11.7282 3.3862L10.7303 3.32181L10.2173 11.2719L11.2153 11.3363ZM11.2292 2.854H2.77088V3.854H11.2292V2.854ZM1.60422 3.854H2.77088V2.854H1.60422V3.854ZM11.2292 3.854H12.3959V2.854H11.2292V3.854ZM9.55206 12.8957C10.4309 12.8957 11.1587 12.2133 11.2153 11.3363L10.2173 11.2719C10.1947 11.6227 9.90359 11.8957 9.55206 11.8957V12.8957ZM2.78483 11.3363C2.84141 12.2133 3.56923 12.8957 4.44804 12.8957V11.8957C4.09651 11.8957 3.80539 11.6227 3.78276 11.2719L2.78483 11.3363ZM5.18755 6.27067V9.479H6.18755V6.27067H5.18755ZM7.81255 6.27067V9.479H8.81255V6.27067H7.81255ZM7.00006 2.104C7.85364 2.104 8.57212 2.6878 8.77567 3.47863L9.7441 3.22937C9.4296 2.00745 8.32097 1.104 7.00006 1.104V2.104ZM5.22446 3.47863C5.42801 2.6878 6.14649 2.104 7.00006 2.104V1.104C5.67916 1.104 4.57052 2.00745 4.25602 3.22937L5.22446 3.47863Z"
//                               fill="currentColor"
//                               fillOpacity="0.7"
//                             />
//                           </svg>
//                         </button>
//                         <p className="text-gray text-xs font-medium !leading-[1.4]">
//                           {item.date}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <Actions />
//             )}
//           </div>
//         </>
//       )}
//       {activeTab === "Actions" && (
//         <div className="">
//           {value ? (
//             <div className="">
//               <p className="text-base lg:text-lg font-semibold !leading-[1.5] text-[#0A0D14] mb-3 lg:mb-4">
//                 Actions
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-3">
//                 {CardList.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="border border-[#E2E4E9] p-3 lg:p-4 rounded-lg lg:rounded-xl"
//                   >
//                     <div className="flex items-center justify-between mb-2 lg:mb-3">
//                       <Switch id={item.id} />
//                       <p
//                         className={` text-xs font-medium !leading-[1.5] max-w-max py-1 px-2 rounded-md `}
//                         style={{ color: item.color, backgroundColor: item.bg }}
//                       >
//                         {item.status}
//                       </p>
//                     </div>
//                     <p className="text-[#0A0D14] text-sm lg:text-base font-medium !leading-[1.4] mb-2 lg:mb-3">
//                       {item.title}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <button className="rounded-full text-[#111111] transform hover:scale-[1.1] w-7 lg:w-8 h-7 lg:h-8 border border-[#E2E4E9] hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center">
//                         <svg
//                           width="14"
//                           height="14"
//                           viewBox="0 0 14 14"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M3.28379 11.3041L3.78276 11.2719L3.28379 11.3041ZM10.7163 11.3041L10.2173 11.2719V11.2719L10.7163 11.3041ZM1.60422 2.854C1.32808 2.854 1.10422 3.07786 1.10422 3.354C1.10422 3.63015 1.32808 3.854 1.60422 3.854V2.854ZM12.3959 3.854C12.672 3.854 12.8959 3.63015 12.8959 3.354C12.8959 3.07786 12.672 2.854 12.3959 2.854V3.854ZM6.18755 6.27067C6.18755 5.99453 5.96369 5.77067 5.68755 5.77067C5.41141 5.77067 5.18755 5.99453 5.18755 6.27067H6.18755ZM5.18755 9.479C5.18755 9.75515 5.41141 9.979 5.68755 9.979C5.96369 9.979 6.18755 9.75515 6.18755 9.479H5.18755ZM8.81255 6.27067C8.81255 5.99453 8.58869 5.77067 8.31255 5.77067C8.03641 5.77067 7.81255 5.99453 7.81255 6.27067H8.81255ZM7.81255 9.479C7.81255 9.75515 8.03641 9.979 8.31255 9.979C8.58869 9.979 8.81255 9.75515 8.81255 9.479H7.81255ZM8.77567 3.47863C8.8445 3.74606 9.11709 3.90705 9.38452 3.83822C9.65194 3.76939 9.81294 3.4968 9.7441 3.22937L8.77567 3.47863ZM2.27192 3.3862L2.78483 11.3363L3.78276 11.2719L3.26985 3.32181L2.27192 3.3862ZM4.44804 12.8957H9.55206V11.8957H4.44804V12.8957ZM11.2153 11.3363L11.7282 3.3862L10.7303 3.32181L10.2173 11.2719L11.2153 11.3363ZM11.2292 2.854H2.77088V3.854H11.2292V2.854ZM1.60422 3.854H2.77088V2.854H1.60422V3.854ZM11.2292 3.854H12.3959V2.854H11.2292V3.854ZM9.55206 12.8957C10.4309 12.8957 11.1587 12.2133 11.2153 11.3363L10.2173 11.2719C10.1947 11.6227 9.90359 11.8957 9.55206 11.8957V12.8957ZM2.78483 11.3363C2.84141 12.2133 3.56923 12.8957 4.44804 12.8957V11.8957C4.09651 11.8957 3.80539 11.6227 3.78276 11.2719L2.78483 11.3363ZM5.18755 6.27067V9.479H6.18755V6.27067H5.18755ZM7.81255 6.27067V9.479H8.81255V6.27067H7.81255ZM7.00006 2.104C7.85364 2.104 8.57212 2.6878 8.77567 3.47863L9.7441 3.22937C9.4296 2.00745 8.32097 1.104 7.00006 1.104V2.104ZM5.22446 3.47863C5.42801 2.6878 6.14649 2.104 7.00006 2.104V1.104C5.67916 1.104 4.57052 2.00745 4.25602 3.22937L5.22446 3.47863Z"
//                             fill="currentColor"
//                             fillOpacity="0.7"
//                           />
//                         </svg>
//                       </button>
//                       <p className="text-gray text-xs font-medium !leading-[1.4]">
//                         {item.date}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <Actions />
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
