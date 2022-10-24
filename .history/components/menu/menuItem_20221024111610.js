import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop">
      <div className="flex ">
        <p className="link">
          {title}
          <i class="arrow down left-3 right-3 transition ease-in-out group-hover:delay-300 translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0"></i>
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
