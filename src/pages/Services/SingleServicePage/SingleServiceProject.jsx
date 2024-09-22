import { useParams } from "react-router-dom";

const SingleServiceProject = ({projects}) => {
  console.log(projects)
  const { projectTitle } = useParams();
  return <div>{projectTitle}</div>;
};

export default SingleServiceProject;
