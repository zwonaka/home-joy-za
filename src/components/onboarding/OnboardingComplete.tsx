import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, MessageSquare, Home, Shield, Users } from "lucide-react";

interface OnboardingCompleteProps {
  userType: 'first-time' | 'experienced';
  assessmentData: {
    budget: string;
    location: string;
    householdSize: string;
    monthlyIncome: string;
  };
  onComplete: () => void;
}

export const OnboardingComplete = ({ userType, assessmentData, onComplete }: OnboardingCompleteProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col p-4">
      {/* Progress bar */}
      <div className="w-full bg-muted h-2 rounded-full mb-8 mt-4">
        <div className="bg-gradient-primary h-2 rounded-full w-full animate-progress"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto animate-fade-in">
          {/* Success icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-success/10 rounded-full mx-auto mb-6 flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">
              Welcome to HomeKey! 🎉
            </h1>
            <p className="text-muted-foreground">
              Your personalized home buying journey is ready
            </p>
          </div>

          {/* Summary */}
          <Card className="p-4 mb-6 bg-gradient-card">
            <h3 className="font-semibold mb-3">Your Profile Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium">{assessmentData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Budget:</span>
                <span className="font-medium">{assessmentData.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-medium capitalize">{userType.replace('-', ' ')} buyer</span>
              </div>
            </div>
          </Card>

          {/* Next steps */}
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-center">What's next?</h3>
            
            <Card className="p-4 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-medium">Browse Properties</h4>
                  <p className="text-sm text-muted-foreground">See homes that match your criteria</p>
                </div>
              </div>
            </Card>

            {userType === 'first-time' && (
              <Card className="p-4 border-success/20 bg-success/5">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-success" />
                  <div>
                    <h4 className="font-medium">FLISP Check</h4>
                    <p className="text-sm text-muted-foreground">We'll help you apply for government assistance</p>
                  </div>
                </div>
              </Card>
            )}

            <Card className="p-4 border-accent/20 bg-accent/5">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-accent" />
                <div>
                  <h4 className="font-medium">Meet BondGPT</h4>
                  <p className="text-sm text-muted-foreground">Your 24/7 AI assistant is ready to help</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 border-muted">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-medium">Connect with Experts</h4>
                  <p className="text-sm text-muted-foreground">Access our network of verified professionals</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Trust message */}
          <div className="bg-muted/50 rounded-lg p-4 mb-6 text-center">
            <p className="text-sm text-muted-foreground">
              🔒 Your information is secure and protected. We'll never share your details without permission.
            </p>
          </div>

          {/* CTA */}
          <Button 
            onClick={onComplete}
            variant="hero" 
            size="xl" 
            className="w-full animate-scale-in"
          >
            Start Exploring Homes
            <ArrowRight className="w-5 h-5" />
          </Button>

          <p className="text-center text-muted-foreground text-xs mt-4">
            Questions? Chat with BondGPT anytime!
          </p>
        </div>
      </div>
    </div>
  );
};