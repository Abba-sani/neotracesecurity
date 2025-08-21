import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Shield, Search, CheckCircle, TrendingUp, Lock } from "lucide-react";

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Cryptocurrency Recovery Operation",
      description: "Successfully recovered $75,000 in Bitcoin from a compromised wallet using advanced blockchain analysis techniques.",
      outcome: "$75K Recovered",
      category: "Crypto Recovery",
      icon: DollarSign,
      tags: ["Bitcoin", "Blockchain Analysis", "Wallet Recovery"],
      duration: "14 days",
      status: "Completed"
    },
    {
      id: 2,
      title: "Corporate Fraud Investigation",
      description: "Comprehensive digital forensics investigation that uncovered insider trading activities and secured crucial evidence.",
      outcome: "Evidence Secured",
      category: "Digital Forensics",
      icon: Search,
      tags: ["Corporate", "Insider Trading", "Evidence Analysis"],
      duration: "21 days", 
      status: "Completed"
    },
    {
      id: 3,
      title: "Ransomware Attack Response",
      description: "Rapid response to ransomware attack, recovered encrypted data and identified attack vectors to prevent future incidents.",
      outcome: "Data Restored",
      category: "Incident Response",
      icon: Shield,
      tags: ["Ransomware", "Data Recovery", "Security Assessment"],
      duration: "7 days",
      status: "Completed"
    },
    {
      id: 4,
      title: "Missing Asset Investigation",
      description: "Located and tracked stolen luxury vehicle using digital footprint analysis and surveillance coordination.",
      outcome: "Asset Located",
      category: "Asset Tracking",
      icon: CheckCircle,
      tags: ["Vehicle Tracking", "Digital Surveillance", "Asset Recovery"],
      duration: "10 days",
      status: "Completed"
    },
    {
      id: 5,
      title: "Investment Scam Analysis",
      description: "Traced fraudulent investment scheme across multiple platforms, recovered victim funds and identified perpetrators.",
      outcome: "$120K Recovered",
      category: "Fraud Investigation",
      icon: TrendingUp,
      tags: ["Investment Fraud", "Multi-platform", "Fund Recovery"],
      duration: "28 days",
      status: "Completed"
    },
    {
      id: 6,
      title: "Data Breach Investigation",
      description: "Forensic analysis of major data breach, identified entry points and provided security recommendations.",
      outcome: "Breach Contained",
      category: "Cybersecurity",
      icon: Lock,
      tags: ["Data Breach", "Forensic Analysis", "Security Audit"],
      duration: "18 days",
      status: "Completed"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-6">
            Case <span className="bg-gradient-cyber bg-clip-text text-transparent">Studies</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Real results from our cybersecurity and digital investigation work. All cases are anonymized to protect client confidentiality.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id}
              className="glass border-cyber-blue/20 hover:border-cyber-green/40 transition-all duration-500 group cursor-pointer cyber-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <study.icon className="w-6 h-6 text-background" />
                  </div>
                  <Badge variant="secondary" className="text-cyber-green bg-cyber-green/10 border border-cyber-green/20">
                    {study.status}
                  </Badge>
                </div>
                <CardTitle className="font-orbitron text-lg text-cyber-blue group-hover:text-cyber-green transition-colors duration-300">
                  {study.title}
                </CardTitle>
                <div className="text-sm text-cyber-purple font-medium">
                  {study.category}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-foreground/80 leading-relaxed">
                  {study.description}
                </CardDescription>
                
                {/* Outcome and Duration */}
                <div className="flex items-center justify-between p-3 bg-surface-elevated rounded-lg border border-cyber-blue/10">
                  <div>
                    <div className="text-sm text-foreground/60">Outcome</div>
                    <div className="font-semibold text-cyber-green">{study.outcome}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-foreground/60">Duration</div>
                    <div className="font-semibold text-cyber-blue">{study.duration}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 glass rounded-lg p-8 border border-cyber-blue/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-orbitron font-bold text-cyber-blue mb-2">500+</div>
              <div className="text-foreground/60">Total Cases</div>
            </div>
            <div>
              <div className="text-3xl font-orbitron font-bold text-cyber-green mb-2">$10M+</div>
              <div className="text-foreground/60">Assets Recovered</div>
            </div>
            <div>
              <div className="text-3xl font-orbitron font-bold text-cyber-purple mb-2">99%</div>
              <div className="text-foreground/60">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-orbitron font-bold text-cyber-blue mb-2">15</div>
              <div className="text-foreground/60">Avg Days to Resolution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;