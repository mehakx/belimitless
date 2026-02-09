import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function DesignAgent() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-4xl">
        <Link href="/projects/tech/human-interaction">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Human-Interaction Systems
          </button>
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-white">
            Design Agent
          </h1>
          <p className="text-xl text-gray-400">Emergent • Summer 2025</p>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              Designed the Design Agent for an AI-assisted coding platform at Emergent. The agent helps developers translate design intent into structured implementation through intelligent interpretation and real-time collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Key Contributions</h2>
            <ul className="space-y-4 pl-6">
              <li className="border-l-2 border-purple-500/50 pl-6">
                Defined how the agent interprets user intent and converts vague design prompts into structured design actions
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Designed interaction models for real-time human–AI collaboration during the coding process
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Worked closely with engineers to align agent behavior with technical constraints and system capabilities
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Created feedback loops that allow the agent to learn from user corrections and preferences
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Impact</h2>
            <p>
              The Design Agent streamlined the design-to-code workflow, reducing friction between design intent and implementation while maintaining creative control for developers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
