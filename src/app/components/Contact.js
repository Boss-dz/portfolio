
"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch(
        "https://wassim-portfolio.onrender.com/api/messages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
        }
      );

      const result = await response.json(); // Get API response

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ first_name: "", last_name: "", email: "", message: "" });
      } else {
        setSuccess(result.error?.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess("Error occurred, please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="relative p-8 w-fit ml-6 text-white">
      {/* Section Title */}
      <div className="mb-8 w-fit">
        <Fade direction="left" triggerOnce={true}>
          <h1 className="uppercase relative text-3xl font-bold pb-2 max-sm:text-2xl lg:text-5xl">
            I am ready to work with you
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-amber-500 via-orange-400 via-red-400 to-rose-500"></span>
          </h1>
        </Fade>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-600 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-600 focus:outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-amber-700 hover:bg-amber-900 rounded-lg text-white font-semibold cursor-pointer transition-all duration-600 ease-in-out"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Social Media Icons */}
      <div className="absolute bottom-4 right-4 flex gap-4 text-2xl">
        <Fade direction="down" cascade={true} damping={0.3} triggerOnce={true}>
          <a
            href="https://wa.me/+213551704031"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-500 hover:text-green-400 transition duration-300 cursor-pointer" />
          </a>
          <a
            href="https://instagram.com/wassim_sf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 hover:text-pink-400 transition duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-wassim-sifi-6155b5249/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-600 hover:text-blue-500 transition duration-300 cursor-pointer" />
          </a>
          <a href="mailto:sifi.mohamed.wassim@gmail.com">
            <FaEnvelope className="text-red-500 hover:text-red-400 transition duration-300 cursor-pointer" />
          </a>
        </Fade>
      </div>
    </div>
  );
}
