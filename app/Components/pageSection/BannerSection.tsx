"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import BannerBg from "../../src/bannerBackground.webp";

const Banner: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(new Date(event.target.value));
  };

  return (
    <section className="relative flex flex-col items-center justify-between text-white py-56 px-6">
      <div className="absolute inset-0 -z-10">
        <Image 
          src={BannerBg} 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          priority 
        />
        <div className="absolute inset-0 opacity-50"></div> 
      </div>

      <div className="container mx-auto relative z-10">
        <div className="w-fit	bg-white text-black rounded-lg p-6 shadow-lg">
          <span className="block text-sm font-medium mb-1">Pickup Date:</span>
          <div className="mb-4 flex gap-4">
            <div>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2"
                onChange={handleDateChange}
              />
            </div>
            <div>
              <input
                type="time"
                className="w-full border rounded-lg px-3 py-2"
                onChange={handleDateChange}
              />
            </div>
          </div>

          <span className="block text-sm font-medium mb-1">Drop Date:</span>
          <div className="mb-4 flex gap-4">
            <div>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2"
                onChange={handleDateChange}
              />
            </div>
            <div>
              <input
                type="time"
                className="w-full border rounded-lg px-3 py-2"
                onChange={handleDateChange}
              />
            </div>
          </div>

          <p className="text-sm">Current Selection: {currentDate.toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
