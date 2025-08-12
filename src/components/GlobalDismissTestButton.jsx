import React, { useState } from "react";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

/**
 * A simple test button that can be added to any page to verify global dismiss functionality
 * Just add <GlobalDismissTestButton /> to any component to test
 */
export const GlobalDismissTestButton = () => {
  const [showTestModal, setShowTestModal] = useState(false);
  const [testDropdownValue, setTestDropdownValue] = useState("");

  const testItems = [
    { name: "Test Option 1" },
    { name: "Test Option 2" },
    { name: "Test Option 3" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-2 rounded shadow-lg">
      <div className="flex flex-col gap-2 min-w-[200px]">
        <p className="text-xs font-semibold">Global Dismiss Test</p>

        <button
          onClick={() => setShowTestModal(true)}
          className="bg-white text-blue-500 px-2 py-1 rounded text-xs font-medium hover:bg-gray-100"
        >
          Open Test Modal
        </button>

        <Dropdown
          className="mb-0"
          placeholder="Test Dropdown"
          items={testItems}
          value={testDropdownValue}
          onChange={setTestDropdownValue}
          btnClass="!h-8 !text-xs"
        />

        <p className="text-xs opacity-80">Click outside to dismiss</p>
      </div>

      {showTestModal && (
        <Modal
          closeOnClick={() => setShowTestModal(false)}
          onClick={() => setShowTestModal(false)}
          innerClass="max-w-[300px]"
        >
          <h3 className="text-lg font-semibold mb-2">Test Modal</h3>
          <p className="text-sm mb-4">This modal should dismiss when you:</p>
          <ul className="text-sm list-disc list-inside mb-4 space-y-1">
            <li>Click outside the modal</li>
            <li>Press the ESC key</li>
            <li>Click the X button</li>
          </ul>
          <button
            onClick={() => setShowTestModal(false)}
            className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default GlobalDismissTestButton;

