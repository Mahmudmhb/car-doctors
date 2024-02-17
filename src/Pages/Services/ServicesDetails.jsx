import React from "react";
import { useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
      <h1>this is services details page</h1>
    </div>
  );
};

export default ServicesDetails;
