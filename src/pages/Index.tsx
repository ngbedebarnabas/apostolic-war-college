
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const event = {
    id: "bootcamp-2025",
    title: "21 Days Fasting Bootcamp",
    date: "2nd-22nd June 2025",
    time: "8AM DAILY",
    location: "Adullam Chapel, No 4, Remnant Avenue, Opposite State Library, Wurukum Benue State",
    description: "A strategic training platform designed to equip the saints for End-time Spiritual Warfare and Kingdom advancement.",
    host: "Reverend Daniel Ogidi",
    image: "/lovable-uploads/548ce09c-0683-45aa-8ff8-a6c401462ced.png"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/aacd1dd4-d8aa-45de-91c4-1a6d28486971.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            The Apostolic Development Centre (ADC)
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
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome to The Apostolic Development Centre</h2>
          <p className="text-lg mb-6">
            The Apostolic Development Centre serves as an intensive training module where believers are immersed in the knowledge, discipline, and spiritual strategies required to contend for the faith and establish God's will in their respective domains.
          </p>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="section-padding bg-primary/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Event</h2>
          <div className="max-w-xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date} • {event.time}</span>
                </CardDescription>
                <CardDescription className="mt-1">
                  {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
                <p className="text-sm font-semibold mt-3">
                  Host: {event.host}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button asChild>
                  <Link to={`/events/${event.id}/register`}>Register Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
