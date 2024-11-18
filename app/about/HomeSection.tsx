"use client";
import React, { useState } from "react";
import Card from "../Components/pageSection/Card";
import HeaderMain from "./HeaderMain/HeaderMain";
import Footer from "./FooterMain/Footer";
import scotty from "../src/Yamaha_Fascino_(BS6).png";
import BikeRoyal from "../src/Royal_Enfield_Hunter_350.png";
import Banner from "../Components/pageSection/BannerSection";
import bikeYamha from "../src/Yamaha_MT15_V2_BS6.png";

const CardComp = [
  {
    title: "Yamaha Fascino125",
    pay: 20, 
    imgUrl: scotty,
  },
  {
    title: "Yamaha MT15 V2 (BS6)",
    pay: 37, 
    imgUrl: bikeYamha,
  },
  {
    title: "Royal Enfield Hunter 350",
    pay: 57, 
    imgUrl: BikeRoyal,
  },
  {
    title: "Royal Enfield Hunter 350",
    pay: 57, 
    imgUrl: BikeRoyal,
  },
];

const HomeSection = () => {
  const [filter, setFilter] = useState<"Hourly" | "Daily">("Hourly");
  const [duration, setDuration] = useState<number>(1); 

  const getFilteredRate = (hourlyRate: number) => {
    const dailyRate = hourlyRate * 12;
    return filter === "Hourly"
      ? `${hourlyRate}/Hour`
      : `${dailyRate * duration}/Total (${duration} Days)`;
  };

  return (
    <div>
      <HeaderMain />
      <Banner />
      <div className="flex justify-center align-center">
        <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center">Available Vehicles</h2>
        <div className="text-center my-8 text-black ml-10 flex">
          <select
            value={filter === "Hourly" ? "Hourly" : `${duration} Days`}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "Hourly") {
                setFilter("Hourly");
              } else {
                setFilter("Daily");
                setDuration(Number(value.split(" ")[0])); 
              }
            }}
            className="rounded-lg px-4 py-2 bg-white text-black"
          >
            <optgroup label="Hourly">
              <option value="Hourly">Hourly Rate</option>
            </optgroup>
            <optgroup label="Daily">
              <option value="1 Days">1 Day</option>
              <option value="7 Days">7 Days</option>
              <option value="15 Days">15 Days</option>
              <option value="30 Days">30 Days</option>
            </optgroup>
          </select>
        </div>


      </div>
      <div className="flex justify-center">
        <div className="" id="about">
          <section>
            
            <ol className="group/list grid grid-cols-4 items-center">
              {CardComp.map((card) => (
                <Card
                  key={card.title}
                  title={card.title}
                  pay={getFilteredRate(card.pay)} 
                  imgUrl={card.imgUrl}
                />
              ))}
            </ol>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSection;
