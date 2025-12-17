import React, { useState } from "react";
import Top from "../../layouts/Top";
import { Link } from "react-router-dom";
import { arrow_left, plus } from "../../utilities/Classes";
import TableFilter from "../TableFilter";

export default function PredefinedCreate() {
  const CardItems = [
    {
      title: "Order Confirmation",
      tags: ["SEND EMAIL", "ORDER STATUS"],
      value: "2",
    },
    {
      title: "Shipping Notification",
      tags: ["SEND EMAIL", "SHIPPING"],
      value: "1",
    },
    {
      title: "Refund Request Response",
      tags: ["INTERNAL NOTE", "REFUND"],
      value: "3",
    },
    {
      title: "Product Question",
      tags: ["REPLY TO CUSTOMER", "PRODUCT"],
      value: "2",
    },
    {
      title: "Thank You Message",
      tags: ["SEND EMAIL", "CLOSING"],
      value: "1",
    },
    {
      title: "Return Instructions",
      tags: ["REPLY TO CUSTOMER", "RETURN"],
      value: "2",
    },
    {
      title: "Delay Notification",
      tags: ["SEND EMAIL", "SHIPPING"],
      value: "1",
    },
    {
      title: "Out of Stock",
      tags: ["REPLY TO CUSTOMER", "STOCK"],
      value: "2",
    },
  ];

  // FIX: Add search state
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState(CardItems);
  const [sortBy, setSortBy] = useState('Sort by');
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customTemplate, setCustomTemplate] = useState({
    name: '',
    content: '',
    tags: []
  });
  const [newTag, setNewTag] = useState('');

  // FIX: Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredCards(CardItems);
      return;
    }

    const filtered = CardItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredCards(filtered);
  };


  // Add sort handler
  const handleSort = (sortOption) => {
    setSortBy(sortOption);

    let sorted = [...filteredCards];

    switch (sortOption) {
      case 'Sort by Name':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Sort by Store':
        // Since your cards don't have store property, sort by tags
        sorted.sort((a, b) => a.tags[0].localeCompare(b.tags[0]));
        break;
      case 'Sort by Language':
        // You can customize this based on your needs
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        sorted = CardItems;
    }

    setFilteredCards(sorted);
  };


  const handleCreateTemplate = () => {
    if (!customTemplate.name.trim()) {
      alert('Please enter a template name');
      return;
    }

    if (!customTemplate.content.trim()) {
      alert('Please enter template content');
      return;
    }

    // Create new template object
    const newTemplate = {
      title: customTemplate.name,
      tags: customTemplate.tags.length > 0 ? customTemplate.tags : ['CUSTOM'],
      value: customTemplate.tags.length > 2 ? `${customTemplate.tags.length - 2}` : null,
    };

    // Add to CardItems and filteredCards
    const updatedItems = [...CardItems, newTemplate];
    CardItems.push(newTemplate); // Update original array
    setFilteredCards(updatedItems);

    // Reset form and close modal
    setCustomTemplate({ name: '', content: '', tags: [] });
    setNewTag('');
    setShowCustomModal(false);

    alert('Custom template created successfully!');
  };

  const handleAddTag = () => {
    if (newTag.trim() && !customTemplate.tags.includes(newTag.trim().toUpperCase())) {
      setCustomTemplate(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim().toUpperCase()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setCustomTemplate(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };


  return (
    <div>
      <Top title={" "} className="!justify-start">
        <Link
          to="/app/predefined"
          className="flex items-center gap-2.5 group"
        >
          <span className="size-6 md:size-8 rounded-full border border-solid border-stroke text-[#858585] transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center">
            {arrow_left}
          </span>
          <span className="text-heading text-sm md:text-base lg:text-lg font-medium">
            Create Predefined Responses
          </span>
        </Link>
      </Top>
      <div className="p-4 lg:p-5 xl:p-6">
        <div className="mb-5 lg:mb-6 flex items-center justify-between gap-2 flex-wrap">
          <h6 className="text-lg lg:text-xl xl:text-2xl text-[#0A0D14] font-semibold !leading-[1.5]">
            Predefined Response Template
          </h6>
          <div className="flex items-center gap-2 flex-wrap">
            <TableFilter
              className="!mb-0"
              searchClass="min-w-[220px]"
              onSearch={handleSearch}
              searchValue={searchQuery}
              onSort={handleSort}
            />
            {/* <Link
              to="/app/predefined-update"
              className="btn gap-2 flex items-center px-4 shadow-[0px_1px_2px_0px_rgba(90,54, 91,0.48), 0px_0px_0px_1px_#6E3FF3] border-primary text-primary"
            >
              {plus} Custom template
            </Link> */}
            <button
              onClick={() => setShowCustomModal(true)}
              className="btn gap-2 flex items-center px-4 shadow-[0px_1px_2px_0px_rgba(90,54,91,0.48),_0px_0px_0px_1px_#6E3FF3] border-primary text-primary"
            >
              {plus} Custom template
            </button>
          </div>
        </div>
        <div>
          <p className="text-[#858585] text-xs !leading-[1.5] text-center mb-2 lg:mb-3">
            Choose a template and customize it to fit your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
            {filteredCards.map((item, idx) => (
              <div
                className="border border-[#E2E4E9] rounded-lg lg:rounded-xl  p-3 lg:p-4 cursor-pointer hover:border-primary transition-all"
                key={idx}
              >
                <p className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.5] mb-3 lg:mb-4">
                  {item.title}
                </p>
                <p className="text-xs text-[#858585] font-normal !leading-[1.4] mb-2">
                  Action tag
                </p>
                <div className="flex items-center gap-1 flex-wrap lg:gap-2 mb-3 lg:mb-4">
                  {item.tags.map((itm, id) => (
                    <p
                      key={id}
                      className={`text-[#0A0D14] bg-[#F6F8FA] text-xs font-semibold !leading-[1.5] rounded-md lg:rounded-lg uppercase py-1 px-[10px]`}
                    >
                      {itm}
                    </p>
                  ))}
                  {item.value && (
                    <p className="text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase">
                      +{item.value}
                    </p>
                  )}
                </div>
                <Link
                  to="/app/predefined-install"
                  className="btn  !shadow-[0px_1px_2px_0px_rgba(90,54,191,0.48),_0px_0px_0px_1px_#6E3FF3] !border-[#7856FF] !text-[#7856FF] !text-xs !font-semibold !leading-[1.66] hover:!text-white !w-full"
                >
                  View & Install
                </Link>
              </div>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No templates found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>

      {showCustomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Create Custom Template</h3>

            {/* Template Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Template Name *</label>
              <input
                type="text"
                placeholder="e.g., Order Confirmation"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={customTemplate.name}
                onChange={(e) => setCustomTemplate(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            {/* Template Content */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Template Content *</label>
              <textarea
                placeholder="Enter your template content here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px] resize-none"
                value={customTemplate.content}
                onChange={(e) => setCustomTemplate(prev => ({ ...prev, content: e.target.value }))}
              />
            </div>

            {/* Action Tags */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Action Tags</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="e.g., SEND EMAIL"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                />
                <button
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
                >
                  Add
                </button>
              </div>

              {/* Display Tags */}
              {customTemplate.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {customTemplate.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F6F8FA] text-[#0A0D14] text-xs font-semibold rounded-lg py-1 px-3 flex items-center gap-2"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 justify-end pt-4 border-t">
              <button
                onClick={() => {
                  setShowCustomModal(false);
                  setCustomTemplate({ name: '', content: '', tags: [] });
                  setNewTag('');
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTemplate}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Create Template
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

// import React from "react";
// import Top from "../../layouts/Top";
// import { Link, Links } from "react-router-dom";
// import { arrow_left, plus } from "../../utilities/Classes";
// import TableFilter from "../TableFilter";

// export default function PredefinedCreate() {
//   const CardItems = [
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//     {
//       title: "Predefined Response 1",
//       tags: ["SEND EMAIL", "INTERNAL NOTE", "REPLAY TO CUSTOMER"],
//       value: "2",
//     },
//   ];
//   // handle back button
//   const handleBack = () => {
//     window.history.back();
//   };
//   return (
//     <div>
//       <Top title={" "} className="!justify-start">
//         <Link
//           to="/app/predefined"
//           // onClick={handleBack}
//           className="flex items-center gap-2.5 group"
//         >
//           <span className="size-6 md:size-8 rounded-full border border-solid border-stroke text-[#858585] transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center">
//             {arrow_left}
//           </span>
//           <span className="text-heading text-sm md:text-base lg:text-lg font-medium">
//             Create Predefined Responses
//           </span>
//         </Link>
//       </Top>
//       <div className="p-4 lg:p-5 xl:p-6">
//         <div className="mb-5 lg:mb-6 flex items-center justify-between gap-2 flex-wrap">
//           <h6 className="text-lg lg:text-xl xl:text-2xl text-[#0A0D14] font-semibold !leading-[1.5]">
//             Predefined Response Template
//           </h6>
//           <div className="flex items-center gap-2 flex-wrap">
//             <TableFilter className="!mb-0" searchClass="min-w-[220px]" />
//             <Link
//               to="/app/predefined-update"
//               className="btn gap-2 flex items-center px-4 shadow-[0px_1px_2px_0px_rgba(90,54, 91,0.48), 0px_0px_0px_1px_#6E3FF3] border-primary text-primary"
//             >
//               {plus} Custom template
//             </Link>
//           </div>
//         </div>
//         <div>
//           <p className="text-[#858585] text-xs !leading-[1.5] text-center mb-2 lg:mb-3">
//             Choose a template and customize it to fit your needs{" "}
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
//             {CardItems.map((item, idx) => (
//               <div
//                 className="border border-[#E2E4E9] rounded-lg lg:rounded-xl  p-3 lg:p-4 cursor-pointer"
//                 key={idx}
//               >
//                 <p className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.5] mb-3 lg:mb-4">
//                   {item.title}
//                 </p>
//                 <p className="text-xs text-[#858585] font-normal !leading-[1.4] mb-2">
//                   Action tag
//                 </p>
//                 <div className="flex items-center gap-1 flex-wrap lg:gap-2 mb-3 lg:mb-4">
//                   {item.tags.map((itm, id) => (
//                     <p
//                       key={id}
//                       className={`text-[#0A0D14] bg-[#F6F8FA] text-xs font-semibold !leading-[1.5] rounded-md lg:rounded-lg uppercase py-1 px-[10px]`}
//                     >
//                       {itm}
//                     </p>
//                   ))}
//                   {item.value && (
//                     <p className="text-[#0A0D14] text-xs font-semibold !leading-[1.5] uppercase">
//                       +{item.value}
//                     </p>
//                   )}
//                 </div>
//                 <Link
//                   to="/app/predefined-install"
//                   className="btn  !shadow-[0px_1px_2px_0px_rgba(90,54,191,0.48),_0px_0px_0px_1px_#6E3FF3] !border-[#7856FF] !text-[#7856FF] !text-xs !font-semibold !leading-[1.66] hover:!text-white !w-full"
//                 >
//                   View
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
