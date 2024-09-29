import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Particle from "./components/particles";

export default function Home() {
  const particles = Array.from({ length: 10 }).map(() => ({
    top: Math.random() * 80 + 10,
    left: Math.random() * 80 + 10,
  }));

  return (
    <main className="relative flex min-h-screen flex-col bg-[#1E1C1F] text-[#D8C6B8] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mt-24 mx-auto px-6 py-6 md:px-16 md:py-10 relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 md:py-24 md:px-12 bg-gradient-to-r from-[#2C2A2D] to-[#48444E] text-[#D8C6B8] bg-opacity-60 shadow-md rounded-lg backdrop-blur-[6px] border-t border-l border-white/40">
          <HeroSection />
        </section>

        {/* Horizontal Divider */}
        <div className="my-10 h-1 w-full bg-[#6A6872]/40"></div>

        {/* About Section */}
        <section className="py-20 px-6 md:py-24 md:px-12 bg-gradient-to-r from-[#3F3C42] to-[#6A6872] text-[#D8C6B8] bg-opacity-60 shadow-md rounded-lg backdrop-blur-[6px] border-t border-l border-white/40">
          <AboutSection />
        </section>

        {/* Horizontal Divider */}
        <div className="my-10 h-1 w-full bg-[#6A6872]/40"></div>

        {/* Projects Section */}
        <section className="py-20 px-6 md:py-24 md:px-12 bg-gradient-to-r from-[#6A6872] to-[#A29E8C] text-[#D8C6B8] bg-opacity-60 shadow-md rounded-lg backdrop-blur-[6px] border-t border-l border-white/40">
          <ProjectsSection />
        </section>

        {/* Horizontal Divider */}
        <div className="my-10 h-1 w-full bg-[#6A6872]/40"></div>

        {/* Email Section */}
        <section className="py-20 px-6 md:py-24 md:px-12 bg-gradient-to-r from-[#A29E8C] to-[#D8C6B8] text-[#1E1C1F] bg-opacity-60 shadow-md rounded-lg backdrop-blur-[6px] border-t border-l border-white/40">
          <EmailSection />
        </section>
      </div>

      {/* Particles scattered randomly */}
      {particles.map((pos, index) => (
        <Particle key={index} top={pos.top} left={pos.left} />
      ))}

      <Footer />
    </main>
  );
}
