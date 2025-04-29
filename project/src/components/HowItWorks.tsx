import React, { useEffect, useRef } from 'react';
import { 
  BarChart3, 
  PencilRuler, 
  Bot, 
  Rocket, 
  ChevronRight 
} from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = document.querySelectorAll('.step-item');
    steps.forEach((step) => {
      observer.observe(step);
    });

    return () => {
      steps.forEach((step) => {
        observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Discover',
      description: 'We analyze your business goals, audience, and current web presence to develop a tailored AI strategy.',
      icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
      delay: 'animation-delay-300'
    },
    {
      id: 2,
      title: 'Design',
      description: 'Our team creates a beautiful, high-performance website design optimized for conversions and engagement.',
      icon: <PencilRuler className="h-8 w-8 text-indigo-500" />,
      delay: 'animation-delay-600'
    },
    {
      id: 3,
      title: 'Integrate',
      description: 'We implement cutting-edge AI tools that personalize user experiences and automate key business processes.',
      icon: <Bot className="h-8 w-8 text-indigo-500" />,
      delay: 'animation-delay-900'
    },
    {
      id: 4,
      title: 'Launch & Optimize',
      description: 'Your AI-powered website goes live, and we continuously optimize based on real user data and performance.',
      icon: <Rocket className="h-8 w-8 text-indigo-500" />,
      delay: 'animation-delay-1200'
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-20 md:py-32 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How NeuroScale AI Works
          </h2>
          <p className="text-lg text-gray-600">
            Our streamlined process transforms your web presence with powerful AI integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`step-item bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md hover:border-indigo-100 opacity-0 ${step.delay}`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#success-stories" 
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            See our success stories <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks