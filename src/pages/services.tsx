import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the wide range of services available on the GigsGig platform.
            From quick fixes to major projects, find help for any task.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Home & Living</h3>
            <p className="text-gray-600 mb-4">Cleaning, furniture assembly, home repairs, and maintenance tasks.</p>
            <div className="text-sm text-green-600 font-medium">Starting at ₳200</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech & Digital</h3>
            <p className="text-gray-600 mb-4">Device setup, troubleshooting, tutoring, and digital assistance.</p>
            <div className="text-sm text-green-600 font-medium">Starting at ₳150</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Support</h3>
            <p className="text-gray-600 mb-4">Tutoring, note-taking, research assistance, and study help.</p>
            <div className="text-sm text-green-600 font-medium">Starting at ₳100</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Moving & Delivery</h3>
            <p className="text-gray-600 mb-4">Moving assistance, package delivery, and transportation services.</p>
            <div className="text-sm text-green-600 font-medium">Starting at ₳300</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Creative Services</h3>
            <p className="text-gray-600 mb-4">Graphic design, content creation, and creative projects.</p>
            <div className="text-sm text-green-600 font-medium">Starting at ₳250</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Errands & Shopping</h3>
            <p className="text-gray-600 mb-4">Grocery shopping, pickup services, and general errands.</p>
            <div className="text-sm text-green-600 font-medium">Starting at ₳50</div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need a Custom Service?</h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Post a custom task and let our community of skilled students help you.
          </p>
          <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Post Custom Task
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}