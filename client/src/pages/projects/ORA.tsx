import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ORA() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-4xl">
        <Link href="/projects/tech">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Tech Portfolio
          </button>
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-white">
            ORA
          </h1>
          <p className="text-xl text-gray-400">Founder & AI Product Builder • 2025 – Present</p>
          <a 
            href="https://talktoora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4"
          >
            Visit ORA <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              ORA is a voice-first, agentic AI companion designed to support productivity and emotional intelligence through empathetic, context-aware interaction. It is built to move beyond reactive chat, using structured agent behavior to understand goals, emotions, and habits over time—helping users act with clarity rather than overwhelm.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Origin Story</h2>
            <p>
              The project began during the pandemic as Bopen, an exploration of emotional reflection and mental well-being. It evolved into a community-based platform, where early experiments revealed how psychological safety and thoughtful prompts encouraged honest emotional expression.
            </p>
            <p className="mt-4">
              From there, the focus narrowed to voice. I conducted extensive research on vocal tone, pacing, and inflection, iterating on how an AI should sound to feel trustworthy, grounded, and human.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Product Evolution</h2>
            <p>
              As ORA matured, the product pivoted toward habit-forming productivity. I designed and built the core AI agent, implementing workflows for:
            </p>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-purple-500/50 pl-6">
                Task planning and goal decomposition
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Reflection loops for continuous learning
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Memory systems for personalization
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Feedback mechanisms for iterative improvement
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Current Status</h2>
            <p>
              After multiple iterations and user testing, ORA was launched as a public beta and continues to evolve as an exploration in emotionally intelligent, agentic systems.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
