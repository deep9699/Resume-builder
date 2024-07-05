import React, { useContext, useState } from "react";
import { Button } from "antd";
import ResumeDoc from "./resume/resumeDoc";
import { BuilderContext } from "@/contexts/builderContext";

function Preview() {
  const [downloading, setDownloading] = useState(false);

  const { fullName } = useContext(BuilderContext);

  const downloadPDF = async () => {
    setDownloading(true);
    const htmlElement = document.getElementById("resume-doc");
    const html = htmlElement.outerHTML;

    const response = await fetch("/api/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ html }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fullName + ".pdf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    setDownloading(false);
  };

  return (
    <div className={"previewDoc"}>
      <div className="full-width text-right">
        <Button onClick={downloadPDF} loading={downloading}>
          {downloading ? "Downloading" : "Download PDF"}
        </Button>
      </div>
      <div id="resume-doc">
        <ResumeDoc />
      </div>
    </div>
  );
}

export default Preview;
