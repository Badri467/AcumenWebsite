import React from 'react';
import Rainingl from './Rainingl';

const coordinators = [
  {
    name: "John Doe",
    role: "Technical Coordinator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Jane Smith",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Alex Johnson",
    role: "Marketing Coordinator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    linkedin: "#",
    github: "#"
  }
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop",
    title: "Coding Workshop",
    description: "Hands-on learning experience with industry experts"
  },
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    title: "Tech Exhibition",
    description: "Showcasing cutting-edge technology and innovations"
  },
  {
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop",
    title: "Innovation Lab",
    description: "Where ideas transform into reality"
  },
  {
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop",
    title: "Robotics Competition",
    description: "Pushing the boundaries of automation"
  }
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0">
        <Rainingl />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        
        {/* Gallery Section */}
        <section className="min-h-screen py-20 px-4 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Gallery</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-green-400 mb-4">{image.description}</p>
                    <div className="w-full h-1 bg-green-400/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-400 transition-all duration-[5000ms] ease-linear"
                        style={{
                          width: '100%',
                          transform: 'translateX(-100%)',
                          animation: 'progress 5s linear infinite'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-green-400 w-6' 
                        : 'bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coordinators Section */}
        <section className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Our Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {coordinators.map((coordinator, index) => (
                <div 
                  key={index}
                  className="bg-black/50 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative mb-6">
                    <img 
                      src={coordinator.image} 
                      alt={coordinator.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-green-400"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/50" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{coordinator.name}</h3>
                    <p className="text-green-400 mb-4">{coordinator.role}</p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={coordinator.linkedin} 
                        className="text-white hover:text-green-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href={coordinator.github} 
                        className="text-white hover:text-green-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default App;