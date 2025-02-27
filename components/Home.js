"use client";

import Galary from "./galary";
import Hero from "./hero";
import HowItWorks from "./how-it-works";

export default function Home() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden bg-gray-950">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500 rounded-full blur-[150px]" />
      </div>

      <main className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <Hero />
        <HowItWorks />

        <section className="mt-16 mb-20 max-w-2xl mx-auto">
          <div className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700/40 rounded-xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Note-like header */}
            <h2 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
              <span className="text-yellow-400">📌</span> A Quick Note
            </h2>

            {/* Purpose content */}
            <p className="text-gray-300 text-sm leading-relaxed">
              So, <strong>"Image-Nation"</strong> was my final-year project—a little experiment with AI image generation using <strong>VQGAN + CLIP</strong>. 
              It’s not running on fancy diffusion models like <strong>Stable Diffusion</strong> or <strong>DALL·E</strong> (my GPU would cry), 
              but it’s a cool proof of concept to see how text prompts can spark visuals.
            </p>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              The idea was to keep it simple and fun—turn imagination into pixels. 
              Down the road, I’d love to polish it into a sleek web app where anyone can play around with it. 
              For now, it’s just a project I poured some heart into!
            </p>

            {/* Subtle decorative line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>
        </section>

        <Galary/>
      </main>
    </div>
  );
}