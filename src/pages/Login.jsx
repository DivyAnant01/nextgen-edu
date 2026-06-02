import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    login({
      id: Date.now(),
      name: "Student",
      email,
    });

    navigate("/dashboard");
  };

  return (
    <section
      className="
      min-h-screen
      relative
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      py-20
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-cyan-950
      "
    >
      {/* Animated Background */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
        relative
        z-10
        w-full
        max-w-md
        backdrop-blur-2xl
        bg-white/5
        border
        border-white/10
        rounded-[32px]
        p-8
        shadow-[0_0_60px_rgba(0,255,255,0.15)]
        hover:shadow-[0_0_80px_rgba(0,255,255,0.25)]
        duration-500
        "
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="
            w-20
            h-20
            mx-auto
            rounded-3xl
            bg-cyan-500/20
            border
            border-cyan-400/20
            flex
            items-center
            justify-center
            animate-bounce
            "
          >
            <GraduationCap
              size={40}
              className="text-cyan-400"
            />
          </div>

          <h1
            className="
            text-5xl
            font-black
            mt-5
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
            "
          >
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-3">
            Login to access your student dashboard
          </p>
        </div>

        {/* Error */}
        {error && (
          <div
            className="
            bg-red-500/10
            border
            border-red-500/20
            text-red-300
            p-4
            rounded-2xl
            animate-pulse
            mb-4
            "
          >
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-2xl
            bg-black/20
            border
            border-white/10
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-500/20
            outline-none
            duration-300
            "
          />

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
              w-full
              p-4
              rounded-2xl
              bg-black/20
              border
              border-white/10
              focus:border-cyan-400
              focus:ring-4
              focus:ring-cyan-500/20
              outline-none
              duration-300
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
              absolute
              right-4
              top-4
              text-gray-400
              hover:text-cyan-400
              duration-300
              "
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="
              text-cyan-400
              text-sm
              hover:text-cyan-300
              duration-300
              "
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-2xl
            font-bold
            text-lg
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:scale-105
            hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]
            active:scale-95
            duration-300
            "
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div
          className="
          mt-8
          text-center
          text-gray-400
          "
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            className="
            text-cyan-400
            font-semibold
            hover:text-cyan-300
            duration-300
            "
          >
            Register
          </Link>
        </div>
      </motion.div>
    </section>
  );
}