import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <>
      <div>
        <Outlet></Outlet>
      </div>
      <div>{topic}</div>
    </>
  );
};

export default Topic;
