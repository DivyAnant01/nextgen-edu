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
  const [loading, setLoading] =
  useState(false);

const [formData, setFormData] =
  useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]:
      e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.phone
  ) {
    toast.error(
      "Please fill required fields"
    );
    return;
  }

  if (
    !/^\d{10}$/.test(
      formData.phone
    )
  ) {
    toast.error(
      "Enter valid phone number"
    );
    return;
  }

  try {
    setLoading(true);

    const response =
      await submitLead({
        ...formData,
        source:
          "Contact Page",
      });

    if (response.success) {
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
    }
  } catch (error) {
    toast.error(
      "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-400 mt-4">
            Get expert admission guidance
            from our counsellors.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="glass p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Phone />

                <div>

                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91 XXXXX XXXXX
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    info@nextgenedu.co
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <MapPin />

                <div>

                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p className="text-gray-400">
                    Noida, Uttar Pradesh
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock />

                <div>

                  <h3 className="font-semibold">
                    Working Hours
                  </h3>

                  <p className="text-gray-400">
                    Mon - Sat | 9 AM - 7 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="glass p-8 rounded-3xl">

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
  value={formData.name}
  onChange={handleChange}
  placeholder="Full Name"
  className="
  w-full
  p-4
  rounded-xl
  bg-black/20
  "
/>

              <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="
  w-full
  p-4
  rounded-xl
  bg-black/20
  "
/>

              <input
  type="tel"
  name="phone"
  maxLength={10}
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  className="
  w-full
  p-4
  rounded-xl
  bg-black/20
  "
/>

             <input
  type="text"
  name="course"
  value={formData.course}
  onChange={handleChange}
  placeholder="Interested Course"
  className="
  w-full
  p-4
  rounded-xl
  bg-black/20
  "
/>

              <textarea
  rows="5"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Message"
  className="
  w-full
  p-4
  rounded-xl
  bg-black/20
  "
/>

              <button
  type="submit"
  disabled={loading}
  className="
  w-full
  bg-cyan-500
  py-4
  rounded-xl
  font-semibold
  disabled:opacity-60
  "
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