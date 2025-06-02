
import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm text-white/80">
              Empowering individuals and organizations through innovative programmes and meaningful partnerships.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://youtube.com/@rcn_ac?si=q6snVyGBSU_lMWX1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.facebook.com/share/16ZRrgPysP/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/rcn.ac?igsh=MXY1d2JoMnBhMTZyMA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/programmes" className="text-sm text-white/80 hover:text-white">Programmes</Link>
              </li>
              <li>
                <a href="https://adullam.ng" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
                  <img 
                    src="/lovable-uploads/a8a8eb95-f274-453d-bffc-2b730ecea1e0.png" 
                    alt="Adullam" 
                    className="h-11 w-auto"
                  />
                </a>
              </li>
              <li>
                <a href="https://rcnglobal.org" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
                  <img 
                    src="/lovable-uploads/4ddfed4e-e3d7-4986-8375-35ce73597c9e.png" 
                    alt="RCN Global" 
                    className="h-11 w-auto"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Email: info@apostolicwc.org</li>
              <li>(WhatsApp Only) +234 807 309 5885</li>
              <li>Address: No. 4 Remnant Avenue, Opposite State Library, Wurukum, Makurdi</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} The Apostolic College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
