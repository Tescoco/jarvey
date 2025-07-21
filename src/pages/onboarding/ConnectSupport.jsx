import React from "react";
import MainInner from "../../components/MainInner";
import ConnectSupportComponent from "../../components/home/ConnectSupport";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function ConnectSupport() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["connect-support"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="connect-support"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <ConnectSupportComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
