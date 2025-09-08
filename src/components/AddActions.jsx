import React, { useState, useRef, createContext, useContext } from "react";
import { useDismissibleDropdown } from "../hooks/useDismissible";
import Input from "./Input";
import Dropdown from "./Dropdown";
import RichTextEditor from "./RichTextEditor";

// Create context for sharing Actions state
const ActionsContext = createContext();

export const useActions = () => {
  const context = useContext(ActionsContext);
  if (!context) {
    throw new Error("useActions must be used within an ActionsProvider");
  }
  return context;
};

export const ActionsProvider = ({ children }) => {
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
      case "forward-email":
        return { to: "", cc: [], bcc: [], message: "" };
      case "add-attachments":
        return { files: [] };
      case "add-tags":
      case "remove-tags":
        return { tags: [] };
      case "set-status":
        return { status: "Open" };
      case "assign-agent":
        return { agent: "Unassigned" };
      case "assign-team":
        return { team: "Unassigned" };
      case "set-subject":
        return { subject: "" };
      case "snooze-for":
        return { duration: 1, unit: "day(s)" };
      case "set-priority":
        return { priority: "Normal" };
      case "send-internal-note":
        return { note: "" };
      case "set-ticket-field":
        return { field: "Contact reason", value: "" };
      case "http-hook":
        return { title: "", method: "GET", url: "" };
      default:
        return {};
    }
  };

  return (
    <ActionsContext.Provider
      value={{
        selectedActions,
        removeAction,
        updateConfig,
        addAction,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
};

// Internal component to handle file picking for attachments
const AttachmentsPicker = ({ action, updateConfig }) => {
  const fileInputRef = useRef(null);

  const openPicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const onFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    updateConfig(action.id, { ...action.config, files });
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={onFilesSelected}
      />
      <button
        onClick={openPicker}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
        type="button"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 10V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V10M11 5L8 2M8 2L5 5M8 2V10"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Select Files...
      </button>
    </>
  );
};

// Internal component for selecting tags with a right-side popup
const TagsPicker = ({ action, updateConfig, label = "Add Tags" }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const triggerRef = useRef(null);
  useDismissibleDropdown(open, () => setOpen(false), triggerRef);

  const allTags = [
    "auto-close",
    "non-support-related",
    "outside-business-hours",
    "during-business-hours",
    "ai_answered",
    "ai_close",
    "not-shipped",
    "ai_handover",
    "vip",
    "sample ticket",
    "RETURN/EXCHANGE",
    "PRODUCT",
    "ORDER-STATUS",
    "order-status",
    "ORDER-CHANGE/CANCEL",
    "offline-capture",
    "damaged",
    "apple",
    "already-shipped",
    "VIP",
    "urgent",
    "spam",
    "social-question",
    "social-lead",
    "social-comment",
    "shipped",
    "sentiments-urgent",
    "sentiments-threatening",
    "sentiments-promoter",
    "sentiments-positive",
    "sentiments-offensive",
    "sentiments-negative",
    "REFUND",
    "received",
    "quick-reply-FAQ",
    "PROMOTION",
    "potential-customer",
    "positive",
    "policy",
    "partial-refund",
    "order-wrong",
    "not-received",
    "negative",
    "Low CSAT",
    "instructions",
    "IG-mentions",
    "full-refund",
    "feedback",
    "edit-address",
    "discount-request",
    "change-order",
    "cancel/refund",
    "auto-reply",
    "automatic-ooo",
    "auto-close-instagram-giveaway",
    "ai_snooze",
    "ai_processing",
    "ai_preview",
    "ai_ignore",
    "ai_failed_action",
    "ai_executed_action",
  ];

  const colorPalette = [
    "#3B82F6",
    "#8B5CF6",
    "#06B6D4",
    "#22C55E",
    "#EAB308",
    "#F97316",
    "#EF4444",
    "#A855F7",
  ];
  const getTagColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++)
      hash = (hash + name.charCodeAt(i)) % 997;
    return colorPalette[hash % colorPalette.length];
  };

  const selected = action.config.tags || [];
  const addTag = (name) => {
    if (selected.includes(name)) return;
    updateConfig(action.id, { ...action.config, tags: [...selected, name] });
  };
  const removeTag = (name) => {
    updateConfig(action.id, {
      ...action.config,
      tags: selected.filter((t) => t !== name),
    });
  };

  const filtered = allTags.filter((t) =>
    t.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2V10M2 6H10"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {label}
      </button>

      {open && (
        <div
          className="absolute top-0 left-full ml-2 w-64 md:w-72 bg-white border border-stroke rounded-lg shadow-lg p-2 max-h-72 overflow-y-auto"
          data-dropdown-content
        >
          <div className="sticky -top-2 -mt-2 bg-white pt-2 pb-1">
            <input
              className="w-full h-9 px-3 border border-stroke rounded-lg text-sm"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="py-1">
            {filtered.map((tag) => (
              <button
                key={tag}
                className="w-full text-left flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 text-sm"
                onClick={() => addTag(tag)}
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: getTagColor(tag) }}
                />
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected tags chips */}
      <div className="mt-2 flex flex-wrap gap-2">
        {selected.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-full text-sm"
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: getTagColor(tag) }}
            />
            {tag}
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => removeTag(tag)}
              title="Remove"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

// Internal avatar circle with initials
const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-[10px] text-gray-600">
      {initials}
    </span>
  );
};

