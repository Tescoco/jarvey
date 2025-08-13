import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AvailabilityProvider } from "./contexts/AvailabilityContext";
import { GlobalDismissProvider } from "./contexts/GlobalDismissContext";

// all pages
import Index from "./layouts/Index";
import OnboardingLayout from "./layouts/OnboardingLayout";
import Error from "./layouts/Error";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Notification from "./pages/Notification";
import AiAgentSetting from "./pages/agent/AiAgentSetting";
import AiAgent from "./pages/agent/AiAgent";
import SetupAiAgent from "./pages/agent/SetupAiAgent";
import HelpCenter from "./pages/help/HelpCenter";
import CreateHelpCenter from "./pages/help/CreateHelpCenter";
import Chat from "./pages/chat/Chat";
import ChatSettings from "./pages/chat/ChatSettings";
import HelpCenterSettings from "./pages/help/HelpCenterSettings";
import Tickets from "./pages/ticket/Tickets";
import TicketFields from "./pages/ticket/TicketFields";
import Triggers from "./pages/trigger/Triggers";
import Predefined from "./pages/Predefined";
import NewTicket from "./pages/ticket/NewTicket";
import TicketDetails from "./pages/ticket/TicketDetails";
import TicketConfiguration from "./pages/ticket/TicketConfiguration";
import CreateTrigger from "./pages/trigger/CreateTrigger";
import TriggerCustom from "./pages/trigger/TriggerCustom";
import TriggerSetting from "./pages/trigger/TriggerSetting";
import PredefinedCreate from "./components/Predefined/PredefinedCreate";
import PredefinedInstall from "./components/Predefined/PredefinedInstall";
import PredefinedInstallUpdate from "./components/Predefined/PredefinedInstallUpdate";
import EmailConfiguration from "./pages/EmailConfiguration";
import Slas from "./pages/slas/Slas";
import SlasCreate from "./pages/slas/Create";
import SlasTemplate from "./pages/slas/Template";
import Profile from "./pages/admin/Profile";

// Onboarding pages
import ConnectStore from "./pages/onboarding/ConnectStore";
import ConnectSupport from "./pages/onboarding/ConnectSupport";
import AnswerTicket from "./pages/onboarding/AnswerTicket";
import AddSupportChannels from "./pages/onboarding/AddSupportChannels";
import InviteTeam from "./pages/onboarding/InviteTeam";
import Complete from "./pages/onboarding/Complete";
import PredefinedResponses from "./pages/onboarding/PredefinedResponses";
import InstallTriggers from "./pages/onboarding/InstallTriggers";
import InstallFlows from "./pages/onboarding/InstallFlows";
import HelpCenterOnboarding from "./pages/onboarding/HelpCenter";
import AIPower from "./pages/onboarding/AIPower";
import AIGuidance from "./pages/onboarding/AIGuidance";
import AITest from "./pages/onboarding/AITest";
import SLAs from "./pages/onboarding/SLAs";

// old dashboard
import General from "./pages/dashboard/General";
import CustomerAnalytics from "./pages/dashboard/CustomerAnalytics";
import AgentPerformance from "./pages/dashboard/AgentPerformance";
import ManageTags from "./components/Predefined/ManageTags";
import RevenueCost from "./pages/dashboard/RevenueCost";
import SystemIntegration from "./pages/dashboard/SystemIntegration";
import DisputeManagement from "./pages/dashboard/DisputeManagement";
import CustomReportsVisualizations from "./pages/dashboard/CustomReportsVisualizations";
import ConversationsAnalytics from "./pages/dashboard/ConversationsAnalytics";
import CustomerJourneyInsights from "./pages/dashboard/CustomerJourneyInsights";
import RealTimeMetrics from "./pages/dashboard/RealTimeMetrics";
import ProactiveEngagement from "./pages/dashboard/ProactiveEngagement";
import AIBotPerformance from "./pages/dashboard/AIBotPerformance";
import SupportPerformance from "./pages/dashboard/SupportPerformance";
// old dashboard

