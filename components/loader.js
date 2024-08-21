import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div className="loader border-t-transparent border-solid border-yellow-600 border-8 rounded-full w-16 h-16 animate-spin"></div>
  </div>
);

export default Loader;
