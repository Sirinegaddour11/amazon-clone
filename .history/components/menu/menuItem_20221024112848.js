import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop ">
      <div className="flex ">
        <p className="link ">
          {title}
          <div class="arrow down  "></div>
        </p>
      </div>
      <div className="drop-content">
        <div class="header">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MenuItem;
