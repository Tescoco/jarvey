import React from "react";
import MainInner from "../../components/MainInner";
import InstallTriggersComponent from "../../components/home/InstallTriggers";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";
import { useSearchParams } from "react-router-dom";

export default function InstallTriggers() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["install-triggers"];

  const [searchParams] = useSearchParams();
  const install = searchParams.get("install");

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="install-triggers"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <InstallTriggersComponent install={install} />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
