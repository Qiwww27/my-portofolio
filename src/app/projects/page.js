"use client";

import React from "react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Project",
      description:
        "A full-stack todo application using React, Node.js, and MongoDB.",
      link: "#",
    },
    {
      title: "Project",
      description:
        "A mock e-commerce platform with shopping cart functionality.",
      link: "#",
    },
    {
      title: "Project",
      description:
        "A mock e-commerce platform with shopping cart functionality..",
      link: "#",
    },
    {
      title: "Project",
      description:
        "A mock e-commerce platform with shopping cart functionality..",
      link: "#",
    },
    {
      title: "Project",
      description:
        "A mock e-commerce platform with shopping cart functionality..",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline">
                View project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
