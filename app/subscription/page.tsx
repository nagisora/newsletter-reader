"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const plans = [
  { name: 'Basic', price: 9.99, features: ['Access to all newsletters', 'Basic search functionality'] },
  { name: 'Pro', price: 19.99, features: ['Access to all newsletters', 'Advanced search functionality', 'Personalized recommendations'] },
  { name: 'Enterprise', price: 49.99, features: ['Access to all newsletters', 'Advanced search functionality', 'Personalized recommendations', 'API access', 'Priority support'] },
];

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (planName: string) => {
    // TODO: Implement subscription logic
    setSelectedPlan(planName);
    toast({
      title: "Subscription successful",
      description: `You are now subscribed to the ${planName} plan.`,
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Subscription Plans</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={selectedPlan === plan.name ? 'border-primary' : ''}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>${plan.price}/month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => handleSubscribe(plan.name)}
                disabled={selectedPlan === plan.name}
              >
                {selectedPlan === plan.name ? 'Subscribed' : 'Subscribe'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}