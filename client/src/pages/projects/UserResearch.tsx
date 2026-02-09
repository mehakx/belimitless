import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function UserResearch() {
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
            User Research
          </h1>
          <p className="text-xl text-gray-400">Research Projects</p>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              Human-centered research and interaction design studies focused on understanding user needs, behaviors, and mental models to inform product design decisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Research Methods</h2>
            <ul className="space-y-4 pl-6">
              <li className="border-l-2 border-teal-500/50 pl-6">
                Conducted in-depth user interviews to uncover latent needs and pain points
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Performed usability testing and behavioral analysis to validate design decisions
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Created user journey maps and mental models to guide product strategy
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Synthesized qualitative and quantitative data into actionable insights
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Impact</h2>
            <p>
              Research findings directly informed product roadmaps and design decisions across multiple projects, ensuring that solutions were grounded in real user needs rather than assumptions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
