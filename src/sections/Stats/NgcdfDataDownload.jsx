import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faDownload } from "@fortawesome/free-solid-svg-icons";
import "./ngcdfDataDownload.css";

// File lives in public/downloads/ — served from the site root, never hashed
const FILE_URL = "/downloads/laikipia-North-PIS.xlsx";
const FILE_NAME = "Laikipia-North-NGCDF-Performance-Status-Tool.xlsx"; // name the visitor's browser saves it as
const LAST_UPDATED = "November 2026"; // ← edit whenever you replace the file
const FILE_VERSION = "2026-11"; // ← bump this when you replace the file (busts the cache)

const NgcdfDataDownload = () => (
  <section className="ngcdfDownload">
    <div className="ngcdfDownloadIcon">
      <FontAwesomeIcon icon={faFileExcel} />
    </div>

    <div className="ngcdfDownloadText">
      <h5>NG-CDF Performance &amp; Implementation Status Tool</h5>
      <p>
        The complete NG-CDF dataset for Laikipia North in one Excel workbook,
        including allocations, projects and their implementation status.
      </p>
      <span>
        Excel workbook (.xlsx)
        {LAST_UPDATED && ` • Updated ${LAST_UPDATED}`}
      </span>
    </div>

    <a
      className="primaryButton ngcdfDownloadBtn"
      href={`${FILE_URL}?v=${FILE_VERSION}`}
      download={FILE_NAME}
    >
      <FontAwesomeIcon icon={faDownload} /> Download
    </a>
  </section>
);

export default NgcdfDataDownload;