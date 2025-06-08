
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const formSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  phone_number: z.string().min(10, "Phone number must be at least 10 characters"),
  email: z.string().email("Please enter a valid email address"),
  prayer_request: z.string().min(10, "Prayer request must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const PrayerRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      location: "",
      phone_number: "",
      email: "",
      prayer_request: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("prayer_requests")
        .insert(values);

      if (error) {
        throw error;
      }

      setShowSuccessModal(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting prayer request:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your prayer request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Prayer Request</h1>
            <p className="text-lg text-muted-foreground">
              Share your prayer needs with us. We believe in the power of prayer and would be honored to pray for you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="prayer_request"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prayer Request *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please share your prayer request..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Prayer Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-green-600">Prayer Request Submitted!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for sharing your prayer request with us. We'll be praying for you and believe that God will answer according to His perfect will.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button onClick={() => setShowSuccessModal(false)} className="px-8">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PrayerRequest;
