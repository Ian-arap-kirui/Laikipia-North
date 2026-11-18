import React from "react";
import { useLocation } from "react-router-dom";
import DataTable from "../../components/Tables/DataTable";
import ProjectsGallery from "./ServiceProjectsGallery";

const ServiceProjects = ({ services }) => {
  const location = useLocation();
  const basePath = location.pathname.split("/")[2];

  // NGCDF shows the completed-projects gallery; other services keep the table
  if (basePath?.toLowerCase() === "ngcdf") {
    return (
      <section className="serviceProjects">
        <ProjectsGallery />
      </section>
    );
  }

  const projects = services.flatMap((service) =>
    service.projects.map((project, index) => ({
      ...project,
      id: index,
    }))
  );
  const columns = [
    { field: "projectName", headerName: "Project Name", width: 400 },
    { field: "implementationStatus", headerName: "Status", width: 150 },
    { field: "financialYear", headerName: "Financial Year", width: 250 },
    { field: "Ward", headerName: "Ward", width: 250 },
    { field: "amountAllocated", headerName: "Amount Allocated", width: 200 },
  ];

  return (
    <section className="serviceProjects">
      <DataTable
        columns={columns}
        data={projects}
        title={"Projects"}
        description={"Projects list"}
        slug={`services/${basePath}/projects`}
      />
    </section>
  );
};

export default ServiceProjects;