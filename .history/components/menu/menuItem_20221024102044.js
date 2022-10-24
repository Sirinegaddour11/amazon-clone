import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop">
      <p className="link">
        {title} <i class="arrow arrow bounce"></i>{" "}
        <a class="fa fa-arrow-down fa-2x" href="#"></a>
      </p>
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
