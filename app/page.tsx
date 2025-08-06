'use client';

import Image from "next/image";
import dynamic from 'next/dynamic';
import CourseSlider from '@/components/CourseSlider';

// Types
type CourseModule = {
  title: string;
  lessons: number;
  duration: string;
};

type CourseData = {
  title: string;
  instructor: string;
  rating: number;
  totalStudents: number;
  description: string;
  price: number;
  discountedPrice: number;
  features: string[];
  modules: CourseModule[];
};

// Demo data
const courseData: CourseData = {
  title: "IELTS Academic Complete Preparation",
  instructor: "Sarah Johnson",
  rating: 4.8,
  totalStudents: 12547,
  description: "Master all four IELTS Academic test components with our comprehensive preparation course. This course is designed to help you achieve a band score of 7.0 or higher.",
  price: 99.99,
  discountedPrice: 79.99,
  features: [
    "40+ hours of on-demand video",
    "10 full-length practice tests",
    "Writing and Speaking assessments with feedback",
    "Vocabulary and grammar booster modules",
    "Access on mobile and desktop",
    "Certificate of completion"
  ],
  modules: [
    { title: "Listening Section", lessons: 12, duration: "6 hours" },
    { title: "Reading Section", lessons: 10, duration: "8 hours" },
    { title: "Writing Section", lessons: 8, duration: "10 hours" },
    { title: "Speaking Section", lessons: 6, duration: "5 hours" },
    { title: "Practice Tests", lessons: 5, duration: "15 hours" }
  ]
};

export default function CourseDetail() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold">{courseData.title}</h1>
              <p className="mt-2 text-blue-100">Achieve your target band score with expert guidance</p>
              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(courseData.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-blue-100">
                    {courseData.rating} ({courseData.totalStudents.toLocaleString()} students)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex gap-8">
          {/* Course Content */}
          <div className="lg:w-2/3">
            {/* Instructor Card */}
            <h2 className="text-lg font-medium text-gray-900 mb-4">Instructor</h2>
            <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
                    {courseData.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{courseData.instructor}</h3>
                    <div className="mt-4 text-sm text-gray-600">
                      <p>Sarah is a certified IELTS instructor with over 10 years of experience helping students achieve their target scores. She has trained thousands of students from over 50 countries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            {/* Pricing Card */}
            <div className="mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                {/* Slider */}
                <div className="relative">
                  <CourseSlider />
                </div>
                
                <div className="p-6 text-gray-800">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${courseData.discountedPrice}</span>
                    {courseData.discountedPrice < courseData.price && (
                      <span className="ml-2 text-sm text-gray-500 line-through">${courseData.price}</span>
                    )}
                  </div>
                  {courseData.discountedPrice < courseData.price && (
                    <div className="mt-2 text-sm font-medium text-green-600">
                      Limited time offer
                    </div>
                  )}
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
                    Enroll Now
                  </button>
                  <div className="mt-6">
                    <h3 className="font-medium text-gray-900">This course includes:</h3>
                    <ul className="mt-2 space-y-2">
                      {courseData.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Course Details</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {courseData.modules.reduce((acc, curr) => acc + curr.lessons, 0)} Total Lessons
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Full lifetime access
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Access on mobile and desktop
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Certificate of completion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
