import React, { useState } from "react";

import Top from "../../layouts/Top";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Checkbox from "../../components/Checkbox";
import { Link } from "react-router-dom";

export default function NewTicket() {
  const stores = [
    { name: "stores-1" },
    { name: "stores-2" },
    { name: "stores-3" },
    { name: "stores-4" },
    { name: "stores-5" },
  ];

  const CardList = [
    {
      title: "Always optional",
      des: "Field is always visible to agent, not required to close ticket. Ignores all conditions.",
    },
    {
      title: "Always required",
      des: "Field is always visible to agent, and mandatory to close ticket. Ignores all conditions.",
    },
    {
      title: "Conditionally visible",
      des: `Display to agents only when conditions are met.`,
    },
  ];

  // Field types
  const fieldTypes = [
    {
      name: "Yes/No",
      icon: "✓",
      description: "Allow agents to mark as one of two states",
    },
    {
      name: "Dropdown",
      icon: "▼",
      description: "Allow agents to select one option from a list",
    },
    {
      name: "Number",
      icon: "#",
      description: "Allow agents to add whole or decimal number",
    },
    {
      name: "Text",
      icon: "T",
      description: "Allow agents to add descriptions, notes, or other text",
    },
  ];

  const [selectedFieldType, setSelectedFieldType] = useState("");
  const [dropdownValues, setDropdownValues] = useState([
    { title: "Delay" },
    { title: "Ship" },
  ]);
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [yesNoValue, setYesNoValue] = useState(false);

  const removeDropdownValue = (item) => {
    setDropdownValues((prev) => prev.filter((r) => r.title != item.title));
  };

  const addDropdownValue = (value) => {
    if (value.trim()) {
      setDropdownValues((prev) => [...prev, { title: value.trim() }]);
    }
  };

  // Render dynamic content based on selected field type
  const renderFieldTypeContent = () => {
    switch (selectedFieldType) {
      case "Yes/No":
        return null; // Show nothing for Yes/No

      case "Number":
        return null; // Show nothing for Number

      case "Text":
        return (
          <div className="mb-4 lg:mb-5 xl:mb-6">
            <p className="text-[#0A0D14] text-sm font-semibold !leading-[1.66] mb-3">
              Preview
            </p>
            <Input
              type="text"
              placeholder="Enter text here"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          </div>
        );

      case "Dropdown":
        return (
          <div className="mb-4 lg:mb-5 xl:mb-6">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[#0A0D14] text-sm font-semibold !leading-[1.66]">
                Dropdown values <span className="text-[#FE4333]">*</span>
              </p>
              <label
                htmlFor="csv"
                className="text-[#0A0D14] text-xs font-semibold !leading-[1.66] cursor-pointer"
              >
                Import From CSV
                <input type="file" className="hidden" name="" id="csv" />
              </label>
            </div>
            {dropdownValues.map((item, index) => (
              <div className="flex gap-2 lg:gap-[10px] mb-1" key={index}>
                <span className="block mt-4">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.70801 11.165C2.2833 11.165 2.75 11.6317 2.75 12.207C2.75 12.7823 2.2833 13.249 1.70801 13.249C1.13286 13.2488 0.666992 12.7822 0.666992 12.207C0.666992 11.6318 1.13286 11.1652 1.70801 11.165ZM6.29199 11.165C6.86714 11.1652 7.33301 11.6318 7.33301 12.207C7.33301 12.7822 6.86714 13.2488 6.29199 13.249C5.7167 13.249 5.25 12.7823 5.25 12.207C5.25 11.6317 5.7167 11.165 6.29199 11.165ZM1.70801 5.87402C2.2832 5.87402 2.74982 6.33989 2.75 6.91504V6.99902C2.74982 7.57417 2.2832 8.04004 1.70801 8.04004C1.13297 8.03986 0.667168 7.57406 0.666992 6.99902V6.91504C0.667168 6.34 1.13297 5.8742 1.70801 5.87402ZM6.29199 5.87402C6.86703 5.8742 7.33283 6.34 7.33301 6.91504V6.99902C7.33283 7.57406 6.86703 8.03986 6.29199 8.04004C5.7168 8.04004 5.25018 7.57417 5.25 6.99902V6.91504C5.25018 6.33989 5.7168 5.87402 6.29199 5.87402ZM1.70801 0.749023C2.2832 0.749023 2.74982 1.21489 2.75 1.79004C2.75 2.36534 2.2833 2.83203 1.70801 2.83203C1.13286 2.83186 0.666992 2.36523 0.666992 1.79004C0.667168 1.215 1.13297 0.749199 1.70801 0.749023ZM6.29199 0.749023C6.86703 0.749199 7.33283 1.215 7.33301 1.79004C7.33301 2.36523 6.86714 2.83186 6.29199 2.83203C5.7167 2.83203 5.25 2.36534 5.25 1.79004C5.25018 1.21489 5.7168 0.749023 6.29199 0.749023Z"
                      fill="#858585"
                      stroke="#858585"
                      strokeWidth="0.833333"
                    />
                  </svg>
                </span>
                <p className="text-heading rounded-lg px-4 border border-solid border-stroke w-full flex items-center min-h-12 py-3 ">
                  {item.title}
                </p>
                <button
                  className="block"
                  onClick={() => removeDropdownValue(item)}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3337 12.3346L1.66699 1.66797M12.3337 1.66797L1.66699 12.3346"
                      stroke="#FE4333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            ))}
            <AddDropdownValue onAdd={addDropdownValue} />
            <div>
              <p className="text-[#858585] text-xs font-medium !leading-[1.66]">
                To add a new child level.{" "}
                <a href="#" className="text-[#7856FF]">
                  See examples
                </a>
              </p>
            </div>
          </div>
        );

      default:
        return null; // Show nothing when no field type is selected
    }
  };

  return (
    <>
      <Top title=" ">
        <div className="flex item-center justify-between w-full">
          <div className="flex items-center gap-2.5 text-sm md:text-base lg:text-lg">
            <Link
              to="/app/ticket-fields"
              className="!underline hover:text-primary"
            >
              Ticket Fields
            </Link>
            <span className="text-heading"> {">"} </span>
            <span className="text-heading">New Field</span>
          </div>
        </div>
      </Top>

      {/* //product page   */}
      <div className="p-5 lg:p-6">
        <p className="text-[#858585] text-xs !leading-[1.5] font-medium mb-3 lg:mb-4">
          Use this field to gain actionable insights into customer inquiry
          trends. For more details, see{" "}
          <a href="#" className="!underline text-[#7856FF]">
            this article.
          </a>
        </p>
        <div className="flex items-center gap-2 mb-3 lg:mb-4">
          <p className="text-[#0A0D14] text-sm font-semibold !leading-[1.42]">
            Status
          </p>
          <p className="text-[#176448] text-xs font-semibold !leading-[1.5] py-1 px-[10px] bg-[#1764481A]/10 rounded-lg">
            Active
          </p>
        </div>
        <Input
          className="mb-3 lg:mb-4"
          label="Name"
          required
          placeholder="Product"
          des="Visible to agents"
        />
        <Input
          className="mb-3 lg:mb-4"
          label="Descriptions "
          placeholder="The type of the product mentioned in a ticket."
          des="Not visible to agents"
        />
        <div className="flex items-center gap-2 mb-2">
          <p className="text-[#0A0D14] text-sm font-semibold !leading-[1.42]">
            Field visibility
          </p>
          <p className="text-[#7856FF] text-xs font-semibold !leading-[1.5] py-1 px-[10px] bg-[#7856FF1A]/10 rounded-lg">
            BETA
          </p>
        </div>
        <p className="text-[#858585] text-xs !leading-[1.5] font-medium mb-[2px]">
          Configure fields to always appear, or only when specific conditions
          are met. See conditional visibility of Optional or Required within
          conditions settings page.
        </p>
        <a
          href="#"
          className="!underline text-[#7856FF] text-xs font-medium  mb-[2px] block !leading-[1]"
        >
          How to Set up Ticket Fields
        </a>
        <a
          href="#"
          className="!underline text-[#7856FF] text-xs font-medium  mb-2 block !leading-[1]"
        >
          Learn more about field visibility
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3 lg:mb-4">
          {CardList.map((item, idx) => (
            <label
              htmlFor={idx}
              className="border border-[#7856FF] group rounded-lg p-3 lg:p-4 cursor-pointer"
              key={idx}
            >
              <Checkbox
                className="mb-2"
                name="filed_visibility"
                type="radio"
                id={idx}
              />
              <h6 className="text-[#0A0D14] text-base font-semibold !leading-[1.5] mb-2">
                {item.title}
              </h6>
              <p className="text-[#858585] text-[13px] font-medium !leading-[1.5]">
                {item.des}
              </p>
              {idx === 2 && (
                <a
                  href="#"
                  className="text-[#7856FF] text-[13px] font-medium !leading-[1.5]"
                >
                  Go to field conditions
                </a>
              )}
            </label>
          ))}
        </div>
        <Dropdown
          className="mb-3 lg:mb-4"
          label="Type "
          required
          des="Field type cant be changed once it's been saved."
          placeholder="Select field type"
          items={fieldTypes}
          value={selectedFieldType}
          onChange={setSelectedFieldType}
        />

        {/* Dynamic content based on selected field type */}
        {renderFieldTypeContent()}

        <div className="md:flex items-center justify-between">
          <a
            href="#"
            className="btn min-w-max px-3 !border-[#7856FF] !text-[#7856FF] hover:!text-white mb-3 md:mb-0"
          >
            Archived
          </a>
          <div className="flex items-center gap-3 lg:gap-4">
            <a
              href="#"
              className="btn min-w-max px-3 !border-[#7856FF] !text-[#7856FF] hover:!text-white"
            >
              Cancel
            </a>
            <a href="#" className="btn min-w-max px-3 !bg-[#7856FF] text-white">
              Save Changes
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// Component for adding new dropdown values
const AddDropdownValue = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="flex gap-2 lg:gap-[10px] mb-1">
      <span className="block mt-4">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.70801 11.165C2.2833 11.165 2.75 11.6317 2.75 12.207C2.75 12.7823 2.2833 13.249 1.70801 13.249C1.13286 13.2488 0.666992 12.7822 0.666992 12.207C0.666992 11.6318 1.13286 11.1652 1.70801 11.165ZM6.29199 11.165C6.86714 11.1652 7.33301 11.6318 7.33301 12.207C7.33301 12.7822 6.86714 13.2488 6.29199 13.249C5.7167 13.249 5.25 12.7823 5.25 12.207C5.25 11.6317 5.7167 11.165 6.29199 11.165ZM1.70801 5.87402C2.2832 5.87402 2.74982 6.33989 2.75 6.91504V6.99902C2.74982 7.57417 2.2832 8.04004 1.70801 8.04004C1.13297 8.03986 0.667168 7.57406 0.666992 6.99902V6.91504C0.667168 6.34 1.13297 5.8742 1.70801 5.87402ZM6.29199 5.87402C6.86703 5.8742 7.33283 6.34 7.33301 6.91504V6.99902C7.33283 7.57406 6.86703 8.03986 6.29199 8.04004C5.7168 8.04004 5.25018 7.57417 5.25 6.99902V6.91504C5.25018 6.33989 5.7168 5.87402 6.29199 5.87402ZM1.70801 0.749023C2.2832 0.749023 2.74982 1.21489 2.75 1.79004C2.75 2.36534 2.2833 2.83203 1.70801 2.83203C1.13286 2.83186 0.666992 2.36523 0.666992 1.79004C0.667168 1.215 1.13297 0.749199 1.70801 0.749023ZM6.29199 0.749023C6.86703 0.749199 7.33283 1.215 7.33301 1.79004C7.33301 2.36523 6.86714 2.83186 6.29199 2.83203C5.7167 2.83203 5.25 2.36534 5.25 1.79004C5.25018 1.21489 5.7168 0.749023 6.29199 0.749023Z"
            fill="#858585"
            stroke="#858585"
            strokeWidth="0.833333"
          />
        </svg>
      </span>
      <Input
        className="w-full"
        placeholder="e.g. Men::Tops::Polo shirt"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className="block bg-primary text-white px-3 rounded hover:bg-primary/90"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};
