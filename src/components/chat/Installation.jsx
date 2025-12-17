import React from "react";
import { common_card } from "../../utilities/Classes";
import sofi from "../../assets/img/chat/sofi.png";


export default function Installation({ installedMethods, onInstall }) {
  const cards = [
    {
      key: "shopify",
      title: "Quick installation for Shopify",
      des: "To add Chat, click Install then Save in the new Shopify window without editing anything.",
      action: "Install",
    },
    {
      key: "checkout",
      title: "Shopify checkout and thank you pages",
      des: "To add Chat, click Install then Save in the new Shopify window without editing anything.",
      action: "Install",
    },
    {
      key: "manual",
      title: "Manual installation",
      des: "Add the chat widget to non-Shopify stores or other websites by following the instructions.",
      action: "Install",
    },
  ];

  const handleInstall = (methodKey) => {
    onInstall(methodKey);
  };

  return (
    <div>
      {/* CONNECTED STORE - keep as is */}
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center mb-4">
        {/* ... existing code ... */}
      </div>

      <p className="mb-3 font-semibold text-sm">Installation method</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`${common_card} p-4 min-h-[200px] flex flex-col justify-between`}
          >
            <div>
              <h4 className="text-base font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.des}</p>
            </div>

            <button
              onClick={() => handleInstall(item.key)}
              disabled={installedMethods[item.key]}
              className={`btn ${installedMethods[item.key]
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-primary text-white"
                }`}
            >
              {installedMethods[item.key] ? "Installed" : item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function Installation({ isInstalled, onInstall }) {
//   const cards = [
//     {
//       title: "Quick installation for Shopify",
//       des:
//         "To add Chat, click Install then Save in the new Shopify window without editing anything.",
//       action: "Install",
//     },
//     {
//       title: "Shopify checkout and thank you pages",
//       des:
//         "To add Chat, click Install then Save in the new Shopify window without editing anything.",
//       action: "Install",
//     },
//     {
//       title: "Manual installation",
//       des:
//         "Add the chat widget to non-Shopify stores or other websites by following the instructions.",
//       action: "Install",
//     },
//   ];

//   const handleInstall = () => {
//     // simulate successful install
//     onInstall();
//   };

//   return (
//     <div>
//       {/* CONNECTED STORE */}
//       <div className="flex flex-col md:flex-row gap-3 justify-between items-center mb-4">
//         <div>
//           <h4 className="text-lg font-semibold mb-1">Connect store</h4>
//           <p className="text-xs text-gray-500">
//             A store connection is required to use Automate features.
//           </p>
//         </div>

//         <div className={`${common_card} flex items-center justify-between w-full max-w-[391px]`}>
//           <div className="flex items-center gap-3">
//             <img src={sofi} alt="Shopify" />
//             <p className="text-xs font-medium">quickstart-b234543</p>
//           </div>
//           <div className="flex gap-3">
//             <button className="text-primary text-xs font-semibold">
//               Change
//             </button>
//             <button className="text-red-500 text-xs font-semibold">
//               Disconnect
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* INSTALLATION METHODS */}
//       <p className="mb-3 font-semibold text-sm">Installation method</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cards.map((item, index) => (
//           <div
//             key={index}
//             className={`${common_card} p-4 min-h-[200px] flex flex-col justify-between`}
//           >
//             <div>
//               <h4 className="text-base font-semibold mb-2">
//                 {item.title}
//               </h4>
//               <p className="text-sm text-gray-600">{item.des}</p>
//             </div>

//             <button
//               onClick={handleInstall}
//               disabled={isInstalled}
//               className={`btn ${isInstalled
//                   ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                   : "bg-primary text-white"
//                 }`}
//             >
//               {isInstalled ? "Installed" : item.action}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
