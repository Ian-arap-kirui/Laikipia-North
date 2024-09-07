import React from "react";
import SideBar from "../blogContent/SideBar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";

const WardContent = ({ wardProjects }) => {
  const location = useLocation();

  // Function to extract the ward name from the URL
  const getWardName = () => {
    const pathParts = location.pathname.split("/"); // Split by "/"
    const wardNameWithHyphen = pathParts[pathParts.length - 1]; // Get the last part, e.g., 'Sosian-Ward'
    const wardName = wardNameWithHyphen.replace(/-/g, " "); // Replace hyphens with spaces
    return wardName;
  };

  const wardName = getWardName();

  // Function to get a description based on the ward name
  const getWardDescription = (wardName) => {
    switch (wardName) {
      case "Sosian Ward":
        return "Sosian Ward has seen significant development in recent years, including educational and infrastructural projects aimed at benefiting the local community. Projects like the construction of classrooms and water resources are some of the highlights.";
      case "Milimani Ward":
        return "Milimani Ward focuses heavily on healthcare and road infrastructure projects to improve access to essential services. Ongoing projects include building healthcare facilities and improving roads.";
      case "Kilele Ward":
        return "Kilele Ward is prioritizing environmental sustainability and clean water projects. Recent developments include solar-powered water pumps and forest conservation efforts.";
      case "Lemelepo Ward":
        return "Lemelepo Ward is centered around agricultural development and community support projects. Recent efforts include irrigation systems for local farms and cooperative societies for small-scale farmers.";
      default:
        return "This ward is undergoing a variety of development projects aimed at improving the local infrastructure, education, and healthcare systems.";
    }
  };

  const wardDescription = getWardDescription(wardName);

  const columns = [
    { field: "projectName", headerName: "Project Name", width: 400 },
    { field: "implementationStatus", headerName: "Status", width: 150 },
    { field: "financialYear", headerName: "Financial Year", width: 250 },
    { field: "Ward", headerName: "Ward", width: 250 },
    { field: "amountAllocated", headerName: "Amount Allocated", width: 200 },
  ];

  // Map through the wardProjects data and format it if needed
  const formattedProjects = wardProjects.map((project, index) => ({
    id: index + 1, // Add a unique id for each row
    projectName: project.projectName.trim(),
    implementationStatus: project.implementationStatus.trim(),
    financialYear: project.financialYear.trim(),
    Ward: project.Ward.trim(),
    amountAllocated: project.amountAllocated.trim(),
  }));

  return (
    <>
      <h3>{wardName}</h3>
      <p>{wardDescription}</p>
      <DataGrid
        rows={formattedProjects}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </>
  );
};

export default WardContent;
