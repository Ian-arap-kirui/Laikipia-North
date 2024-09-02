import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./tables.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

// Utility function to encode and sanitize project names for URLs
const encodeProjectName = (name) => {
  if (!name) return ""; // Return an empty string if the name is null or undefined

  // Replace spaces with hyphens
  const sanitized = name.replace(/\s+/g, "-");
  // Encode special characters
  return encodeURIComponent(sanitized);
};

// Robust comparator to sort financial years, handling null or undefined values
const financialYearComparator = (a, b) => {
  if (!a) return 1; // If 'a' is null or undefined, treat it as greater (it will appear later in the list)
  if (!b) return -1; // If 'b' is null or undefined, treat it as smaller (it will appear earlier in the list)

  const [startYearA] = a.split("/");
  const [startYearB] = b.split("/");

  return Number(startYearA) - Number(startYearB);
};

const DataTable = ({ columns, data, slug, title, description }) => {
  // Convert data object to an array if needed
  const dataArray = Array.isArray(data)
    ? data
    : Object.entries(data).map(([key, value]) => ({ id: key, ...value }));

  // Omit the first four items from the data array
  const dataArrayWithoutFirstFourItems = dataArray.slice(4);

  // Include action column only if provided
  const columnsWithOptionalAction = slug
    ? [
        ...columns,
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => (
            <div className="action">
              <Link
                to={`/${slug}/${encodeProjectName(params.row.projectName)}`} // Encode and sanitize project name for URL
              >
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>
          ),
        },
      ]
    : columns;

  // Find the index of the financialYear column
  const financialYearColumnIndex = columnsWithOptionalAction.findIndex(
    (column) => column.field === "financialYear"
  );

  // If financialYear column is present, add custom comparator
  if (financialYearColumnIndex !== -1) {
    columnsWithOptionalAction[financialYearColumnIndex].sortComparator =
      financialYearComparator;
  }

  return (
    <div className="dataTable">
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
      <DataGrid
        className="dataGrid"
        rows={dataArrayWithoutFirstFourItems} // Pass the modified array
        columns={columnsWithOptionalAction}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
          sorting: {
            sortModel: [{ field: "financialYear", sort: "asc" }], // Sort by financialYear in ascending order
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

export default DataTable;
