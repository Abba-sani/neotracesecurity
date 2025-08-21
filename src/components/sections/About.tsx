import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: Shield,
      title: "Ethical Operations",
      description: "All investigations conducted within legal frameworks"
    },
    {
      icon: Lock,
      title: "Complete Confidentiality", 
      description: "Your privacy and case details are fully protected"
    },
    {
      icon: Eye,
      title: "Professional Integrity",
      description: "Transparent processes with detailed reporting"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of successful asset recovery"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-6">
                About <span className="bg-gradient-cyber bg-clip-text text-transparent">NeoTrace Security</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                NeoTrace Security specializes in ethical digital forensics, cryptocurrency recovery, 
                cyber fraud investigation, and lawful asset tracking with complete confidentiality.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With years of experience in cybersecurity and digital investigation, we combine 
                cutting-edge technology with proven methodologies to protect and recover your digital assets.
              </p>
            </div>

            {/* Professional Portrait Placeholder */}
            <div className="glass rounded-lg p-6 border border-cyber-blue/20">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-cyber rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-background" />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-semibold text-cyber-blue">Lead Investigator</h3>
                  <p className="text-foreground/70">Certified Digital Forensics Expert</p>
                  <p className="text-sm text-foreground/60">Available for consultation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className="glass p-6 rounded-lg border border-cyber-blue/20 hover:border-cyber-green/40 transition-all duration-300 group cyber-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="font-orbitron text-lg font-semibold text-cyber-blue mb-2">
                  {principle.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "8+", label: "Years Experience" },
            { number: "500+", label: "Cases Solved" },
            { number: "99%", label: "Success Rate" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-orbitron font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;