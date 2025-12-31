import React, { useState, useEffect, forwardRef } from "react";
import Checkbox from "../Checkbox";
import RichTextEditor from "../text-editor/Editor";

const AddArticles = forwardRef((props, ref) => {
  const [editingItem, setEditingItem] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [selectedArticles, setSelectedArticles] = useState({});
  const [completedArticles, setCompletedArticles] = useState({});
  const [validationError, setValidationError] = useState("");

  // Dummy rich text content for editing
  const dummyEditContent = {
    "How do I apply promo/discount codes?": `
      <h2>How to Apply Promo/Discount Codes</h2>
      <p>To apply a promo or discount code, please follow these simple steps:</p>
      <ol>
        <li>Add your desired items to the shopping cart</li>
        <li>Proceed to checkout</li>
        <li>Look for the "Discount Code" or "Promo Code" field</li>
        <li>Enter your code exactly as provided</li>
        <li>Click "Apply" to see your new total</li>
      </ol>
    `,
    "How do I use my benefits/rewards points?": `
      <h2>Using Your Benefits/Rewards Points</h2>
      <p>Redeeming your rewards points is easy! Here's how:</p>
      <ol>
        <li>Log into your account</li>
        <li>Navigate to your rewards/points balance</li>
        <li>Select the items you want to purchase</li>
      </ol>
    `,
  };

  const dummyDescriptions = {
    "How do I apply promo/discount codes?": "Learn how to apply promotional and discount codes to your orders at checkout.",
    "How do I use my benefits/rewards points?": "Discover how to redeem your rewards points for discounts on your purchases.",
  };

  // Validate form - at least one article must be selected and completed
  const validateForm = () => {
    const selectedCount = Object.values(selectedArticles).filter(Boolean).length;
    const completedCount = Object.values(completedArticles).filter(Boolean).length;

    if (selectedCount === 0) {
      setValidationError("Please select at least one article");
      return false;
    }

    if (completedCount === 0) {
      setValidationError("Please complete at least one selected article with description and content");
      return false;
    }

    setValidationError("");
    return true;
  };

  // Expose validation function globally
  useEffect(() => {
    window.validateAddArticlesForm = validateForm;

    return () => {
      delete window.validateAddArticlesForm;
    };
  }, [selectedArticles, completedArticles]);

  const handleEditClick = (itemText) => {
    setEditingItem(itemText);
    setEditingContent(
      dummyEditContent[itemText] || `<p>Edit content for: ${itemText}</p>`
    );
    setArticleDescription(
      completedArticles[itemText]?.description || dummyDescriptions[itemText] || ""
    );
  };

  const handleSaveEdit = () => {
    // Validate description and content
    if (!articleDescription.trim()) {
      alert("Please enter a description for this article");
      return;
    }

    if (!editingContent.trim() || editingContent.trim() === "<p></p>") {
      alert("Please enter content for this article");
      return;
    }

    // Save the completed article
    setCompletedArticles(prev => ({
      ...prev,
      [editingItem]: {
        description: articleDescription,
        content: editingContent
      }
    }));

    // Auto-select the article checkbox if not already selected
    if (!selectedArticles[editingItem]) {
      setSelectedArticles(prev => ({
        ...prev,
        [editingItem]: true
      }));
    }

    console.log("Saving content:", editingContent);
    console.log("Saving description:", articleDescription);

    setEditingItem(null);
    setEditingContent("");
    setArticleDescription("");
    setValidationError("");
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setEditingContent("");
    setArticleDescription("");
  };

  const handleCheckboxChange = (itemText, checked) => {
    setSelectedArticles(prev => ({
      ...prev,
      [itemText]: checked
    }));
  };

  const account = [
    {
      title: "PAYMENTS & DISCOUNTS",
      des: [
        "How do I apply promo/discount codes?",
        "How do I use my benefits/rewards points?",
      ],
    },
    {
      title: "ACCOUNT & SUBSCRIPTIONS",
      des: [
        "How do I apply promo/discount codes?",
        "How do I use my benefits/rewards points?",
      ],
    },
  ];

  const right = [
    {
      title: "How do I apply promo/discount codes?",
      name: "To apply a promo or discount code:",
      path: "If you're having trouble entering your promo code, please try clearing the cache on your web browser or trying on a different device.",
      des: [
        "Proceed to checkout and enter your code in the ['Discount Code'] field.",
        "Click ['Apply'] to see your new total before finalizing your order.",
        "Only one code can be used per order.",
      ],
    },
  ];

  const single = ["pb-4 lg:pb-5 border-b border-[#E2E4E9]"];

  return (
    <div>
      {/* Validation Error */}
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

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <div className="p-5 border border-solid border-[#E2E4E9] rounded-2xl">
            <div className="text mb-4">
              <h2 className="text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1">
                Add articles using templates
              </h2>
              <p className="text-xs text-[#858585] font-inter font-normal !leading-normal uppercase mb-5">
                The template language is based on the default language set in Step
                1. You can import your own articles after onboarding.
              </p>
            </div>
            <div className="wrap">
              {account.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-4">
                  <p className="text-xs text-[#858585] font-inter font-semibold !leading-normal uppercase mb-5">
                    {section.title}
                  </p>
                  {section.des.map((item, itemIndex) => {
                    const uniqueKey = `${sectionIndex}-${itemIndex}`;
                    const isCompleted = completedArticles[item];

                    return (
                      <div
                        key={uniqueKey}
                        className={`${single} flex items-center justify-between mt-5`}
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <Checkbox
                            checked={selectedArticles[item] || false}
                            id={`keep-${uniqueKey}`}
                            onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                          />
                          <label
                            htmlFor={`keep-${uniqueKey}`}
                            className="text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer flex-1"
                          >
                            {item}
                            {isCompleted && (
                              <span className="ml-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                                ✓ Completed
                              </span>
                            )}
                          </label>
                        </div>
                        <button
                          onClick={() => handleEditClick(item)}
                          className="cursor-pointer hover:opacity-70 transition-opacity"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6667 17.4994H17.5M17.1548 4.23758L15.7618 2.8446C15.111 2.19373 14.0557 2.19373 13.4048 2.8446L2.98816 13.2613C2.67559 13.5738 2.5 13.9978 2.5 14.4398V17.4994H5.55964C6.00167 17.4994 6.42559 17.3238 6.73816 17.0113L17.1548 6.5946C17.8057 5.94373 17.8057 4.88845 17.1548 4.23758Z"
                              stroke="black"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          <div className="">
            {right.map((item, index) => (
              <div
                className="right p-5 bg-[#F8F7FF] border border-solid border-[#E2E4E9] rounded-2xl"
                key={index}
              >
                <h2 className="text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1">
                  {item.title}
                </h2>
                <p>{item.name}</p>
                <ul className="!list-disc pl-6">
                  {item.des.map((item, index) => (
                    <li className="" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p>{item.path}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rich Text Editor Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-[#0A0D14]">
                  Edit Article: {editingItem}
                </h3>
                <button
                  onClick={handleCancelEdit}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Description Box */}
              <div className="mb-6">
                <label
                  htmlFor="article-description"
                  className="block text-sm font-medium text-[#0A0D14] mb-2"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="article-description"
                  value={articleDescription}
                  onChange={(e) => setArticleDescription(e.target.value)}
                  placeholder="Enter a brief description of this article (recommended 150-160 characters for SEO)"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                />
                <p className="mt-1 text-xs text-gray-500">
                  {articleDescription.length} characters
                </p>
              </div>

              {/* Article Content Editor */}
              <div className="mb-6">
                <label
                  htmlFor="article-content"
                  className="block text-sm font-medium text-[#0A0D14] mb-2"
                >
                  Article Content <span className="text-red-500">*</span>
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <RichTextEditor />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCancelEdit}
                  className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-6 py-2.5 bg-[#7856FF] text-white rounded-lg hover:bg-[#6345E0] font-medium transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

AddArticles.displayName = 'AddArticles';

export default AddArticles;

// import React, { useState } from "react";
// import Checkbox from "../Checkbox";
// import RichTextEditor from "../text-editor/Editor";

// export default function AddArticles() {
//   const [editingItem, setEditingItem] = useState(null);
//   const [editingContent, setEditingContent] = useState("");
//   // FIX: Add state for article description
//   const [articleDescription, setArticleDescription] = useState("");

//   // Dummy rich text content for editing
//   const dummyEditContent = {
//     "How do I apply promo/discount codes?": `
//       <h2>How to Apply Promo/Discount Codes</h2>
//       <p>To apply a promo or discount code, please follow these simple steps:</p>
//       <ol>
//         <li>Add your desired items to the shopping cart</li>
//         <li>Proceed to checkout</li>
//         <li>Look for the "Discount Code" or "Promo Code" field</li>
//         <li>Enter your code exactly as provided</li>
//         <li>Click "Apply" to see your new total</li>
//       </ol>
//       <p><strong>Important Notes:</strong></p>
//       <ul>
//         <li>Only one code can be used per order</li>
//         <li>Codes are case-sensitive</li>
//         <li>Check expiration dates before applying</li>
//       </ul>
//       <p>If you're having trouble entering your promo code, please try clearing the cache on your web browser or trying on a different device.</p>
//     `,
//     "How do I use my benefits/rewards points?": `
//       <h2>Using Your Benefits/Rewards Points</h2>
//       <p>Redeeming your rewards points is easy! Here's how:</p>
//       <ol>
//         <li>Log into your account</li>
//         <li>Navigate to your rewards/points balance</li>
//         <li>Select the items you want to purchase</li>
//         <li>At checkout, choose "Use Points" option</li>
//         <li>Select how many points you want to apply</li>
//       </ol>
//       <p><strong>Points Conversion:</strong></p>
//       <ul>
//         <li>100 points = $1 discount</li>
//         <li>Minimum redemption: 500 points</li>
//         <li>Maximum per order: 5000 points</li>
//       </ul>
//       <p>Points expire after 12 months of inactivity, so make sure to use them regularly!</p>
//     `,
//   };

//   // FIX: Add dummy descriptions for each article
//   const dummyDescriptions = {
//     "How do I apply promo/discount codes?": "Learn how to apply promotional and discount codes to your orders at checkout.",
//     "How do I use my benefits/rewards points?": "Discover how to redeem your rewards points for discounts on your purchases.",
//   };

//   const handleEditClick = (itemText) => {
//     setEditingItem(itemText);
//     setEditingContent(
//       dummyEditContent[itemText] || `<p>Edit content for: ${itemText}</p>`
//     );
//     // FIX: Set the description when editing
//     setArticleDescription(
//       dummyDescriptions[itemText] || ""
//     );
//   };

//   const handleSaveEdit = () => {
//     // Here you would typically save the content to your backend
//     console.log("Saving content:", editingContent);
//     console.log("Saving description:", articleDescription);
//     setEditingItem(null);
//     setEditingContent("");
//     setArticleDescription("");
//   };

//   const handleCancelEdit = () => {
//     setEditingItem(null);
//     setEditingContent("");
//     setArticleDescription("");
//   };

//   const account = [
//     {
//       title: "PAYMENTS & DISCOUNTS",
//       des: [
//         "How do I apply promo/discount codes?",
//         "How do I use my benefits/rewards points?",
//       ],
//     },
//     {
//       title: "ACCOUNT & SUBSCRIPTIONS",
//       des: [
//         "How do I apply promo/discount codes?",
//         "How do I use my benefits/rewards points?",
//       ],
//     },
//     {
//       title: "ACCOUNT & SUBSCRIPTIONS",
//       des: [
//         "How do I apply promo/discount codes?",
//         "How do I use my benefits/rewards points?",
//       ],
//     },
//     {
//       title: "ACCOUNT & SUBSCRIPTIONS",
//       des: [
//         "How do I apply promo/discount codes?",
//         "How do I use my benefits/rewards points?",
//       ],
//     },
//   ];
//   const right = [
//     {
//       title: "How do I apply promo/discount codes?",
//       name: "To apply a promo or discount code:",
//       path: "If you're having trouble entering your promo code, please try clearing the cache on your web browser or trying on a different device.",
//       des: [
//         "Proceed to checkout and enter your code in the ['Discount Code'] field.",
//         "Click ['Apply'] to see your new total before finalizing your order.",
//         "Only one code can be used per order.",
//       ],
//     },
//   ];
//   const single = ["pb-4 lg:pb-5 border-b border-[#E2E4E9]"];

//   return (
//     <div className="grid grid-cols-12 gap-5">
//       <div className="col-span-12 lg:col-span-7 xl:col-span-8">
//         <div className="p-5 border border-solid border-[#E2E4E9] rounded-2xl">
//           <div className="text mb-4">
//             <h2 className="text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1">
//               Add articles using templates
//             </h2>
//             <p className="text-xs text-[#858585] font-inter font-normal !leading-normal uppercase mb-5">
//               The template language is based on the default language set in Step
//               1. You can import your own articles after onboarding.
//             </p>
//           </div>
//           <div className="wrap">
//             {account.map((item, index) => (
//               <div key={index} className="mb-4">
//                 <p className="text-xs text-[#858585] font-inter font-semibold !leading-normal uppercase mb-5">
//                   {item.title}
//                 </p>
//                 {item.des.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`${single} flex items-center justify-between mt-5`}
//                   >
//                     <div className="flex items-center gap-2">
//                       <Checkbox checked id={`keep-${index}`} />
//                       <label
//                         htmlFor={`keep-${index}`}
//                         className="text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer"
//                       >
//                         {item}
//                       </label>
//                     </div>
//                     <button
//                       onClick={() => handleEditClick(item)}
//                       className="cursor-pointer hover:opacity-70 transition-opacity"
//                     >
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M11.6667 17.4994H17.5M17.1548 4.23758L15.7618 2.8446C15.111 2.19373 14.0557 2.19373 13.4048 2.8446L2.98816 13.2613C2.67559 13.5738 2.5 13.9978 2.5 14.4398V17.4994H5.55964C6.00167 17.4994 6.42559 17.3238 6.73816 17.0113L17.1548 6.5946C17.8057 5.94373 17.8057 4.88845 17.1548 4.23758Z"
//                           stroke="black"
//                           strokeWidth="1.66667"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="col-span-12 lg:col-span-5 xl:col-span-4">
//         <div className="">
//           {right.map((item, index) => (
//             <div
//               className="right p-5 bg-[#F8F7FF] border border-solid border-[#E2E4E9] rounded-2xl"
//               key={index}
//             >
//               <h2 className="text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-1">
//                 {item.title}
//               </h2>
//               <p>{item.name}</p>
//               <ul className="!list-disc pl-6">
//                 {item.des.map((item, index) => (
//                   <li className="" key={index}>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <p>{item.path}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Rich Text Editor Modal */}
//       {editingItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-xl font-semibold text-[#0A0D14]">
//                 Edit Article: {editingItem}
//               </h3>
//               <button
//                 onClick={handleCancelEdit}
//                 className="text-gray-500 hover:text-gray-700 text-2xl"
//               >
//                 ×
//               </button>
//             </div>

//             {/* FIX: Add Description Box */}
//             <div className="mb-6">
//               <label
//                 htmlFor="article-description"
//                 className="block text-sm font-medium text-[#0A0D14] mb-2"
//               >
//                 Description <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 id="article-description"
//                 value={articleDescription}
//                 onChange={(e) => setArticleDescription(e.target.value)}
//                 placeholder="Enter a brief description of this article (recommended 150-160 characters for SEO)"
//                 rows={3}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
//               />
//               <p className="mt-1 text-xs text-gray-500">
//                 {articleDescription.length} characters
//               </p>
//             </div>

//             {/* Article Content Editor */}
//             <div className="mb-6">
//               <label
//                 htmlFor="article-content"
//                 className="block text-sm font-medium text-[#0A0D14] mb-2"
//               >
//                 Article Content <span className="text-red-500">*</span>
//               </label>
//               <div className="border border-gray-300 rounded-lg overflow-hidden">
//                 <RichTextEditor />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//               <button
//                 onClick={handleCancelEdit}
//                 className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSaveEdit}
//                 className="px-6 py-2.5 bg-[#7856FF] text-white rounded-lg hover:bg-[#6345E0] font-medium transition-colors"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }