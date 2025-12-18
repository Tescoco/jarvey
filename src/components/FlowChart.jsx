import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import ReactDOM from "react-dom";
import FlowBuilder, {
  NodeContext,
  useAction,
  useDrawer,
} from "react-flow-builder";
import Input from "./Input";
import Dropdown from "./Dropdown";
import "./FlowChart.css";

export default function FlowChart({ onSave, analysisMode = false }) {
  const [nodes, setNodes] = useState([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [sidePanel, setSidePanel] = useState({
    open: false,
    type: null,
    nodeId: null,
    data: {},
  });
  const [nextNodeId, setNextNodeId] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [selectedNodeForAdd, setSelectedNodeForAdd] = useState(null);
  // Pan/zoom state for movable canvas
  const [viewportScale, setViewportScale] = useState(1);
  const [viewportOffset, setViewportOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0 });
  const offsetStartRef = useRef({ x: 0, y: 0 });
  const viewportRef = useRef(null);
  const contentRef = useRef(null);
  const hasCenteredRef = useRef(false);

  const isInteractiveElement = (el) => {
    if (!el) return false;
    return !!el.closest(
      'button, a, input, textarea, select, [role="button"], [contenteditable="true"], .cursor-pointer, [onclick]'
    );
  };

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

  // Function to zoom in
  const zoomIn = () => {
    const factor = 1.05;
    const newScale = Math.min(2.5, Math.max(0.5, viewportScale * factor));

    // Center the zoom on the viewport center
    const viewportEl = viewportRef.current;
    if (viewportEl) {
      const rect = viewportEl.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Convert center to world coordinates
      const worldX = (centerX - viewportOffset.x) / viewportScale;
      const worldY = (centerY - viewportOffset.y) / viewportScale;

      // Calculate new offset to keep center stable
      const newOffsetX = centerX - worldX * newScale;
      const newOffsetY = centerY - worldY * newScale;

      setViewportScale(newScale);
      setViewportOffset({ x: newOffsetX, y: newOffsetY });
    }
  };

  // Function to zoom out
  const zoomOut = () => {
    const factor = 0.95;
    const newScale = Math.min(2.5, Math.max(0.5, viewportScale * factor));

    // Center the zoom on the viewport center
    const viewportEl = viewportRef.current;
    if (viewportEl) {
      const rect = viewportEl.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Convert center to world coordinates
      const worldX = (centerX - viewportOffset.x) / viewportScale;
      const worldY = (centerY - viewportOffset.y) / viewportScale;

      // Calculate new offset to keep center stable
      const newOffsetX = centerX - worldX * newScale;
      const newOffsetY = centerY - worldY * newScale;

      setViewportScale(newScale);
      setViewportOffset({ x: newOffsetX, y: newOffsetY });
    }
  };

  // Function to reset zoom and center
  const resetZoom = () => {
    const viewportEl = viewportRef.current;
    const contentEl = contentRef.current;
    if (!viewportEl || !contentEl) return;

    // Reset scale to 1
    const newScale = 1;
    setViewportScale(newScale);

    // Center the content using the same logic as initial centering
    const raf = requestAnimationFrame(() => {
      const vw = viewportEl.clientWidth;
      const vh = viewportEl.clientHeight;
      const cw = contentEl.offsetWidth;
      const ch = contentEl.offsetHeight;
      if (vw && vh && cw && ch) {
        const offsetX = (vw - cw * newScale) / 2;
        const offsetY = (vh - ch * newScale) / 2;
        setViewportOffset({ x: offsetX, y: offsetY });
      }
    });
  };

  // Expose functions to parent component
  useEffect(() => {
    if (onSave) {
      window.flowChartSave = saveChanges;
    }
    window.flowChartZoomIn = zoomIn;
    window.flowChartZoomOut = zoomOut;
    window.flowChartResetZoom = resetZoom;

    return () => {
      if (window.flowChartSave) {
        delete window.flowChartSave;
      }
      if (window.flowChartZoomIn) {
        delete window.flowChartZoomIn;
      }
      if (window.flowChartZoomOut) {
        delete window.flowChartZoomOut;
      }
      if (window.flowChartResetZoom) {
        delete window.flowChartResetZoom;
      }
    };
  }, [nodes, onSave, viewportScale, viewportOffset]);

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
    } else if (
      sidePanel.type === "message" &&
      sidePanel.nodeId &&
      sidePanel.data.isEditing === true
    ) {
      // Update existing message node content
      const updateNodeContent = (nodeList) => {
        return nodeList.map((node) => {
          if (node.id === sidePanel.nodeId) {
            return {
              ...node,
              data: {
                ...node.data,
                content: formData.messageText,
              },
            };
          }
          if (node.children) {
            return {
              ...node,
              children: updateNodeContent(node.children),
            };
          }
          // Handle branch containers
          if (node.type === "branch-container") {
            // Check if the node is in branches
            const updatedBranches = node.data.branches?.map((branch) => {
              if (branch.id === sidePanel.nodeId) {
                return {
                  ...branch,
                  data: {
                    ...branch.data,
                    content: formData.messageText,
                  },
                };
              }
              return branch;
            });

            // Check if the node is in branch chains
            const updatedBranchChains = { ...node.data.branchChains };
            for (const branchId in updatedBranchChains) {
              updatedBranchChains[branchId] = updatedBranchChains[branchId].map(
                (chainNode) => {
                  if (chainNode.id === sidePanel.nodeId) {
                    return {
                      ...chainNode,
                      data: {
                        ...chainNode.data,
                        content: formData.messageText,
                      },
                    };
                  }
                  return chainNode;
                }
              );
            }

            return {
              ...node,
              data: {
                ...node.data,
                branches: updatedBranches,
                branchChains: updatedBranchChains,
              },
            };
          }
          return node;
        });
      };

      const updatedNodes = updateNodeContent(nodes);
      setNodes(updatedNodes);
    } else if (
      sidePanel.type === "end" &&
      sidePanel.nodeId &&
      sidePanel.data.isEditing === true
    ) {
      // Update existing end node content
      const updateNodeContent = (nodeList) => {
        return nodeList.map((node) => {
          if (node.id === sidePanel.nodeId) {
            return {
              ...node,
              data: {
                ...node.data,
                content: formData.endText,
                subtitle: formData.endSubtitle,
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
    } else {
      // Handle adding new nodes with configuration
      addNodeAfter(sidePanel.nodeId, sidePanel.type, formData);
    }

    setSidePanel({ open: false, type: null, nodeId: null, data: {} });
    markAsUnsaved();
  };

  // Function to add node after a specific node with configuration
  const addNodeAfter = (afterNodeId, nodeType, formData = {}) => {
    const newNodeId = `node-${Date.now()}`;

    if (nodeType === "multiple-choice" && formData.options) {
      // Handle Multiple Choice - create horizontal branches and relocate existing nodes
      const multipleChoiceNode = {
        id: newNodeId,
        type: "message",
        name: getNodeDisplayName(nodeType),
        data: {
          title: getNodeDisplayName(nodeType),
          content: formData.question || "Select an option",
          nodeType: nodeType,
          config: formData,
          options: formData.options,
        },
      };

      // Create branch nodes for each option
      const branchNodes = formData.options.map((option, index) => ({
        id: `branch-${newNodeId}-${index}`,
        type: "message",
        name: "Message",
        data: {
          title: "Message",
          content: `Response for: ${option}`,
          nodeType: "branch-response",
          parentChoice: option,
          branchIndex: index,
          totalBranches: formData.options.length,
        },
      }));

      // Find existing nodes after the insertion point to relocate them
      const insertNodes = (nodeList) => {
        const result = [];
        let nodesAfterInsertion = [];
        let foundInsertion = false;

        for (let i = 0; i < nodeList.length; i++) {
          if (!foundInsertion) {
            result.push(nodeList[i]);
            if (nodeList[i].id === afterNodeId) {
              foundInsertion = true;

              // Add the multiple choice node
              result.push(multipleChoiceNode);

              // Collect all nodes that come after the insertion point
              nodesAfterInsertion = nodeList.slice(i + 1);

              // Create branch container with the first branch getting the relocated nodes
              const branchContainer = {
                id: `branch-container-${newNodeId}`,
                type: "branch-container",
                name: "Branch Container",
                data: {
                  nodeType: "branch-container",
                  branches: branchNodes,
                  relocatedNodes: nodesAfterInsertion, // Pass the nodes to relocate
                  firstBranchId: branchNodes[0]?.id, // ID of first branch to connect relocated nodes
                  branchChains: {}, // Store additional nodes added to each branch
                },
              };

              result.push(branchContainer);
              break; // Stop processing since we've handled the rest
            }
          }
        }

        return result;
      };

      const updatedNodes = insertNodes(nodes);
      setNodes(updatedNodes);
    } else {
      // Check if we're adding after a branch node
      const isBranchNode = afterNodeId.includes("branch-");

      if (isBranchNode) {
        // Handle adding nodes after branch nodes
        const updatedNodes = nodes.map((node) => {
          if (node.type === "branch-container") {
            // Find which branch this node should be added to
            const targetBranch = node.data.branches?.find(
              (branch) => branch.id === afterNodeId
            );
            if (targetBranch) {
              const newNode = {
                id: newNodeId,
                type: "message",
                name: getNodeDisplayName(nodeType),
                data: {
                  title: getNodeDisplayName(nodeType),
                  content: getNodeContent(nodeType, formData),
                  nodeType: nodeType,
                  config: formData,
                },
              };

              // Add to the branch chain
              const branchChains = { ...node.data.branchChains };
              if (!branchChains[afterNodeId]) {
                branchChains[afterNodeId] = [];
              }
              branchChains[afterNodeId].push(newNode);

              return {
                ...node,
                data: {
                  ...node.data,
                  branchChains,
                },
              };
            }
          }
          return node;
        });

        setNodes(updatedNodes);
      } else {
        // Check if we're adding after a chain node
        let isChainNode = false;
        const updatedNodes = nodes.map((node) => {
          if (node.type === "branch-container") {
            const branchChains = { ...node.data.branchChains };

            // Check all branch chains for the target node
            for (const branchId in branchChains) {
              const chainNodes = branchChains[branchId];
              const chainNodeIndex = chainNodes.findIndex(
                (chainNode) => chainNode.id === afterNodeId
              );

              if (chainNodeIndex !== -1) {
                isChainNode = true;
                const newNode = {
                  id: newNodeId,
                  type: "message",
                  name: getNodeDisplayName(nodeType),
                  data: {
                    title: getNodeDisplayName(nodeType),
                    content: getNodeContent(nodeType, formData),
                    nodeType: nodeType,
                    config: formData,
                  },
                };

                // Insert the new node after the found chain node
                chainNodes.splice(chainNodeIndex + 1, 0, newNode);

                return {
                  ...node,
                  data: {
                    ...node.data,
                    branchChains,
                  },
                };
              }
            }
          }
          return node;
        });

        if (isChainNode) {
          setNodes(updatedNodes);
        } else {
          // Handle regular single nodes
          let newNode = {
            id: newNodeId,
            type: "message",
            name: getNodeDisplayName(nodeType),
            data: {
              title: getNodeDisplayName(nodeType),
              content: getNodeContent(nodeType, formData),
              nodeType: nodeType,
              config: formData,
            },
          };

          // Find the node to add after and insert the new node
          const insertNode = (nodeList) => {
            const result = [];
            for (let i = 0; i < nodeList.length; i++) {
              result.push(nodeList[i]);
              if (nodeList[i].id === afterNodeId) {
                result.push(newNode);
              }
            }
            return result;
          };

          const updatedNodes = insertNode(nodes);
          setNodes(updatedNodes);
        }
      }
    }

    markAsUnsaved();
  };

  // Helper functions for node creation
  const getNodeDisplayName = (nodeType) => {
    const typeNames = {
      "multiple-choice": "Multiple Choice",
      "text-reply": "Text Reply",
      "file-upload": "File Upload",
      "automated-answer": "Automated Answer",
      "customer-login": "Customer Login",
      "order-selection": "Order Selection",
      "item-selection": "Item Selection",
      "http-request": "HTTP Request",
      conditions: "Conditions",
    };
    return typeNames[nodeType] || "Message";
  };

  const getNodeContent = (nodeType, formData) => {
    switch (nodeType) {
      case "multiple-choice":
        return formData.question || "Select an option";
      case "text-reply":
        return formData.question || "Please enter your response";
      case "file-upload":
        return formData.question || "Please upload a file";
      case "automated-answer":
        return formData.message || "Automated response";
      case "customer-login":
        return "Please verify your identity";
      case "order-selection":
        return "Select an order";
      case "item-selection":
        return "Select an item";
      case "http-request":
        return formData.description || "External request";
      case "conditions":
        return formData.description || "Conditional logic";
      default:
        return "New step";
    }
  };

  // Custom Line Component with Plus Button
  const CustomLineComponent = ({ from, to }) => {
    const handlePlusClick = () => {
      setSelectedNodeForAdd(from.id);
      setShowModal(true);
    };

    return (
      <div className="custom-line-with-plus">
        <div className="flex flex-col items-center my-2">
          <div className="w-0.5 h-4 bg-primary"></div>
          <button onClick={handlePlusClick} className="custom-plus-button">
            +
          </button>
          <div className="w-0.5 h-4 bg-primary"></div>
        </div>
      </div>
    );
  };

  // START Node Component
  const StartNodeDisplay = () => {
    const node = useContext(NodeContext);

    if (analysisMode) {
      return (
        <div className="flex flex-col items-center">
          <div className="p-3 rounded-xl border border-primary text-center bg-primary/10 flex flex-col gap-1 relative z-1 mb-[6px] w-[250px]">
            <h4 className="text-xs font-bold">{node.data.title}</h4>
            <p className="text-[10px] text-gray">{node.data.subtitle}</p>
            <p className="text-heading text-sm">{node.data.content}</p>
          </div>

          {/* Connecting line for analysis mode */}
          <div className="flex flex-col items-center my-2">
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center">
        <div
          className="p-3 rounded-xl border border-primary text-center bg-primary/10 flex flex-col gap-1 relative z-1 mb-[6px] cursor-pointer hover:bg-primary/20 transition-colors w-[250px]"
          onClick={() =>
            setSidePanel({
              open: true,
              type: "start",
              nodeId: node.id,
              data: { currentText: node.data.content, isEditing: true },
            })
          }
        >
          <h4 className="text-xs font-bold">{node.data.title}</h4>
          <p className="text-[10px] text-gray">{node.data.subtitle}</p>
          <p className="text-heading text-sm">{node.data.content}</p>
        </div>

        {/* Plus button after START node */}
        {!analysisMode && (
          <div className="flex flex-col items-center my-2">
            <div className="w-0.5 h-4 bg-primary"></div>
            <button
              onClick={(event) => {
                event.stopPropagation();
                setSelectedNodeForAdd(node.id);
                setShowModal(true);
              }}
              className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors z-10 shadow-lg"
            >
              <svg
                width="12"
                height="12"
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
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        )}

        {/* Connecting line for analysis mode */}
        {analysisMode && (
          <div className="flex flex-col items-center my-2">
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        )}
      </div>
    );
  };

  // END Node Component
  const EndNodeDisplay = () => {
    const node = useContext(NodeContext);

    if (analysisMode) {
      return (
        <div className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[250px] relative z-1 text-start">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-[#F7F7F7] mb-1">
              <span className="text-heading text-[10px] font-bold">
                {node.data.title}
              </span>
            </div>
          </div>

          {/* Analysis metrics for END node */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="text-center flex flex-col gap-1">
              <span className="text-green-600 text-[10px] font-medium">
                Automated
              </span>
              <strong className="text-heading font-bold text-sm !leading-normal">
                2
              </strong>
            </div>
            <div className="text-center flex flex-col gap-1">
              <span className="text-red-500 text-[10px] font-medium">
                Drop off
              </span>
              <strong className="text-heading font-bold text-sm !leading-normal">
                3
              </strong>
            </div>
            <div className="text-center flex flex-col gap-1">
              <span className="text-[#858585] text-[10px] font-medium">
                Tickets
              </span>
              <strong className="text-heading font-bold text-sm !leading-normal">
                0
              </strong>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[250px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => {
          setSidePanel({
            open: true,
            type: "end",
            nodeId: node.id,
            data: {
              currentText: node.data.content,
              currentSubtitle: node.data.subtitle,
              isEditing: true,
            },
          });
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-[#F7F7F7] mb-1">
            <span className="text-heading text-[10px] font-bold">
              {node.data.title}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Message Node Component to handle Multiple Choice display
  const MessageNodeDisplay = () => {
    const node = useContext(NodeContext);
    const { removeNode } = useAction();

    // Check if this is a multiple choice node
    const isMultipleChoice = node.data.nodeType === "multiple-choice";
    const isBranchResponse = node.data.nodeType === "branch-response";

    if (analysisMode) {
      return (
        <div className="flex flex-col items-center">
          <div className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[250px] relative z-1 text-start">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-primary/10 mb-1">
                <span className="text-primary font-semibold text-[10px]">
                  {node.data.title}
                </span>
              </div>
            </div>

            {/* Display content based on node type - No options for Multiple Choice */}
            {isBranchResponse ? (
              <div>
                <span className="text-heading font-medium text-sm">
                  {node.data.content}
                </span>
                <div className="mt-1 text-[10px] text-gray-500">
                  Choice: {node.data.parentChoice}
                </div>
              </div>
            ) : (
              <span className="text-heading font-medium text-sm">
                {node.data.content}
              </span>
            )}

            {/* Analysis metrics for Message nodes */}
            <div className="flex justify-center gap-4 mt-2">
              <div className="text-center flex flex-col gap-1">
                <span className="text-[#858585] text-[10px] font-medium">
                  Views
                </span>
                <strong className="text-heading font-bold text-sm !leading-normal">
                  -
                </strong>
              </div>
              <div className="text-center flex flex-col gap-1">
                <span className="text-red-500 text-[10px] font-medium">
                  Drop off
                </span>
                <strong className="text-heading font-bold text-sm !leading-normal">
                  -
                </strong>
              </div>
            </div>
          </div>

          {/* Connecting line for analysis mode */}
          <div className="flex flex-col items-center my-2">
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center">
        <div
          className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[250px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => {
            // Open side panel for editing this node
            setSidePanel({
              open: true,
              type: node.data.nodeType || "message",
              nodeId: node.id,
              data: {
                currentText: node.data.content,
                nodeType: node.data.nodeType,
                config: node.data.config || {},
                isEditing: true,
              },
            });
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-primary/10 mb-1">
              <span className="text-primary font-semibold text-[10px]">
                {node.data.title}
              </span>
            </div>
            {!analysisMode && (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  removeNode(node.id);
                }}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.69139 16.6503L5.34004 16.6084L4.69139 16.6503ZM15.3093 16.6503L14.6606 16.6084L15.3093 16.6503ZM2.29199 4.64297C1.93301 4.64297 1.64199 4.93398 1.64199 5.29297C1.64199 5.65195 1.93301 5.94297 2.29199 5.94297V4.64297ZM17.7087 5.94297C18.0676 5.94297 18.3587 5.65195 18.3587 5.29297C18.3587 4.93398 18.0676 4.64297 17.7087 4.64297V5.94297ZM8.77533 9.45964C8.77533 9.10065 8.48431 8.80964 8.12533 8.80964C7.76634 8.80964 7.47533 9.10065 7.47533 9.45964H8.77533ZM7.47533 14.043C7.47533 14.402 7.76634 14.693 8.12533 14.693C8.48431 14.693 8.77533 14.402 8.77533 14.043H7.47533ZM12.5253 9.45964C12.5253 9.10065 12.2343 8.80964 11.8753 8.80964C11.5163 8.80964 11.2253 9.10065 11.2253 9.45964H12.5253ZM11.2253 14.043C11.2253 14.402 11.5163 14.693 11.8753 14.693C12.2343 14.693 12.5253 14.402 12.5253 14.043H11.2253ZM12.5992 5.45499C12.6887 5.80264 13.043 6.01193 13.3907 5.92245C13.7383 5.83297 13.9476 5.47861 13.8581 5.13095L12.5992 5.45499ZM3.95866 5.29297L3.31001 5.33482L4.04274 16.6921L4.69139 16.6503L5.34004 16.6084L4.60731 5.25112L3.95866 5.29297ZM6.3546 18.2096V18.8596H13.6461V18.2096V17.5596H6.3546V18.2096ZM15.3093 16.6503L15.9579 16.6921L16.6906 5.33482L16.042 5.29297L15.3933 5.25112L14.6606 16.6084L15.3093 16.6503ZM16.042 5.29297V4.64297H3.95866V5.29297V5.94297H16.042V5.29297ZM2.29199 5.29297V5.94297H3.95866V5.29297V4.64297H2.29199V5.29297ZM16.042 5.29297V5.94297H17.7087V5.29297V4.64297H16.042V5.29297ZM13.6461 18.2096V18.8596C14.8676 18.8596 15.8793 17.9111 15.9579 16.6921L15.3093 16.6503L14.6606 16.6084C14.6261 17.1434 14.1821 17.5596 13.6461 17.5596V18.2096ZM4.69139 16.6503L4.04274 16.6921C4.12138 17.9111 5.13304 18.8596 6.3546 18.8596V18.2096V17.5596C5.81852 17.5596 5.37455 17.1434 5.34004 16.6084L4.69139 16.6503ZM8.12533 9.45964H7.47533V14.043H8.12533H8.77533V9.45964H8.12533ZM11.8753 9.45964H11.2253V14.043H11.8753H12.5253V9.45964H11.8753ZM10.0003 2.79297V3.44297C11.2498 3.44297 12.3013 4.29751 12.5992 5.45499L13.2287 5.29297L13.8581 5.13095C13.416 3.41305 11.8573 2.14297 10.0003 2.14297V2.79297ZM6.77202 5.29297L7.40151 5.45499C7.69942 4.29751 8.75091 3.44297 10.0003 3.44297V2.79297V2.14297C8.14338 2.14297 6.58470 3.41305 6.14254 5.13095L6.77202 5.29297Z"
                    fill="#111111"
                    fillOpacity="0.7"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Display content based on node type - No options for Multiple Choice */}
          {isBranchResponse ? (
            <div>
              <span className="text-heading font-medium text-sm">
                {node.data.content}
              </span>
              <div className="mt-1 text-[10px] text-gray-500">
                Choice: {node.data.parentChoice}
              </div>
            </div>
          ) : (
            <span className="text-heading font-medium text-sm">
              {node.data.content}
            </span>
          )}
        </div>

        {/* Plus button after all Message nodes (including multiple choice) */}
        {!analysisMode && (
          <div className="flex flex-col items-center my-2">
            <div className="w-0.5 h-4 bg-primary"></div>
            <button
              onClick={(event) => {
                event.stopPropagation();
                setSelectedNodeForAdd(node.id);
                setShowModal(true);
              }}
              className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors z-10 shadow-lg"
            >
              <svg
                width="12"
                height="12"
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
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        )}

        {/* Connecting line for analysis mode */}
        {analysisMode && (
          <div className="flex flex-col items-center my-2">
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        )}
      </div>
    );
  };

  // Modal for adding nodes
  const nodeTypes = [
    {
      type: "multiple-choice",
      name: "Multiple choice",
      description: "Display up to 6 options",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      type: "text-reply",
      name: "Collect text reply",
      description: "Allow up to 5,000 characters",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4H17V16H5L3 18V4Z"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 8H13M7 12H10"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      type: "file-upload",
      name: "Collect file upload",
      description: "Allow up to 5 files",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V7L13 2Z"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 2V7H16"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      type: "automated-answer",
      name: "Automated answer",
      description: "Display short text",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1V3M10 17V19M4.22 4.22L5.64 5.64M14.36 14.36L15.78 15.78M1 10H3M17 10H19M4.22 15.78L5.64 14.36M14.36 5.64L15.78 4.22"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="10" r="3" stroke="#8B5CF6" strokeWidth="2" />
          </svg>
        </div>
      ),
    },
    {
      type: "customer-login",
      name: "Customer login",
      description: "Confirm customer identity",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7C16 9.20914 14.2091 11 12 11H8C5.79086 11 4 9.20914 4 7C4 4.79086 5.79086 3 8 3H12C14.2091 3 16 4.79086 16 7Z"
              stroke="#8B5CF6"
              strokeWidth="2"
            />
            <path
              d="M10 14C13.866 14 17 15.7909 17 18H3C3 15.7909 6.13401 14 10 14Z"
              stroke="#8B5CF6"
              strokeWidth="2"
            />
          </svg>
        </div>
      ),
    },
    {
      type: "order-selection",
      name: "Order selection",
      description: "Display last 5 orders",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 2L3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V6L14 2H6Z"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H17M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      type: "item-selection",
      name: "Item selection",
      description: "Select an item from an order",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="14"
              height="14"
              rx="2"
              stroke="#8B5CF6"
              strokeWidth="2"
            />
            <path
              d="M7 7H13M7 10H13M7 13H10"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
    },
    {
      type: "http-request",
      name: "HTTP request",
      description: "Perform 3rd party actions",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2L3 7L10 12L17 7L10 2Z"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12L10 17L17 12"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      type: "conditions",
      name: "Conditions",
      description: "Route customers using variables",
      icon: (
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2L15 8H5L10 2Z"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 12V18M7 15L10 18L13 15"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
  ];

  const handleAddNode = (nodeType) => {
    if (selectedNodeForAdd) {
      // Instead of immediately adding the node, open the side panel for configuration
      setSidePanel({
        open: true,
        type: nodeType,
        nodeId: selectedNodeForAdd,
        data: { nodeType },
      });
    }
    setShowModal(false);
    setSelectedNodeForAdd(null);
  };

  // Branch Container Component for horizontal layout with relocated nodes
  // const BranchContainerDisplay = () => {
  //   const node = useContext(NodeContext);
  //   const branches = node.data.branches || [];
  //   const relocatedNodes = node.data.relocatedNodes || [];
  //   const firstBranchId = node.data.firstBranchId;
  //   const branchChains = node.data.branchChains || {};

  //   return (
  //     <div className="flex flex-col items-center w-full">
  //       {/* Connecting lines from multiple choice to branches */}
  //       <div className="flex justify-center items-start w-full mb-2">
  //         <div className="w-0.5 h-4 bg-primary"></div>
  //       </div>

  //       {/* Horizontal branch nodes */}
  //       <div className="flex justify-center items-start gap-6 w-full mb-2">
  //         {branches.map((branch, index) => (
  //           <div key={branch.id} className="flex flex-col items-center">
  //             {/* Individual branch node */}
  //             <div
  //               className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
  //               onClick={() => {
  //                 setSidePanel({
  //                   open: true,
  //                   type: "message",
  //                   nodeId: branch.id,
  //                   data: {
  //                     currentText: branch.data.content,
  //                     nodeType: "branch-response",
  //                     config: {},
  //                     isEditing: true,
  //                   },
  //                 });
  //               }}
  //             >
  //               <div className="flex items-center justify-between">
  //                 <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-primary/10 mb-1">
  //                   <span className="text-primary font-semibold text-[10px]">
  //                     {branch.data.title}
  //                   </span>
  //                 </div>
  //               </div>
  //               <div>
  //                 <span className="text-heading font-medium text-sm">
  //                   {branch.data.content}
  //                 </span>
  //                 <div className="mt-1 text-[10px] text-gray-500">
  //                   Choice: {branch.data.parentChoice}
  //                 </div>
  //               </div>

  //               {/* Analysis metrics for branch nodes */}
  //               {analysisMode && (
  //                 <div className="flex justify-center gap-4 mt-2">
  //                   <div className="text-center flex flex-col gap-1">
  //                     <span className="text-[#858585] text-[10px] font-medium">
  //                       Views
  //                     </span>
  //                     <strong className="text-heading font-bold text-sm !leading-normal">
  //                       -
  //                     </strong>
  //                   </div>
  //                   <div className="text-center flex flex-col gap-1">
  //                     <span className="text-red-500 text-[10px] font-medium">
  //                       Drop off
  //                     </span>
  //                     <strong className="text-heading font-bold text-sm !leading-normal">
  //                       -
  //                     </strong>
  //                   </div>
  //                 </div>
  //               )}
  //             </div>

  //             {/* Plus button after each branch */}
  //             {!analysisMode && (
  //               <div className="flex flex-col items-center my-2">
  //                 <div className="w-0.5 h-4 bg-primary"></div>
  //                 <button
  //                   onClick={(event) => {
  //                     event.stopPropagation();
  //                     setSelectedNodeForAdd(branch.id);
  //                     setShowModal(true);
  //                   }}
  //                   className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors z-10 shadow-lg"
  //                 >
  //                   <svg
  //                     width="12"
  //                     height="12"
  //                     viewBox="0 0 16 16"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <path
  //                       d="M8 3.33333V12.6667M3.33333 8H12.6667"
  //                       stroke="currentColor"
  //                       strokeWidth="2"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                   </svg>
  //                 </button>
  //                 <div className="w-0.5 h-4 bg-primary"></div>
  //               </div>
  //             )}

  //             {/* Connecting line for analysis mode */}
  //             {analysisMode && (
  //               <div className="flex flex-col items-center my-2">
  //                 <div className="w-0.5 h-4 bg-primary"></div>
  //               </div>
  //             )}

  //             {/* Show additional nodes added to this branch */}
  //             {branchChains[branch.id] &&
  //               branchChains[branch.id].map((chainNode, chainIndex) => (
  //                 <div
  //                   key={chainNode.id}
  //                   className="flex flex-col items-center"
  //                 >
  //                   <div
  //                     className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
  //                     onClick={() => {
  //                       setSidePanel({
  //                         open: true,
  //                         type: "message",
  //                         nodeId: chainNode.id,
  //                         data: {
  //                           currentText: chainNode.data.content,
  //                           nodeType: chainNode.data.nodeType || "message",
  //                           config: chainNode.data.config || {},
  //                           isEditing: true,
  //                         },
  //                       });
  //                     }}
  //                   >
  //                     <div className="flex items-center justify-between">
  //                       <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-primary/10 mb-1">
  //                         <span className="text-primary font-semibold text-[10px]">
  //                           {chainNode.data.title}
  //                         </span>
  //                       </div>
  //                     </div>
  //                     <span className="text-heading font-medium text-sm">
  //                       {chainNode.data.content}
  //                     </span>

  //                     {/* Analysis metrics for chain nodes */}
  //                     {analysisMode && (
  //                       <div className="flex justify-center gap-4 mt-2">
  //                         <div className="text-center flex flex-col gap-1">
  //                           <span className="text-[#858585] text-[10px] font-medium">
  //                             Views
  //                           </span>
  //                           <strong className="text-heading font-bold text-sm !leading-normal">
  //                             -
  //                           </strong>
  //                         </div>
  //                         <div className="text-center flex flex-col gap-1">
  //                           <span className="text-red-500 text-[10px] font-medium">
  //                             Drop off
  //                           </span>
  //                           <strong className="text-heading font-bold text-sm !leading-normal">
  //                             -
  //                           </strong>
  //                         </div>
  //                       </div>
  //                     )}
  //                   </div>

  //                   {/* Plus button after each chain node */}
  //                   {!analysisMode && (
  //                     <div className="flex flex-col items-center my-2">
  //                       <div className="w-0.5 h-4 bg-primary"></div>
  //                       <button
  //                         onClick={(event) => {
  //                           event.stopPropagation();
  //                           setSelectedNodeForAdd(chainNode.id);
  //                           setShowModal(true);
  //                         }}
  //                         className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors z-10 shadow-lg"
  //                       >
  //                         <svg
  //                           width="12"
  //                           height="12"
  //                           viewBox="0 0 16 16"
  //                           fill="none"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                         >
  //                           <path
  //                             d="M8 3.33333V12.6667M3.33333 8H12.6667"
  //                             stroke="currentColor"
  //                             strokeWidth="2"
  //                             strokeLinecap="round"
  //                             strokeLinejoin="round"
  //                           />
  //                         </svg>
  //                       </button>
  //                       <div className="w-0.5 h-4 bg-primary"></div>
  //                     </div>
  //                   )}

  //                   {/* Connecting line for analysis mode */}
  //                   {analysisMode && (
  //                     <div className="flex flex-col items-center my-2">
  //                       <div className="w-0.5 h-4 bg-primary"></div>
  //                     </div>
  //                   )}
  //                 </div>
  //               ))}

  //             {/* Show relocated nodes only on the first branch */}
  //             {index === 0 && relocatedNodes.length > 0 && (
  //               <div className="flex flex-col items-center">
  //                 {relocatedNodes.map((relocatedNode, nodeIndex) => (
  //                   <div
  //                     key={relocatedNode.id}
  //                     className="flex flex-col items-center"
  //                   >
  //                     {/* Render the relocated node based on its type */}
  //                     {relocatedNode.type === "end" ? (
  //                       <div className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start">
  //                         <div className="flex items-center justify-between">
  //                           <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-[#F7F7F7] mb-1">
  //                             <span className="text-heading text-[10px] font-bold">
  //                               {relocatedNode.data.title}
  //                             </span>
  //                           </div>
  //                         </div>

  //                         {/* Analysis metrics for relocated END node */}
  //                         {analysisMode && (
  //                           <div className="grid grid-cols-3 gap-2 mt-2">
  //                             <div className="text-center flex flex-col gap-1">
  //                               <span className="text-green-600 text-[10px] font-medium">
  //                                 Automated
  //                               </span>
  //                               <strong className="text-heading font-bold text-sm !leading-normal">
  //                                 2
  //                               </strong>
  //                             </div>
  //                             <div className="text-center flex flex-col gap-1">
  //                               <span className="text-red-500 text-[10px] font-medium">
  //                                 Drop off
  //                               </span>
  //                               <strong className="text-heading font-bold text-sm !leading-normal">
  //                                 3
  //                               </strong>
  //                             </div>
  //                             <div className="text-center flex flex-col gap-1">
  //                               <span className="text-[#858585] text-[10px] font-medium">
  //                                 Tickets
  //                               </span>
  //                               <strong className="text-heading font-bold text-sm !leading-normal">
  //                                 0
  //                               </strong>
  //                             </div>
  //                           </div>
  //                         )}
  //                       </div>
  //                     ) : (
  //                       <div className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start">
  //                         <div className="flex items-center justify-between">
  //                           <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-primary/10 mb-1">
  //                             <span className="text-primary font-semibold text-[10px]">
  //                               {relocatedNode.data.title}
  //                             </span>
  //                           </div>
  //                         </div>
  //                         <span className="text-heading font-medium text-sm">
  //                           {relocatedNode.data.content}
  //                         </span>

  //                         {/* Analysis metrics for relocated nodes */}
  //                         {analysisMode && (
  //                           <div className="flex justify-center gap-4 mt-2">
  //                             <div className="text-center flex flex-col gap-1">
  //                               <span className="text-[#858585] text-[10px] font-medium">
  //                                 Views
  //                               </span>
  //                               <strong className="text-heading font-bold text-sm !leading-normal">
  //                                 -
  //                               </strong>
  //                             </div>
  //                             <div className="text-center flex flex-col gap-1">
  //                               <span className="text-red-500 text-[10px] font-medium">
  //                                 Drop off
  //                               </span>
  //                               <strong className="text-heading font-bold text-sm !leading-normal">
  //                                 -
  //                               </strong>
  //                             </div>
  //                           </div>
  //                         )}
  //                       </div>
  //                     )}

  //                     {/* Add connecting line if not the last relocated node */}
  //                     {nodeIndex < relocatedNodes.length - 1 && (
  //                       <div className="w-0.5 h-4 bg-primary my-1"></div>
  //                     )}
  //                   </div>
  //                 ))}
  //               </div>
  //             )}

  //             {/* Show individual END nodes only for branches without relocated nodes and no additional chain nodes */}
  //             {!(index === 0 && relocatedNodes.length > 0) &&
  //               (!branchChains[branch.id] ||
  //                 branchChains[branch.id].length === 0) && (
  //                 <div className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start">
  //                   <div className="flex items-center justify-between">
  //                     <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-[#F7F7F7] mb-1">
  //                       <span className="text-heading text-[10px] font-bold">
  //                         END
  //                       </span>
  //                     </div>
  //                   </div>

  //                   {/* Analysis metrics for individual END nodes */}
  //                   {analysisMode && (
  //                     <div className="grid grid-cols-3 gap-2 mt-2">
  //                       <div className="text-center flex flex-col gap-1">
  //                         <span className="text-green-600 text-[10px] font-medium">
  //                           Automated
  //                         </span>
  //                         <strong className="text-heading font-bold text-sm !leading-normal">
  //                           2
  //                         </strong>
  //                       </div>
  //                       <div className="text-center flex flex-col gap-1">
  //                         <span className="text-red-500 text-[10px] font-medium">
  //                           Drop off
  //                         </span>
  //                         <strong className="text-heading font-bold text-sm !leading-normal">
  //                           3
  //                         </strong>
  //                       </div>
  //                       <div className="text-center flex flex-col gap-1">
  //                         <span className="text-[#858585] text-[10px] font-medium">
  //                           Tickets
  //                         </span>
  //                         <strong className="text-heading font-bold text-sm !leading-normal">
  //                           0
  //                         </strong>
  //                       </div>
  //                     </div>
  //                   )}
  //                 </div>
  //               )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const BranchContainerDisplay = () => {
    const node = useContext(NodeContext);
    const branches = node.data.branches || [];
    const relocatedNodes = node.data.relocatedNodes || [];
    const firstBranchId = node.data.firstBranchId;
    const branchChains = node.data.branchChains || {};

    return (
      <div className="flex flex-col items-center w-full">
        {/* Connecting lines from multiple choice to branches */}
        <div className="flex justify-center items-start w-full mb-2">
          <div className="w-0.5 h-4 bg-primary"></div>
        </div>

        {/* Horizontal branch nodes */}
        <div className="flex justify-center items-start gap-6 w-full mb-2">
          {branches.map((branch, index) => (
            <div key={branch.id} className="flex flex-col items-center">
              {/* Individual branch node */}
              <div
                className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setSidePanel({
                    open: true,
                    type: "message",
                    nodeId: branch.id,
                    data: {
                      currentText: branch.data.content,
                      nodeType: "branch-response",
                      config: {},
                      isEditing: true,
                    },
                  });
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-primary/10 mb-1">
                    <span className="text-primary font-semibold text-[10px]">
                      {branch.data.title}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-heading font-medium text-sm">
                    {branch.data.content}
                  </span>
                  <div className="mt-1 text-[10px] text-gray-500">
                    Choice: {branch.data.parentChoice}
                  </div>
                </div>

                {/* Analysis metrics for branch nodes */}
                {analysisMode && (
                  <div className="flex justify-center gap-4 mt-2">
                    <div className="text-center flex flex-col gap-1">
                      <span className="text-[#858585] text-[10px] font-medium">
                        Views
                      </span>
                      <strong className="text-heading font-bold text-sm !leading-normal">
                        -
                      </strong>
                    </div>
                    <div className="text-center flex flex-col gap-1">
                      <span className="text-red-500 text-[10px] font-medium">
                        Drop off
                      </span>
                      <strong className="text-heading font-bold text-sm !leading-normal">
                        -
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              {/* FIXED: Always show connecting line after branch node */}
              <div className="flex flex-col items-center my-2">
                <div className="w-0.5 h-4 bg-primary"></div>
                {!analysisMode && (
                  <>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedNodeForAdd(branch.id);
                        setShowModal(true);
                      }}
                      className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors z-10 shadow-lg"
                    >
                      <svg
                        width="12"
                        height="12"
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
                    <div className="w-0.5 h-4 bg-primary"></div>
                  </>
                )}
              </div>

              {/* Show additional nodes added to this branch */}
              {branchChains[branch.id] &&
                branchChains[branch.id].map((chainNode, chainIndex) => (
                  <div
                    key={chainNode.id}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setSidePanel({
                          open: true,
                          type: "message",
                          nodeId: chainNode.id,
                          data: {
                            currentText: chainNode.data.content,
                            nodeType: chainNode.data.nodeType || "message",
                            config: chainNode.data.config || {},
                            isEditing: true,
                          },
                        });
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-primary/10 mb-1">
                          <span className="text-primary font-semibold text-[10px]">
                            {chainNode.data.title}
                          </span>
                        </div>
                      </div>
                      <span className="text-heading font-medium text-sm">
                        {chainNode.data.content}
                      </span>

                      {/* Analysis metrics for chain nodes */}
                      {analysisMode && (
                        <div className="flex justify-center gap-4 mt-2">
                          <div className="text-center flex flex-col gap-1">
                            <span className="text-[#858585] text-[10px] font-medium">
                              Views
                            </span>
                            <strong className="text-heading font-bold text-sm !leading-normal">
                              -
                            </strong>
                          </div>
                          <div className="text-center flex flex-col gap-1">
                            <span className="text-red-500 text-[10px] font-medium">
                              Drop off
                            </span>
                            <strong className="text-heading font-bold text-sm !leading-normal">
                              -
                            </strong>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* FIXED: Always show connecting line after chain node */}
                    <div className="flex flex-col items-center my-2">
                      <div className="w-0.5 h-4 bg-primary"></div>
                      {!analysisMode && (
                        <>
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              setSelectedNodeForAdd(chainNode.id);
                              setShowModal(true);
                            }}
                            className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors z-10 shadow-lg"
                          >
                            <svg
                              width="12"
                              height="12"
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
                          <div className="w-0.5 h-4 bg-primary"></div>
                        </>
                      )}
                    </div>
                  </div>
                ))}

              {/* Show relocated nodes only on the first branch */}
              {index === 0 && relocatedNodes.length > 0 && (
                <div className="flex flex-col items-center">
                  {relocatedNodes.map((relocatedNode, nodeIndex) => (
                    <div
                      key={relocatedNode.id}
                      className="flex flex-col items-center"
                    >
                      {/* Render the relocated node based on its type */}
                      {relocatedNode.type === "end" ? (
                        <div
                          className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            if (!analysisMode) {
                              setSidePanel({
                                open: true,
                                type: "end",
                                nodeId: relocatedNode.id,
                                data: {
                                  currentText: relocatedNode.data.content,
                                  currentSubtitle: relocatedNode.data.subtitle,
                                  isEditing: true,
                                },
                              });
                            }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-[#F7F7F7] mb-1">
                              <span className="text-heading text-[10px] font-bold">
                                {relocatedNode.data.title}
                              </span>
                            </div>
                          </div>

                          {/* Analysis metrics for relocated END node */}
                          {analysisMode && (
                            <div className="grid grid-cols-3 gap-2 mt-2">
                              <div className="text-center flex flex-col gap-1">
                                <span className="text-green-600 text-[10px] font-medium">
                                  Automated
                                </span>
                                <strong className="text-heading font-bold text-sm !leading-normal">
                                  2
                                </strong>
                              </div>
                              <div className="text-center flex flex-col gap-1">
                                <span className="text-red-500 text-[10px] font-medium">
                                  Drop off
                                </span>
                                <strong className="text-heading font-bold text-sm !leading-normal">
                                  3
                                </strong>
                              </div>
                              <div className="text-center flex flex-col gap-1">
                                <span className="text-[#858585] text-[10px] font-medium">
                                  Tickets
                                </span>
                                <strong className="text-heading font-bold text-sm !leading-normal">
                                  0
                                </strong>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            if (!analysisMode) {
                              setSidePanel({
                                open: true,
                                type: "message",
                                nodeId: relocatedNode.id,
                                data: {
                                  currentText: relocatedNode.data.content,
                                  nodeType: relocatedNode.data.nodeType || "message",
                                  config: relocatedNode.data.config || {},
                                  isEditing: true,
                                },
                              });
                            }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-primary/10 mb-1">
                              <span className="text-primary font-semibold text-[10px]">
                                {relocatedNode.data.title}
                              </span>
                            </div>
                          </div>
                          <span className="text-heading font-medium text-sm">
                            {relocatedNode.data.content}
                          </span>

                          {/* Analysis metrics for relocated nodes */}
                          {analysisMode && (
                            <div className="flex justify-center gap-4 mt-2">
                              <div className="text-center flex flex-col gap-1">
                                <span className="text-[#858585] text-[10px] font-medium">
                                  Views
                                </span>
                                <strong className="text-heading font-bold text-sm !leading-normal">
                                  -
                                </strong>
                              </div>
                              <div className="text-center flex flex-col gap-1">
                                <span className="text-red-500 text-[10px] font-medium">
                                  Drop off
                                </span>
                                <strong className="text-heading font-bold text-sm !leading-normal">
                                  -
                                </strong>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* FIXED: Always show connecting line between relocated nodes */}
                      {nodeIndex < relocatedNodes.length - 1 && (
                        <div className="w-0.5 h-4 bg-primary my-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Show individual END nodes only for branches without relocated nodes and no additional chain nodes */}
              {!(index === 0 && relocatedNodes.length > 0) &&
                (!branchChains[branch.id] ||
                  branchChains[branch.id].length === 0) && (
                  <div
                    className="p-3 rounded-xl border border-primary bg-white flex flex-col gap-2 w-[200px] relative z-1 text-start cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      if (!analysisMode) {
                        setSidePanel({
                          open: true,
                          type: "end",
                          nodeId: `end-${branch.id}`,
                          data: {
                            currentText: "Ask for feedback",
                            currentSubtitle: "Ask for feedback",
                            isEditing: true,
                          },
                        });
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-[#F7F7F7] mb-1">
                        <span className="text-heading text-[10px] font-bold">
                          END
                        </span>
                      </div>
                    </div>

                    {/* Analysis metrics for individual END nodes */}
                    {analysisMode && (
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="text-center flex flex-col gap-1">
                          <span className="text-green-600 text-[10px] font-medium">
                            Automated
                          </span>
                          <strong className="text-heading font-bold text-sm !leading-normal">
                            2
                          </strong>
                        </div>
                        <div className="text-center flex flex-col gap-1">
                          <span className="text-red-500 text-[10px] font-medium">
                            Drop off
                          </span>
                          <strong className="text-heading font-bold text-sm !leading-normal">
                            3
                          </strong>
                        </div>
                        <div className="text-center flex flex-col gap-1">
                          <span className="text-[#858585] text-[10px] font-medium">
                            Tickets
                          </span>
                          <strong className="text-heading font-bold text-sm !leading-normal">
                            0
                          </strong>
                        </div>
                      </div>
                    )}
                  </div>
                )}
            </div>
          ))}
        </div>
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
    },
    {
      type: "branch-container",
      name: "Branch Container",
      displayComponent: BranchContainerDisplay,
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
                {sidePanel.type === "start"
                  ? "Start"
                  : getNodeDisplayName(sidePanel.type)}
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
            {sidePanel.type === "message" && (
              <MessagePanel
                onSubmit={handleSidePanelSubmit}
                currentText={sidePanel.data.currentText}
                nodeId={sidePanel.nodeId}
              />
            )}
            {sidePanel.type === "end" && (
              <EndPanel
                onSubmit={handleSidePanelSubmit}
                currentText={sidePanel.data.currentText}
                currentSubtitle={sidePanel.data.currentSubtitle}
                nodeId={sidePanel.nodeId}
              />
            )}
            {sidePanel.type === "multiple-choice" && (
              <MultipleChoicePanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
            {sidePanel.type === "text-reply" && (
              <TextReplyPanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
            {sidePanel.type === "file-upload" && (
              <FileUploadPanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
            {sidePanel.type === "automated-answer" && (
              <AutomatedAnswerPanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
            {sidePanel.type === "customer-login" && (
              <CustomerLoginPanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
            {sidePanel.type === "order-selection" && (
              <OrderSelectionPanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
            {sidePanel.type === "item-selection" && (
              <ItemSelectionPanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
            {sidePanel.type === "http-request" && (
              <HttpRequestPanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
            {sidePanel.type === "conditions" && (
              <ConditionsPanel
                onSubmit={handleSidePanelSubmit}
                data={sidePanel.data}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  // Handlers for pan and zoom on the viewport
  const handleWheel = (event) => {
    // Zoom on pinch (trackpad) or ctrl/meta + wheel
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      const rect = viewportRef.current?.getBoundingClientRect();
      const mouseX = event.clientX - (rect?.left || 0);
      const mouseY = event.clientY - (rect?.top || 0);
      // Convert to world coordinates
      const worldX = (mouseX - viewportOffset.x) / viewportScale;
      const worldY = (mouseY - viewportOffset.y) / viewportScale;
      const delta = -event.deltaY;
      const factor = delta > 0 ? 1.05 : 0.95;
      const newScale = Math.min(2.5, Math.max(0.5, viewportScale * factor));
      // Keep cursor position stable during zoom
      const newOffsetX = mouseX - worldX * newScale;
      const newOffsetY = mouseY - worldY * newScale;
      setViewportScale(newScale);
      setViewportOffset({ x: newOffsetX, y: newOffsetY });
    }
  };

  const handleMouseDownCapture = (event) => {
    // Left-button drag to pan
    if (event.button !== 0) return;
    if (isInteractiveElement(event.target)) return; // allow UI interactions
    setIsPanning(true);
    panStartRef.current = { x: event.clientX, y: event.clientY };
    offsetStartRef.current = { ...viewportOffset };
  };

  const handleMouseMove = (event) => {
    if (!isPanning) return;
    const dx = event.clientX - panStartRef.current.x;
    const dy = event.clientY - panStartRef.current.y;
    setViewportOffset({
      x: offsetStartRef.current.x + dx,
      y: offsetStartRef.current.y + dy,
    });
  };

  const endPan = () => setIsPanning(false);

  // Touch support for panning
  const handleTouchStartCapture = (event) => {
    if (event.touches.length !== 1) return;
    if (isInteractiveElement(event.target)) return;
    const t = event.touches[0];
    setIsPanning(true);
    panStartRef.current = { x: t.clientX, y: t.clientY };
    offsetStartRef.current = { ...viewportOffset };
  };

  const handleTouchMove = (event) => {
    if (!isPanning || event.touches.length !== 1) return;
    const t = event.touches[0];
    const dx = t.clientX - panStartRef.current.x;
    const dy = t.clientY - panStartRef.current.y;
    setViewportOffset({
      x: offsetStartRef.current.x + dx,
      y: offsetStartRef.current.y + dy,
    });
  };

  const handleTouchEnd = () => setIsPanning(false);

  // Center the canvas on first render
  useLayoutEffect(() => {
    if (hasCenteredRef.current) return;
    const viewportEl = viewportRef.current;
    const contentEl = contentRef.current;
    if (!viewportEl || !contentEl) return;

    // Defer to ensure sizes are computed
    const raf = requestAnimationFrame(() => {
      const vw = viewportEl.clientWidth;
      const vh = viewportEl.clientHeight;
      const cw = contentEl.offsetWidth;
      const ch = contentEl.offsetHeight;
      if (vw && vh && cw && ch) {
        const offsetX = (vw - cw * viewportScale) / 2;
        const offsetY = (vh - ch * viewportScale) / 2;
        setViewportOffset({ x: offsetX, y: offsetY });
        hasCenteredRef.current = true;
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [viewportScale]);

  return (
    <div
      ref={viewportRef}
      className="pb-6 md:pb-8 lg:pb-10 h-[600px] rounded-lg overflow-hidden"
      onWheel={handleWheel}
      onMouseDownCapture={handleMouseDownCapture}
      onMouseMove={handleMouseMove}
      onMouseUp={endPan}
      onMouseLeave={endPan}
      onTouchStartCapture={handleTouchStartCapture}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isPanning ? "grabbing" : "grab", position: "relative" }}
    >
      <div
        ref={contentRef}
        style={{
          transform: `translate(${viewportOffset.x}px, ${viewportOffset.y}px) scale(${viewportScale})`,
          transformOrigin: "0 0",
          width: "max-content",
          height: "max-content",
        }}
      >
        <FlowBuilder
          nodes={nodes}
          onChange={handleNodesChange}
          registerNodes={registerNodes}
          backgroundColor="inherit"
          layout="vertical"
          spaceX={15}
          spaceY={10}
          className="flow-builder-container min-h-full bg-inherit"
          readonly={false}
          customLineComponent={CustomLineComponent}
        />
      </div>
      {!analysisMode && renderSidePanel()}

      {!analysisMode &&
        showModal &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-2xl shadow-xl max-w-[500px] w-full max-h-[80vh] overflow-y-auto m-4">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Add Step
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600"
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

                <div className="space-y-3">
                  {nodeTypes.map((nodeType, index) => (
                    <button
                      key={nodeType.type}
                      onClick={() => handleAddNode(nodeType.type)}
                      className="w-full p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 flex items-center gap-4 text-left group"
                    >
                      {nodeType.icon}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">
                          {nodeType.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {nodeType.description}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

// Side Panel Components (keeping all existing functionality)
const StartPanel = ({ onSubmit, currentText }) => {
  const [triggerText, setTriggerText] = useState(currentText || "");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validate required field
    if (!triggerText.trim()) {
      setError("Trigger button text is required");
      return;
    }

    setError("");
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
          onChange={(e) => {
            setTriggerText(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${error ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="Enter trigger button text..."
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
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

const MessagePanel = ({ onSubmit, currentText, nodeId }) => {
  const [messageText, setMessageText] = useState(currentText || "");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validate required field
    if (!messageText.trim()) {
      setError("Message content is required");
      return;
    }

    setError("");
    onSubmit({ messageText, nodeId });
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message Content <span className="text-red-500">*</span>
        </label>
        <textarea
          value={messageText}
          onChange={(e) => {
            setMessageText(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${error ? "border-red-500" : "border-gray-300"
            }`}
          rows="4"
          placeholder="Enter message content..."
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        <p className="text-xs text-gray-500 mt-2">
          This message will be displayed to customers in the flow.
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

const EndPanel = ({ onSubmit, currentText, currentSubtitle, nodeId }) => {
  const [endText, setEndText] = useState(currentText || "Ask for feedback");
  const [endSubtitle, setEndSubtitle] = useState(
    currentSubtitle || "Ask for feedback"
  );
  const [selectedAction, setSelectedAction] = useState("Ask for feedback");

  const actionOptions = [
    "Ask for feedback",
    "Create ticket",
    "End interaction",
  ];

  const handleSubmit = () => {
    onSubmit({
      endText: selectedAction,
      endSubtitle: selectedAction,
      nodeId,
    });
  };

  const renderActionContent = () => {
    switch (selectedAction) {
      case "Ask for feedback":
        return (
          <div className="mb-6">
            {/* Preview of the feedback interface */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-4">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Was this helpful?
                </h3>
                <div className="flex justify-center gap-4 mb-6">
                  <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg">
                    Yes, thank you
                  </button>
                  <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg">
                    No, I need more help
                  </button>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Customers will be asked for feedback and a ticket is created in
              the channel if customers select "No, I need more help". Feedback
              will always be requested in the channel language.
            </p>

            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                If ticket is created
              </h4>

              <div className="mb-3">
                <button className="text-sm text-primary hover:underline flex items-center gap-1">
                  <span>+</span> Add Tags
                </button>
              </div>

              <div>
                <select className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-100">
                  <option>Unassigned ▼</option>
                  <option>Assign yourself</option>
                  <option>Mian Asad Ali</option>
                  <option>RyanMkd</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "Create ticket":
        return (
          <div className="mb-6">
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                When ticket is created
              </h4>

              <div className="mb-3">
                <button className="text-sm text-primary hover:underline flex items-center gap-1">
                  <span>+</span> Add Tags
                </button>
              </div>

              <div>
                <select className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-100">
                  <option>Unassigned ▼</option>
                  <option>Assign yourself</option>
                  <option>Mian Asad Ali</option>
                  <option>RyanMkd</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "End interaction":
        return (
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              The interaction will end and be considered automated. Customers
              will not be able to create a ticket and must leave the flow to ask
              for further support.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Action <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
          >
            {actionOptions.map((option) => (
              <option key={option} value={option}>
                {option === "Ask for feedback" && "👍"} {option}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {renderActionContent()}

      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Save
      </button>
    </div>
  );
};

const MultipleChoicePanel = ({ onSubmit, data }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["Option 1", "Option 2"]);
  const [error, setError] = useState("");

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, `Option ${options.length + 1}`]);
    }
  };

  const removeOption = (index) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    // Validate required field
    if (!question.trim()) {
      setError("Question is required");
      return;
    }

    // Validate options are not empty
    const emptyOptions = options.filter((option) => !option.trim());
    if (emptyOptions.length > 0) {
      setError("All options must have text");
      return;
    }

    setError("");
    onSubmit({ question, options });
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Question <span className="text-red-500">*</span>
        </label>
        <textarea
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${error ? "border-red-500" : "border-gray-300"
            }`}
          rows="3"
          placeholder="Enter your question..."
          maxLength={5000}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500">{question.length}/5000</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Options
        </label>
        {options.map((option, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              value={option}
              onChange={(e) => updateOption(index, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder={`Option ${index + 1}`}
            />
          </div>
        ))}

        {options.length < 6 && (
          <button
            onClick={addOption}
            className="text-primary font-medium text-sm flex items-center gap-1 mt-2"
          >
            + Add Option
          </button>
        )}
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

const TextReplyPanel = ({ onSubmit, data }) => {
  const [question, setQuestion] = useState("");
  const [placeholder, setPlaceholder] = useState("Type your answer here...");
  const [maxLength, setMaxLength] = useState(1000);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validate required field
    if (!question.trim()) {
      setError("Question is required");
      return;
    }

    setError("");
    onSubmit({ question, placeholder, maxLength });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Question <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${error ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="What would you like to ask?"
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Placeholder Text
        </label>
        <input
          type="text"
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Placeholder text..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Max Characters
        </label>
        <select
          value={maxLength}
          onChange={(e) => setMaxLength(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value={500}>500 characters</option>
          <option value={1000}>1,000 characters</option>
          <option value={2500}>2,500 characters</option>
          <option value={5000}>5,000 characters</option>
        </select>
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

const FileUploadPanel = ({ onSubmit, data }) => {
  const [question, setQuestion] = useState("");
  const [maxFiles, setMaxFiles] = useState(1);
  const [allowedTypes, setAllowedTypes] = useState(["image", "document"]);
  const [error, setError] = useState("");

  const handleTypeChange = (type) => {
    setAllowedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = () => {
    // Validate required field
    if (!question.trim()) {
      setError("Question is required");
      return;
    }

    // Validate at least one file type is selected
    if (allowedTypes.length === 0) {
      setError("At least one file type must be selected");
      return;
    }

    setError("");
    onSubmit({ question, maxFiles, allowedTypes });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Question <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${error ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="Please upload your file"
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Max Files
        </label>
        <select
          value={maxFiles}
          onChange={(e) => setMaxFiles(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value={1}>1 file</option>
          <option value={3}>3 files</option>
          <option value={5}>5 files</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Allowed File Types
        </label>
        <div className="space-y-2">
          {["image", "document", "video"].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={allowedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="mr-2"
              />
              <span className="capitalize">{type}s</span>
            </label>
          ))}
        </div>
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

const AutomatedAnswerPanel = ({ onSubmit, data }) => {
  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validate required field
    if (!message.trim()) {
      setError("Message is required");
      return;
    }

    setError("");
    onSubmit({ message, delay });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${error ? "border-red-500" : "border-gray-300"
            }`}
          rows="4"
          placeholder="Enter your automated response..."
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Delay (seconds)
        </label>
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          min="0"
          max="60"
        />
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

const CustomerLoginPanel = ({ onSubmit, data }) => {
  const [method, setMethod] = useState("email");
  const [required, setRequired] = useState(true);

  const handleSubmit = () => {
    onSubmit({ method, required });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Login Method
        </label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="email">Email</option>
          <option value="phone">Phone Number</option>
          <option value="order">Order Number</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={required}
            onChange={(e) => setRequired(e.target.checked)}
            className="mr-2"
          />
          <span>Required to continue</span>
        </label>
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

const OrderSelectionPanel = ({ onSubmit, data }) => {
  const [maxOrders, setMaxOrders] = useState(5);
  const [sortBy, setSortBy] = useState("recent");

  const handleSubmit = () => {
    onSubmit({ maxOrders, sortBy });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Max Orders to Display
        </label>
        <select
          value={maxOrders}
          onChange={(e) => setMaxOrders(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value={3}>3 orders</option>
          <option value={5}>5 orders</option>
          <option value={10}>10 orders</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="recent">Most Recent</option>
          <option value="status">Order Status</option>
          <option value="amount">Order Amount</option>
        </select>
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

const ItemSelectionPanel = ({ onSubmit, data }) => {
  const [selectionType, setSelectionType] = useState("single");
  const [showImages, setShowImages] = useState(true);

  const handleSubmit = () => {
    onSubmit({ selectionType, showImages });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Selection Type
        </label>
        <select
          value={selectionType}
          onChange={(e) => setSelectionType(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="single">Single Item</option>
          <option value="multiple">Multiple Items</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showImages}
            onChange={(e) => setShowImages(e.target.checked)}
            className="mr-2"
          />
          <span>Show product images</span>
        </label>
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

const HttpRequestPanel = ({ onSubmit, data }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validate required field
    if (!url.trim()) {
      setError("URL is required");
      return;
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      setError("Please enter a valid URL");
      return;
    }

    setError("");
    onSubmit({ url, method, description });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="What does this request do?"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Method
        </label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          URL <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${error ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="https://api.example.com/endpoint"
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
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

const ConditionsPanel = ({ onSubmit, data }) => {
  const [variable, setVariable] = useState("");
  const [operator, setOperator] = useState("equals");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validate required fields
    if (!variable) {
      setError("Variable is required");
      return;
    }

    if (!value.trim()) {
      setError("Value is required");
      return;
    }

    setError("");
    onSubmit({ variable, operator, value, description });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Describe this condition"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Variable
        </label>
        <select
          value={variable}
          onChange={(e) => {
            setVariable(e.target.value);
            if (error) setError(""); // Clear error when user makes selection
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${error ? "border-red-500" : "border-gray-300"
            }`}
        >
          <option value="">Select variable...</option>
          <option value="user_type">User Type</option>
          <option value="order_status">Order Status</option>
          <option value="location">Location</option>
          <option value="previous_response">Previous Response</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Operator
        </label>
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="equals">Equals</option>
          <option value="not_equals">Not Equals</option>
          <option value="contains">Contains</option>
          <option value="greater_than">Greater Than</option>
          <option value="less_than">Less Than</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Value
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError(""); // Clear error when user starts typing
          }}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${error ? "border-red-500" : "border-gray-300"
            }`}
          placeholder="Enter value to compare"
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
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
