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
            />
            <Link
              to="/app/predefined-update"
              className="btn gap-2 flex items-center px-4 shadow-[0px_1px_2px_0px_rgba(90,54, 91,0.48), 0px_0px_0px_1px_#6E3FF3] border-primary text-primary"
            >
              {plus} Custom template
            </Link>
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
