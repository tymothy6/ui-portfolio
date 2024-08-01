"use client";

import * as React from "react";
import { useTheme } from "next-themes";

const IubendaLink = () => {
  React.useEffect(() => {
    const loadScript = () => {
      if (document.querySelector("#iubenda")) {
        return;
      }

      const script = document.createElement("script");
      script.id = "iubenda";
      script.src = "https://cdn.iubenda.com/iubenda.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  const { resolvedTheme } = useTheme();

  const styleClass =
    resolvedTheme === "dark" ? "iubenda-black" : "iubenda-white";

  return (
    <div className="mx-4 flex flex-wrap gap-2">
      <a
        href="https://www.iubenda.com/privacy-policy/10254261"
        className={`${styleClass} iubenda-noiframe iubenda-embed iubenda-noiframe`}
        title="Privacy Policy"
      >
        Privacy Policy
      </a>

      <a
        href="https://www.iubenda.com/privacy-policy/10254261/cookie-policy"
        className={`${styleClass} iubenda-noiframe iubenda-embed iubenda-noiframe`}
        title="Cookie Policy"
      >
        Cookie Policy
      </a>
    </div>
  );
};

export { IubendaLink };
