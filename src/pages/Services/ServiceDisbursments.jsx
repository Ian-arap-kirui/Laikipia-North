import DataTable from "../../components/Tables/DataTable";

const ServiceDisbursments = ({ services }) => {
  const disbursments = services.flatMap((service) => service.disbursments);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "year", headerName: "Year", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1, type: "number" },
  ];
  return (
    <div>
      <DataTable
        columns={columns}
        data={disbursments}
        title={"Disbursments"}
        description={"from 2014 to 2024"}
      />
    </div>
  );
};

export default ServiceDisbursments;
