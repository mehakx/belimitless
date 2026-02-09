import { Link } from "wouter";

export default function DesignPortfolio() {
  const projects = [
    {
      id: "marketing-design",
      title: "Marketing & Graphic Design",
      description: "Brand identity, campaigns, and visual communication",
      color: "from-pink-500/20 to-purple-500/20",
      borderColor: "border-pink-500/50"
    },
    {
      id: "fashion",
      title: "Fashion",
      description: "Fashion design and styling projects",
      color: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-500/50"
    },
    {
      id: "design-thinking",
      title: "McKinsey & IDEO Design Thinking",
      description: "Design strategy and human-centered methodologies",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50"
    },
    {
      id: "creative-writing",
      title: "Creative Writing",
      description: "Published book, Columbia writing, and blog",
      color: "from-cyan-500/20 to-teal-500/20",
      borderColor: "border-cyan-500/50"
    },
    {
      id: "risd-projects",
      title: "Conceptual Thinking - RISD",
      description: "3D products: chandelier, Diwali light, neckpiece",
      color: "from-teal-500/20 to-green-500/20",
      borderColor: "border-teal-500/50"
    },
    {
      id: "music",
      title: "Music",
      description: "Musical compositions and performances",
      color: "from-green-500/20 to-yellow-500/20",
      borderColor: "border-green-500/50"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-16 text-center text-white">
          Design Portfolio
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/design/${project.id}`}>
              <div
                className="group relative cursor-pointer"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotate(${index % 2 === 0 ? '2deg' : '-2deg'}) scale(1)`;
                }}
              >
                <div 
                  className={`relative p-8 rounded-2xl border-2 ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm min-h-[250px] flex flex-col justify-between`}
                  style={{
                    clipPath: index % 3 === 0 
                      ? 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' 
                      : index % 3 === 1
                      ? 'polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)'
                      : 'polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)'
                  }}
                >
                  {/* Star decoration */}
                  <div className="absolute top-4 right-4 text-white/30 text-2xl">
                    ✦
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-3 leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="text-white hover:text-gray-200 transition-colors text-sm font-medium mt-4">
                    View Details →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
