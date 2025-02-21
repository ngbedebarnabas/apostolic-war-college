
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Check, CreditCard } from "lucide-react";
import { useState } from "react";

const Partnerships = () => {
  const { toast } = useToast();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Processing Payment",
      description: "Please connect to Supabase to enable secure payment processing.",
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with new background */}
      <section className="relative section-padding min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/72f32702-b826-4dbb-97cc-d3282b2e80ad.png"
            alt="Partnership Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h1>
          <p className="text-lg md:text-xl">
            Join us in creating meaningful impact through strategic partnerships
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span>Create lasting social change</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span>Reach diverse communities</span>
                </li>
              </ul>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Visibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span>Brand recognition</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span>Media coverage</span>
                </li>
              </ul>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span>Access to network</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span>Shared resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers & Payment */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Strategic Partner</h3>
              <p className="mb-4">Long-term collaboration with deep integration and shared objectives.</p>
              <p className="text-2xl font-bold mb-6">$10,000 / year</p>
              <Button onClick={() => document.getElementById('payment-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full">
                Get Started
              </Button>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Sponsor</h3>
              <p className="mb-4">Support specific programs or initiatives with targeted resources.</p>
              <p className="text-2xl font-bold mb-6">$5,000 / year</p>
              <Button onClick={() => document.getElementById('payment-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full">
                Learn More
              </Button>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community Partner</h3>
              <p className="mb-4">Collaborate on community projects and local initiatives.</p>
              <p className="text-2xl font-bold mb-6">$2,500 / year</p>
              <Button onClick={() => document.getElementById('payment-form')?.scrollIntoView({ behavior: 'smooth' })} className="w-full">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section id="payment-form" className="section-padding">
        <div className="max-w-md mx-auto">
          <div className="glass p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Payment Details</h3>
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                  Name on Card
                </label>
                <Input
                  id="cardName"
                  placeholder="John Doe"
                  value={paymentDetails.name}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                  Card Number
                </label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium mb-1">
                    Expiry Date
                  </label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                    CVV
                  </label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={paymentDetails.cvv}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                <CreditCard className="w-4 h-4 mr-2" /> Process Payment
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
