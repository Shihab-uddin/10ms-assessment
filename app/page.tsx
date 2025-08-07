'use client';

import Image from "next/image";
import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection";
import InstructorCard from "@/components/InstructureCard";
import PricingCard from "@/components/PricingCard";

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
  instructor: "Munzereen Shahid",
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
      <HeroSection
        title={courseData.title}
        subtitle="Achieve your target band score with expert guidance"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Instructor</h2>
            <InstructorCard
              name={courseData.instructor}
              image="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
              bio="Sarah is a certified IELTS instructor with over 10 years of experience helping students achieve their target scores. She has trained thousands of students from over 50 countries."
            />
          </div>

          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <PricingCard
              price={courseData.price}
              discountedPrice={courseData.discountedPrice}
              features={courseData.features}
            />

            {/* Keep other parts like Course Details here */}
          </div>
        </div>
      </main>
    </div>
  );
}
