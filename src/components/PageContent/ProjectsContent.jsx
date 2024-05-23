import dummyImg from "../../assets/business.jpg";
const ProjectsContent = () => {
  return (
    <>
      <div className="blogImageContainer">
        <h2>title</h2>
        <img src={dummyImg} alt="blog-image" loading="lazy" />
      </div>
      <div className="blogDetailsContainer">
        <div className="subSection">
          <div>
            <div class="details-text-area">
              <h3 class="mt-0">Find Doctors And Medical Facilities</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamc laboris nisi
                ut aliquip commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur commodo.
              </p>
              <h3>Health Benefits For Veterans</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamc laboris nisi
                ut aliquip commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur commodo.
              </p>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-30"></div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 mb-30"></div>
              </div>
            </div>
            <h3 class="mt-0">Help With Prescription Drug Costs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut
              aliquip commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              commodo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
