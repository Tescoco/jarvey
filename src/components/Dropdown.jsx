import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useDismissibleDropdown } from "../hooks/useDismissible";

export default function Dropdown({
  search = false,
  className = "mb-4 md:mb-5",
  position = "top",
  label,
  placeholder,
  required,
  info,
  leftIcon,
  items = [""],
  dropDownClass = "",
  btnClass,
  isArrow = true,
  des,
  desClass = "",
  onChange,
  value,
  popUpText,
  showPopup = false,
  showDropdown = true,
}) {
  const [defaultItem, setDefaultItem] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [pendingSelection, setPendingSelection] = useState(null);
  const [showDrop, setShowDrop] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (value) {
      // If value prop is provided, find the matching item
      const foundItem = items.find(
        (item) => item.name === value || item.color === value || item === value
      );
      if (foundItem) {
        setDefaultItem(foundItem);
      } else {
        setDefaultItem(typeof value === "string" ? { name: value } : value);
      }
    } else {
      setDefaultItem(
        typeof placeholder === "string"
          ? { name: placeholder }
          : placeholder || { name: "Select" }
      );
    }
  }, [placeholder, value, items]);

  // Register dropdown for global dismiss
  useDismissibleDropdown(showDrop, () => setShowDrop(false), triggerRef);

  // Register confirmation popup for global dismiss (essential popup - won't auto-dismiss)
  // No hook needed since this is handled by the portal modal's own click handler
  const handleChange = (selectedItem) => {
    if (showPopup) {
      setPendingSelection(selectedItem);
      setPopupVisible(true);
      return;
    }
    setDefaultItem(selectedItem);
    setShowDrop(false);
    setSearchValue("");

    // Call parent's onChange if provided
    if (onChange) {
      // Pass the appropriate value based on item structure
      if (selectedItem.color) {
        onChange(selectedItem.color); // For color dropdowns
      } else if (selectedItem.name) {
        onChange(selectedItem.name); // For regular dropdowns
      } else {
        onChange(selectedItem); // Fallback
      }
    }
  };

  const handlePopupConfirm = () => {
    if (pendingSelection) {
      setDefaultItem(pendingSelection);
      setShowDrop(false);
      setSearchValue("");
      if (onChange) {
        if (pendingSelection.color) {
          onChange(pendingSelection.color);
        } else if (pendingSelection.name) {
          onChange(pendingSelection.name);
        } else {
          onChange(pendingSelection);
        }
      }
    }
    setPopupVisible(false);
    setPendingSelection(null);
  };

  const handlePopupCancel = () => {
    setPopupVisible(false);
    setPendingSelection(null);
  };

  const filteredData = items.filter((data) =>
    data?.name?.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          htmlFor=""
          className="flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading"
        >
          {label}
          {required && <span className="text-[#FE4234]">*</span>}
          {info && (
            <span className="relative cursor-pointer group">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10364_38617)">
                  <path
                    d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z"
                    stroke="#FE4333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10.6666V7.99992M8 5.33325H8.00667"
                    stroke="#FE4333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10364_38617">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible select-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 inline-block text-[10px] text-white text-nowrap font-light bg-gray-500 rounded px-2 py-1 before:size-2 before:absolute before:bottom-0 before:bg-gray-500 before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:-mb-1">
                {info}
              </span>
            </span>
          )}
        </label>
      )}
      <div className="relative">
        <button
          ref={triggerRef}
          onClick={() => setShowDrop(!showDrop)}
          className={`flex items-center justify-between font-inter font-normal text-sm text-[#111111]/70 h-11 md:h-12 px-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px] ${btnClass}`}
        >
          <div className="flex items-center">
            {leftIcon && <div className="mr-2">{leftIcon}</div>}
            <span className="flex items-center gap-2">
              {defaultItem.color && (
                <span
                  className={`inline-block w-6 h-5 rounded`}
                  style={{ backgroundColor: defaultItem.color }}
                />
              )}
              {defaultItem.name}
            </span>
          </div>
          {showDropdown && isArrow && (
            <span className={`${showDrop ? "-scale-y-100" : "scale-y-100"}`}>
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
          )}
        </button>
        {showDropdown && showDrop && (
          <div
            data-dropdown-content
            className={`p-2 absolute z-[1] ${
              position === "top" ? "top-full mt-1" : "bottom-full mb-1"
            } left-0 w-full md:max-w-[300px] bg-white border border-solid border-stroke rounded-lg max-h-[250px] overflow-y-auto flex flex-col items-start ${dropDownClass}`}
          >
            {search && (
              <span className="block sticky -top-2 -mt-2 left-0 w-full bg-white pt-2">
                <input
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Type here..."
                  className={`mb-2 h-9 px-3 w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-lg font-inter font-normal text-xs text-[#111111]/80 placeholder:text-[#111111]/50`}
                />
              </span>
            )}
            {filteredData.map((item, index) => (
              <button
                className={`${
                  item.name === defaultItem.name
                    ? "bg-gray-100 text-heading"
                    : "bg-white text-[#111]/80"
                } hover:text-primary flex items-center gap-2 text-sm font-inter px-2 py-2 rounded-md hover:bg-gray-100 w-full text-start`}
                onClick={() => handleChange(item)}
                key={index}
              >
                {item.color && (
                  <span
                    className={`inline-block w-6 h-5 rounded`}
                    style={{ backgroundColor: item.color }}
                  />
                )}
                {item.icon && <div>{item.icon}</div>}
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
      {des && (
        <p
          className={`mt-1 text-xs text-gray font-medium !leading-[1.66] ${desClass}`}
        >
          {des}
        </p>
      )}
      {/* Confirmation Popup */}
      {popupVisible &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div
              data-modal-content
              className="bg-white rounded-2xl shadow-xl p-8 max-w-[400px] w-full flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-4">Confirm your account</h2>
              <p className="text-base text-gray-700 mb-6">
                {popUpText || "Please confirm your account to proceed."}
              </p>
              <div className="flex gap-4 w-full justify-center">
                <button
                  className="btn bg-primary text-white px-6 py-2 rounded-lg"
                  onClick={handlePopupConfirm}
                >
                  Confirm
                </button>
                <button
                  className="btn bg-gray-200 text-gray-800 px-6 py-2 rounded-lg"
                  onClick={handlePopupCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
