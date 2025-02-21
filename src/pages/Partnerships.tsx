
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Partnerships = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
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

      {/* Partnership Tiers */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Strategic Partner</h3>
              <p className="mb-6">Long-term collaboration with deep integration and shared objectives.</p>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Sponsor</h3>
              <p className="mb-6">Support specific programs or initiatives with targeted resources.</p>
              <Button className="w-full">Learn More</Button>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community Partner</h3>
              <p className="mb-6">Collaborate on community projects and local initiatives.</p>
              <Button className="w-full">Join Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
