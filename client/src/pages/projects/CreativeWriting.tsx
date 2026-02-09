import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function CreativeWriting() {
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
            Creative Writing
          </h1>
          <p className="text-xl text-gray-400">Published Book, Columbia Writing & Blog</p>
          <a 
            href="https://mehakx.github.io/designingauthenticity/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4"
          >
            Read Blog <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              My writing explores the intersection of technology, design, and human experience. Through essays, articles, and creative work, I examine how we can build more thoughtful, authentic relationships with technology.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Published Book</h2>
            <p>
              Authored and published a book exploring themes of identity, technology, and cultural expression. The work examines how digital tools shape our understanding of ourselves and our relationships with others.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Columbia Writing</h2>
            <p>
              Completed creative writing coursework at Columbia University, developing skills in narrative structure, voice, and storytelling. The program emphasized the craft of writing and the importance of finding one's authentic voice.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Blog & Medium</h2>
            <p>
              Maintain an active blog and Medium presence where I share thoughts on AI product design, design authenticity, and the future of human-AI interaction. My writing aims to make complex technical concepts accessible and to advocate for more human-centered approaches to technology.
            </p>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Essays on designing authentic AI experiences
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Reflections on building ORA and lessons learned
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Thoughts on the intersection of design, technology, and culture
              </li>
              <li className="border-l-2 border-cyan-500/50 pl-6">
                Explorations of voice interaction and emotional intelligence in AI
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Writing Philosophy</h2>
            <p>
              I believe writing is a form of thinking—a way to clarify ideas, challenge assumptions, and share insights. My goal is to contribute to a more thoughtful discourse around technology and to help others see the human side of AI development.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
