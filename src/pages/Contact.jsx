import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-400 mt-4">
            Get expert admission guidance
            from our counsellors.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="glass p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Phone />

                <div>

                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91 XXXXX XXXXX
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    info@nextgenedu.co
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <MapPin />

                <div>

                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p className="text-gray-400">
                    Noida, Uttar Pradesh
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock />

                <div>

                  <h3 className="font-semibold">
                    Working Hours
                  </h3>

                  <p className="text-gray-400">
                    Mon - Sat | 9 AM - 7 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="glass p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-8">
              Request A Callback
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                "
              />

              <input
                type="text"
                placeholder="Interested Course"
                className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                "
              />

              <textarea
                rows="5"
                placeholder="Message"
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
                "
              >
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}