import React, { useState, useEffect } from "react";

export default function Input({
  onClick,
  className = "mb-4 md:mb-5 ",
  name = "",
  type = "text",
  label,
  value,
  placeholder,
  required,
  info,
  inputClass = "",
  rightIcon,
  rightIconClass,
  leftIcon,
  leftIconClass = "",
  des,
  desClass = "",
  onChange,
}) {
  const [newType, setNewType] = useState(type);
  const [newValue, setNewValue] = useState(value || "");

  // Update internal state when value prop changes
  useEffect(() => {
    setNewValue(value || "");
  }, [value]);

  const handleChange = () => {
    setNewType((pre) => (pre === "password" ? "text" : "password"));
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNewValue(inputValue);

    // Call parent's onChange if provided
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${className}`}>
      {label && (
        <label
          htmlFor=""
          className={` mb-1 font-inter font-semibold text-sm !leading-normal text-heading ${
            info ? "inline-flex items-center gap-2" : "block"
          }`}
        >
          {label} {required && <span className="text-[#FE4234]">*</span>}
          {info && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12219_80207)">
                <path
                  d="M8.00065 14.6693C11.6825 14.6693 14.6673 11.6845 14.6673 8.0026C14.6673 4.32071 11.6825 1.33594 8.00065 1.33594C4.31875 1.33594 1.33398 4.32071 1.33398 8.0026C1.33398 11.6845 4.31875 14.6693 8.00065 14.6693Z"
                  stroke="#858585"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 10.6693V8.0026M8 5.33594H8.00667"
                  stroke="#858585"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_12219_80207">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span
            className={`absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none ${leftIconClass}`}
          >
            {leftIcon}
          </span>
        )}
        {type === "textarea" ? (
          <textarea
            placeholder={placeholder}
            className={`min-h-14 md:min-h-18 h-full p-3 ${
              leftIcon ? "pl-9" : ""
            } w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px] font-inter font-normal text-sm text-[#111111]/80 placeholder:text-[#111111]/50 ${inputClass}`}
            name={name}
            id=""
            value={newValue}
            onChange={handleInputChange}
          />
        ) : (
          <input
            type={newType}
            value={newValue}
            onClick={onClick}
            name={name}
            onChange={handleInputChange}
            placeholder={placeholder || "Type here"}
            className={`h-11 md:h-12 px-3 ${
              leftIcon ? "pl-9" : ""
            } w-full bg-white border border-solid border-stroke focus:border-primary/50 shadow-[0px_1px_2px_0px_rgba(228,229,231,0.24)] rounded-[10px] font-inter font-normal text-sm text-[#111111]/80 placeholder:text-[#111111]/50 ${inputClass}`}
            required={required}
          />
        )}
        {type === "password" && (
          <button
            onClick={() => handleChange()}
            className={`absolute top-1/2 -translate-y-1/2 right-3`}
          >
            a
          </button>
        )}
        {rightIcon && (
          <span
            className={`absolute top-1/2 -translate-y-1/2 right-3 pointer-events-none ${rightIconClass}`}
          >
            {rightIcon}
          </span>
        )}
      </div>
      {des && (
        <p
          className={`mt-1 text-xs text-gray font-medium !leading-[1.66] ${desClass}`}
        >
          {des}
        </p>
      )}
    </div>
  );
}
