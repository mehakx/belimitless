import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import TechPortfolio from "./pages/TechPortfolio";
import DesignPortfolio from "./pages/DesignPortfolio";
import HumanInteractionSystems from "./pages/HumanInteractionSystems";
import ParsonsTech from "./pages/ParsonsTech";
import Contact from "./pages/Contact";

// Tech project pages
import ORA from "./pages/projects/ORA";
import Bopen from "./pages/projects/Bopen";
import DesignAgent from "./pages/projects/DesignAgent";
import ScienceWellbeing from "./pages/projects/ScienceWellbeing";
import UserResearch from "./pages/projects/UserResearch";
import VoiceInteraction from "./pages/projects/VoiceInteraction";
import CulturalValues from "./pages/projects/CulturalValues";
import TechCommunity from "./pages/projects/TechCommunity";

// Design project pages
import MarketingDesign from "./pages/projects/MarketingDesign";
import Fashion from "./pages/projects/Fashion";
import DesignThinking from "./pages/projects/DesignThinking";
import CreativeWriting from "./pages/projects/CreativeWriting";
import RISDProjects from "./pages/projects/RISDProjects";
import Music from "./pages/projects/Music";

import { Link } from "wouter";
import { useRef, useEffect } from "react";

function Navigation() {
  const [location] = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const stars: { x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }[] = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005
      });
    }
    
    const comets: { x: number; y: number; length: number; speed: number; angle: number; opacity: number }[] = [];
    
    function createComet() {
      if (!canvas) return;
      comets.push({
        x: Math.random() * canvas.width,
        y: -50,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 0.5 + 0.3,
        opacity: 1
      });
    }
    
    for (let i = 0; i < 2; i++) {
      createComet();
    }
    
    let animationId: number;
    let frame = 0;
    
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
      });
      
      comets.forEach((comet, index) => {
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        const endX = comet.x - Math.cos(comet.angle) * comet.length;
        const endY = comet.y - Math.sin(comet.angle) * comet.length;
        ctx.lineTo(endX, endY);
        
        const gradient = ctx.createLinearGradient(comet.x, comet.y, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        comet.x += Math.cos(comet.angle) * comet.speed;
        comet.y += Math.sin(comet.angle) * comet.speed;
        comet.opacity -= 0.005;
        
        if (comet.y > canvas.height + 100 || comet.opacity <= 0) {
          comets.splice(index, 1);
        }
      });
      
      frame++;
      if (frame % 120 === 0 && Math.random() > 0.5) {
        createComet();
      }
      
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (location === '/') return null;

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-display font-bold tracking-wide text-white hover:text-gray-300 transition-colors">
            Be Limitless
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/about">
              <span className={`text-sm transition-colors cursor-pointer ${location === '/about' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                About
              </span>
            </Link>
            <Link href="/projects">
              <span className={`text-sm transition-colors cursor-pointer ${location.startsWith('/projects') ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                Projects
              </span>
            </Link>
            <Link href="/contact">
              <span className={`text-sm transition-colors cursor-pointer ${location === '/contact' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                Contact
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/projects/tech"} component={TechPortfolio} />
      <Route path={"/projects/design"} component={DesignPortfolio} />
      <Route path={"/projects/tech/human-interaction"} component={HumanInteractionSystems} />
      <Route path={"/projects/tech/parsons"} component={ParsonsTech} />
      <Route path={"/contact"} component={Contact} />
      
      {/* Tech project detail pages */}
      <Route path={"/projects/tech/ora"} component={ORA} />
      <Route path={"/projects/tech/bopen"} component={Bopen} />
      <Route path={"/projects/tech/human-interaction/design-agent"} component={DesignAgent} />
      <Route path={"/projects/tech/human-interaction/science-wellbeing"} component={ScienceWellbeing} />
      <Route path={"/projects/tech/human-interaction/user-research"} component={UserResearch} />
      <Route path={"/projects/tech/parsons/voice-interaction"} component={VoiceInteraction} />
      <Route path={"/projects/tech/parsons/cultural-values"} component={CulturalValues} />
      <Route path={"/projects/tech/parsons/tech-community"} component={TechCommunity} />
      
      {/* Design project detail pages */}
      <Route path={"/projects/design/marketing-design"} component={MarketingDesign} />
      <Route path={"/projects/design/fashion"} component={Fashion} />
      <Route path={"/projects/design/design-thinking"} component={DesignThinking} />
      <Route path={"/projects/design/creative-writing"} component={CreativeWriting} />
      <Route path={"/projects/design/risd-projects"} component={RISDProjects} />
      <Route path={"/projects/design/music"} component={Music} />
      
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-black text-white">
            <Navigation />
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
