import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us build the future of student-to-student services. We&apos;re looking for
            passionate individuals who want to make a difference in education and entrepreneurship.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Work at GigsGig?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast-Paced Growth</h3>
              <p className="text-gray-600">Join a rapidly growing startup in the edtech and gig economy space.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Innovative Work</h3>
              <p className="text-gray-600">Work with cutting-edge blockchain technology and modern web development.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-gray-800 mb-2">Student Community</h3>
              <p className="text-gray-600">Be part of a team that understands and supports student needs.</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Frontend Developer</h3>
                  <p className="text-gray-600">React, Next.js, TypeScript</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Full-time</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Build beautiful, responsive user interfaces for our student platform. Experience with modern React patterns required.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Blockchain Developer</h3>
                  <p className="text-gray-600">Cardano, Plutus, Aiken</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Full-time</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Develop smart contracts and integrate blockchain functionality. Cardano ecosystem experience preferred.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Community Manager</h3>
                  <p className="text-gray-600">Student Relations, Growth</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Part-time</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Manage campus communities and help grow our student network. Perfect for current students.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re always looking for talented individuals. Send us your resume and tell us how you can contribute to our mission.
          </p>
          <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Send Resume
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}