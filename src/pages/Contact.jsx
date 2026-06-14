import { useState } from "react";
import toast from "react-hot-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import { submitLead } from "../services/leadService";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation (only numbers)
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "");

      if (phoneValue.length > 10) return;

      setFormData({
        ...formData,
        [name]: phoneValue,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      toast.error(
        "Please fill all required fields"
      );
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (formData.phone.length !== 10) {
      toast.error(
        "Phone number must be 10 digits"
      );
      return;
    }

    try {
      setLoading(true);

      const response = await submitLead({
        ...formData,
        source: "Contact Page",
      });

      if (response?.success) {
        toast.success(
          "Enquiry Submitted Successfully"
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        toast.error("Submission failed");
      }
    } catch (error) {
      console.error("Lead Error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Get expert admission guidance
            from our counsellors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}

          <div className="bg-white dark:bg-slate-900 shadow-lg border border-gray-200 dark:border-slate-700 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Phone className="text-cyan-500" />

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-cyan-500" />

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400">
                    info@nextgenedu.co
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-cyan-500" />

                <div>
                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400">
                    Noida, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="text-cyan-500" />

                <div>
                  <h3 className="font-semibold">
                    Working Hours
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400">
                    Mon - Sat | 9 AM - 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="bg-white dark:bg-slate-900 shadow-lg border border-gray-200 dark:border-slate-700 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8">
              Request A Callback
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="tel"
                name="phone"
                required
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Interested Course"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}