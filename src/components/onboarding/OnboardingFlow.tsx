import { useState } from "react";
import { WelcomeScreen } from "./WelcomeScreen";
import { UserTypeSelection } from "./UserTypeSelection";
import { NeedsAssessment } from "./NeedsAssessment";
import { OnboardingComplete } from "./OnboardingComplete";

type OnboardingStep = 'welcome' | 'user-type' | 'assessment' | 'complete';
type UserType = 'first-time' | 'experienced';

interface AssessmentData {
  budget: string;
  location: string;
  householdSize: string;
  monthlyIncome: string;
}

interface OnboardingFlowProps {
  onComplete: () => void;
}

export const OnboardingFlow = ({ onComplete }: OnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [userType, setUserType] = useState<UserType>('first-time');
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    budget: '',
    location: '',
    householdSize: '',
    monthlyIncome: ''
  });

  const handleWelcomeNext = () => {
    setCurrentStep('user-type');
  };

  const handleUserTypeNext = (selectedUserType: UserType) => {
    setUserType(selectedUserType);
    setCurrentStep('assessment');
  };

  const handleAssessmentNext = (data: AssessmentData) => {
    setAssessmentData(data);
    setCurrentStep('complete');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'user-type':
        setCurrentStep('welcome');
        break;
      case 'assessment':
        setCurrentStep('user-type');
        break;
      default:
        break;
    }
  };

  return (
    <>
      {currentStep === 'welcome' && (
        <WelcomeScreen onNext={handleWelcomeNext} />
      )}
      
      {currentStep === 'user-type' && (
        <UserTypeSelection 
          onNext={handleUserTypeNext} 
          onBack={handleBack} 
        />
      )}
      
      {currentStep === 'assessment' && (
        <NeedsAssessment 
          userType={userType}
          onNext={handleAssessmentNext} 
          onBack={handleBack} 
        />
      )}
      
      {currentStep === 'complete' && (
        <OnboardingComplete 
          userType={userType}
          assessmentData={assessmentData}
          onComplete={onComplete} 
        />
      )}
    </>
  );
};