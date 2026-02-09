import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function TechPortfolio() {
  const projects = [
    {
      id: "ora",
      title: "ORA",
      subtitle: "Founder & AI Product Builder",
      period: "2025 – Present",
      description: "Voice-first, empathic AI companion with agentic workflows",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/50",
      internalLink: "/projects/tech/ora"
    },
    {
      id: "bopen",
      title: "Bopen",
      subtitle: "Founder",
      period: "2020 – 2022",
      description: "Anonymous mental health platform serving 2,000+ users",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/50",
      internalLink: "/projects/tech/bopen"
    },
    {
      id: "human-interaction",
      title: "Human-Interaction Systems",
      subtitle: "AI Design & Research",
      period: "2022 – 2025",
      description: "Designing AI agents and human-centered interaction systems",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/50",
      internalLink: "/projects/tech/human-interaction"
    },
    {
      id: "parsons",
      title: "Parsons Tech Projects",
      subtitle: "Student Work",
      period: "2023 – Present",
      description: "Voice interaction design and technical installations",
      color: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/50",
      internalLink: "/projects/tech/parsons"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-16 text-center text-white">
          Tech Portfolio
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ProjectCard = (
              <div
                className="group relative cursor-pointer"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${index % 2 === 0 ? '1deg' : '-1deg'}) scale(1)`;
                }}
              >
                <div 
                  className={`relative p-8 rounded-2xl border-2 ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm`}
                  style={{
                    clipPath: index % 3 === 0 
                      ? 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' 
                      : index % 3 === 1
                      ? 'polygon(0% 0%, 97% 0%, 100% 100%, 3% 100%)'
                      : 'polygon(0% 3%, 100% 0%, 100% 97%, 0% 100%)'
                  }}
                >
                  {/* Star decoration */}
                  <div className="absolute top-4 right-4 text-white/30 text-3xl">
                    ✦
                  </div>
                  
                  <div className="mb-4">
                    <h2 className="text-3xl font-display font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-1">{project.subtitle}</p>
                    <p className="text-sm text-gray-400">{project.period}</p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="text-white hover:text-gray-200 transition-colors text-sm font-medium">
                    View Details →
                  </div>
                </div>
              </div>
            );

            return (
              <Link key={project.id} href={project.internalLink}>
                {ProjectCard}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
