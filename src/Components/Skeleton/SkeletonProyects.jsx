import React from "react";

const SkeletonProyects = () => {
  return (
    <>
      <li className="flex flex-col items-center">
        <div
          className="skeleton rounded"
          style={{ width: "450px", height: "200px" }}
        ></div>
        <div
          className="my-4 skeleton rounded"
          style={{ width: "100%", height: "30px" }}
        ></div>
        <div
          className="skeleton rounded"
          style={{ width: "100%", height: "30px" }}
        ></div>
      </li>
      <li className="flex flex-col items-center">
        <div
          className="skeleton rounded"
          style={{ width: "450px", height: "200px" }}
        ></div>
        <div
          className="my-4 skeleton rounded"
          style={{ width: "100%", height: "30px" }}
        ></div>
        <div
          className="skeleton rounded"
          style={{ width: "100%", height: "30px" }}
        ></div>
      </li>
    </>
  );
};

export default SkeletonProyects;
