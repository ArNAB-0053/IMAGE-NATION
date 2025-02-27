import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Image Generator",
  description: "Generate stunning images from text descriptions using AI",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Navigation />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
