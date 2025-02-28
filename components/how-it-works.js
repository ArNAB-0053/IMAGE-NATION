import { Card, CardContent } from "./ui/card";
import { FaPencilAlt, FaBrain, FaDownload } from "react-icons/fa";

const HowItWorks = () => {
  // Define the items array
  const items = [
    {
      step: "01",
      title: "Enter a Text Prompt",
      description:
        "Describe your vision in detail—the more specific, the better the outcome.",
      icon: <FaPencilAlt className="text-4xl" />,
    },
    {
      step: "02",
      title: "AI Creates Magic",
      description:
        "Our cutting-edge AI interprets your words and crafts a stunning image.",
      icon: <FaBrain className="text-4xl" />,
    },
    {
      step: "03",
      title: "Download or Tweak",
      description:
        "Grab your image instantly or refine your prompt for perfection.",
      icon: <FaDownload className="text-4xl" />,
    },
  ];

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            How It Works
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="relative bg-gray-850/70 backdrop-blur-xl border border-gray-700/30 rounded-2xl overflow-hidden group hover:border-purple-600/60 hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
            >
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                {/* Step Number - Positioned in a sleek badge */}
                <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 text-lg font-bold px-3 py-1 rounded-full group-hover:bg-purple-500/40 transition-colors duration-300">
                  {item.step}
                </div>

                {/* Icon - Centered and prominent */}
                <div className="text-purple-400 group-hover:text-purple-300 mb-6 transform group-hover:scale-110 transition-all duration-300 self-start">
                  {item.icon}
                </div>

                {/* Title - Bold and modern */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description - Clean and readable */}
                <p className="text-gray-300/90 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;