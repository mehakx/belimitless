import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Music() {
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
            Music
          </h1>
          <p className="text-xl text-gray-400">Musical Compositions & Performances</p>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              Music has always been a parallel creative practice to my design and technology work. Through composition and performance, I explore rhythm, emotion, and the power of sound to create meaning.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Musical Practice</h2>
            <p>
              My musical work spans composition, performance, and sound design. I'm particularly interested in how music can evoke emotion and create atmosphere—skills that directly inform my work on voice interaction design for ORA.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Connection to Design Work</h2>
            <p>
              The principles I've learned through music—timing, rhythm, emotional resonance, and the importance of silence—have deeply influenced my approach to designing AI interactions. Just as music is about the spaces between notes, good interaction design is about knowing when to step back and let the user lead.
            </p>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-green-500/50 pl-6">
                Understanding rhythm and pacing in voice interactions
              </li>
              <li className="border-l-2 border-green-500/50 pl-6">
                Using tone and inflection to convey emotion
              </li>
              <li className="border-l-2 border-green-500/50 pl-6">
                Creating emotional resonance through sound design
              </li>
              <li className="border-l-2 border-green-500/50 pl-6">
                Appreciating the power of silence and negative space
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Philosophy</h2>
            <p>
              Music, like all creative work, is about communication. It's about finding the right way to express an idea or emotion so that it resonates with others. This philosophy guides everything I create, whether it's a song, a product, or an AI agent.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
