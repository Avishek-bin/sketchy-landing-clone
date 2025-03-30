
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Examples = () => {
  const examples = [
    {
      id: "diagrams",
      label: "Diagrams",
      image: "diagram-sketch.png",
      description: "Create flowcharts, UML diagrams, and process flows with distinct hand-drawn aesthetics."
    },
    {
      id: "wireframes",
      label: "Wireframes",
      image: "wireframe-sketch.png",
      description: "Design user interfaces and wireframes that maintain that early-stage ideation feel."
    },
    {
      id: "mindmaps",
      label: "Mind Maps",
      image: "mindmap-sketch.png", 
      description: "Organize your thoughts and ideas with beautiful mind maps and concept diagrams."
    },
    {
      id: "illustrations",
      label: "Illustrations",
      image: "illustration-sketch.png",
      description: "Create custom illustrations and artwork with our sketchy drawing tools."
    }
  ];

  return (
    <section id="examples" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Can Create</h2>
          <p className="text-lg text-sketch-gray max-w-2xl mx-auto">
            From simple diagrams to complex wireframes, SketchyDraw helps you visualize your ideas.
          </p>
        </div>

        <Tabs defaultValue="diagrams" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {examples.map((example) => (
                <TabsTrigger key={example.id} value={example.id} className="px-6 py-3">
                  {example.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {examples.map((example) => (
            <TabsContent key={example.id} value={example.id} className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold mb-4">{example.label}</h3>
                  <p className="text-lg text-sketch-gray mb-6">{example.description}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-sketch-blue rounded-full mr-3"></span>
                      <span>Professional-looking results</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-sketch-blue rounded-full mr-3"></span>
                      <span>Easy to create and modify</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-sketch-blue rounded-full mr-3"></span>
                      <span>Export in multiple formats</span>
                    </li>
                  </ul>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-lg border-2 border-dashed border-sketch-blue/30 p-4 bg-white shadow-md">
                    <div className="w-full h-[300px] bg-sketch-light rounded-md flex items-center justify-center">
                      <div className="relative w-[90%] h-[90%]">
                        {/* Fake Example Content */}
                        {example.id === "diagrams" && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-full">
                              {/* Boxes */}
                              <div className="absolute top-1/4 left-1/4 w-32 h-20 border-2 border-sketch-blue rounded transform rotate-1 bg-white flex items-center justify-center">
                                <span>Start</span>
                              </div>
                              <div className="absolute top-1/2 left-1/2 w-32 h-20 border-2 border-sketch-red rounded transform -rotate-2 bg-white flex items-center justify-center">
                                <span>Process</span>
                              </div>
                              <div className="absolute bottom-1/4 right-1/4 w-32 h-20 border-2 border-sketch-green rounded transform rotate-1 bg-white flex items-center justify-center">
                                <span>End</span>
                              </div>
                              
                              {/* Arrows */}
                              <div className="absolute top-[35%] left-[40%] w-20 h-1 bg-sketch-gray transform rotate-45"></div>
                              <div className="absolute top-[60%] right-[40%] w-20 h-1 bg-sketch-gray transform rotate-45"></div>
                            </div>
                          </div>
                        )}
                        
                        {example.id === "wireframes" && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-full">
                              {/* Header */}
                              <div className="absolute top-[10%] left-[10%] w-[80%] h-10 border-2 border-sketch-gray rounded"></div>
                              
                              {/* Sidebar */}
                              <div className="absolute top-[25%] left-[10%] w-[20%] h-[60%] border-2 border-sketch-gray rounded"></div>
                              
                              {/* Content */}
                              <div className="absolute top-[25%] left-[35%] w-[55%] h-[30%] border-2 border-sketch-gray rounded"></div>
                              <div className="absolute top-[60%] left-[35%] w-[55%] h-[25%] border-2 border-sketch-gray rounded"></div>
                            </div>
                          </div>
                        )}
                        
                        {example.id === "mindmaps" && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-full">
                              {/* Central Node */}
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-sketch-purple rounded-full bg-white flex items-center justify-center">
                                <span>Concept</span>
                              </div>
                              
                              {/* Connected Nodes */}
                              <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-sketch-blue rounded-full bg-white flex items-center justify-center">
                                <span>Idea 1</span>
                              </div>
                              <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-sketch-red rounded-full bg-white flex items-center justify-center">
                                <span>Idea 2</span>
                              </div>
                              <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-2 border-sketch-green rounded-full bg-white flex items-center justify-center">
                                <span>Idea 3</span>
                              </div>
                              <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-sketch-yellow rounded-full bg-white flex items-center justify-center">
                                <span>Idea 4</span>
                              </div>
                              
                              {/* Connecting Lines */}
                              <div className="absolute top-[38%] left-[38%] w-[15%] h-1 bg-sketch-gray transform rotate-45"></div>
                              <div className="absolute top-[38%] right-[38%] w-[15%] h-1 bg-sketch-gray transform -rotate-45"></div>
                              <div className="absolute bottom-[38%] left-[38%] w-[15%] h-1 bg-sketch-gray transform -rotate-45"></div>
                              <div className="absolute bottom-[38%] right-[38%] w-[15%] h-1 bg-sketch-gray transform rotate-45"></div>
                            </div>
                          </div>
                        )}
                        
                        {example.id === "illustrations" && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="relative w-full h-full">
                              {/* Simple House */}
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                {/* House Body */}
                                <div className="w-40 h-32 border-2 border-sketch-gray rounded"></div>
                                {/* Roof */}
                                <div className="w-48 h-24 border-t-2 border-l-2 border-r-2 border-sketch-red transform -translate-x-[10%] -translate-y-[100%] rotate-[4deg]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                                {/* Door */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-20 border-2 border-sketch-blue rounded-t-lg"></div>
                                {/* Windows */}
                                <div className="absolute top-1/4 left-1/4 w-10 h-10 border-2 border-sketch-yellow"></div>
                                <div className="absolute top-1/4 right-1/4 w-10 h-10 border-2 border-sketch-yellow"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Examples;
