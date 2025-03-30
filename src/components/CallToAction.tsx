
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-sketch-blue/10 to-sketch-purple/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Drawing?</h2>
        <p className="text-lg text-sketch-gray mb-10 max-w-2xl mx-auto">
          Join thousands of creators, designers, and teams who use SketchyDraw to bring their ideas to life. No sign-up required to get started.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-sketch-blue hover:bg-sketch-blue/90 text-white">
            Start Drawing Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-sketch-gray text-sketch-gray hover:bg-sketch-gray/10">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
