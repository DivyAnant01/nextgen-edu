import { useEffect, useState } from "react";

export default function ProfileCompletion() {
  const [percentage, setPercentage] =
    useState(0);

  const calculateProfile = () => {
    const profile =
      JSON.parse(
        localStorage.getItem("profile")
      ) || {};

    let completed = 0;

    if (profile.name?.trim()) completed++;
    if (profile.email?.trim()) completed++;
    if (profile.phone?.trim()) completed++;
    if (profile.city?.trim()) completed++;
    if (profile.image?.trim()) completed++;

    setPercentage(
      Math.round(
        (completed / 5) * 100
      )
    );
  };

  useEffect(() => {
    calculateProfile();

    const interval =
      setInterval(
        calculateProfile,
        1000
      );

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6">
        Profile Completion
      </h2>

      <div className="w-full bg-white/10 h-4 rounded-full overflow-hidden">
        <div
          className="
          bg-cyan-500
          h-4
          rounded-full
          transition-all
          duration-500
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-4 text-gray-400">
        {percentage}% Profile Completed
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Complete your profile to improve
        admission chances.
      </p>
    </div>
  );
}