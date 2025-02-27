"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  // Array of image objects from 1 to 16
  const initialImages = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/Images/galary${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
    position: i, // Store the current position
  }));

  // State to hold the images and their positions
  const [images, setImages] = useState(initialImages);
  const [isShuffling, setIsShuffling] = useState(false);
  const positionsRef = useRef(new Map()); // To store previous positions
  
  // Function to shuffle array with position tracking
  const shuffleImages = () => {
    setIsShuffling(true);
    
    // Store current positions before shuffling
    images.forEach(img => {
      positionsRef.current.set(img.id, {
        x: document.getElementById(`gallery-item-${img.id}`)?.getBoundingClientRect().left,
        y: document.getElementById(`gallery-item-${img.id}`)?.getBoundingClientRect().top
      });
    });
    
    // Create a new shuffled array
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      
      // Update positions
      shuffled[i].position = i;
      shuffled[j].position = j;
    }
    
    // Update with the new shuffled array
    setTimeout(() => {
      setImages(shuffled);
      setTimeout(() => setIsShuffling(false), 1000); // Allow animations to complete
    }, 100);
  };

  // Effect to shuffle images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      shuffleImages();
    }, 7000); // Increased to 7 seconds to allow animations to complete

    // Cleanup interval on component unmount
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative h-auto">
          {images.map((image) => {
            // Calculate position for animation path
            const getPosition = () => {
              const prevPos = positionsRef.current.get(image.id);
              const currentElement = document.getElementById(`gallery-item-${image.id}`);
              const currentPos = currentElement?.getBoundingClientRect();
              
              if (prevPos && currentPos && isShuffling) {
                return {
                  x: prevPos.x - currentPos.left,
                  y: prevPos.y - currentPos.top
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
                  mass: 1
                }}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-md border 
                  border-gray-700/30 hover:border-purple-500/60 hover:shadow-xl transition-colors duration-300"
              >
                {/* Connection Lines - Shows path during transition */}
                {isShuffling && (
                  <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-full h-full">
                      <motion.path
                        stroke="rgba(168, 85, 247, 0.4)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                        d={`M${getPosition().x},${getPosition().y} L0,0`}
                      />
                    </svg>
                  </motion.div>
                )}

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

                {/* Puzzle Path Indicators - Small circles that follow the path */}
                {isShuffling && (
                  <motion.div
                    className="absolute h-3 w-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 z-20"
                    initial={{ 
                      x: getPosition().x, 
                      y: getPosition().y,
                      scale: 1.5,
                      opacity: 1 
                    }}
                    animate={{ 
                      x: 0, 
                      y: 0, 
                      scale: 0.5,
                      opacity: 0 
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeOut" 
                    }}
                  />
                )}
                
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