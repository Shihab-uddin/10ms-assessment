import Image from "next/image";
import dynamic from 'next/dynamic';
import HeroSection from "@/components/HeroSection";
import InstructorCard from "@/components/InstructureCard";
import PricingCard from "@/components/PricingCard";
import CourseFeatures from "@/components/courseFeatures";
import { fetchCourseDetails } from "@/lib/fetchCourseDetails";
import GroupJoint from "@/components/GroupJoint";
import FeatureExplanations from '@/components/FeatureExplanations';
import WhatYoullLearn from "@/components/WhatYoullLearnCard";
import CourseDetails from "@/components/CourseDetails";
import SidebarPricing from "@/components/SidebarPricingCard";
import SEOHead from "@/components/SEOHead";
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
  const seo = course.seo;

  //instructor fetching
  const instructorSection = course.sections.find(
    (section: any) => section.type === 'instructors'
  );
  const instructor = instructorSection?.values?.[0];
  const instructorSectionHeading = instructorSection?.name;

  const ctatextname = course.cta_text.name;
  const ctatextval = course.cta_text.value;

  //features fething
  const featuresSection = course.sections.find(
    (section: any) => section.type === 'features'
  );
  const featuresValues = featuresSection?.values;
  const featuresValuesHeading = featuresSection?.name;

  // group_join_engagement fetching
  const groupJoinEngagementSection = course.sections.find(
    (section: any) => section.type === "group_join_engagement"
  );
  const groupJoinEngagementValues = groupJoinEngagementSection?.values;

  // what you'll learn section fetching
  const whatYoullLearn = course.sections.find(
    (section: any) => section.type === "pointers"
  );
  const whatYoullLearnValues = whatYoullLearn?.values;
  const whatYoullLearnValuesHeading = whatYoullLearn?.name;

  //features explaination section fetching
  const featureExplanationsSection = course.sections.find(
    (section: any) => section.type === 'feature_explanations'
  );
  const featureExplanationsValues = featureExplanationsSection?.values || [];
  const featureExplanationsHeading = featureExplanationsSection?.name;


  //course details section fetching
  const aboutSection = course.sections.find(
    (section: any) => section.type === 'about'
  );
  const aboutValues = aboutSection?.values || [];
  const aboutSectionHeading = aboutSection?.name;



  return (
    <>
    <SEOHead seo={seo}/>
    <div className="min-h-screen bg-white">
      {/* Hero component */}
      <HeroSection
        title={course.title}
        subtitle={course.description}
      >
        {/* pricing card component */}
        <PricingCard
          checklist={course.checklist}
          media={course.media}
          cta = {ctatextname}
          ctavalue= {ctatextval}
        />
      </HeroSection>
      {/* Hero component ends */}

      {/* Main Content block */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex gap-8">
          <div className="lg:w-2/3 space-y-12">
            {/* Instructor component */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{instructorSectionHeading}</h2>
            {instructor && (<InstructorCard name={instructor.name} image={instructor.image} description={instructor.description} hasinspage={instructor.has_instructor_page} slug={instructor.slug}/>)}
            {/* course features component */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{featuresValuesHeading}</h2>
            {featuresValues && <CourseFeatures features={featuresValues} />}
            {/* group join component */}
            {groupJoinEngagementValues && <GroupJoint groupJoinfeatures={groupJoinEngagementValues} />}
            {/* what youll learn component */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{whatYoullLearnValuesHeading}</h2>
            {groupJoinEngagementValues && <WhatYoullLearn whatYoullLearn={whatYoullLearnValues}  />}
            {/* features explaination component */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{featureExplanationsHeading}</h2>
            {featureExplanationsValues.length > 0 && (<FeatureExplanations features={featureExplanationsValues} />)}
            {/* course details component */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{aboutSectionHeading}</h2>
            {aboutValues.length > 0 && <CourseDetails aboutValues={aboutValues} />}
          </div>

          {/* Sidebar block */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <SidebarPricing
              checklist={course.checklist}
              media={course.media}
              cta={ctatextname}
              ctavalue={ctatextval}
            />
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
