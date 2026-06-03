export default function Step3({
  formData,
}) {
  return (
    <div className="space-y-4">

      <div className="glass p-4 rounded-xl">
        <p>
          <strong>Name:</strong>{" "}
          {formData.name}
        </p>
      </div>

      <div className="glass p-4 rounded-xl">
        <p>
          <strong>Email:</strong>{" "}
          {formData.email}
        </p>
      </div>

      <div className="glass p-4 rounded-xl">
        <p>
          <strong>Phone:</strong>{" "}
          {formData.phone}
        </p>
      </div>

      <div className="glass p-4 rounded-xl">
        <p>
          <strong>University:</strong>{" "}
          {formData.university}
        </p>
      </div>

      <div className="glass p-4 rounded-xl">
        <p>
          <strong>Course:</strong>{" "}
          {formData.course}
        </p>
      </div>

      <div className="glass p-4 rounded-xl">
        <p>
          <strong>City:</strong>{" "}
          {formData.city}
        </p>
      </div>

    </div>
  );
}