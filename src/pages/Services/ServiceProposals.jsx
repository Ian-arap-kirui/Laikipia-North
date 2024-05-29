import DataTable from "../../components/Tables/DataTable";

const ServiceProposals = ({ services }) => {
  const proposals = services.flatMap((service) => service.proposals);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "filename", headerName: "Filename", width: 300 },
    { field: "upload_date", headerName: "Uploaded on", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];
  return (
    <div>
      <DataTable
        columns={columns}
        data={proposals}
        title={"Disbursments"}
        description={"from 2014 to 2024"}
      />
    </div>
  );
};

export default ServiceProposals;
