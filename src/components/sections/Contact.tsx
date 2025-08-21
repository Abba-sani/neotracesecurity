import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Shield, Clock, Globe, MessageCircle, Link } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyber-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-cyber bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to protect your digital assets? Contact us for a confidential consultation 
            about your cybersecurity and investigation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-cyber-blue/20 cyber-glow">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl text-cyber-blue flex items-center">
                <Send className="w-6 h-6 mr-3" />
                Send Secure Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-surface-elevated border-cyber-blue/30 focus:border-cyber-green text-foreground"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-surface-elevated border-cyber-blue/30 focus:border-cyber-green text-foreground"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Case Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-surface-elevated border-cyber-blue/30 focus:border-cyber-green text-foreground min-h-32"
                    placeholder="Please describe your case or security concern. All communications are confidential."
                    required
                  />
                </div>

                <div className="flex items-center space-x-2 p-3 bg-cyber-green/10 border border-cyber-green/20 rounded-lg">
                  <Shield className="w-5 h-5 text-cyber-green flex-shrink-0" />
                  <span className="text-sm text-cyber-green">
                    All communications are encrypted and confidential
                  </span>
                </div>

                <Button type="submit" variant="cyber" size="lg" className="w-full">
                  Send Secure Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="glass border-cyber-blue/20 cyber-glow">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-cyber-blue">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-cyber-blue">contact@neotrace-security.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Emergency Hotline</div>
                    <div className="text-cyber-blue">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-cyber-blue">Secure Facility, Global Operations</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-cyber-blue">+1 (555) 987-6543</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                    <Link className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Facebook Page</div>
                    <div className="text-cyber-blue">fb.com/neotrace-security</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="glass border-cyber-blue/20 cyber-glow">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-cyber-blue flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Emergency Cases</span>
                  <span className="text-cyber-green font-semibold">&lt; 1 Hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Standard Inquiries</span>
                  <span className="text-cyber-blue font-semibold">&lt; 4 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Consultations</span>
                  <span className="text-cyber-purple font-semibold">&lt; 24 Hours</span>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass border-cyber-blue/20 cyber-glow">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-cyber-blue flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Global Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  24/7 emergency response for critical security incidents. 
                  Regular consultations available worldwide across all time zones.
                </p>
                <div className="inline-flex items-center px-3 py-2 rounded-full bg-cyber-green/10 border border-cyber-green/20">
                  <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse"></div>
                  <span className="text-cyber-green text-sm font-medium">Currently Available</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Map Placeholder */}
        <div className="mt-16">
          <Card className="glass border-cyber-blue/20 cyber-glow">
            <CardContent className="p-0">
              <div className="h-64 bg-surface-elevated rounded-lg flex items-center justify-center border border-cyber-blue/10">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-cyber-blue mx-auto mb-4" />
                  <div className="font-orbitron text-xl text-cyber-blue mb-2">Secure Location</div>
                  <div className="text-foreground/60">
                    Exact location disclosed upon consultation for security purposes
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;