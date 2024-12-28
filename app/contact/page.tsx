"use client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-lg mx-auto bg-white p-6 rounded shadow"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-bold">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-2"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
