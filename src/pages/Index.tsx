import { useState } from "react";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, MessageSquare, Search, TrendingUp } from "lucide-react";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  // Main app dashboard after onboarding
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="font-bold text-lg">HomeKey</h1>
          </div>
          <Button variant="ghost" size="sm">
            <MessageSquare className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Welcome back message */}
        <div className="text-center py-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Ready to find your dream home?</p>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 cursor-pointer hover:shadow-medium transition-all">
            <div className="text-center">
              <Search className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Search Homes</h3>
            </div>
          </Card>
          
          <Card className="p-4 cursor-pointer hover:shadow-medium transition-all">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Check FLISP</h3>
            </div>
          </Card>
        </div>

        {/* Coming soon message */}
        <Card className="p-6 text-center bg-gradient-card">
          <h3 className="font-semibold mb-2">🚀 More Features Coming Soon!</h3>
          <p className="text-sm text-muted-foreground">
            The full HomeKey experience is under development. This onboarding demo showcases our user-friendly approach to South African property buying.
          </p>
        </Card>

        {/* Test onboarding again */}
        <Button 
          onClick={() => setShowOnboarding(true)}
          variant="outline" 
          className="w-full"
        >
          Experience Onboarding Again
        </Button>
      </div>
    </div>
  );
};

export default Index;
