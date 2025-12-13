import React, { useState } from "react";
import { Link } from "react-router-dom";
import Trigger from "../../components/Triggers/Trigger";
import Top from "../../layouts/Top";
import StoreDropdown from "../../components/StoreDropdown";
import { plus } from "../../utilities/Classes";

export default function Triggers() {
  // FIX 3: Added state to track selected store
  const [selectedStore, setSelectedStore] = useState('all');

  // FIX 3: Handler for store selection
  const handleStoreChange = (store) => {
    setSelectedStore(store);
  };

  return (
    <div>
      <Top>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          {/* FIX 3: Added onChange handler to StoreDropdown */}
          <StoreDropdown
            includeAllStores={true}
            className="mb-0 min-w-[120px]"
            onChange={handleStoreChange}
            value={selectedStore}
          />
          <Link
            to="/app/create-trigger"
            className="btn gap-2 shadow text-white"
          >
            {plus}
            Create Trigger
          </Link>
        </div>
      </Top>
      {/* FIX 3: Pass selectedStore prop to Trigger component */}
      <Trigger selectedStore={selectedStore} />
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import Trigger from "../../components/Triggers/Trigger";
// import Top from "../../layouts/Top";
// import StoreDropdown from "../../components/StoreDropdown";
// import { plus } from "../../utilities/Classes";

// export default function Triggers() {
//   return (
//     <div>
//       <Top>
//         <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
//           <StoreDropdown
//             includeAllStores={true}
//             className="mb-0 min-w-[120px]"
//           />
//           <Link
//             to="/app/create-trigger"
//             className="btn gap-2 shadow text-white"
//           >
//             {plus}
//             Create Trigger
//           </Link>
//         </div>
//       </Top>
//       <Trigger />
//     </div>
//   );
// }
