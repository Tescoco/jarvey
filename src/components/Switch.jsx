import React, { useEffect, useState } from "react";

export default function Switch({
  title,
  className = "",
  id = "switch",
  checked,
  name,
  onChange,
}) {
  const [newChecked, setNewChecked] = useState(checked || false);

  useEffect(() => {
    setNewChecked(checked || false);
  }, [checked]);

  const handleToggle = () => {
    const newValue = !newChecked;
    setNewChecked(newValue);

    // Call parent's onChange if provided
    if (onChange) {
      // Create a synthetic event-like object
      const syntheticEvent = {
        target: {
          checked: newValue,
          name: name || "switch",
          id: id,
        },
      };
      onChange(syntheticEvent);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className={`transition-all duration-300 cursor-pointer select-none relative w-9 h-4 px-1 ${
          newChecked ? "bg-primary text-white" : "bg-[#B8B8B8] text-[#0A0D14]"
        } flex items-center uppercase text-[8px] rounded font-inter font-medium ${className}`}
      >
        <input
          onChange={handleToggle}
          type="checkbox"
          id={id}
          className="hidden"
          name={name || "switch"}
          checked={newChecked}
        />
        <span
          className={`bg-white transition-all duration-300 block size-3 rounded-[3px] absolute top-1/2 -translate-y-1/2 ${
            newChecked ? "left-[calc(100%-14px)]" : "left-[2px]"
          }`}
        />
        <span
          className={`${!newChecked ? "hidden" : "flex"} h-full items-center`}
        >
          on
        </span>
        <span
          className={`ml-auto ${
            newChecked ? "hidden" : "flex"
          } h-full items-center !leading-none`}
        >
          off
        </span>
      </label>
      {title && (
        <span className="block m-0 font-inter font-semibold text-sm">
          {title}
        </span>
      )}
    </div>
  );
}
