'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

type CourseSliderProps = {
  className?: string;
};

export default function CourseSlider({ className = '' }: CourseSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    className: `rounded-t-lg ${className}`
  };

  return (
    <Slider {...settings}>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          className="w-full h-48"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Course Preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt="Course Image 1"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <Image 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Course Image 2"
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    </Slider>
  );
}
