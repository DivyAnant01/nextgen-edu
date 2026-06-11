import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";

export default function ApplyNowModal({
  isOpen,
  onClose,
  university,
}) {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      course: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.course
    ) {
      toast.error(
        "Please fill all fields"
      );
      return;
    }

    console.log({
      ...formData,
      university:
        university?.name || "",
      appliedAt:
        new Date().toLocaleDateString(),
    });

    toast.success(
      "Application Submitted Successfully"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2 className="text-3xl font-bold mb-6">
        Apply Now
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
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
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-xl
          bg-black/20
          "
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
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
          placeholder="Course Name"
          value={formData.course}
          onChange={handleChange}
          className="
          w-full
          p-4
          rounded-xl
          bg-black/20
          "
        />

        <input
          type="text"
          value={
            university?.name || ""
          }
          readOnly
          className="
          w-full
          p-4
          rounded-xl
          bg-black/10
          opacity-70
          "
        />

        <button
          onClick={handleSubmit}
          className="
          w-full
          bg-cyan-500
          py-4
          rounded-xl
          hover:bg-cyan-600
          transition
          "
        >
          Submit Application
        </button>

      </div>
    </Modal>
  );
}