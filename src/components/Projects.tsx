import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import travelImage from "@/assets/project-travel.jpg";
import spotifyImage from "@/assets/project-spotify.jpg";
import weatherImage from "@/assets/project-weather.jpg";
import todoImage from "@/assets/project-todo.jpg";
import gamesImage from "@/assets/project-games.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Travel Website",
      description:
        "A full-stack travel listing platform where users can add, review, and remove listings with integrated maps for location visualization.",
      image: travelImage,
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/komal-Pachouri",
      live: "#",
      featured: true,
    },
    {
      title: "Spotify Clone",
      description:
        "A pixel-perfect music streaming UI clone replicating Spotify's modern layout, playlists, and player controls.",
      image: spotifyImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/komal-Pachouri",
      live: "#",
      featured: true,
    },
    {
      title: "Weather Widget App",
      description:
        "Real-time weather information app built with React, displaying current conditions and forecasts using weather APIs.",
      image: weatherImage,
      technologies: ["React.js", "CSS", "Weather API"],
      github: "https://github.com/komal-Pachouri",
      live: "#",
      featured: false,
    },
    {
      title: "To-Do List (Redux)",
      description:
        "Task management application demonstrating Redux state management with add, delete, and mark complete functionality.",
      image: todoImage,
      technologies: ["React", "Redux", "CSS"],
      github: "https://github.com/komal-Pachouri",
      live: "#",
      featured: false,
    },
    {
      title: "Mini JavaScript Games",
      description:
        "Collection of interactive games including Simon Game, Stone Paper Scissor, and more, built with vanilla JavaScript.",
      image: gamesImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/komal-Pachouri",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and experiments in web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden hover-lift group relative ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 glass-card px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold gradient-text">Featured</span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/50 hover:bg-white/10 backdrop-blur-sm"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-glow"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary font-medium hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
