
import { ArrowRight, Share2, Users, Zap, Layout, PenTool, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sketch-blue/10 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sketch-gray text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Features = () => {
  const features = [
    {
      icon: <PenTool className="w-6 h-6 text-sketch-blue" />,
      title: "Sketchy Drawing Tools",
      description: "Create professional-looking hand-drawn diagrams and wireframes with our intuitive sketchy style tools."
    },
    {
      icon: <Users className="w-6 h-6 text-sketch-blue" />,
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time, see changes instantly, and create together seamlessly."
    },
    {
      icon: <Share2 className="w-6 h-6 text-sketch-blue" />,
      title: "Easy Sharing",
      description: "Share your creations with a simple link or export to common formats like PNG, SVG or PDF."
    },
    {
      icon: <Layout className="w-6 h-6 text-sketch-blue" />,
      title: "Ready-made Templates",
      description: "Jump-start your ideation with dozens of ready-made templates for various use cases."
    },
    {
      icon: <Cloud className="w-6 h-6 text-sketch-blue" />,
      title: "Cloud Storage",
      description: "All your drawings are automatically saved to the cloud and accessible from anywhere."
    },
    {
      icon: <Zap className="w-6 h-6 text-sketch-blue" />,
      title: "Lightning Fast",
      description: "Blazing fast performance even with complex diagrams, thanks to our optimized canvas rendering."
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-sketch-gray max-w-2xl mx-auto">
            Everything you need to bring your ideas to life with simple, beautiful diagrams and illustrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
