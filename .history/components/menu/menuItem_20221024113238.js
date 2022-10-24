import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop ">
      <div className="flex drop .drop-content::after">
        <p className="link">
          {title}
          <i class="arrow down "></i>
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