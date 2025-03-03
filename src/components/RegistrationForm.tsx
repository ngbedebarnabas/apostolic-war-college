
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      <div className={`${isLoading ? 'hidden' : 'block'} w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg`}>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSc9EZjnZz7Pau9XgzRy2sSOesRHZmXeoYCPdzvkrMUy2HOiJQ/viewform?embedded=true" 
          width="100%" 
          height="800" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          className="w-full rounded-lg bg-white"
          onLoad={handleLoad}
          title="Registration Form"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
};

export default RegistrationForm;
