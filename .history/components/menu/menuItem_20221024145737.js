import React from "react";

const MenuItem = ({ title, children }) => {
  return (
    <div className="drop  ">
      <div className="flex ">
        <p className="cursor-pointer ">
          {title}
          
        </p>
      </div>

      <div className="drop-content ">
        {/* <div className="a"></div> */}
        {/* <div class="header">
          <h2>{title}</h2>
        </div> */}
        {children}
      </div>
    </div>
  );
};

export default MenuItem;