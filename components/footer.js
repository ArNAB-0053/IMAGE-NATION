"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/40 bg-gradient-to-t from-gray-950 to-gray-900 py-12 relative z-10 text-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Section - Logo and Tagline */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <Logo/>
            {/* Tagline */}
            <p className="text-gray-300 text-base font-medium tracking-wide">
              We convert your imagination into images.
            </p>
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Image-Nation. All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Grouped GitHub and Docs */}
            <div className="flex items-center gap-4 bg-gray-800/30 rounded-full px-4 py-2">
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-300 transition-colors duration-300 ease-out"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-300 transition-colors duration-300 ease-out"
              >
                Docs
              </Link>
            </div>
            {/* Feedback Button */}
            <Button
              variant="outline"
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-gray-200 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-500/10 rounded-xl px-6 py-2 transition-all duration-300"
            >
              Share Feedback
            </Button>
          </div>
        </div>

        {/* Subtle Decorative Line */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;