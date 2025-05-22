
import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Events = () => {
  const events = [
    {
      id: "bootcamp-2025",
      title: "21 Days Fasting Bootcamp",
      date: "2nd-22nd June 2025",
      time: "8AM DAILY",
      location: "Adullam Chapel, No 4, Remnant Avenue, Opposite State Library, Wurukum Benue State",
      description: "A strategic training platform designed to equip the saints for End-time Spiritual Warfare and Kingdom advancement.",
      host: "Reverend Daniel Ogidi",
      image: "/lovable-uploads/548ce09c-0683-45aa-8ff8-a6c401462ced.png"
    },
    // You can add more events here as needed
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Join us for these transformative events designed to equip and empower believers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
