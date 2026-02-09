import { Mail, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="container mx-auto max-w-3xl text-center px-4">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white">
          Let's Connect
        </h1>
        
        <p className="text-xl text-gray-300 mb-16 leading-relaxed">
          I'm always interested in discussing AI product design, agentic systems, and opportunities to collaborate on meaningful projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a 
            href="https://linkedin.com/in/mehak-garg-176a9b218/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 font-medium"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a 
            href="mailto:mehak@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
        
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-display font-bold mb-6 text-white">Current Project</h2>
          <a 
            href="https://talktoora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg"
          >
            ORA - AI Companion <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