// Generic searchable assignee picker (users or teams)
const AssigneePicker = ({
  value,
  onChange,
  items,
  placeholder = "Unassigned",
  heading = "ASSIGN TO:",
  showAssignYourself = true,
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const triggerRef = useRef(null);
  useDismissibleDropdown(open, () => setOpen(false), triggerRef);

  const filtered = items.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative inline-block w-full max-w-xs">
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full h-10 px-3 text-sm bg-white border border-stroke rounded-md"
      >
        <span className="flex items-center gap-2 truncate">
          {value && value !== "Unassigned" ? <Avatar name={value} /> : null}
          <span className="truncate">{value || placeholder}</span>
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00005 3.87852L8.71255 0.166016L9.77305 1.22652L5.00005 5.99952L0.227051 1.22652L1.28755 0.166016L5.00005 3.87852Z"
            fill="#111111"
            fillOpacity="0.5"
          />
        </svg>
      </button>
      {open && (
        <div
          className="absolute z-[2] mt-1 w-[280px] bg-white border border-stroke rounded-lg shadow p-2"
          data-dropdown-content
        >
          <p className="px-2 pt-1 pb-2 text-[11px] font-semibold tracking-wide text-blue-600">
            {heading}
          </p>
          <div className="px-2 pb-2">
            <div className="relative">
              <input
                className="w-full h-9 pl-8 pr-2 border border-stroke rounded-md text-sm"
                placeholder="Search users or teams..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg
                className="absolute left-2 top-1/2 -translate-y-1/2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 11.5L14 14"
                  stroke="#888"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="4.5"
                  stroke="#888"
                  strokeWidth="1.25"
                />
              </svg>
            </div>
          </div>
          {showAssignYourself && (
            <button
              className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
              onClick={() => {
                onChange("Assign yourself");
                setOpen(false);
              }}
            >
              Assign yourself
            </button>
          )}
          <div className="border-t border-gray-200 my-1" />
          <p className="px-3 py-1 text-[11px] font-semibold tracking-wide text-blue-600">
            {showAssignYourself ? "USERS" : "TEAMS"}
          </p>
          <div className="max-h-60 overflow-y-auto">
            {filtered.map((i) => (
              <button
                key={i.name}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm flex items-center gap-2"
                onClick={() => {
                  onChange(i.name);
                  setOpen(false);
                }}
              >
                <Avatar name={i.name} />
                <span className="truncate">{i.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const AddActions = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const triggerRef = useRef(null);
  const { addAction, selectedActions } = useActions();

  // Register dropdown for global dismiss
  useDismissibleDropdown(
    showDropdown,
    () => setShowDropdown(false),
    triggerRef
  );

  const actionItems = [
    { name: "TICKET ACTIONS", isHeader: true },
    { name: "Forward email", type: "forward-email" },
    { name: "Add attachments", type: "add-attachments" },
    { name: "Add tags", type: "add-tags" },
    { name: "Remove tags", type: "remove-tags" },
    { name: "Set status", type: "set-status" },
    { name: "Set user assignee", type: "assign-agent" },
    { name: "Set team assignee", type: "assign-team" },
    { name: "Set subject", type: "set-subject" },
    { name: "Snooze for", type: "snooze-for" },
    { name: "Set priority", type: "set-priority" },
    { name: "Send internal note", type: "send-internal-note" },
    { name: "Exclude ticket from Auto-Merge", type: "exclude-auto-merge" },
    { name: "Exclude ticket from CSAT", type: "exclude-csat" },
    { name: "Set ticket field", type: "set-ticket-field" },
    { name: "", isDivider: true },
    { name: "EXTERNAL ACTIONS", isHeader: true },
    { name: "HTTP hook", type: "http-hook" },
  ];

  const handleActionClick = (action) => {
    if (action.isHeader || action.isDivider) return;

    addAction(action);
    setShowDropdown(false);
  };

  // Filter out actions that are already selected
  const selectedTypes = new Set((selectedActions || []).map((a) => a.type));
  const visibleItems = actionItems.filter(
    (item) => item.isHeader || item.isDivider || !selectedTypes.has(item.type)
  );

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center justify-between font-inter font-normal text-sm text-[#111111]/70 h-11 md:h-12 px-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px]"
      >
        <span>Add Actions</span>
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
          {visibleItems.map((item, index) => {
            if (item.isHeader) {
              return (
                <div
                  key={index}
                  className="w-full px-2 py-2 text-xs font-semibold text-blue-600 uppercase tracking-wider"
                >
                  {item.name}
                </div>
              );
            }

            if (item.isDivider) {
              return (
                <div
                  key={index}
                  className="w-full border-t border-gray-200 my-1"
                />
              );
            }

            return (
              <button
                key={index}
                className="hover:text-primary flex items-center gap-2 text-sm font-inter px-2 py-2 rounded-md hover:bg-gray-100 w-full text-start text-[#111]/80"
                onClick={() => handleActionClick(item)}
                data-dismiss="dropdown"
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Component for rendering selected Actions inline in the main pages
export const ActionsRenderer = () => {
  const { selectedActions, removeAction, updateConfig } = useActions();

  if (selectedActions.length === 0) return null;

  const renderActionForm = (action) => {
    if (!action) return null;

    switch (action.type) {
      case "forward-email":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700 mb-3 flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4H14M2 4V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V4M2 4L8 9L14 4"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                In some cases, forwarded messages may be visible to the original
                sender.{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Learn more
                </span>
                <button className="ml-auto text-blue-600 hover:text-blue-700">
                  Got It
                </button>
              </p>
              <div className="flex items-center gap-3 mb-2">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.53751 7.54097L8.32543 1.26215C8.72563 0.891966 9.37483 1.17581 9.37483 1.72096V4.66645C9.37483 4.89657 9.56485 5.08275 9.79494 5.0864C16.5327 5.19356 18.3332 7.93358 18.3332 14.8748C17.1084 12.4252 16.4836 10.9757 9.79574 10.9182C9.56563 10.9163 9.37483 11.103 9.37483 11.3331V14.2786C9.37483 14.8238 8.72563 15.1076 8.32543 14.7374L1.53751 8.4586C1.27005 8.21119 1.27005 7.78838 1.53751 7.54097Z"
                    stroke="#111111"
                    strokeOpacity="0.5"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">To:</span>
                <Input
                  placeholder="Search customers..."
                  className="flex-1 mb-0"
                  value={action.config.to}
                  onChange={(e) =>
                    updateConfig(action.id, {
                      ...action.config,
                      to: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:text-gray-800"
                  onClick={() =>
                    updateConfig(action.id, {
                      ...action.config,
                      cc: [...(action.config.cc || []), ""],
                    })
                  }
                >
                  Cc
                </button>
                <span className="text-gray-300">/</span>
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:text-gray-800"
                  onClick={() =>
                    updateConfig(action.id, {
                      ...action.config,
                      bcc: [...(action.config.bcc || []), ""],
                    })
                  }
                >
                  Bcc
                </button>
              </div>
              {(action.config.cc || []).map((addr, idx) => (
                <div
                  key={`cc-${idx}`}
                  className="flex items-center gap-2 mb-2 pl-6"
                >
                  <span className="text-xs text-gray-500 w-8">Cc</span>
                  <Input
                    placeholder="cc@example.com"
                    className="mb-0 flex-1"
                    value={addr}
                    onChange={(e) => {
                      const next = [...action.config.cc];
                      next[idx] = e.target.value;
                      updateConfig(action.id, { ...action.config, cc: next });
                    }}
                  />
                  <button
                    className="text-xs text-red-500"
                    onClick={() => {
                      const next = (action.config.cc || []).filter(
                        (_, i) => i !== idx
                      );
                      updateConfig(action.id, { ...action.config, cc: next });
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              {(action.config.bcc || []).map((addr, idx) => (
                <div
                  key={`bcc-${idx}`}
                  className="flex items-center gap-2 mb-2 pl-6"
                >
                  <span className="text-xs text-gray-500 w-8">Bcc</span>
                  <Input
                    placeholder="bcc@example.com"
                    className="mb-0 flex-1"
                    value={addr}
                    onChange={(e) => {
                      const next = [...action.config.bcc];
                      next[idx] = e.target.value;
                      updateConfig(action.id, { ...action.config, bcc: next });
                    }}
                  />
                  <button
                    className="text-xs text-red-500"
                    onClick={() => {
                      const next = (action.config.bcc || []).filter(
                        (_, i) => i !== idx
                      );
                      updateConfig(action.id, { ...action.config, bcc: next });
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Type {"{{"} for variables {"}}"}
                </p>
              </div>
              <RichTextEditor
                value={action.config.message}
                onChange={(content) =>
                  updateConfig(action.id, {
                    ...action.config,
                    message: content,
                  })
                }
                placeholder="Type your message here..."
                className="bg-white rounded-lg"
                minHeight="150px"
              />
              <div className="mt-4 flex items-center gap-3 text-sm">
                <Dropdown
                  placeholder="Ticket customer"
                  className="mb-0 flex-1"
                  items={[
                    { name: "First name" },
                    { name: "Last name" },
                    { name: "Full name" },
                    { name: "Email" },
                  ]}
                />
                <Dropdown
                  placeholder="Current agent"
                  className="mb-0 flex-1"
                  items={[
                    { name: "First name" },
                    { name: "Last name" },
                    { name: "Full name" },
                    { name: "Email" },
                    { name: "Bio" },
                  ]}
                />
                <Dropdown
                  placeholder="Shopify"
                  className="mb-0 flex-1"
                  items={[
                    { name: "Number of last order" },
                    { name: "Date of last order" },
                    { name: "Tracking url of last order" },
                    { name: "Tracking number of last order" },
                    { name: "Delivery status of last order" },
                    { name: "Status URL of last order" },
                    { name: "Shipping date of last order" },
                    { name: "Destination country of last order" },
                    { name: "Shipping address of last order" },
                  ]}
                />
              </div>
            </div>
          </div>
        );

      case "add-attachments":
        return (
          <AttachmentsPicker action={action} updateConfig={updateConfig} />
        );

      case "add-tags":
        return (
          <div>
            <p className="text-sm text-gray-600 mb-3">
              These tags will both be added to the ticket and help you better
              search for your macros.
            </p>
            <TagsPicker action={action} updateConfig={updateConfig} />
          </div>
        );

      case "remove-tags":
        return (
          <div>
            <p className="text-sm text-gray-600 mb-3">
              Select tags to remove from this ticket.
            </p>
            <TagsPicker
              action={action}
              updateConfig={updateConfig}
              label="Remove Tags"
            />
          </div>
        );

      case "set-status":
        return (
          <Dropdown
            placeholder={action.config.status}
            className="mb-0"
            items={[{ name: "Open" }, { name: "Closed" }]}
            onChange={(value) =>
              updateConfig(action.id, { ...action.config, status: value })
            }
          />
        );

      case "assign-agent":
        return (
          <AssigneePicker
            value={action.config.agent}
            onChange={(val) =>
              updateConfig(action.id, { ...action.config, agent: val })
            }
            items={[
              { name: "Mian Asad Ali" },
              { name: "Robin Mchelpfu" },
              { name: "Admin" },
            ]}
            placeholder="Unassigned"
            heading="ASSIGN TO:"
            showAssignYourself={true}
          />
        );

      case "assign-team":
        return (
          <AssigneePicker
            value={action.config.team}
            onChange={(val) =>
              updateConfig(action.id, { ...action.config, team: val })
            }
            items={[
              { name: "Support Team" },
              { name: "Technical Team" },
              { name: "Billing Team" },
            ]}
            placeholder="Unassigned"
            heading="ASSIGN TO:"
            showAssignYourself={false}
          />
        );

      case "set-subject":
        return (
          <Input
            placeholder="Enter ticket subject"
            className="mb-0"
            value={action.config.subject}
            onChange={(e) =>
              updateConfig(action.id, {
                ...action.config,
                subject: e.target.value,
              })
            }
          />
        );

      case "snooze-for":
        return (
          <div className="flex items-center gap-3">
            <Input
              type="number"
              placeholder="1"
              className="mb-0 w-20"
              value={action.config.duration}
              onChange={(e) =>
                updateConfig(action.id, {
                  ...action.config,
                  duration: parseInt(e.target.value) || 1,
                })
              }
            />
            <Dropdown
              placeholder={action.config.unit}
              className="mb-0 flex-1"
              items={[
                { name: "day(s)" },
                { name: "hour(s)" },
                { name: "week(s)" },
              ]}
              onChange={(value) =>
                updateConfig(action.id, { ...action.config, unit: value })
              }
            />
          </div>
        );

      case "set-priority":
        return (
          <Dropdown
            placeholder={action.config.priority}
            className="mb-0"
            items={[
              { name: "Normal" },
              { name: "Critical" },
              { name: "High" },
              { name: "Urgent" },
              { name: "Low" },
            ]}
            onChange={(value) =>
              updateConfig(action.id, { ...action.config, priority: value })
            }
          />
        );

      case "send-internal-note":
        return (
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.53751 7.54097L8.32543 1.26215C8.72563 0.891966 9.37483 1.17581 9.37483 1.72096V4.66645C9.37483 4.89657 9.56485 5.08275 9.79494 5.0864C16.5327 5.19356 18.3332 7.93358 18.3332 14.8748C17.1084 12.4252 16.4836 10.9757 9.79574 10.9182C9.56563 10.9163 9.37483 11.103 9.37483 11.3331V14.2786C9.37483 14.8238 8.72563 15.1076 8.32543 14.7374L1.53751 8.4586C1.27005 8.21119 1.27005 7.78838 1.53751 7.54097Z"
                  stroke="#111111"
                  strokeOpacity="0.5"
                  strokeWidth="1.25"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium text-sm">Internal note</span>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Type {"{{"} for variables {"}}"}
              </p>
            </div>
            <RichTextEditor
              value={action.config.note}
              onChange={(content) =>
                updateConfig(action.id, { ...action.config, note: content })
              }
              placeholder="Type your internal note here..."
              className="bg-white rounded-lg"
              minHeight="150px"
            />
            <div className="mt-4 flex items-center gap-3 text-sm">
              <Dropdown
                placeholder="Ticket customer"
                className="mb-0 flex-1"
                items={[
                  { name: "First name" },
                  { name: "Last name" },
                  { name: "Full name" },
                  { name: "Email" },
                ]}
              />
              <Dropdown
                placeholder="Current agent"
                className="mb-0 flex-1"
                items={[
                  { name: "First name" },
                  { name: "Last name" },
                  { name: "Full name" },
                  { name: "Email" },
                  { name: "Bio" },
                ]}
              />
              <Dropdown
                placeholder="Shopify"
                className="mb-0 flex-1"
                items={[
                  { name: "Number of last order" },
                  { name: "Date of last order" },
                  { name: "Tracking url of last order" },
                  { name: "Tracking number of last order" },
                  { name: "Delivery status of last order" },
                  { name: "Status URL of last order" },
                  { name: "Shipping date of last order" },
                  { name: "Destination country of last order" },
                  { name: "Shipping address of last order" },
                ]}
              />
            </div>
          </div>
        );

      case "exclude-auto-merge":
        return (
          <p className="text-sm text-gray-600">
            This ticket will be excluded from Auto-Merge functionality.
          </p>
        );

      case "exclude-csat":
        return (
          <p className="text-sm text-gray-600">
            This ticket will be excluded from CSAT surveys.
          </p>
        );

      case "set-ticket-field": {
        // Dynamic, searchable field/value pickers
        const fieldOptions = [
          { name: "Contact reason" },
          { name: "Product" },
          { name: "Resolution" },
          { name: "Call status" },
        ];
        const valuesMap = {
          "Contact reason": [
            {
              name: "Pre-sale",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="ml-auto"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              name: "Order",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="ml-auto"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              name: "Shipping",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="ml-auto"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            { name: "Spam" },
            { name: "Warranty" },
            { name: "Exchange" },
            { name: "Return" },
            {
              name: "Feedback",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="ml-auto"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              name: "Subscription",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="ml-auto"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            { name: "Wholesale" },
            { name: "Marketing" },
            { name: "Other" },
          ],
          Product: [], // can be empty for now
          Resolution: [
            { name: "No action" },
            { name: "Refund" },
            { name: "Discount" },
            { name: "Replacement sent" },
            { name: "Updated Account Information" },
            { name: "Information Given" },
            {
              name: "Subscription",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="ml-auto"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            {
              name: "Order",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="ml-auto"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
            },
            { name: "Other" },
          ],
          "Call status": [
            { name: "Answered" },
            { name: "Missed with Voicemail" },
            { name: "Missed" },
            { name: "Cancelled" },
            { name: "Abandoned" },
            { name: "Callback Requested" },
          ],
        };
        const activeField = action.config.field || "Contact reason";
        const valueItems = valuesMap[activeField] || [];
        // Nested sub-options for Contact reason
        const contactReasonSubs = {
          "Pre-sale": [
            { name: "Product question" },
            { name: "Recommendation" },
            { name: "Notify when in stock" },
            { name: "Website questions" },
            { name: "Coupon/Discount" },
          ],
          Order: [
            { name: "Cancel" },
            { name: "Change" },
            { name: "Missing item" },
            { name: "Status" },
            { name: "Wrong item" },
          ],
          Shipping: [
            { name: "Change Address" },
            { name: "Delivery not received" },
            { name: "Damaged in transit" },
            { name: "Lost in transit" },
            { name: "Arrived late" },
          ],
          Feedback: [{ name: "Positive" }, { name: "Negative" }],
          Subscription: [{ name: "Cancel" }, { name: "Change" }],
        };
        return (
          <div className="flex items-center gap-3">
            <Dropdown
              placeholder={activeField}
              className="mb-0 flex-1"
              items={fieldOptions}
              search={true}
              value={activeField}
              onChange={(value) =>
                updateConfig(action.id, {
                  ...action.config,
                  field: value,
                  value: "",
                  subValue: "",
                })
              }
            />
            <Dropdown
              placeholder={valueItems.length ? "Search" : "No options"}
              className="mb-0 flex-1"
              items={valueItems}
              search={true}
              value={action.config.value}
              onChange={(value) =>
                updateConfig(action.id, {
                  ...action.config,
                  value,
                  subValue: "",
                })
              }
              showDropdown={true}
            />
            {activeField === "Resolution" &&
              (action.config.value === "Subscription" ||
                action.config.value === "Order") && (
                <Dropdown
                  placeholder="Select an option"
                  className="mb-0 flex-1"
                  items={
                    action.config.value === "Subscription"
                      ? [{ name: "Updated" }, { name: "Cancelled" }]
                      : [
                          { name: "Updated Information" },
                          { name: "Cancelled" },
                          { name: "Upsold" },
                        ]
                  }
                  value={action.config.subValue}
                  search={true}
                  onChange={(value) =>
                    updateConfig(action.id, {
                      ...action.config,
                      subValue: value,
                    })
                  }
                  showDropdown={true}
                />
              )}
            {activeField === "Contact reason" &&
              contactReasonSubs[action.config.value] && (
                <Dropdown
                  placeholder="Select an option"
                  className="mb-0 flex-1"
                  items={contactReasonSubs[action.config.value]}
                  value={action.config.subValue}
                  search={true}
                  onChange={(value) =>
                    updateConfig(action.id, {
                      ...action.config,
                      subValue: value,
                    })
                  }
                  showDropdown={true}
                />
              )}
          </div>
        );
      }

      case "http-hook":
        return (
          <div className="p-4 border border-gray-200 rounded-lg space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                HTTP WebHook
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="HTTP hook"
                    className="mb-0"
                    value={action.config.title}
                    onChange={(e) =>
                      updateConfig(action.id, {
                        ...action.config,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Method <span className="text-red-500">*</span>
                    </label>
                    <Dropdown
                      placeholder={action.config.method}
                      className="mb-0"
                      items={[
                        { name: "GET" },
                        { name: "POST" },
                        { name: "PUT" },
                        { name: "DELETE" },
                      ]}
                      onChange={(value) =>
                        updateConfig(action.id, {
                          ...action.config,
                          method: value,
                        })
                      }
                    />
                  </div>
                  <div className="flex-[2]">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      URL <span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Example: https://company.com/api"
                      className="mb-0"
                      value={action.config.url}
                      onChange={(e) =>
                        updateConfig(action.id, {
                          ...action.config,
                          url: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <p className="text-gray-500">Action form not implemented yet.</p>
        );
    }
  };

  return (
    <>
      {selectedActions.map((action) => (
        <div key={action.id} className="mb-4">
          {/* Action Header - No border, starts from left */}
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-semibold text-gray-900">
              {action.name}
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

          {/* Action Form - No border, inline with page */}
          {renderActionForm(action)}
        </div>
      ))}
    </>
  );
};

export default AddActions;
