import React from "react";
import ServiceCard from "./serviceCard";
import { ArrowPathIcon, BoltIcon, CodeBracketSquareIcon, Cog8ToothIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline";

const Service = () => {
  return (
    <section className="p-8 pb-12 pt-12 bg-transparent lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-yellow-700 dark:text-yellow-600">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                Innovative AI Automation Solutions
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Harness the power of automation and AI to streamline processes, enhance efficiency, and drive growth in your organization.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <ServiceCard
            title="Intelligent Automation"
            details="Automate repetitive tasks with smart algorithms that adapt and optimize for efficiency, freeing up valuable time for strategic work."
            icon={<SparklesIcon className="w-10 h-10 text-white" />}
          />
          <ServiceCard
            title="Customized Solutions"
            details="Get tailored AI solutions designed to fit the unique needs of your business, ensuring seamless integration and maximum impact."
            icon={<ShieldCheckIcon className="w-10 h-10 text-white" />}
          />
          <ServiceCard
            title="Seamless Integration"
            details="Integrate our advanced AI systems effortlessly with your current technology stack to create a cohesive and efficient workflow."
            icon={<CodeBracketSquareIcon className="w-10 h-10 text-white" />}
          />
          <ServiceCard
            title="Real-Time Data Processing"
            details="Access and analyze data in real-time to make informed decisions quickly and stay ahead of the competition."
            icon={<BoltIcon className="w-10 h-10 text-white" />}
          />
          <ServiceCard
            title="Scalable Automation"
            details="Our automation solutions are designed to scale with your business, adapting to growing needs and evolving challenges."
            icon={<Cog8ToothIcon className="w-10 h-10 text-white" />}
          />
          <ServiceCard
            title="Continuous Enhancements"
            details="Benefit from regular updates and improvements to our AI solutions, ensuring you always have access to the latest advancements."
            icon={<ArrowPathIcon className="w-10 h-10 text-white" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;