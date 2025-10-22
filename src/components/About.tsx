import { GraduationCap, Award, Heart } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Victor Institute of Professional Studies",
      university: "Makhanlal University",
      year: "2023 - 2026",
      status: "Currently pursuing 3rd year",
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Ganga Public Higher Secondary School",
      year: "Completed",
      percentage: "91%",
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Ganga Public Higher Secondary School",
      year: "Completed",
      percentage: "98%",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Story */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl space-y-6 hover-lift group relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    My Journey
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm currently in my <span className="text-foreground font-semibold">3rd year of BCA</span> at Victor Institute of Professional 
                    Studies, affiliated with Makhanlal University. My journey into tech started 
                    with a curiosity about how websites work, which quickly turned into a 
                    <span className="text-primary font-semibold"> passionate pursuit</span> for building them.
                  </p>
                  
                  <div className="glass-card p-4 rounded-xl bg-muted/30">
                    <p className="text-muted-foreground leading-relaxed">
                      💡 I specialize in the <span className="font-semibold text-foreground">MERN stack</span> and am constantly expanding my knowledge in 
                      Data Structures and Algorithms using Java.
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond coding, I enjoy <span className="text-secondary font-semibold">sketching</span>, 
                    which helps me think creatively about design and problem-solving. This artistic side 
                    complements my technical skills perfectly.
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      I believe in <span className="text-primary font-semibold">continuous learning</span> and am always eager to take on new challenges 
                      that push me to grow as a developer. My goal is to build meaningful projects 
                      that make a positive impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl hover-lift group relative overflow-hidden"
                >
                  {/* Gradient Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                      {index === 0 ? (
                        <GraduationCap className="text-primary group-hover:text-white transition-colors" size={24} />
                      ) : (
                        <Award className="text-secondary group-hover:text-white transition-colors" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-xs text-muted-foreground mb-3">
                          {edu.university}
                        </p>
                      )}
                      <div className="flex items-center flex-wrap gap-2 text-xs">
                        <span className="px-3 py-1 rounded-full glass-card text-secondary font-medium">
                          {edu.year}
                        </span>
                        {edu.percentage && (
                          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary font-medium">
                            🏆 {edu.percentage}
                          </span>
                        )}
                        {edu.status && (
                          <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary font-medium">
                            ⚡ {edu.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
