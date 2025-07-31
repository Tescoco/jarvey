import React, { useState, useRef, useEffect } from "react";

const RichTextEditor = ({
  value = "",
  onChange = () => {},
  placeholder = "Start typing...",
  className = "",
  minHeight = "200px",
}) => {
  const [content, setContent] = useState(value);
  const [isActive, setIsActive] = useState({});
  const editorRef = useRef(null);

  useEffect(() => {
    if (value !== content) {
      setContent(value);
      if (editorRef.current) {
        editorRef.current.innerHTML = value;
      }
    }
  }, [value]);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    updateActiveStates();
    handleContentChange();
  };

  const updateActiveStates = () => {
    const newStates = {
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      insertOrderedList: document.queryCommandState("insertOrderedList"),
      insertUnorderedList: document.queryCommandState("insertUnorderedList"),
    };
    setIsActive(newStates);
  };

  const handleContentChange = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      setContent(newContent);
      onChange(newContent);
    }
  };

  const handleKeyUp = () => {
    updateActiveStates();
    handleContentChange();
  };

  const handleMouseUp = () => {
    updateActiveStates();
  };

  const insertLink = () => {
    const url = prompt("Enter URL:");
    if (url) {
      execCommand("createLink", url);
    }
  };

  const formatBlock = (tag) => {
    execCommand("formatBlock", tag);
  };

  const toolbarButtons = [
    {
      command: "bold",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 2h4.5a2.5 2.5 0 0 1 0 5H4V2zM4 7h5.5a2.5 2.5 0 0 1 0 5H4V7z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Bold (Ctrl+B)",
    },
    {
      command: "italic",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 2h6M4 14h6M8 2l-2 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Italic (Ctrl+I)",
    },
    {
      command: "underline",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M4 2v6a4 4 0 0 0 8 0V2M2 14h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Underline (Ctrl+U)",
    },
    {
      command: "insertUnorderedList",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="2" cy="4" r="1" fill="currentColor" />
          <circle cx="2" cy="8" r="1" fill="currentColor" />
          <circle cx="2" cy="12" r="1" fill="currentColor" />
          <path
            d="M6 4h8M6 8h8M6 12h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Bullet List",
    },
    {
      command: "insertOrderedList",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M1 2h1v2H1zM1 6h1v2H1zM1 10h1v2H1zM6 3h8M6 7h8M6 11h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Numbered List",
    },
    {
      command: "createLink",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 12a4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 8a4 4 0 0 0 4-4 4 4 0 0 0-4 4m-6 0h4m8-8h-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Insert Link",
      action: insertLink,
    },
  ];

  const formatButtons = [
    { command: "h1", label: "H1", action: () => formatBlock("h1") },
    { command: "h2", label: "H2", action: () => formatBlock("h2") },
    { command: "h3", label: "H3", action: () => formatBlock("h3") },
    { command: "p", label: "P", action: () => formatBlock("p") },
  ];

  return (
    <div
      className={`border border-[#E2E4E9] rounded-lg overflow-hidden ${className}`}
    >
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b border-[#E2E4E9] bg-gray-50">
        {/* Format dropdown */}
        <select
          onChange={(e) => formatBlock(e.target.value)}
          className="text-xs border border-gray-300 rounded px-2 py-1 mr-2"
          defaultValue=""
        >
          <option value="">Format</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="p">Paragraph</option>
        </select>

        {/* Formatting buttons */}
        {toolbarButtons.map((button) => (
          <button
            key={button.command}
            type="button"
            className={`p-2 rounded hover:bg-gray-200 transition-colors ${
              isActive[button.command]
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() =>
              button.action ? button.action() : execCommand(button.command)
            }
            title={button.title}
          >
            {button.icon}
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-gray-300 mx-2" />

        {/* Text color */}
        <input
          type="color"
          className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
          onChange={(e) => execCommand("foreColor", e.target.value)}
          title="Text Color"
        />

        {/* Clear formatting */}
        <button
          type="button"
          className="p-2 rounded hover:bg-gray-200 transition-colors text-gray-600"
          onClick={() => execCommand("removeFormat")}
          title="Clear Formatting"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 3l10 10M6 2h6l-2 5M4 14h4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className="p-3 outline-none focus:ring-0"
        style={{ minHeight }}
        onInput={handleContentChange}
        onKeyUp={handleKeyUp}
        onMouseUp={handleMouseUp}
        dangerouslySetInnerHTML={{ __html: content }}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
      />

      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }

        [contenteditable] h1 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }

        [contenteditable] h2 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }

        [contenteditable] h3 {
          font-size: 1.125rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }

        [contenteditable] p {
          margin: 0.5rem 0;
        }

        [contenteditable] ul,
        [contenteditable] ol {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }

        [contenteditable] li {
          margin: 0.25rem 0;
        }

        [contenteditable] a {
          color: #3b82f6;
          text-decoration: underline;
        }

        [contenteditable]:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
