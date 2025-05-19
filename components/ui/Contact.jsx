import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const serviceOptions = [
    "Web Development",
    "Mobile App Development",
    "Ads Magagement",
    "Digital Marketing",
    "Autocad & 3D Modeling",
    "Graphics & Video Editing",
    "Others",
  ];

  const budgetRanges = [
    "Less than 5,000",
    "₹5,000 - ₹20,000",
    "₹20,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000+",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.sendForm(
        "service_ux7owk5",
        "template_ktnmynk",
        formRef.current,
        "5VtaEL_HlaJ9pmcNa"
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Have a project idea in mind? Let's get started
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            We'll schedule a call to discuss your idea. After discovery
            sessions, we'll send a proposal, and upon approval, we'll get
            started.
          </p>

          <div className="mb-12">
            <img
              src="/images/Founder.jpg"
              alt="Team Member"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900">
              Prince Kumar
              </h3>
              <p className="text-gray-600">
                Founder & CEO
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                className="mt-1 block w-full border-b-2 border-gray-200 focus:border-[#ff5733] outline-none py-2 text-gray-900"
                placeholder="Jane Cooper"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-lg font-medium text-gray-900"
                >
                  Company name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  className="mt-1 block w-full border-b-2 border-gray-200 focus:border-[#ff5733] outline-none py-2 text-gray-900"
                  placeholder="Ex. Tesla Inc"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-900"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full border-b-2 border-gray-200 focus:border-[#ff5733] outline-none py-2 text-gray-900"
                  placeholder="You@Example.Com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="service"
                  className="block text-lg font-medium text-gray-900"
                >
                  Service required*
                </label>
                <select
                  name="service"
                  id="service"
                  required
                  className="mt-1 block w-full border-b-2 border-gray-200 focus:border-[#ff5733] outline-none py-2 text-gray-900"
                >
                  <option value="">Select Your Service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-lg font-medium text-gray-900"
                >
                  Project budget*
                </label>
                <select
                  name="budget"
                  id="budget"
                  required
                  className="mt-1 block w-full border-b-2 border-gray-200 focus:border-[#ff5733] outline-none py-2 text-gray-900"
                >
                  <option value="">Select Your Range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="details"
                className="block text-lg font-medium text-gray-900"
              >
                Project details*
              </label>
              <textarea
                name="details"
                id="details"
                required
                rows={4}
                className="mt-1 block w-full border-b-2 border-gray-200 focus:border-[#ff5733] outline-none py-2 text-gray-900"
                placeholder="Tell us more about your idea"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 px-8 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {loading ? "Sending..." : "Send inquiry"}
            </button>

            {success && (
              <p className="text-green-600 text-center">
                Message sent successfully!
              </p>
            )}
            {error && <p className="text-red-600 text-center">{error}</p>}
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Not interested in submitting the form?{" "}
              <Link
                href="https://cal.com/prian-digitech/30min"
                className="text-green-500 hover:text-green-600 font-medium flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Book a Meeting
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
