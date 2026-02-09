import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Bopen() {
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
            Bopen
          </h1>
          <p className="text-xl text-gray-400">Founder • 2020 – 2022</p>
          <a 
            href="https://soundcloud.com/factordaily/outliers-special-12-mehak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4"
          >
            Listen to Podcast <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Overview</h2>
            <p>
              Bopen was an anonymous mental health platform that served over 2,000 users during the pandemic. It was designed as a safe space for emotional reflection and honest expression, where users could share their feelings without judgment or social pressure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">The Problem</h2>
            <p>
              During the pandemic, many people struggled with isolation, anxiety, and emotional overwhelm. Traditional mental health resources were either inaccessible, expensive, or carried social stigma. There was a need for a low-barrier, judgment-free space for emotional processing.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">The Solution</h2>
            <p>
              Bopen created a community-based platform where users could:
            </p>
            <ul className="space-y-4 pl-6 mt-4">
              <li className="border-l-2 border-blue-500/50 pl-6">
                Share emotions anonymously without fear of judgment
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Respond to thoughtful prompts designed to encourage reflection
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Connect with others experiencing similar challenges
              </li>
              <li className="border-l-2 border-blue-500/50 pl-6">
                Build emotional awareness through structured journaling
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Key Insights</h2>
            <p>
              Through Bopen, I learned that psychological safety and thoughtful design could unlock honest emotional expression. The platform revealed patterns in how people process emotions, which later informed the design of ORA's empathetic interaction model.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Impact</h2>
            <p>
              Bopen served over 2,000 users and became a foundation for understanding how technology can support mental well-being. The project evolved into ORA, focusing on voice interaction and agentic AI.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
