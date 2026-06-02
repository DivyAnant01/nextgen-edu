export default function ProfileCompletion() {
  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6">
        Profile Completion
      </h2>

      <div className="w-full bg-white/10 h-4 rounded-full">

        <div
          className="
          bg-cyan-500
          h-4
          rounded-full
          "
          style={{
            width: "75%",
          }}
        />

      </div>

      <p className="mt-4 text-gray-400">
        Complete your profile to improve admission chances.
      </p>
    </div>
  );
}