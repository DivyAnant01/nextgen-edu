export default function Step2({
  formData,
  setFormData,
}) {
  return (
    <div className="space-y-4">

      <input
        type="text"
        placeholder="University Name"
        value={formData.university}
        onChange={(e) =>
          setFormData({
            ...formData,
            university:
              e.target.value,
          })
        }
        className="
        w-full
        p-4
        rounded-xl
        bg-black/20
        "
      />

      <select
        value={formData.course}
        onChange={(e) =>
          setFormData({
            ...formData,
            course:
              e.target.value,
          })
        }
        className="
        w-full
        p-4
        rounded-xl
        bg-black/20
        "
      >
        <option value="">
          Select Course
        </option>

        <option>MBA</option>
        <option>MCA</option>
        <option>BBA</option>
        <option>BCA</option>
      </select>

      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            city: e.target.value,
          })
        }
        className="
        w-full
        p-4
        rounded-xl
        bg-black/20
        "
      />

    </div>
  );
}