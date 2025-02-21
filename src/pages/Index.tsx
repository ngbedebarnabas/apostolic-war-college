
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import RegistrationForm from "@/components/RegistrationForm";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Empowering Through Partnership
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeIn">
            Join us in creating meaningful impact through innovative programmes and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Button asChild size="lg">
              <Link to="/programmes">Explore Our Programmes</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/partnerships">Join Our Partnerships</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Our Initiative</h2>
          <p className="text-lg mb-8">
            We bring together organizations and individuals to create lasting positive change through innovative programmes and strategic partnerships.
          </p>
          <Link to="/about" className="inline-flex items

-center text-primary hover:underline">
            Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Programme Highlights */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programme Cards */}
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Education Initiative</h3>
              <p className="mb-4">Empowering through knowledge and skills development.</p>
              <Link to="/programmes" className="text-primary hover:underline">
                Learn more
              </Link>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation Hub</h3>
              <p className="mb-4">Fostering creativity and technological advancement.</p>
              <Link to="/programmes" className="text-primary hover:underline">
                Learn more
              </Link>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community Outreach</h3>
              <p className="mb-4">Creating lasting impact in local communities.</p>
              <Link to="/programmes" className="text-primary hover:underline">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Register Now</h2>
          <p className="text-lg mb-8">
            Take the first step towards your future by registering for one of our programmes.
          </p>
          <RegistrationForm />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest updates on our programmes and partnerships.
          </p>
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default Index;