import ManageUser from "./pages/ManageUser";
import ManageAgents from "./pages/ManageAgents";
import ManageGroup from "./pages/ManageGroup";
import TicketPriority from "./pages/ticket/TicketPriority";
import OperatingHours from "./pages/OperatingHours";
import Store from "./pages/Store";
import Overview from "./pages/dashboard/live/Overview";
import Agents from "./pages/dashboard/live/Agents";
import SupportOverview from "./pages/dashboard/support/Overview";
import SupportAgents from "./pages/dashboard/support/Agents";
import BusiestTime from "./pages/dashboard/support/BusiestTime";
import Channels from "./pages/dashboard/support/Channels";
import SupportHelpCenter from "./pages/dashboard/support/HelpCenter";
import Revenue from "./pages/dashboard/support/Revenue";
import SupportSlas from "./pages/dashboard/support/Slas";
import Tags from "./pages/dashboard/tickets/Tags";
import Macros from "./pages/dashboard/tickets/Macros";
import CustomerIntentions from "./pages/dashboard/tickets/CustomerIntentions";
import AutomateGeneral from "./pages/dashboard/automate/General";
import AutomateAiAgent from "./pages/dashboard/automate/AiAgent";
import PerformanceByFeatures from "./pages/dashboard/automate/PerformanceByFeatures";
import MangeLanguage from "./pages/admin/MangeLanguage";
import TranslateLanguage from "./pages/admin/TranslateLanguage";
import AboutSystem from "./pages/admin/AboutSystem";
// import AdminManageUser from './pages/admin/ManageUser'
import GlobalTemplate from "./pages/admin/GlobalTemplate";
import Visitors from "./pages/admin/Visitors";
import DosSecurity from "./pages/admin/DosSecurity";
import AppSetting from "./pages/admin/AppSetting";
import AiConfiguration from "./pages/admin/AiConfiguration";
import SystemConfiguration from "./pages/admin/SystemConfiguration";
import NotificationSetting from "./pages/admin/NotificationSetting";
import Billing from "./pages/Billing";
import Flows from "./pages/flows/Index";
import Create from "./pages/flows/Create";
import FlowsDetails from "./pages/flows/Details";
import ArticleRecommendation from "./pages/ArticleRecommendation";
import Message from "./pages/Message";
import Email from "./pages/Email";

import OrderLayout from "./pages/order-management/Layout";
import OrderManagement from "./pages/order-management/Index";
import Cancel from "./pages/order-management/Cancel";
import Return from "./pages/order-management/Return";
import Track from "./pages/order-management/Track";
import Report from "./pages/order-management/Report";
import EditScenario from "./pages/order-management/EditScenario";

import Customers from "./pages/customer/Index";
import CustomerDetails from "./pages/customer/Details";
import CreateField from "./pages/ticket/CreateField";
import FieldConditions from "./pages/ticket/FieldConditions";
import FieldConditionCreate from "./pages/ticket/FieldConditionCreate";

