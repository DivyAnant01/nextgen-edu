export const submitLead = (leadData) => {
  const existingLeads =
    JSON.parse(
      localStorage.getItem("leads")
    ) || [];

  const newLead = {
    id: Date.now(),
    ...leadData,
    status: "New",
    assignedTo: "",
    createdAt:
      new Date().toLocaleString(),
  };

  existingLeads.push(newLead);

  localStorage.setItem(
    "leads",
    JSON.stringify(existingLeads)
  );

  return {
    success: true,
  };
};