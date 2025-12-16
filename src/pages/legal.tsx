import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Legal() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Legal Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Important legal documents and policies that govern the use of GigsGig platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Terms of Service</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h3>
                <p>By accessing and using GigsGig, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">2. User Responsibilities</h3>
                <p>Users must provide accurate information, respect platform guidelines, and maintain professional conduct in all interactions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">3. Service Availability</h3>
                <p>We strive to provide continuous service but cannot guarantee uninterrupted access. We reserve the right to modify or discontinue services.</p>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Read Full Terms
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Information We Collect</h3>
                <p>We collect information you provide directly, usage data, and information from third-party services to improve our platform.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How We Use Information</h3>
                <p>Your information is used to provide services, communicate with you, improve our platform, and ensure security.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Data Protection</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Read Full Privacy Policy
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cookie Policy</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What Are Cookies</h3>
                <p>Cookies are small text files stored on your device that help us provide a better user experience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How We Use Cookies</h3>
                <p>We use cookies for authentication, analytics, and to remember your preferences.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Managing Cookies</h3>
                <p>You can control cookie settings through your browser preferences.</p>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              View Cookie Settings
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">DMCA Policy</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Copyright Protection</h3>
                <p>We respect intellectual property rights and respond to valid DMCA takedown notices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Filing a DMCA Notice</h3>
                <p>If you believe your copyright has been infringed, please contact us with the required information.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Counter-Notifications</h3>
                <p>Users may file counter-notifications if they believe content was removed in error.</p>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              File DMCA Notice
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Legal Team</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our legal policies or need to report a legal concern?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Email Legal Team
            </button>
            <button className="px-6 py-2 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition">
              Report Issue
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}