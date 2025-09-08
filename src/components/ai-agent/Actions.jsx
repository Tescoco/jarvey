import React, { useState } from "react";
import Actions2 from "./Actions2";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { icons } from "../text-editor/Icon";
import Switch from "../Switch";

// Alert component similar to TriggerCustom
export const Alert = ({
  text,
  variant,
  className = "uppercase",
  rightIcon,
  children,
  onRemove,
  onClick,
}) => {
  const variants = {
    primary: "bg-primary/10 text-primary",
    success: "bg-[#176448]/10 text-[#176448]",
    purple: "bg-[#970C86]/10 text-[#970C86]",
    warning: "bg-[#FE4333]/10 text-[#FE4333]",
  };
  return (
    <span
      className={`text-xs !leading-none font-semibold inline-flex justify-center items-center gap-1 font-inter px-2.5 min-h-[25px] rounded-lg cursor-pointer ${
        variant ? variants[variant] : "bg-stroke"
      } ${className}`}
      onClick={onClick}
    >
      {children}
      {text}
      {rightIcon === "close" && (
        <svg
          className="cursor-pointer"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={(e) => {
            e.stopPropagation();
            onRemove && onRemove();
          }}
        >
          <path
            d="M2.77051 2.771L11.2288 11.2293M11.2288 2.771L2.77051 11.2293"
            stroke="#858585"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      {rightIcon === "arrow" && (
        <svg
          className="cursor-pointer"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6663 5.25L7.82464 9.09171C7.36903 9.54732 6.63034 9.54732 6.17473 9.09171L2.33301 5.25"
            stroke="#858585"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
};

// Dropdown component for rule builder
const RuleDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  variant = "primary",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Alert
        text={value || placeholder}
        variant={variant}
        rightIcon="arrow"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[200px] max-h-[200px] overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function actions() {
  const [value, setValue] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [conditions, setConditions] = useState([]);
  const [showVariableModal, setShowVariableModal] = useState(false);
  const [currentConditionIndex, setCurrentConditionIndex] = useState(null);
  const [currentStep, setCurrentStep] = useState("main"); // 'main', 'existing-customer', 'order'

  const mainVariables = [
    { name: "Existing customer", type: "object", icon: "👤" },
    { name: "Order", type: "object", icon: "📦" },
  ];

  const existingCustomerFields = [
    { name: "Customer id", type: "string" },
    { name: "Customer first name", type: "string" },
    { name: "Customer last name", type: "string" },
    { name: "Customer full name", type: "string" },
    { name: "Customer email", type: "string" },
    { name: "Customer phone number", type: "string" },
    { name: "Customer tags", type: "string" },
  ];

  const orderFields = [
    // Order Information
    { name: "Order id", type: "string", category: "Order Information" },
    { name: "Order name", type: "string", category: "Order Information" },
    { name: "Order number", type: "string", category: "Order Information" },
    {
      name: "Order total amount",
      type: "number",
      category: "Order Information",
    },
    { name: "Order date", type: "date", category: "Order Information" },
    { name: "Order status", type: "string", category: "Order Information" },
    { name: "Order note", type: "string", category: "Order Information" },
    { name: "Order tags", type: "string", category: "Order Information" },
    {
      name: "Ecommerce customer id",
      type: "string",
      category: "Order Information",
    },

    // Financial Details
    { name: "Currency", type: "string", category: "Financial Details" },
    { name: "Subtotal price", type: "number", category: "Financial Details" },
    { name: "Total discounts", type: "number", category: "Financial Details" },
    { name: "Shipping price", type: "number", category: "Financial Details" },
    { name: "Total tax", type: "number", category: "Financial Details" },
    { name: "Payment status", type: "string", category: "Financial Details" },

    // Fulfillment & Shipping
    {
      name: "Fulfillment status",
      type: "string",
      category: "Fulfillment & Shipping",
    },
    {
      name: "Fulfillment last updated date",
      type: "date",
      category: "Fulfillment & Shipping",
    },
    {
      name: "Shipment status",
      type: "string",
      category: "Fulfillment & Shipping",
    },
    { name: "Shipping date", type: "date", category: "Fulfillment & Shipping" },
    {
      name: "Shipping method id",
      type: "string",
      category: "Fulfillment & Shipping",
    },
    {
      name: "Shipping method name",
      type: "string",
      category: "Fulfillment & Shipping",
    },
    {
      name: "Tracking url",
      type: "string",
      category: "Fulfillment & Shipping",
    },
    {
      name: "Tracking number",
      type: "string",
      category: "Fulfillment & Shipping",
    },

    // Billing Address
    {
      name: "Billing address line 1",
      type: "string",
      category: "Billing Address",
    },
    {
      name: "Billing address line 2",
      type: "string",
      category: "Billing Address",
    },
    {
      name: "Billing address city",
      type: "string",
      category: "Billing Address",
    },
    {
      name: "Billing address state",
      type: "string",
      category: "Billing Address",
    },
    {
      name: "Billing address country",
      type: "string",
      category: "Billing Address",
    },
    {
      name: "Billing address zip code",
      type: "string",
      category: "Billing Address",
    },
    {
      name: "Billing address first name",
      type: "string",
      category: "Billing Address",
    },
    {
      name: "Billing address last name",
      type: "string",
      category: "Billing Address",
    },
    {
      name: "Billing address phone number",
      type: "string",
      category: "Billing Address",
    },

    // Shipping Address
    {
      name: "Shipping address line 1",
      type: "string",
      category: "Shipping Address",
    },
    {
      name: "Shipping address line 2",
      type: "string",
      category: "Shipping Address",
    },
    {
      name: "Shipping address city",
      type: "string",
      category: "Shipping Address",
    },
    {
      name: "Shipping address state",
      type: "string",
      category: "Shipping Address",
    },
    {
      name: "Shipping address country",
      type: "string",
      category: "Shipping Address",
    },
    {
      name: "Shipping address zip code",
      type: "string",
      category: "Shipping Address",
    },
    {
      name: "Shipping address first name",
      type: "string",
      category: "Shipping Address",
    },
    {
      name: "Shipping address last name",
      type: "string",
      category: "Shipping Address",
    },
    {
      name: "Shipping address phone number",
      type: "string",
      category: "Shipping Address",
    },

    // Other
    { name: "Cancellation date", type: "date", category: "Other" },
  ];

  const getOperatorsByType = (type, fieldName = "") => {
    // If field name contains "ID", use number operators regardless of type
    if (
      // fieldName.toLowerCase().includes("id") ||
      fieldName.toLowerCase().includes("customer id") ||
      fieldName.toLowerCase().includes("total") ||
      fieldName.toLowerCase().includes("price")
    ) {
      return [
        "(=) equals",
        "(≠) does not equal",
        "(>) is greater than",
        "(≥) is greater than or equal to",
        "(<) is less than",
        "(≤) is less than or equal to",
        "Exists",
        "Does not exist",
      ];
    }

    if (
      fieldName.toLowerCase().includes("fulfillment status") ||
      fieldName.toLowerCase().includes("shipment status") ||
      fieldName.toLowerCase().includes("payment status") ||
      fieldName.toLowerCase().includes("order status")
    ) {
      return ["Is", "Is not"];
    }

    switch (type) {
      case "string":
        return [
          "Is",
          "Is not",
          "Starts with",
          "Ends with",
          "Contains",
          "Does not contain",
          "Does not exist",
          "Exists",
        ];
      case "special string":
        return ["Is", "Is not"];
      case "number":
        return [
          "(=) equals",
          "(≠) does not equal",
          "(>) is greater than",
          "(≥) is greater than or equal to",
          "(<) is less than",
          "(≤) is less than or equal to",
          "Exists",
          "Does not exist",
        ];
      case "date":
        return [
          "Is before",
          "Is after",
          "Is less than",
          "Is more than",
          "Exists",
          "Does not exist",
        ];
      default:
        return [];
    }
  };

  const handleConditionChange = (index) => {
    setSelectedCondition(index);
  };

  const addCondition = () => {
    setShowVariableModal(true);
    setCurrentStep("main");
  };

  const selectVariable = (variable) => {
    if (variable.name === "Existing customer") {
      setCurrentStep("existing-customer");
    } else if (variable.name === "Order") {
      setCurrentStep("order");
    }
  };

  const selectField = (field) => {
    const newCondition = {
      id: Date.now(),
      field: field.name,
      fieldType: field.type,
      operator: "",
      value: "",
      logicalOperator: conditions.length > 0 ? "And" : null,
    };

    setConditions([...conditions, newCondition]);
    setShowVariableModal(false);
    setCurrentStep("main");
  };

  const updateCondition = (id, updates) => {
    setConditions((prev) =>
      prev.map((condition) =>
        condition.id === id ? { ...condition, ...updates } : condition
      )
    );
  };

  const removeCondition = (id) => {
    setConditions((prev) => prev.filter((condition) => condition.id !== id));
  };

  const groupOrderFieldsByCategory = () => {
    const grouped = {};
    orderFields.forEach((field) => {
      if (!grouped[field.category]) {
        grouped[field.category] = [];
      }
      grouped[field.category].push(field);
    });
    return grouped;
  };

  const add =
    "text-primary font-medium text-sm font-inter underline cursor-pointer";

  const CardList = [
    {
      status: "Return & Exchanges",
      title: "Send return portal deeplink",
      bg: "#FFF0EF",
      color: "#FF6B5F",
    },
    {
      status: "Order",
      title: "Cancel Order",
      color: "#7856FF",
      bg: "rgba(120, 86, 255, 0.08)",
    },
    {
      status: "Order",
      title: "Get Order Info",
      color: "#7856FF",
      bg: "rgba(120, 86, 255, 0.08)",
    },
    {
      status: "Order",
      title: "Remove Item",
      color: "#7856FF",
      bg: "rgba(120, 86, 255, 0.08)",
    },
    {
      status: "Order",
      title: "Replace item",
      color: "#7856FF",
      bg: "rgba(120, 86, 255, 0.08)",
    },
    {
      status: "Order",
      title: "Update shipping address",
      color: "#7856FF",
      bg: "rgba(120, 86, 255, 0.08)",
    },
  ];

  return (
    <>
      <div>
        <div className="mb-4 md:mb-5">
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => setValue(0)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                value === 0
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Actions
            </button>
            <button
              onClick={() => setValue(1)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                value === 1
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Your Actions
            </button>
            <button
              onClick={() => setValue(2)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                value === 2
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Create Actions
            </button>
          </div>
        </div>
        <div>
          {value === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-4 xl:gap-5">
              {CardList.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-[#E2E4E9] p-3 lg:p-4 rounded-lg lg:rounded-xl"
                >
                  <p
                    className={` text-xs font-medium !leading-[1.5] max-w-max py-1 px-2 rounded-md mb-2 lg:mb-3 `}
                    style={{ color: item.color, backgroundColor: item.bg }}
                  >
                    {item.status}
                  </p>
                  <p className="text-[#0A0D14] text-sm lg:text-base font-medium !leading-[1.4] mb-2 lg:mb-3">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          )}
          {value === 1 && <Actions2 />}
          {value === 2 && (
            <>
              <button onClick={() => setValue(0)} className="btn mb-4 md:mb-6">
                Back to Actions
              </button>
              <Input
                className="mb-4 md:mb-6"
                type="text"
                label="Action name"
                placeholder="jarvey"
              />
              <Input
                className="mb-4 md:mb-6"
                type="textarea"
                label="Description"
                placeholder="jarvey"
              />
              <div className="mb-4 md:mb-6">
                <label
                  htmlFor=""
                  className="block mb-1 font-inter font-semibold text-sm !leading-normal text-heading"
                >
                  Actions Conditions
                </label>
                <div className="flex items-center flex-wrap gap-4">
                  {[
                    "No Condition Requires",
                    "All Conditions are met",
                    "At least 1 condition met",
                  ].map((item, index) => (
                    <label
                      htmlFor={`action_${index}`}
                      className="cursor-pointer grow bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px] py-[13px] px-4 flex items-center gap-2"
                      key={index}
                    >
                      <Checkbox
                        type="radio"
                        name="action_condition"
                        id={`action_${index}`}
                        className="gap-2"
                        titleClass="!text-heading !font-semibold"
                        title={item}
                        onChange={() => handleConditionChange(index)}
                      />
                    </label>
                  ))}
                  <button
                    onClick={addCondition}
                    className="size-12 flex items-center justify-center bg-primary text-white hover:scale-105 rounded-[10px]"
                  >
                    {icons.plus}
                  </button>
                </div>
              </div>

              {/* Dynamic Rule Builder - Show when "All Conditions are met" or "At least 1 condition met" is selected */}
              {(selectedCondition === 1 || selectedCondition === 2) && (
                <div className="mb-4 md:mb-6">
                  <p className="text-[#0A0D14] text-sm font-medium !leading-[1.42] tracking-[-0.084px] mb-2 lg:mb-3">
                    Action Rules
                  </p>

                  {/* Existing Conditions */}
                  <div className="space-y-3 mb-4">
                    {conditions.map((condition, index) => (
                      <div
                        key={condition.id}
                        className="flex items-center gap-2 flex-wrap"
                      >
                        {condition.logicalOperator && (
                          <Alert
                            text={condition.logicalOperator}
                            variant="primary"
                          />
                        )}

                        <Alert text={condition.field} variant="success" />

                        <RuleDropdown
                          options={getOperatorsByType(
                            condition.fieldType,
                            condition.field
                          )}
                          value={condition.operator}
                          onChange={(value) =>
                            updateCondition(condition.id, { operator: value })
                          }
                          placeholder="Select operator"
                          variant="purple"
                        />

                        <input
                          type={
                            condition.fieldType === "number"
                              ? "number"
                              : condition.fieldType === "date"
                              ? "date"
                              : "text"
                          }
                          value={condition.value}
                          onChange={(e) =>
                            updateCondition(condition.id, {
                              value: e.target.value,
                            })
                          }
                          placeholder="value"
                          className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm min-w-[100px]"
                        />

                        <button
                          onClick={() => removeCondition(condition.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 4L4 12M4 4L12 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Condition Button */}
                  <Alert
                    text="Add Condition"
                    variant="primary"
                    rightIcon="arrow"
                    onClick={addCondition}
                  />
                </div>
              )}

              {/* Variable Selection Modal */}
              {showVariableModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
                    {currentStep === "main" && (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">
                            Add Condition
                          </h3>
                          <button
                            onClick={() => setShowVariableModal(false)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4L4 12M4 4L12 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            placeholder="Search for a variable"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>

                        <div className="mb-3">
                          <p className="text-sm font-medium text-blue-600 mb-2">
                            INSERT VARIABLE
                          </p>
                          <div className="space-y-2">
                            {mainVariables.map((variable, index) => (
                              <button
                                key={index}
                                onClick={() => selectVariable(variable)}
                                className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-purple-600">👤</span>
                                  <span className="font-medium">
                                    {variable.name}
                                  </span>
                                </div>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 4L10 8L6 12"
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
                      </>
                    )}

                    {currentStep === "existing-customer" && (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setCurrentStep("main")}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 4L6 8L10 12"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            <h3 className="text-lg font-semibold">
                              Existing customer
                            </h3>
                          </div>
                          <button
                            onClick={() => setShowVariableModal(false)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4L4 12M4 4L12 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            placeholder="Search for a variable"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          {existingCustomerFields.map((field, index) => (
                            <button
                              key={index}
                              onClick={() => selectField(field)}
                              className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                            >
                              <span className="text-purple-600">👤</span>
                              <span className="font-medium">{field.name}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}

                    {currentStep === "order" && (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setCurrentStep("main")}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 4L6 8L10 12"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            <h3 className="text-lg font-semibold">Order</h3>
                          </div>
                          <button
                            onClick={() => setShowVariableModal(false)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4L4 12M4 4L12 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="mb-4">
                          <input
                            type="text"
                            placeholder="Search for a variable"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>

                        <div className="space-y-4">
                          {Object.entries(groupOrderFieldsByCategory()).map(
                            ([category, fields]) => (
                              <div key={category}>
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                  {category}:
                                </h4>
                                <div className="space-y-2 ml-4">
                                  {fields.map((field, index) => (
                                    <button
                                      key={index}
                                      onClick={() => selectField(field)}
                                      className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 text-left rounded"
                                    >
                                      <span className="text-blue-600">📦</span>
                                      <span className="text-sm">
                                        {field.name}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              <label
                htmlFor="require_customer"
                className="mb-4 md:mb-6 cursor-pointer flex items-start gap-2"
              >
                <Checkbox id="require_customer" name="require_customer" />
                <div className="flex flex-col gap-0.5">
                  <strong className="font-semibold text-sm text-heading">
                    Require Customer confirmation to perform action
                  </strong>
                  <span className="font-normal text-sm text-[#111]/50">
                    Recommended for irreversible
                  </span>
                </div>
              </label>
              <div className="mb-4 md:mb-6 flex items-center justify-between flex-wrap gap-2">
                <div className="">
                  <p className="font-semibold text-base md:text-lg text-heading">
                    Action Steps
                  </p>
                  <span className="font-medium text-xs text-gray">
                    Add one or more steps with your 3rd party apps. Steps will
                    be performed in the order bellow.
                  </span>
                </div>
                <button className="btn min-w-max text-primary px-2.5">
                  <span className="block scale-[.65]">{icons.plus}</span>
                  Add Step
                </button>
              </div>
              <div className="mb-4 md:mb-6">
                <Switch className="mb-2" id="enable" />
                <p className="font-semibold text-sm text-heading mb-0.5">
                  Require Customer confirmation to perform action
                </p>
                <span className="font-normal text-sm text-[#111]/50">
                  Recommended for irreversible
                </span>
              </div>
              <div className="flex flex-row-reverse items-center gap-4">
                <button className="btn min-w-max shadow text-white">
                  Create Action
                </button>
                <button className="btn min-w-max text-primary">
                  Create & Test
                </button>
                <button className="btn min-w-max text-primary">Cancel</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
