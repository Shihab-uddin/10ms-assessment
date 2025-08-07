'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { useRef } from 'react';

type MediaItem = {
  name: string;
  resource_type: 'image' | 'video';
  resource_value: string;
  thumbnail_url?: string;
};

type CourseSliderProps = {
  media: MediaItem[];
};

export default function CourseSlider({ media }: CourseSliderProps) {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div className="flex justify-center mt-4 gap-2">
        <ul className="flex gap-[45px] !m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => {
      const item = media[i];
      return (
        <div className="relative w-16 h-10 rounded overflow-hidden">
          <Image
            src={item.thumbnail_url || item.resource_value}
            alt={`Thumbnail ${i}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-opacity-30" />
        </div>
      );
    },
    className: `rounded-t-lg relative`
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {media.map((item, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9 h-48">
            {item.resource_type === 'video' ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${item.resource_value}`}
                title={`Video ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="h-full bg-gray-100 flex items-center justify-center">
                <Image
                  src={item.resource_value}
                  alt={`Image ${index}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Custom Left Arrow
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer bg-white hover:bg-white rounded-full p-2 shadow"
    >
      <svg className="w-4 h-4 text-black rotate-180" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

// Custom Right Arrow
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer bg-white hover:bg-white rounded-full p-2 shadow"
    >
      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}
