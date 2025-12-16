import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function BecomeATasker() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Become a Tasker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of skilled students and start earning by completing tasks on campus.
            Turn your skills into income while helping fellow students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Become a Tasker?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Flexible scheduling that fits your student life
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Earn competitive rates for your skills
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Build your reputation and portfolio
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Connect with students from your campus
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Task Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🛠️</div>
                <div className="font-medium text-gray-800">Assembly</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🧼</div>
                <div className="font-medium text-gray-800">Cleaning</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">📦</div>
                <div className="font-medium text-gray-800">Moving</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">💻</div>
                <div className="font-medium text-gray-800">Tech Help</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Sign Up as Tasker
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}