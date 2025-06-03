'use client';
import Image from 'next/image';
import img from '../../../public/img.jpg';
import img2 from '../../../public/img2.jpg';
import { useEffect, useState } from 'react';

function Banner() {
  const [current, setCurrent] = useState(1);
  const items = [1, 2, 3, 4];
  const images = [img, img2, img, img2];

  const clickPrevious = () => {
    setCurrent((prev) => (prev == 1 ? items.length : prev - 1));
  };
  const clickNext = () => {
    setCurrent((prev) => (prev == 4 ? 1 : prev + 1));
  };
  const handleIndicatorClick = (item) => {
    setCurrent(item);
  };
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrent((prev) => (prev == items.length ? 1 : prev + 1));
  //     }, 3000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className=" duration-700 ease-in-out" data-carousel-item>
          <Image
            src={images[current - 1]}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="image"
          />
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {items.map((item) => (
          <button
            onClick={() => handleIndicatorClick(item)}
            key={item}
            type="button"
            className={`w-3 h-3 cursor-pointer rounded-full ${
              item == current ? 'bg-white dark:bg-gray-800' : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
            }`}
            aria-current={`${item == current ? 'true' : 'false'}`}
            aria-label={`Slide ${current}`}
          ></button>
        ))}
      </div>

      <button
        onClick={clickPrevious}
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={clickNext}
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Banner;
