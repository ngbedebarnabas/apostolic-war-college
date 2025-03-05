
import { Link } from "react-router-dom";

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
                <a href="https://adullam.ng" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white">Adullam</a>
              </li>
              <li>
                <a href="https://rcnglobal.org" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white">RCN Global</a>
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
          <p>&copy; {new Date().getFullYear()} The Apostolic War College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
