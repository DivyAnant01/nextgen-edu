import Modal from "../common/Modal";

export default function ApplyNowModal({
  isOpen,
  onClose,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <h2 className="text-3xl font-bold mb-6">
        Apply Now
      </h2>

      <div className="space-y-4">

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
          type="text"
          placeholder="Phone Number"
          className="
          w-full
          p-4
          rounded-xl
          bg-black/20
          "
        />

        <input
          type="email"
          placeholder="Email"
          className="
          w-full
          p-4
          rounded-xl
          bg-black/20
          "
        />

        <button
          className="
          w-full
          bg-cyan-500
          py-4
          rounded-xl
          "
        >
          Submit Application
        </button>

      </div>
    </Modal>
  );
}