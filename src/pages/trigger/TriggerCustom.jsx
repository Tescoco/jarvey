import { Link } from "react-router-dom";
import Switch from "../../components/Switch";
import Top from "../../layouts/Top";
import { arrow_left } from "../../utilities/Classes";
import Input from "../../components/Input";
import React, { useState } from "react";

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

export default function TriggerCustom() {
  const [ruleNodes, setRuleNodes] = useState([
    {
      id: 1,
      type: "when",
      trigger: null,
      children: [],
    },
  ]);

  const triggerEvents = [
    "New message in ticket",
    "ticket created",
    "ticket updated",
    "ticket assigned to user",
    "ticket snooze delay ends",
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
  ];

  const conditionFields = [
    "message from agent",
    "ticket status",
    "ticket priority",
    "customer email",
    "agent name",
    "ticket subject",
    "message content",
    "customer sentiment",
    "ticket tags",
    "message intents",
    "last order tracking number",
    "date of last order",
  ];

  const operators = [
    "IS",
    "IS NOT",
    "CONTAINS",
    "DOES NOT CONTAIN",
    "CONTAINS ONE OF",
    "STARTS WITH",
    "ENDS WITH",
    "IS EMPTY",
    "IS NOT EMPTY",
    "LESS THAN",
  ];

  const logicalOperators = ["AND", "OR"];

  const add =
    "text-primary font-medium text-sm font-inter underline cursor-pointer";
  const shope = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.53171 2.62425C8.74988 2.55075 8.89571 2.55075 8.89571 2.55075L8.46055 12.8332L1.89746 11.5936C1.89746 11.5936 2.77129 4.95817 2.77129 4.73942C2.77129 4.44892 2.77129 4.44892 3.13529 4.3025C3.16679 4.3025 3.25371 4.27509 3.38904 4.23192C3.64207 4.14973 3.89771 4.0758 4.15554 4.01025C4.37546 3.06234 5.10463 1.1665 6.63529 1.1665C6.85521 1.1665 7.07279 1.23825 7.21863 1.5305H7.29213C7.94838 1.5305 8.31296 2.04092 8.53171 2.62425ZM6.46554 3.2875C6.72105 3.20934 6.98529 3.12884 7.21921 2.98825C7.21921 2.55075 7.14571 2.2585 7.07279 1.96625C6.70879 2.11209 6.27188 2.54959 6.05196 3.42517C6.18786 3.37358 6.32584 3.32765 6.46554 3.2875ZM6.78171 1.67692C6.70879 1.60342 6.63588 1.60342 6.56238 1.60342C5.54038 1.60342 4.88588 2.98825 4.66654 3.86559C4.81238 3.82884 4.95821 3.774 5.10404 3.71917C5.24988 3.66434 5.39571 3.6095 5.54213 3.57334C5.76146 2.40667 6.34479 1.89625 6.78171 1.67692ZM5.97904 6.41475C6.41654 6.41475 6.85346 6.63409 6.85346 6.63409L7.14454 5.32275C7.14454 5.32275 6.85346 5.17692 6.27013 5.17692C4.66596 5.17692 3.93679 6.19717 3.93679 7.29092C3.93679 8.02592 4.34979 8.34909 4.71263 8.63259C4.99671 8.85425 5.24929 9.05259 5.24929 9.40492C5.24929 9.54959 5.17638 9.84184 4.81238 9.84184C4.30254 9.84184 3.71921 9.33142 3.71921 9.33142L3.42638 10.3523C3.42638 10.3523 4.00971 11.0814 5.17638 11.0814C6.12371 11.0814 6.85346 10.3523 6.85346 9.2585C6.85346 8.366 6.25204 7.93725 5.78596 7.60592C5.49021 7.39592 5.24929 7.22442 5.24929 6.99809C5.24929 6.85225 5.24929 6.41475 5.97904 6.41475ZM7.43679 1.96625C7.50971 2.18559 7.58263 2.47784 7.58263 2.84184V2.91475C7.69288 2.91475 7.78388 2.89667 7.87429 2.87859C7.96588 2.85992 8.05688 2.84184 8.16596 2.84184C8.02013 2.40317 7.8008 1.96625 7.43679 1.96625ZM10.7175 3.35225C10.7904 3.35225 10.8633 3.35225 10.8633 3.42517C10.8633 3.46192 11.1771 5.636 11.4886 7.799C11.7966 9.93867 12.1035 12.0667 12.1035 12.1023L8.60346 12.8314L9.04096 2.62425H9.11388L9.77013 3.27875C9.77013 3.27875 10.6445 3.35225 10.7175 3.35225Z"
        fill="#858585"
      />
    </svg>
  );
  const star = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.02051 5.25016C3.95743 5.25016 5.24967 3.95792 5.24967 1.021C5.24967 3.95792 6.54192 5.25016 9.47884 5.25016C6.54192 5.25016 5.24967 6.54241 5.24967 9.47933C5.24967 6.54241 3.95743 5.25016 1.02051 5.25016Z"
        stroke="#858585"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.43717 10.2085C9.36136 10.2085 10.208 9.36185 10.208 7.43766C10.208 9.36185 11.0547 10.2085 12.9788 10.2085C11.0547 10.2085 10.208 11.0551 10.208 12.9793C10.208 11.0551 9.36136 10.2085 7.43717 10.2085Z"
        stroke="#858585"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
  const arrow = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6663 5.25L7.82464 9.09171C7.36903 9.54732 6.63034 9.54732 6.17473 9.09171L2.33301 5.25"
        stroke="#858585"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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

  return (
    <>
      <Top title={" "}>
        <Link
          to="/app/create-trigger"
          className="flex items-center gap-2.5 group mr-auto"
        >
          <span className="size-6 md:size-8 rounded-full border border-solid border-stroke text-[#858585] transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center">
            {arrow_left}
          </span>
          <span className="text-heading text-sm md:text-base lg:text-lg font-medium">
            Create Triggers
          </span>
        </Link>
      </Top>
      <div className="p-4 lg:p-5 xl:p-6">
        <h6 className="text-lg lg:text-xl xl:text-2xl text-[#0A0D14] font-semibold !leading-[1.5]">
          Triggers Setting
        </h6>
        <div className="mt-4 lg:mt-5 xl:mt-6 flex items-center gap-4 lg:gap-5 mb-4 lg:mb-5 xl:mb-6">
          <div className="w-full ">
            <Input
              type="text"
              placeholder="Type here"
              label="Trigger Name "
              required
            />
          </div>
          <div className="w-full ">
            <Input
              type="text"
              placeholder="Type here"
              label="Trigger Descriptions"
              required
            />
          </div>
        </div>
        <div className="mb-4 lg:mb-5 xl:mb-6">
          <p className="text-[#0A0D14] text-sm font-medium !leading-[1.42] tracking-[-0.084px] mb-2 lg:mb-3">
            Trigger Conditions
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
        <label
          htmlFor="switch1"
          className="mb-5 lg:mb-6 flex items-center gap-1 lg:gap-2 cursor-pointer"
        >
          <Switch id="switch1" checked />
          <p className="text-[#7856FF] text-sm font-medium !leading-[1.42] tracking-[-0.084px]">
            Enable Trigger
          </p>
        </label>
        <div className="mt-4 lg:mt-5 xl:mt-6 md:flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-4 mb-3 md:mb-0">
            <a
              href="#"
              className="btn !bg-[#7856FF] !text-white !px-3 !min-w-[128px]"
            >
              Update Trigger
            </a>
            <Link
              to="/app/triggers"
              className="btn !px-3 !border-[#7856FF] !text-[#7856FF] hover:!text-white"
            >
              Duplicate Trigger
            </Link>
          </div>
          <button className="btn !px-3 !min-w-[128px] !bg-[#FE4333] !text-white max-w-max flex items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.69139 16.149L5.31509 16.1088L4.69139 16.149ZM15.3093 16.149L14.6856 16.1088L14.6856 16.1088L15.3093 16.149ZM2.29199 4.16669C1.94681 4.16669 1.66699 4.44651 1.66699 4.79169C1.66699 5.13686 1.94681 5.41669 2.29199 5.41669V4.16669ZM17.7087 5.41669C18.0538 5.41669 18.3337 5.13686 18.3337 4.79169C18.3337 4.44651 18.0538 4.16669 17.7087 4.16669V5.41669ZM8.75033 8.95835C8.75033 8.61318 8.4705 8.33335 8.12533 8.33335C7.78015 8.33335 7.50033 8.61318 7.50033 8.95835H8.75033ZM7.50033 13.5417C7.50033 13.8869 7.78015 14.1667 8.12533 14.1667C8.4705 14.1667 8.75033 13.8869 8.75033 13.5417H7.50033ZM12.5003 8.95835C12.5003 8.61318 12.2205 8.33335 11.8753 8.33335C11.5301 8.33335 11.2503 8.61318 11.2503 8.95835H12.5003ZM11.2503 13.5417C11.2503 13.8869 11.5301 14.1667 11.8753 14.1667C12.2205 14.1667 12.5003 13.8869 12.5003 13.5417H11.2503ZM12.6234 4.94747C12.7094 5.28176 13.0502 5.483 13.3844 5.39696C13.7187 5.31092 13.92 4.97018 13.8339 4.6359L12.6234 4.94747ZM3.33496 4.83193L4.06768 16.1892L5.31509 16.1088L4.58236 4.75145L3.33496 4.83193ZM6.3546 18.3334H13.6461V17.0834H6.3546V18.3334ZM15.933 16.1892L16.6657 4.83193L15.4183 4.75145L14.6856 16.1088L15.933 16.1892ZM16.042 4.16669H3.95866V5.41669H16.042V4.16669ZM2.29199 5.41669H3.95866V4.16669H2.29199V5.41669ZM16.042 5.41669H17.7087V4.16669H16.042V5.41669ZM13.6461 18.3334C14.8544 18.3334 15.8552 17.3951 15.933 16.1892L14.6856 16.1088C14.6502 16.6569 14.1953 17.0834 13.6461 17.0834V18.3334ZM4.06768 16.1892C4.14548 17.3951 5.14623 18.3334 6.3546 18.3334V17.0834C5.80534 17.0834 5.35045 16.6569 5.31509 16.1088L4.06768 16.1892ZM7.50033 8.95835V13.5417H8.75033V8.95835H7.50033ZM11.2503 8.95835V13.5417H12.5003V8.95835H11.2503ZM10.0003 2.91669C11.2615 2.91669 12.3227 3.77922 12.6234 4.94747L13.8339 4.6359C13.3946 2.92878 11.8456 1.66669 10.0003 1.66669V2.91669ZM7.3773 4.94747C7.67799 3.77922 8.73922 2.91669 10.0003 2.91669V1.66669C8.15506 1.66669 6.60613 2.92878 6.16675 4.6359L7.3773 4.94747Z"
                fill="white"
              />
            </svg>
            Delete Rule
          </button>
        </div>
      </div>
    </>
  );
}
