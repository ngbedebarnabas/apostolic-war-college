
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import EventRegistration from "./pages/EventRegistration";
import PrayerRequest from "./pages/PrayerRequest";
import ShareTestimony from "./pages/ShareTestimony";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  // Create a client instance inside the component to ensure it's in the right context
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:eventId/register" element={<EventRegistration />} />
                <Route path="/prayer-request" element={<PrayerRequest />} />
                <Route path="/share-testimony" element={<ShareTestimony />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
