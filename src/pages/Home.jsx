import React, { useState, useEffect } from "react";
import MainInner from "../components/MainInner";
import Checkbox from "../components/Checkbox";
import { c_24, arrow_down } from "../utilities/Classes";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";
import { useOnboardingProgress } from "../hooks/useOnboardingProgress";

export default function Home() {
  const {
    getProgressPercentage,
    getStepStatus,
    isStepCompleted,
    isStepSkipped,
  } = useOnboardingProgress();

  const [progressValue, setProgressValue] = useState(0);

  // Update progress when component mounts or progress changes
  useEffect(() => {
    setProgressValue(getProgressPercentage());
  }, [getProgressPercentage]);

  const data = [
    {
      heading: "Step Group 1: Get the Basics Connected",
      list: [
        {
          title: "Connect your store (1 min)",
          des: "Link your Shopify store to Jarvey",
          path: "/onboarding/connect-store",
          stepId: "connect-store",
        },
        {
          title: "Connect your support email",
          des: "Link your email to start receiving support tickets",
          path: "/onboarding/connect-support",
          stepId: "connect-support",
        },
        // {
        //   title: "Answer a test ticket (2 mins)",
        //   des: "Experience how ticketing works before going live.",
        //   path: "/onboarding/answer-ticket",
        //   stepId: "answer-ticket",
        // },
        {
          title: "Add your support channels (7 mins)",
          des: "Facebook, Instagram, WhatsApp.",
          path: "/onboarding/add-support-channels",
          stepId: "add-support-channels",
        },
        {
          title: "Invite your team (2 mins)",
          des: "Get your agents onboarded.",
          path: "/onboarding/invite-team",
          stepId: "invite-team",
        },
      ],
    },
    {
      heading: "Step Group 2: Boost Your Team Efficiency",
      list: [
        {
          title:
            "Reply with Predefined Responses to gain back hours per day (5 mins)",
          des: "Pre-written responses for faster replies. ",
          path: "/onboarding/predefined-responses",
          stepId: "predefined-responses",
        },
        {
          title:
            "Install Triggers to handle repetitive tasks automatically (5 mins)",
          des: "Automate common tasks so you can focus on your customers.",
          path: "/onboarding/install-triggers",
          stepId: "install-triggers",
        },
        {
          title: "Install Flows to reduce support load",
          des: "Create automated workflows for common scenarios.",
          path: "/onboarding/install-flows",
          stepId: "install-flows",
        },
      ],
    },
    {
      heading: "Step Group 3: Help Center",
      list: [
        {
          title: "Publish your first Help Center article  (3 min)",
          des: "Reduce tickets by letting customers self-serve.",
          path: "/onboarding/help-center",
          stepId: "help-center",
        },
      ],
    },
    {
      heading: "Step Group 4: Unlock AI Power",
      list: [
        {
          title: "Set up your AI Agent guidance and actions (5 min)",
          des: "Tell your AI how to handle common questions and actions.",
          path: "/onboarding/ai-power",
          stepId: "ai-power",
        },
        {
          title: "Train the AI Agent with your Guidance and Actions (5 min)",
          des: "Upload your knowledge base to empower your AI.",
          path: "/onboarding/ai-guidance",
          stepId: "ai-guidance",
        },
        {
          title: "Test your AI Agent",
          des: "Upload your knowledge base to empower your AI.",
          path: "/onboarding/ai-test",
          stepId: "ai-test",
        },
      ],
    },
    {
      heading: "Step Group 5: Stay in Control",
      list: [
        {
          title:
            "Setup SLAs to meet customer expectations and stay in control (3 min)",
          des: "Define response times and escalation rules.",
          path: "/onboarding/slas",
          stepId: "slas",
        },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#F7F5FF]">
        <MainInner>
          <div className="max-w-4xl mx-auto pt-8 pb-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#0A0D14] mb-4">
                Welcome to Jarvey AI
              </h1>
              <p className="text-lg text-[#525866] mb-6">
                Get set up in under 5 steps
              </p>
              {progressValue === 100 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-green-800 font-medium">
                      🎉 Congratulations! You've completed the onboarding
                      process.
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-center gap-6 max-w-md mx-auto">
                <ProgressBar
                  value={progressValue}
                  className="bg-white h-[14px] grow"
                />
                <p className="text-heading text-sm font-medium">
                  {progressValue}% Complete
                </p>
              </div>
            </div>

            {/* Onboarding Steps */}
            <div className="flex flex-col gap-6">
              {data.map((group, groupIndex) => (
                <div key={groupIndex} className={`${c_24}`}>
                  <h2 className="text-heading font-inter text-xl font-semibold !leading-normal mb-6">
                    {group.heading}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {group.list.map((item, stepIndex) => (
                      <Link
                        key={stepIndex}
                        to={item.path}
                        className="group hover:bg-[#F7F7F7] transition-all duration-200 rounded-lg"
                      >
                        <div className="flex items-center justify-between border-b border-[#E2E4E9] py-4 px-4">
                          <div className="flex items-center gap-4">
                            <Checkbox
                              checked={isStepCompleted(item.stepId)}
                              id={`step-${groupIndex}-${stepIndex}`}
                              type="radio"
                            />
                            <div>
                              <h3
                                className={`text-[#0A0D14] text-base font-inter font-semibold !leading-[150%] group-hover:text-[#7856FF] transition-colors ${
                                  isStepCompleted(item.stepId)
                                    ? "line-through text-[#858585]"
                                    : ""
                                } ${
                                  isStepSkipped(item.stepId)
                                    ? "text-[#858585]"
                                    : ""
                                }`}
                              >
                                {item.title}
                              </h3>
                              {item.des && (
                                <p
                                  className={`text-sm text-[#525866] font-medium !leading-[1.4] mt-1 ${
                                    isStepCompleted(item.stepId) ||
                                    isStepSkipped(item.stepId)
                                      ? "text-[#858585]"
                                      : ""
                                  }`}
                                >
                                  {item.des}
                                </p>
                              )}
                              {isStepSkipped(item.stepId) && (
                                <p className="text-xs text-[#FFA500] font-medium mt-1">
                                  Skipped
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm font-medium ${
                                isStepCompleted(item.stepId)
                                  ? "text-[#4CAF50]"
                                  : isStepSkipped(item.stepId)
                                  ? "text-[#858585]"
                                  : "text-[#858585]"
                              }`}
                            >
                              {isStepCompleted(item.stepId)
                                ? "Completed ✓"
                                : isStepSkipped(item.stepId)
                                ? "Skipped"
                                : "Start →"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Skip Onboarding */}
            <div className="text-center mt-8">
              <Link
                to="/app/tickets"
                className="text-[#525866] hover:text-[#0A0D14] font-medium"
              >
                Skip onboarding and go to main app →
              </Link>
            </div>
          </div>
        </MainInner>
      </div>
    </>
  );
}
