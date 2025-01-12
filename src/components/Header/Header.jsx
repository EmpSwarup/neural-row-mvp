import { useState } from "react";
import Logo from "../../assets/nrlogo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#556570] text-white lg:px-40">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between py-5">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="NeuralRow Logo" className="h-16" />
        </a>
        <div className="flex space-x-16 text-xl">
          <a href="#home" className="hover:text-black transition">
            Home
          </a>
          <a href="#services" className="hover:text-black transition">
            Services
          </a>
          <a href="#about-us" className="hover:text-black transition">
            About Us
          </a>
          <a href="#contact-us" className="hover:text-black transition">
            Contact Us
          </a>
          <a href="#team" className="hover:text-black transition">
            Team
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between px-6 py-4 md:hidden">
        <div className="flex items-center">
          <img src={Logo} alt="NeuralRow Logo" className="h-10" />
        </div>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#556570] shadow-md z-10">
          <div className="flex flex-col gap-4 px-6 py-5">
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>
            <a href="#about-us" className="hover:text-yellow-400 transition">
              About Us
            </a>
            <a href="#contact-us" className="hover:text-yellow-400 transition">
              Contact Us
            </a>
            <a href="#team" className="hover:text-yellow-400 transition">
              Team
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
