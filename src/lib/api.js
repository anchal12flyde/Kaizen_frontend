
export const fetchSiteContent = async () => {
  try {
    const res = await fetch(
      "https://brandspine-server.onrender.com/api/brand-config/site-config/export",
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // your key
        },
        cache: "no-store", // always fresh
      },
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API failed, using static JSON");
    return null;
  }
};
