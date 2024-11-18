"use client";
import React from "react";
import HeaderMain from "../about/HeaderMain/HeaderMain";

const AboutUs: React.FC = () => {
  return (
    <>
  <HeaderMain /> 
  <div id="contact" className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-slate-900 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
       
      </header>  
    <section className="py-12 bg-gray-100">

      
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto">
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to our platform! We specialize in providing **bikes, 
            scooters**, and **cars** on rent for our customers, ensuring they 
            have the right vehicle for their needs. Whether you&apos;re planning a 
            trip, commuting, or simply exploring, weve got you covered.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to deliver **convenient and affordable** rental 
            services with a focus on **customer satisfaction**. We strive to 
            make transportation easy and accessible for everyone. Join us and 
            experience hassle-free rentals tailored to your preferences!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Wide Range of Vehicles
            </h3>
            <p className="text-gray-600">
              From scooters to premium cars, we offer a variety of vehicles to
              meet every need.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Flexible Rentals
            </h3>
            <p className="text-gray-600">
              Choose from hourly, daily, or long-term rentals at competitive 
              rates.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer-Centric
            </h3>
            <p className="text-gray-600">
              Your satisfaction is our priority, with 24/7 support and easy 
              booking options.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default AboutUs;
