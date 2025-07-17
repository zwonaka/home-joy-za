import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Home, Shield, Users, TrendingUp } from "lucide-react";

interface WelcomeScreenProps {
  onNext: () => void;
}

export const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto animate-fade-in">
        {/* Logo and main heading */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-medium">
            <Home className="w-8 h-8 text-accent-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-primary-foreground mb-3">
            Welcome to HomeFlow
          </h1>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Your trusted partner for homeownership in South Africa
          </p>
        </div>

        {/* Value proposition cards */}
        <div className="space-y-4 mb-8">
          <Card className="bg-background/95 backdrop-blur-sm border-0 p-4 shadow-soft animate-slide-in-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Smart Property Search</h3>
                <p className="text-sm text-muted-foreground">Find homes you can actually afford</p>
              </div>
            </div>
          </Card>

          <Card className="bg-background/95 backdrop-blur-sm border-0 p-4 shadow-soft animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Bond & FLISP Assistance</h3>
                <p className="text-sm text-muted-foreground">AI-powered matching & applications</p>
              </div>
            </div>
          </Card>

          <Card className="bg-background/95 backdrop-blur-sm border-0 p-4 shadow-soft animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Expert Support</h3>
                <p className="text-sm text-muted-foreground">24/7 BondGPT + verified professionals</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Trust indicators */}
        <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 mb-8 border border-primary-foreground/20">
          <div className="flex items-center justify-center gap-4 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-lg font-bold">500K+</div>
              <div className="text-xs">Properties</div>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20"></div>
            <div className="text-center">
              <div className="text-lg font-bold">15+</div>
              <div className="text-xs">Bank Partners</div>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20"></div>
            <div className="text-center">
              <div className="text-lg font-bold">24/7</div>
              <div className="text-xs">AI Support</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button 
          onClick={onNext}
          variant="accent" 
          size="xl" 
          className="w-full animate-scale-in"
          style={{ animationDelay: '0.3s' }}
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5" />
        </Button>

        <p className="text-center text-primary-foreground/60 text-xs mt-4">
          Trusted by thousands of South African homebuyers
        </p>
      </div>
    </div>
  );
};