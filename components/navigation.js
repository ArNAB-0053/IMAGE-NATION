"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Sparkles, Menu } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-b from-gray-950/90 to-gray-900/70 backdrop-blur-xl border-b border-gray-800/40 shadow-md">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-gray-300 text-base hover:text-purple-300 transition-colors duration-300 ease-out"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-300 text-base hover:text-purple-300 transition-colors duration-300 ease-out"
              >
                About
              </Link>
            </div>

            {/* GitHub and Docs */}
            <div className="flex items-center gap-4 bg-purple-800/20 rounded-full px-4 py-1.5">
              <Link
                href="/"
                className="text-gray-300 text-base hover:text-purple-300 transition-colors duration-300 ease-out"
              >
                Docs
              </Link>
              <div className="h-[1rem] w-[0.1px] bg-purple-300/50"></div>
              <Link
                href="https://github.com/ArNAB-0053/IMAGE-NATION"
                target="_blank"
                className="text-gray-300 text-base hover:text-purple-300 transition-colors duration-300 ease-out flex items-center gap-1.5"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>

            {/* Highlighted Generate Image Link */}
            <Link
              href="/generate"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 rounded-full shadow-sm hover:from-purple-700 hover:to-cyan-600 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              <Sparkles className="h-4 w-4 animate-pulse-slow" />
              <span className="text-base font-medium">Generate Image</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden text-gray-300 hover:text-purple-300 hover:bg-gray-800/50 p-2 rounded-full transition-all duration-300 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu with Smooth Transition */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed left-0 right-0 bg-gray-950/95 backdrop-blur-xl z-40 shadow-lg"
            style={{ top: "64px" }} // Adjust according to header height
          >
            <nav className="flex flex-col items-center py-6">
              <Link
                href="/"
                className="text-gray-300 text-lg hover:text-purple-300 transition-colors duration-300 ease-out w-full text-center py-2"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <div className="h-[1px] w-2/3 bg-gray-600/50"></div>

              <Link
                href="#"
                className="text-gray-300 text-lg hover:text-purple-300 transition-colors duration-300 ease-out w-full text-center py-2"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <div className="h-[1px] w-2/3 bg-gray-600/50"></div>

              <Link
                href="/"
                className="text-gray-300 text-lg hover:text-purple-300 transition-colors duration-300 ease-out w-full text-center py-2"
                onClick={toggleMobileMenu}
              >
                Docs
              </Link>
              <div className="h-[1px] w-2/3 bg-gray-600/50"></div>

              <Link
                href="https://github.com/ArNAB-0053/IMAGE-NATION"
                target="_blank"
                className="text-gray-300 text-lg hover:text-purple-300 transition-colors duration-300 ease-out flex items-center gap-2 w-full justify-center py-2"
                onClick={toggleMobileMenu}
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
              <div className="h-[1px] w-2/3 bg-gray-600/50"></div>

              <Link
                href="/generate"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-md lg:rounded-full shadow-sm hover:from-purple-700 hover:to-cyan-600 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 mt-2"
                onClick={toggleMobileMenu}
              >
                <Sparkles className="h-5 w-5 animate-pulse-slow" />
                <span className="text-lg font-medium">Generate Image</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
