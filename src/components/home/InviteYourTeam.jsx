import React, { useState } from "react";
import Input from "../Input";
import Dropdown from "../Dropdown";

export default function InviteYourTeam() {
  // Replace single-role selection with multi-agent onboarding state
  const [agents, setAgents] = useState([{ name: "", email: "", roleId: null }]);

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

  // Handlers for dynamic agents list
  const addAgentRow = () => {
    setAgents((prev) => [...prev, { name: "", email: "", roleId: null }]);
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
