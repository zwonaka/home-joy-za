import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, UserCheck, GraduationCap } from "lucide-react";

interface UserTypeSelectionProps {
  onNext: (userType: 'first-time' | 'experienced') => void;
  onBack: () => void;
}

export const UserTypeSelection = ({ onNext, onBack }: UserTypeSelectionProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <div className="text-sm text-muted-foreground">Step 1 of 3</div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-muted h-2 rounded-full mb-8">
        <div className="bg-gradient-primary h-2 rounded-full w-1/3 animate-progress"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-3">
              Tell us about yourself
            </h1>
            <p className="text-muted-foreground">
              This helps us personalize your homebuying journey
            </p>
          </div>

          <div className="space-y-4">
            <Card 
              className="p-6 cursor-pointer border-2 hover:border-primary transition-all duration-200 hover:shadow-medium group"
              onClick={() => onNext('first-time')}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">First-time buyer</h3>
                  <p className="text-muted-foreground mb-4">
                    New to homebuying? We'll guide you through every step and help you understand FLISP eligibility.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span>Get started</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="p-6 cursor-pointer border-2 hover:border-primary transition-all duration-200 hover:shadow-medium group"
              onClick={() => onNext('experienced')}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <UserCheck className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Experienced buyer</h3>
                  <p className="text-muted-foreground mb-4">
                    Looking to upgrade or invest? Access our advanced tools and premium features.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional info */}
          <div className="mt-8 p-4 bg-success/5 rounded-lg border border-success/20">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-success text-xs font-bold">?</span>
              </div>
              <div>
                <h4 className="font-medium text-success mb-1">Did you know?</h4>
                <p className="text-sm text-success/80">
                  First-time buyers may qualify for FLISP subsidies up to R130,000 from the government.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};