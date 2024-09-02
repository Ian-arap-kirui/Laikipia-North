import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./tables.css";

// Utility function to convert string amounts to numbers for proper sorting and display
const parseAmount = (amount) => {
  if (!amount) return 0; // Handle null or undefined values gracefully
  return parseFloat(amount.replace(/,/g, "")); // Remove commas and convert to number
};

// Comparator to sort financial years, handling null or undefined values
const financialYearComparator = (a, b) => {
  if (!a) return 1;
  if (!b) return -1;

  const [startYearA] = a.split("/");
  const [startYearB] = b.split("/");

  return Number(startYearA) - Number(startYearB);
};

// DataTable component for displaying allocation data
const AllocationsDataTable = ({ data, title, description }) => {
  // Convert data object to an array if needed
  const dataArray = Array.isArray(data)
    ? data
    : Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
  console.log("Data array:", dataArray[0]); // Log data array to verify structure

  // Columns definition for the DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "year",
      headerName: "Year",
      flex: 1,
      sortComparator: financialYearComparator, // Custom comparator for financial years
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      type: "number",
      valueFormatter: (params) =>
        `$${parseAmount(params.value).toLocaleString()}`, // Format amount with commas and currency
      sortComparator: (v1, v2) => parseAmount(v1) - parseAmount(v2), // Custom comparator for amounts
    },
  ];

  return (
    <div className="dataTable">
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
      <DataGrid
        className="dataGrid"
        rows={dataArray}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
          sorting: {
            sortModel: [{ field: "year", sort: "asc" }], // Sort by year in ascending order
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

export default AllocationsDataTable;
