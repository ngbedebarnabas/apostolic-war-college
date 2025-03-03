
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold">
            <img 
              src="/lovable-uploads/86a1b68d-e975-4e1d-a5e2-8ed52da63bd1.png" 
              alt="Apostolic War College" 
              className="h-14" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/programmes" className="nav-link">
              Programmes
            </Link>
            <Link to="/partnerships" className="nav-link">
              Partnerships
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/programmes"
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Programmes
            </Link>
            <Link
              to="/partnerships"
              className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Partnerships
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
