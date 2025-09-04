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
        return { to: "", message: "" };
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

const AddActions = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const triggerRef = useRef(null);
  const { addAction } = useActions();

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
    { name: "Assign an agent", type: "assign-agent" },
    { name: "Assign a team", type: "assign-team" },
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
          {actionItems.map((item, index) => {
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
                <span className="text-sm text-gray-500">Cc / Bcc</span>
              </div>
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
                    { name: "Ticket customer" },
                    { name: "Current agent" },
                    { name: "Shopify" },
                  ]}
                />
                <Dropdown
                  placeholder="Current agent"
                  className="mb-0 flex-1"
                  items={[{ name: "Current agent" }, { name: "Admin" }]}
                />
                <Dropdown
                  placeholder="Shopify"
                  className="mb-0 flex-1"
                  items={[{ name: "Shopify" }, { name: "Custom" }]}
                />
              </div>
            </div>
          </div>
        );

      case "add-attachments":
        return (
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
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
        );

      case "add-tags":
        return (
          <div>
            <p className="text-sm text-gray-600 mb-3">
              These tags will both be added to the ticket and help you better
              search for your macros.
            </p>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
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
              Add Tags
            </button>
          </div>
        );

      case "remove-tags":
        return (
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
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
            Add Tags
          </button>
        );

      case "set-status":
        return (
          <Dropdown
            placeholder={action.config.status}
            className="mb-0"
            items={[
              { name: "Open" },
              { name: "Pending" },
              { name: "Solved" },
              { name: "Closed" },
            ]}
            onChange={(value) =>
              updateConfig(action.id, { ...action.config, status: value })
            }
          />
        );

      case "assign-agent":
        return (
          <Dropdown
            placeholder={action.config.agent}
            className="mb-0"
            items={[
              { name: "Unassigned" },
              { name: "Current User" },
              { name: "Admin" },
            ]}
            onChange={(value) =>
              updateConfig(action.id, { ...action.config, agent: value })
            }
          />
        );

      case "assign-team":
        return (
          <Dropdown
            placeholder={action.config.team}
            className="mb-0"
            items={[
              { name: "Unassigned" },
              { name: "Support Team" },
              { name: "Technical Team" },
            ]}
            onChange={(value) =>
              updateConfig(action.id, { ...action.config, team: value })
            }
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
                  { name: "Ticket customer" },
                  { name: "Current agent" },
                  { name: "Shopify" },
                ]}
              />
              <Dropdown
                placeholder="Current agent"
                className="mb-0 flex-1"
                items={[{ name: "Current agent" }, { name: "Admin" }]}
              />
              <Dropdown
                placeholder="Shopify"
                className="mb-0 flex-1"
                items={[{ name: "Shopify" }, { name: "Custom" }]}
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

      case "set-ticket-field":
        return (
          <div className="flex items-center gap-3">
            <Dropdown
              placeholder={action.config.field}
              className="mb-0 flex-1"
              items={[
                { name: "Contact reason" },
                { name: "Priority" },
                { name: "Status" },
              ]}
              onChange={(value) =>
                updateConfig(action.id, { ...action.config, field: value })
              }
            />
            <Dropdown
              placeholder="Select an option"
              className="mb-0 flex-1"
              items={[
                { name: "Option 1" },
                { name: "Option 2" },
                { name: "Option 3" },
              ]}
              onChange={(value) =>
                updateConfig(action.id, { ...action.config, value })
              }
            />
          </div>
        );

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
