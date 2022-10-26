import React from 'react'

function MenuDropdown({ title, children }) {
  return (
    <div className="nav-arrow dropdown ">
      <div>
        <div className="relative">
          Today s Deals
          <i class="arrow down "></i>
          <div className="nav-arrow-inner"></div>
        </div>
      </div>

      <div className="dropdown-content ">
        {/* <div className="c"></div> */}
        <div class="header">
          <h2>Today s Deals</h2>
        </div>
        <MenuProduct />
      </div>
    </div>
  );
}

export default MenuDropdown
