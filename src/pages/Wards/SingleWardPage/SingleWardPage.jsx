import React from "react";
import { useParams } from "react-router-dom";

const SingleWardPage = () => {
  const { wardName } = useParams();
  console.log(wardName);
  return <div> This is {wardName}</div>;
};

export default SingleWardPage;
