import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", path: "#about" },
    { name: "Features", path: "#features" },
    { name: "Services", path: "#services" },
  ];

  const scrollToSection = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 cursor-pointer">
            <img src="/bluepeak-logo.png" alt="BluePeak" className="h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className="text-sm font-bold text-[#00357a] hover:text-[#ff751f] transition-colors cursor-pointer relative uppercase tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#ff751f] hover:bg-[#e06010] text-white font-bold uppercase tracking-wide cursor-pointer text-sm"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00357a]"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t bg-background"
          >
            <div className="flex flex-col items-end space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className="block w-full text-right py-2 text-lg font-bold text-[#00357a] hover:text-[#ff751f] transition-colors cursor-pointer uppercase"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="block w-full text-right py-2 text-lg font-bold text-[#ff751f] hover:text-[#e06010] transition-colors cursor-pointer uppercase"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}