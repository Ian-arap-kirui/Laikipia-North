import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const ServiceDisbursments = ({ services }) => {
  const disbursments = services
    .flatMap((service) => service.disbursments)
    .filter((disbursment) => disbursment !== undefined);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "year", headerName: "Year", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1, type: "number" },
  ];
  return (
    <div>
      <DataGrid
        rows={disbursments}
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
  );
};

export default ServiceDisbursments;
