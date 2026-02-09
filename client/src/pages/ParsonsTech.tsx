import { Link } from "wouter";

export default function ParsonsTech() {
  const projects = [
    {
      id: "voice-interaction",
      title: "Voice Interaction Design",
      description: "Voice-activated 3D fabric installation",
      color: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-500/50"
    },
    {
      id: "cultural-values",
      title: "Cultural Values Installation",
      description: "Translating cultural values into tech installation",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/50"
    },
    {
      id: "tech-community",
      title: "Tech Podcasts & Community",
      description: "Design authenticity and tech community work",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/50"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white">
          Parsons Tech Projects
        </h1>
        <p className="text-xl text-gray-300 mb-16 leading-relaxed">
          Technical projects from my BFA in Design & Technology at Parsons School of Design, exploring voice interaction, cultural expression, and community building.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/tech/parsons/${project.id}`}>
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
                  className={`relative p-8 rounded-2xl border-2 ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm min-h-[220px] flex flex-col justify-between`}
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
