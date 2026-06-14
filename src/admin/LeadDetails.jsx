import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function LeadDetails() {
  const { id } = useParams();

  const [lead, setLead] = useState(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] =
    useState(true);

  const [followUpText, setFollowUpText] =
    useState("");

  const [followUps, setFollowUps] =
    useState([]);

  useEffect(() => {
    try {
      const savedLeads =
        localStorage.getItem("leads");

      const leads = savedLeads
        ? JSON.parse(savedLeads)
        : [];

      const selectedLead =
        leads.find(
          (item) =>
            String(
              item?.id ||
                item?._id
            ) === String(id)
        );

      if (selectedLead) {
        setLead(selectedLead);

        setNotes(
          selectedLead.notes || ""
        );

        setFollowUps(
          selectedLead.followUps ||
            []
        );
      }

      setLoading(false);
    } catch (error) {
      console.error(
        "Error loading lead:",
        error
      );

      setLoading(false);
    }
  }, [id]);

  const saveNotes = () => {
    try {
      const savedLeads =
        localStorage.getItem("leads");

      const leads = savedLeads
        ? JSON.parse(savedLeads)
        : [];

      const updatedLeads =
        leads.map((item) =>
          String(
            item?.id ||
              item?._id
          ) === String(id)
            ? {
                ...item,
                notes,
              }
            : item
        );

      localStorage.setItem(
        "leads",
        JSON.stringify(
          updatedLeads
        )
      );

      setLead((prev) => ({
        ...prev,
        notes,
      }));

      toast.success(
        "Notes Saved Successfully"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to save notes"
      );
    }
  };

  const addFollowUp = () => {
    if (!followUpText.trim()) {
      toast.error(
        "Please enter follow up text"
      );
      return;
    }

    const newFollowUp = {
      id: Date.now(),
      text: followUpText,
      date: new Date().toLocaleString(),
    };

    const updatedFollowUps = [
      ...followUps,
      newFollowUp,
    ];

    try {
      const savedLeads = JSON.parse(
        localStorage.getItem(
          "leads"
        ) || "[]"
      );

      const updatedLeads =
        savedLeads.map((item) =>
          String(
            item?.id ||
              item?._id
          ) === String(id)
            ? {
                ...item,
                followUps:
                  updatedFollowUps,
              }
            : item
        );

      localStorage.setItem(
        "leads",
        JSON.stringify(
          updatedLeads
        )
      );

      setFollowUps(
        updatedFollowUps
      );

      setLead((prev) => ({
        ...prev,
        followUps:
          updatedFollowUps,
      }));

      setFollowUpText("");

      toast.success(
        "Follow Up Added"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to add follow up"
      );
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="p-8">
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">
            Lead Not Found
          </h2>

          <p className="text-gray-500">
            The requested lead does not
            exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8">
              {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">
          Lead Details
        </h1>

        <span className="px-4 py-2 rounded-xl bg-cyan-500 text-white font-medium">
          #
          {lead.id ||
            lead._id ||
            "N/A"}
        </span>
      </div>

      {/* Lead Information */}

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-lg rounded-3xl p-8">
        <div className="grid md:grid-cols-2 gap-6">
          <InfoField
            label="Full Name"
            value={lead.name || "-"}
          />

          <InfoField
            label="Email"
            value={lead.email || "-"}
          />

          <InfoField
            label="Phone"
            value={lead.phone || "-"}
          />

          <InfoField
            label="Course"
            value={
              lead.course || "-"
            }
          />

          <InfoField
            label="Status"
            value={
              lead.status || "New"
            }
          />

          <InfoField
            label="Assigned Counsellor"
            value={
              lead.assignedTo ||
              "Not Assigned"
            }
          />

          <InfoField
            label="Source"
            value={
              lead.source || "-"
            }
          />

          <InfoField
            label="Created At"
            value={
              lead.createdAt
                ? new Date(
                    lead.createdAt
                  ).toLocaleString()
                : "-"
            }
          />
        </div>
      </div>

      {/* Notes Section */}

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-lg rounded-3xl p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Notes
        </h2>

        <textarea
          rows={6}
          value={notes}
          onChange={(e) =>
            setNotes(
              e.target.value
            )
          }
          placeholder="Add notes here..."
          className="
            w-full
            p-4
            rounded-xl
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-500
          "
        />

        <button
          onClick={saveNotes}
          className="
            mt-4
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          Save Notes
        </button>
      </div>
            {/* Follow Up History */}

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-lg rounded-3xl p-8 mt-8">
        <h2 className="text-2xl font-bold mb-6">
          Follow Up History
        </h2>

        <div className="space-y-4 mb-6">
          {followUps.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No Follow Ups Yet
            </p>
          ) : (
            followUps
              .slice()
              .reverse()
              .map((item) => (
                <div
                  key={item.id}
                  className="
                    border-l-4
                    border-cyan-500
                    pl-4
                    py-3
                    bg-gray-50
                    dark:bg-slate-800
                    rounded-r-xl
                  "
                >
                  <p className="font-medium">
                    {item.text}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.date}
                  </p>
                </div>
              ))
          )}
        </div>

        <textarea
          rows={4}
          value={followUpText}
          onChange={(e) =>
            setFollowUpText(
              e.target.value
            )
          }
          placeholder="Add Follow Up..."
          className="
            w-full
            p-4
            rounded-xl
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
          "
        />

        <button
          onClick={addFollowUp}
          className="
            mt-4
            bg-green-500
            hover:bg-green-600
            text-white
            px-6
            py-3
            rounded-xl
            transition
          "
        >
          Add Follow Up
        </button>
      </div>
    </div>
  );
}

/* Reusable Field Component */

function InfoField({
  label,
  value,
}) {
  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        {label}
      </p>

      <h3 className="text-lg font-semibold break-words">
        {value}
      </h3>
    </div>
  );
}