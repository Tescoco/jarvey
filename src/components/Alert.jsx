import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';


export default function Alert({ className = "", text, variant, dots = false, plus = false }) {
  const textStyle = {
    background: "linear-gradient(114deg, #FF6B5F 49.41%, #FFC563 110.43%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const bg = {
    background: "linear-gradient(91deg, rgba(254, 67, 51, 0.08) 45.55%, rgba(255, 197, 99, 0.08) 95.44%)",
  };

  return (
    <span
      className={`capitalize inline-flex items-center justify-center gap-2 min-h-7 px-2 rounded-md text-xs !leading-none font-medium font-inter ${!variant ? 'bg-[#F7F7F7] text-[#858585]' : ''} ${variant === "primary" ? 'text-primary bg-primary/[8%]' : ''} ${variant === "warning" ? 'text-[#FFB73D] bg-[#FFC563]/10' : ''} ${variant === "danger" ? 'text-[#FF5656] bg-[#FF5656]/[8%]' : ''} ${variant === "info" ? 'text-[#00ABC6] bg-[#56E8FF]/[8%]' : ''} ${variant === "success" ? 'text-green bg-[#176448]/10' : ''} ${className}`}
      style={variant === "gradient" ? bg : {}}
    >
      {dots &&
        <span style={variant === "gradient" ? bg : {}} className={`size-2 flex-none block rounded-full ${!variant ? 'bg-[#F7F7F7]' : ''} ${variant === "primary" ? 'bg-primary' : ''} ${variant === "warning" ? 'bg-[#FFC563]' : ''} ${variant === "danger" ? 'bg-[#FF5656]' : ''} ${variant === "info" ? 'bg-[#56E8FF]' : ''} ${variant === "success" ? 'bg-[#176448]' : ''}`} />
      }
      {plus &&
        <span className='text-[8px] -mr-1'>
          {plus && variant === 'danger' ?
            <FaMinus />
            :
            <FaPlus />
          }
        </span>
      }
      <span style={variant === "gradient" ? textStyle : {}}>
        {text || "Alert"}
      </span>
    </span>
  );
}
