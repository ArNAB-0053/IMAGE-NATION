"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  // Array of image objects from 1 to 16
  const initialImages = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/Images/gallery${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
    position: i, // Store the current position
  }));

  // State to hold images and their positions
  const [images, setImages] = useState(initialImages);
  const [isShuffling, setIsShuffling] = useState(false);
  const positionsRef = useRef(new Map()); // Store previous positions

  // Function to determine how many images to show based on screen size
  const getDisplayedImages = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return images.slice(0, 4); // Mobile (2x2)
      if (window.innerWidth < 1024) return images.slice(0, 9); // Tablet (3x3)
    }
    return images; // Large screens (default)
  };

  // Function to shuffle images with position tracking
  const shuffleImages = () => {
    setIsShuffling(true);

    // Store current positions before shuffling
    images.forEach((img) => {
      const element = document.getElementById(`gallery-item-${img.id}`);
      if (element) {
        positionsRef.current.set(img.id, {
          x: element.getBoundingClientRect().left,
          y: element.getBoundingClientRect().top,
        });
      }
    });

    // Shuffle images
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

      // Update positions
      shuffled[i].position = i;
      shuffled[j].position = j;
    }

    // Update state with shuffled images
    setTimeout(() => {
      setImages(shuffled);
      setTimeout(() => setIsShuffling(false), 1000);
    }, 100);
  };

  // Effect to shuffle images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      shuffleImages();
    }, 7000); // Shuffle every 7 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
            Inspiration Gallery
          </span>
        </h2>

        {/* Gallery Container */}
        <div className="
          grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-6 relative h-auto"
        >
          {getDisplayedImages().map((image) => {
            // Calculate position for animation path
            const getPosition = () => {
              const prevPos = positionsRef.current.get(image.id);
              const currentElement = document.getElementById(`gallery-item-${image.id}`);
              const currentPos = currentElement?.getBoundingClientRect();

              if (prevPos && currentPos && isShuffling) {
                return {
                  x: prevPos.x - currentPos.left,
                  y: prevPos.y - currentPos.top,
                };
              }
              return { x: 0, y: 0 };
            };

            return (
              <motion.div
                id={`gallery-item-${image.id}`}
                key={image.id}
                layout
                initial={isShuffling ? getPosition() : false}
                animate={{ x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1,
                }}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-md border 
                  border-gray-700/30 hover:border-purple-500/60 hover:shadow-xl transition-colors duration-300"
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-purple-500/40 to-cyan-500/40 mix-blend-overlay pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isShuffling ? 0.7 : 0 }}
                  exit={{ opacity: 0 }}
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-cyan-500/20 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400/70 text-sm mt-8">
          <strong>Note:</strong> These are placeholder images for UI purposes only, not generated by this model.
          The puzzle-like path animation shows the journey of each image during shuffling.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
