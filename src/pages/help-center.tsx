import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function HelpCenter() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Help Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and get the support you need to succeed on GigsGig.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I create a task as a Tasker?</h3>
              <p className="text-gray-700">Navigate to the Tasker Form page, fill in your task details including title, description, budget, and requirements. Connect your wallet and submit the form to create your task on the blockchain.</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I apply for tasks as a Worker?</h3>
              <p className="text-gray-700">Browse available tasks in the Worker Feed, click on tasks that interest you, and submit your application with relevant experience and portfolio links. Taskers will review applications and select the best candidates.</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What wallets are supported?</h3>
              <p className="text-gray-700">We currently support Cardano-compatible wallets including Yoroi, Daedalus, and Lace. Make sure your wallet is connected and funded with ADA for transaction fees.</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How are payments processed?</h3>
              <p className="text-gray-700">All payments are processed through smart contracts on the Cardano blockchain. Funds are held in escrow until task completion is confirmed by both parties.</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What if there&apos;s a dispute?</h3>
              <p className="text-gray-700">Our dispute resolution system allows both parties to present their case. Our team reviews the evidence and makes a fair decision. We prioritize communication and fair outcomes for all users.</p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Is my data secure?</h3>
              <p className="text-gray-700">Yes, we take security seriously. All data is encrypted, and we follow industry best practices for data protection. We never share your personal information without your consent.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Getting Started</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-green-600 font-bold mr-3">1.</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Create Your Profile</h3>
                  <p className="text-gray-700 text-sm">Set up your account and connect your wallet to get started.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 font-bold mr-3">2.</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Choose Your Role</h3>
                  <p className="text-gray-700 text-sm">Decide whether you want to post tasks or complete them.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-green-600 font-bold mr-3">3.</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Complete Your First Task</h3>
                  <p className="text-gray-700 text-sm">Post a task or apply for one to experience the platform.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Support</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📧 Email Support</h3>
                <p className="text-gray-700 text-sm">support@gigsgig.com</p>
                <p className="text-gray-600 text-xs">Response time: 24-48 hours</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">💬 Live Chat</h3>
                <p className="text-gray-700 text-sm">Available during business hours</p>
                <p className="text-gray-600 text-xs">Mon-Fri, 9 AM - 6 PM EST</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📚 Documentation</h3>
                <p className="text-gray-700 text-sm">Comprehensive guides and tutorials</p>
                <p className="text-gray-600 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Contact Support
            </button>
            <button className="px-6 py-2 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition">
              Browse Documentation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}