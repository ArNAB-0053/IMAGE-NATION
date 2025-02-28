import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Montserrat,
  Playfair_Display,
  Poppins,
  Anton,
  Teko,
  Titillium_Web,
  Lexend_Giga,
  Source_Code_Pro,
  Oswald,
} from "next/font/google";
import Link from "next/link";

// Font configurations
const montserrat = Montserrat({
  subsets: ["latin"],
});

const playfairDisplay = Lexend_Giga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center  text-white overflow-hidden ">
      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Animated Heading */}
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`${montserrat.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500`}
            >
              Turn
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`${playfairDisplay.className} text-5xl md:text-7xl font-bold my-2 pb-3`}
            >
              Your Imagination
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className={`${montserrat.className} text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r pb-3 from-purple-400 to-pink-500`}
            >
              Into Reality
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className={`${poppins.className} text-lg md:text-xl text-slate-300 max-w-2xl`}
          >
            Image-Nation transforms text into stunning visuals using AI-powered
            generation. Create, inspire, and share your vision with the world.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link href="/generate">
              <Button
                className={`${poppins.className} text-lg px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-full font-medium cursor-pointer`}
                onClick={() => {
                  document
                    .getElementById("generate-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Generate Your Image
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
