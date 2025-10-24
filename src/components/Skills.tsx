import { Code2, Database, Terminal, Wrench, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code2,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Redux", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
      ],
      color: "from-primary to-purple-500",
    },
    {
      category: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
      ],
      color: "from-secondary to-blue-500",
    },
    {
      category: "Languages",
      icon: Terminal,
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 82 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 88 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "DSA", level: 78 },
        { name: "REST APIs", level: 82 },
      ],
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl hover-lift group relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                </div>
                
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}></div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 hover:scale-105`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info with Animation */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-card px-8 py-4 rounded-full hover-lift animate-pulse-glow">
            <p className="text-muted-foreground flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-semibold text-primary">Currently Learning:</span>{" "}
              Data Structures & Algorithms in Java
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
