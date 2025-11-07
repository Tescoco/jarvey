import React, { useMemo, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import Input from "../../components/Input";
import { c_24, search as searchIcon } from "../../utilities/Classes";
import Modal from "../../components/Modal";
import TriggerModal from "../Triggers/TriggerModal";

export default function InstallTriggers({ install }) {
  const CardItems = [
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
        {
          text: "Completed",
          variant: "success",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "warning",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
    {
      title: "Tag tickets by business hours",
      tag: [
        {
          text: "Auto Tag",
          variant: "primary",
        },
      ],
      des: "Tags tickets created during and outside business hours to track support performance and coverage",
      target: "7",
    },
  ];
  const [installedTriggers, setInstalledTriggers] = useState(
    install
      ? [
          {
            title: "Tag tickets by business hours",
            date: new Date().toLocaleDateString(),
          },
        ]
      : []
  );
  const [query, setQuery] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedTrigger, setSelectedTrigger] = useState(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return installedTriggers;
    return installedTriggers.filter((t) =>
      t.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [installedTriggers, query]);

  const openPreview = (item) => {
    setSelectedTrigger(item);
    setPreviewOpen(true);
  };

  const handleInstall = () => {
    if (!selectedTrigger) return;
    setInstalledTriggers((prev) => [
      { title: selectedTrigger.title, date: new Date().toLocaleDateString() },
      ...prev,
    ]);
    setPreviewOpen(false);
  };

  // Drag and drop functionality
  const dragItem = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (filteredIndex) => {
    // Find the actual index in the full installedTriggers array
    const draggedItem = filtered[filteredIndex];
    const actualIndex = installedTriggers.findIndex(
      (item) =>
        item.title === draggedItem.title && item.date === draggedItem.date
    );
    dragItem.current = actualIndex;
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (filteredDropIndex) => {
    if (dragItem.current === null) return;

    // Find the actual index in the full installedTriggers array
    const droppedItem = filtered[filteredDropIndex];
    const actualDropIndex = installedTriggers.findIndex(
      (item) =>
        item.title === droppedItem.title && item.date === droppedItem.date
    );

    if (dragItem.current !== actualDropIndex) {
      const copyItems = [...installedTriggers];
      [copyItems[dragItem.current], copyItems[actualDropIndex]] = [
        copyItems[actualDropIndex],
        copyItems[dragItem.current],
      ];
      setInstalledTriggers(copyItems);
    }
    dragItem.current = null;
    setIsDragging(false);
  };

  const handleDragEnd = () => {
    dragItem.current = null;
    setIsDragging(false);
  };

  const handleEdit = (item) => {
    // onboarding/trigger-setting?install=true
    if (window.location.pathname.includes("/onboarding")) {
      window.location.href = `/onboarding/trigger-setting?install=true&edit=true`;
    }
  };

  return (
    <>
      <div className={`${c_24} mb-5`}>
        <h4 className="text-base md:text-lg font-semibold !leading-normal mb-3">
          Installed Triggers
        </h4>
        <Input
          className="mb-3"
          type="text"
          placeholder="Search..."
          leftIcon={searchIcon}
          inputClass="!h-[36px]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="overflow-auto">
          <table className="w-full table">
            <thead>
              <tr className="bg-[#F6F8FA]">
                {["Trigger", "Date", "Actions"].map((item, idx) => (
                  <th
                    key={idx}
                    className="text-left text-sm text-[#525866] !font-normal py-2 px-3 last:text-right"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr
                  key={idx}
                  className={`!border-b border-[#E2E4E9] transition-opacity ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                  }`}
                  draggable
                  onDragStart={() => handleDragStart(idx)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={() => handleDrop(idx)}
                  onDragEnd={handleDragEnd}
                >
                  <td className="md:text-sm text-[#0A0D14] font-medium">
                    <div className="flex items-center gap-3">
                      <button className="cursor-move p-1 hover:bg-gray-100 rounded">
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.75 6.91666V6.99999C2.75 7.57529 2.28363 8.04166 1.70833 8.04166C1.13304 8.04166 0.666667 7.57529 0.666667 6.99999V6.91666C0.666667 6.34136 1.13304 5.87499 1.70833 5.87499C2.28363 5.87499 2.75 6.34136 2.75 6.91666ZM7.33333 6.91666V6.99999C7.33333 7.57529 6.86696 8.04166 6.29167 8.04166C5.71637 8.04166 5.25 7.57529 5.25 6.99999V6.91666C5.25 6.34136 5.71637 5.87499 6.29167 5.87499C6.86696 5.87499 7.33333 6.34136 7.33333 6.91666ZM6.29167 13.25C5.71637 13.25 5.25 12.7836 5.25 12.2083C5.25 11.633 5.71637 11.1667 6.29167 11.1667C6.86696 11.1667 7.33333 11.633 7.33333 12.2083C7.33333 12.7836 6.86696 13.25 6.29167 13.25ZM1.70833 13.25C1.13304 13.25 0.666667 12.7836 0.666667 12.2083C0.666667 11.633 1.13304 11.1667 1.70833 11.1667C2.28363 11.1667 2.75 11.633 2.75 12.2083C2.75 12.7836 2.28363 13.25 1.70833 13.25ZM6.29167 2.83333C5.71637 2.83333 5.25 2.36696 5.25 1.79166C5.25 1.21637 5.71637 0.749995 6.29167 0.749995C6.86696 0.749995 7.33333 1.21637 7.33333 1.79166C7.33333 2.36696 6.86696 2.83333 6.29167 2.83333ZM1.70833 2.83333C1.13304 2.83333 0.666667 2.36696 0.666667 1.79166C0.666667 1.21637 1.13304 0.749995 1.70833 0.749995C2.28363 0.749995 2.75 1.21637 2.75 1.79166C2.75 2.36696 2.28363 2.83333 1.70833 2.83333Z"
                            fill="#858585"
                            stroke="#858585"
                            strokeWidth="0.833333"
                          />
                        </svg>
                      </button>
                      <span>{row.title}</span>
                    </div>
                  </td>
                  <td className="md:text-sm text-[#0A0D14] font-medium">
                    {row.date}
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(row)}
                        className="btn bg-off !px-2 !py-1 text-xs"
                      >
                        Edit
                      </button>
                      <button
                        className="btn bg-off !px-2 !py-1 text-xs"
                        onClick={() =>
                          setInstalledTriggers((prev) =>
                            prev.filter((_, i) => i !== idx)
                          )
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td className="py-3 px-3 text-sm text-[#858585]" colSpan={3}>
                    No installed Triggers yet. Add one by clicking on a Trigger
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
        {CardItems.map((item, idx) => (
          <button
            type="button"
            onClick={() => openPreview(item)}
            className="text-left group border border-[#E2E4E9] rounded-lg lg:rounded-xl xl:rounded-2xl p-3 lg:p-4 cursor-pointer"
            key={idx}
          >
            <h4 className="text-[#0A0D14] text-sm lg:text-base font-semibold !leading-[1.5] mb-2 transition-all duration-300 group-hover:text-primary">
              {item.title}
            </h4>
            <div className="flex items-center gap-2 lg:gap-[10px] mb-2">
              {item.tag.map((tag, i) => (
                <Alert
                  key={i}
                  text={tag.text}
                  variant={`${tag.variant}`}
                  className="!min-h-6 !font-semibold"
                />
              ))}
            </div>
            <p className="text-[#858585] text-xs font-medium !leading-[1.4] mb-4 lg:mb-5 xl:mb-6">
              {item.des}
            </p>
            <p className="text-[#858585] text-xs font-medium !leading-[1.5]">
              Target up to{" "}
              <span className="text-[#7856FF]">
                {item.target} tickets/month
              </span>
            </p>
          </button>
        ))}
      </div>

      {previewOpen && selectedTrigger && (
        <Modal
          onClick={() => setPreviewOpen(false)}
          closeIconHide={false}
          innerClass="max-w-[720px]"
        >
          <TriggerModal
            title={selectedTrigger.title}
            onClick={() => setPreviewOpen(false)}
            onInstall={handleInstall}
          />
        </Modal>
      )}
    </>
  );
}
