import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardDrive, Coins, Search, MapPin, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: HardDrive,
      title: "Digital Forensics & Secure Data Recovery",
      description: "Advanced forensic analysis and secure recovery of digital evidence from computers, mobile devices, and storage media.",
      features: ["Data Recovery", "Evidence Analysis", "Chain of Custody", "Expert Testimony"]
    },
    {
      icon: Coins,
      title: "Crypto Wallet & Asset Recovery",
      description: "Specialized recovery of lost or stolen cryptocurrency assets using advanced blockchain analysis techniques.",
      features: ["Wallet Recovery", "Blockchain Tracing", "Exchange Investigation", "Asset Identification"]
    },
    {
      icon: Search,
      title: "Cyber Fraud & Scam Investigation",
      description: "Comprehensive investigation of online fraud, scams, and cybercriminal activities with detailed reporting.",
      features: ["Fraud Analysis", "Scam Investigation", "Identity Theft", "Financial Crimes"]
    },
    {
      icon: MapPin,
      title: "Lawful Asset & Vehicle Tracking",
      description: "Professional tracking services for lawful asset location and recovery with proper authorization.",
      features: ["Asset Location", "Vehicle Tracking", "Legal Compliance", "Recovery Assistance"]
    },
    {
      icon: ShieldCheck,
      title: "Security Consulting & Risk Assessment",
      description: "Proactive security consulting to identify vulnerabilities and strengthen your digital defenses.",
      features: ["Risk Assessment", "Security Audit", "Policy Development", "Training Programs"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-cyber bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive cybersecurity and digital investigation services tailored to protect and recover your digital assets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="glass border-cyber-blue/20 hover:border-cyber-green/40 transition-all duration-500 group cursor-pointer cyber-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-cyber rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-background" />
                </div>
                <CardTitle className="font-orbitron text-xl text-cyber-blue group-hover:text-cyber-green transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground/80 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div>
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass rounded-lg p-8 border border-cyber-blue/20 max-w-2xl mx-auto">
            <h3 className="font-orbitron text-2xl font-bold text-cyber-blue mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-foreground/80 mb-6">
              Every case is unique. Contact us for a confidential consultation to discuss your specific requirements.
            </p>
            <button className="bg-gradient-cyber text-background px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-cyber">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;