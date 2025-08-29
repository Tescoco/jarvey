import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { search } from "../utilities/Classes";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Sample search data - you can replace this with actual search data
  const searchData = [
    {
      title: "Dashboard",
      path: "/app",
      type: "page",
      description: "Main dashboard overview",
    },
    {
      title: "Tickets",
      path: "/app/tickets",
      type: "page",
      description: "Manage support tickets",
    },
    {
      title: "Chat",
      path: "/app/chat",
      type: "page",
      description: "Live chat interface",
    },
    {
      title: "AI Agent",
      path: "/app/ai-agent",
      type: "page",
      description: "AI agent configuration",
    },
    {
      title: "Help Center",
      path: "/app/help-center",
      type: "page",
      description: "Knowledge base articles",
    },
    {
      title: "Triggers",
      path: "/app/triggers",
      type: "page",
      description: "Automation triggers",
    },
    {
      title: "Predefined Responses",
      path: "/app/predefined",
      type: "page",
      description: "Template responses",
    },
    {
      title: "SLAs",
      path: "/app/slas",
      type: "page",
      description: "Service level agreements",
    },
    {
      title: "Reports",
      path: "/app/dashboard/general",
      type: "page",
      description: "Analytics and reports",
    },
    {
      title: "Settings",
      path: "/app/profile",
      type: "page",
      description: "Account settings",
    },
    {
      title: "Manage Agents",
      path: "/app/manage-agents",
      type: "page",
      description: "Agent management",
    },
    {
      title: "Email Configuration",
      path: "/app/email-configuration",
      type: "page",
      description: "Email settings",
    },
  ];

  // Handle search filtering
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Handle navigation
  const handleResultClick = (path) => {
    navigate(path);
    onClose();
    setSearchQuery("");
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Focus on search input when modal opens
      setTimeout(() => {
        const searchInput = document.getElementById("search-modal-input");
        if (searchInput) searchInput.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Search</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <IoClose className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <Input
            id="search-modal-input"
            type="text"
            placeholder="Search pages, features, or settings..."
            leftIcon={search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() === "" ? (
            <div className="p-8 text-center text-gray-500">
              <p>Start typing to search...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result.path)}
                  className="w-full text-left p-3 hover:bg-gray-50 rounded-md transition-colors flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-medium">
                      {result.title.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {result.title}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                      {result.description}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-xs text-gray-400 uppercase">
                    {result.type}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <p>No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 flex items-center justify-between rounded-b-lg">
          <span>Press ESC to close</span>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">
              ↑↓
            </kbd>
            <span>to navigate</span>
            <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">
              ↵
            </kbd>
            <span>to select</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
