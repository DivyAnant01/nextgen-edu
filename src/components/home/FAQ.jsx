import { useState } from "react";

const faqs = [
  {
    question:
      "Is counselling completely free?",
    answer:
      "Yes. NextGenEdu provides free admission counselling and university guidance to students.",
  },

  {
    question:
      "How can I apply for admission?",
    answer:
      "Simply submit your enquiry, connect with our counsellor, choose a university and complete the admission process.",
  },

  {
    question:
      "Which universities are available?",
    answer:
      "We work with top UGC-approved universities across India offering Online, Distance and Regular programs.",
  },

  {
    question:
      "Do you provide placement guidance?",
    answer:
      "Yes. We help students choose career-oriented programs and universities with strong placement support.",
  },

  {
    question:
      "Can I apply from anywhere in India?",
    answer:
      "Yes. Our admission process can be completed online from anywhere in India.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] =
    useState(null);

  return (
    <section className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4">
            Find answers to the most
            common admission and
            counselling queries.
          </p>

        </div>

        <div className="space-y-4">

          {faqs.map(
            (faq, index) => (

              <div
                key={index}
                className="
                glass
                rounded-3xl
                overflow-hidden
                "
              >

                <button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index
                        ? null
                        : index
                    )
                  }
                  className="
                  w-full
                  text-left
                  p-6
                  flex
                  justify-between
                  items-center
                  "
                >

                  <span className="font-semibold">
                    {faq.question}
                  </span>

                  <span>
                    {openIndex === index
                      ? "−"
                      : "+"}
                  </span>

                </button>

                {openIndex === index && (

                  <div
                    className="
                    px-6
                    pb-6
                    text-gray-400
                    "
                  >
                    {faq.answer}
                  </div>

                )}

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}