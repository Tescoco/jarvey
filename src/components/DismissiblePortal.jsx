import React from "react";
import ReactDOM from "react-dom";
import { useDismissibleModal } from "../hooks/useDismissible";

/**
 * A wrapper component for portal-based modals that integrates with global dismiss system
 * @param {React.ReactNode} children - The modal content
 * @param {boolean} isOpen - Whether the modal is open
 * @param {Function} onClose - Function to close the modal
 * @param {boolean} essential - Whether this is an essential modal that shouldn't be auto-dismissed
 * @param {string} overlayClassName - Custom class for overlay
 * @param {boolean} preventOverlayClick - Prevent closing on overlay click
 * @param {Element} container - Container to render portal in (defaults to document.body)
 */
export const DismissiblePortal = ({
  children,
  isOpen,
  onClose,
  essential = false,
  overlayClassName = "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
  preventOverlayClick = false,
  container = document.body,
}) => {
  // Register modal for global dismiss
  useDismissibleModal(isOpen, onClose, essential);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (preventOverlayClick) return;
    // Only close if clicking the overlay, not the modal content
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return ReactDOM.createPortal(
    <div className={overlayClassName} onClick={handleOverlayClick}>
      <div data-modal-content>{children}</div>
    </div>,
    container
  );
};

export default DismissiblePortal;
