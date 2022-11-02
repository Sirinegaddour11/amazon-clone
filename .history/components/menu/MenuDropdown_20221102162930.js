import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className=" dropdown nav-arrow   ">
      <div className="flex items-center pr-4">
        <div className="relative">
          <p>
            {title}
            <div className="nav-arrow-inner"></div>
          </p>
          <i className="arrow"></i>
        </div>
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
