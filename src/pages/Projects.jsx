import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "Cloud-Native Issue Tracker",
    description: "A cloud-based issue tracking system built with AWS and React.",
    githubLink: "https://github.com/VinceBiggz/issue-tracker",
    demoLink: "",
    image: "/assets/placeholder.jpg",
  },
  {
    title: "Cloud-Native Issue Tracker",
    description: "A cloud-based issue tracking system built with AWS and React.",
    githubLink: "https://github.com/VinceBiggz/issue-tracker",
    demoLink: "",
    image: "/assets/placeholder.jpg",
  },
  {
    title: "Cloud-Native Issue Tracker",
    description: "A cloud-based issue tracking system built with AWS and React.",
    githubLink: "https://github.com/VinceBiggz/issue-tracker",
    demoLink: "",
    image: "/assets/placeholder.jpg",
  },
  {
    title: "Cloud-Native Issue Tracker",
    description: "A cloud-based issue tracking system built with AWS and React.",
    githubLink: "https://github.com/VinceBiggz/issue-tracker",
    demoLink: "",
    image: "/assets/placeholder.jpg",
  },
  {
    title: "Cloud-Native Issue Tracker",
    description: "A cloud-based issue tracking system built with AWS and React.",
    githubLink: "https://github.com/VinceBiggz/issue-tracker",
    demoLink: "",
    image: "/assets/placeholder.jpg",
  },
  {
    title: "Cloud-Native Issue Tracker",
    description: "A cloud-based issue tracking system built with AWS and React.",
    githubLink: "https://github.com/VinceBiggz/issue-tracker",
    demoLink: "",
    image: "/assets/placeholder.jpg",
  },
  // Add other projects here
];

export default function Projects() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}