import React, { useState } from "react";
import Dropdown from "./Dropdown";

const StoreDropdown = ({
  includeAllStores = true,
  className = "",
  onChange = () => {},
}) => {
  const [selectedStore, setSelectedStore] = useState("");

  const storeOptions = [
    ...(includeAllStores ? [{ name: "All stores" }] : []),
    { name: "Store 1" },
    { name: "Store 2" },
    { name: "Store 3" },
    { name: "Store 4" },
    { name: "Store 5" },
  ];

  const handleStoreChange = (value) => {
    setSelectedStore(value);
    onChange(value);
  };

  return (
    <Dropdown
      className={`${className}`}
      placeholder={includeAllStores ? "All stores" : "Select store"}
      isArrow={true}
      items={storeOptions}
      value={selectedStore}
      onChange={handleStoreChange}
    />
  );
};

export default StoreDropdown;
