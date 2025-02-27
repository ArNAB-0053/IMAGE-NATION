import Link from "next/link";
import { Oswald, Lexend_Giga, Poppins } from "next/font/google";

// Font configurations
const oswald = Oswald({ 
  subsets: ['latin']
});

const lexendGiga = Lexend_Giga({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lexend',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
});

const Logo = () => {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative flex items-center">
        {/* Logo mark - stylized "I" */}
        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center overflow-hidden mr-1 group-hover:from-purple-600 group-hover:to-cyan-500 transition-all duration-300 transform group-hover:rotate-3">
          <span className={`text-white font-bold text-lg ${oswald.className}`}>I</span>
        </div>
        
        {/* Logo text */}
        <div className="flex items-baseline">
          <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400 tracking-tight group-hover:from-purple-600 group-hover:to-purple-500 transition-all duration-300 ${oswald.className}`}>
            Image
          </span>
          <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-tight group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300 ${oswald.className}`}>
            -Nation
          </span>
        </div>
        
        {/* Hover effect glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
};

export default Logo;