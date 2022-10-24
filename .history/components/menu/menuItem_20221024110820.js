import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop">
      <p className="link">
       <i class="arrow down"> {title}
        </i> 

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
