import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import DataTable from "../../components/Tables/DataTable";

const ServiceProjects = ({ services }) => {
  const location = useLocation(); // Hook to get the current location
  const basePath = location.pathname.split("/")[2]; // Adjust index based on your routing structure

  // Flatten and add an index-based id to each project
  const projects = services.flatMap((service) =>
    service.projects.map((project, index) => ({
      ...project,
      id: index, // Add an index-based id for each project
    }))
  );
  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
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
        slug={`services/${basePath}/projects`} // Dynamically set slug
      />
    </section>
  );
};

export default ServiceProjects;
