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

  const addChildNode = (parentId, childType) => {
    const newNode = {
      id: Date.now(),
      type: childType,
      children: [],
    };

    if (childType === "if") {
      newNode.field = null;
      newNode.operator = null;
      newNode.value = null;
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

    return (
      <div
        key={node.id}
        className="mb-5 group relative p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-200"
        style={{ marginLeft: `${marginLeft}px` }}
      >
        {/* Delete button - shows on hover */}
        <button
          onClick={() => removeNode(node.id)}
          className="absolute -right-2 -top-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600 z-10 shadow-md"
          title="Delete this rule"
        >
          ×
        </button>

        {node.type === "when" && (
          <div className="flex items-center gap-4 flex-wrap p-2">
            <Alert text="WHEN" variant="primary" />
            <RuleDropdown
              options={triggerEvents}
              value={node.trigger}
              onChange={(trigger) => updateNode(node.id, { trigger })}
              placeholder="Select trigger..."
              variant="primary"
            />
          </div>
        )}

        {node.type === "then" && (
          <div className="flex items-center gap-4 flex-wrap p-2">
            <Alert text="THEN" variant="primary" />
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
              placeholder="Select type..."
              variant="primary"
            />
          </div>
        )}

        {node.type === "action" && (
          <div className="flex items-center gap-4 flex-wrap p-2">
            <Alert text="SELECT ACTION" variant="success" />
            <RuleDropdown
              options={actionsList}
              value={node.action}
              onChange={(action) => updateNode(node.id, { action })}
              placeholder="Choose action..."
              variant="success"
            />
          </div>
        )}

        {node.type === "if" && (
          <div className="flex items-center gap-4 flex-wrap p-2">
            <RuleDropdown
              options={logicalOperators}
              value={node.logicalOp || "IF"}
              onChange={(logicalOp) => updateNode(node.id, { logicalOp })}
              placeholder="IF"
              variant="primary"
            />
            <RuleDropdown
              options={conditionFields}
              value={node.field}
              onChange={(field) => updateNode(node.id, { field })}
              placeholder="Select field..."
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
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary min-w-[150px]"
            />
          </div>
        )}

        {/* Render children */}
        {node.children &&
          node.children.map((child) => renderNode(child, depth + 1))}

        {/* Add THEN button for WHEN nodes */}
        {node.type === "when" && node.trigger && (
          <div
            className="mt-4 pl-6"
            style={{ marginLeft: `${marginLeft + 30}px` }}
          >
            <button
              className={`${add} px-3 py-2 rounded-md hover:bg-primary/10 transition-colors`}
              onClick={() => addChildNode(node.id, "then")}
            >
              Add THEN condition
            </button>
          </div>
        )}

        {/* Add condition buttons for IF nodes */}
        {node.type === "if" && (
          <div
            className="mt-4 pl-6"
            style={{ marginLeft: `${marginLeft + 30}px` }}
          >
            <div className="flex gap-3 flex-wrap">
              <button
                className={`${add} px-3 py-2 rounded-md hover:bg-primary/10 transition-colors`}
                onClick={() => addChildNode(node.id, "if")}
              >
                Add AND condition
              </button>
              <button
                className={`${add} px-3 py-2 rounded-md hover:bg-primary/10 transition-colors`}
                onClick={() => addChildNode(node.id, "if")}
              >
                Add OR condition
              </button>
              <button
                className={`${add} px-3 py-2 rounded-md hover:bg-primary/10 transition-colors`}
                onClick={() => addChildNode(node.id, "then")}
              >
                Add THEN statement
              </button>
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
                    <div className="border border-[#E2E4E9] rounded-lg lg:rounded-2xl xl:rounded-[15px] p-6 lg:p-8 bg-gray-50/50">
                      {ruleNodes.map((node) => renderNode(node))}

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <button
                          className={`${add} px-4 py-3 rounded-md hover:bg-primary/10 transition-colors border border-primary/20 hover:border-primary/40`}
                          onClick={addTriggerEvent}
                        >
                          Add events...
                        </button>
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
