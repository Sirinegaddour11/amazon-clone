import React from 'react'

function MenuDropdown({ title, children }) {
  return (
    <div className="nav-arrow dropdown ">
      <div>
        <div className="relative">
          {title}
          <i class="arrow down "></i>
          <div className="nav-arrow-inner"></div>
        </div>
      </div>

      <div className="dropdown-content ">
        {/* <div className="c"></div> */}
        <div class="header">
          <h2>{title}</h2>
        </div>
        {chi}
      </div>
    </div>
  );
}

export default MenuDropdown
