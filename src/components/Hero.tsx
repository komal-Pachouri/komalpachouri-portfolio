import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Trophy } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const stats = [
    { icon: Code2, value: "15+", label: "Projects Built" },
    { icon: Sparkles, value: "MERN", label: "Stack Expert" },
    { icon: Trophy, value: "3rd Year", label: "BCA Student" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full animate-pulse-glow">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi! I'm{" "}
                  <span className="gradient-text inline-block animate-scale-in">
                    Komal Pachouri
                  </span>
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-4 py-2 rounded-lg animated-gradient">
                    <span className="text-sm font-semibold text-white">MERN Stack Developer</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-lg text-muted-foreground">Java & DSA Enthusiast</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I'm a <span className="text-foreground font-medium">BCA student</span> passionate about building 
                elegant web applications and mastering algorithms. I transform ideas into 
                <span className="text-primary font-medium"> pixel-perfect reality</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-xl hover-lift text-center group"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 group shadow-glow"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 group"
                asChild
              >
                <a href="#contact">
                  Let's Talk
                  <Mail className="ml-2 group-hover:rotate-12 transition-transform" size={18} />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/komal-Pachouri", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/komal-pachouri-72215530b", label: "LinkedIn" },
                { icon: Mail, href: "mailto:komalpachouri14@gmail.com", label: "Email" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl glass-card hover:bg-primary/20 hover-lift transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image with Decorative Elements */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Decorative Corners */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -inset-2 border-2 border-secondary/20 rounded-3xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
              
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Komal Pachouri - MERN Stack Developer"
                  className="relative rounded-2xl w-full aspect-[3/4] object-cover border-4 border-primary/30 shadow-glow hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Tags */}
                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full shadow-card animate-float">
                  <span className="text-sm font-semibold gradient-text">React.js</span>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full shadow-card animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-sm font-semibold gradient-text">Node.js</span>
                </div>
                <div className="absolute top-1/4 -left-8 glass-card px-4 py-2 rounded-full shadow-card animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-sm font-semibold gradient-text">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
