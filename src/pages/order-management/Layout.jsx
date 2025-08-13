import React, { useState, createContext, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import Top from "../../layouts/Top";
import Dropdown from "../../components/Dropdown";
import MainInner from "../../components/MainInner";
import { c_16 } from "../../utilities/Classes";

import img from "../../assets/img/help-center/test5.png";
import img1 from "../../assets/img/help-center/test.png";
import img2 from "../../assets/img/help-center/test1.png";
import img3 from "../../assets/img/help-center/test2.png";
import img4 from "../../assets/img/help-center/test3.png";

// Create context for sharing state between Layout and child components
export const OrderContext = createContext();

export default function Layout() {
  const pathname = useLocation();
  const tabBtns = ["Configuration", "Channels"];
  const [activeTab, setActiveTab] = useState(tabBtns[0]);
  const [textEditorContent, setTextEditorContent] = useState(
    "input text will display here"
  );
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [responseText, setResponseText] = useState("");

  const helpList = [
    {
      img: img,
      name: "What's you product's shelf life",
    },
    {
      img: img1,
      name: "What type of ingredients do you..",
    },
    {
      name: "What shoe is right for me",
    },
    {
      img: img2,
      name: "Track",
      path: "/app/order/track",
    },
    {
      img: img3,
      name: "Return",
      path: "/app/order/return",
    },
    {
      img: img4,
      name: "Cancel",
      path: "/app/order/cancel",
    },
  ];
  const getTop = pathname.pathname.split("/app/order/").join("");

  // Determine which sidebar to show based on current route
  const renderSidebar = () => {
    const currentPath = pathname.pathname;

    if (currentPath.includes("/track")) {
      return renderTrackOrderSidebar();
    } else if (currentPath.includes("/return")) {
      return renderReturnOrderSidebar();
    } else if (currentPath.includes("/cancel")) {
      return renderCancelOrderSidebar();
    } else if (currentPath.includes("/edit-scenario")) {
      // Show issue details sidebar if an issue is selected, otherwise show selection
      return selectedIssue
        ? renderIssueDetailsSidebar()
        : renderScenarioSelectionSidebar();
    } else if (currentPath.includes("/report")) {
      return renderReportOrderSidebar();
    } else {
      return renderDefaultHelpSidebar();
    }
  };

  // Issue Details Sidebar (when an issue option is clicked)
  const renderIssueDetailsSidebar = () => {
    return (
      <div className={`${c_16} !bg-primary`}>
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setSelectedIssue(null)}
            className="text-white hover:text-white/80"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-xs text-white font-inter font-medium !leading-[150%]">
            Help
          </p>
        </div>

        {/* We will reply message */}
        <div className="bg-white/10 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <p className="text-xs text-white font-medium">
              We will reply in a few moments
            </p>
          </div>
        </div>

        {/* Issue Details Card */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <div className="bg-primary rounded-xl p-4 mb-4">
            <h3 className="text-white font-inter font-semibold text-base mb-3">
              {selectedIssue}:
            </h3>
            <div className="text-white text-sm space-y-1">
              <p>
                <span className="font-medium">Order:</span> #3089
              </p>
              <p>
                <span className="font-medium">Fulfillment:</span> #3089-F1
              </p>
              <p>
                <span className="font-medium">Item names:</span> Graphic
                T-Shirt, Chain Bracelet
              </p>
              <p>
                <span className="font-medium">Tracking number:</span> 654756
              </p>
              <p>
                <span className="font-medium">Order placed:</span> 12/15/2022
                22:02
              </p>
              <p>
                <span className="font-medium">Shipping address:</span> 52
                Washburn, SF, CA, 94027
              </p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-gray-600">MA</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-heading mb-1">
                Mian Asad Ali
              </p>
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  {responseText ||
                    "Happy to help! What would you like to reorder?"}
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Automated</p>
            </div>
          </div>
        </div>

        {/* Message Input Area */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-3">
            <button className="text-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5V15M5 10H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-500">Type a message...</p>
            </div>
            <button className="text-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Scenario Selection Sidebar (What is wrong with your order?)
  const renderScenarioSelectionSidebar = () => {
    const issueOptions = [
      "I didn't get my refund",
      "I'd like to reorder some items",
      "Other",
      "I'm very happy with the product I received 👍",
    ];

    const handleIssueClick = (issue) => {
      setSelectedIssue(issue);
    };

    return (
      <div className={`${c_16} !bg-primary`}>
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-white hover:text-white/80"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-xs text-white font-inter font-medium !leading-[150%]">
            Help
          </p>
        </div>

        {/* We will reply message */}
        <div className="bg-white/10 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <p className="text-xs text-white font-medium">
              We will reply in a few moments
            </p>
          </div>
        </div>

        {/* Issue Selection Interface */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold text-heading mb-6">
            What is wrong with your order?
          </h2>

          {/* Issue Options */}
          <div className="space-y-1">
            {issueOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleIssueClick(option)}
                className="w-full flex items-center justify-between py-4 px-3 text-left hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all duration-200 ease-in-out rounded-lg group hover:shadow-sm"
              >
                <span className="text-base font-normal text-heading group-hover:text-primary transition-colors duration-200">
                  {option}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400 group-hover:text-primary flex-shrink-0 transition-all duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Track Order Sidebar (based on the image provided)
  const renderTrackOrderSidebar = () => (
    <div className={`${c_16} !bg-primary`}>
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => window.history.back()}
          className="text-white hover:text-white/80"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="text-xs text-white font-inter font-medium !leading-[150%]">
          Help
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src={img4}
              alt="Product"
              className="w-8 h-8 object-cover rounded"
            />
          </div>
          <div>
            <h3 className="text-base font-inter font-semibold text-heading mb-1">
              Order #3089
            </h3>
            <p className="text-xs text-gray-500 font-inter">
              Fulfillment 1 of 1 –{" "}
              <span className="text-primary underline">See Items</span>
            </p>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-heading mb-1">
                Order placed
              </h4>
              <p className="text-xs text-gray-500 mb-2">
                12/17/2022 - 04:55 pm
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-700">{textEditorContent}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-gray-300 rounded-full mt-1 flex-shrink-0"></div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-400 mb-1">
                Confirmed
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">Last updated 2 hours ago</p>
        </div>
      </div>

      {/* We will reply message */}
      <div className="bg-white/10 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <p className="text-xs text-white font-medium">
            We will reply in a few moments
          </p>
        </div>
      </div>
    </div>
  );

  // Placeholder for other sidebar views (to be implemented later)
  const renderReturnOrderSidebar = () => (
    <div className={`${c_16} !bg-primary`}>
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => window.history.back()}
          className="text-white hover:text-white/80"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="text-xs text-white font-inter font-medium !leading-[150%]">
          Help
        </p>
      </div>

      {/* We will reply message */}
      <div className="bg-white/10 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <p className="text-xs text-white font-medium">
            We will reply in a few moments
          </p>
        </div>
      </div>

      {/* Return Request Card */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="bg-primary rounded-xl p-4 mb-4">
          <h3 className="text-white font-inter font-semibold text-base mb-3">
            I'd like to return the following items:
          </h3>
          <div className="text-white text-sm space-y-1">
            <p>
              <span className="font-medium">Order number:</span> #3089
            </p>
            <p>
              <span className="font-medium">Items requested for return:</span>{" "}
              1x Graphic T-Shirt, 1x Chain Bracelet
            </p>
            <p>
              <span className="font-medium">Total:</span> $20.00
            </p>
            <p>
              <span className="font-medium">Order Created:</span> 12/15/2022
              22:02
            </p>
            <p>
              <span className="font-medium">Shipping address:</span> 52
              Washburn, SF, CA, 94027
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-medium text-gray-600">MA</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-heading mb-1">
              Mian Asad Ali
            </p>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-700">{textEditorContent}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">Automated</p>
          </div>
        </div>
      </div>

      {/* Message Input Area */}
      <div className="bg-white rounded-xl p-4">
        <div className="flex items-center gap-3">
          <button className="text-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5V15M5 10H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2">
            <p className="text-sm text-gray-500">Type a message...</p>
          </div>
          <button className="text-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const renderCancelOrderSidebar = () => (
    <div className={`${c_16} !bg-primary`}>
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => window.history.back()}
          className="text-white hover:text-white/80"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="text-xs text-white font-inter font-medium !leading-[150%]">
          Help
        </p>
      </div>

      {/* We will reply message */}
      <div className="bg-white/10 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <p className="text-xs text-white font-medium">
            We will reply in a few moments
          </p>
        </div>
      </div>

      {/* Cancel Request Card */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="bg-primary rounded-xl p-4 mb-4">
          <h3 className="text-white font-inter font-semibold text-base mb-3">
            I'd like to cancel the following fulfillment:
          </h3>
          <div className="text-white text-sm space-y-1">
            <p>
              <span className="font-medium">Order number:</span> #3089
            </p>
            <p>
              <span className="font-medium">Fulfillment:</span> #3089-F1
            </p>
            <p>
              <span className="font-medium">Item names:</span> Graphic T-Shirt,
              Chain Bracelet
            </p>
            <p>
              <span className="font-medium">Tracking Url:</span>{" "}
              isis.tracking.com
            </p>
            <p>
              <span className="font-medium">Order Created:</span> 12/15/2022
              22:02
            </p>
            <p>
              <span className="font-medium">Shipping address:</span> 52
              Washburn, SF, CA, 94027
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-medium text-gray-600">MA</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-heading mb-1">
              Mian Asad Ali
            </p>
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-700">{textEditorContent}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">Automated</p>
          </div>
        </div>
      </div>

      {/* Message Input Area */}
      <div className="bg-white rounded-xl p-4">
        <div className="flex items-center gap-3">
          <button className="text-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5V15M5 10H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2">
            <p className="text-sm text-gray-500">Type a message...</p>
          </div>
          <button className="text-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const renderReportOrderSidebar = () => (
    <div className={`${c_16} !bg-primary`}>
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => window.history.back()}
          className="text-white hover:text-white/80"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="text-xs text-white font-inter font-medium !leading-[150%]">
          Help
        </p>
      </div>

      {/* We will reply message */}
      <div className="bg-white/10 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <p className="text-xs text-white font-medium">
            We will reply in a few moments
          </p>
        </div>
      </div>

      {/* Your Orders Section */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <h2 className="text-2xl font-bold text-heading mb-6">Your orders</h2>

        {/* Order Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-heading">Order #3089</h3>
          <span className="text-lg font-medium text-heading">$20.00</span>
        </div>

        {/* Shipment Section */}
        <div className="mb-6">
          <h4 className="text-base font-medium text-gray-600 mb-3">Shipment</h4>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm">
              Track
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm">
              Report issue
            </button>
          </div>

          {/* Product Items */}
          <div className="space-y-4">
            {/* Graphic T-Shirt */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={img4}
                  alt="Graphic T-Shirt"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-heading">Graphic T-Shirt</h5>
                <p className="text-sm text-gray-600">$10.00 x1</p>
              </div>
            </div>

            {/* Chain Bracelet */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={img3}
                  alt="Chain Bracelet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-heading">Chain Bracelet</h5>
                <p className="text-sm text-gray-600">$10.00 x1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Need more help Section */}
      <div className="bg-white rounded-xl p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium text-heading">Need more help?</h4>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4 1.6L7.2 8.8M14.4 1.6L9.6 14.4L7.2 8.8M14.4 1.6L1.6 6.4L7.2 8.8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Send Us A Message
          </button>
        </div>
      </div>
    </div>
  );

  // Default Help Sidebar (original)
  const renderDefaultHelpSidebar = () => (
    <div className={`${c_16} !bg-primary`}>
      <p className="text-xs text-white font-inter font-medium !leading-[150%]">
        Help
      </p>
      <h3 className="text-base text-white font-inter font-semibold !leading-[150%] mb-4">
        How can we help ?
      </h3>
      {helpList.map((item, index) => (
        <Link
          to={item.path || "#"}
          className="p-4 w-full bg-white border border-solid border-[#E2E4E9] rounded-xl flex items-center justify-between mb-4 hover:bg-gray-50 transition-colors"
          key={index}
        >
          <div className="flex items-center gap-3">
            <img className="flex-none" src={item.img} alt="" />
            <h4 className="font-inter font-medium text-sm text-heading leading-[140%]">
              {item.name}
            </h4>
          </div>
          <svg
            className="flex-none"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.04541 13.1955C6.98902 13.2551 6.94494 13.3253 6.91568 13.402C6.88642 13.4787 6.87256 13.5605 6.87488 13.6425C6.8772 13.7246 6.89566 13.8054 6.92921 13.8803C6.96276 13.9552 7.01074 14.0228 7.07041 14.0792C7.13008 14.1356 7.20027 14.1797 7.27698 14.2089C7.35368 14.2382 7.4354 14.2521 7.51746 14.2497C7.59953 14.2474 7.68033 14.229 7.75526 14.1954C7.83019 14.1619 7.89777 14.1139 7.95416 14.0542L13.2667 8.42922C13.3764 8.31318 13.4375 8.15954 13.4375 7.99984C13.4375 7.84015 13.3764 7.68651 13.2667 7.57047L7.95416 1.94484C7.89815 1.88387 7.83058 1.83463 7.75537 1.79999C7.68017 1.76535 7.59883 1.746 7.51608 1.74306C7.43334 1.74012 7.35083 1.75365 7.27336 1.78286C7.19588 1.81208 7.12499 1.8564 7.06479 1.91324C7.00459 1.97009 6.95628 2.03833 6.92268 2.11401C6.88908 2.18968 6.87084 2.27127 6.86904 2.35405C6.86724 2.43683 6.8819 2.51915 6.91218 2.59621C6.94246 2.67327 6.98774 2.74355 7.04541 2.80297L11.9529 7.99984L7.04541 13.1955Z"
              fill="black"
            />
          </svg>
        </Link>
      ))}
    </div>
  );

  return (
    <OrderContext.Provider
      value={{
        textEditorContent,
        setTextEditorContent,
        selectedIssue,
        setSelectedIssue,
        responseText,
        setResponseText,
      }}
    >
      {/* remove /app from title */}
      <Top
        title={(() => {
          const basePath = "/app/order/management";
          const currentPath = getTop;

          if (currentPath === "edit-scenario") {
            return (
              <>
                <Link
                  to={basePath}
                  className="text-primary underline hover:no-underline"
                >
                  Order Management
                </Link>
                {" > "}
                <Link
                  to="/app/order/report"
                  className="text-primary underline hover:no-underline"
                >
                  Report order issue
                </Link>
                {" > Edit scenario"}
              </>
            );
          } else if (currentPath === "management") {
            return "Order Management";
          } else {
            const actionText = currentPath.includes("report") ? "issue" : "";
            return (
              <>
                <Link
                  to={basePath}
                  className="text-primary underline hover:no-underline"
                >
                  Order Management
                </Link>
                {` > ${currentPath} order ${actionText}`}
              </>
            );
          }
        })()}
      >
        <Dropdown
          btnClass="!h-10 !text-primary"
          placeholder="All Stores"
          items={[{ name: "All Stores" }, { name: "All Stores 1" }]}
        />
      </Top>
      <MainInner>
        <div className="flex gap-4 md:gap-0 flex-wrap justify-between">
          <div className="flex-none w-full xl:w-[calc(100%-390px)] md:pr-5 lg:pr-10 mb-5 md:mb-0">
            <div className="border-b border-solid border-stroke flex items-center justify-center overflow-x-auto mb-5 md:mb-6">
              {tabBtns.map((item, index) => (
                <button
                  onClick={() => setActiveTab(item)}
                  key={index}
                  className={`min-w-[140px] font-inter font-medium text-sm px-4 md:px-5 lg:px-6 pb-3 border-b border-solid ${
                    item === activeTab
                      ? "border-btn text-btn"
                      : "border-transparent text-heading"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Outlet />
          </div>
          <div className="right flex-none w-full xl:w-[390px] xl:fixed xl:right-0 xl:top-0 xl:h-screen xl:overflow-y-auto xl:pt-20">
            <div className="mb-4 md:mb-5 !max-w-[122px] mx-auto">
              <Dropdown
                className="mb-0"
                label=""
                placeholder="Chanel"
                btnClass="!h-10 !border-primary text-primary font-semibold text-sm"
                items={[
                  { name: "Chanel" },
                  { name: "Chanel-2" },
                  { name: "Chanel-3" },
                ]}
              />
            </div>
            {renderSidebar()}
          </div>
        </div>
      </MainInner>
    </OrderContext.Provider>
  );
}
