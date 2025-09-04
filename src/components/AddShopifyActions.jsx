import React, { useState, useRef, createContext, useContext } from "react";
import { useDismissibleDropdown } from "../hooks/useDismissible";

// Create context for sharing Shopify actions state
const ShopifyActionsContext = createContext();

export const useShopifyActions = () => {
  const context = useContext(ShopifyActionsContext);
  if (!context) {
    throw new Error(
      "useShopifyActions must be used within a ShopifyActionsProvider"
    );
  }
  return context;
};

export const ShopifyActionsProvider = ({ children }) => {
  const [selectedActions, setSelectedActions] = useState([]);

  const removeAction = (actionId) => {
    setSelectedActions((prev) =>
      prev.filter((action) => action.id !== actionId)
    );
  };

  const updateConfig = (actionId, newConfig) => {
    setSelectedActions((prev) =>
      prev.map((action) =>
        action.id === actionId ? { ...action, config: newConfig } : action
      )
    );
  };

  const addAction = (action) => {
    const newAction = {
      id: Date.now() + Math.random(),
      name: action.name,
      type: action.type,
      config: getDefaultConfig(action.type),
    };
    setSelectedActions((prev) => [...prev, newAction]);
  };

  const getDefaultConfig = (type) => {
    switch (type) {
      case "shopify-cancel-last-order":
        return { reason: "", notify_customer: true };
      case "shopify-cancel-order":
        return { order_id: "", reason: "", notify_customer: true };
      case "shopify-duplicate-last-order":
        return { notify_customer: false };
      case "shopify-edit-shipping-address":
        return {
          address1: "",
          address2: "",
          city: "",
          province: "",
          zip: "",
          country: "",
          phone: "",
        };
      case "shopify-refund-shipping-cost":
        return { notify_customer: true, reason: "" };
      case "shopify-refund-last-order":
        return { amount: "", notify_customer: true, reason: "" };
      case "shopify-partially-refund-order":
        return {
          amount: "",
          line_items: [],
          shipping: false,
          notify_customer: true,
          reason: "",
        };
      case "shopify-edit-order-note":
        return { note: "" };
      default:
        return {};
    }
  };

  return (
    <ShopifyActionsContext.Provider
      value={{
        selectedActions,
        removeAction,
        updateConfig,
        addAction,
      }}
    >
      {children}
    </ShopifyActionsContext.Provider>
  );
};

// Shopify Icon Component
const ShopifyIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8 2.21C15.8 2.21 15.38 2.25 14.76 2.42C14.71 1.87 14.53 1.18 14.16 0.52C13.24 -0.96 11.82 -1.33 10.93 -0.52C10.04 0.29 9.93 1.87 10.04 2.96C8.71 3.33 7.78 3.87 7.78 3.87L7.93 5.04C8.15 5.04 8.64 4.96 9.04 4.87V20.42C9.04 21.08 9.57 21.62 10.22 21.62H13.78C14.43 21.62 14.96 21.08 14.96 20.42V4.87C15.36 4.96 15.85 5.04 16.07 5.04L16.22 3.87C16.22 3.87 15.8 2.21 15.8 2.21ZM12 3.29C11.56 3.29 11.2 2.93 11.2 2.49C11.2 2.05 11.56 1.69 12 1.69C12.44 1.69 12.8 2.05 12.8 2.49C12.8 2.93 12.44 3.29 12 3.29Z"
      fill="#95BF47"
    />
    <path
      d="M18.07 5.04L16.22 3.87V20.42C16.22 21.08 16.75 21.62 17.4 21.62C18.05 21.62 18.58 21.08 18.58 20.42V5.54C18.33 5.37 18.07 5.04 18.07 5.04Z"
      fill="#5E8E3E"
    />
    <path
      d="M6.42 20.42V5.54C6.67 5.37 6.93 5.04 6.93 5.04L8.78 3.87V20.42C8.78 21.08 8.25 21.62 7.6 21.62C6.95 21.62 6.42 21.08 6.42 20.42Z"
      fill="#5E8E3E"
    />
  </svg>
);

const AddShopifyActions = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const triggerRef = useRef(null);
  const { addAction } = useShopifyActions();

  // Register dropdown for global dismiss
  useDismissibleDropdown(
    showDropdown,
    () => setShowDropdown(false),
    triggerRef
  );

  const shopifyActions = [
    { name: "Cancel last order", type: "shopify-cancel-last-order" },
    { name: "Cancel order", type: "shopify-cancel-order" },
    { name: "Duplicate last order", type: "shopify-duplicate-last-order" },
    {
      name: "Edit last order's shipping address",
      type: "shopify-edit-shipping-address",
    },
    {
      name: "Refund last order's shipping cost",
      type: "shopify-refund-shipping-cost",
    },
    { name: "Refund last order", type: "shopify-refund-last-order" },
    {
      name: "Partially refund last order",
      type: "shopify-partially-refund-order",
    },
    { name: "Edit last order's note", type: "shopify-edit-order-note" },
  ];

  const handleActionClick = (action) => {
    addAction(action);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center justify-between font-inter font-normal text-sm text-[#111111]/70 h-11 md:h-12 px-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px]"
      >
        <span>Add Shopify action</span>
        <span className={`${showDropdown ? "-scale-y-100" : "scale-y-100"}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 10.879L13.7126 7.1665L14.7731 8.227L10.0001 13L5.22705 8.227L6.28755 7.1665L10.0001 10.879Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>

      {showDropdown && (
        <div
          className="p-2 absolute z-[1] top-full mt-1 left-0 w-full bg-white border border-solid border-stroke rounded-lg max-h-[250px] overflow-y-auto flex flex-col items-start"
          data-dropdown-content
          data-no-dismiss
        >
          {shopifyActions.map((item, index) => (
            <button
              key={index}
              className="hover:text-primary flex items-center gap-2 text-sm font-inter px-2 py-2 rounded-md hover:bg-gray-100 w-full text-start text-[#111]/80"
              onClick={() => handleActionClick(item)}
              data-dismiss="dropdown"
            >
              <ShopifyIcon className="w-4 h-4 flex-shrink-0" />
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Component for rendering selected Shopify actions inline in the main pages
export const ShopifyActionsRenderer = () => {
  const { selectedActions, removeAction } = useShopifyActions();

  if (selectedActions.length === 0) return null;

  return (
    <>
      {selectedActions.map((action) => (
        <div key={action.id} className="mb-4">
          {/* Action Header - follows exact pattern from image */}
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-gray-900">
              Action SHOPIFY
            </h4>
            <button
              onClick={() => removeAction(action.id)}
              className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Shopify Logo + Action Name - next line with small space */}
          <div className="flex items-center gap-2 ml-2">
            <ShopifyIcon className="w-5 h-5" />
            <span className="text-sm text-gray-700">{action.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddShopifyActions;
