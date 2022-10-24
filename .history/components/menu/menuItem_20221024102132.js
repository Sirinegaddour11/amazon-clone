import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop">
      <p className="link">
        {title}
        {/* <i class="arrow down"></i>  */}

        <div class="arrow bounce">
          <a class="fa fa-arrow-down fa-2x" href="#"></a>
        </div>
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
