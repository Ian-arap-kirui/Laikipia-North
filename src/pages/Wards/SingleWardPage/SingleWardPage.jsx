import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../../../sections/Hero/Hero";
import Content from "../../../sections/Content/Content";
import { projects } from "../../../utils/projectsData";

const SingleWardPage = () => {
  const { wardName } = useParams();

  const normalizedWardName = wardName.replace(/-/g, " ").trim().toLowerCase();

  const filteredProjects = projects.filter(
    (project) => project.Ward.trim().toLowerCase() === normalizedWardName
  );

  return (
    <>
      <Hero page={wardName} />
      <Content page={normalizedWardName} wardProjects={filteredProjects} />
    </>
  );
};

export default SingleWardPage;
