
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

      {/* Programme Details */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {/* Module 1 */}
            <div className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Apostolic War College – Module 1</h2>
              <p className="mb-6 text-lg">
                Module 1 is designed as an introduction to supernatural realities essential for believers engaged in spiritual warfare and kingdom advancement. This module is structured to build a robust understanding of the supernatural dimension in which believers operate and how it can be applied in our world today in family life, ministry, and the marketplace.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Objectives</h3>
              <p className="mb-4">By the end of this training, participants will:</p>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Understand the apostolic mandate and its role in the End-time agenda.</li>
                <li>Gain insight into the fundamentals of the supernatural and how to walk in them.</li>
                <li>Grasp the kingdom fundamentals necessary for advancing God's dominion in various spheres (Supernatural and Physical).</li>
                <li>Develop an awareness of spiritual communications and how to perceive, discern, understand, interpret, and apply divine instructions.</li>
                <li>Experience practical engagement in intensive prayer, spiritual exercises, and their implication to our contemporary world.</li>
                <li>Be equipped for effective spiritual warfare strategies and kingdom governance.</li>
              </ol>
              
              <div className="mt-6">
                <Button asChild>
                  <Link to="/#register">Apply Now</Link>
                </Button>
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
