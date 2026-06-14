import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CounsellorLogin() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const counsellors = [
      {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@nextgen.com",
        password: "123456",
      },

      {
        id: 2,
        name: "Priya Verma",
        email: "priya@nextgen.com",
        password: "123456",
      },

      {
        id: 3,
        name: "Ankit Singh",
        email: "ankit@nextgen.com",
        password: "123456",
      },
    ];

    const counsellor =
      counsellors.find(
        (item) =>
          item.email === email &&
          item.password === password
      );

    if (!counsellor) {
      alert(
        "Invalid Email or Password"
      );
      return;
    }

    localStorage.setItem(
      "counsellor",
      JSON.stringify(counsellor)
    );

    navigate("/counsellor");
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      "
    >
      <div
        className="
        glass
        p-8
        rounded-3xl
        w-full
        max-w-md
        "
      >
        <h1
          className="
          text-4xl
          font-bold
          mb-6
          text-center
          "
        >
          Counsellor Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
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
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-black/20
            "
          />

          <button
            type="submit"
            className="
            w-full
            bg-cyan-500
            py-4
            rounded-xl
            font-semibold
            hover:bg-cyan-600
            transition
            "
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm opacity-70">
          Demo Login:
          <br />
          rahul@nextgen.com
          <br />
          123456
        </div>
      </div>
    </div>
  );
}