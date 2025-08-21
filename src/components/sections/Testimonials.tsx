import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Business Owner",
      company: "TechStart Inc.",
      rating: 5,
      text: "NeoTrace Security recovered our stolen cryptocurrency worth $85,000. Their professionalism and expertise were exceptional. The entire process was handled with complete confidentiality.",
      avatar: "SM"
    },
    {
      id: 2,
      name: "David Rodriguez", 
      role: "Legal Counsel",
      company: "Rodriguez & Associates",
      rating: 5,
      text: "Outstanding digital forensics work on our corporate fraud case. The evidence they provided was crucial for our legal proceedings. Highly recommend their services.",
      avatar: "DR"
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "CFO", 
      company: "Global Finance Corp",
      rating: 5,
      text: "After a ransomware attack, NeoTrace Security quickly contained the breach and recovered our encrypted data. Their rapid response saved our company millions in potential losses.",
      avatar: "JC"
    },
    {
      id: 4,
      name: "Michael Thompson",
      role: "IT Director",
      company: "SecureNet Solutions",
      rating: 5,
      text: "The security assessment and risk analysis provided by NeoTrace was comprehensive and actionable. They identified vulnerabilities we didn't know existed.",
      avatar: "MT"
    },
    {
      id: 5,
      name: "Lisa Parker",
      role: "Private Client",
      company: "Individual",
      rating: 5,
      text: "They helped me recover assets from an investment scam. The team was patient, professional, and kept me informed throughout the entire investigation process.",
      avatar: "LP"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-cyber-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-6">
            Client <span className="bg-gradient-cyber bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Hear from our satisfied clients who trusted us with their most critical cybersecurity challenges.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop View - 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentSlide}-${index}`}
                className="glass border-cyber-blue/20 hover:border-cyber-green/40 transition-all duration-500 cyber-glow"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-cyber-blue opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyber-green text-cyber-green" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center">
                      <span className="text-background font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-cyber-blue">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile View - 1 card */}
          <div className="lg:hidden">
            <Card className="glass border-cyber-blue/20 cyber-glow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-cyber-blue opacity-50" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyber-green text-cyber-green" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center">
                    <span className="text-background font-semibold text-sm">
                      {testimonials[currentSlide].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-cyber-blue">{testimonials[currentSlide].name}</div>
                    <div className="text-sm text-foreground/60">
                      {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-surface-elevated border border-cyber-blue/30 rounded-full flex items-center justify-center hover:bg-cyber-blue hover:text-background transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-cyber-blue w-8' 
                      : 'bg-foreground/30 hover:bg-cyber-blue/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-surface-elevated border border-cyber-blue/30 rounded-full flex items-center justify-center hover:bg-cyber-blue hover:text-background transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;