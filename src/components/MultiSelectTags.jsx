import React, { useState } from "react";
import { X } from "lucide-react";

const MultiSelectTags = () => {
    const [tags, setTags] = useState(["ORDER STATUS", "NOT_SHIPPED"]);
    const [inputValue, setInputValue] = useState("");

    const addTag = (e) => {
        e.preventDefault();
        if (inputValue.trim() && !tags.includes(inputValue)) {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };
    const removeTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };
    return (
        <div>
            <label className="text-sm font-semibold !leading-[1.42] text-[#0A0D14] tracking-[-0.084px] mb-1">Add Tags to Predefined Response <span className="text-red-500">*</span></label>
            <div className="w-full  py-[10px] px-3 flex items-center gap-3 justify-between border border-[#E2E4E9] bg-white  rounded-md lg:rounded-[10px] shadow-[0px_1px_2px_0px_rgba(228,_229,_231,_0.24)]">
                <div className="overflow-auto scroll-bar">
                    <div className=" md:w-[555px] lg:w-full flex items-center  gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs font-semibold uppercase !leading-[1.5] !flex-none text-[#0A0D14] flex items-center gap-1 bg-[#F6F8FA]  px-2 lg:px-[10px] py-1 rounded-md lg:rounded-lg"
                            >   <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#858585" />
                                </svg>
                                {tag}
                                <button
                                    className="ml-1 text-gray-500 hover:text-gray-700"
                                    onClick={() => removeTag(tag)}
                                >
                                    <X size={14} />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTag(e)}
                    placeholder="Add tags"
                    className="bg-transparent text-xs !py-[6px] w-[98px] !px-1 font-medium !leading-[1.66] text-[rgba(17,17,17,0.50)] text-center placeholder:text-[rgba(17,17,17,0.50)] outline-none  border border-[#7856FF] rounded-md lg:rounded-lg"
                />
            </div>
        </div>
    );
};

export default MultiSelectTags;
