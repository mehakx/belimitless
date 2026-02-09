import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function CulturalValues() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-4xl">
        <Link href="/projects/tech/parsons">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Parsons Tech Projects
          </button>
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-white">
            Cultural Values Installation
          </h1>
          <p className="text-xl text-gray-400">Parsons School of Design • Group Project</p>
          <a 
            href="https://docs.google.com/presentation/d/e/2PACX-1vSAy5yEWkC4iSOWgwHQO12v_YgxSogNbMHFuO7OYod8WkxYhS7BABRNXOmqa_cRgjYdnZSkCuFubsh5/pub?start=true&loop=false&delayms=3000&slide=id.g349e1acd9fc_0_40"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4"
          >
            View Presentation <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              A collaborative group project that explores how cultural values can be translated into interactive technology installations. The project investigates the relationship between cultural identity, technology, and physical space.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Concept</h2>
            <p>
              The installation seeks to bridge the gap between abstract cultural concepts and tangible technological experiences. By creating an interactive space that responds to cultural narratives, the project makes intangible values visible and experiential.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Approach</h2>
            <ul className="space-y-4 pl-6">
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Research into cultural symbolism and meaning-making
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Translation of abstract values into interactive elements
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Integration of technology with cultural storytelling
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                User testing to ensure cultural authenticity and resonance
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Key Learnings</h2>
            <p>
              This project taught me the importance of cultural sensitivity in technology design and how to balance innovation with respect for tradition. It reinforced the idea that technology should serve human values, not replace them.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
