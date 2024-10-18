"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: English, Hindi</li>
        <li>Programming Languages: C++, C, Python, Java, JavaScript</li>
        <li>Frameworks: Node.js</li>
        <li>DataBases: Firebase, MySQL, MongoDB</li>
        <li>Tools: Git, Eclipse, Visual Studio Code</li>
        <li>Platform: Linux, Windows, AWS, Docker,Kubernetes</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Vellore Institute of Technology - B.Tech (Computer Science and
          Engineering)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>NPTEL Cloud Computing: Elite + Silver, Top 5% of candidates</li>
        <li>Introduction to Microsoft Excel - Coursera</li>
        <li>Bits and Bytes of Computer Networking - Coursera</li>
        <li>Introduction to Machine Learning - Kaggle</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            <p>
              Hi, I&apos;m Kritika Saini, a Computer Science Engineering student
              at Vellore Institute of Technology, graduating in June 2025. With
              a passion for technology and innovation, I have developed a strong
              foundation in software development, machine learning, cloud
              computing, and data analytics. My academic journey, combined with
              hands-on project experience, has honed my skills in multiple
              programming languages, including C++, Python, Java, and
              JavaScript, and I&apos;ve worked extensively with frameworks such
              as Spring Boot, FastAPI, and Node.js. With certifications in Java,
              cloud computing, and networking, I am constantly learning and
              improving my technical expertise. My goal is to continue pushing
              the boundaries of technology to solve real-world problems and make
              an impact.
            </p>
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
