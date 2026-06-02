import Modal from "../common/Modal";

export default function QuickViewModal({
  university,
  isOpen,
  onClose,
}) {
  if (!university) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>

        <img
          src={
            university.banner ||
            university.image
          }
          alt={university.name}
          className="
          w-full
          h-56
          object-cover
          rounded-2xl
          "
        />

        <h2 className="text-3xl font-bold mt-6">
          {university.name}
        </h2>

        <p className="text-gray-400 mt-2">
          📍 {university.location}
        </p>

        <div className="flex gap-4 mt-4">

          <span>
            ⭐ {university.rating}
          </span>

          <span>
            ₹ {university.fees}
          </span>

        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">
            Overview
          </h3>

          <p className="text-gray-300">
            {university.overview}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">

          {university.approvals?.map(
            (approval) => (
              <span
                key={approval}
                className="
                px-3
                py-1
                rounded-full
                bg-cyan-500/20
                text-sm
                "
              >
                {approval}
              </span>
            )
          )}

        </div>

        <button
          className="
          w-full
          mt-8
          bg-cyan-500
          py-3
          rounded-xl
          "
        >
          Apply Now
        </button>

      </div>
    </Modal>
  );
}