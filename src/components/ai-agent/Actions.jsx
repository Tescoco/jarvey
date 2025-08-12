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
  const [ruleNodes, setRuleNodes] = useState([
    {
      id: 1,
      type: "when",
      trigger: null,
      children: [],
    },
  ]);

  const triggerEvents = [
    "ticket created",
    "ticket updated",
    "ticket assigned to user",
    "ticket snooze delay ends",
    "new message in ticket",
    "satisfaction survey responded",
  ];

  const actionsList = [
    "Send email",
    "Reply to customer",
    "Add internal note",
    "Apply macro",
    "Add tags",
    "Remove tags",
    "Reset tags",
    "Set subject",
    "Set status",
    "Set ticket field",
    "Snooze for",
    "Assign agent",
    "Assign team",
    "Delete ticket",
    "Hide Facebook comment",
    "Like Facebook comment",
    "Exclude ticket from Auto-Merge",
    "Exclude ticket from CSAT",
  ];

  const conditionFields = [
    "ticket status",
    "ticket priority",
    "customer email",
    "agent name",
    "ticket subject",
    "message content",
    "customer sentiment",
    "ticket tags",
  ];

  const operators = [
    "IS",
    "IS NOT",
    "CONTAINS",
    "DOES NOT CONTAIN",
    "STARTS WITH",
    "ENDS WITH",
    "IS EMPTY",
    "IS NOT EMPTY",
  ];

  const logicalOperators = ["AND", "OR"];

  const add =
    "text-primary font-medium text-sm font-inter underline cursor-pointer";

  const handleConditionChange = (conditionIndex) => {
    setSelectedCondition(conditionIndex);
  };

  const updateNode = (nodeId, updates) => {
    const updateNodeRecursive = (nodes) => {
      return nodes.map((node) => {
        if (node.id === nodeId) {
          return { ...node, ...updates };
        }
        if (node.children) {
          return { ...node, children: updateNodeRecursive(node.children) };
        }
        return node;
      });
    };
    setRuleNodes(updateNodeRecursive(ruleNodes));
  };

  const addChildNode = (parentId, childType, logicalOperator = null) => {
    const newNode = {
      id: Date.now(),
      type: childType,
      children: [],
    };

    if (childType === "if") {
      newNode.field = null;
      newNode.operator = null;
      newNode.value = null;
      newNode.logicalOp = logicalOperator || "IF"; // Set the logical operator
    } else if (childType === "action") {
      newNode.action = null;
    }

    const addToParent = (nodes) => {
      return nodes.map((node) => {
        if (node.id === parentId) {
          return { ...node, children: [...(node.children || []), newNode] };
        }
        if (node.children) {
          return { ...node, children: addToParent(node.children) };
        }
        return node;
      });
    };
    setRuleNodes(addToParent(ruleNodes));
  };

  const addTriggerEvent = () => {
    const newTrigger = {
      id: Date.now(),
      type: "when",
      trigger: null,
      children: [],
    };
    setRuleNodes([...ruleNodes, newTrigger]);
  };

  const removeTriggerEvent = (nodeId) => {
    setRuleNodes(ruleNodes.filter((node) => node.id !== nodeId));
  };

  const removeNode = (nodeId) => {
    const removeNodeRecursive = (nodes) => {
      return nodes.filter((node) => {
        if (node.id === nodeId) {
          return false;
        }
        if (node.children) {
          node.children = removeNodeRecursive(node.children);
        }
        return true;
      });
    };
    setRuleNodes(removeNodeRecursive(ruleNodes));
  };

  const renderNode = (node, depth = 0) => {
    const marginLeft = depth * 30;

    // Different styling for different node types
    const getNodeStyling = (nodeType) => {
      switch (nodeType) {
        case "when":
          return {
            container:
              "mb-6 group relative p-5 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm hover:shadow-md transition-all duration-300",
            badge:
              "bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm tracking-wide shadow-md",
          };
        case "then":
          return {
            container:
              "mb-4 group relative p-4 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm hover:shadow-md transition-all duration-200",
            badge:
              "bg-purple-600 text-white px-3 py-1.5 rounded-full font-semibold text-sm",
          };
        case "if":
          return {
            container:
              "mb-4 group relative p-4 rounded-lg border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-sm hover:shadow-md transition-all duration-200",
            badge:
              "bg-amber-600 text-white px-3 py-1.5 rounded-full font-semibold text-sm",
          };
        case "action":
          return {
            container:
              "mb-4 group relative p-4 rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm hover:shadow-md transition-all duration-200",
            badge:
              "bg-green-600 text-white px-3 py-1.5 rounded-full font-semibold text-sm",
          };
        default:
          return {
            container:
              "mb-4 group relative p-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200",
            badge:
              "bg-gray-600 text-white px-3 py-1.5 rounded-full font-semibold text-sm",
          };
      }
    };

    const styling = getNodeStyling(node.type);

    return (
      <div
        key={node.id}
        className={styling.container}
        style={{ marginLeft: `${marginLeft}px` }}
      >
        {/* Delete button - shows on hover */}
        <button
          onClick={() => removeNode(node.id)}
          className="absolute -right-2 -top-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-600 hover:scale-110 z-10 shadow-lg font-bold"
          title="Delete this rule"
        >
          ×
        </button>

        {node.type === "when" && (
          <div className="flex items-center gap-4 flex-wrap">
            <div className={styling.badge}>🚀 WHEN</div>
            <RuleDropdown
              options={triggerEvents}
              value={node.trigger}
              onChange={(trigger) => updateNode(node.id, { trigger })}
              placeholder="Select trigger event..."
              variant="primary"
            />
            {node.trigger && (
              <div className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                ✓ Trigger set
              </div>
            )}
          </div>
        )}

        {node.type === "then" && (
          <div className="flex items-center gap-4 flex-wrap">
            <div className={styling.badge}>⚡ THEN</div>
            <RuleDropdown
              options={["Action", "IF statement"]}
              value={node.selectedType}
              onChange={(selectedType) => {
                updateNode(node.id, { selectedType });
                if (selectedType === "Action") {
                  addChildNode(node.id, "action");
                } else if (selectedType === "IF statement") {
                  addChildNode(node.id, "if");
                }
              }}
              placeholder="Choose what happens next..."
              variant="primary"
            />
          </div>
        )}

        {node.type === "action" && (
          <div className="flex items-center gap-4 flex-wrap">
            <div className={styling.badge}>🎯 ACTION</div>
            <RuleDropdown
              options={actionsList}
              value={node.action}
              onChange={(action) => updateNode(node.id, { action })}
              placeholder="Choose action to perform..."
              variant="success"
            />
            {node.action && (
              <div className="ml-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                ✓ Action configured
              </div>
            )}
          </div>
        )}

        {node.type === "if" && (
          <div className="flex items-center gap-4 flex-wrap">
            <div className={styling.badge}>🔍 {node.logicalOp || "IF"}</div>
            <RuleDropdown
              options={conditionFields}
              value={node.field}
              onChange={(field) => updateNode(node.id, { field })}
              placeholder="Select field to check..."
              variant="primary"
            />
            <RuleDropdown
              options={operators}
              value={node.operator}
              onChange={(operator) => updateNode(node.id, { operator })}
              placeholder="IS"
              variant="primary"
            />
            <input
              type="text"
              value={node.value || ""}
              onChange={(e) => updateNode(node.id, { value: e.target.value })}
              placeholder="Enter value..."
              className="px-4 py-2 border-2 border-amber-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 min-w-[150px] bg-white shadow-sm"
            />
            {node.field && node.operator && node.value && (
              <div className="ml-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                ✓ Condition set
              </div>
            )}
          </div>
        )}

        {/* Render children with connecting lines */}
        {node.children && node.children.length > 0 && (
          <div className="mt-4 relative">
            {/* Connecting line */}
            <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
            {node.children.map((child, index) => (
              <div key={child.id} className="relative">
                {/* Horizontal connector */}
                <div className="absolute left-4 top-6 w-4 h-0.5 bg-gray-300"></div>
                {renderNode(child, depth + 1)}
              </div>
            ))}
          </div>
        )}

        {/* Add THEN button for WHEN nodes */}
        {node.type === "when" && node.trigger && (
          <div className="mt-6 pl-8 border-l-2 border-blue-200">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
              onClick={() => addChildNode(node.id, "then")}
            >
              <span>⚡</span>
              Add THEN condition
            </button>
          </div>
        )}

        {/* Add condition buttons for IF nodes */}
        {node.type === "if" && (
          <div className="mt-4 pl-8 border-l-2 border-amber-200">
            <div className="flex gap-3 flex-wrap">
              <button
                className="inline-flex items-center gap-2 px-3 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
                onClick={() => addChildNode(node.id, "if", "AND")}
              >
                <span>➕</span>
                Add AND
              </button>
              <button
                className="inline-flex items-center gap-2 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
                onClick={() => addChildNode(node.id, "if", "OR")}
              >
                <span>🔄</span>
                Add OR
              </button>
              {/* <button
                className="inline-flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
                onClick={() => addChildNode(node.id, "then")}
              >
                <span>⚡</span>
                Add THEN
              </button> */}
            </div>
          </div>
        )}
      </div>
    );
  };

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
                  <button className="size-12 flex items-center justify-center bg-primary text-white hover:scale-105 rounded-[10px]">
                    {icons.plus}
                  </button>
                </div>
              </div>

              {/* Dynamic Rule Builder - Show when "At least 1 condition met" is selected */}
              {selectedCondition === 2 && (
                <div className="mb-4 md:mb-6">
                  <p className="text-[#0A0D14] text-sm font-medium !leading-[1.42] tracking-[-0.084px] mb-2 lg:mb-3">
                    Action Rules
                  </p>
                  <div className="overflow-x-auto">
                    <div className="border-2 border-indigo-200 rounded-xl lg:rounded-2xl xl:rounded-[20px] p-6 lg:p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-lg">
                      {ruleNodes.map((node) => renderNode(node))}

                      <div className="mt-8 pt-6 border-t-2 border-indigo-200">
                        <button
                          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 font-medium text-sm shadow-lg hover:shadow-xl hover:scale-105"
                          onClick={addTriggerEvent}
                        >
                          <span className="text-lg">🚀</span>
                          Add new trigger event
                        </button>
                        <p className="text-sm text-gray-600 mt-2 ml-1">
                          Create additional WHEN conditions for your action
                        </p>
                      </div>
                    </div>
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
