import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Check, ChevronRight, Upload, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { cn } from '../lib/utils';

const steps = [
  { id: 1, name: 'Basic Details' },
  { id: 2, name: 'Exam Selection' },
  { id: 3, name: 'Documents' },
  { id: 4, name: 'Review' },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  exam: z.string().min(1, "Please select an exam"),
});

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const formData = watch();

  const nextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger(['fullName', 'email', 'phone']);
    } else if (currentStep === 2) {
      isValid = await trigger(['exam']);
    } else {
      isValid = true;
    }

    if (isValid) setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-12 pb-12 space-y-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Application Submitted!</h2>
              <p className="text-muted-foreground mt-2">
                Your application for {formData.exam} has been received successfully.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Registration ID</p>
              <p className="text-xl font-mono font-bold text-primary mt-1">RRB-2025-X8921</p>
            </div>
            <Button className="w-full" onClick={() => window.location.href = '/'}>Return to Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Online Application</h1>
          <p className="text-muted-foreground">Complete the steps below to apply for ongoing recruitments.</p>
        </div>

        {/* Stepper */}
        <div className="relative flex justify-between mb-12">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center bg-background px-2">
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors",
                  currentStep >= step.id 
                    ? "bg-primary border-primary text-white" 
                    : "bg-white border-slate-300 text-slate-500"
                )}
              >
                {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
              </div>
              <span className={cn(
                "text-xs mt-2 font-medium",
                currentStep >= step.id ? "text-primary" : "text-muted-foreground"
              )}>
                {step.name}
              </span>
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].name}</CardTitle>
            <CardDescription>Please fill in the details correctly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name (as per 10th marksheet)</Label>
                    <Input id="fullName" {...register("fullName")} placeholder="Enter your full name" />
                    {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message as string}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email.message as string}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Mobile Number</Label>
                      <Input id="phone" {...register("phone")} placeholder="9876543210" />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message as string}</p>}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <Label>Select Examination</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['CEN 01/2025 - ALP', 'CEN 02/2025 - NTPC', 'CEN 03/2024 - Group D', 'CEN 04/2024 - JE'].map((exam) => (
                      <div key={exam} className="relative">
                        <input 
                          type="radio" 
                          id={exam} 
                          value={exam} 
                          {...register("exam")} 
                          className="peer sr-only"
                        />
                        <label 
                          htmlFor={exam}
                          className="flex items-center justify-between p-4 bg-white border-2 rounded-lg cursor-pointer hover:bg-slate-50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all"
                        >
                          <span className="font-medium text-sm">{exam}</span>
                          <Check className="h-4 w-4 text-primary opacity-0 peer-checked:opacity-100" />
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.exam && <p className="text-red-500 text-xs">{errors.exam.message as string}</p>}
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <Upload className="h-6 w-6 text-slate-400" />
                    </div>
                    <h3 className="font-medium text-sm">Upload Photograph</h3>
                    <p className="text-xs text-muted-foreground mt-1">JPG or PNG, max 2MB</p>
                  </div>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <Upload className="h-6 w-6 text-slate-400" />
                    </div>
                    <h3 className="font-medium text-sm">Upload Signature</h3>
                    <p className="text-xs text-muted-foreground mt-1">JPG or PNG, max 1MB</p>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg space-y-3 text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="col-span-2 font-medium">{formData.fullName}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="col-span-2 font-medium">{formData.email}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="col-span-2 font-medium">{formData.phone}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Exam:</span>
                      <span className="col-span-2 font-medium">{formData.exam}</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="declare" className="mt-1" required />
                    <label htmlFor="declare" className="text-xs text-muted-foreground">
                      I hereby declare that all the information furnished above is true to the best of my knowledge. I understand that my candidature is liable to be rejected if any information is found to be false.
                    </label>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={currentStep === 1 || isSubmitting}
            >
              Previous
            </Button>
            
            {currentStep < 4 ? (
              <Button onClick={nextStep}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit(onSubmit)} 
                className="bg-accent hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Application
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
