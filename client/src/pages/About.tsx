import { ExternalLink, Download } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-12 text-white">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030743905/rvCChUpbNZcqNccY.jpg" 
              alt="Mehak Garg"
              className="w-full rounded-lg border border-white/10"
            />
          </div>
          
          <div className="md:col-span-2 space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a product-focused AI builder with experience designing and shipping working AI agents and agentic workflows. My work centers on translating user intent into intelligent systems through human–AI interaction design and rapid prototyping.
            </p>
            
            <p>
              Currently pursuing a BFA in Design & Technology at Parsons School of Design as a scholarship recipient, I've founded projects like ORA—a voice-first, empathic AI companion—and Bopen, an anonymous mental health platform that served over 2,000 users.
            </p>
            
            <p>
              Through internships at Emergent, Spry Health, and a design strategy project with{" "}
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7117362032865067008/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
              >
                McKinsey & Company
                <ExternalLink className="w-3 h-3" />
              </a>
              , I've learned that the most meaningful AI products emerge from deep understanding of human needs, careful system design, and iterative refinement.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 mb-12">
          <h2 className="text-3xl font-display font-bold mb-8 text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">AI & Systems</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI agent design</li>
                <li>Agentic workflows</li>
                <li>Human–AI interaction</li>
                <li>Memory systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Product & Design</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Product strategy</li>
                <li>UX design</li>
                <li>Rapid prototyping</li>
                <li>User research</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Technical</h3>
              <ul className="space-y-2 text-gray-400">
                <li>HTML, CSS, JavaScript</li>
                <li>API integration</li>
                <li>AI prototypes</li>
                <li>Engineering collaboration</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center pt-8">
          <a 
            href="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030743905/IxlxtFptGqJhxLOa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 font-medium text-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
