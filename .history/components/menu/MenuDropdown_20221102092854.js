import React from "react";

function MenuDropdown({ title, children }) {
  return (
    
    <div className=" dropdown nav-arrow ">
      <div className="relative ">
        {title}
        <i className="arrow "></i>
        <div className="nav-arrow-inner -top-3"></div>
      </div>
      <div className="dropdown-content ">
        {/* <div class="header">
          <h2>{title}</h2>
        </div> */}
        {children}
      </div>
    </div>
  );
}

export default MenuDropdown;