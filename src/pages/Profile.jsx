import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  const [profile, setProfile] =
    useState({
      name: "",
      email: "",
      phone: "",
      city: "",
      image: "",
    });

  useEffect(() => {
    const saved =
      localStorage.getItem("profile");

    if (saved) {
      setProfile(JSON.parse(saved));
    } else {
      setProfile({
        name: user?.name || "",
        email: user?.email || "",
        phone: "",
        city: "",
        image: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    toast.success(
      "Profile Updated Successfully"
    );
  };

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        <div className="glass p-8 rounded-3xl">

          <h1 className="text-5xl font-bold mb-8">
            My Profile
          </h1>

          <div className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={profile.name}
              onChange={handleChange}
              className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              "
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={profile.phone}
              onChange={handleChange}
              className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              "
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={profile.city}
              onChange={handleChange}
              className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              "
            />

            <input
              type="text"
              name="image"
              placeholder="Profile Image URL"
              value={profile.image}
              onChange={handleChange}
              className="
              w-full
              p-4
              rounded-xl
              bg-white/10
              "
            />

            {profile.image && (
              <img
                src={profile.image}
                alt="Profile"
                className="
                w-24
                h-24
                rounded-full
                object-cover
                "
              />
            )}

            <button
              onClick={saveProfile}
              className="
              bg-cyan-500
              hover:bg-cyan-600
              px-8
              py-3
              rounded-xl
              transition
              "
            >
              Save Profile
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}