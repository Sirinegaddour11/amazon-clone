import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop ">
      <div className="flex ">
        <p className="link">
          {title}
          <i class="arrow down "></i>
        </p>
      </div>
      <div className="drop-content :after left: 200px ;">
        <div class="header">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MenuItem;
