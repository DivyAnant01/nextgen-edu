import { useState } from "react";
import toast from "react-hot-toast";

export default function CounsellingForm() {
  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      email: "",
      course: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const leads =
      JSON.parse(
        localStorage.getItem(
          "leads"
        )
      ) || [];

    const newLead = {
      id: Date.now(),
      ...formData,
      status: "New Lead",
      createdAt:
        new Date().toLocaleString(),
    };

    localStorage.setItem(
      "leads",
      JSON.stringify([
        newLead,
        ...leads,
      ])
    );

    toast.success(
      "Enquiry Submitted Successfully"
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
    });
  };

  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="glass p-10 rounded-3xl">

          <h2 className="text-4xl font-bold mb-3">
            Free Career Counselling
          </h2>

          <p className="text-gray-400 mb-8">
            Speak with our admission experts
            and find the best university
            for your career goals.
          </p>

          <form
            onSubmit={handleSubmit}
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                required
                className="
                p-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                "
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                required
                className="
                p-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                required
                className="
                p-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                "
              />

              <input
                type="text"
                name="course"
                placeholder="Interested Course"
                value={
                  formData.course
                }
                onChange={
                  handleChange
                }
                required
                className="
                p-4
                rounded-xl
                bg-black/20
                border
                border-white/10
                "
              />

            </div>

            <button
              type="submit"
              className="
              mt-6
              bg-cyan-500
              px-8
              py-4
              rounded-xl
              hover:bg-cyan-600
              transition
              "
            >
              Get Free Counselling
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}