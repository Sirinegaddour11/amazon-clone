import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className="dropdown nav-arrow ">
      <div>
        <div className="relative">
          {title}
          <i class="arrow down "></i>
          <div className="nav-arrow-inner"></div>
        </div>
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
