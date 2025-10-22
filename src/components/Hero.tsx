import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-secondary text-lg font-medium">Hi there! 👋 I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">Komal Pachouri</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                MERN Stack Developer | BCA Student | Java & DSA Enthusiast
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm a BCA student and MERN Stack Developer passionate about building web 
              applications and learning Data Structures and Algorithms in Java. I'm always 
              eager to improve my skills and work on meaningful projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 group"
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
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="#contact">
                  Contact Me
                  <Mail className="ml-2" size={18} />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/komal-Pachouri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/komal-pachouri-72215530b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:komalpachouri14@gmail.com"
                className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Komal Pachouri"
                className="relative rounded-full w-full aspect-square object-cover border-4 border-primary/30 shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
