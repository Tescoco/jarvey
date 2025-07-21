import React, { useState } from "react";
import Top from "../../layouts/Top";
import TableFilter from "../../components/TableFilter";
import Switch from "../../components/Switch";
import Input from "../../components/Input";

// Modal component for Add/Edit Priority
const PriorityModal = ({
  isOpen,
  onClose,
  priority,
  onSave,
  isEdit = false,
}) => {
  const [formData, setFormData] = useState({
    priority: priority?.priority || "",
    response: priority?.response || "",
    resolve: priority?.resolve || "",
    status: priority?.status || true,
    isDefault: priority?.isDefault || false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const priorityOptions = ["Low", "Medium", "High", "Urgent"];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-heading">
            {isEdit ? "Edit Priority" : "Add New Priority"}
          </h2>
          <button
            onClick={onClose}
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority Level
            </label>
            <select
              value={formData.priority}
              onChange={(e) => handleChange("priority", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              required
            >
              <option value="">Select Priority</option>
              {priorityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Response Time
            </label>
            <input
              type="text"
              value={formData.response}
              onChange={(e) => handleChange("response", e.target.value)}
              placeholder="e.g., 1 week, 2 hours"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resolve Time
            </label>
            <input
              type="text"
              value={formData.resolve}
              onChange={(e) => handleChange("resolve", e.target.value)}
              placeholder="e.g., 2 weeks, 8 minutes"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <Switch
                id="status-switch"
                checked={formData.status}
                onChange={(checked) => handleChange("status", checked)}
              />
              <span className="text-sm font-medium text-gray-700">
                Active Status
              </span>
            </label>

            <label className="flex items-center gap-2">
              <Switch
                id="default-switch"
                checked={formData.isDefault}
                onChange={(checked) => handleChange("isDefault", checked)}
              />
              <span className="text-sm font-medium text-gray-700">
                Set as Default
              </span>
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              {isEdit ? "Update" : "Add"} Priority
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function TicketPriority() {
  const [modalTable, setModalTable] = useState([
    {
      id: 1,
      priority: "Low",
      response: "1 week",
      resolve: "2 week",
      status: true,
      isDefault: false,
    },
    {
      id: 2,
      priority: "Medium",
      response: "2 Hours",
      resolve: "2 Hours",
      status: true,
      isDefault: false,
    },
    {
      id: 3,
      priority: "Urgent",
      response: "2 Minutes",
      resolve: "8 Minutes",
      status: true,
      isDefault: false,
    },
    {
      id: 4,
      priority: "High",
      response: "1 Minutes",
      resolve: "1 Minutes",
      status: true,
      isDefault: true,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPriority, setEditingPriority] = useState(null);

  const handleAddNew = () => {
    setEditingPriority(null);
    setIsModalOpen(true);
  };

  const handleEdit = (priority) => {
    setEditingPriority(priority);
    setIsModalOpen(true);
  };

  const handleSave = (formData) => {
    if (editingPriority) {
      // Update existing priority
      setModalTable((prev) =>
        prev.map((item) =>
          item.id === editingPriority.id ? { ...item, ...formData } : item
        )
      );
    } else {
      // Add new priority
      const newPriority = {
        id: Date.now(),
        ...formData,
      };
      setModalTable((prev) => [...prev, newPriority]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this priority?")) {
      setModalTable((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <Top>
        <button className="btn bg-prim min-w-[77px]" onClick={handleAddNew}>
          Add New
        </button>
      </Top>
      <div className="p-4 lg:p-5">
        <TableFilter />
        <div className="overflow-auto">
          <table className="w-max xl:w-full">
            <thead>
              <tr className="bg-[#F6F8FA]">
                {[
                  "#",
                  "Priority",
                  "Response-Resolve",
                  "Status",
                  "Default",
                  "Actions",
                ].map((item, index) => (
                  <th
                    className="text-left text-sm text-[#525866] !font-normal py-2 px-3"
                    key={index}
                  >
                    {item}{" "}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modalTable.map((item, index) => (
                <tr key={item.id} className="border-b border-[#E2E4E9]">
                  <td className="px-3 py-2 md:py-3.5">{index + 1}</td>
                  <td className="px-3 py-2 md:py-3.5">
                    <span
                      className={`py-1 md:py-1.5 px-3 font-medium text-white  rounded-full !leading-[142%] ${
                        item.priority === "Low"
                          ? "bg-[#176448]"
                          : item.priority === "Medium"
                          ? "bg-[#FFC563]"
                          : item.priority === "Urgent"
                          ? "bg-[#9A2626]"
                          : item.priority === "High"
                          ? "bg-[#FE4333]"
                          : "bg-gray-500"
                      }`}
                    >
                      {item.priority}{" "}
                    </span>
                  </td>
                  <td className="px-3 py-2 md:py-3.5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`py-1 px-3 font-medium text-primary bg-primary/10  rounded-full !leading-[142%]`}
                      >
                        Response in: {item.response}{" "}
                      </span>
                      <span
                        className={`py-1 px-3 font-medium text-[#176448] bg-[#176448]/10  rounded-full !leading-[142%]`}
                      >
                        Resolve in: {item.resolve}{" "}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 md:py-3.5">
                    <div>
                      <Switch id={`s${item.id}`} checked={item.status} />
                    </div>
                  </td>
                  <td className="px-3 py-2 md:py-3.5">
                    <div>
                      <Switch id={`d${item.id}`} checked={item.isDefault} />
                    </div>
                  </td>
                  <td className="px-3 py-2 md:py-3.5">
                    <div className="flex items-center gap-3">
                      <button
                        className="hover:scale-110"
                        onClick={() => handleEdit(item)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.042 4.20824L12.4051 1.84509C13.056 1.19422 14.1113 1.19421 14.7622 1.84509L16.1551 3.23807C16.806 3.88894 16.806 4.94422 16.1551 5.59509L13.792 7.95824M10.042 4.20824L1.78015 12.4701C1.46759 12.7827 1.29199 13.2066 1.29199 13.6486V16.7082H4.35164C4.79366 16.7082 5.21759 16.5326 5.53015 16.2201L13.792 7.95824M10.042 4.20824L13.792 7.95824"
                            stroke="#7856FF"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.042 4.20824L12.4051 1.84509C13.056 1.19422 14.1113 1.19421 14.7622 1.84509L16.1551 3.23807C16.806 3.88894 16.806 4.94422 16.1551 5.59509L13.792 7.95824M10.042 4.20824L1.78015 12.4701C1.46759 12.7827 1.29199 13.2066 1.29199 13.6486V16.7082H4.35164C4.79366 16.7082 5.21759 16.5326 5.53015 16.2201L13.792 7.95824M10.042 4.20824L13.792 7.95824"
                            stroke="url(#paint0_linear_11013_2247)"
                            strokeOpacity="0.12"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_11013_2247"
                              x1="8.96765"
                              y1="1.35693"
                              x2="8.96765"
                              y2="16.7082"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                      <button
                        className="hover:scale-110"
                        onClick={() => handleDelete(item.id)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.69139 15.1491L4.31509 15.1088L3.69139 15.1491ZM14.3093 15.1491L13.6856 15.1088L13.6856 15.1088L14.3093 15.1491ZM1.29199 3.16675C0.946814 3.16675 0.666992 3.44657 0.666992 3.79175C0.666992 4.13693 0.946814 4.41675 1.29199 4.41675V3.16675ZM16.7087 4.41675C17.0538 4.41675 17.3337 4.13693 17.3337 3.79175C17.3337 3.44657 17.0538 3.16675 16.7087 3.16675V4.41675ZM7.75033 7.95841C7.75033 7.61324 7.4705 7.33341 7.12533 7.33341C6.78015 7.33341 6.50033 7.61324 6.50033 7.95841H7.75033ZM6.50033 12.5417C6.50033 12.8869 6.78015 13.1667 7.12533 13.1667C7.4705 13.1667 7.75033 12.8869 7.75033 12.5417H6.50033ZM11.5003 7.95841C11.5003 7.61324 11.2205 7.33341 10.8753 7.33341C10.5301 7.33341 10.2503 7.61324 10.2503 7.95841H11.5003ZM10.2503 12.5417C10.2503 12.8869 10.5301 13.1667 10.8753 13.1667C11.2205 13.1667 11.5003 12.8869 11.5003 12.5417H10.2503ZM11.6234 3.94753C11.7094 4.28182 12.0502 4.48306 12.3844 4.39702C12.7187 4.31098 12.92 3.97024 12.8339 3.63596L11.6234 3.94753ZM2.33496 3.83199L3.06768 15.1893L4.31509 15.1088L3.58236 3.75151L2.33496 3.83199ZM5.3546 17.3334H12.6461V16.0834H5.3546V17.3334ZM14.933 15.1893L15.6657 3.83199L14.4183 3.75151L13.6856 15.1088L14.933 15.1893ZM15.042 3.16675H2.95866V4.41675H15.042V3.16675ZM1.29199 4.41675H2.95866V3.16675H1.29199V4.41675ZM15.042 4.41675H16.7087V3.16675H15.042V4.41675ZM12.6461 17.3334C13.8544 17.3334 14.8552 16.3952 14.933 15.1893L13.6856 15.1088C13.6502 15.6569 13.1953 16.0834 12.6461 16.0834V17.3334ZM3.06768 15.1893C3.14548 16.3952 4.14623 17.3334 5.3546 17.3334V16.0834C4.80534 16.0834 4.35045 15.6569 4.31509 15.1088L3.06768 15.1893ZM6.50033 7.95841V12.5417H7.75033V7.95841H6.50033ZM10.2503 7.95841V12.5417H11.5003V7.95841H10.2503ZM9.00034 1.91675C10.2615 1.91675 11.3227 2.77928 11.6234 3.94753L12.8339 3.63596C12.3946 1.92884 10.8456 0.666748 9.00034 0.666748V1.91675ZM6.3773 3.94753C6.67799 2.77928 7.73922 1.91675 9.00034 1.91675V0.666748C7.15506 0.666748 5.60613 1.92884 5.16675 3.63596L6.3773 3.94753Z"
                            fill="#858585"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Priority Modal */}
      <PriorityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        priority={editingPriority}
        onSave={handleSave}
        isEdit={!!editingPriority}
      />
    </div>
  );
}
