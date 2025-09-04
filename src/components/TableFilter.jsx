import React, { useState, useRef } from 'react'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import { search, langList } from '../utilities/Classes'
import { useDismissibleDropdown } from '../hooks/useDismissible'

export default function TableFilter({ children, className = "", searchClass = "w-full md:max-w-[300px] xl:max-w-[400px]", lang = false, textHidden = false, BtnClass, csv = false, hideSortDrop }) {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('Table');
  const menuRef = useRef(null);

  // Register dropdown for global dismiss
  useDismissibleDropdown(showMenu, () => setShowMenu(false), menuRef);

  const handleAddToDashboard = () => {
    console.log("Add to Dashboard clicked");
    setShowMenu(false);
  };

  return (
    <div className={`flex items-center justify-between flex-wrap gap-3 mb-4 md:mb-5 ${className}`}>
      {/* Left side - Search */}
      <div className={`search ${searchClass} mr-auto grow-1 md:grow-0`}>
        <Input className='mb-0' type="text" placeholder="Search..." leftIcon={search} inputClass='!h-[38px]' />
      </div>

      {/* Center - Edit Table Button */}
      <button className="flex items-center gap-2 py-2 px-3 font-inter font-medium text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3H14M2 7H14M2 11H14M2 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        Edit Table
      </button>

      {/* Segmented Control - Table/Heatmap */}
      <div className="flex bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={() => setActiveTab('Table')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'Table'
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Table
        </button>
        <button
          onClick={() => setActiveTab('Heatmap')}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'Heatmap'
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Heatmap
        </button>
      </div>

      {/* Right side - 3 Dots Menu */}
      <div className="relative">
        <button
          ref={menuRef}
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
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

        {/* Dropdown Menu */}
        {showMenu && (
          <div
            className="absolute top-10 right-0 z-10 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[160px]"
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

      {children}
    </div>
  )
}
