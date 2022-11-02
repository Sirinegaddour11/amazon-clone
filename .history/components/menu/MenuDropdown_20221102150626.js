import React from "react";

function MenuDropdown({ title, children }) {
  return (
    <div className="dropdown nav-arrow   ">
      <div className="flex items-center pr-4">
        <div className="relative top-2/4 ">
          {title}
          {/* <i className="arrow"></i> */}

          <svg id="arrow">
            <polygon
              class="arrow-top"
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            />
            <polygon
              class="arrow-middle"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              class="arrow-bottom"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
          <div className="nav-arrow-inner"></div>
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
