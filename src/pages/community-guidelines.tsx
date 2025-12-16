import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-white">
      <Header />
      <main className="flex-grow pt-24 px-4 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Community Guidelines
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our guidelines for creating a positive, respectful, and productive community on GigsGig.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            GigsGig is committed to fostering a supportive community where students can safely connect,
            collaborate, and grow together. We believe in creating opportunities for learning, professional
            development, and meaningful connections within the academic environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">✅ Do&apos;s</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Be respectful and professional in all communications</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Provide accurate and honest information in your profiles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Complete tasks to the best of your ability and meet deadlines</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Communicate clearly and promptly with other users</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Give constructive feedback and maintain positive relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Report violations of these guidelines to our support team</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">❌ Don&apos;ts</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Post spam, irrelevant content, or misleading information</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Harass, discriminate, or disrespect other users</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Share inappropriate, offensive, or illegal content</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Attempt to circumvent platform fees or payment systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Create fake accounts or impersonate others</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Violate intellectual property rights or share copyrighted material</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Task Posting Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">For Taskers</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Clearly describe task requirements and expectations</li>
                <li>• Set realistic budgets and deadlines</li>
                <li>• Be available for questions and clarifications</li>
                <li>• Evaluate applications fairly and professionally</li>
                <li>• Pay promptly upon satisfactory task completion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">For Workers</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Submit complete and accurate applications</li>
                <li>• Demonstrate relevant skills and experience</li>
                <li>• Ask questions before accepting tasks</li>
                <li>• Meet agreed-upon deadlines and quality standards</li>
                <li>• Communicate progress and any challenges</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Content Standards</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Acceptable Content</h3>
              <p>Task descriptions, portfolios, profiles, and communications related to legitimate student services and academic projects.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Prohibited Content</h3>
              <p>Hate speech, discriminatory content, illegal activities, explicit material, spam, or content that violates intellectual property rights.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Academic Integrity</h3>
              <p>Users must not facilitate academic dishonesty. All work should be original and properly attributed when required by academic standards.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enforcement</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Reporting Violations</h3>
              <p>If you encounter behavior that violates these guidelines, please report it immediately using the &quot;Report&quot; button or by contacting our support team.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Consequences</h3>
              <p>Violations may result in warnings, temporary suspension, permanent bans, or legal action depending on the severity and frequency of the offense.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Appeals</h3>
              <p>Users may appeal moderation decisions by contacting our support team with relevant evidence and explanation.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Help Us Maintain a Great Community</h2>
          <p className="text-gray-600 mb-6">
            These guidelines help ensure GigsGig remains a safe, productive, and enjoyable platform for all students.
            Your cooperation is essential to our community&apos;s success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Report Violation
            </button>
            <button className="px-6 py-2 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition">
              Contact Support
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}