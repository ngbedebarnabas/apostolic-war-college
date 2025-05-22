
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/72f32702-b826-4dbb-97cc-d3282b2e80ad.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            The Apostolic War College (AWC)
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeIn">
            A strategic training platform designed to equip the saints for End-time Spiritual Warfare and Kingdom advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Button asChild size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20">
              <Link to="/events">View Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome to The Apostolic War College</h2>
          <p className="text-lg mb-6">
            The Apostolic War College serves as an intensive training module where believers are immersed in the knowledge, discipline, and spiritual strategies required to contend for the faith and establish God's will in their respective domains.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Apostolic War College – Module 1</h3>
          <p className="text-lg mb-6">
            Module 1 is designed as an introduction to supernatural realities essential for believers engaged in spiritual warfare and kingdom advancement. This module is structured to build a robust understanding of the supernatural dimension in which believers operate and how it can be applied in our world today in family life, ministry, and the marketplace.
          </p>
          
          <h4 className="text-xl font-bold mt-8 mb-4">Objectives</h4>
          <p className="mb-4 text-lg">By the end of this training, participants will:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-lg">
            <li>Understand the apostolic mandate and its role in the End-time agenda.</li>
            <li>Gain insight into the fundamentals of the supernatural and how to walk in them.</li>
            <li>Grasp the kingdom fundamentals necessary for advancing God's dominion in various spheres (Supernatural and Physical).</li>
            <li>Develop an awareness of spiritual communications and how to perceive, discern, understand, interpret, and apply divine instructions.</li>
            <li>Experience practical engagement in intensive prayer, spiritual exercises, and their implication to our contemporary world.</li>
            <li>Be equipped for effective spiritual warfare strategies and kingdom governance.</li>
          </ul>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="section-padding bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Register Now</h2>
          <p className="text-lg mb-8">
            Take the first step towards your future by registering for one of our programmes.
          </p>
          <RegistrationForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
