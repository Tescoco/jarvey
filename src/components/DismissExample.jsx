import React, { useState } from "react";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import DismissiblePortal from "./DismissiblePortal";

/**
 * Example component demonstrating the global dismiss functionality
 * This component can be added to any page to test the dismiss behavior
 */
export const DismissExample = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEssentialModal, setShowEssentialModal] = useState(false);
  const [showPortalModal, setShowPortalModal] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const dropdownItems = [
    { name: "Option 1" },
    { name: "Option 2" },
    { name: "Option 3" },
    { name: "Option 4" },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Global Dismiss Demo</h2>
      <p className="mb-6 text-gray-600">
        Click anywhere outside the modals/dropdowns to dismiss them
        automatically. Press ESC key to dismiss them as well.
      </p>

      <div className="space-y-4">
        {/* Regular Modal */}
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="btn bg-blue-500 text-white px-4 py-2 rounded"
          >
            Open Regular Modal (Dismissible)
          </button>
        </div>

        {/* Essential Modal */}
        <div>
          <button
            onClick={() => setShowEssentialModal(true)}
            className="btn bg-red-500 text-white px-4 py-2 rounded"
          >
            Open Essential Modal (Not Auto-Dismissible)
          </button>
        </div>

        {/* Portal Modal */}
        <div>
          <button
            onClick={() => setShowPortalModal(true)}
            className="btn bg-green-500 text-white px-4 py-2 rounded"
          >
            Open Portal Modal (Dismissible)
          </button>
        </div>

        {/* Dropdown */}
        <div>
          <Dropdown
            label="Test Dropdown (Auto-dismissible)"
            placeholder="Select an option"
            items={dropdownItems}
            value={dropdownValue}
            onChange={setDropdownValue}
          />
        </div>
      </div>

      {/* Regular Modal */}
      {showModal && (
        <Modal
          closeOnClick={() => setShowModal(false)}
          onClick={() => setShowModal(false)}
        >
          <h3 className="text-lg font-semibold mb-4">Regular Modal</h3>
          <p className="mb-4">This modal can be dismissed by:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Clicking outside the modal</li>
            <li>Pressing the ESC key</li>
            <li>Clicking the X button</li>
          </ul>
          <button
            onClick={() => setShowModal(false)}
            className="btn bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </Modal>
      )}

      {/* Essential Modal */}
      {showEssentialModal && (
        <Modal
          essential={true}
          closeOnClick={() => setShowEssentialModal(false)}
          onClick={() => setShowEssentialModal(false)}
        >
          <h3 className="text-lg font-semibold mb-4">Essential Modal</h3>
          <p className="mb-4">
            This modal is marked as essential and will NOT be auto-dismissed by:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Clicking outside the modal</li>
            <li>Pressing the ESC key</li>
          </ul>
          <p className="mb-4">
            You must explicitly close it with the button or X.
          </p>
          <button
            onClick={() => setShowEssentialModal(false)}
            className="btn bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </Modal>
      )}

      {/* Portal Modal */}
      <DismissiblePortal
        isOpen={showPortalModal}
        onClose={() => setShowPortalModal(false)}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-[400px] w-full flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Portal Modal</h3>
          <p className="mb-4">
            This is a portal-based modal that can be dismissed by:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
            <li>Clicking outside the modal</li>
            <li>Pressing the ESC key</li>
          </ul>
          <button
            onClick={() => setShowPortalModal(false)}
            className="btn bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </DismissiblePortal>
    </div>
  );
};

export default DismissExample;
