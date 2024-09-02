import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DataTable from "../../components/Tables/DataTable";

const ServiceProposals = ({ services }) => {
  const proposals = services
    .flatMap((service) => service.proposals)
    .filter((proposal) => proposal !== undefined);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "filename", headerName: "Filename", width: 300 },
    { field: "upload_date", headerName: "Uploaded on", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];
  return (
    <div>
      <DataGrid
        rows={proposals}
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

export default ServiceProposals;
