import React, { useEffect, useRef } from 'react';
import { 
  Brain, 
  LineChart, 
  Users, 
  Zap, 
  ShieldCheck,
  Sparkles,
  Gauge,
  MessageSquare
} from 'lucide-react';

const Technology = () => {
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

    const cards = document.querySelectorAll('.tech-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const technologies = [
    {
      id: 1,
      title: 'Adaptive AI',
      description: 'Our AI systems learn from user behavior to continuously improve the customer experience.',
      icon: <Brain className="h-10 w-10 text-indigo-500" />,
      delay: 'animation-delay-300'
    },
    {
      id: 2,
      title: 'Conversion Optimization',
      description: 'Data-driven algorithms to maximize your sales and lead generation performance.',
      icon: <LineChart className="h-10 w-10 text-indigo-500" />,
      delay: 'animation-delay-600'
    },
    {
      id: 3,
      title: 'Audience Expansion',
      description: 'Smart targeting to help you reach ideal customers and grow your market presence.',
      icon: <Users className="h-10 w-10 text-indigo-500" />,
      delay: 'animation-delay-900'
    },
    {
      id: 4,
      title: 'Performance Acceleration',
      description: 'Lightning-fast loading times and optimized SEO to boost your search ranking.',
      icon: <Zap className="h-10 w-10 text-indigo-500" />,
      delay: 'animation-delay-1200'
    },
    {
      id: 5,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to protect your data and customer information.',
      icon: <ShieldCheck className="h-10 w-10 text-indigo-500" />,
      delay: 'animation-delay-300'
    },
    {
      id: 6,
      title: 'Personalization Engine',
      description: 'Tailored content and product recommendations based on individual user preferences.',
      icon: <Sparkles className="h-10 w-10 text-indigo-500" />,
      delay: 'animation-delay-600'
    },
    {
      id: 7,
      title: 'Performance Analytics',
      description: 'Comprehensive insights and metrics to track your website\'s success and ROI.',
      icon: <Gauge className="h-10 w-10 text-indigo-500" />,
      delay: 'animation-delay-900'
    },
    {
      id: 8,
      title: 'AI Chat Assistance',
      description: 'Intelligent chatbots that provide instant support and convert visitors into customers.',
      icon: <MessageSquare className="h-10 w-10 text-indigo-500" />,
      delay: 'animation-delay-1200'
    }
  ];

  return (
    <section 
      id="technology" 
      className="py-20 md:py-32 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Technology
          </h2>
          <p className="text-lg text-gray-600">
            Cutting-edge AI solutions that power your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <div 
              key={tech.id} 
              className={`tech-card p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-100 opacity-0 ${tech.delay} bg-gray-50`}
            >
              <div className="mb-5">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {tech.title}
              </h3>
              <p className="text-gray-600">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology