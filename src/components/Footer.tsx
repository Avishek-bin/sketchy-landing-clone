
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-xl text-sketch-blue mb-4">SketchyDraw</h3>
            <p className="text-sketch-gray mb-4">
              Create beautiful hand-drawn diagrams and illustrations with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sketch-gray hover:text-sketch-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-sketch-gray hover:text-sketch-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-sketch-gray hover:text-sketch-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-sketch-gray hover:text-sketch-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase text-sketch-gray tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sketch-gray hover:text-sketch-blue transition-colors">Features</a></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Templates</Link></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Integrations</Link></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase text-sketch-gray tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Documentation</Link></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Tutorials</Link></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase text-sketch-gray tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">About</Link></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Contact</Link></li>
              <li><Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sketch-gray text-sm">
            &copy; {new Date().getFullYear()} SketchyDraw. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/" className="text-sketch-gray hover:text-sketch-blue transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
