import React from 'react';

const MainHeader = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center md:min-h-[70vh] p-8 w-screen">
      <h1 className="gradient-title text-3xl sm:text-5xl font-bold mb-4 p-2">Empowering Automation with AI</h1>
      <p className="text-lg sm:text-xl p-2 pt-1">Transform your business operations with cutting-edge AI technology. Discover how automation can drive your success.</p>
      <a href="#cta" className="btn-yellow-light text-black px-6 py-2 sm:py-3 mt-10 rounded-lg text-lg font-semibold">Get Started</a>
    </section>
  );
};

export default MainHeader;
