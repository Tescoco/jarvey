import React, { useState, useEffect, useContext } from "react";
import FlowBuilder, {
  NodeContext,
  useAction,
  useDrawer,
} from "react-flow-builder";
import Input from "./Input";
import Dropdown from "./Dropdown";
import "./FlowChart.css";

export default function FlowChart({ onSave }) {
  const [nodes, setNodes] = useState([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [sidePanel, setSidePanel] = useState({
    open: false,
    type: null,
    nodeId: null,
    data: {},
  });
  const [nextNodeId, setNextNodeId] = useState(3);

  // Handle page leave/refresh confirmation
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (hasUnsavedChanges) {
        const message =
          "You have unsaved changes. Do you want to save changes or discard changes on flows?";
        event.returnValue = message;
        return message;
      }
    };

    const handlePopState = (event) => {
      if (hasUnsavedChanges) {
        const confirmed = window.confirm(
          "You have unsaved changes. Do you want to save changes or discard changes on flows?"
        );
        if (!confirmed) {
          event.preventDefault();
          window.history.pushState(null, "", window.location.href);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [hasUnsavedChanges]);

  // Initialize with default nodes
  useEffect(() => {
    const initialNodes = [
      {
        id: "start",
        type: "start",
        name: "START",
        data: {
          title: "START",
          subtitle: "Trigger button",
          content: "Buy Now",
        },
      },
      {
        id: "message",
        type: "message",
        name: "Message",
        data: {
          title: "Message",
          content: "Message",
        },
      },
      {
        id: "end",
        type: "end",
        name: "END",
        data: {
          title: "END",
          subtitle: "Ask for feedback",
          content: "Ask for feedback",
        },
      },
    ];
    setNodes(initialNodes);
  }, []);

  // Function to mark changes as unsaved
  const markAsUnsaved = () => {
    setHasUnsavedChanges(true);
  };

  // Function to mark changes as saved
  const markAsSaved = () => {
    setHasUnsavedChanges(false);
  };

  // Function to save changes
  const saveChanges = () => {
    markAsSaved();
    if (onSave) {
      onSave(nodes);
    }
  };

  // Expose save function to parent component
  useEffect(() => {
    if (onSave) {
      window.flowChartSave = saveChanges;
    }

    return () => {
      if (window.flowChartSave) {
        delete window.flowChartSave;
      }
    };
  }, [nodes, onSave]);

  const handleNodesChange = (newNodes) => {
    setNodes(newNodes);
    markAsUnsaved();
  };

  const handleSidePanelSubmit = (formData) => {
    if (sidePanel.type === "start") {
      // Update start node content
      const updateNodeContent = (nodeList) => {
        return nodeList.map((node) => {
          if (node.id === sidePanel.nodeId) {
            return {
              ...node,
              data: {
                ...node.data,
                content: formData.triggerText,
              },
            };
          }
          if (node.children) {
            return {
              ...node,
              children: updateNodeContent(node.children),
            };
          }
          return node;
        });
      };

      const updatedNodes = updateNodeContent(nodes);
      setNodes(updatedNodes);
    }

    setSidePanel({ open: false, type: null, nodeId: null, data: {} });
    markAsUnsaved();
  };

  // START Node Component
  const StartNodeDisplay = () => {
    const node = useContext(NodeContext);

    return (
      <div
        className="p-4 rounded-2xl border border-primary text-center bg-primary/10 flex flex-col gap-2 relative z-1 mb-[9px] cursor-pointer hover:bg-primary/20 transition-colors w-[300px]"
        onClick={() =>
          setSidePanel({
            open: true,
            type: "start",
            nodeId: node.id,
            data: { currentText: node.data.content },
          })
        }
      >
        <h4 className="text-sm font-bold">{node.data.title}</h4>
        <p className="text-xs text-gray">{node.data.subtitle}</p>
        <p className="text-heading">{node.data.content}</p>
      </div>
    );
  };

  // END Node Component
  const EndNodeDisplay = () => {
    const node = useContext(NodeContext);

    return (
      <div className="p-4 rounded-2xl border border-primary bg-white flex flex-col gap-2 w-[300px] relative z-1 text-start">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 py-1 px-2.5 rounded-lg bg-[#F7F7F7] mb-2">
            <span className="text-heading text-xs font-bold">
              {node.data.title}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Message Node Component
  const MessageNodeDisplay = () => {
    const node = useContext(NodeContext);
    const { removeNode } = useAction();

    return (
      <div className="p-4 rounded-2xl border border-primary bg-white flex flex-col gap-2 w-[300px] relative z-1 text-start">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 py-1 px-2.5 rounded-lg bg-primary/10 mb-2">
            <span className="text-primary font-semibold text-xs">
              {node.data.title}
            </span>
          </div>
          <button onClick={() => removeNode(node)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M4.69139 16.6503L5.34004 16.6084L4.69139 16.6503ZM15.3093 16.6503L14.6606 16.6084L15.3093 16.6503ZM2.29199 4.64297C1.93301 4.64297 1.64199 4.93398 1.64199 5.29297C1.64199 5.65195 1.93301 5.94297 2.29199 5.94297V4.64297ZM17.7087 5.94297C18.0676 5.94297 18.3587 5.65195 18.3587 5.29297C18.3587 4.93398 18.0676 4.64297 17.7087 4.64297V5.94297ZM8.77533 9.45964C8.77533 9.10065 8.48431 8.80964 8.12533 8.80964C7.76634 8.80964 7.47533 9.10065 7.47533 9.45964H8.77533ZM7.47533 14.043C7.47533 14.402 7.76634 14.693 8.12533 14.693C8.48431 14.693 8.77533 14.402 8.77533 14.043H7.47533ZM12.5253 9.45964C12.5253 9.10065 12.2343 8.80964 11.8753 8.80964C11.5163 8.80964 11.2253 9.10065 11.2253 9.45964H12.5253ZM11.2253 14.043C11.2253 14.402 11.5163 14.693 11.8753 14.693C12.2343 14.693 12.5253 14.402 12.5253 14.043H11.2253ZM12.5992 5.45499C12.6887 5.80264 13.043 6.01193 13.3907 5.92245C13.7383 5.83297 13.9476 5.47861 13.8581 5.13095L12.5992 5.45499ZM3.95866 5.29297L3.31001 5.33482L4.04274 16.6921L4.69139 16.6503L5.34004 16.6084L4.60731 5.25112L3.95866 5.29297ZM6.3546 18.2096V18.8596H13.6461V18.2096V17.5596H6.3546V18.2096ZM15.3093 16.6503L15.9579 16.6921L16.6906 5.33482L16.042 5.29297L15.3933 5.25112L14.6606 16.6084L15.3093 16.6503ZM16.042 5.29297V4.64297H3.95866V5.29297V5.94297H16.042V5.29297ZM2.29199 5.29297V5.94297H3.95866V5.29297V4.64297H2.29199V5.29297ZM16.042 5.29297V5.94297H17.7087V5.29297V4.64297H16.042V5.29297ZM13.6461 18.2096V18.8596C14.8676 18.8596 15.8793 17.9111 15.9579 16.6921L15.3093 16.6503L14.6606 16.6084C14.6261 17.1434 14.1821 17.5596 13.6461 17.5596V18.2096ZM4.69139 16.6503L4.04274 16.6921C4.12138 17.9111 5.13304 18.8596 6.3546 18.8596V18.2096V17.5596C5.81852 17.5596 5.37455 17.1434 5.34004 16.6084L4.69139 16.6503ZM8.12533 9.45964H7.47533V14.043H8.12533H8.77533V9.45964H8.12533ZM11.8753 9.45964H11.2253V14.043H11.8753H12.5253V9.45964H11.8753ZM10.0003 2.79297V3.44297C11.2498 3.44297 12.3013 4.29751 12.5992 5.45499L13.2287 5.29297L13.8581 5.13095C13.416 3.41305 11.8573 2.14297 10.0003 2.14297V2.79297ZM6.77202 5.29297L7.40151 5.45499C7.69942 4.29751 8.75091 3.44297 10.0003 3.44297V2.79297V2.14297C8.14338 2.14297 6.5847 3.41305 6.14254 5.13095L6.77202 5.29297Z"
                fill="#111111"
                fillOpacity="0.7"
              />
            </svg>
          </button>
        </div>
        <span className="text-heading font-medium">{node.data.content}</span>
      </div>
    );
  };

  // Addable Component - This creates the plus buttons
  const AddableComponent = ({ add, node }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const nodeTypes = [
      { type: "message", name: "Message", icon: "💬" },
      { type: "end", name: "End", icon: "🏁" },
    ];

    const handleAddNode = (nodeType) => {
      add(nodeType);
      setShowDropdown(false);
      markAsUnsaved();
    };

    return (
      <div className="relative flex justify-center my-2">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors z-10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3.33333V12.6667M3.33333 8H12.6667"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {showDropdown && (
          <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[120px] z-20">
            {nodeTypes.map((nodeType) => (
              <button
                key={nodeType.type}
                onClick={() => handleAddNode(nodeType.type)}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm"
              >
                <span>{nodeType.icon}</span>
                <span>{nodeType.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Register nodes for react-flow-builder
  const registerNodes = [
    {
      type: "start",
      name: "START",
      displayComponent: StartNodeDisplay,
      isStart: true,
      addableNodeTypes: ["message", "end"],
      addableComponent: AddableComponent,
    },
    {
      type: "end",
      name: "END",
      displayComponent: EndNodeDisplay,
      isEnd: true,
    },
    {
      type: "message",
      name: "Message",
      displayComponent: MessageNodeDisplay,
      addableNodeTypes: ["message", "end"],
      addableComponent: AddableComponent,
    },
  ];

  // Side Panel Components (keeping all existing functionality)
  const renderSidePanel = () => {
    if (!sidePanel.open) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-white w-full max-w-md h-full overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {sidePanel.type === "start" ? "Start" : "Configure Node"}
              </h2>
              <button
                onClick={() =>
                  setSidePanel({
                    open: false,
                    type: null,
                    nodeId: null,
                    data: {},
                  })
                }
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {sidePanel.type === "start" && (
              <StartPanel
                onSubmit={handleSidePanelSubmit}
                currentText={sidePanel.data.currentText}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pb-10 md:pb-14 lg:pb-20">
      <FlowBuilder
        nodes={nodes}
        onChange={handleNodesChange}
        registerNodes={registerNodes}
        backgroundColor="#F7F7F7"
        layout="vertical"
        spaceX={20}
        spaceY={20}
        className="flow-builder-container"
        readonly={false}
      />
      {renderSidePanel()}
    </div>
  );
}

// Side Panel Components (keeping all existing functionality)
const StartPanel = ({ onSubmit, currentText }) => {
  const [triggerText, setTriggerText] = useState(currentText || "");

  const handleSubmit = () => {
    onSubmit({ triggerText });
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Trigger button <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={triggerText}
          onChange={(e) => setTriggerText(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter trigger button text..."
        />
        <p className="text-xs text-gray-500 mt-2">
          The flow will be triggered when customers click this button.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Save
      </button>
    </div>
  );
};
