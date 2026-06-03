export default function Step1({
  formData,
  setFormData,
}) {
  return (
    <div className="space-y-4">

      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
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
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
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
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
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