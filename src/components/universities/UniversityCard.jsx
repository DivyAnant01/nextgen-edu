import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function UniversityCard({
  university,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
glass
rounded-3xl
overflow-hidden
hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
transition-all
duration-300
"
    >
      <div className="relative">

  <Link
    to={`/universities/${university.slug}`}
  >
    <img
      src={
        university.banner ||
        university.image
      }
      alt={university.name}
      className="
      w-full
      h-60
      object-cover
      "
    />
  </Link>

  <div className="absolute top-4 left-4">
    <span
      className="
      bg-cyan-500
      px-3
      py-1
      rounded-full
      text-sm
      "
    >
      ⭐ {university.rating}
    </span>
  </div>

  <div className="absolute top-4 right-4">
    <span
      className="
      bg-green-500
      px-3
      py-1
      rounded-full
      text-sm
      "
    >
      UGC Approved
    </span>
  </div>

</div>

      <div className="p-6">
        <Link
          to={`/universities/${university.slug}`}
        >
          <h3 className="text-2xl font-bold hover:text-cyan-400 transition">
            {university.name}
          </h3>
        </Link>

        <p className="text-gray-400 mt-2">
  🎓 {university.courses?.length}
  {" "}Courses Available
</p>

        <div className="flex gap-4 mt-4">
          <div className="mt-3 text-green-400 text-sm">
  💼 Placement Assistance Available
</div>
          <span>
            ⭐ {university.rating}
          </span>

          <span>
            ₹{" "}
            {Number(
              university.fees
            ).toLocaleString()}
          </span>
        </div>

        {university.approvals && (
          
          <div className="flex flex-wrap gap-2 mt-4">
            {university.approvals
              .slice(0, 3)
              .map((approval) => (
                <span
                  key={approval}
                  className="
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-500/20
                  "
                >
                  {approval}
                </span>
              ))}
          </div>
        )}
        <p className="text-gray-400 text-sm mt-4">
  {university.overview?.slice(
    0,
    100
  )}...
</p>

        <div className="grid grid-cols-2 gap-3 mt-6">

          <Link
            to={`/universities/${university.slug}`}
            className="
            flex-1
            text-center
            bg-cyan-500
            px-4
            py-3
            rounded-xl
            hover:bg-cyan-600
            transition
            "
          >
            View Details
          </Link>

          <Link
            to="/contact"
            className="
            flex-1
            text-center
            border
            border-white/20
            px-4
            py-3
            rounded-xl
            hover:bg-white/10
            transition
            "
          >
            Apply Now
          </Link>

        </div>
      </div>
    </motion.div>
  );
}