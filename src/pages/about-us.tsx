import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About GigsGig
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re revolutionizing how students help each other on campus. Our platform connects
            skilled students with those who need assistance, creating a community of mutual support
            and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To empower students by creating opportunities for skill-sharing and income generation
              within campus communities. We believe that every student has unique talents that can
              benefit others, and we&apos;re here to facilitate those connections.
            </p>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-gray-700">
              A world where students can easily access help for their needs while developing their
              skills and earning income. We envision campus communities where collaboration and
              mutual support are the norm.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🎓 Student-Focused</h3>
              <p className="text-gray-600">Built by students, for students, understanding the unique challenges of campus life.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🔒 Secure & Trusted</h3>
              <p className="text-gray-600">Blockchain-powered payments ensure secure, transparent transactions between students.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🌍 Community-Driven</h3>
              <p className="text-gray-600">Local campus communities foster trust and make it easy to find reliable help nearby.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-700">Tasks Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
              <div className="text-gray-700">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700">Campus Communities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.8⭐</div>
              <div className="text-gray-700">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you need help with a task or want to earn by sharing your skills,
            GigsGig is the platform for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Become a Tasker
            </button>
            <button className="px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Find Tasks
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}