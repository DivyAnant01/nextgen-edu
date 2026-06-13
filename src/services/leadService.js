export const submitLead =
  async (leadData) => {
    console.log(
      "Lead Submitted:",
      leadData
    );

    return {
      success: true,
    };
  };