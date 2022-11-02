import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className=" dropdown nav-arrow ">
      <div className="relative top-[16px] ">
        {title}
        <i className="arrow "></i>
        <div className="nav-arrow-inner "></div>
      </div>
      <div className="dropdown-content top-[108px] ">
        {/* <div class="header">
          <h2>{title}</h2>
        </div> */}
        {children}
      </div>
    </div>
  );
}

export default MenuDropdown;
