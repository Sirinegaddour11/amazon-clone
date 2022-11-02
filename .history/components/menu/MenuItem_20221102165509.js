import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop hidden lg:inline-flex ">
      <div className="flex pr-2 pl-2 pt-0 pb-4 ">
        <p className="link ">{title}</p>
      </div>
      <div className="drop-content ">{children}</div>
    </div>
  );
};

export default MenuItem;
