import React, { useMemo, useState } from "react";
import Top from "../../layouts/Top";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Switch from "../../components/Switch";
import { Link, useNavigate } from "react-router-dom";

export default function FieldConditionCreate() {
  const navigate = useNavigate();

  // Basic form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [enabled, setEnabled] = useState(true);

  // Ticket fields and values (mock data)
  const ticketFields = useMemo(
    () => [
      { name: "Contact Reason" },
      { name: "Product" },
      { name: "Resolution" },
      { name: "Priority" },
      { name: "Channel" },
    ],
    []
  );
  const operators = useMemo(
    () => [
      { name: "is" },
      { name: "is not" },
      { name: "contains" },
      { name: "is one of" },
    ],
    []
  );
  const allValues = useMemo(
    () => [
      { name: "Refund" },
      { name: "Replacement" },
      { name: "Information Provided" },
      { name: "Shipping" },
      { name: "Damaged Item" },
      { name: "High" },
      { name: "Low" },
    ],
    []
  );

  // Multiple criteria rows (first row default)
  const [criteriaList, setCriteriaList] = useState([
    { field: "", operator: "is", value: "" },
  ]);

  // Display fields (the fields to show conditionally)
  const [displayFields, setDisplayFields] = useState([]);

  const canSave = name.trim().length > 0; // Keep it simple per screenshot (Save disabled initially)

  const handleAddDisplayField = (fieldName) => {
    if (!fieldName) return;
    if (displayFields.includes(fieldName)) return;
    setDisplayFields((prev) => [...prev, fieldName]);
  };

  const handleRemoveDisplayField = (fieldName) => {
    setDisplayFields((prev) => prev.filter((f) => f !== fieldName));
  };

  const handleSave = () => {
    if (!canSave) return;
    // Placeholder persistence
    console.log("Saving condition", {
      name,
      description,
      enabled,
      criteria: criteriaList,
      displayFields,
    });
    navigate("/app/field-conditions");
  };

  return (
    <>
      <Top
        title={
          <>
            <Link
              to="/app/field-conditions"
              className="text-primary underline hover:no-underline"
            >
              Field Conditions
            </Link>
            {" > Create condition"}
          </>
        }
      >
        <div className="flex items-center gap-2">
          <Link
            to="/app/field-conditions"
            className="btn !h-[34px] !min-w-[120px] !text-xs"
          >
            Back
          </Link>
        </div>
      </Top>
      <div className="p-4 md:p-5 lg:p-6">
        <div className="grid grid-cols-1 gap-3 md:gap-4 mb-5">
          <Input
            label="Condition name"
            required
            placeholder="Provide a name for condition. E.g: Contact Reason Conditions"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Condition description"
            placeholder="Describe how the condition works. E.g: Display when contact reason includes quality and shipping"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <h5 className="text-base font-bold !leading-[1.5] mb-1">
            Condition requirements
          </h5>
          <p className="text-xs text-[#858585]">
            Configure Ticket Fields to appear for agents only when specific
            values are selected.
          </p>
        </div>

        <div className="border border-stroke rounded-lg p-3 md:p-4 mb-4">
          <p className="text-xs font-semibold text-[#0A0D14] mb-2">
            If the following criteria is met...
          </p>
          {criteriaList.map((crit, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 gap-2 items-center mb-2"
            >
              <div className="col-span-12 md:col-span-2">
                {idx === 0 ? (
                  <button className="btn w-full !h-10 !min-w-[unset]">
                    Ticket Field
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button className="btn !h-10 !min-w-[60px] bg-[#F7F7F7] text-[#0A0D14]">
                      And
                    </button>
                    <button className="btn !h-10 !min-w-[unset]">
                      Ticket Field
                    </button>
                  </div>
                )}
              </div>
              <div className="col-span-12 md:col-span-3">
                <Dropdown
                  className="mb-0"
                  placeholder="Select ticket field"
                  items={ticketFields}
                  showDropdown
                  onChange={(v) =>
                    setCriteriaList((list) =>
                      list.map((c, i) => (i === idx ? { ...c, field: v } : c))
                    )
                  }
                  value={crit.field}
                />
              </div>
              <div className="col-span-12 md:col-span-2">
                <Dropdown
                  className="mb-0"
                  placeholder="is"
                  items={operators}
                  showDropdown
                  onChange={(v) =>
                    setCriteriaList((list) =>
                      list.map((c, i) =>
                        i === idx ? { ...c, operator: v } : c
                      )
                    )
                  }
                  value={crit.operator}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <Dropdown
                  className="mb-0"
                  placeholder="Select field value(s)"
                  items={allValues}
                  showDropdown
                  onChange={(v) =>
                    setCriteriaList((list) =>
                      list.map((c, i) => (i === idx ? { ...c, value: v } : c))
                    )
                  }
                  value={crit.value}
                />
              </div>
              <div className="col-span-12 md:col-span-1 flex justify-end">
                <button
                  className={`text-[#FE4333] ${
                    criteriaList.length === 1
                      ? "opacity-30 cursor-not-allowed"
                      : ""
                  }`}
                  title="Remove"
                  onClick={() =>
                    criteriaList.length === 1
                      ? null
                      : setCriteriaList((list) =>
                          list.filter((_, i) => i !== idx)
                        )
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4H13"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 3H10"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.5 6V12.5M10.5 6V12.5M8 6V12.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div className="mt-2">
            <button
              className="btn !h-9 !min-w-[150px] !text-xs border-stroke"
              onClick={() =>
                setCriteriaList((list) => [
                  ...list,
                  { field: "", operator: "is", value: "" },
                ])
              }
            >
              Add Requirements
            </button>
          </div>
        </div>

        <div className="mb-2">
          <p className="text-xs font-semibold text-[#0A0D14]">
            Then display the following fields...
          </p>
        </div>
        <div className="border border-stroke rounded-lg p-4 mb-3">
          {displayFields.length === 0 ? (
            <div className="text-center text-[#858585] text-[13px]">
              <p className="font-semibold mb-1">No selected ticket fields</p>
              <p>
                Try adding ticket fields from the dropdown below to display
                conditionally.
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {displayFields.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 border border-stroke rounded px-2 py-1 text-xs"
                >
                  {f}
                  <button
                    className="text-[#FE4333]"
                    onClick={() => handleRemoveDisplayField(f)}
                    title="Remove"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33366 8.33366L1.66699 1.66699M8.33366 1.66699L1.66699 8.33366"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mb-6 flex items-center gap-2">
          <Dropdown
            className="mb-0 w-full md:w-auto"
            btnClass="!min-w-[140px]"
            placeholder="Add Ticket Field"
            items={ticketFields}
            onChange={handleAddDisplayField}
            showDropdown
          />
        </div>

        <div className="flex items-center gap-2 mb-5">
          <Switch
            id="enable-condition"
            title="Enable Condition"
            checked={enabled}
            onChange={(e) => setEnabled(!!e.target?.checked)}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={!canSave}
            className={`btn min-w-max px-3 ${
              !canSave
                ? "!bg-gray-200 !text-[#858585]"
                : "!bg-[#7856FF] text-white"
            }`}
            onClick={handleSave}
          >
            Save Changes
          </button>
          <Link
            to="/app/field-conditions"
            className="btn min-w-max px-3 !border-[#7856FF] !text-[#7856FF] hover:!text-white"
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
}
