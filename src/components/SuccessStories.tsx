import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const successStories = [
    {
      id: 1,
      company: 'EcoStyle Fashion',
      industry: 'E-commerce',
      stats: '143% increase in conversions',
      quote: 'Malabar AI transformed our online store with personalized recommendations and a streamlined checkout process. Our sales increased dramatically within just two months of launch.',
      author: 'Sarah Chen, CEO',
      image: 'https://images.pexels.com/photos/7821879/pexels-photo-7821879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      company: 'CloudSecure',
      industry: 'Cybersecurity',
      stats: '87% boost in lead generation',
      quote: 'The AI-driven qualification system Malabar built for us completely revolutionized our sales pipeline. We\'re now able to focus on high-value prospects and close deals faster.',
      author: 'Michael Torres, Marketing Director',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      company: 'Wellness Hub',
      industry: 'Health & Fitness',
      stats: '215% growth in user engagement',
      quote: 'Our members love the personalized wellness plans and automated coaching that Malabar AI implemented. We\'ve seen incredible retention rates and referrals since launching the new platform.',
      author: 'Emma Watson, Founder',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="success-stories" 
      className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            See how our clients achieved exceptional results with Malabar AI
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              {successStories.map((story, index) => (
                <div 
                  key={story.id}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <img 
                        src={story.image} 
                        alt={story.company} 
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-1 text-gray-900">{story.company}</h3>
                        <p className="text-indigo-600 font-medium">{story.industry}</p>
                      </div>
                      <p className="text-xl font-bold mb-6 text-gray-900">{story.stats}</p>
                      <blockquote className="italic text-gray-600 mb-6">
                        "{story.quote}"
                      </blockquote>
                      <p className="font-medium text-gray-900">{story.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full transition-all ${
                    index === activeIndex ? 'bg-indigo-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;