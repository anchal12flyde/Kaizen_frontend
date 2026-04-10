// Your existing fetchSiteContent function
export const fetchSiteContent = async () => {
  try {
    const res = await fetch(
      "https://brandspine-server.onrender.com/api/brand-config/site-config/export",
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        cache: "no-store",
      },
    );

    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (err) {
    console.error("API failed, using static JSON");
    return null;
  }
};

// Add contact form API functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const contactAPI = {
  // Submit contact form
  submitContactForm: async (formData, description) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData, description }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },

};