import DataTable from "../../components/Tables/DataTable";

const ServiceProjects = ({ services }) => {
  const projects = services.flatMap((service) => service.projects);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // { field: "img", headerName: "Project Image", width: 200 },
    { field: "name", headerName: "Project Name", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "year", headerName: "Financial Year", width: 150 },
  ];
  return (
    <section className="serviceProjects">
      {" "}
      <DataTable
        columns={columns}
        data={projects}
        title={"Projects"}
        description={"Projects list"}
        slug={"services/NGCDF/projects"}
      />
    </section>
  );
};

export default ServiceProjects;
