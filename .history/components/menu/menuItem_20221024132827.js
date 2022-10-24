import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop  ">
      <div className="flex ">
        <p className="link">
          {title}
          <i class="arrow down "></i>
        </p>
      </div>

      <div className="drop-content ">
        <div className="c ">
          <div class="header">
            <h2>{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
