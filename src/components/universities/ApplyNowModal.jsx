import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import { submitLead } from "../../services/leadService";

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

    const [loading, setLoading] =
  useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async () => {
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

  if (
  !/\S+@\S+\.\S+/.test(
    formData.email
  )
) {
  toast.error(
    "Enter valid email"
  );
  return;
}

  if (
    !/^\d{10}$/.test(
      formData.phone
    )
  ) {
    toast.error(
      "Enter valid 10 digit phone number"
    );
    return;
  }

  try {
    setLoading(true);

    const leadData = {
      ...formData,
      university:
        university?.name || "",
      appliedAt:
        new Date().toISOString(),
    };

    const response =
      await submitLead(
        leadData
      );

    if (
  response &&
  response.success
) { 
      toast.success(
        "Application Submitted Successfully"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
      });

      setTimeout(() => {
        onClose();
      }, 1000);
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
  type="tel"
  name="phone"
  maxLength={10}
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) => {
  const value = e.target.value.replace(
    /\D/g,
    ""
  );

  setFormData({
    ...formData,
    phone: value,
  });
}}
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
  disabled={loading}
  className="
  w-full
  bg-cyan-500
  py-4
  rounded-xl
  hover:bg-cyan-600
  transition
  disabled:opacity-60
  "
>
  {loading
    ? "Submitting..."
    : "Submit Application"}
</button>

      </div>
    </Modal>
  );
}