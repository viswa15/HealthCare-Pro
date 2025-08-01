import { Heart, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-primary text-white shadow-medical">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <div className="relative">
                <Heart className="h-8 w-8" />
                <Stethoscope className="h-4 w-4 absolute -bottom-1 -right-1" />
              </div>
            </Link>
            
            <div>
              <h1 className="text-2xl font-bold">HealthCare Pro</h1>
              <p className="text-primary-foreground/80 text-sm">Your Health, Our Priority</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/find-doctors" className="hover:text-primary-foreground/80 transition-colors">
              Find Doctors
            </Link>
            <Link to="/about" className="hover:text-primary-foreground/80 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary-foreground/80 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;