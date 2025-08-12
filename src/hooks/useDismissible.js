import { useEffect, useRef } from "react";
import { useGlobalDismiss } from "../contexts/GlobalDismissContext";

/**
 * Hook to make a component dismissible on global clicks
 * @param {boolean} isOpen - Whether the element is currently open/visible
 * @param {Function} onDismiss - Function to call when dismissing
 * @param {Object} options - Configuration options
 * @param {number} options.priority - Priority for dismissal order (higher = dismissed first)
 * @param {boolean} options.essential - Whether this is an essential element that shouldn't be auto-dismissed
 * @param {string[]} options.excludeSelectors - CSS selectors that should not trigger dismissal
 * @param {boolean} options.escapeKey - Whether to dismiss on Escape key (default: true)
 * @returns {Function} - Cleanup function
 */
export const useDismissible = (isOpen, onDismiss, options = {}) => {
  const { registerDismissible, unregisterDismissible } = useGlobalDismiss();
  const elementIdRef = useRef(null);

  useEffect(() => {
    if (isOpen && onDismiss) {
      // Generate unique ID for this dismissible element
      const elementId = `dismissible-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
      elementIdRef.current = elementId;

      // Register with global dismiss system
      const cleanup = registerDismissible(elementId, onDismiss, {
        priority: options.priority || 0,
        essential: options.essential || false,
        excludeSelectors: options.excludeSelectors || [],
      });

      return cleanup;
    } else if (elementIdRef.current) {
      // Unregister if closed or no dismiss function
      unregisterDismissible(elementIdRef.current);
      elementIdRef.current = null;
    }
  }, [
    isOpen,
    onDismiss,
    options.priority,
    options.essential,
    registerDismissible,
    unregisterDismissible,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (elementIdRef.current) {
        unregisterDismissible(elementIdRef.current);
      }
    };
  }, [unregisterDismissible]);
};

/**
 * Hook specifically for dropdown components
 * @param {boolean} isOpen - Whether the dropdown is open
 * @param {Function} onClose - Function to close the dropdown
 * @param {HTMLElement} triggerRef - Ref to the trigger element
 * @returns {Function} - Cleanup function
 */
export const useDismissibleDropdown = (isOpen, onClose, triggerRef) => {
  const excludeSelectors = [];

  // Add trigger element to exclude selectors if provided
  if (triggerRef?.current) {
    // Create a unique selector for this trigger
    const triggerElement = triggerRef.current;
    if (triggerElement.id) {
      excludeSelectors.push(`#${triggerElement.id}`);
    } else {
      // Add a temporary ID for selection
      const tempId = `dropdown-trigger-${Date.now()}`;
      triggerElement.id = tempId;
      excludeSelectors.push(`#${tempId}`);
    }
  }

  // Always exclude the dropdown content itself
  excludeSelectors.push("[data-dropdown-content]", ".dropdown-content");

  return useDismissible(isOpen, onClose, {
    priority: 1, // Dropdowns should be dismissed before modals
    excludeSelectors,
  });
};

/**
 * Hook specifically for modal components
 * @param {boolean} isOpen - Whether the modal is open
 * @param {Function} onClose - Function to close the modal
 * @param {boolean} essential - Whether this is an essential modal that shouldn't be auto-dismissed
 * @returns {Function} - Cleanup function
 */
export const useDismissibleModal = (isOpen, onClose, essential = false) => {
  return useDismissible(isOpen, onClose, {
    priority: 0, // Modals have lower priority than dropdowns
    essential,
    excludeSelectors: [
      "[data-modal-content]",
      ".modal-content",
      ".modal-dialog",
      '[role="dialog"]',
      '[aria-modal="true"]',
    ],
  });
};
