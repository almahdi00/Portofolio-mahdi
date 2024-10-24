'use client'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'; // Import dari react-icons
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Web Development Project",
    description: "Proyek website modern dengan React dan Tailwind CSS. Termasuk fitur responsif dan animasi yang menarik.",
    tags: ["React", "Tailwind", "JavaScript"],
    link: "https://utsweb-three.vercel.app/",
    github: "https://github.com/almahdi00/utsweb",
    image: "img/Web1.png"
  },
  {
    title: "Portfolio Website",
    description: "Website portfolio personal dengan desain minimalis dan animasi smooth.",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    github: "#",
    image: "img/web2.png"
  }
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group rounded-xl overflow-hidden bg-gray-900 transition-transform duration-300 hover:-translate-y-2 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className={`transform transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-white hover:text-blue-400 transition-colors"
            >
              <FiExternalLink size={16} /> {/* Ikon dari react-icons */}
              <span>Live Demo</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-white hover:text-blue-400 transition-colors"
            >
              <FiGithub size={16} /> {/* Ikon dari react-icons */}
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function MyProjectSection() {
  return (
    <section id="myprojects" className="bg-gray-950 py-20">
      <div className="container mx-auto px-4">
        <div className ="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiCode size={32} /> {/* Ikon dari react-icons */}
            <h2 className="text-4xl font-bold text-white">
              Project Portfolio
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Berikut adalah koleksi proyek-proyek yang telah saya kerjakan. 
            Setiap proyek mencerminkan dedikasi saya dalam pengembangan web modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProjectSection;