// Super Admin

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/onboarding",
      element: <OnboardingLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "connect-store",
          element: <ConnectStore />,
        },
        {
          path: "connect-support",
          element: <ConnectSupport />,
        },
        {
          path: "answer-ticket",
          element: <AnswerTicket />,
        },
        {
          path: "add-support-channels",
          element: <AddSupportChannels />,
        },
        {
          path: "invite-team",
          element: <InviteTeam />,
        },
        {
          path: "complete",
          element: <Complete />,
        },
        {
          path: "predefined-responses",
          element: <PredefinedResponses />,
        },
        {
          path: "install-triggers",
          element: <InstallTriggers />,
        },
        {
          path: "install-flows",
          element: <InstallFlows />,
        },
        {
          path: "help-center",
          element: <HelpCenterOnboarding />,
        },
        {
          path: "ai-power",
          element: <AIPower />,
        },
        {
          path: "ai-guidance",
          element: <AIGuidance />,
        },
        {
          path: "ai-test",
          element: <AITest />,
        },
        {
          path: "slas",
          element: <SLAs />,
        },
      ],
    },
    {
      path: "",
      element: <OnboardingLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/app",
      element: <Index />,
      errorElement: <Error />,
      children: [
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "message",
          element: <Message />,
        },
        {
          path: "email-configuration",
          element: <EmailConfiguration />,
        },
        {
          path: "email",
          element: <Email />,
        },
        {
          path: "slas",
          element: <Slas />,
        },
        {
          path: "new-slas",
          element: <SlasCreate />,
        },
        {
          path: "slas-template",
          element: <SlasTemplate />,
        },
        {
          path: "manage-agents",
          element: <ManageAgents />,
        },
        {
          path: "manage-group",
          element: <ManageGroup />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        // agent pages
        {
          path: "ai-agent",
          element: <AiAgent />,
        },
        {
          path: "setup-ai-agent",
          element: <SetupAiAgent />,
        },
        {
          path: "ai-agent-setting",
          element: <AiAgentSetting />,
        },
        // help center pages
        {
          path: "help-center",
          element: <HelpCenter />,
        },
        {
          path: "create-help-center",
          element: <CreateHelpCenter />,
        },
        {
          path: "help-center-settings",
          element: <HelpCenterSettings />,
        },
        // chat pages
        {
          path: "chat",
          element: <Chat />,
        },
        {
          path: "chat-settings",
          element: <ChatSettings />,
        },
        // {
        //   path: "chat-settings",
        //   element: <ChatSettings />,
        // },
        // ticket pages
        {
          path: "tickets",
          element: <Tickets />,
        },
        {
          path: "ticket-fields",
          element: <TicketFields />,
        },
        {
          path: "new-ticket",
          element: <NewTicket />,
        },
        {
          path: "create-fields",
          element: <CreateField />,
        },
        {
          path: "field-conditions",
          element: <FieldConditions />,
        },
        {
          path: "field-conditions/create",
          element: <FieldConditionCreate />,
        },
        {
          path: "ticket/:tid",
          element: <TicketDetails />,
        },
        {
          path: "ticket-configuration",
          element: <TicketConfiguration />,
        },
        {
          path: "operating-hours",
          element: <OperatingHours />,
        },
        {
          path: "ticket-priority",
          element: <TicketPriority />,
        },
        // trigger pages
        {
          path: "triggers",
          element: <Triggers />,
        },
        {
          path: "create-trigger",
          element: <CreateTrigger />,
        },
        {
          path: "trigger-custom",
          element: <TriggerCustom />,
        },
        {
          path: "trigger-setting",
          element: <TriggerSetting />,
        },
        // predefined pages
        {
          path: "predefined",
          element: <Predefined />,
        },
        {
          path: "create-predefined",
          element: <PredefinedCreate />,
        },
        {
          path: "predefined-install",
          element: <PredefinedInstall />,
        },
        {
          path: "predefined-update",
          element: <PredefinedInstallUpdate />,
        },
        {
          path: "manage-tags",
          element: <ManageTags />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "billing",
          element: <Billing />,
        },
        {
          path: "flows",
          element: <Flows />,
        },
        {
          path: "create-flows",
          element: <Create />,
        },
        {
          path: "flows-details/:fid",
          element: <FlowsDetails />,
        },
        {
          path: "order",
          element: <OrderLayout />,
          children: [
            {
              index: true,
              element: <Navigate to="management" replace />,
            },
            {
              path: "management",
              element: <OrderManagement />,
            },
            {
              path: "report",
              element: <Report />,
            },
            {
              path: "track",
              element: <Track />,
            },
            {
              path: "return",
              element: <Return />,
            },
            {
              path: "cancel",
              element: <Cancel />,
            },
            {
              path: "edit-scenario",
              element: <EditScenario />,
            },
          ],
        },
        {
          path: "article-recommendation",
          element: <ArticleRecommendation />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "customer/:cid",
          element: <CustomerDetails />,
        },
        // old dashboard pages
        {
          path: "analytics-dashboard",
          element: <General />,
        },
        {
          path: "dashboard/customer-analytics",
          element: <CustomerAnalytics />,
        },
        {
          path: "dashboard/agent-performance",
          element: <AgentPerformance />,
        },
        {
          path: "dashboard/revenue-cost",
          element: <RevenueCost />,
        },
        {
          path: "dashboard/dispute-management",
          element: <DisputeManagement />,
        },
        {
          path: "dashboard/system-integration",
          element: <SystemIntegration />,
        },
        {
          path: "dashboard/custom-reports-visualizations",
          element: <CustomReportsVisualizations />,
        },
        {
          path: "dashboard/conversations-analytics",
          element: <ConversationsAnalytics />,
        },
        {
          path: "dashboard/customer-journey-insights",
          element: <CustomerJourneyInsights />,
        },
        {
          path: "dashboard/real-time-metrics",
          element: <RealTimeMetrics />,
        },
        {
          path: "dashboard/proactive-engagement",
          element: <ProactiveEngagement />,
        },
        {
          path: "dashboard/ai-bot-performance",
          element: <AIBotPerformance />,
        },
        {
          path: "dashboard/support-performance",
          element: <SupportPerformance />,
        },
        // old dashboard pages

        // new dashboard
        {
          path: "dashboard",
          children: [
            {
              path: "live",
              children: [
                {
                  index: true,
                  element: <Navigate to="overview" replace />,
                },
                {
                  path: "overview",
                  element: <Overview />,
                },
                {
                  path: "agents",
                  element: <Agents />,
                },
              ],
            },
            {
              path: "support-performance",
              children: [
                {
                  index: true,
                  element: <Navigate to="overview" replace />,
                },
                {
                  path: "overview",
                  element: <SupportOverview />,
                },
                {
                  path: "agents",
                  element: <SupportAgents />,
                },
                {
                  path: "busiest-time",
                  element: <BusiestTime />,
                },
                {
                  path: "channels",
                  element: <Channels />,
                },
                {
                  path: "help-center",
                  element: <SupportHelpCenter />,
                },
                {
                  path: "revenue",
                  element: <Revenue />,
                },
                {
                  path: "slas",
                  element: <SupportSlas />,
                },
              ],
            },
            {
              path: "tickets-insights",
              children: [
                {
                  index: true,
                  element: <Navigate to="tags" replace />,
                },
                {
                  path: "tags",
                  element: <Tags />,
                },
                {
                  path: "macros",
                  element: <Macros />,
                },
                {
                  path: "customer-intentions",
                  element: <CustomerIntentions />,
                },
              ],
            },
            {
              path: "automate",
              children: [
                {
                  index: true,
                  element: <Navigate to="general" replace />,
                },
                {
                  path: "general",
                  element: <AutomateGeneral />,
                },
                {
                  path: "ai-agent",
                  element: <AutomateAiAgent />,
                },
                {
                  path: "performance-by-features",
                  element: <PerformanceByFeatures />,
                },
              ],
            },
          ],
        },
        {
          path: "admin",
          children: [
            {
              index: true,
              element: <Navigate to="language" replace />,
            },
            {
              path: "language",
              element: <MangeLanguage />,
            },
            {
              path: "translate-language",
              element: <TranslateLanguage />,
            },
            {
              path: "about-system",
              element: <AboutSystem />,
            },
            {
              path: "user",
              element: <ManageUser />,
            },
            {
              path: "global-template",
              element: <GlobalTemplate />,
            },
            {
              path: "visitors",
              element: <Visitors />,
            },
            {
              path: "dos-security",
              element: <DosSecurity />,
            },
            {
              path: "app-setting",
              element: <AppSetting />,
            },
            {
              path: "ai-configuration",
              element: <AiConfiguration />,
            },
            {
              path: "system-configuration",
              element: <SystemConfiguration />,
            },
            {
              path: "notification-setting",
              element: <NotificationSetting />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <AvailabilityProvider>
      <GlobalDismissProvider>
        <RouterProvider router={router} />
      </GlobalDismissProvider>
    </AvailabilityProvider>
  );
}
