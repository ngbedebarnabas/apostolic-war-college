
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

// Define the form validation schema
const formSchema = z.object({
  title: z.string({
    required_error: "Please select your title",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters",
  }),
  middleName: z.string().optional(),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters",
  }),
  gender: z.string({
    required_error: "Please select your gender",
  }),
  age: z.string({
    required_error: "Please select your age group",
  }),
  maritalStatus: z.string({
    required_error: "Please select your marital status",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phoneNumber: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  address: z.string().min(5, {
    message: "Please provide your address",
  }),
  bornAgain: z.string({
    required_error: "Please select an option",
  }),
  churchMember: z.string({
    required_error: "Please select an option",
  }),
  churchName: z.string().min(1, {
    message: "Please provide your church/ministry name",
  }),
  churchRole: z.string({
    required_error: "Please select your role",
  }),
  isPioneer: z.string({
    required_error: "Please select an option",
  }),
  ministryName: z.string().optional(),
});

const EventRegistration = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Find the event based on the ID (in a real app, you would fetch this from an API)
  const event = {
    id: "bootcamp-2025",
    title: "21 Days Fasting Bootcamp",
    date: "2nd-22nd June 2025",
    location: "Adullam Chapel, Wurukum Benue State",
  };
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      age: "",
      maritalStatus: "",
      email: "",
      phoneNumber: "",
      address: "",
      bornAgain: "",
      churchMember: "Yes",
      churchName: "",
      churchRole: "",
      isPioneer: "No",
      ministryName: "",
    },
  });
  
  const { watch, setValue } = form;
  const churchMember = watch("churchMember");
  const isPioneer = watch("isPioneer");
  
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      
      // Submit form data to Supabase
      const { error } = await supabase
        .from('event_registrations')
        .insert([
          { 
            title: data.title,
            first_name: data.firstName,
            middle_name: data.middleName || null,
            last_name: data.lastName,
            gender: data.gender,
            age: data.age,
            marital_status: data.maritalStatus,
            email: data.email,
            phone_number: data.phoneNumber,
            address: data.address,
            born_again: data.bornAgain,
            church_member: data.churchMember,
            church_name: data.churchName,
            church_role: data.churchRole,
            is_pioneer: data.isPioneer,
            ministry_name: data.ministryName || null,
            event_id: eventId || "bootcamp-2025"
          }
        ]);

      if (error) {
        throw error;
      }
      
      // Show success dialog
      setShowSuccessDialog(true);
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const joinWhatsAppGroup = () => {
    window.open("https://chat.whatsapp.com/CLFcdIo3gp3DcLbawOTb62", "_blank");
    setShowSuccessDialog(false);
  };

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Register for {event.title}</CardTitle>
              <CardDescription>
                {event.date} • {event.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select title" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Mr">Mr</SelectItem>
                              <SelectItem value="Mrs">Mrs</SelectItem>
                              <SelectItem value="Miss">Miss</SelectItem>
                              <SelectItem value="Dr">Dr</SelectItem>
                              <SelectItem value="Prof">Prof</SelectItem>
                              <SelectItem value="Pastor">Pastor</SelectItem>
                              <SelectItem value="Rev">Rev</SelectItem>
                              <SelectItem value="Bishop">Bishop</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="middleName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Middle Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your middle name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age Group *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select age group" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="12-15">12-15</SelectItem>
                              <SelectItem value="16-23">16-23</SelectItem>
                              <SelectItem value="24-30">24-30</SelectItem>
                              <SelectItem value="31-40">31-40</SelectItem>
                              <SelectItem value="41-50">41-50</SelectItem>
                              <SelectItem value="50+">50+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="maritalStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Marital Status *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select marital status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="single">Single</SelectItem>
                              <SelectItem value="engaged">Engaged</SelectItem>
                              <SelectItem value="married">Married</SelectItem>
                              <SelectItem value="divorced">Divorced</SelectItem>
                              <SelectItem value="widowed">Widowed</SelectItem>
                            </SelectContent>
                          </Select>
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
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bornAgain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Are you born again? *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Yes">Yes</SelectItem>
                              <SelectItem value="No">No</SelectItem>
                              <SelectItem value="Not sure">Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your residential address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="churchMember"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Are you a member of a church/ministry? *</FormLabel>
                        <Select onValueChange={(value) => {
                          field.onChange(value);
                          if (value === "No") {
                            setValue("churchName", "");
                          }
                        }} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {churchMember === "Yes" && (
                    <FormField
                      control={form.control}
                      name="churchName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name of Church/Ministry *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter church/ministry name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="churchRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Which of the following applies to you in your church/ministry? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Senior Minister">Senior Minister</SelectItem>
                            <SelectItem value="Associate Minister">Associate Minister</SelectItem>
                            <SelectItem value="Department/Unit Head">Department/Unit Head</SelectItem>
                            <SelectItem value="Member">Member</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="isPioneer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Are you a pioneer of a church/ministry? *</FormLabel>
                        <Select onValueChange={(value) => {
                          field.onChange(value);
                          if (value === "No") {
                            setValue("ministryName", "");
                          }
                        }} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {isPioneer === "Yes" && (
                    <FormField
                      control={form.control}
                      name="ministryName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name of Your Church/Ministry</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your church/ministry name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Register for Event"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col items-start text-sm text-muted-foreground">
              <p>By registering, you agree to participate in the event and follow the event guidelines.</p>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Registration Successful!</DialogTitle>
            <DialogDescription>
              Thank you for registering for the {event.title}. Your registration has been successfully received.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>Join our WhatsApp group to receive updates and connect with other participants.</p>
          </div>
          <DialogFooter>
            <Button onClick={joinWhatsAppGroup} className="w-full">
              Join WhatsApp Group
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default EventRegistration;
