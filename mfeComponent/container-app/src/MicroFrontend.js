import React, { useEffect } from "react";

function MicroFrontend({ name, host, accessToken }) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      
      window[`render${name}`](`${name}-container`, accessToken);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }
    
    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  });

  return <main id={`${name}-container`} />;
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;