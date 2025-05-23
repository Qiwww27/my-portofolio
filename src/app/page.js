"use client";

import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Hi, I'm Rizky 👋</h1>
        <p className="text-lg text-gray-300 mb-8">
          I'm a Full Stack Developer with a passion for building beautiful and
          functional web applications.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      <section id="projects" className="mt-16">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-white mb-2">Project One</h3>
            <p className="text-gray-300 mb-2">
              A description of what this project does and the technologies used.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              View project →
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-white mb-2">Project Two</h3>
            <p className="text-gray-300 mb-2">
              Another project that demonstrates my skills and creativity.
            </p>
            <a href="#" className="text-blue-400 hover:underline">
              View project →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
