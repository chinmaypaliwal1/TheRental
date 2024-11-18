import React from "react";
import HeaderMain from "../about/HeaderMain/HeaderMain";

const ContactUs = () => {
  return (
    <>
    <HeaderMain />
    <div id="contact" className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-slate-900 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-slate-300 mt-2">
          We’d love to hear from you! Reach out with your questions or feedback.
        </p>
      </header>

      <section className="py-16 px-4 lg:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-sm leading-relaxed mb-6">
              Feel free to reach out to us using the form or via the following
              contact details:
            </p>
            <ul className="text-sm space-y-4">
              <li>
                <strong>Email:</strong> chinmaypaliwal96@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +91 63-6785-7396
              </li>
              <li>
                <strong>Address:</strong> udaipur Rajasthan
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Ask a Question</h2>
            <form className="bg-white shadow-lg rounded-lg p-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Question */}
              <div className="mb-4">
                <label
                  htmlFor="question"
                  className="block text-sm font-medium text-slate-700"
                >
                  Your Question
                </label>
                <textarea
                  id="question"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  placeholder="Type your question here"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  Submit Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContactUs;
