import React, { useState } from "react";
import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";
import RevealMotion from "../../../utils/RevealMotion";
import Btn from "./Button";

const techStack = [
  "Next JS",
  "React JS",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Bootstrap",
  "RTK Query",
  "Material UI",
  "Firebase",
  "Express JS",
  "MongoDB",
  "Mongoose",
  "Ant Design",
  "Radix UI",
  "Daisy UI",
  "React Router",
  "Tanstack Query",
  "Node JS"
];

const Project = () => {
  const [stackName, setStackName] = useState("");
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            {/* <RevealMotion>
              <h4>My All Projects</h4>
            </RevealMotion> */}
            {/* <RevealMotion>
              <h1>My All Projects</h1>
            </RevealMotion> */}
          </div>
          <div className="button-grid">
            {techStack?.map((stack, i) => (
              <Btn stackName={stackName} setStack={setStackName} key={i} title={stack} />
            ))}
          </div>

          <div className="content grid">
            {Portfolio_data.filter((data) => {
              if (!stackName) {
                return 1;
              } else {
                return data.stacks.includes(stackName);
              }
            }).map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                  subTitle={value.subTitle}
                  desc_one={value.desc_one}
                  desc_two={value.desc_two}
                  desc_three={value.desc_three}
                  desc_four={value.desc_four}
                  live_server={value.live_server}
                  client={value.client}
                  server={value.server}
                  stacks={value.stacks}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
