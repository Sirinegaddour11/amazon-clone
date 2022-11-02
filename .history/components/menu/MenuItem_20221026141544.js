import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop hidden lg:inline-flex ">
      <div className="flex ">
        <p className="link ">{title}</p>
      </div>
      <div className="drop-content ">{children}</div>
    </div>
  );
};

export default MenuItem;
