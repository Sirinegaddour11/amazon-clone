import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className="dropdown nav-arrow ">
      <div className="relative ">
        <div className="flex items-center ">
         <div> {title} </div> <di className="arrow"></di>
        </div>
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
