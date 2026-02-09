import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Fashion() {
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
            Fashion
          </h1>
          <p className="text-xl text-gray-400">Fashion Design & Styling Projects</p>
          <a 
            href="https://drive.google.com/drive/u/0/folders/1zmIBIKaxs8b8ls7qKWP3KS0Zt6x7yte7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4"
          >
            View Full Portfolio <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              A collection of fashion design and styling work that explores the intersection of aesthetics, identity, and cultural expression. My approach to fashion is informed by the same principles that guide my technology work: understanding human needs, iterative refinement, and attention to detail.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Design Philosophy</h2>
            <p>
              Fashion, like technology, is about creating experiences that resonate with people on an emotional level. My work explores how clothing can be a form of self-expression, cultural commentary, and personal storytelling.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Key Projects</h2>
            <ul className="space-y-4 pl-6">
              <li className="border-l-2 border-purple-500/50 pl-6">
                Original garment designs exploring form, texture, and silhouette
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Styling projects that blend cultural influences with contemporary aesthetics
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Fashion photography and visual storytelling
              </li>
              <li className="border-l-2 border-purple-500/50 pl-6">
                Experimental work pushing the boundaries of wearable design
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Connection to Tech Work</h2>
            <p>
              The skills I've developed in fashion—understanding aesthetics, working with constraints, and creating emotional resonance—directly inform my approach to designing technology products. Both disciplines require empathy, attention to detail, and a deep understanding of human experience.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
