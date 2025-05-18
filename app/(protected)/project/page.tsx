"use client";

import ProjectTheme1 from './theme-1';
import ProjectTheme2 from './theme-2';
import { TemplateSwitcher } from "../../../components/layout/template-switcher";
import { useState } from "react";

export default function ProjectPage() {
  const [activeTheme, setActiveTheme] = useState<"theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10">("theme-1");
  
  // Handle theme change
  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme as "theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6" | "theme-7" | "theme-8" | "theme-9" | "theme-10");
  };

  // Render the appropriate theme component based on activeTheme
  const renderTheme = () => {
    switch (activeTheme) {
      case "theme-1":
        return <ProjectTheme1 />;
      case "theme-2":
        return <ProjectTheme2 />;
      // Add other themes when they become available
      // case "theme-3":
      //   return <ProjectTheme3 />;
      // ...
      default:
        return <ProjectTheme1 />;
    }
  };

  return (
    <>
      <TemplateSwitcher onThemeChange={handleThemeChange} activeTheme={activeTheme} />
      {renderTheme()}
    </>
  );
}