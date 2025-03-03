import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Programmes = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/72f32702-b826-4dbb-97cc-d3282b2e80ad.png"
            alt="Programmes Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programmes</h1>
          <p className="text-lg md:text-xl">
            Discover opportunities for growth and development
          </p>
        </div>
      </section>

      {/* Programme Categories */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {/* Education Initiative */}
            <div className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Education Initiative</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">
                    Our flagship education programme focuses on providing quality education through innovative teaching methods and comprehensive curriculum.
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Duration: 12 months</li>
                    <li>Mode: Hybrid (Online & In-person)</li>
                    <li>Certification provided</li>
                  </ul>
                  <Button asChild>
                    <Link to="/#register">Apply Now</Link>
                  </Button>
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">What you'll learn:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Advanced Teaching Methods</li>
                    <li>Curriculum Development</li>
                    <li>Student Assessment</li>
                    <li>Educational Technology</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Innovation Hub */}
            <div className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Innovation Hub</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">
                    A space for creativity and technological advancement, fostering innovation and entrepreneurship.
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Duration: 6 months</li>
                    <li>Mode: In-person</li>
                    <li>Project-based learning</li>
                  </ul>
                  <Button asChild>
                    <Link to="/#register">Apply Now</Link>
                  </Button>
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Programme Features:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Mentorship</li>
                    <li>Networking Events</li>
                    <li>Resources & Support</li>
                    <li>Pitch Opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programmes;
