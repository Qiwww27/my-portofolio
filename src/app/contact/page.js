"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Hapus tipe pada parameter event
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 flex justify-center items-center">
      <section className="w-full max-w-lg bg-gray-800 rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

        {submitted && (
          <p className="mb-4 p-3 bg-green-600 rounded text-center">
            Thank you for reaching out! I'll get back to you soon.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
