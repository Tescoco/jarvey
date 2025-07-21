import React from "react";
import MainInner from "../../components/MainInner";
import ConnectStoreComponent from "../../components/home/ConnectStore";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function ConnectStore() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["connect-store"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="connect-store"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <ConnectStoreComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
