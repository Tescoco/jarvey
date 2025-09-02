import React from "react";
import Top from "../../layouts/Top";
import MainInner from "../../components/MainInner";

export default function HomePage() {
  const recommendedSteps = [
    {
      id: 1,
      icon: "📖",
      title: "Explore 3 strategies to automate 30%+ of your support tickets",
      description:
        "Learn how to streamline your support process, automate repetitive queries, reduce workload for your team, and enhance CX.",
    },
    {
      id: 2,
      icon: "🔗",
      title: "All your favourite apps, connected",
      description:
        "Connect 100+ apps to empower your team with AI and automation, share customer data between tools, and make updates in other apps.",
    },
    {
      id: 3,
      icon: "💬",
      title: "Add WhatsApp",
      description:
        "Manage WhatsApp messages as tickets, see and respond to them directly in Gorgias, and link customer profiles for personalized support.",
    },
    {
      id: 4,
      icon: "⚡",
      title: "Want to upgrade your tech stack?",
      description:
        "Get the best tools with 10-30% discounts from 100+ Gorgias Certified Partners.",
    },
  ];

  const sidebarSections = [
    {
      title: "Benchmark vs Peers",
      description:
        "See how you stack up against similar brands with a Business Strategy Call.",
      actionText: "Book a call",
      actionColor: "text-blue-600",
      bgColor: "bg-red-50",
      emoji: "🎯",
    },
    {
      title: "Get more out of Gorgias",
      description:
        "Take part in Gorgias Academy for tips, certifications, resources, and more.",
      actionText: "Start learning",
      actionColor: "text-blue-600",
      bgColor: "bg-orange-50",
      emoji: "📚",
    },
  ];

  return (
    <>
      <Top title="Home" />
      <MainInner>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-heading mb-2 flex items-center gap-2">
                <span>👋</span>
                Hey Mian, welcome back!
              </h1>
            </div>

            {/* Recommended Steps Section */}
            <div>
              <h2 className="text-lg font-medium text-heading mb-6">
                Recommended next steps
              </h2>

              <div className="space-y-4">
                {recommendedSteps.map((step) => (
                  <div
                    key={step.id}
                    className="group bg-white border border-stroke rounded-xl p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-medium text-heading mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-text leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 ml-4">
                        <svg
                          className="w-5 h-5 text-text group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Finish Onboarding CTA */}
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Finish Onboarding</h3>
                  </div>
                  <p className="text-sm text-white/90 mb-4 leading-relaxed">
                    Complete your setup to unlock the full potential of your
                    support platform
                  </p>
                  <button className="bg-white text-primary px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-all duration-300 group-hover:scale-105 shadow-sm">
                    Continue Setup
                  </button>
                </div>
                <div className="ml-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="space-y-4">
              {sidebarSections.map((section, index) => (
                <div
                  key={index}
                  className={`${section.bgColor} rounded-xl p-6 group cursor-pointer hover:shadow-md transition-all duration-300`}
                >
                  <div className="mb-4">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg mb-3">
                      {section.emoji}
                    </div>
                    <h3 className="text-base font-semibold text-heading mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm text-text leading-relaxed mb-4">
                      {section.description}
                    </p>
                  </div>
                  <button
                    className={`${section.actionColor} text-sm font-medium hover:underline flex items-center gap-1 group-hover:gap-2 transition-all duration-300`}
                  >
                    {section.actionText}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Additional Icon */}
            <div className="flex justify-center pt-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect x="7" y="7" width="3" height="3" fill="currentColor" />
                  <rect x="14" y="7" width="3" height="3" fill="currentColor" />
                  <rect
                    x="7"
                    y="14"
                    width="10"
                    height="3"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </MainInner>
    </>
  );
}
