import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xjkowgne", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="mb-8 text-center text-3xl font-bold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded border bg-white p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded border bg-white p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded border bg-white p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
            aria-required="true"
          ></textarea>
        </div>
        <button type="submit" className="rounded bg-indigo-600 p-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-center" role="status">{status}</p>}
      <p className="mt-4 text-center">
        Or reach out via{" "}
        <a href="mailto:wachirakungu@gmail.com" className="text-blue-500">
          email
        </a>{" "}
        or{" "}
        <a href="https://www.linkedin.com/in/vincentwachira/" className="text-blue-500">
          LinkedIn
        </a>.
      </p>
    </motion.div>
  );
}