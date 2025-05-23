"use client";

import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi there! I'm a web developer who started my journey into tech through
          an intensive Full Stack Developer bootcamp at Hari Senin. This
          experience has equipped me with a solid foundation in both frontend
          and backend development. Throughout the bootcamp, I’ve worked with
          technologies like HTML, CSS, JavaScript, React, Node.js, and databases
          such as MongoDB and MySQL. I've also learned how to collaborate
          effectively using Git and GitHub, and gained hands-on experience in
          writing clean, maintainable code. Beyond the technical skills, this
          bootcamp taught me the importance of problem-solving, teamwork, and
          time management—all of which are crucial in real-world software
          development. I believe that learning never stops, and being part of
          the Hari Senin community has been a meaningful step in my journey to
          becoming a well-rounded Full Stack Developer. Kalau kamu ingin versi
          yang lebih profesional, santai, atau menonjolkan proyek tertentu, aku
          bisa bantu ubah juga. Mau dicoba?
        </p>

        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            🚀 I specialize in technologies like{" "}
            <span className="text-white font-medium">
              React, Next.js, Tailwind CSS
            </span>
            , and backend tools like{" "}
            <span className="text-white font-medium">Node.js & Express</span>.
          </p>
          <p>
            📚 I'm constantly learning and improving my skills — currently
            diving deeper into{" "}
            <span className="text-white font-medium">
              TypeScript and system design
            </span>
            .
          </p>
          <p>
            🎯 My goal is to create impactful products that solve real-world
            problems.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
