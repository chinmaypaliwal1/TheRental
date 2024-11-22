"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface CardProp {
  title: string | null;
  pay: string | null;
  imgUrl: string | StaticImageData | null;
}

const TimeAndDateSection: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(new Date(event.target.value));
  };

  return (
    <div className="container mx-auto absolute z-10">
      <div className="w-fit bg-white text-black rounded-lg p-6 shadow-lg">
        <button
          onClick={onClose}
          className="text-red-500 mb-4 font-bold"
        >
          Close
        </button>
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
  );
};

const Card: React.FC<CardProp> = ({ title, pay, imgUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <li className="mb-12 m-10 text-center">
        <div className="group relative pb-1 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          {imgUrl && (
            <Image
              className="m-auto z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 mb-4 lg:mb-0"
              src={imgUrl}
              alt={title || "Image"}
              width={200}
              height={200}
            />
          )}

          <div className="mt-8">
            <h3 className="font-medium leading-snug text-slate-200 text-lg mb-2">
              <Link
                href={`/cards/${encodeURIComponent(title || "detail")}`}
                aria-label={title || ""}
                className="inline-flex items-baseline text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              >
                {title}
              </Link>
            </h3>
            {pay && (
              <p className="mt-2 text-sm leading-normal text-slate-300 bold">
                Rate: {pay}
              </p>
            )}
            <button
              onClick={toggleVisibility}
              className="mt-4 bg-green-500 w-full hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      </li>

      {isVisible && <TimeAndDateSection onClose={toggleVisibility} />}
    </>
  );
};

export default Card;
