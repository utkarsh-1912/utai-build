import React, { useEffect, useState } from 'react';

// Testimonials Data
const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Head of Innovation, TechForward',
    text: 'Utkristi AI Labs has revolutionized our approach to automation. Their solutions are intuitive and highly effective.',
    image: 'https://via.placeholder.com/800x600?text=Testimonial+1',
  },
  {
    name: 'Bob Smith',
    role: 'CEO, DataDriven Inc.',
    text: 'The AI models developed by Utkristi have enabled us to forecast trends with remarkable accuracy. A game-changer for our business.',
    image: 'https://via.placeholder.com/800x600?text=Testimonial+2',
  },
  {
    name: 'Clara Brown',
    role: 'CTO, FutureTech',
    text: 'Exceptional service and cutting-edge technology. Utkristi’s AI solutions have significantly improved our operational efficiency.',
    image: 'https://via.placeholder.com/800x600?text=Testimonial+3',
  },
  // Add more testimonials as needed
];

const MainTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-yellow-600 w-screen">
    <div className="py-8 mx-auto text-center lg:py-16 md:px-10 px-2">
      <div id="testimonial-carousel" className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative min-h-[50vh] sm:min-h-80 overflow-hidden rounded-lg md:h-fit">
          {/* Carousel items */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-black rounded absolute w-full h-full transition-opacity duration-700 ease-in-out p-4  ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ top: 0, left: 0 }}
            >
              <figure className="py-4 max-w-screen-md mx-auto my-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-lg md:text-2xl font-medium text-gray-900 dark:text-white">
                    "{testimonial.text}"
                  </p>
                </blockquote>
                <figcaption className="flex flex-col md:flex-row items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={testimonial.image}
                    alt="profile picture"
                  />
                  <div className="flex flex-col md:flex-row items-center md:divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="md:pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
              aria-current={index === currentIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  </section>
);
};

export default MainTestimonial;
