import React from "react";
import MainInner from "../../components/MainInner";
import AnswerComponent from "../../components/home/Answer";
import OnboardingWrapper from "../../components/OnboardingWrapper";
import { ONBOARDING_STEPS_CONFIG } from "../../utils/onboardingSteps";
import { c_24 } from "../../utilities/Classes";

export default function AnswerTicket() {
  const stepConfig = ONBOARDING_STEPS_CONFIG["answer-ticket"];

  return (
    <MainInner>
      <OnboardingWrapper
        currentStep="answer-ticket"
        nextStep={stepConfig.nextStep}
        title={stepConfig.title}
        description={stepConfig.description}
        timeEstimate={stepConfig.timeEstimate}
      >
        <div className={`${c_24}`}>
          <AnswerComponent />
        </div>
      </OnboardingWrapper>
    </MainInner>
  );
}
