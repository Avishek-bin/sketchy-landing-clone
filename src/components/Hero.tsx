
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Draw, Collaborate, <span className="text-sketch-blue">Share</span>
            </h1>
            <p className="text-lg md:text-xl text-sketch-gray mb-8 max-w-lg mx-auto lg:mx-0">
              Create beautiful hand-drawn diagrams, wireframes, and illustrations. 
              Collaborate in real-time and share your creations instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-sketch-blue hover:bg-sketch-blue/90 text-white">
                Start Drawing Now
              </Button>
              <Button size="lg" variant="outline" className="border-sketch-blue text-sketch-blue hover:bg-sketch-blue/10">
                See Examples
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg border-2 border-dashed border-sketch-blue/30 p-4 bg-white shadow-lg relative overflow-hidden animate-float">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-sketch-yellow/10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sketch-blue/10 rounded-full"></div>
              
              <div className="relative">
                <div className="w-full h-[300px] sm:h-[400px] bg-sketch-light rounded-md relative">
                  {/* Sketchy Elements */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-sketch-blue rounded-lg transform rotate-3 opacity-80"></div>
                  <div className="absolute top-1/3 right-1/4 w-40 h-24 border-2 border-sketch-red rounded-md transform -rotate-6 opacity-80"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-sketch-green rounded-full transform rotate-12 opacity-80"></div>
                  
                  {/* Connecting Lines */}
                  <div className="absolute top-1/3 left-1/2 w-40 h-1 bg-sketch-gray/30 transform rotate-45"></div>
                  <div className="absolute top-1/2 left-1/3 w-60 h-1 bg-sketch-purple/30 transform -rotate-30"></div>
                  
                  {/* Text Elements */}
                  <div className="absolute top-10 left-10 px-3 py-1 bg-sketch-yellow/20 border border-sketch-yellow rounded transform -rotate-2">
                    <span className="text-sketch-dark text-sm">Idea</span>
                  </div>
                  <div className="absolute bottom-12 right-10 px-3 py-1 bg-sketch-blue/20 border border-sketch-blue rounded transform rotate-3">
                    <span className="text-sketch-dark text-sm">Wireframe</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-sketch-red/10 rounded-full"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-sketch-green/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
