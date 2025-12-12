import React, { useState, useRef, useEffect } from "react";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import { search, langList } from "../utilities/Classes";
import { useDismissibleDropdown } from "../hooks/useDismissible";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";

export default function TableFilter({
  children,
  className = "",
  searchClass = "w-full md:max-w-[300px] xl:max-w-[400px]",
  lang = false,
  textHidden = false,
  BtnClass,
  csv = false,
  hideSortDrop,
  onSearch,
  searchValue
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("Table");
  const menuRef = useRef(null);
  const [sortDrop, setSortDrop] = useState(false);
  const [showAddSubmenu, setShowAddSubmenu] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dashboardName, setDashboardName] = useState("");
  const [searchQuery, setSearchQuery] = useState(searchValue || "");

  const sorts = [
    `Sort by`,
    `Sort by Name`,
    `Sort by Store`,
    `Sort by Language`,
  ];
  const [defaultSort, setDefaultSort] = useState(sorts[0]);
  const btnClass =
    "flex items-center gap-1 py-2 px-[10px] font-inter font-medium text-sm text-[#111]/60 bg-white border border-solid border-[#E2E4E9] rounded-lg shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]";

  // Register dropdown for global dismiss
  useDismissibleDropdown(showMenu, () => setShowMenu(false), menuRef);

  // Sort dropdown outside-click handling
  const sortTriggerRef = useRef(null);
  const sortContainerRef = useRef(null);
  useEffect(() => {
    if (!sortDrop) return;
    const handleOutside = (e) => {
      const inTrigger = sortTriggerRef.current?.contains(e.target);
      const inContainer = sortContainerRef.current?.contains(e.target);
      if (!inTrigger && !inContainer) setSortDrop(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [sortDrop]);

  const handleAddToDashboard = () => {
    setShowAddSubmenu((prev) => !prev);
  };

  const handleCreateNewDashboard = () => {
    setShowCreateModal(true);
    setShowAddSubmenu(false);
    setShowMenu(false);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  // check if current route is dashboard
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  return isDashboard ? (
    <div
      className={`flex items-center justify-between flex-wrap gap-3 mb-4 md:mb-5 ${className}`}
    >
      {/* Left side - Search */}
      <div className={`search ${searchClass} mr-auto grow-1 md:grow-0`}>
        <Input
          className="mb-0"
          type="text"
          placeholder="Search..."
          leftIcon={search}
          inputClass="!h-[38px]"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Center - Edit Table Button */}
      <button className="flex items-center gap-2 py-2 px-3 font-inter font-medium text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3H14M2 7H14M2 11H14M2 15H14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        Edit Table
      </button>

      {/* Segmented Control - Table/Heatmap */}
      <div className="flex bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={() => setActiveTab("Table")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "Table"
              ? "bg-gray-200 text-gray-900"
              : "text-gray-600 hover:text-gray-900"
            }`}
        >
          Table
        </button>
        <button
          onClick={() => setActiveTab("Heatmap")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === "Heatmap"
              ? "bg-gray-200 text-gray-900"
              : "text-gray-600 hover:text-gray-900"
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

        {/* Add To Dashboard Submenu */}
        {showMenu && showAddSubmenu && (
          <div
            className="absolute top-10 right-[180px] z-10 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-[260px]"
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
      </div>

      {children}
      {showCreateModal && (
        <Modal onClick={() => setShowCreateModal(false)} closeOnClick>
          <h3 className="text-xl font-semibold mb-4">Add to new Dashboard</h3>
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
    <div
      className={`flex items-center justify-between flex-wrap gap-3 mb-4 md:mb-5 ${className}`}
    >
      <div className={`search ${searchClass} mr-auto`}>
        <Input
          className="mb-0"
          type="text"
          placeholder="Search..."
          leftIcon={search}
          inputClass="!h-[38px]"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* SINGLE Sort Button - Removed duplicate */}
      <div className="relative z-[2]" ref={sortContainerRef}>
        <button
          ref={sortTriggerRef}
          className={`${btnClass} ${BtnClass}`}
          onClick={() => setSortDrop(!sortDrop)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00133 3.95801V16.0413M5.00133 16.0413L2.5 13.5413M5.00133 16.0413L7.5 13.5413M9.79167 5.62467H16.875M13.125 14.3747H16.875M11.4583 9.99967H16.875"
              stroke="#111111"
              strokeOpacity="0.5"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {!textHidden && (
            <>
              <span className="mx-1 block">{defaultSort}</span>
              <svg
                className={`${sortDrop ? "-scale-y-100" : "scale-x-100"}`}
                width="10"
                height="6"
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
            </>
          )}
        </button>
        {sortDrop && (
          <div className="mt-1 py-1 absolute right-0 w-max max-w-[300px] bg-white border border-solid border-stroke rounded-lg max-h-[250px] overflow-y-auto flex flex-col items-start">
            {sorts.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  setDefaultSort(item);
                  setSortDrop(false);
                }}
                className="text-sm font-normal py-1 px-3 cursor-pointer hover:text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* language */}
      {lang && (
        <Dropdown
          btnClass="!h-[38px]"
          className="mb-0 min-w-[110px]"
          placeholder="Language"
          items={langList}
          dropDownClass="w-max !left-auto !right-0"
          search={true}
        />
      )}

      {csv && (
        <button className="btn min-w-[79px] gap-1 text-gray">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5423 10.0417L7.58992 12.9942C7.26448 13.3196 6.73685 13.3196 6.41141 12.9942L3.45898 10.0417M7.00067 1.29175V12.9584M13.0423 16.7084H0.958984"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          CSV
        </button>
      )}
      {children}
    </div>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import Input from "../components/Input";
// import Dropdown from "../components/Dropdown";
// import { search, langList } from "../utilities/Classes";
// import { useDismissibleDropdown } from "../hooks/useDismissible";
// import { useLocation } from "react-router-dom";
// import Modal from "./Modal";

// export default function TableFilter({
//   children,
//   className = "",
//   searchClass = "w-full md:max-w-[300px] xl:max-w-[400px]",
//   lang = false,
//   textHidden = false,
//   BtnClass,
//   csv = false,
//   hideSortDrop,
//   onSearch={handleSearch},
//   searchValue={searchQuery}
// }) {
//   const [showMenu, setShowMenu] = useState(false);
//   const [activeTab, setActiveTab] = useState("Table");
//   const menuRef = useRef(null);
//   const [sortDrop, setSortDrop] = useState(false);
//   const [showAddSubmenu, setShowAddSubmenu] = useState(false);
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [dashboardName, setDashboardName] = useState("");
//   const sorts = [
//     `Sort by`,
//     `Sort by Name`,
//     `Sort by Store`,
//     `Sort by Language`,
//   ];
//   const [defaultSort, setDefaultSort] = useState(sorts[0]);
//   const btnClass =
//     "flex items-center gap-1 py-2 px-[10px] font-inter font-medium text-sm text-[#111]/60 bg-white border border-solid border-[#E2E4E9] rounded-lg shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)]";

//   // Register dropdown for global dismiss
//   useDismissibleDropdown(showMenu, () => setShowMenu(false), menuRef);

//   // Sort dropdown outside-click handling (supports multiple triggers)
//   const sortTriggerRef1 = useRef(null);
//   const sortContainerRef = useRef(null);
//   useEffect(() => {
//     if (!sortDrop) return;
//     const handleOutside = (e) => {
//       const inTrigger1 = sortTriggerRef1.current?.contains(e.target);
//       const inContainer = sortContainerRef.current?.contains(e.target);
//       if (!inTrigger1 && !inContainer) setSortDrop(false);
//     };
//     document.addEventListener("mousedown", handleOutside);
//     document.addEventListener("touchstart", handleOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleOutside);
//       document.removeEventListener("touchstart", handleOutside);
//     };
//   }, [sortDrop]);

//   const handleAddToDashboard = () => {
//     setShowAddSubmenu((prev) => !prev);
//   };

//   const handleCreateNewDashboard = () => {
//     setShowCreateModal(true);
//     setShowAddSubmenu(false);
//     setShowMenu(false);
//   };

//   // check if current route is dashboard
//   const location = useLocation();
//   const isDashboard = location.pathname.includes("dashboard");

//   return isDashboard ? (
//     <div
//       className={`flex items-center justify-between flex-wrap gap-3 mb-4 md:mb-5 ${className}`}
//     >
//       {/* Left side - Search */}
//       <div className={`search ${searchClass} mr-auto grow-1 md:grow-0`}>
//         <Input
//           className="mb-0"
//           type="text"
//           placeholder="Search..."
//           leftIcon={search}
//           inputClass="!h-[38px]"
//         />
//       </div>

//       {/* Center - Edit Table Button */}
//       <button className="flex items-center gap-2 py-2 px-3 font-inter font-medium text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
//         <svg
//           width="16"
//           height="16"
//           viewBox="0 0 16 16"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M2 3H14M2 7H14M2 11H14M2 15H14"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//           />
//         </svg>
//         Edit Table
//       </button>

//       {/* Segmented Control - Table/Heatmap */}
//       <div className="flex bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
//         <button
//           onClick={() => setActiveTab("Table")}
//           className={`px-4 py-2 text-sm font-medium transition-colors ${
//             activeTab === "Table"
//               ? "bg-gray-200 text-gray-900"
//               : "text-gray-600 hover:text-gray-900"
//           }`}
//         >
//           Table
//         </button>
//         <button
//           onClick={() => setActiveTab("Heatmap")}
//           className={`px-4 py-2 text-sm font-medium transition-colors ${
//             activeTab === "Heatmap"
//               ? "bg-gray-200 text-gray-900"
//               : "text-gray-600 hover:text-gray-900"
//           }`}
//         >
//           Heatmap
//         </button>
//       </div>

//       {/* Right side - 3 Dots Menu */}
//       <div className="relative">
//         <button
//           ref={menuRef}
//           onClick={() => setShowMenu(!showMenu)}
//           className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4Z"
//               fill="currentColor"
//             />
//             <path
//               d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
//               fill="currentColor"
//             />
//             <path
//               d="M8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z"
//               fill="currentColor"
//             />
//           </svg>
//         </button>

//         {/* Dropdown Menu */}
//         {showMenu && (
//           <div
//             className="absolute top-10 right-0 z-10 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[160px]"
//             data-dropdown-content
//             data-no-dismiss
//           >
//             <button
//               onClick={handleAddToDashboard}
//               className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
//               data-dismiss="dropdown"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M8 2V14M2 8H14"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               Add To Dashboard
//               <svg
//                 width="12"
//                 height="12"
//                 viewBox="0 0 12 12"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="ml-auto"
//               >
//                 <path
//                   d="M4.5 3L7.5 6L4.5 9"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         )}

//         {/* Add To Dashboard Submenu */}
//         {showMenu && showAddSubmenu && (
//           <div
//             className="absolute top-10 right-[180px] z-10 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-[260px]"
//             data-dropdown-content
//             data-no-dismiss
//           >
//             <div className="px-4 py-3 text-sm text-gray-400">
//               No existing dashboards
//             </div>
//             <div className="border-t border-gray-200 my-1"></div>
//             <button
//               onClick={handleCreateNewDashboard}
//               className="flex items-center gap-2 w-full px-4 py-2 text-sm text-blue-600 hover:bg-gray-50 transition-colors"
//             >
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M8 2V14M2 8H14"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               Create New Dashboard
//             </button>
//           </div>
//         )}
//       </div>

//       {children}
//       {showCreateModal && (
//         <Modal onClick={() => setShowCreateModal(false)} closeOnClick>
//           <h3 className="text-xl font-semibold mb-4">Add to new Dashboard</h3>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-900 mb-2">
//               Dashboard Name <span className="text-red-500">*</span>
//             </label>
//             <Input
//               className="mb-0"
//               type="text"
//               placeholder="Add dashboard name"
//               value={dashboardName}
//               onChange={(e) => setDashboardName(e.target.value)}
//             />
//           </div>
//           <div className="flex justify-end gap-2">
//             <button
//               onClick={() => setShowCreateModal(false)}
//               className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={() => setShowCreateModal(false)}
//               className="px-4 py-2 rounded-md bg-blue-600 text-white"
//             >
//               Create Dashboard
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   ) : (
//     <div
//       className={`flex items-center justify-between flex-wrap gap-3 mb-4 md:mb-5 ${className}`}
//     >
//       <div className={`search ${searchClass} mr-auto`}>
//         <Input
//           className="mb-0"
//           type="text"
//           placeholder="Search..."
//           leftIcon={search}
//           inputClass="!h-[38px]"
//         />
//       </div>
//       <div className="relative">
//         <button
//           ref={sortTriggerRef1}
//           onClick={() => setSortDrop(!sortDrop)}
//           className={`${btnClass} ${BtnClass}`}
//         >
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 20 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M2.2915 3.95801H17.7082M7.2915 16.0413H12.7082M4.7915 9.99967H15.2082"
//               stroke="#888888"
//               strokeOpacity="1"
//               strokeWidth="1.25"
//               strokeLinecap="round"
//             />
//           </svg>
//           {!textHidden && (
//             <>
//               <span className="mx-1 block">{defaultSort}</span>
//               <svg
//                 className={`${sortDrop ? "-scale-y-100" : "scale-x-100"}`}
//                 width="10"
//                 height="6"
//                 viewBox="0 0 10 6"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M5.00005 3.87852L8.71255 0.166016L9.77305 1.22652L5.00005 5.99952L0.227051 1.22652L1.28755 0.166016L5.00005 3.87852Z"
//                   fill="#111111"
//                   fillOpacity="0.5"
//                 />
//               </svg>
//             </>
//           )}
//         </button>
//       </div>

//       {/* language */}
//       {lang && (
//         <Dropdown
//           btnClass="!h-[38px]"
//           className="mb-0 min-w-[110px]"
//           placeholder="Language"
//           items={langList}
//           dropDownClass="w-max !left-auto !right-0"
//           search={true}
//         />
//       )}
//       {/* language */}

//       <div className="relative z-[2]" ref={sortContainerRef}>
//         <button
//           className={`${btnClass} ${BtnClass}`}
//           onClick={() => setSortDrop(!sortDrop)}
//         >
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 20 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5.00133 3.95801V16.0413M5.00133 16.0413L2.5 13.5413M5.00133 16.0413L7.5 13.5413M9.79167 5.62467H16.875M13.125 14.3747H16.875M11.4583 9.99967H16.875"
//               stroke="#111111"
//               strokeOpacity="0.5"
//               strokeWidth="1.25"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           {!textHidden && (
//             <>
//               <span className="mx-1 block">{defaultSort}</span>
//               <svg
//                 className={`${sortDrop ? "-scale-y-100" : "scale-x-100"}`}
//                 width="10"
//                 height="6"
//                 viewBox="0 0 10 6"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M5.00005 3.87852L8.71255 0.166016L9.77305 1.22652L5.00005 5.99952L0.227051 1.22652L1.28755 0.166016L5.00005 3.87852Z"
//                   fill="#111111"
//                   fillOpacity="0.5"
//                 />
//               </svg>
//             </>
//           )}
//         </button>
//         {sortDrop && (
//           <div className="mt-1 py-1 absolute right-0 w-max max-w-[300px] bg-white border border-solid border-stroke rounded-lg max-h-[250px] overflow-y-auto flex flex-col items-start">
//             {sorts.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => {
//                   setDefaultSort(item);
//                   setSortDrop(false);
//                 }}
//                 className="text-sm font-normal py-1 px-3 cursor-pointer hover:text-primary"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//       {csv && (
//         <button className="btn min-w-[79px] gap-1 text-gray">
//           <svg
//             width="14"
//             height="18"
//             viewBox="0 0 14 18"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10.5423 10.0417L7.58992 12.9942C7.26448 13.3196 6.73685 13.3196 6.41141 12.9942L3.45898 10.0417M7.00067 1.29175V12.9584M13.0423 16.7084H0.958984"
//               stroke="currentColor"
//               strokeWidth="1.25"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           CSV
//         </button>
//       )}
//       {children}
//     </div>
//   );
// }
