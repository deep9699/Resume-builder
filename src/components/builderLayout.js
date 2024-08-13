import React, { useContext, useState } from "react";
import Builder from "./builder";
import Preview from "./preview";

import { BuilderContext } from "@/contexts/builderContext";
import { Button } from "antd";

function BuilderLayout() {
  const { showBuilder, setShowBuilder } = useContext(BuilderContext);

  return (
    <div className="flex flex-wrap-mobile">
      {!showBuilder && (
        <div>
          <Button
            onClick={() => {
              setShowBuilder(true);
            }}
          >
            Edit Information
          </Button>
        </div>
      )}

      {showBuilder && (
        <div className="builder-drawer">
          <Builder />
        </div>
      )}

      <div
        style={{
          width: showBuilder ? "65%" : "100%",
          height: "90vh",
          overflowX: "hidden",
          overflowY: "auto",
        }}
        className={showBuilder ? "only-desktop" : ""}
      >
        <Preview />
      </div>
    </div>
  );
}

export default BuilderLayout;
