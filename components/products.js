"use client"
import React, { useState } from "react";
import { BanknotesIcon, ChartBarSquareIcon, DocumentChartBarIcon, GlobeAltIcon, InboxIcon, LockClosedIcon, UserGroupIcon, HeartIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import ProductCard from "./productCard";

const Products = () => {
  const [showMore, setShowMore] = useState(false);

  // Initial and expanded product lists
  const initialProducts = [
    { title: "Smart Investment Advisor", description: "Optimize your portfolio with data-driven insights and personalized recommendations.", icon: <ChartBarSquareIcon className="w-8 h-8 text-white" /> },
    { title: "Fraud Detection System", description: "Secure transactions with real-time fraud detection and prevention powered by AI.", icon: <LockClosedIcon className="w-8 h-8 text-white" /> },
    { title: "Automated Financial Reporting", description: "Generate accurate financial reports effortlessly with our AI-driven automation tools.", icon: <DocumentChartBarIcon className="w-8 h-8 text-white" /> },
    { title: "Predictive Analytics Engine", description: "Make informed decisions with predictive models that forecast market trends.", icon: <InboxIcon className="w-8 h-8 text-white" /> },
    { title: "Personal Finance Manager", description: "Manage your finances seamlessly with AI that tracks spending and suggests improvements.", icon: <BanknotesIcon className="w-8 h-8 text-white" /> },
    { title: "Global Market Insights", description: "Access a wealth of global market data and insights through our advanced AI tools.", icon: <GlobeAltIcon className="w-8 h-8 text-white" /> },
    { title: "Healthcare Analytics", description: "Enhance patient care with AI-driven analytics and operational efficiency tools.", icon: <HeartIcon className="w-8 h-8 text-white" /> },
    { title: "Patient Management System", description: "Streamline patient interactions and healthcare workflows with our intelligent management system.", icon: <UserGroupIcon className="w-8 h-8 text-white" /> },
    { title: "Educational Insights Platform", description: "Transform learning with AI that provides personalized paths and actionable insights.", icon: <AcademicCapIcon className="w-8 h-8 text-white" /> }
  ];

  const displayedProducts = showMore ? initialProducts : initialProducts.slice(0, 6);

  return (
    <>
      {/* Products Section */}
      <section className="p-8 pb-12 pt-12 bg-transparent lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-yellow-700 dark:text-yellow-600">
                  Our Products
                </span>
                <h2 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-4xl">
                  Tailored AI Solutions
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Explore our diverse range of AI-powered products designed to revolutionize industries and enhance operational efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {displayedProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                icon={product.icon}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 text-base font-semibold text-white bg-yellow-700 hover:bg-yellow-600 rounded-lg"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>

        </div>
      </section>

{/* Intro Section */}
      <section className="bg-white dark:bg-black px-4 sm:px-6">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl md:grid md:grid-cols-2 md:py-16 md:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Innovating Your Sector
            </h2>
            <p className="mb-4">
              Our AI-driven solutions are designed to transform key industries such as fintech, healthcare, and education. By leveraging cutting-edge technology, we provide tools that not only optimize performance but also drive growth and efficiency.
            </p>
            <p>
              Whether you're looking to enhance financial operations, streamline healthcare systems, or revolutionize educational tools, our suite of products is crafted to meet your specific needs and exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
