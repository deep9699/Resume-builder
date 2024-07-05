import React, { useContext } from "react";
import { BuilderContext } from "@/contexts/builderContext";

function Header() {
  const { fullName, phoneNumber, emailAddress, linkedInLink, portfolioLink } =
    useContext(BuilderContext);

  const infoArr = [
    { text: phoneNumber },
    { text: emailAddress, type: "mail" },
    { text: "LinkedIn", type: "link", link: linkedInLink },
    { text: "Portfolio", type: "link", link: portfolioLink },
  ];

  const filterArr = infoArr.filter(
    ({ text, type, link }) => text && (type == "link" ? link : true)
  );

  return (
    <div>
      <div className={"center"}>
        <span className={"name"}>{fullName}</span>
      </div>
      <div className={`center space-top short`}>
        {filterArr.map(({ text, type, link }, index) => {
          if (!type) {
            return (
              <>
                <span className={"details"}>{text}</span>
                {index != filterArr.length - 1 && (
                  <span className="space-left space-right short"> | </span>
                )}
              </>
            );
          } else if (type == "mail") {
            return (
              <>
                <span
                  className={"details"}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(`mailto:${emailAddress}`);
                  }}
                >
                  {emailAddress}
                </span>
                {index != filterArr.length - 1 && (
                  <span className="space-left space-right short"> | </span>
                )}
              </>
            );
          } else if (type == "link") {
            return (
              <>
                <a
                  className={"details"}
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "black",
                  }}
                  href={link}
                  target="_blank"
                >
                  {text}
                </a>
                {index != filterArr.length - 1 && (
                  <span className="space-left space-right short"> | </span>
                )}
              </>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Header;
