import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className="dropdown nav-arrow ">
      <div className="relative flex items-center pr-4">
       
          {title} <i className="arrow"></i>
      
        <div className="nav-arrow-inner"></div>
      </div>
      <div className="dropdown-content">
        <div className="header">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default MenuDropdown;
