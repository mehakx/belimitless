import { Link } from "wouter";
import { Code2, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-16 text-center text-white">
          Portfolio
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tech Portfolio */}
          <Link href="/projects/tech">
            <div className="group cursor-pointer border border-white/10 rounded-lg p-12 hover:border-white/30 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-center">
              <div className="flex justify-center mb-6">
                <Code2 className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Tech Portfolio
              </h2>
              <p className="text-gray-400">
                AI agents, product design, and technical projects
              </p>
            </div>
          </Link>

          {/* Design Portfolio */}
          <Link href="/projects/design">
            <div className="group cursor-pointer border border-white/10 rounded-lg p-12 hover:border-white/30 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-center">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Design Portfolio
              </h2>
              <p className="text-gray-400">
                Design thinking, fashion, writing, and visual work
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
