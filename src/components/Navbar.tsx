import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import wingmenLogo from "@/assets/wingmen-logo.png";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#attendee", label: "ATTENDEE" },
  { href: "#roadmap", label: "ROADMAP" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#", label: "WINGPAPER" },
  { href: "#", label: "FOLLOW US" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex-shrink-0 cursor-pointer"
          >
            <img 
              src={wingmenLogo} 
              alt="WINGMEN" 
              className="h-9 md:h-12 lg:h-14 xl:h-16 w-auto"
            />
          </a>

          {/* Right nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-link text-center py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
