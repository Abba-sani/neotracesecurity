import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Basic Investigation",
      price: "$1,500",
      period: "per case",
      icon: Star,
      description: "Essential digital investigation services for straightforward cases",
      features: [
        "Initial case assessment",
        "Basic digital forensics",
        "Email & document analysis",
        "Preliminary report",
        "5 hours of investigation",
        "Email support"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "cyber-outline" as const
    },
    {
      name: "Standard Recovery",
      price: "$3,500",
      period: "per case", 
      icon: Zap,
      description: "Comprehensive investigation with advanced recovery techniques",
      features: [
        "Everything in Basic",
        "Advanced blockchain analysis",
        "Cryptocurrency tracing",
        "Mobile device forensics",
        "Detailed evidence report",
        "15 hours of investigation",
        "Phone & email support",
        "Court testimony if needed"
      ],
      popular: true,
      buttonText: "Most Popular",
      buttonVariant: "cyber" as const
    },
    {
      name: "Premium Enterprise",
      price: "$7,500",
      period: "per case",
      icon: Crown,
      description: "Full-scale investigation with priority support and expert consultation",
      features: [
        "Everything in Standard", 
        "Multi-platform investigation",
        "International asset tracing",
        "Threat intelligence analysis",
        "Custom forensic tools",
        "Unlimited investigation hours",
        "24/7 priority support",
        "On-site consultation",
        "Expert witness testimony",
        "Ongoing security consulting"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "cyber-outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-6">
            Hire My <span className="bg-gradient-cyber bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Professional cybersecurity and digital investigation services with transparent pricing. 
            Choose the package that best fits your case requirements.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyber-green/30 bg-cyber-green/10">
            <Check className="w-4 h-4 text-cyber-green mr-2" />
            <span className="text-sm text-cyber-green font-medium">All packages include complete confidentiality</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`glass transition-all duration-500 cyber-glow relative ${
                pkg.popular 
                  ? 'border-cyber-green/40 transform scale-105' 
                  : 'border-cyber-blue/20 hover:border-cyber-green/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-cyber text-background px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                  pkg.popular ? 'bg-gradient-cyber' : 'bg-surface-elevated border border-cyber-blue/30'
                }`}>
                  <pkg.icon className={`w-8 h-8 ${pkg.popular ? 'text-background' : 'text-cyber-blue'}`} />
                </div>
                <CardTitle className="font-orbitron text-2xl text-cyber-blue mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-orbitron font-bold text-foreground">{pkg.price}</span>
                  <span className="text-foreground/60 ml-2">{pkg.period}</span>
                </div>
                <CardDescription className="text-foreground/80">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-cyber-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-cyber-green" />
                      </div>
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={pkg.buttonVariant}
                  size="lg" 
                  className="w-full"
                >
                  {pkg.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <div className="glass rounded-lg p-8 border border-cyber-blue/20 max-w-2xl mx-auto">
            <h3 className="font-orbitron text-xl font-semibold text-cyber-blue mb-4">
              Secure Payment Options
            </h3>
            <p className="text-foreground/80 mb-6">
              We accept multiple payment methods for your convenience. All transactions are secure and confidential.
            </p>
            <div className="flex justify-center space-x-8 text-foreground/60">
              <div className="text-center">
                <div className="w-12 h-8 bg-surface-elevated rounded border border-cyber-blue/20 flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">STRIPE</span>
                </div>
                <span className="text-xs">Credit Cards</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-8 bg-surface-elevated rounded border border-cyber-blue/20 flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">PP</span>
                </div>
                <span className="text-xs">PayPal</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-8 bg-surface-elevated rounded border border-cyber-blue/20 flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">₿</span>
                </div>
                <span className="text-xs">Bitcoin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;