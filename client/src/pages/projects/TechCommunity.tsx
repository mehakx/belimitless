import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function TechCommunity() {
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
            Tech Podcasts & Community
          </h1>
          <p className="text-xl text-gray-400">Community Building & Design Authenticity</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="https://www.linkedin.com/feed/update/urn:li:activity:7377550412284968960/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              LinkedIn Post <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://mehakx.github.io/designingauthenticity/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Designing Authenticity <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              A collection of work exploring design authenticity, tech community building, and the intersection of technology with human values. This includes podcast appearances, written reflections, and community engagement initiatives.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Designing Authenticity</h2>
            <p>
              An exploration of what it means to design authentic experiences in an age of AI and automation. The project examines how technology can enhance rather than replace human connection, and how designers can maintain integrity while building with emerging technologies.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Community Engagement</h2>
            <ul className="space-y-4 pl-6">
              <li className="border-l-2 border-blue-500/50 pl-6">
                Podcast appearances discussing AI product design and agentic systems
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Writing and sharing insights on design philosophy and technology ethics
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Building connections within the tech and design community
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Advocating for human-centered approaches to AI development
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Philosophy</h2>
            <p>
              My work in this space is guided by the belief that technology should amplify human potential, not diminish it. Through community engagement and public discourse, I aim to contribute to a more thoughtful, ethical approach to building AI products.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
