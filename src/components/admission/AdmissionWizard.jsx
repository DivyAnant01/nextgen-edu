import { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {
  useApplications,
} from "../../context/ApplicationContext";

export default function AdmissionWizard() {

    const {
  addApplication,
} = useApplications();
  const [step, setStep] =
    useState(1);

  const [submitted,
    setSubmitted] =
    useState(false);

  const [formData,
    setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      university: "",
      course: "",
      city: "",
    });

  const nextStep = () =>
    setStep(step + 1);

  const prevStep = () =>
    setStep(step - 1);

  const handleSubmit = () => {

  addApplication(
    formData
  );

  setSubmitted(true);
};

  if (submitted) {
    return (
      <div
        className="
        text-center
        py-20
        "
      >
        <h1 className="text-4xl font-bold">
          Application Submitted 🎉
        </h1>

        <p className="mt-4">
          Our counsellor will contact
          you shortly.
        </p>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20">

      <div
        className="
        max-w-2xl
        mx-auto
        glass
        p-8
        rounded-3xl
        "
      >
        <h1
          className="
          text-4xl
          font-bold
          mb-8
          "
        >
          Admission Form
        </h1>

        <div className="mb-8">

          <div
            className="
            w-full
            bg-white/10
            h-2
            rounded-full
            "
          >
            <div
              style={{
                width:
                  step === 1
                    ? "33%"
                    : step === 2
                    ? "66%"
                    : "100%",
              }}
              className="
              bg-cyan-500
              h-2
              rounded-full
              "
            />
          </div>

        </div>

        {step === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {step === 3 && (
          <Step3
            formData={formData}
          />
        )}

        <div
          className="
          flex
          justify-between
          mt-8
          "
        >
          {step > 1 && (
            <button
              onClick={prevStep}
              className="
              px-6
              py-3
              rounded-xl
              bg-white/10
              "
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="
              ml-auto
              px-6
              py-3
              rounded-xl
              bg-cyan-500
              "
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="
              ml-auto
              px-6
              py-3
              rounded-xl
              bg-green-500
              "
            >
              Submit
            </button>
          )}
        </div>

      </div>
    </section>
  );
}