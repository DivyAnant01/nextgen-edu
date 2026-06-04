import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
User,
Mail,
Lock,
GraduationCap,
Eye,
EyeOff,
} from "lucide-react";
import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Register() {
const navigate = useNavigate();
const { login } = useAuth();
const { theme } = useTheme();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
});

const [showPassword, setShowPassword] =
useState(false);

const [
showConfirmPassword,
setShowConfirmPassword,
] = useState(false);

const [error, setError] =
useState("");

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]:
e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();

```
if (
  !formData.name ||
  !formData.email ||
  !formData.password ||
  !formData.confirmPassword
) {
  setError(
    "Please fill all fields"
  );
  return;
}

if (
  formData.password !==
  formData.confirmPassword
) {
  setError(
    "Passwords do not match"
  );
  return;
}

setError("");

login({
  id: Date.now(),
  name: formData.name,
  email: formData.email,
});

navigate("/dashboard");
```

};

return ( <section
  className={`
  min-h-screen
  relative
  overflow-hidden
  flex
  items-center
  justify-center
  px-6
  py-20

  ${
    theme === "dark"
      ? "bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white"
      : "bg-gradient-to-br from-cyan-50 via-white to-blue-100 text-slate-900"
  }
  `}
>
{/* Background Blobs */}


  <div
    className="
    absolute
    top-20
    left-20
    w-80
    h-80
    bg-cyan-500/20
    rounded-full
    blur-3xl
    animate-pulse
    "
  />

  <div
    className="
    absolute
    bottom-20
    right-20
    w-80
    h-80
    bg-purple-500/20
    rounded-full
    blur-3xl
    animate-pulse
    "
  />

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
    className={`
relative
z-10
w-full
max-w-md
backdrop-blur-2xl
rounded-[32px]
p-8
duration-500

${
  theme === "dark"
    ? "bg-white/5 border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.15)] hover:shadow-[0_0_80px_rgba(0,255,255,0.25)]"
    : "bg-white/90 border border-slate-200 shadow-2xl"
}
`}
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
        Create Account
      </h1>

      <p
  className={`mt-3 ${
    theme === "dark"
      ? "text-gray-400"
      : "text-slate-600"
  }`}
>
  Join NextGenEdu Today
</p>
    </div>

    {/* Error */}

    {error && (
      <div
       className={`
border
p-4
rounded-2xl
animate-pulse
mb-4

${
  theme === "dark"
    ? "bg-red-500/10 border-red-500/20 text-red-300"
    : "bg-red-50 border-red-200 text-red-600"
}
`}
      >
        {error}
      </div>
    )}

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Name */}

      <div className="relative">
        <User
          size={18}
          className="
          absolute
          left-4
          top-5
          text-gray-400
          "
        />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
         className={`
w-full
pl-12
p-4
rounded-2xl
border
focus:border-cyan-400
focus:ring-4
focus:ring-cyan-500/20
outline-none
duration-300

${
  theme === "dark"
    ? "bg-black/20 border-white/10 text-white"
    : "bg-white border-slate-300 text-slate-900"
}
`}
          
        />
      </div>

      {/* Email */}

      <div className="relative">
        <Mail
          size={18}
          className="
          absolute
          left-4
          top-5
          text-gray-400
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={`
w-full
pl-12
p-4
rounded-2xl
border
placeholder:text-gray-400
focus:border-cyan-400
focus:ring-4
focus:ring-cyan-500/20
outline-none
duration-300

${
  theme === "dark"
    ? "bg-black/20 border-white/10 text-white"
    : "bg-white border-slate-300 text-slate-900"
}
`}
        />
      </div>

      {/* Password */}

      <div className="relative">
        <Lock
          size={18}
          className="
          absolute
          left-4
          top-5
          text-gray-400
          "
        />

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          name="password"
          placeholder="Password"
        value={formData.password}
onChange={handleChange}
         className={`
w-full
pl-12
pr-12
p-4
rounded-2xl
border
placeholder:text-gray-400
focus:border-cyan-400
focus:ring-4
focus:ring-cyan-500/20
outline-none
duration-300

${
  theme === "dark"
    ? "bg-black/20 border-white/10 text-white"
    : "bg-white border-slate-300 text-slate-900"
}
`}
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
          className={`
absolute
right-4
top-5
hover:text-cyan-400

${
  theme === "dark"
    ? "text-gray-400"
    : "text-slate-500"
}
`}
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>

      {/* Confirm Password */}

      <div className="relative">
  <Lock
    size={18}
    className="
    absolute
    left-4
    top-5
    text-gray-400
    "
  />

  <input
    type={
      showConfirmPassword
        ? "text"
        : "password"
    }
    name="confirmPassword"
    placeholder="Confirm Password"
    value={formData.confirmPassword}
    onChange={handleChange}
    className={`
    w-full
    pl-12
    pr-12
    p-4
    rounded-2xl
    border
    placeholder:text-gray-400
    focus:border-cyan-400
    focus:ring-4
    focus:ring-cyan-500/20
    outline-none
    duration-300

    ${
      theme === "dark"
        ? "bg-black/20 border-white/10 text-white"
        : "bg-white border-slate-300 text-slate-900"
    }
    `}
  />

  <button
    type="button"
    onClick={() =>
      setShowConfirmPassword(
        !showConfirmPassword
      )
    }
    className={`
    absolute
    right-4
    top-5
    hover:text-cyan-400

    ${
      theme === "dark"
        ? "text-gray-400"
        : "text-slate-500"
    }
    `}
  >
    {showConfirmPassword ? (
      <EyeOff size={18} />
    ) : (
      <Eye size={18} />
    )}
  </button>
</div>

      {/* Submit Button */}

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
        Create Account
      </button>
    </form>

    {/* Footer */}

    <div
      
  className={`mt-8 text-center ${
    theme === "dark"
      ? "text-gray-400"
      : "text-slate-600"
  }`}

    >
      Already have an account?{" "}
      <Link
        to="/login"
        className="
        text-cyan-400
        font-semibold
        hover:text-cyan-300
        duration-300
        "
      >
        Login
      </Link>
    </div>
  </motion.div>
</section>


);
}
