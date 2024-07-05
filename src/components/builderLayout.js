import React, { useContext, useState } from "react";
import Builder from "./builder";
import Preview from "./preview";

import { BuilderContext } from "@/contexts/builderContext";
import { Button } from "antd";

function BuilderLayout() {
  const { showBuilder, setShowBuilder } = useContext(BuilderContext);

  return (
    <div className="flex">
      {!showBuilder && (
        <>
          <Button
            onClick={() => {
              setShowBuilder(true);
            }}
          >
            Edit Information
          </Button>
        </>
      )}

      {showBuilder && (
        <div
          style={{
            width: "35%",
            overflow: "auto",
            height: "92vh",
          }}
        >
          <Builder />
        </div>
      )}

      <div
        style={{
          width: showBuilder ? "65%" : "100%",
          overflow: "auto",
          height: "92vh",
        }}
      >
        <Preview />
      </div>
    </div>
  );
}

export default BuilderLayout;
