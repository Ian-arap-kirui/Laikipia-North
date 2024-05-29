import DataTable from "../../components/Tables/DataTable";
import "./ServicePageStyles/serviceAllocations.css";
const ServiceAllocations = ({ services }) => {
  const allocations = services.flatMap((service) => service.allocations);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "year", headerName: "Year", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1, type: "number" },
  ];

  return (
    <section className="serviceAllocation">
      <h4></h4>
      <DataTable
        columns={columns}
        data={allocations}
        title={"Allocations"}
        description={"from 2014 to 2024"}
      />
    </section>
  );
};

export default ServiceAllocations;
