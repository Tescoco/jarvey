# Global Dismiss System

This document describes the global dismiss system implemented to automatically close non-essential pop-ups, dropdowns, and modals when clicking anywhere outside them or pressing the ESC key.

## Overview

The global dismiss system provides a consistent way to handle dismissible UI elements across the entire application. It automatically closes dropdowns, modals, and other pop-ups when users click outside them or press the Escape key.

## Components

### 1. GlobalDismissContext (`src/contexts/GlobalDismissContext.jsx`)

The core context that manages all dismissible elements in the application.

**Features:**

- Registers/unregisters dismissible elements
- Handles global click and escape key events
- Supports priority-based dismissal order
- Allows marking elements as "essential" (non-dismissible)
- Supports exclude selectors to prevent dismissal on certain clicks

### 2. Custom Hooks (`src/hooks/useDismissible.js`)

Provides easy-to-use hooks for integrating components with the global dismiss system.

**Available Hooks:**

- `useDismissible()` - General purpose dismissible hook
- `useDismissibleDropdown()` - Specialized for dropdown components
- `useDismissibleModal()` - Specialized for modal components

### 3. Enhanced Components

**Updated Components:**

- `Modal.jsx` - Now supports global dismiss with `essential` prop
- `Dropdown.jsx` - Automatically dismissible on outside clicks
- `DismissiblePortal.jsx` - New wrapper for portal-based modals

## Usage

### Setting Up (Already Done)

The system is already integrated into the application via `App.jsx`:

```jsx
import { GlobalDismissProvider } from "./contexts/GlobalDismissContext";

return (
  <AvailabilityProvider>
    <GlobalDismissProvider>
      <RouterProvider router={router} />
    </GlobalDismissProvider>
  </AvailabilityProvider>
);
```

### Using with Existing Components

#### Modal Component

```jsx
// Regular modal (dismissible)
<Modal
  closeOnClick={() => setShowModal(false)}
  onClick={() => setShowModal(false)}
>
  Modal content
</Modal>

// Essential modal (not dismissible)
<Modal
  essential={true}
  closeOnClick={() => setShowModal(false)}
  onClick={() => setShowModal(false)}
>
  Important modal content
</Modal>
```

#### Dropdown Component

Dropdowns are automatically dismissible - no changes needed:

```jsx
<Dropdown
  items={dropdownItems}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

#### Custom Dismissible Component

```jsx
import { useDismissible } from "../hooks/useDismissible";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Register for global dismiss
  useDismissible(isOpen, () => setIsOpen(false), {
    priority: 1, // Higher priority = dismissed first
    essential: false, // Can be auto-dismissed
    excludeSelectors: [".my-trigger-button"], // Don't dismiss when clicking these
  });

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};
```

#### Portal-based Modal

```jsx
import DismissiblePortal from "../components/DismissiblePortal";

const MyPortalModal = ({ isOpen, onClose }) => {
  return (
    <DismissiblePortal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded p-4">Modal content</div>
    </DismissiblePortal>
  );
};
```

## Configuration Options

### useDismissible Options

```jsx
useDismissible(isOpen, onDismiss, {
  priority: 0, // Dismissal priority (higher = dismissed first)
  essential: false, // Whether element is essential (won't auto-dismiss)
  excludeSelectors: [], // CSS selectors to exclude from triggering dismissal
});
```

### Modal Props

```jsx
<Modal
  essential={false} // Whether modal is essential (won't auto-dismiss)
  isOpen={true} // Whether modal is currently open
  closeOnClick={fn} // Function to call when overlay is clicked
  onClick={fn} // Function to call when close button is clicked
  // ... other existing props
/>
```

### DismissiblePortal Props

```jsx
<DismissiblePortal
  isOpen={boolean}              // Whether portal is open
  onClose={function}            // Function to close portal
  essential={false}             // Whether portal is essential
  preventOverlayClick={false}   // Prevent closing on overlay click
  overlayClassName={string}     // Custom overlay styling
  container={element}           // Portal container (default: document.body)
>
  {children}
</DismissiblePortal>
```

## Behavior

### What Gets Dismissed

- Dropdowns when clicking outside or pressing ESC
- Regular modals when clicking outside or pressing ESC
- Portal-based modals when clicking outside or pressing ESC
- Custom components using the dismissible hooks

### What Doesn't Get Dismissed

- Essential modals (marked with `essential={true}`)
- Elements when clicking on form inputs, buttons, or interactive elements
- Elements when clicking on excluded selectors
- Elements with `data-no-dismiss` attribute

### Dismissal Order

Elements are dismissed in priority order (highest priority first):

1. Dropdowns (priority: 1)
2. Regular modals (priority: 0)
3. Custom elements (priority: as specified)

## Preventing Dismissal

### Method 1: Mark as Essential

```jsx
<Modal essential={true}>...</Modal>;
// or
useDismissible(isOpen, onClose, { essential: true });
```

### Method 2: Use data-no-dismiss Attribute

```jsx
<div data-no-dismiss>
  <button>This won't trigger dismissal</button>
</div>
```

### Method 3: Exclude Selectors

```jsx
useDismissible(isOpen, onClose, {
  excludeSelectors: [".my-button", "#my-element"],
});
```

## Testing

Use the `DismissExample` component (`src/components/DismissExample.jsx`) to test the functionality:

```jsx
import DismissExample from "../components/DismissExample";

// Add to any page to test
<DismissExample />;
```

## Migration Guide

### For Existing Modals

1. Add `essential={true}` prop if the modal should not be auto-dismissed
2. Ensure `closeOnClick` or `onClick` handlers are properly set

### For Existing Dropdowns

No changes needed - they're automatically enhanced.

### For Custom Components

1. Import the appropriate hook: `useDismissible`, `useDismissibleDropdown`, or `useDismissibleModal`
2. Call the hook with your open state and close function
3. Add `data-dropdown-content` or `data-modal-content` attributes to prevent dismissal when clicking content

## Browser Support

Works in all modern browsers that support:

- React 16.8+ (Hooks)
- Event listeners
- DOM traversal methods (`closest`)

## Performance

The system is designed to be lightweight:

- Uses event delegation with a single global listener
- Efficient Set-based element tracking
- Minimal overhead when no dismissible elements are active
