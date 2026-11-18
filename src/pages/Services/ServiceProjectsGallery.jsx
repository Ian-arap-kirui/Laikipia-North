import React, { useEffect, useMemo, useState } from "react";
import { completedProjects } from "../../utils/completedProjects";
import "./ServicePageStyles/serviceProjectsGallery.css";

const ServiceProjectsGallery = () => {
  const [ward, setWard] = useState("All");
  const [active, setActive] = useState(null);

  const wards = useMemo(
    () => [
      "All",
      ...new Set(completedProjects.map((p) => p.ward).filter(Boolean)),
    ],
    []
  );

  const visible =
    ward === "All"
      ? completedProjects
      : completedProjects.filter((p) => p.ward === ward);

  // Close the enlarged view with the Escape key
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="projectsGallery">
      <div className="projectsGalleryHeader">
        <h5>Completed Projects</h5>
        <span>
          {visible.length} project{visible.length !== 1 && "s"}
        </span>
      </div>

      {wards.length > 2 && (
        <div className="projectsFilters">
          {wards.map((w) => (
            <button
              key={w}
              type="button"
              className={w === ward ? "active" : ""}
              onClick={() => setWard(w)}
            >
              {w}
            </button>
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <p>No completed projects to show yet.</p>
      ) : (
        <div className="projectsGrid">
          {visible.map((p) => (
            <button
              key={p.id}
              type="button"
              className="projectCard"
              onClick={() => setActive(p)}
              aria-label={`View ${p.projectName}`}
            >
              <img src={p.img} alt={p.projectName} loading="lazy" />
              <span className="projectBadge">Completed</span>
              <span className="projectCaption">
                <strong>{p.projectName}</strong>
                <span className="projectMeta">
                  {[p.financialYear].filter(Boolean).join(" • ")}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}

      {active && (
        <div
          className="projectLightbox"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="projectLightboxClose"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <div
            className="projectLightboxContent"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={active.img} alt={active.projectName} />
            <div className="projectLightboxText">
              <h5>{active.projectName}</h5>
              <span>
                {[ active.financialYear].filter(Boolean).join(" • ")}
              </span>
              {active.description && <p>{active.description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceProjectsGallery;