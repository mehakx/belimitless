import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function RISDProjects() {
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
            Conceptual Thinking - RISD
          </h1>
          <p className="text-xl text-gray-400">3D Products & Sculptural Design</p>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              A collection of 3D product design and sculptural work created during my studies at RISD (Rhode Island School of Design). These projects explore form, materiality, and the intersection of function and aesthetics.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">The Chandelier</h2>
            <p>
              A sculptural lighting installation that explores the interplay of light, shadow, and form. The piece investigates how light can be used to create atmosphere and emotional resonance in physical space.
            </p>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-teal-500/50 pl-6">
                Explored materiality and structural design
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Integrated lighting technology with sculptural form
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Created ambient experiences through light and shadow
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Diwali Light Installation</h2>
            <p>
              A cultural lighting installation inspired by Diwali, the festival of lights. The project explores how traditional cultural symbolism can be translated into contemporary design while maintaining its spiritual and emotional significance.
            </p>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-teal-500/50 pl-6">
                Researched cultural symbolism and meaning
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Designed installation that honors tradition while feeling modern
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Created immersive lighting experience
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Neckpiece</h2>
            <p>
              A wearable sculptural piece that blurs the line between jewelry and art. The neckpiece explores themes of identity, adornment, and the body as a canvas for creative expression.
            </p>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-teal-500/50 pl-6">
                Experimented with unconventional materials and forms
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Balanced aesthetics with wearability
              </li>
              <li className="border-l-2 border-teal-500/50 pl-6">
                Explored the relationship between body and object
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Design Philosophy</h2>
            <p>
              These projects reflect my belief that design should engage both the intellect and the emotions. Whether working with physical materials or digital interfaces, my goal is to create experiences that resonate on a human level.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
