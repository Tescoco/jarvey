import React, { useMemo, useState } from "react";
import Top from "../../layouts/Top";
import Input from "../../components/Input";
import Switch from "../../components/Switch";

export default function FieldConditions() {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([
    {
      id: "sys-1",
      name: "[SYSTEM] Show call status for phone tickets",
      enabled: true,
      updatedAt: "05/30/2025",
      system: true,
    },
  ]);

  const filteredRows = useMemo(() => {
    if (!search.trim()) return rows;
    return rows.filter((r) =>
      r.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [rows, search]);

  const toggleRow = (id, checked) => {
    setRows((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              enabled: checked.target ? checked.target.checked : !!checked,
            }
          : r
      )
    );
  };

  const duplicateRow = (row) => {
    const copy = {
      ...row,
      id: `${row.id}-copy-${Date.now()}`,
      name: row.name.replace(/^\[SYSTEM\]\s*/i, ""),
    };
    setRows((prev) => [copy, ...prev]);
  };

  const deleteRow = (id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <>
      <Top title="Field Conditions">
        <div className="flex items-center gap-2 w-full justify-end">
          <div className="hidden md:block min-w-[260px]">
            <Input
              type="search"
              placeholder="Search condition..."
              inputClass="!h-[34px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className="btn !h-[34px] !min-w-[140px] !bg-primary !text-white"
            onClick={() =>
              (window.location.href = "/app/field-conditions/create")
            }
          >
            Create Condition
          </button>
        </div>
      </Top>
      <div className="p-4 md:p-5 lg:p-6">
        <div className="flex flex-col gap-2 mb-4">
          <a
            href="#"
            className="text-[#7856FF] text-[13px] font-medium !leading-[1.5] inline-flex items-center gap-2"
          >
            <span className="size-3 rounded-sm bg-[#7856FF]"></span>
            How to set up Field Conditions
          </a>
          <a
            href="#"
            className="text-[#7856FF] text-[13px] font-medium !leading-[1.5] inline-flex items-center gap-2"
          >
            <span className="size-3 rounded-sm bg-[#7856FF]"></span>
            Learn more about field visibility
          </a>
        </div>

        <div className="border border-stroke rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-[#F7F7F7] text-[#858585] text-[12px] font-medium p-3">
            <div className="col-span-8 md:col-span-9">Condition Name</div>
            <div className="hidden md:block md:col-span-2">Last Updated</div>
            <div className="col-span-4 md:col-span-1 text-right pr-1">
              &nbsp;
            </div>
          </div>

          {filteredRows.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-12 items-center p-3 border-t border-stroke"
            >
              <div className="col-span-8 md:col-span-9 flex items-center gap-3">
                <button title="drag" className="text-[#858585]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3H10M6 8H10M6 13H10"
                      stroke="#858585"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <Switch
                  id={`switch-${row.id}`}
                  checked={row.enabled}
                  onChange={(e) => toggleRow(row.id, e)}
                />
                <span className="text-[#0A0D14] text-sm">{row.name}</span>
              </div>
              <div className="hidden md:block md:col-span-2 text-xs text-[#858585]">
                {row.updatedAt}
              </div>
              <div className="col-span-4 md:col-span-1 flex items-center justify-end gap-3">
                <button
                  title="Duplicate"
                  onClick={() => duplicateRow(row)}
                  className="text-[#858585] hover:text-primary"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6.5V4.5C6 3.67157 6.67157 3 7.5 3H11.5C12.3284 3 13 3.67157 13 4.5V8.5C13 9.32843 12.3284 10 11.5 10H9.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <rect
                      x="3"
                      y="6"
                      width="7"
                      height="7"
                      rx="1.2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </button>
                <button
                  title="Delete"
                  onClick={() => deleteRow(row.id)}
                  className="text-[#FE4333] hover:opacity-80"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4H13"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 3H10"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5.5 6V12.5M10.5 6V12.5M8 6V12.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
