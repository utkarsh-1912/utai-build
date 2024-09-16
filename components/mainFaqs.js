import { useState } from 'react';

const faqs = [
  {
    question: 'What is Utkristi AI Labs?',
    answer: 'Utkristi AI Labs is a one of the innovation lab of Utkristi LLC dedicated to empowering businesses with advanced AI solutions for automation and data-driven decision-making.',
  },
  {
    question: 'How does your AI technology work?',
    answer: 'Our AI technology utilizes advanced algorithms and machine learning models to analyze data, predict trends, and automate processes, enhancing efficiency and accuracy.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a variety of industries including finance, healthcare, manufacturing, and retail, providing tailored AI solutions to meet specific industry needs.',
  },
  {
    question: 'How can I get started with Utkristi AI Labs?',
    answer: 'You can get started by contacting us through our website or scheduling a consultation. We’ll assess your needs and provide a customized solution.',
  },
  {
    question: 'Do you offer support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance services to ensure that our AI solutions continue to operate smoothly and effectively.',
  },
];

const MainFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black w-screen py-8 lg:py-16">
      <div className="px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="w-[95vw] md:w-[85vw] mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b focus:border border-yellow-600 focus:rounded-sm">
              <button
                className="w-full px-2 sm:px-4 py-2 text-left text-white focus:bg-yellow-600/50 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className={`transition-transform transition-300 ${openIndex === index ? 'rotate-180' : 'rotate-90'}`}>
                  {/* SVG for arrow */}
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={openIndex === index ? 'M19 9l-7 7-7-7' : 'M19 15l-7-7-7 7'}
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`px-6 py-4 bg-gray-200 border-t-2 border-t-yellow-600 text-left text-gray-900 ${openIndex === index ? 'block' : 'hidden'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFaqs;
