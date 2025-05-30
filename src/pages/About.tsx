
import { ArrowRight, Users, Target, Heart, Award } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative section-padding min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/aacd1dd4-d8aa-45de-91c4-1a6d28486971.png"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl">
            To equip the saints for End-time Spiritual Warfare and Kingdom advancement across every sphere of society.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              To equip the saints for End-time Spiritual Warfare and Kingdom advancement across every sphere of society.
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
              To train Christ-like leaders through sound biblical doctrine and theology, to bear accurate witness unto Jesus both within the Church and in the marketplace.
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
          <h2 className="text-3xl font-bold text-center mb-8">About Adullam & ADC</h2>
          <div className="glass p-8 rounded-lg">
            <p className="mb-6 text-lg">
              RCN Theological Seminary – Adullam exists to equip Christ-like leaders through sound biblical doctrine and theology, to bear accurate witness unto Jesus both within the Church and in the marketplace. Adullam cultivates rigorous minds, passionate hearts, and Christ-centred lifestyle to prepare servant leaders for transformational ministry in a broken and complex world in collaboration with the Church.
            </p>
            <p className="mb-6 text-lg">
              As part of our specialized training modules, we introduce the Apostolic Development Centre (ADC)—a strategic training platform designed to equip the saints for End-time Spiritual Warfare and Kingdom advancement across every sphere of society. ADC serves as an intensive training module where believers are immersed in the knowledge, discipline, and spiritual strategies required to contend for the faith and establish God's will in their respective domains.
            </p>
            <h3 className="text-2xl font-bold mb-4">Intended Audience</h3>
            <p className="mb-4 text-lg">This training is specifically designed for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-lg">
              <li>Christian leaders, ministers, and pastors</li>
              <li>Intercessors and prophetic voices</li>
              <li>Kingdom professionals seeking to influence their spheres spiritually and physically</li>
              <li>Believers desiring deeper spiritual encounters and warfare training</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
