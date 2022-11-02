import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className="relative dropdown nav-arrow   ">
      <div className="flex items-center pr-4">
        <div className="relative">
          {title}
          <i className="arrow"></i>
          <div className="nav-arrow-inner"></div>
        </div>
      </div>
      <div className="absolute dropdown-content">
        <div className="header">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default MenuDropdown;
