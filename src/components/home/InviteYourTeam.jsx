import React, { useState } from "react";
import Input from "../Input";
import Dropdown from "../Dropdown";
import Checkbox from "../Checkbox";

export default function InviteYourTeam() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [expandedRole, setExpandedRole] = useState(null);

  const Status = [
    { name: "Status-1" },
    { name: "Status-2" },
    { name: "Status-3" },
  ];
  const asset = [
    { name: "Status-1" },
    { name: "Status-2" },
    { name: "Status-3" },
  ];

  const Roles = [
    {
      id: "admin",
      name: "Admin",
      description: "Full system access with all permissions",
      permissions: [
        "View dashboard",
        "Manage category",
        "Manage users",
        "Mail configuration",
        "Sms configuration",
        "System configuration",
        "Manage language",
        "Manage tickets",
        "Update tickets",
        "Assign tickets",
        "Delete tickets",
        "Chat module",
        "Manage tags",
        "Manage article",
        "Manage frontends",
        "Manage pages",
        "Manage contact",
        "Manage priorites",
        "Manage ticket status",
        "Manage product",
      ],
    },
    {
      id: "manager",
      name: "Manager",
      description: "Can manage tickets and view dashboard",
      permissions: [
        "View dashboard",
        "Manage tickets",
        "Update tickets",
        "Assign tickets",
        "Manage priorites",
        "Manage ticket status",
        "Chat module",
      ],
    },
    {
      id: "assistant_manager",
      name: "Assistant Manager",
      description: "Can manage users and basic configurations",
      permissions: [
        "View dashboard",
        "Manage users",
        "Manage category",
        "Manage tags",
        "Manage contact",
        "Chat module",
      ],
    },
    {
      id: "agent",
      name: "Agent",
      description: "Can handle tickets and customer interactions",
      permissions: [
        "View dashboard",
        "Update tickets",
        "Chat module",
        "Manage contact",
        "Manage tags",
      ],
    },
    {
      id: "viewer",
      name: "Viewer",
      description: "Read-only access to dashboard and basic information",
      permissions: ["View dashboard", "Manage contact"],
    },
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
  };

  const toggleRoleExpansion = (roleId) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <div>
      <div>
        <div className="mb-4 md:mb-5">
          <h2 className="text-2xl text-black font-inter font-semibold leading-normal">
            Create Agent
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-5">
          <div className="col-span-2 md:col-span-1">
            <div className={`w-full`}>
              <label
                htmlFor="drop"
                className={`relative z-[1] rounded-2xl border cursor-pointer border-primary bg-primary bg-opacity-[8%] min-h-[180px] lg:min-h-[291px]  mx-auto flex items-center flex-col justify-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                >
                  <path
                    d="M25.5003 40.0827V25.4993M25.5003 25.4993L30.7087 30.7077M25.5003 25.4993L20.292 30.7077M17.167 40.0827H15.0837C9.33069 40.0827 4.66699 35.419 4.66699 29.666C4.66699 24.3895 8.59024 20.0293 13.6788 19.3433C15.368 14.4393 20.0227 10.916 25.5003 10.916C32.4039 10.916 38.0003 16.5125 38.0003 23.416C42.6027 23.416 46.3337 27.147 46.3337 31.7493C46.3337 36.3517 42.6027 40.0827 38.0003 40.0827H33.8337"
                    stroke="#7856FF"
                    strokeWidth="2.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`mb-3 font-semibold !leading-[150%] text-[#0A0D14] text-center text-xs`}
                >
                  <span className={`block text-primary`}>Upload Image</span>
                </span>
                <input
                  type="file"
                  id="drop"
                  className="hidden"
                  name=""
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-5">
              <Dropdown
                className="mb-0"
                placeholder="Type here"
                items={Status}
                label="Type"
                required={true}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 mb-3 md:mb-4 lg:mb-5">
              <Input
                className="mb-1"
                type="text"
                placeholder="Type here"
                label="Name"
                required={true}
              />
              <Input
                className="mb-1"
                type="text"
                placeholder="Type here"
                label="Email"
                required={true}
              />
              <Input
                className="mb-1"
                type="text"
                placeholder="Type here"
                label="Phone"
                required={true}
              />
              <Input
                className="mb-1"
                type="text"
                placeholder="Type here"
                label="Username"
                required={true}
              />
              <Input
                className="mb-1"
                type="text"
                placeholder="Type here"
                label="Password"
                required={true}
              />
              <Input
                className="mb-1"
                type="text"
                placeholder="Type here"
                label="Confirm Password"
                required={true}
              />
            </div>
            <div className="mb-5">
              <Dropdown
                className="mb-0"
                placeholder="Type here"
                items={asset}
                label="Asset Categories"
                required={true}
              />
            </div>
            <label
              htmlFor=""
              className="block font-inter font-semibold text-sm !leading-normal text-heading mb-3"
            >
              Select Role<span className="text-[#FE4234]">*</span>
            </label>
            <div className="space-y-3">
              {Roles.map((role) => (
                <div
                  key={role.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedRole === role.id}
                        id={role.id}
                        onChange={() => handleRoleSelect(role.id)}
                      />
                      <div>
                        <label
                          htmlFor={role.id}
                          className="text-[#0A0D14] text-sm font-semibold cursor-pointer"
                        >
                          {role.name}
                        </label>
                        <p className="text-gray-600 text-xs mt-1">
                          {role.description}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleRoleExpansion(role.id)}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      {expandedRole === role.id
                        ? "Hide Permissions"
                        : "View Permissions"}
                    </button>
                  </div>

                  {expandedRole === role.id && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Permissions:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {role.permissions.map((permission, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-gray-600">
                              {permission}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="btn text-primary border-primary min-w-[74px] px-0">
            Cancel
          </button>
          <button className="btn bg-primary text-white min-w-[102px] px-0">
            Add Agent
          </button>
        </div>
      </div>
    </div>
  );
}
