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
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <Heart className="text-primary" size={28} />
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently in my 3rd year of BCA at Victor Institute of Professional 
                Studies, affiliated with Makhanlal University. My journey into tech started 
                with a curiosity about how websites work, which quickly turned into a passion 
                for building them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in the MERN stack and am constantly expanding my knowledge in 
                Data Structures and Algorithms using Java. Beyond coding, I enjoy sketching, 
                which helps me think creatively about design and problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and am always eager to take on new challenges 
                that push me to grow as a developer. My goal is to build meaningful projects 
                that make a positive impact.
              </p>
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
                  className="glass-card p-6 rounded-2xl hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      {index === 0 ? (
                        <GraduationCap className="text-primary" size={24} />
                      ) : (
                        <Award className="text-secondary" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {edu.university}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-secondary font-medium">{edu.year}</span>
                        {edu.percentage && (
                          <span className="px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                            {edu.percentage}
                          </span>
                        )}
                        {edu.status && (
                          <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary font-medium">
                            {edu.status}
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
