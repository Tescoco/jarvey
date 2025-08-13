import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import Input from "../../components/Input";
import { c_24, search as searchIcon } from "../../utilities/Classes";
import Modal from "../../components/Modal";
import TriggerModal from "../Triggers/TriggerModal";

export default function InstallTriggers() {
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
  const [installedTriggers, setInstalledTriggers] = useState([]);
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
                <tr key={idx} className="!border-b border-[#E2E4E9]">
                  <td className="md:text-sm text-[#0A0D14] font-medium">
                    {row.title}
                  </td>
                  <td className="md:text-sm text-[#0A0D14] font-medium">
                    {row.date}
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-2">
                      <button className="btn bg-off !px-2 !py-1 text-xs">
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
                    No installed triggers yet.
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
