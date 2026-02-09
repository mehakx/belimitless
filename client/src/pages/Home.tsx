import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Stars
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
    
    // Comets/shooting stars
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
    
    // Create initial comets
    for (let i = 0; i < 2; i++) {
      createComet();
    }
    
    let animationId: number;
    let frame = 0;
    
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
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
      
      // Draw and update comets
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
      
      // Randomly create new comets
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

  return (
    <div className="min-h-screen relative bg-black">
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-display font-bold tracking-wide text-white hover:text-gray-300 transition-colors">
            Be Limitless
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-sm text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 text-white tracking-wide">
              Be Limitless
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-6">
              An AI Product Builder and Systems Designer
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Crafting intelligent systems that push the boundaries of what's possible. Specializing in AI product development and scalable system architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/projects">
                <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 font-medium">
                  See Portfolio
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/80 backdrop-blur-md border-t border-white/10 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2026 Mehak Garg. Be Limitless.
          </p>
        </div>
      </footer>
    </div>
  );
}
