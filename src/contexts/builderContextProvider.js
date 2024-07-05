import React, { useState } from "react";
import { BuilderContext } from "./builderContext";

function BuilderContextProvider({ children }) {
  const [showBuilder, setShowBuilder] = useState(true);
  const [fullName, setFullName] = useState("DEEP BHAVSAR");
  const [phoneNumber, setPhoneNumber] = useState("+91 8128240106");
  const [emailAddress, setEmailAddress] = useState("deepbhavsar9@gmail.com");
  const [linkedInLink, setLinkedInLink] = useState(
    "https://www.linkedin.com/in/deep-bhavsar-690837171/"
  );
  const [portfolioLink, setPortfolioLink] = useState("");
  const [summaryTitle, setSummaryTitle] = useState("SUMMARY");
  const [summaryDesc, setSummaryDesc] = useState(
    "Frontend Developer with over 3+ years of experience specializing in React, Next.js, and Angular2+. Proven track record of delivering high-quality, user-centric web applications. Possess foundational knowledge in Node.js (Express) and Java Spring Boot, enabling seamless full-stack collaboration. Adept at working in dynamic environments and committed to continuous learning and improvement."
  );
  const [skillTitle, setSkillTitle] = useState("TECHNICAL SKILLS");
  const [skillsArr, setSkillsArr] = useState([
    {
      label: "Frontend",
      skills: ["Javascript", "ReactJs", "NextJs", "Redux", "Angular 2+"],
    },
    {
      label: "Backend",
      skills: ["NodeJs(Express)", "Java Spring Boot"],
    },
    {
      label: "Database",
      skills: ["mySql", "PostgreSQL", "MongoDB"],
    },
  ]);

  const [experienceTitle, setExperienceTitle] = useState("EXPERIENCE");
  const [experiencesArr, setExperiencesArr] = useState([
    {
      companyName: "Kristal.AI",
      position: "Software Engineer",
      startDate: "Jun 2021",
      endDate: "Present",
      roles: [
        "Contributed as a Front-End Engineer, specializing in React.js and Next.js, delivering highquality web applications with responsive user interfaces.",
        "Played a pivotal role in a successful project migration, transitioning from Angular.js to Next.js, demonstrating adaptability and proficiency in modern frameworks.",
        "Collaborate with UX/UI designers and back-end developers to translate design concepts into functional and visually appealing interfaces.",
        "Utilized Webflow for building static websites, showcasing versatility in adopting various tools for different project requirements",
        "Designed and developed RESTful web services using Spring and Spring Boot frameworks, enabling efficient communication between front-end applications and backend systems.",
        "Developed reusable components using GitHub submodules, fostering efficiency by incorporating shared features across multiple projects.",
        "Hands-on experience with Docusaurus for documentation and blog projects, showcasing proficiency in creating effective and user-friendly content platforms.",
        "Employ Git for version control, actively participating in code reviews and ensuring codebase integrity.",
        "Actively participate in Agile development processes, contributing to sprint planning, daily stand-ups, and retrospective meetings.",
        "Proven expertise in automation testing, including unit testing, to ensure comprehensive code quality and efficient project delivery.",
      ],
    },
  ]);

  const [educationTitle, setEducationTitle] = useState("EDUCATION");
  const [educationArr, setEducationArr] = useState([
    {
      degree: "Master of Science in Information and Technology",
      university:
        "Dhirubhai Ambani Institute of Information and Communication Technology",
      startYear: "2019",
      endYear: "2021",
    },
    {
      degree: "Bachelor of Science in Information and Technology",
      university:
        "K. S. School of Business Management & Information Technology",
      startYear: "2016",
      endYear: "2019",
    },
  ]);

  return (
    <BuilderContext.Provider
      value={{
        showBuilder,
        setShowBuilder,
        fullName,
        setFullName,
        phoneNumber,
        setPhoneNumber,
        emailAddress,
        setEmailAddress,
        linkedInLink,
        setLinkedInLink,
        portfolioLink,
        setPortfolioLink,
        summaryTitle,
        setSummaryTitle,
        summaryDesc,
        setSummaryDesc,
        skillTitle,
        setSkillTitle,
        skillsArr,
        setSkillsArr,
        experienceTitle,
        setExperienceTitle,
        experiencesArr,
        setExperiencesArr,
        educationTitle,
        setEducationTitle,
        educationArr,
        setEducationArr,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

export default BuilderContextProvider;
