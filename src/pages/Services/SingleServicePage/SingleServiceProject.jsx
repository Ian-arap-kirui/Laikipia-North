import { useParams } from "react-router-dom";

const SingleServiceProject = () => {
  const { projectTitle } = useParams();
  return <div>{projectTitle}</div>;
};

export default SingleServiceProject;
