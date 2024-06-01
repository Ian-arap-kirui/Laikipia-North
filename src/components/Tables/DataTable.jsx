import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./tables.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const DataTable = ({ columns, data, slug, title, description }) => {
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${encodeURIComponent(params.row.name)}`}>
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      );
    },
  };

  // Check if 'img' field exists in columns, if not, add it
  const imgColumn = columns.find((col) => col.field === "img");
  const columnsWithImg = imgColumn
    ? columns
    : [
        ...columns,
        {
          field: "img",
          headerName: "Image",
          width: 150,
          renderCell: (params) => (
            <img src={params.row.img} alt="Project" style={{ width: 100 }} />
          ),
        },
      ];

  const rowsWithIds = data?.map((row, index) => ({
    id: index, // Assigning a unique id based on the index
    ...row,
  }));
  const columnsWithOptionalAction = slug
    ? [...columnsWithImg, actionColumn]
    : columns;

  return (
    <div className="dataTable">
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
      <DataGrid
        className="dataGrid"
        rows={rowsWithIds}
        columns={columnsWithOptionalAction}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
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
