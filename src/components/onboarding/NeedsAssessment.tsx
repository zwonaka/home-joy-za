import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, MapPin, DollarSign, Users, Calculator } from "lucide-react";

interface NeedsAssessmentProps {
  userType: 'first-time' | 'experienced';
  onNext: (data: AssessmentData) => void;
  onBack: () => void;
}

interface AssessmentData {
  budget: string;
  location: string;
  householdSize: string;
  monthlyIncome: string;
}

export const NeedsAssessment = ({ userType, onNext, onBack }: NeedsAssessmentProps) => {
  const [formData, setFormData] = useState<AssessmentData>({
    budget: '',
    location: '',
    householdSize: '',
    monthlyIncome: ''
  });

  const handleSubmit = () => {
    onNext(formData);
  };

  const isFormValid = formData.budget && formData.location && formData.householdSize && formData.monthlyIncome;

  const calculateAffordability = () => {
    const income = parseFloat(formData.monthlyIncome.replace(/[^\d]/g, ''));
    if (!income) return null;
    
    const affordability = income * 0.28 * 12 * 20; // 28% rule over 20 years
    return Math.round(affordability);
  };

  const affordabilityEstimate = calculateAffordability();

  return (
    <div className="min-h-screen bg-background flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <div className="text-sm text-muted-foreground">Step 2 of 3</div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-muted h-2 rounded-full mb-8">
        <div className="bg-gradient-primary h-2 rounded-full w-2/3 animate-progress"></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-4">
        <div className="w-full max-w-md mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-3">
              {userType === 'first-time' ? 'Let\'s find your perfect starter home' : 'What are you looking for?'}
            </h1>
            <p className="text-muted-foreground">
              Tell us your preferences so we can show you suitable properties
            </p>
          </div>

          <div className="space-y-6">
            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Preferred area
              </Label>
              <Input
                id="location"
                placeholder="e.g. Cape Town, Johannesburg, Durban..."
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            {/* Monthly Income */}
            <div className="space-y-2">
              <Label htmlFor="income" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-success" />
                Monthly household income
              </Label>
              <Input
                id="income"
                placeholder="R 25,000"
                value={formData.monthlyIncome}
                onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
              />
              {userType === 'first-time' && (
                <p className="text-xs text-muted-foreground">
                  This helps us check your FLISP eligibility (up to R22,000/month)
                </p>
              )}
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label htmlFor="budget" className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-accent" />
                Property budget
              </Label>
              <Input
                id="budget"
                placeholder="R 1,500,000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              />
            </div>

            {/* Household Size */}
            <div className="space-y-2">
              <Label htmlFor="household" className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Household size
              </Label>
              <Input
                id="household"
                placeholder="e.g. 2 adults, 1 child"
                value={formData.householdSize}
                onChange={(e) => setFormData({ ...formData, householdSize: e.target.value })}
              />
            </div>

            {/* Affordability insight */}
            {affordabilityEstimate && (
              <Card className="p-4 bg-gradient-card border-success/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <Calculator className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <h4 className="font-medium text-success mb-1">Affordability Insight</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on your income, you may qualify for properties up to{' '}
                      <span className="font-semibold text-success">
                        R {affordabilityEstimate.toLocaleString()}
                      </span>
                    </p>
                    {userType === 'first-time' && affordabilityEstimate <= 3500000 && (
                      <p className="text-xs text-success/80 mt-1">
                        💡 You may qualify for FLISP assistance!
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-md mx-auto pt-4 border-t">
        <Button 
          onClick={handleSubmit}
          disabled={!isFormValid}
          variant="hero" 
          size="xl" 
          className="w-full"
        >
          Continue to Results
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};