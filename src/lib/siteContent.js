
import staticData from "@/data/sitecontent.json";

let siteData = staticData;

export const getSiteContent = () => siteData;

export const setSiteContent = (data) => {
  siteData = data;
};
