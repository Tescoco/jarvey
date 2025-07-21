import React from "react";
import { Link } from "react-router-dom";
import MainInner from "../../components/MainInner";
import { c_24 } from "../../utilities/Classes";

export default function Complete() {
  return (
    <>
      <div className="min-h-screen bg-[#F7F5FF]">
        <MainInner>
          <div className="max-w-2xl mx-auto pt-16 pb-12">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3333 10L15 28.3333L6.66667 20"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-[#0A0D14] mb-4">
                🎉 Congratulations!
              </h1>
              <p className="text-xl text-[#525866] mb-2">
                You've successfully completed the onboarding
              </p>
              <p className="text-lg text-[#858585]">
                Your Jarvey AI setup is now complete and ready to use
              </p>
            </div>

            {/* Summary */}
            <div className={`${c_24} mb-8`}>
              <div className="p-8">
                <h2 className="text-xl font-semibold text-[#0A0D14] mb-6 text-center">
                  What You've Accomplished
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3333 4L6 11.3333L2.66667 8"
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[#0A0D14] font-medium">
                      Connected your Shopify store
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3333 4L6 11.3333L2.66667 8"
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[#0A0D14] font-medium">
                      Set up your support email
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3333 4L6 11.3333L2.66667 8"
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[#0A0D14] font-medium">
                      Practiced with test tickets
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3333 4L6 11.3333L2.66667 8"
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[#0A0D14] font-medium">
                      Connected social media channels
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3333 4L6 11.3333L2.66667 8"
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[#0A0D14] font-medium">
                      Invited your team members
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className={`${c_24} mb-8`}>
              <div className="p-8">
                <h2 className="text-xl font-semibold text-[#0A0D14] mb-6 text-center">
                  What's Next?
                </h2>
                {/* reduce font size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  <Link
                    to="/app/tickets"
                    className="btn bg-[#7856FF] text-white  text-left justify-start p-8"
                  >
                    <div>
                      <div className="font-semibold mb-1 pt-2 text-[12px]">
                        📋 Manage Tickets
                      </div>
                      <div className="text-sm opacity-90 pb-2 text-[12px]">
                        Start handling customer support
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/app/ai-agent"
                    className="btn border-[#E2E4E9] text-[#525866]  text-left justify-start p-8 "
                  >
                    <div>
                      <div className="font-semibold mb-1   text-[12px]">
                        🤖 AI Agent
                      </div>
                      <div className="text-sm opacity-75 text-[12px]">
                        Configure your AI assistant
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/app/help-center"
                    className="btn border-[#E2E4E9] text-[#525866]  text-left justify-start p-8"
                  >
                    <div>
                      <div className="font-semibold mb-1 text-[12px]">
                        📚 Help Center
                      </div>
                      <div className="text-sm opacity-75 text-[12px]">
                        Create knowledge base articles
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/app/triggers"
                    className="btn border-[#E2E4E9] text-[#525866]  text-left justify-start p-8"
                  >
                    <div>
                      <div className="font-semibold mb-1 text-[12px]">
                        ⚡ Triggers
                      </div>
                      <div className="text-sm opacity-75 text-[12px]  ">
                        Automate repetitive tasks
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MainInner>
      </div>
    </>
  );
}
