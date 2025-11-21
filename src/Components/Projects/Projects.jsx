import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
import PortfolioImg from "../../assets/Portfolio.png";
import gameImg from "../../assets/GameRev.png";
import quizImg from "../../assets/quizz.png";
import authImg from "../../assets/login.png";
import markitImg from "../../assets/markit.png";
import skyImg from "../../assets/SkyCast.png";

const ProjectsArray = [
  {
    id: 2,
    title: "Game-over-app",
    description:
      "Free Games Explorer - A responsive web app built with JavaScript (OOP + Modules). Fetches real-time data from the FreeToGame API and displays games by category with a clean UI.",
    image: gameImg,
    tags: ["ES6", "Bootstrap", "OOP", "Modules"],
    demoUrl: "https://karrim0.github.io/game-over-app/",
    githubUrl: "https://github.com/Karrim0",
  },
  {
    id: 3,
    title: "Quiz App",
    description:
      "An interactive trivia quiz web app built with Vanilla JavaScript (OOP), featuring category & difficulty selection, responsive UI, and dynamic question handling via the Open Trivia DB API.",
    image: quizImg,
    tags: ["ES6", "Bootstrap", "OOP", "API"],
    demoUrl: "https://karrim0.github.io/QuizMaster/",
    githubUrl: "https://github.com/Karrim0",
  },
  {
    id: 4,
    title: "SkyCast",
    description:
      "A responsive 3-day weather forecast web app using WeatherAPI and JavaScript.",
    image: skyImg,
    tags: ["Vanilla JS", "API"],
    demoUrl: "https://karrim0.github.io/SkyCast/",
    githubUrl: "https://github.com/Karrim0",
  },
  {
    id: 5,
    title: "Smart Login System",
    description:
      "A simple and responsive login system built with HTML, CSS (Bootstrap), and JavaScript. Features include user registration, form validation, localStorage-based authentication, and a welcome page.",
    image: authImg,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://karrim0.github.io/Authify/",
    githubUrl: "https://github.com/Karrim0",
  },
  {
    id: 6,
    title: "Bookmarker",
    description:
      "A simple bookmark manager that lets you add, update, search, and delete website bookmarks. Built with HTML, CSS, and JavaScript with localStorage support.",
    image: markitImg,
    tags: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://karrim0.github.io/MarkIt/",
    githubUrl: "https://github.com/Karrim0",
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsArray.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} demo`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://github.com/Karrim0"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}