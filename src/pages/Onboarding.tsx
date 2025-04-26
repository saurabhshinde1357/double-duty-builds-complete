
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    companySize: "",
    industry: "",
    workspaceURL: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.companyName) {
      toast({
        title: "Required field",
        description: "Please enter your company name",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && !formData.workspaceURL) {
      toast({
        title: "Required field",
        description: "Please enter a workspace URL",
        variant: "destructive",
      });
      return;
    }
    
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    try {
      // Here you would call your API to create the company/workspace
      // const response = await createWorkspace(formData);
      
      // For now, simulate a successful creation
      setTimeout(() => {
        toast({
          title: "Setup complete!",
          description: "Your workspace is ready to use.",
        });
        
        navigate("/dashboard");
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      toast({
        title: "Setup failed",
        description: "There was an error creating your workspace. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">
              {step === 1
                ? "Create your workspace"
                : step === 2
                ? "Customize your workspace"
                : "Review your details"}
            </CardTitle>
            <div className="flex gap-1">
              <div className={`h-2 w-8 rounded-full ${step >= 1 ? "bg-primary" : "bg-gray-200"}`} />
              <div className={`h-2 w-8 rounded-full ${step >= 2 ? "bg-primary" : "bg-gray-200"}`} />
              <div className={`h-2 w-8 rounded-full ${step >= 3 ? "bg-primary" : "bg-gray-200"}`} />
            </div>
          </div>
          <CardDescription>
            {step === 1
              ? "Tell us about your company to get started"
              : step === 2
              ? "Customize how your team will access the workspace"
              : "Confirm your workspace details before finishing setup"}
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
          <CardContent className="space-y-4">
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input 
                    id="companyName" 
                    name="companyName" 
                    placeholder="Acme Inc." 
                    value={formData.companyName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <select 
                    id="companySize"
                    name="companySize"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={formData.companySize}
                    onChange={handleChange}
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <select 
                    id="industry"
                    name="industry"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={formData.industry}
                    onChange={handleChange}
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </>
            )}
            
            {step === 2 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="workspaceURL">Workspace URL *</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      workspacehub.com/
                    </span>
                    <Input 
                      id="workspaceURL" 
                      name="workspaceURL" 
                      className="rounded-l-none"
                      placeholder="your-company" 
                      value={formData.workspaceURL} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    This will be the URL your team uses to access the workspace.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Workspace Description</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    placeholder="Describe what your team works on..." 
                    value={formData.description} 
                    onChange={handleChange} 
                    className="min-h-[100px]"
                  />
                </div>
              </>
            )}
            
            {step === 3 && (
              <div className="space-y-4">
                <div className="rounded-md bg-gray-50 p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Company Name:</span>
                    <span className="text-sm">{formData.companyName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Company Size:</span>
                    <span className="text-sm">{formData.companySize || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Industry:</span>
                    <span className="text-sm">{formData.industry || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Workspace URL:</span>
                    <span className="text-sm">workspacehub.com/{formData.workspaceURL}</span>
                  </div>
                  {formData.description && (
                    <div className="pt-2 border-t">
                      <span className="text-sm font-medium block mb-1">Description:</span>
                      <span className="text-sm">{formData.description}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  After creating your workspace, you can invite team members and configure additional settings.
                </p>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={handleBack}>
                Back
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <Button type="button" onClick={handleNext}>
                Continue
              </Button>
            ) : (
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating Workspace..." : "Create Workspace"}
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Onboarding;
