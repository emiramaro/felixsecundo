import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { Member } from '@/types';

// Import CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AlumniCarouselProps {
  alumni: Member[];
}

export const AlumniCarousel: React.FC<AlumniCarouselProps> = ({ alumni }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {alumni.map((member) => (
        <div key={member.id} className="px-2">
          <Link 
            href={`/members/${member.id}`}
            className="block transition-transform hover:scale-105"
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image 
                  src={member.image || "/placeholder.svg"} 
                  alt={member.name} 
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
              <p className="text-gray-500 italic text-center mt-2">Alumni</p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

