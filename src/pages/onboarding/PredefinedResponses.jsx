import React from "react";
import MainInner from "../../components/MainInner";
import ReplyWithPredefinedComponent from "../../components/home/ReplyWithPredefined";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function PredefinedResponses() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["predefined-responses"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="predefined-responses"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <ReplyWithPredefinedComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
