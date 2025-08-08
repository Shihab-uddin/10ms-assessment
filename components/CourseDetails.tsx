'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type AboutItem = {
  id: string;
  title: string;
  description: string;
};

type AboutProps = {
  aboutValues: AboutItem[];
};

export default function CourseDetails({ aboutValues }: AboutProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden mb-6 md:rounded-md md:border p-6 space-y-6">
      {aboutValues.map(({ id, title, description }, index) => (
        <div key={id} className="rounded-md overflow-hidden border-b border-dotted border-gray-300 pb-2">
          {/* Dropdown header */}
          <button
            onClick={() => toggleIndex(index)}
            className="w-full px-5 py-3 text-left font-medium text-black focus:outline-none flex justify-between items-center"
          >
            <span dangerouslySetInnerHTML={{ __html: title }} />
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown content */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? 'max-h-[2000px] py-3 px-5' : 'max-h-0 py-0 px-5'
            }`}
          >
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
