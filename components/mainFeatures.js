import React from 'react';

const features = [
  {
    title: 'AI-Driven Automation',
    description: 'Leverage powerful AI algorithms to automate repetitive tasks and increase efficiency.',
    icon: 'https://img.icons8.com/ios/50/ca8a04/robot.png',
  },
  {
    title: 'Predictive Analytics',
    description: 'Use AI to analyze data and make predictions that help you stay ahead of the competition.',
    icon: 'https://img.icons8.com/?size=100&id=118362&format=png&color=ca8a04',
  },
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI models designed to meet your specific business needs and challenges.',
    icon: 'https://img.icons8.com/?size=100&id=61864&format=png&color=ca8a04',
  },
];

const MainFeatures = () => {
  return (
    <section className="py-12 bg-black mt-4 w-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our AI Automation Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 text-center rounded-lg shadow-lg">
              <img src={feature.icon} alt={feature.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl text-yellow-600 font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
