import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const _error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
          <span>😔</span>
        </div>
        <h1 className="text-6xl font-extrabold mb-4">Oops!</h1>
        <p className="text-xl mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
          <ArrowRightIcon className="w-5 h-5 mr-2" />
          Go Home
        </a>
      </div>
    </div>
  );
};

export default _error;

