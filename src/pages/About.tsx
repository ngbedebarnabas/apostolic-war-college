
import { ArrowRight, Users, Target, Heart, Award } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/72f32702-b826-4dbb-97cc-d3282b2e80ad.png"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl">
            Transforming lives through education and innovation
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              To provide accessible, quality education and innovative learning experiences that empower individuals to reach their full potential.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Target className="h-12 w-12 text-primary" />
              <p className="text-sm text-muted-foreground">
                Focused on delivering impactful educational programmes that transform lives
              </p>
            </div>
          </div>
          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              To be a leading institution in transformative education, creating positive change in communities worldwide.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Heart className="h-12 w-12 text-primary" />
              <p className="text-sm text-muted-foreground">
                Creating lasting impact through innovation and collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p>Striving for the highest standards in education and service.</p>
              <Award className="h-8 w-8 text-primary mt-4" />
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>Embracing new ideas and approaches to learning.</p>
              <Award className="h-8 w-8 text-primary mt-4" />
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p>Building strong relationships and fostering collaboration.</p>
              <Award className="h-8 w-8 text-primary mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="max-w-2xl mx-auto">
            <div className="glass p-8 rounded-lg">
              <Users className="h-16 w-16 mx-auto text-primary mb-6" />
              <p className="text-lg mb-6">
                Our dedicated team of professionals brings together diverse expertise and experience to deliver exceptional educational programmes and foster meaningful partnerships.
              </p>
              <p className="text-muted-foreground">
                Join our team of passionate educators, innovators, and change-makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
