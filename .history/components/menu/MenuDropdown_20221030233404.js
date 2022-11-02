import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className=" dropdown nav-arrow ">
      <div className="relative">
        <div className="flex items-center space-x-4">
          {title}
          <div class="arrow  "></div>
        </div>
        <div className="nav-arrow-inner"></div>
      </div>
      <div className="dropdown-content ">
        <div class="header">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default MenuDropdown;
