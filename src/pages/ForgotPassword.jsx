import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Password reset link sent to your email."
    );
  };

  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      "
    >
      <div
        className="
        glass
        w-full
        max-w-md
        p-8
        rounded-3xl
        "
      >
        <h1
          className="
          text-4xl
          font-bold
          mb-4
          "
        >
          Forgot Password
        </h1>

        <p className="text-gray-400 mb-6">
          Enter your email address and
          we'll send a reset link.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            border
            border-white/10
            "
          />

          <button
            type="submit"
            className="
            w-full
            bg-cyan-500
            py-4
            rounded-xl
            "
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-cyan-400"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </section>
  );
}