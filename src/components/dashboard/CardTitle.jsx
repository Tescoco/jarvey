import React, { useState, useRef } from "react";
import Modal from "../Modal";
import Input from "../Input";
import { three_dots } from "../../utilities/Classes";
import { useDismissibleDropdown } from "../../hooks/useDismissible";

export default function CardTitle({
  className,
  title,
  label,
  dropdown = true,
  titleClass,
}) {
  const dropList = ["Daily", "Weekly", "Monthly", "Yearly"];

  const [defaultItem, setDefaultItem] = useState(dropList[2]);
  const [showDrop, setShowDrop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const [showAddSubmenu, setShowAddSubmenu] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dashboardName, setDashboardName] = useState("");

  // Register dropdown for global dismiss
  useDismissibleDropdown(showMenu, () => setShowMenu(false), menuRef);

  const handleChange = (e) => {
    setDefaultItem(e);
    setShowDrop(false);
  };

  const handleAddToDashboard = () => {
    setShowAddSubmenu((prev) => !prev);
  };

  const handleCreateNewDashboard = () => {
    setShowCreateModal(true);
    setShowAddSubmenu(false);
    setShowMenu(false);
  };
  return (
    <div
      className={`flex items-center gap-1 justify-between mb-4 md:mb-5 lg:mb-6 ${className}`}
    >
      <h4 className={`text-base md:text-lg ${titleClass}`}>{title}</h4>
      {dropdown ? (
        <div className={`relative`}>
          <div className="relative">
            <button
              onClick={() => setShowDrop(!showDrop)}
              className={`flex items-center justify-between font-inter font-normal text-sm text-[#111111]/70 h-11 md:h-9 px-2.5 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px]`}
            >
              <span className="flex items-center gap-2">{defaultItem}</span>
              <span
                className={`ml-1 ${showDrop ? "-scale-y-100" : "scale-y-100"}`}
              >
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
                    fillOpacity="0.5"
                  />
                </svg>
              </span>
            </button>
            {showDrop && (
              <div
                className={`p-1 absolute z-[1] top-full mt-1 right-0 w-max bg-white border border-solid border-stroke rounded-lg max-h-[250px] overflow-y-auto flex flex-col items-start`}
              >
                {dropList.map((item, index) => (
                  <button
                    className={`${
                      item.name === defaultItem.name
                        ? "bg-gray-100 text-heading"
                        : "bg-white text-[#111]/80"
                    } hover:text-primary flex items-center gap-2 text-sm font-inter px-2 py-1 rounded-md hover:bg-gray-100 w-full text-start`}
                    onClick={() => handleChange(item)}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            ref={menuRef}
            onClick={() => setShowMenu(!showMenu)}
            className="size-6 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            {three_dots}
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div
              className="absolute top-8 right-0 z-10 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[160px]"
              data-dropdown-content
              data-no-dismiss
            >
              <button
                onClick={handleAddToDashboard}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                data-dismiss="dropdown"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V14M2 8H14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add To Dashboard
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              </button>
            </div>
          )}

          {/* Add To Dashboard Submenu */}
          {showMenu && showAddSubmenu && (
            <div
              className="absolute top-8 right-[170px] z-10 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-[260px]"
              data-dropdown-content
              data-no-dismiss
            >
              <div className="px-4 py-3 text-sm text-gray-400">
                No existing dashboards
              </div>
              <div className="border-t border-gray-200 my-1"></div>
              <button
                onClick={handleCreateNewDashboard}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-blue-600 hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V14M2 8H14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Create New Dashboard
              </button>
            </div>
          )}

          {/* Create New Dashboard Modal */}
          {showCreateModal && (
            <Modal onClick={() => setShowCreateModal(false)} closeOnClick>
              <h3 className="text-xl font-semibold mb-4">
                Add {label || "Average CSAT"} to new Dashboard
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Dashboard Name <span className="text-red-500">*</span>
                </label>
                <Input
                  className="mb-0"
                  type="text"
                  placeholder="Add dashboard name"
                  value={dashboardName}
                  onChange={(e) => setDashboardName(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white"
                >
                  Create Dashboard
                </button>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}
