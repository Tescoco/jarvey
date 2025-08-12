import React, { createContext, useContext, useEffect, useRef } from "react";

const GlobalDismissContext = createContext();

export const useGlobalDismiss = () => {
  const context = useContext(GlobalDismissContext);
  if (!context) {
    throw new Error(
      "useGlobalDismiss must be used within a GlobalDismissProvider"
    );
  }
  return context;
};

export const GlobalDismissProvider = ({ children }) => {
  const dismissibleElementsRef = useRef(new Set());

  // Register a dismissible element
  const registerDismissible = (id, dismissFn, options = {}) => {
    const element = {
      id,
      dismiss: dismissFn,
      priority: options.priority || 0, // Higher priority = dismissed first
      essential: options.essential || false, // Essential elements won't be dismissed
      excludeSelectors: options.excludeSelectors || [], // CSS selectors to exclude from triggering dismiss
    };

    dismissibleElementsRef.current.add(element);

    // Return cleanup function
    return () => {
      dismissibleElementsRef.current.delete(element);
    };
  };

  // Unregister a dismissible element
  const unregisterDismissible = (id) => {
    const elementToRemove = Array.from(dismissibleElementsRef.current).find(
      (el) => el.id === id
    );
    if (elementToRemove) {
      dismissibleElementsRef.current.delete(elementToRemove);
    }
  };

  // Check if click target should be excluded
  const shouldExcludeTarget = (target, excludeSelectors) => {
    return excludeSelectors.some((selector) => {
      try {
        return target.closest(selector);
      } catch {
        return false;
      }
    });
  };

  // Dismiss all non-essential elements
  const dismissAll = (event) => {
    const target = event?.target;

    // Convert Set to Array and sort by priority (highest first)
    const sortedElements = Array.from(dismissibleElementsRef.current)
      .filter((el) => !el.essential)
      .sort((a, b) => b.priority - a.priority);

    let dismissed = false;

    for (const element of sortedElements) {
      // Skip if click target matches exclude selectors
      if (target && shouldExcludeTarget(target, element.excludeSelectors)) {
        continue;
      }

      try {
        element.dismiss();
        dismissed = true;
      } catch (error) {
        console.warn(`Failed to dismiss element ${element.id}:`, error);
      }
    }

    return dismissed;
  };

  // Global click handler
  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Don't dismiss if clicking on form inputs or interactive elements
      const target = event.target;
      const isInteractiveElement = target.closest(
        'input, textarea, select, button[type="submit"], button[type="button"], [role="button"], [contenteditable="true"], .no-dismiss'
      );

      // Don't dismiss if target has data-no-dismiss attribute
      if (target.closest("[data-no-dismiss]")) {
        return;
      }

      // Special handling for certain interactive elements
      if (isInteractiveElement) {
        const tagName = target.tagName.toLowerCase();
        // Only dismiss for certain button types or if explicitly marked as dismissible
        if (
          tagName === "button" &&
          !target.hasAttribute("data-dismiss") &&
          !target.closest("[data-dismiss]")
        ) {
          return;
        }
        // Don't dismiss when interacting with form controls
        if (["input", "textarea", "select"].includes(tagName)) {
          return;
        }
      }

      dismissAll(event);
    };

    // Add event listener to document
    document.addEventListener("click", handleGlobalClick, true);

    // Also handle escape key
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        dismissAll();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const value = {
    registerDismissible,
    unregisterDismissible,
    dismissAll,
  };

  return (
    <GlobalDismissContext.Provider value={value}>
      {children}
    </GlobalDismissContext.Provider>
  );
};
