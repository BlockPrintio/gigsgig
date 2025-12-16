import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function CampusCommunities() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Campus Communities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow students from your university. Build your network,
            find study partners, and discover local opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">University of Lagos</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Active Taskers</span>
                <span className="font-semibold text-green-600">247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tasks Completed</span>
                <span className="font-semibold text-green-600">1,543</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Average Rating</span>
                <span className="font-semibold text-green-600">4.8 ⭐</span>
              </div>
            </div>
            <button className="w-full mt-6 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Join Community
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Community Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">📍</span>
                <span className="text-gray-700">Local task matching within your campus</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">👥</span>
                <span className="text-gray-700">Connect with verified students only</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">💬</span>
                <span className="text-gray-700">Campus-specific discussion forums</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">📊</span>
                <span className="text-gray-700">Track local community statistics</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Top Campus Communities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">University of Lagos</h3>
              <p className="text-gray-600 mb-2">247 members</p>
              <div className="text-green-600 font-medium">Most Active</div>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Covenant University</h3>
              <p className="text-gray-600 mb-2">189 members</p>
              <div className="text-blue-600 font-medium">Growing Fast</div>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Obafemi Awolowo University</h3>
              <p className="text-gray-600 mb-2">156 members</p>
              <div className="text-purple-600 font-medium">High Rated</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Don&apos;t see your campus?</h2>
          <p className="text-gray-600 mb-6">Be the first to start a community at your university!</p>
          <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Start Campus Community
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}