import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Search, Database } from "lucide-react";
import heroBg from "@/assets/cyber-hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 grid-pattern"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 border border-cyber-blue/30 rounded-full flex items-center justify-center float">
          <Shield className="w-8 h-8 text-cyber-blue" />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 border border-cyber-green/30 rounded-lg flex items-center justify-center float" style={{ animationDelay: "1s" }}>
          <Search className="w-6 h-6 text-cyber-green" />
        </div>
        <div className="absolute bottom-40 left-20 w-14 h-14 border border-cyber-purple/30 rounded-full flex items-center justify-center float" style={{ animationDelay: "2s" }}>
          <Database className="w-7 h-7 text-cyber-purple" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyber-blue/30 bg-surface-glass/50 backdrop-blur-sm mb-8">
            <Shield className="w-4 h-4 text-cyber-blue mr-2" />
            <span className="text-sm font-medium text-cyber-blue">Professional Cybersecurity Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-orbitron font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Cybersecurity &
            </span>
            <br />
            <span className="text-foreground glitch-text">
              Digital Investigation
            </span>
            <br />
            <span className="text-cyber-green">
              You Can Trust
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert in digital forensics, crypto recovery, and cyber fraud investigation — 
            <span className="text-cyber-blue font-semibold"> protecting your assets</span> with complete confidentiality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cyber" 
              size="lg" 
              className="group text-lg px-8 py-6 animate-pulse-glow"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-cyber-green/50 text-cyber-green hover:bg-cyber-green hover:text-background"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-cyber-blue mb-2">500+</div>
              <div className="text-foreground/60">Cases Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-cyber-green mb-2">$10M+</div>
              <div className="text-foreground/60">Assets Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-cyber-purple mb-2">100%</div>
              <div className="text-foreground/60">Confidential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;