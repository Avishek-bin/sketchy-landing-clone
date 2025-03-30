
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl text-sketch-blue">
            SketchyDraw
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sketch-gray hover:text-sketch-blue transition-colors">
            Features
          </a>
          <a href="#examples" className="text-sketch-gray hover:text-sketch-blue transition-colors">
            Examples
          </a>
          <Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">
            Docs
          </Link>
          <Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">
            About
          </Link>
          <Button variant="outline" className="border-sketch-blue text-sketch-blue hover:bg-sketch-blue hover:text-white transition-colors">
            Try it now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col space-y-4">
          <a href="#features" className="text-sketch-gray hover:text-sketch-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
          <a href="#examples" className="text-sketch-gray hover:text-sketch-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
            Examples
          </a>
          <Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
            Docs
          </Link>
          <Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Button variant="outline" className="border-sketch-blue text-sketch-blue hover:bg-sketch-blue hover:text-white transition-colors w-full">
            Try it now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
