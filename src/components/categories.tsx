import React from "react";
import Link from "next/link";

const categories = [
  { name: "Assembly", icon: "🛠️" },
  { name: "Cleaning", icon: "🧼" },
  { name: "Moving", icon: "📦" },
  { name: "Tutoring", icon: "📚" },
  { name: "Grocery Runs", icon: "🛒" },
  { name: "Tech Help", icon: "💻" }
];

export default function Categories() {
  return (
    <section className="py-14 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-20">
        Explore Popular Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/tasker-form?category=${encodeURIComponent(category.name)}`}
            className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-green-500 hover:scale-105 active:scale-95 transition transform duration-300 ease-in-out h-32"
          >
            <span className="text-3xl mb-3">{category.icon}</span>
            <span className="text-sm font-medium text-gray-700 hover:text-green-600 transition">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
