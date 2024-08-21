"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// Sample slide data
const slides = [
  {
    image: 'https://img.freepik.com/premium-photo/generative-ai-image-beautiful-indian-businesswoman-with-long-hair-working-office_467541-5581.jpg',
    name: 'Prach Gupta',
    title: 'Founder & CEO',
    description: 'I am the founder of Utkristi AI Labs and we’ve pushed our limit so far to make it successful.',
  },
  {
    image: 'https://img.freepik.com/premium-photo/generative-ai-image-indian-man-with-smiling-expression-office_467541-8163.jpg',
    name: 'Raj Gupta',
    title: 'Co-Founder & Technical Advisor',
    description: 'As a technical advisor, I lead the tech team to deliver innovative solutions.',
  },
  {
    image: 'https://img.freepik.com/premium-photo/woman-with-long-hair-long-hair-style-smiles-camera_800563-8515.jpg',
    name: 'Poorni C.',
    title: 'Co-Founder & Operations Lead',
    description: 'I am the co-founder of pagedone and we’ve pushed our limit so far to make it successful.',
  },
  {
    image: 'https://img.freepik.com/premium-photo/happy-man-holding-paper-generative-ai_802140-1347.jpg',
    name: 'Utkar Gupta',
    title: 'Co-Founder & Application Lead',
    description: 'I am the co-founder of Utkristi.io and we’ve pushed our efforts to make it successful.',
  },
  {
    image: 'https://img.freepik.com/premium-photo/handsome-man-with-beard-melancholic-appearance_1089311-881.jpg',
    name: 'Prath Goyal',
    title: 'AI Lead',
    description: 'I am the co-founder of pagedone and we’ve pushed our limit so far to make it successful.',
  },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 1024 ? 2 : 1); // Show 2 slides on screens wider than 1024px
    };

    handleResize();
    window.addEventListener('resize', handleResize);


    // Set up auto-swiping
    const intervalId = setInterval(() => {
        nextSlide();
      }, 5000); 
  
      return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(intervalId); 
      };
    }, [slidesToShow, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - slidesToShow;
      return newIndex < 0 ? slides.length - (slides.length % slidesToShow) : newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + slidesToShow;
      return newIndex >= slides.length ? 0 : newIndex;
    });
  };

  const slideWidth = slidesToShow === 1 ? 'w-full' : 'w-[48%]';
  const containerWidth = slidesToShow === 1 ? 100 : slides.length * (100 / slidesToShow);

  return (
      <div className="relative overflow-hidden">
      {/* Slider Wrapper */}
      <div className="relative flex">
        <div
          className="flex lg:gap-[2.1%] transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * (100 / slidesToShow))}%)`,
            width: `${containerWidth}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${slideWidth}`}
            >
              <div className="bg-white p-6 rounded-lg shadow-md min-h-[240px]"> {/* Adjust min-height as needed */}
                <div className='relative w-36 h-36 bg-black rounded-full overflow-hidden mx-auto mb-4 border-4 border-yellow-600'>
                <Image
                  src={slide.image}
                  alt={slide.name}
                //   width={150}
                //   height={150}
                  layout="fill"
                  objectFit="cover"
                  className="mx-auto rounded-full mb-4 bg-black overflow-hidden object-cover"
                />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{slide.name}</h3>
                <p className="text-gray-600">{slide.title}</p>
                <p className="mt-2 text-gray-700">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Navigation Buttons */}
        <div className="m-4 bottom-4 flex justify-center px-4">
          <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 bg-black text-white rounded-l"
              >
                {/* <ChevronLeftIcon className="w-6 h-6" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
          
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-black text-white rounded-r"
              >
                {/* <ChevronRightIcon className="w-6 h-6" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
          
              </button>
           </div>
        </div>
    </div>
  );
};

export default Team;
