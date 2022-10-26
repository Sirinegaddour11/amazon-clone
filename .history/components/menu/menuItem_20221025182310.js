import React from "react";

const MenuItem = ({ title, children }) => {
  return (
<div className="drop dropdown">
            <div>
              <div className="relative">
                Prime Video
                <div class="arrow down "></div>
                <div className="after"></div>
              </div>
            </div>

            <div className="drop-content">
              <div class="header">
                <h2>Prime Video</h2>
              </div>
              <MenuCarousel />
            </div>
          </div>
  );
};

export default MenuItem;
