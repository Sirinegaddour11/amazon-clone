import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className=" dropdown nav-arrow ">
      <di
      <div className="relative">
        {title}
        <i class="arrow  "></i>
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
