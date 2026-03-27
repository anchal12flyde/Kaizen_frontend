"use client";

import { createContext, useContext } from "react";

const SiteContentContext = createContext(null);

export const SiteContentProvider = ({ children, value }) => {
  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = () => {
  return useContext(SiteContentContext);
};
