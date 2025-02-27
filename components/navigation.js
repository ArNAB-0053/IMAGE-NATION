"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Github, RefreshCw, Share2, Sparkles } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-gray-950/90 to-gray-900/70 backdrop-blur-xl border-b border-gray-800/40 shadow-md">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo/>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {/* Primary Links */}
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

          {/* Grouped GitHub and Docs */}
          <div className="flex items-center gap-4 bg-purple-800/20 rounded-full px-4 py-1.5">
            <Link
              href="/"
              className="text-gray-300 text-base hover:text-purple-300 transition-colors duration-300 ease-out"
            >
              Docs
            </Link>
            <div className="h-[1rem] w-[0.1px] bg-purple-300/50"></div>
            <Link
              href="/"
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
          className="md:hidden text-gray-300 hover:text-purple-300 hover:bg-gray-800/50 p-2 rounded-full transition-all duration-300"
        >
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navigation;