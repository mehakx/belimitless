import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ScienceWellbeing() {
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
            Science of Well-Being
          </h1>
          <p className="text-xl text-gray-400">Yale • 2024</p>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              Research and design work exploring well-being through human-interaction systems. This project investigated how thoughtful interaction design can support mental health and emotional well-being.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Research Focus</h2>
            <ul className="space-y-4 pl-6">
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Studied the intersection of positive psychology and interaction design
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Explored how digital systems can support behavioral change and habit formation
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Investigated the role of empathy and emotional intelligence in human-AI interactions
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Designed frameworks for measuring well-being outcomes in digital products
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Outcomes</h2>
            <p>
              The research informed design principles for creating more humane and supportive digital experiences, with applications in mental health technology and personal development tools.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
