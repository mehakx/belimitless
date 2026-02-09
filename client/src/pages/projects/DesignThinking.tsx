import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function DesignThinking() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-4xl">
        <Link href="/projects/design">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Design Portfolio
          </button>
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-white">
            McKinsey & IDEO Design Thinking
          </h1>
          <p className="text-xl text-gray-400">Design Strategy & Human-Centered Methodologies</p>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">McKinsey & Company</h2>
            <p>
              Collaborated with McKinsey & Company on a design strategy project exploring business value and human-centered design. The project investigated how design thinking methodologies can drive business outcomes while maintaining focus on user needs.
            </p>
            <a 
              href="https://www.linkedin.com/feed/update/urn:li:activity:7117362032865067008/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-blue-500/50 pl-6">
                Conducted user research to identify unmet needs and opportunities
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Developed strategic frameworks for design-led innovation
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Presented findings and recommendations to stakeholders
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">IDEO Design Thinking</h2>
            <p>
              Completed coursework in IDEO's design thinking methodology, learning structured approaches to human-centered problem solving. The training emphasized empathy, ideation, prototyping, and iterative testing.
            </p>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-blue-500/50 pl-6">
                Mastered the five-stage design thinking process
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Applied human-centered design to real-world challenges
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Developed skills in rapid prototyping and user testing
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Learned to balance business constraints with user needs
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Impact on Practice</h2>
            <p>
              These experiences shaped my approach to building AI products. Design thinking principles—empathy, iteration, and user-centricity—are at the core of how I design agentic systems and human-AI interactions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
