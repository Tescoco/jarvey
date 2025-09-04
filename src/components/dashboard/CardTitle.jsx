import React, { useState, useRef } from "react";
import { three_dots } from "../../utilities/Classes";
import { useDismissibleDropdown } from "../../hooks/useDismissible";

export default function CardTitle({
  className,
  title,
  dropdown = true,
  titleClass,
}) {
  const dropList = ["Daily", "Weekly", "Monthly", "Yearly"];

  const [defaultItem, setDefaultItem] = useState(dropList[2]);
  const [showDrop, setShowDrop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Register dropdown for global dismiss
  useDismissibleDropdown(showMenu, () => setShowMenu(false), menuRef);

  const handleChange = (e) => {
    setDefaultItem(e);
    setShowDrop(false);
  };

  const handleAddToDashboard = () => {
    console.log("Add to Dashboard clicked for:", title);
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
        </div>
      )}
    </div>
  );
}
