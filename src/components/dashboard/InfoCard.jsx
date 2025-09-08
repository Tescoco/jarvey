import React, { useState, useRef } from "react";
import Alert from "../Alert";
import { c_16 } from "../../utilities/Classes";
import { useDismissibleDropdown } from "../../hooks/useDismissible";
import Modal from "../Modal";
import Input from "../Input";
import { useLocation } from "react-router-dom";

export default function InfoCard({ className = "", item = null }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const submenuRef = useRef(null);
  const [showAddSubmenu, setShowAddSubmenu] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dashboardName, setDashboardName] = useState("");

  // Register dropdown for global dismiss
  useDismissibleDropdown(showMenu, () => setShowMenu(false), menuRef);
  useDismissibleDropdown(
    showAddSubmenu,
    () => setShowAddSubmenu(false),
    submenuRef
  );

  const handleAddToDashboard = () => {
    // open the submenu and hide the parent dropdown
    setShowAddSubmenu(true);
    setShowMenu(false);
  };

  const handleCreateNewDashboard = () => {
    setShowCreateModal(true);
    setShowAddSubmenu(false);
    setShowMenu(false);
  };

  const isDashboard = useLocation().pathname.includes("dashboard");

  return isDashboard ? (
    <div className={`${c_16} ${className} relative`}>
      <div className="flex items-center gap-1 flex-wrap justify-between mb-3 md:mb-4 lg:mb-5">
        <span className="font-inter font-medium text-xs text-[#858585]">
          {item.label}
        </span>
        <div className="flex items-center gap-2">
          <Alert
            className="!min-h-5"
            variant={item.marketVariant}
            text={`${item.marketValue}%`}
            plus
          />
          <button
            ref={menuRef}
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z"
                fill="currentColor"
              />
              <path
                d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
                fill="currentColor"
              />
              <path
                d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <h4 className="text-lg !leading-normal text-[#0A0D14]">{item.title}</h4>

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
      {showAddSubmenu && (
        <div
          className="absolute top-8 right-0 z-10 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-[260px]"
          ref={submenuRef}
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
        <Modal
          onClick={() => setShowCreateModal(false)}
          closeOnClick
          className=""
        >
          <h3 className="text-xl font-semibold mb-4">
            Add {item?.label} to new Dashboard
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
  ) : (
    <div className={`${c_16} ${className}`}>
      <div className="flex items-center gap-1 flex-wrap justify-between mb-3 md:mb-4 lg:mb-5">
        <span className="font-inter font-medium text-xs text-[#858585]">
          {item.label}
        </span>
        <Alert
          className="!min-h-5"
          variant={item.marketVariant}
          text={`${item.marketValue}%`}
          plus
        />
      </div>
      <h4 className="text-lg !leading-normal text-[#0A0D14]">{item.title}</h4>
    </div>
  );
}
