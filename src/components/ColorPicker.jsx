import React, { useState, useEffect } from "react";

const ColorPicker = ({
  label,
  value = "#000000",
  onChange,
  className = "",
  required = false,
}) => {
  const [hexValue, setHexValue] = useState(value);
  const [isValidHex, setIsValidHex] = useState(true);

  // Utility function to convert RGB to Hex
  const rgbToHex = (rgb) => {
    if (!rgb || typeof rgb !== "string") return rgb;

    // Check if it's already hex
    if (rgb.startsWith("#")) return rgb;

    // Extract RGB values from rgb() or rgba() format
    const rgbMatch = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1]);
      const g = parseInt(rgbMatch[2]);
      const b = parseInt(rgbMatch[3]);

      // Convert to hex
      const toHex = (n) => {
        const hex = n.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };

      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    return rgb;
  };

  // Validate hex color format
  const isValidHexColor = (hex) => {
    if (!hex) return false;
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(hex);
  };

  // Normalize hex color (convert 3-digit to 6-digit)
  const normalizeHex = (hex) => {
    if (!hex) return "#000000";

    // Remove # if present
    let cleanHex = hex.replace("#", "");

    // Convert 3-digit to 6-digit
    if (cleanHex.length === 3) {
      cleanHex = cleanHex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    return `#${cleanHex}`;
  };

  // Update internal state when value prop changes
  useEffect(() => {
    const convertedValue = rgbToHex(value);
    const normalizedValue = normalizeHex(convertedValue);
    setHexValue(normalizedValue);
    setIsValidHex(isValidHexColor(normalizedValue));
  }, [value]);

  // Handle native color picker change
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setHexValue(newColor);
    setIsValidHex(true);
    if (onChange) {
      onChange(newColor);
    }
  };

  // Handle manual hex input change
  const handleHexInputChange = (e) => {
    let inputValue = e.target.value;

    // Ensure it starts with #
    if (inputValue && !inputValue.startsWith("#")) {
      inputValue = "#" + inputValue;
    }

    setHexValue(inputValue);

    const isValid = isValidHexColor(inputValue);
    setIsValidHex(isValid);

    if (isValid && onChange) {
      const normalizedValue = normalizeHex(inputValue);
      onChange(normalizedValue);
    }
  };

  // Handle hex input blur (normalize and validate)
  const handleHexInputBlur = () => {
    if (isValidHex && hexValue) {
      const normalizedValue = normalizeHex(hexValue);
      setHexValue(normalizedValue);
      if (onChange) {
        onChange(normalizedValue);
      }
    } else if (!isValidHex) {
      // Reset to previous valid value if invalid
      const fallbackValue = normalizeHex(value);
      setHexValue(fallbackValue);
      setIsValidHex(true);
    }
  };

  return (
    <div className={`${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="flex items-center gap-3">
        {/* Native Color Picker */}
        <div className="relative">
          <input
            type="color"
            value={hexValue}
            onChange={handleColorChange}
            className="w-12 h-12 border border-gray-300 rounded-lg cursor-pointer bg-white"
            title="Select color"
          />
          {/* Color preview overlay to match the design */}
          <div
            className="absolute inset-1 rounded-md pointer-events-none"
            style={{ backgroundColor: hexValue }}
          />
        </div>

        {/* Hex Input Field */}
        <div className="flex-1">
          <input
            type="text"
            value={hexValue}
            onChange={handleHexInputChange}
            onBlur={handleHexInputBlur}
            placeholder="#000000"
            className={`
              w-full px-3 py-3 border rounded-lg text-sm font-mono
              ${
                isValidHex
                  ? "border-gray-300 focus:border-blue-500"
                  : "border-red-300 focus:border-red-500"
              }
              focus:outline-none focus:ring-1 
              ${isValidHex ? "focus:ring-blue-500" : "focus:ring-red-500"}
            `}
            title="Enter hex color (e.g., #FF0000 or #F00)"
          />
          {!isValidHex && (
            <p className="mt-1 text-xs text-red-600">
              Please enter a valid hex color (e.g., #FF0000 or #F00)
            </p>
          )}
        </div>
      </div>

      {/* Color preview bar */}
      <div className="mt-2 h-2 rounded-full border border-gray-200 overflow-hidden">
        <div
          className="h-full transition-colors duration-200"
          style={{ backgroundColor: isValidHex ? hexValue : "#cccccc" }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
