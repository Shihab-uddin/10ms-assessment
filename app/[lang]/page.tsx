import Image from "next/image";
import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection";
import InstructorCard from "@/components/InstructureCard";
import PricingCard from "@/components/PricingCard";
import { fetchCourseDetails } from "@/lib/fetchCourseDetails";
// // Types
// type CourseModule = {
//   title: string;
//   lessons: number;
//   duration: string;
// };

// type CourseData = {
//   title: string;
//   instructor: string;
//   rating: number;
//   totalStudents: number;
//   description: string;
//   price: number;
//   discountedPrice: number;
//   features: string[];
//   modules: CourseModule[];
// };

// // Demo data
// const courseData: CourseData = {
//   title: "IELTS Academic Complete Preparation",
//   instructor: "Munzereen Shahid",
//   rating: 4.8,
//   totalStudents: 12547,
//   description: "Master all four IELTS Academic test components with our comprehensive preparation course. This course is designed to help you achieve a band score of 7.0 or higher.",
//   price: 99.99,
//   discountedPrice: 79.99,
//   features: [
//     "40+ hours of on-demand video",
//     "10 full-length practice tests",
//     "Writing and Speaking assessments with feedback",
//     "Vocabulary and grammar booster modules",
//     "Access on mobile and desktop",
//     "Certificate of completion"
//   ],
//   modules: [
//     { title: "Listening Section", lessons: 12, duration: "6 hours" },
//     { title: "Reading Section", lessons: 10, duration: "8 hours" },
//     { title: "Writing Section", lessons: 8, duration: "10 hours" },
//     { title: "Speaking Section", lessons: 6, duration: "5 hours" },
//     { title: "Practice Tests", lessons: 5, duration: "15 hours" }
//   ]
// };

type Props = {
  params: {
    lang: 'en' | 'bn';
  };
};

export const dynamicParams = false;

export const generateStaticParams = () => {
  return [{ lang: 'en' }, { lang: 'bn' }];
};


export default async  function CourseDetail({ params }: Props) {
  const { lang } = await params;
  const course = await fetchCourseDetails(lang);

  //instructor fetching
  const instructorSection = course.sections.find(
    (section: any) => section.type === 'instructors'
  );
  const instructor = instructorSection?.values?.[0];
  const instructorSectionHeading = instructorSection?.name;

  const ctatextname = course.cta_text.name;
  const ctatextval = course.cta_text.value;



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={course.title}
        subtitle={course.description}
      >
        <PricingCard
          checklist={course.checklist}
          media={course.media}
          cta = {ctatextname}
          ctavalue= {ctatextval}
        />
      </HeroSection>


      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{instructorSectionHeading}</h2>
            {instructor && (
              <InstructorCard
                name={instructor.name}
                image={instructor.image}
                description={instructor.description}
              />
            )}
          </div>

          <div className="lg:w-1/3 mt-8 lg:mt-0">
            
          </div>
        </div>
      </main>
    </div>
  );
}
