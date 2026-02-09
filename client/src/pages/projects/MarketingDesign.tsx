import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function MarketingDesign() {
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
            Marketing & Graphic Design
          </h1>
          <p className="text-xl text-gray-400">Brand Identity, Campaigns & Visual Communication</p>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              A collection of marketing and graphic design work spanning brand identity, social media campaigns, and visual communication. This work demonstrates my ability to translate complex ideas into clear, compelling visuals.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Bopen Mental Health Graphics</h2>
            <p>
              Designed mental health awareness graphics for Bopen's Instagram presence, creating a visual language that balanced approachability with emotional depth.
            </p>
            <a 
              href="https://www.instagram.com/bopengram/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4"
            >
              View Instagram <ExternalLink className="w-4 h-4" />
            </a>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-pink-500/50 pl-6">
                Created consistent visual identity across 100+ posts
              </li>
              <li className="border-l-2 border-pink-500/50 pl-6">
                Designed infographics explaining mental health concepts
              </li>
              <li className="border-l-2 border-pink-500/50 pl-6">
                Developed color palette and typography system for brand consistency
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Time Comic Work</h2>
            <p>
              Illustrated comic work exploring themes of time, memory, and human experience through visual storytelling.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">ORA Avatar & UX Flow</h2>
            <p>
              Designed the visual identity and user experience flow for ORA, including avatar design, interaction patterns, and brand guidelines. The design needed to feel warm, trustworthy, and human while maintaining a modern, tech-forward aesthetic.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
