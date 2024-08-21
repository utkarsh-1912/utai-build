import React from 'react'
import { BanknotesIcon, ChartBarSquareIcon, DocumentChartBarIcon, GlobeAltIcon, InboxIcon, LockClosedIcon, UserGroupIcon, HeartIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const ProductCard = ({ title, description, icon }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6 text-center">
      <div className="mb-4 p-4 rounded-full bg-yellow-600 inline-flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  </div>
);

export default ProductCard;