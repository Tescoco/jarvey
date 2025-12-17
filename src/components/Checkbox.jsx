import React from "react";

export default function Checkbox({
  className = "",
  type = "checkbox",
  name,
  id, // Remove default value
  title,
  titleClass = "",
  checked,
  onChange,
}) {
  // Generate unique ID if not provided
  const uniqueId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <label
        htmlFor={uniqueId}
        className={`custom-checkbox flex items-center gap-1 w-max cursor-pointer select-none ${className}`}
      >
        <input
          type={type}
          className="hidden peer"
          id={uniqueId}
          checked={checked}
          name={name || uniqueId}
          onChange={handleChange}
        />
        <span
          className={`size-5 flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary ${type === "checkbox" ? "rounded-md" : "rounded-full"
            } border-[1.5px] border-solid flex-none border-gray`}
        >
          <svg
            className="hidden"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3327 0.75L4.37435 6.70833L1.66602 4"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {title && (
          <span
            className={`font-inter font-medium text-sm text-heading/70 peer-checked:text-heading ${titleClass}`}
          >
            {title || "Title"}
          </span>
        )}
      </label>
      <style jsx={"true"}>{`
        .custom-checkbox input:checked ~ span .hidden {
          display: block;
        }
      `}</style>
    </>
  );
}

// import React from "react";

// export default function Checkbox({
//   className = "",
//   type = "checkbox",
//   name,
//   id = "checkbox",
//   title,
//   titleClass = "",
//   checked,
//   onChange,
// }) {
//   const handleChange = (e) => {
//     if (onChange) {
//       onChange(e);
//     }
//   };

//   return (
//     <>
//       <label
//         htmlFor={id}
//         className={`custom-checkbox flex items-center gap-1 w-max cursor-pointer select-none ${className}`}
//       >
//         <input
//           type={type}
//           className="hidden peer"
//           id={id}
//           checked={checked}
//           name={name || id}
//           onChange={handleChange}
//         />
//         <span
//           className={`size-5 flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary ${
//             type === "checkbox" ? "rounded-md" : "rounded-full"
//           } border-[1.5px] border-solid flex-none border-gray`}
//         >
//           <svg
//             className="hidden"
//             width="12"
//             height="8"
//             viewBox="0 0 12 8"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10.3327 0.75L4.37435 6.70833L1.66602 4"
//               stroke="white"
//               strokeWidth="1.4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </span>
//         {title && (
//           <span
//             className={`font-inter font-medium text-sm text-heading/70 peer-checked:text-heading ${titleClass}`}
//           >
//             {title || "Title"}
//           </span>
//         )}
//       </label>
//       <style jsx={"true"}>{`
//         .custom-checkbox input:checked ~ span .hidden {
//           display: block;
//         }
//       `}</style>
//     </>
//   );
// }
