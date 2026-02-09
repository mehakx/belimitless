import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function VoiceInteraction() {
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
            Voice Interaction Design
          </h1>
          <p className="text-xl text-gray-400">Parsons School of Design • 2023 – 2024</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="https://abalone-mars-3a3.notion.site/Mehak-s-Portfolio-1599baa71c9f8013bafcfb36af966a19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View Portfolio <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://www.youtube.com/watch?v=6OrfBC3l0SQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Watch Video <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              A voice-activated 3D fabric installation that explores the intersection of physical materials and voice interaction. The project investigates how voice can be used as an interface for controlling physical objects and creating immersive experiences.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Concept</h2>
            <p>
              The installation features 3D fabric structures that respond to voice commands, creating a dynamic interplay between sound, movement, and materiality. By making the fabric voice-activated, the project challenges traditional notions of interface design and explores new possibilities for human-object interaction.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Technical Implementation</h2>
            <ul className="space-y-4 pl-6">
              <li className="border-l-2 border-teal-500/50 pl-6">
                Voice recognition system integrated with physical actuators
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                3D fabric structures designed for responsive movement
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Custom interaction patterns based on vocal tone and pitch
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Real-time feedback systems for seamless user experience
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Impact</h2>
            <p>
              This project laid the groundwork for my later work on ORA, particularly in understanding how voice can be used as a natural, intuitive interface. The exploration of vocal tone and interaction patterns directly informed my approach to designing empathetic AI companions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
