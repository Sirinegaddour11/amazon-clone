import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop dropdown">
      <div>
        <div className="relative">
          {title}
          <div class="arrow down "></div>
          <div className="after"></div>
        </div>
      </div>

      <div className="drop-content">
        <div class="header">
          <h2>{title}</h2>
        </div>
        {ch}
      </div>
    </div>
  );
};

export default MenuItem;
