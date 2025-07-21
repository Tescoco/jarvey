import React from 'react';

const CircularProgress = ({ completed, total, className }) => {
    const percentage = (completed / total) * 100;
    const strokeDasharray = 100;
    const strokeDashoffset = 100 - percentage;

    return (
        <div className={`relative size-[114px] flex-[0_0_auto] ${className}`}>
            <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 36 36">
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    stroke="#eee"
                    strokeWidth="3"
                    fill="none"
                />
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    stroke="#7856FF"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0  flex items-center justify-center text-sm font-semibold text-heading">
                {`${completed}/${total}`}
            </div>
        </div>
    );
};

export default CircularProgress;
