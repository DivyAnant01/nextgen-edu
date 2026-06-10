import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      mt-20
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        "
      >
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2
              className="
              text-2xl
              font-bold
              gradient-text
              "
            >
              NextGenEdu
            </h2>

            <p
              className="
              text-gray-400
              mt-4
              leading-7
              "
            >
              Helping students choose
              the right university,
              course and career path
              through expert admission
              guidance.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About Us
              </Link>

              <Link to="/contact">
                Contact
              </Link>

              <Link to="/admission">
                Admission
              </Link>

            </div>

          </div>

          {/* Universities */}

          <div>

            <h3 className="font-bold mb-4">
              Universities
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/universities">
                Amity University
              </Link>

              <Link to="/universities">
                LPU
              </Link>

              <Link to="/universities">
                Manipal University
              </Link>

              <Link to="/universities">
                Chandigarh University
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <div className="space-y-3">

              <p>
                📍 Noida, Uttar Pradesh
              </p>

              <p>
                📞 +91 XXXXX XXXXX
              </p>

              <p>
                ✉ info@nextgenedu.co
              </p>

            </div>

          </div>

        </div>

        <div
          className="
          border-t
          border-white/10
          mt-10
          pt-6
          text-center
          text-gray-400
          "
        >
          © 2026 NextGenEdu.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}