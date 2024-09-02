import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./ServicePageStyles/serviceAllocations.css";

const ServiceAllocations = ({ services }) => {
  // Flatten the allocations and filter out any undefined items
  const allocations = services
    .flatMap((service) => service.allocations)
    .filter((allocation) => allocation !== undefined);

  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    { field: "year", headerName: "Year", width: 200 },
    { field: "amount", headerName: "Amount", width: 200, type: "number" },
  ];

  return (
    <section className="serviceAllocation">
      <h4>Service Allocations</h4>
      <div>
        <DataGrid
          rows={allocations}
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
      </div>
    </section>
  );
};

export default ServiceAllocations;
