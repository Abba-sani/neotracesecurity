import { Linkedin, Github, Twitter, Shield } from "lucide-react";
import logo from "@/assets/neotrace-logo.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: Github, 
      href: "#",
      label: "GitHub"
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter"
    }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclaimer", href: "#" }
  ];

  return (
    <footer className="bg-surface border-t border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <img 
                  src={logo} 
                  alt="NeoTrace Security" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-cyber opacity-20 rounded-lg blur-sm"></div>
              </div>
              <div className="font-orbitron font-bold text-xl bg-gradient-cyber bg-clip-text text-transparent">
                NeoTrace Security
              </div>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Professional cybersecurity and digital investigation services. 
              Protecting your digital assets with complete confidentiality and proven expertise.
            </p>
            <div className="flex items-center space-x-2 text-cyber-green">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Certified & Licensed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-lg font-semibold text-cyber-blue">
              Services
            </h3>
            <div className="space-y-2">
              {[
                "Digital Forensics",
                "Crypto Recovery", 
                "Fraud Investigation",
                "Asset Tracking",
                "Security Consulting"
              ].map((service) => (
                <div key={service}>
                  <a 
                    href="#services" 
                    className="text-foreground/70 hover:text-cyber-green transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-lg font-semibold text-cyber-blue">
              Connect
            </h3>
            <div className="space-y-3">
              <div className="text-foreground/70 text-sm">
                <div>Emergency: +1 (555) 123-4567</div>
                <div>Email: contact@neotrace-security.com</div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-surface-elevated border border-cyber-blue/30 rounded-lg flex items-center justify-center hover:bg-cyber-blue hover:text-background transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              
              <div className="inline-flex items-center px-3 py-2 rounded-full bg-cyber-green/10 border border-cyber-green/20">
                <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse"></div>
                <span className="text-cyber-green text-xs font-medium">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-cyber-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-foreground/60 text-sm">
              © 2024 NeoTrace Security. All rights reserved. Licensed cybersecurity professionals.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/60 hover:text-cyber-blue transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;