import React, { useState } from "react";
import Checkbox from "../Checkbox";
import RichTextEditor from "../text-editor/Editor";

export default function AddArticles() {
  const [editingItem, setEditingItem] = useState(null);
  const [editingContent, setEditingContent] = useState("");

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
      <p><strong>Important Notes:</strong></p>
      <ul>
        <li>Only one code can be used per order</li>
        <li>Codes are case-sensitive</li>
        <li>Check expiration dates before applying</li>
      </ul>
      <p>If you're having trouble entering your promo code, please try clearing the cache on your web browser or trying on a different device.</p>
    `,
    "How do I use my benefits/rewards points?": `
      <h2>Using Your Benefits/Rewards Points</h2>
      <p>Redeeming your rewards points is easy! Here's how:</p>
      <ol>
        <li>Log into your account</li>
        <li>Navigate to your rewards/points balance</li>
        <li>Select the items you want to purchase</li>
        <li>At checkout, choose "Use Points" option</li>
        <li>Select how many points you want to apply</li>
      </ol>
      <p><strong>Points Conversion:</strong></p>
      <ul>
        <li>100 points = $1 discount</li>
        <li>Minimum redemption: 500 points</li>
        <li>Maximum per order: 5000 points</li>
      </ul>
      <p>Points expire after 12 months of inactivity, so make sure to use them regularly!</p>
    `,
  };

  const handleEditClick = (itemText) => {
    setEditingItem(itemText);
    setEditingContent(
      dummyEditContent[itemText] || `<p>Edit content for: ${itemText}</p>`
    );
  };

  const handleSaveEdit = () => {
    // Here you would typically save the content to your backend
    console.log("Saving content:", editingContent);
    setEditingItem(null);
    setEditingContent("");
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setEditingContent("");
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
    {
      title: "ACCOUNT & SUBSCRIPTIONS",
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
            {account.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-xs text-[#858585] font-inter font-semibold !leading-normal uppercase mb-5">
                  {item.title}
                </p>
                {item.des.map((item, index) => (
                  <div
                    key={index}
                    className={`${single} flex items-center justify-between mt-5`}
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox checked id={`keep-${index}`} />
                      <label
                        htmlFor={`keep-${index}`}
                        className="text-[#0A0D14] text-base font-medium !leading-[150%] cursor-pointer"
                      >
                        {item}
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
                ))}
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
            <div className="flex justify-between items-center mb-4">
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

            <div className="mb-6">
              <RichTextEditor />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelEdit}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
