import React, { useEffect, useRef, useState } from "react";

export default function Right({ heightMinus, className, chatConfig, chatTab }) {
  const message = [
    {
      from: [
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      ],
      to: ["Amet minim mollit non."],
      date: "February 6",
    },
    {
      from: [
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      ],
      to: ["Amet minim mollit non."],
      date: "February 6",
    },
    {
      from: [
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      ],
      to: ["Amet minim mollit non.", "Amet minim mollit non."],
      date: "February 6",
    },
    {
      from: [
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      ],
      to: ["Amet minim mollit non."],
      date: "February 6",
    },
    {
      from: [
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      ],
      to: ["Amet minim mollit non.", "Amet minim mollit non."],
      date: "February 6",
    },
  ];

  const scrollRef = useRef();
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [message]);

  // Use chatConfig for quick buttons, fallback to default if not provided
  const btn = chatConfig?.quickButtons || [
    "Track order",
    "Report Issue",
    "Cancel Order",
    "Product Questions",
    "Other",
  ];

  const [other, setOther] = useState(true);

  // Get dynamic values from chatConfig with fallbacks
  const chatTitle = chatConfig?.chatTitle || "Chat Title";
  const mainColor = chatConfig?.mainColor || "#7856FF";
  const launcherLabel = chatConfig?.launcherLabel || "Chat with us";
  const font = chatConfig?.font || "Inter";
  const showBotLabel = chatConfig?.showBotLabel || false;
  const backgroundStyle = chatConfig?.backgroundStyle || "Gradient";

  // Get welcome message based on business hours
  const welcomeMessage =
    chatTab === "During Business hours"
      ? chatConfig?.welcomeMessageDuringHours ||
        "We will replay in a few moments."
      : chatConfig?.welcomeMessageOutsideHours ||
        "We are currently offline. Leave us a message and we'll get back to you.";

  // Dynamic styles based on configuration
  const headerStyle = {
    background: chatTab === "During Business hours" ? "#0A0D14" : "#6B7280",
    fontFamily: font,
  };

  const messageStyle = {
    background:
      backgroundStyle === "Gradient"
        ? `linear-gradient(135deg, ${mainColor} 0%, ${mainColor}CC 100%)`
        : mainColor,
    fontFamily: font,
  };

  const buttonHoverStyle = {
    "--hover-color": mainColor,
    fontFamily: font,
  };

  const containerStyle = {
    fontFamily: font,
  };

  return (
    <div
      className={`${className} rounded-2xl bg-[#F7F7F7] overflow-hidden flex flex-col h-auto`}
      style={containerStyle}
    >
      <div className="header p-4" style={headerStyle}>
        <h4 className="text-lg mb-1 text-white font-semibold !leading-[150%]">
          {chatTitle}
          {showBotLabel && <span className="ml-2 text-xs opacity-70">Bot</span>}
        </h4>
        <p className="text-xs text-white text-opacity-70 !leading-[150%]">
          {welcomeMessage}
        </p>
      </div>
      <div
        className="chat p-4 py-0 flex flex-col gap-4 overflow-y-auto"
        style={{ maxHeight: heightMinus ? heightMinus : 515, fontFamily: font }}
        ref={scrollRef}
      >
        {message.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            {item.date && (
              <p className="text-center" style={{ fontFamily: font }}>
                {item.date}
              </p>
            )}
            {item.from && (
              <div className="flex flex-col gap-4">
                {item.from.map((item, index) => (
                  <p
                    key={index}
                    className="ml-auto text-white text-sm !leading-[140%] font-normal max-w-[289px] p-3 rounded-xl rounded-br-none bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0)]"
                    style={messageStyle}
                  >
                    {item}{" "}
                  </p>
                ))}
              </div>
            )}
            {item.to && (
              <div className="flex flex-col gap-4">
                {item.to.map((item, index) => (
                  <p
                    key={index}
                    className="text-[#0A0D14] text-sm !leading-[140%] font-normal max-w-[289px] px-3 py-2.5 rounded-xl rounded-bl-none bg-white"
                    style={{ fontFamily: font }}
                  >
                    {item}{" "}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 mt-auto" style={{ fontFamily: font }}>
        {other === true ? (
          <div className="flex items-center gap-3">
            <button
              className="size-[50px] flex-none text-[#111111] hover:text-white text-opacity-100 rounded-xl flex items-center justify-center bg-white transition-colors"
              style={buttonHoverStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = mainColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0002 3.33398V10.0007M10.0002 10.0007V16.6673M10.0002 10.0007H3.3335M10.0002 10.0007H16.6668"
                  stroke="currentColor"
                  strokeOpacity="0.7"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="relative z-[1] w-full">
              <input
                type="text"
                className="h-[50px] pr-8 w-full text-gray placeholder:text-gray bg-white rounded-xl p-3"
                placeholder={`Type a message to ${chatTitle.toLowerCase()}`}
              />
              <button
                onClick={() => setOther(!other)}
                className="absolute p-3 top-1/2 -translate-y-1/2 right-0 hover:scale-110 transition-all"
                style={{ color: mainColor }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33313 8L2.93046 4.37533C2.81513 3.338 3.88313 2.576 4.82646 3.02333L12.7891 6.79533C13.8058 7.27666 13.8058 8.72333 12.7891 9.20466L4.82646 12.9773C3.88313 13.424 2.81513 12.6627 2.93046 11.6253L3.33313 8ZM3.33313 8H7.9998"
                    stroke="currentColor"
                    strokeWidth="1.24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="ml-0 w-[133px]">
            <div className="flex flex-col gap-2 items-start">
              {btn.map((item, index) => (
                <button
                  className="btn !min-w-[unset] !px-3 !text-xs !h-[31px] transition-colors hover:text-white"
                  key={index}
                  style={{
                    borderColor: mainColor,
                    color: mainColor,
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = mainColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
