const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Tailwind CSS"],
      color: "from-primary to-purple-500",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      color: "from-secondary to-blue-500",
    },
    {
      category: "Languages",
      skills: ["C", "C++", "Java", "JavaScript"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "DSA", "REST APIs"],
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
              className="glass-card p-6 rounded-2xl hover-lift group"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color}`}></div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-lg bg-muted/50 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-card px-8 py-4 rounded-full">
            <p className="text-muted-foreground">
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
