import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-slate-700 pb-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">
              About Us
            </h4>
            <p className="text-sm leading-relaxed">
             hello rental we are here 
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">
              Quick Links
            </h4>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-300 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-300 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-300 transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-300 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">
              Contact
            </h4>
            <ul>
              <li className="text-sm">Email: chinmaypaliwal96@egmail.com</li>
              <li className="text-sm">Phone: +91 6367-8573-96</li>
              <li className="text-sm">Address: Udaipur Rajasthan</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TheRental. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-teal-300 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-teal-300 transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
