import React from "react";

function MenuDropdown({ title, children }) {
  return (
*
      <div className=" dropdown nav-arrow ">
        <div className="relative ">
         <div className="flex items-center space-x-1">{title}<i className="arrow "></i></div>
          <div className="nav-arrow-inner"></div>
        </div>
        <div className="dropdown-content">
          <div className="header">
            <h2>{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MenuDropdown;
