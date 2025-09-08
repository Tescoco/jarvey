import React, { useMemo, useState } from "react";
import Input from "../Input";
import Dropdown from "../Dropdown";

export default function InviteYourTeam() {
  // Replace single-role selection with multi-agent onboarding state
  const [agents, setAgents] = useState([
    { name: "", email: "", roleId: null, selectedPermissions: [] },
  ]);
  const [openPermissions, setOpenPermissions] = useState({});

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
    {
      id: "custom",
      name: "Custom",
      description: "Select exactly which permissions this agent will have",
      permissions: [],
    },
  ];

  // Build a master list of available permissions from predefined roles
  const allAvailablePermissions = useMemo(() => {
    const set = new Set();
    Roles.forEach((r) => r.permissions?.forEach((p) => set.add(p)));
    return Array.from(set).sort();
  }, []);

  // Handlers for dynamic agents list
  const addAgentRow = () => {
    setAgents((prev) => [
      ...prev,
      { name: "", email: "", roleId: null, selectedPermissions: [] },
    ]);
  };

  const removeAgentRow = (indexToRemove) => {
    setAgents((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const updateAgentField = (indexToUpdate, field, value) => {
    setAgents((prev) =>
      prev.map((agent, index) =>
        index === indexToUpdate ? { ...agent, [field]: value } : agent
      )
    );
  };

  const handleRoleChange = (indexToUpdate, selectedRoleName) => {
    const matchedRole = Roles.find((r) => r.name === selectedRoleName);
    updateAgentField(
      indexToUpdate,
      "roleId",
      matchedRole ? matchedRole.id : null
    );
    // Reset custom permissions when switching roles
    if (matchedRole?.id !== "custom") {
      setAgents((prev) =>
        prev.map((agent, i) =>
          i === indexToUpdate ? { ...agent, selectedPermissions: [] } : agent
        )
      );
    }
  };

  const togglePermissions = (indexToToggle) => {
    setOpenPermissions((prev) => ({
      ...prev,
      [indexToToggle]: !prev[indexToToggle],
    }));
  };

  const handleInvite = () => {
    // Here you could submit the agents array to your API
    // Filtering out completely empty rows
    const payload = agents
      .map((a) => ({ ...a }))
      .filter((a) => a.name || a.email || a.roleId);
    // eslint-disable-next-line no-console
    console.log("Inviting agents:", payload);
  };

  const roleItems = Roles.map((r) => ({ name: r.name }));

  return (
    <div>
      <div>
        <div className="mb-4 md:mb-5">
          <h2 className="text-2xl text-black font-inter font-semibold leading-normal">
            Invite Agents
          </h2>
        </div>

        <div className="space-y-5">
          {agents.map((agent, idx) => {
            const selectedRoleName =
              Roles.find((r) => r.id === agent.roleId)?.name || "Select";
            return (
              <div key={idx} className="border border-gray-200 rounded-2xl p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
                  <Input
                    className="mb-0"
                    type="text"
                    placeholder="Type here"
                    label="Name"
                    required={true}
                    value={agent.name}
                    onChange={(e) =>
                      updateAgentField(idx, "name", e.target.value)
                    }
                  />
                  <Input
                    className="mb-0"
                    type="email"
                    placeholder="Type here"
                    label="Email"
                    required={true}
                    value={agent.email}
                    onChange={(e) =>
                      updateAgentField(idx, "email", e.target.value)
                    }
                  />
                  <Dropdown
                    className="mb-0"
                    placeholder="Select"
                    items={roleItems}
                    label="Role"
                    required={true}
                    value={selectedRoleName}
                    onChange={(val) => handleRoleChange(idx, val)}
                  />
                </div>
                {agent.roleId && (
                  <div className="mt-3">
                    <button
                      type="button"
                      className="text-primary text-sm font-medium"
                      onClick={() => togglePermissions(idx)}
                    >
                      {openPermissions[idx]
                        ? "Hide permissions"
                        : "View permissions"}
                    </button>
                    {openPermissions[idx] && (
                      <div className="mt-2 border border-gray-100 rounded-xl p-3 bg-gray-50">
                        {agent.roleId === "custom" ? (
                          <>
                            <p className="text-sm text-gray-700 font-medium mb-2">
                              Select permissions:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {allAvailablePermissions.map((perm) => {
                                const checked =
                                  agent.selectedPermissions.includes(perm);
                                return (
                                  <label
                                    key={perm}
                                    className="flex items-center gap-2 text-sm text-gray-700"
                                  >
                                    <input
                                      type="checkbox"
                                      className="h-4 w-4"
                                      checked={checked}
                                      onChange={(e) => {
                                        const { checked } = e.target;
                                        setAgents((prev) =>
                                          prev.map((a, i) => {
                                            if (i !== idx) return a;
                                            const next = new Set(
                                              a.selectedPermissions || []
                                            );
                                            if (checked) next.add(perm);
                                            else next.delete(perm);
                                            return {
                                              ...a,
                                              selectedPermissions:
                                                Array.from(next),
                                            };
                                          })
                                        );
                                      }}
                                    />
                                    <span>{perm}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-gray-700 font-medium mb-2">
                              Permissions for {selectedRoleName}:
                            </p>
                            <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-y-1 text-sm text-gray-600">
                              {Roles.find(
                                (r) => r.id === agent.roleId
                              )?.permissions.map((perm, pIdx) => (
                                <li key={pIdx}>{perm}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {agents.length > 1 && (
                  <div className="flex justify-end mt-3">
                    <button
                      type="button"
                      className="btn text-[#FE4234] border-[#FE4234] min-w-[120px] px-0"
                      onClick={() => removeAgentRow(idx)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex">
            <button
              type="button"
              className="btn text-primary border-primary min-w-[180px] px-0"
              onClick={addAgentRow}
            >
              Add another agent
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button className="btn text-primary border-primary min-w-[74px] px-0">
            Cancel
          </button>
          <button
            className="btn bg-primary text-white min-w-[140px] px-0"
            onClick={handleInvite}
          >
            Invite Agents
          </button>
        </div>
      </div>
    </div>
  );
}
