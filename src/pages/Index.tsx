import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Target, Award } from "lucide-react";

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
            Empowering Through Partnership
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeIn">
            Join us in creating meaningful impact through innovative programmes and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Button asChild size="lg">
              <Link to="/programmes">Explore Our Programmes</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">Led by industry professionals</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Focused Approach</h3>
              <p className="text-sm text-muted-foreground">Tailored to your needs</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Measurable impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold">MAR 15, 2024</p>
                  <h3 className="text-xl font-semibold mb-2">Annual Innovation Summit</h3>
                  <p className="text-muted-foreground mb-4">Join industry leaders and innovators for a day of inspiring talks and networking.</p>
                  <Link to="/events" className="text-primary hover:underline">Learn more</Link>
                </div>
              </div>
            </div>
            
            {/* Event Card 2 */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold">APR 5, 2024</p>
                  <h3 className="text-xl font-semibold mb-2">Community Workshop</h3>
                  <p className="text-muted-foreground mb-4">Hands-on workshop focusing on community development and leadership.</p>
                  <Link to="/events" className="text-primary hover:underline">Learn more</Link>
                </div>
              </div>
            </div>
            
            {/* Event Card 3 */}
            <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold">MAY 20, 2024</p>
                  <h3 className="text-xl font-semibold mb-2">Partner Networking Event</h3>
                  <p className="text-muted-foreground mb-4">Connect with potential partners and explore collaboration opportunities.</p>
                  <Link to="/events" className="text-primary hover:underline">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p>Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Partner Organizations</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p>Countries Reached</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p>Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Highlights */}
      <section className="section-padding bg-secondary/30">
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
      <section id="register" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Register Now</h2>
          <p className="text-lg mb-8">
            Take the first step towards your future by registering for one of our programmes.
          </p>
          <RegistrationForm />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest updates on our programmes and partnerships.
          </p>
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
